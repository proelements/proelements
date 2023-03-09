<?php
namespace ElementorPro\Modules\Forms\Submissions\Database;

use Elementor\Core\Base\Base_Object;
use ElementorPro\Plugin;
use Elementor\Core\Utils\Collection;
use Exception;
use ElementorPro\Modules\Forms\Classes\Action_Base;
use ElementorPro\Modules\Forms\Submissions\Database\Repositories\Form_Snapshot_Repository;

class Query extends Base_Object {
	const STATUS_NEW = 'new';
	const STATUS_TRASH = 'trash';

	const ACTIONS_LOG_STATUS_SUCCESS = 'success';
	const ACTIONS_LOG_STATUS_FAILED = 'failed';

	const TYPE_SUBMISSION = 'submission';

	/**
	 * @var Query
	 */
	private static $instance = null;

	const E_SUBMISSIONS_ACTIONS_LOG = 'e_submissions_actions_log';
	const E_SUBMISSIONS_VALUES = 'e_submissions_values';
	const E_SUBMISSIONS = 'e_submissions';

	/**
	 * @var \wpdb
	 */
	private $wpdb;

	/**
	 * @var string
	 */
	private $table_submissions;

	/**
	 * @var string
	 */
	private $table_submissions_values;

	/**
	 * @var string
	 */
	private $table_submissions_actions_log;

	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new Query();
		}

		return self::$instance;
	}

	public function get_submissions( $args = [] ) {
		$args = wp_parse_args( $args, [
			'page' => 1,
			'per_page' => 10,
			'filters' => [],
			'order' => [],
			'with_meta' => false,
			'with_form_fields' => false,
		] );

		$page = $args['page'];
		$per_page = $args['per_page'];
		$filters = $args['filters'];
		$order = $args['order'];
		$with_meta = $args['with_meta'];
		$with_form_fields = $args['with_form_fields'];

		$result = [
			'data' => [],
			'meta' => [],
		];

		$where_sql = $this->apply_filter( $filters );
		$order_sql = '';

		$total = (int) $this->wpdb->get_var("SELECT COUNT(*) FROM `{$this->get_table_submissions()}` t_submissions {$where_sql}" );// phpcs:ignore

		$last_page = 0 < $total && 0 < $per_page ? (int) ceil( $total / $per_page ) : 1;

		if ( $page > $last_page ) {
			$page = $last_page;
		}

		$offset = (int) ceil( ( $page - 1 ) * $per_page );

		$result['meta']['pagination'] = [
			'current_page' => $page,
			'per_page' => $per_page,
			'total' => $total,
			'last_page' => $last_page,
		];

		$this->handle_order( $order, $order_sql );

		$per_page = (int) $per_page;

		$q = "SELECT t_submissions.* FROM `{$this->get_table_submissions()}` t_submissions {$where_sql} {$order_sql} LIMIT {$per_page} OFFSET {$offset}";

		$submissions = $this->wpdb->get_results( $q );// phpcs:ignore

		$data = new Collection( [] );

		foreach ( $submissions as $current_submission ) {
			$data[] = $this->get_submission_body( $current_submission, $with_form_fields );
		}

		$submissions_meta = $this
			->get_submissions_meta( $data, ! $with_meta )
			->group_by( 'submission_id' );

		$result['data'] = $data
			->map( function ( $submission ) use ( $submissions_meta ) {
				$current_submission_meta = $submissions_meta->get( $submission['id'], [] );

				foreach ( $current_submission_meta as $meta ) {
					$extract_meta = $this->extract( $meta, [ 'id', 'key', 'value' ], [ 'id:int' ] );

					if ( $meta->id === $submission['main_meta_id'] ) {
						$submission['main'] = $extract_meta;
					}

					$submission['values'][] = $extract_meta;
				}

				return $submission;
			} )
			->all();

		return $result;
	}

	/**
	 * Get count by status.
	 *
	 * @param $filter
	 *
	 * @return Collection
	 */
	public function count_submissions_by_status( $filter = [] ) {
		// Should not filter by status.
		unset( $filter['status'] );

		$where_sql = $this->apply_filter( $filter );

		$trash_status = '"' . static::STATUS_TRASH . '"';

		$sql = "
			SELECT
				SUM(IF(`status` != {$trash_status}, 1, 0)) AS `all`,
				SUM(IF(`status` = {$trash_status}, 1, 0)) AS `trash`,
				SUM(IF(is_read = 1 AND `status` != {$trash_status}, 1, 0)) AS `read`,
				SUM(IF(is_read = 0 AND `status` != {$trash_status}, 1, 0)) AS `unread`
			FROM {$this->get_table_submissions()} AS `t_submissions` {$where_sql};
		";

		$sql_result = $this->wpdb->get_row( $sql, ARRAY_A ); // phpcs:ignore

		$result = new Collection( [
			'all' => 0,
			'trash' => 0,
			'read' => 0,
			'unread' => 0,
		] );

		if ( ! $sql_result ) {
			return $result;
		}

		return $result->map( function ( $count, $key ) use ( $sql_result ) {
			if ( ! isset( $sql_result[ $key ] ) ) {
				return $count;
			}

			return intval( $sql_result[ $key ] );
		} );
	}

	public function get_submissions_by_email( $email, $include_submission_values = false ) {
		$user = get_user_by( 'email', $email );
		$user_filter = '';

		if ( $user ) {
			$user_filter = $this->wpdb->prepare( 't_submissions.user_id = %s OR', $user->ID );
		}

		$query = "
			SELECT DISTINCT(t_submissions.id), t_submissions.*
			FROM `{$this->get_table_submissions()}` t_submissions
			INNER JOIN {$this->get_table_submissions_values()} t_submissions_meta
				ON t_submissions.id = t_submissions_meta.submission_id
			WHERE
				{$user_filter}
				t_submissions_meta.value = %s
			;
		";

		$data = $this->wpdb->get_results(
			$this->wpdb->prepare( $query, $email ) // phpcs:ignore
		);

		if ( ! $data ) {
			return new Collection( [] );
		}

		$data = new Collection( $data );

		if ( $include_submission_values ) {
			$submissions_meta = $this->get_submissions_meta( $data )
				->group_by( 'submission_id' );

			$data->map( function ( $submission ) use ( $submissions_meta ) {
				$submission->values = $submissions_meta->get( $submission->id, [] );

				return $submission;
			} );
		}

		return $data;
	}

	/**
	 * @param int $delete_timestamp
	 *
	 * @return array
	 */
	public function get_trashed_submission_ids_to_delete( $delete_timestamp ) {
		$date = gmdate( 'Y-m-d H:i:s', $delete_timestamp );

		$sql = "
			SELECT s.id FROM `{$this->get_table_submissions()}` s
			WHERE s.status = %s AND s.updated_at_gmt < %s;
		";

		return $this->wpdb->get_col(
			$this->wpdb->prepare( $sql, static::STATUS_TRASH, $date ) // phpcs:ignore
		);
	}

	public function get_submission( $id ) {
		$result = [
			'data' => [],
			'meta' => [],
		];

		$q = "SELECT * FROM `{$this->get_table_submissions()}` WHERE id=%d";
		$submission = $this->wpdb->get_row( $this->wpdb->prepare( $q, [ $id ] ) );// phpcs:ignore

		if ( ! $submission ) {
			return null;
		}

		$result['data'] = $this->get_submission_body( $submission, true );

		$current_submission_meta = $this->get_submissions_meta( $submission, false )->all();

		foreach ( $current_submission_meta as $meta ) {
			$extract_meta = $this->extract( $meta, [ 'id', 'key', 'value' ], [ 'id:int' ] );

			if ( $meta->id === $result['data']['main_meta_id'] ) {
				$result['data']['main'] = $extract_meta;
			}

			$result['data']['values'][] = $extract_meta;
		}

		$result['data']['form_actions_log'] = ( new Collection( $this->get_submissions_actions_log( $id ) ) )
			->map( function ( $value ) {
				return $this->extract(
					$value,
					[ 'id', 'action_name', 'action_label', 'status', 'log', 'created_at', 'updated_at' ],
					[ 'id:int', 'name', 'label' ]
				);
			} )
			->all();

		return $result;
	}

	public function get_referrers( $search = '', $value = '' ) {
		$where = '';

		if ( $search ) {
			$search = '%' . $this->wpdb->esc_like( $search ) . '%';

			$where = $this->wpdb->prepare( ' AND s.referer_title LIKE %s', $search );
		}

		if ( $value ) {
			$where = $this->wpdb->prepare( ' AND s.referer = %s', $value ); // phpcs:ignore
		}

		$where = 'WHERE 1=1' . $where;

		$query = "
			SELECT DISTINCT (s.referer), s.referer_title
			FROM {$this->get_table_submissions()} s
			{$where};
		";

		$result = $this->wpdb->get_results( $query, ARRAY_A ); // phpcs:ignore

		if ( ! $result ) {
			return new Collection( [] );
		}

		return new Collection( $result );
	}

	/**
	 * @param       $submissions
	 * @param false $only_main
	 *
	 * @return Collection
	 */
	public function get_submissions_meta( $submissions, $only_main = false ) {
		if ( ! ( $submissions instanceof Collection ) ) {
			$submissions = new Collection(
				is_array( $submissions ) ? $submissions : [ $submissions ]
			);
		}

		if ( $submissions->is_empty() ) {
			return new Collection( [] );
		}

		if ( $only_main ) {
			$column = 'id';
			$ids = $submissions->pluck( 'main_meta_id' );
		} else {
			$column = 'submission_id';
			$ids = $submissions->pluck( 'id' );
		}

		$placeholders = $ids->map( function () {
			return '%d';
		} )->implode( ',' );

		$q = "SELECT * FROM `{$this->get_table_submissions_values()}` WHERE `{$column}` IN ({$placeholders})";

		$result = $this->wpdb->get_results( $this->wpdb->prepare( $q, $ids->all() ) ); // phpcs:ignore

		if ( ! $result ) {
			return new Collection( [] );
		}

		return new Collection( $result );
	}

	/**
	 * @param $post_id
	 * @param $element_id
	 *
	 * @return Collection
	 */
	public function get_submissions_value_keys( $post_id, $element_id ) {
		$sql = "
			SELECT DISTINCT(wesv.`key`)
			FROM {$this->get_table_submissions_values()} wesv
			INNER JOIN {$this->get_table_submissions()} wes
				ON wes.id = wesv.submission_id
			WHERE wes.post_id = %s AND wes.element_id = %s;
		";

		$result = $this->wpdb->get_col( $this->wpdb->prepare( $sql, $post_id, $element_id ) ); // phpcs:ignore

		$form = Form_Snapshot_Repository::instance()->find( $post_id, $element_id );
		if ( $form ) {
			$ordered_keys = array_map( function( $field ) {
				return $field['id'];
			}, $form->fields );

			$result = array_merge( array_intersect( $ordered_keys, $result ), array_diff( $result, $ordered_keys ) );
		}

		if ( ! $result ) {
			return new Collection( [] );
		}

		return new Collection( $result );
	}

	/**
	 * @param $submission_id
	 *
	 * @return array|null
	 */
	public function get_submissions_actions_log( $submission_id ) {
		$query = "SELECT * FROM `{$this->get_table_form_actions_log()}` WHERE `submission_id` = %d;";

		return $this->wpdb->get_results(
			$this->wpdb->prepare( $query, (int) $submission_id ), // phpcs:ignore
			ARRAY_A
		);
	}

	/**
	 * Add submission.
	 *
	 * @param array $submission_data
	 * @param array $fields_data
	 *
	 * @return int id or 0
	 */
	public function add_submission( array $submission_data, array $fields_data ) {
		global $wpdb;

		$result = 0;

		$submission_data = $this->get_new_submission_initial_data( $submission_data );

		try {
			$wpdb->query( 'START TRANSACTION' );

			$submission_success = $wpdb->insert( $this->get_table_submissions(), $submission_data );

			if ( ! $submission_success ) {
				throw new Exception( $wpdb->last_error );
			}

			$submission_id = $wpdb->insert_id;

			// Meta's keys/values.
			$main_meta_id = 0;
			$first_submissions_meta_id = 0;
			foreach ( $fields_data as $field ) {
				$wpdb->insert( $this->get_table_submissions_values(), [
					'submission_id' => $submission_id,
					'key' => $field['id'],
					'value' => $field['value'],
				] );

				if ( ! $first_submissions_meta_id ) {
					$first_submissions_meta_id = $wpdb->insert_id;
				}

				if ( 0 === $main_meta_id && 'email' === $field['type'] ) {
					$main_meta_id = $wpdb->insert_id;
				}
			}

			// If `$main_meta_id` not determined.
			if ( ! $main_meta_id ) {
				$main_meta_id = $first_submissions_meta_id;
			}

			// Update main_meta_id.
			$wpdb->update( $this->get_table_submissions(),
				[
					'main_meta_id' => $main_meta_id,
				],
				[
					'id' => $submission_id,
				]
			);

			$wpdb->query( 'COMMIT' );

			$result = $submission_id;
		} catch ( Exception $e ) {
			$wpdb->query( 'ROLLBACK' );

			Plugin::elementor()->logger->get_logger()->error( 'Save submission failed, db error: ' . $e->getMessage() );
		}

		return $result;
	}

	/**
	 * @param       $submission_id
	 * @param array $data
	 * @param array $values
	 *
	 * @return bool|int affected rows
	 */
	public function update_submission( $submission_id, array $data, $values = [] ) {
		if ( $values ) {
			foreach ( $values as $key => $value ) {
				$this->wpdb->update(
					$this->get_table_submissions_values(),
					[ 'value' => $value ],
					[
						'submission_id' => $submission_id,
						'key' => $key,
					]
				);
			}
		}

		$data['updated_at_gmt'] = current_time( 'mysql', true );
		$data['updated_at'] = get_date_from_gmt( $data['updated_at_gmt'] );

		return $this->wpdb->update(
			$this->get_table_submissions(),
			$data,
			[ 'id' => $submission_id ]
		);
	}

	/**
	 * Move single submission to trash
	 *
	 * @param $id
	 *
	 * @return bool|int number of affected rows or false if failed
	 */
	public function move_to_trash_submission( $id ) {
		return $this->update_submission(
			$id,
			[ 'status' => static::STATUS_TRASH ]
		);
	}

	/**
	 * Delete a single submission.
	 *
	 * @param $id
	 *
	 * @return bool|int number of affected rows or false if failed
	 */
	public function delete_submission( $id ) {
		$this->wpdb->delete(
			$this->get_table_submissions_values(),
			[ 'submission_id' => $id ]
		);

		$this->wpdb->delete(
			$this->get_table_form_actions_log(),
			[ 'submission_id' => $id ]
		);

		return $this->wpdb->delete(
			$this->get_table_submissions(),
			[ 'id' => $id ]
		);
	}

	/**
	 * Restore a single submission.
	 *
	 * @param $id
	 *
	 * @return bool|int number of affected rows or false if failed
	 */
	public function restore( $id ) {
		return $this->wpdb->update(
			$this->get_table_submissions(),
			[ 'status' => self::STATUS_NEW ],
			[ 'id' => $id ]
		);
	}

	/**
	 * @param $submission_id
	 * @param Action_Base $action Should be class based on ActionBase (do not type hint to support third party plugins)
	 * @param $status
	 * @param null $log_message
	 *
	 * @return bool|int
	 */
	public function add_action_log( $submission_id, $action, $status, $log_message = null ) {
		$current_datetime_gmt = current_time( 'mysql', true );
		$current_datetime = get_date_from_gmt( $current_datetime_gmt );

		return $this->wpdb->insert(
			$this->get_table_form_actions_log(),
			[
				'submission_id' => $submission_id,
				'action_name' => $action->get_name(),
				'action_label' => $action->get_label(),
				'status' => $status,
				'log' => $log_message,
				'created_at_gmt' => $current_datetime_gmt,
				'updated_at_gmt' => $current_datetime_gmt,
				'created_at' => $current_datetime,
				'updated_at' => $current_datetime,
			]
		);
	}

	public function get_last_error() {
		$this->wpdb->last_error;
	}

	public function get_table_submissions() {
		return $this->table_submissions;
	}

	public function get_table_submissions_values() {
		return $this->table_submissions_values;
	}

	public function get_table_form_actions_log() {
		return $this->table_submissions_actions_log;
	}

	/**
	 * Extract data from `$target` by selected `$keys`.
	 * `$as` used to convert extracted data with different keys.
	 * `$as` support converting to types. using ':' after the key name.
	 *
	 * Example: `$target = [ 'someId' => '5' ];`
	 * `$keys = [ 'someId' ]`
	 * `$as = [ 'id:int' ]`
	 * Output will be `[ 'id' => 5 ];`
	 *
	 * @param array|\stdClass $target
	 * @param array $keys
	 * @param array $as
	 *
	 * @return array
	 */
	private function extract( $target, $keys, $as = [] ) {
		$result = [];

		$as_types = [];
		$as_count = 0;

		if ( is_object( $target ) ) {
			$target = (array) $target;
		}

		foreach ( $as as $key => $as_item ) {
			$exploded = explode( ':', $as_item );

			if ( count( $exploded ) > 1 ) {
				$as_types [] = $exploded[1];
				$as[ $key ] = $exploded[0];
			}
		}

		foreach ( $keys as $key ) {
			if ( isset( $target[ $key ] ) ) {
				if ( isset( $as[ $as_count ] ) ) {
					$value = $target[ $key ];
					if ( isset( $as_types[ $as_count ] ) ) {
						settype( $value, $as_types[ $as_count ] );
					}
					$result[ $as[ $as_count ] ] = $value;
				} else {
					$result[ $key ] = $target[ $key ];
				}
			}
			++$as_count;
		}

		return $result;
	}

	private function handle_and_for_where_query( &$target_where_query ) {
		if ( $target_where_query ) {
			$target_where_query .= ' AND ';
		}
	}

	private function filter_after_and_before( $filters, &$target_where_query ) {
		// Filters 'after' & 'before' known in advance, and could handled systematically.
		if ( isset( $filters['after'] ) || isset( $filters['before'] ) ) {
			$this->handle_and_for_where_query( $target_where_query );

			// TODO: This logic applies only for 'date' format not 'date-time' format.
			$after = '0000-01-01 00:00:00';
			$before = '9999-12-31 23:59:59';

			if ( isset( $filters['after'] ) ) {
				$after = $filters['after']['value'] . ' 00:00:00';
			}

			if ( isset( $filters['before'] ) ) {
				$before = $filters['before']['value'] . ' 23:59:59';
			}

			$after = get_gmt_from_date( $after );
			$before = get_gmt_from_date( $before );

			$target_where_query .= $this->wpdb->prepare( 'created_at_gmt BETWEEN %s and %s', [ $after, $before ] );
		}
	}

	private function filter_status( $filters, &$target_where_query ) {
		if ( isset( $filters['status'] ) ) {
			$this->handle_and_for_where_query( $target_where_query );

			switch ( $filters['status']['value'] ) {
				case 'all':
					$target_where_query .= 'status != \'' . self::STATUS_TRASH . '\'';
					break;
				case 'unread':
					$target_where_query .= 'status = \'' . self::STATUS_NEW . '\' AND is_read = 0';
					break;
				case 'read':
					$target_where_query .= 'status = \'' . self::STATUS_NEW . '\' AND is_read > 0';
					break;
				case 'trash':
					$target_where_query .= 'status = \'' . self::STATUS_TRASH . '\'';
					break;
			}
		}
	}

	private function filter_ids( $filters, &$target_where_query ) {
		if ( ! isset( $filters['ids'] ) || empty( $filters['ids'] ) ) {
			return;
		}

		$this->handle_and_for_where_query( $target_where_query );

		$ids_collection = new Collection( $filters['ids']['value'] );

		$placeholder = $ids_collection->map( function () {
			return '%d';
		} )->implode( ', ' );

		$target_where_query .= $this->wpdb->prepare( "`id` IN ({$placeholder})", $ids_collection->all() ); // phpcs:ignore
	}

	private function filter_search( $filters, &$target_where_query ) {
		if ( isset( $filters['search'] ) ) {
			$this->handle_and_for_where_query( $target_where_query );

			$like = '%' . $this->wpdb->esc_like( $filters['search']['value'] ) . '%';
			$meta_table_name = $this->get_table_submissions_values();

			$search = $this->wpdb->prepare( 'LIKE %s OR t_submissions.id LIKE %s', [ $like, $like ] );

			$target_where_query .= "(
				(
					SELECT GROUP_CONCAT({$meta_table_name}.value)
					FROM `{$meta_table_name}`
					WHERE {$meta_table_name}.submission_id = t_submissions.id
					GROUP BY {$meta_table_name}.submission_id
				) {$search}
			)";
		}
	}

	/**
	 * Filter bu element_id and post_id
	 *
	 * @param $filters
	 * @param $target_where_query
	 */
	private function filter_by_form( $filters, &$target_where_query ) {
		if ( ! isset( $filters['form']['value'] ) ) {
			return;
		}

		$this->handle_and_for_where_query( $target_where_query );

		list( $post_id, $form_id ) = explode( '_', $filters['form']['value'] );

		$target_where_query .= $this->wpdb->prepare(
			'post_id = %d AND element_id = %s',
			$post_id,
			$form_id
		);
	}

	/**
	 * @param $filters
	 * @param $target_where_query
	 */
	private function filter_by_referer( $filters, &$target_where_query ) {
		if ( ! isset( $filters['referer']['value'] ) ) {
			return;
		}

		$this->handle_and_for_where_query( $target_where_query );

		$target_where_query .= $this->wpdb->prepare(
			'referer = %s',
			$filters['referer']['value']
		);
	}

	private function handle_order( $order, &$target_order_query ) {
		if ( ! empty( $order ) ) {
			$order['by'] = esc_sql( $order['by'] );
			$order['order'] = strtoupper( $order['order'] );

			if ( ! in_array( $order['order'], [ 'ASC', 'DESC' ], true ) ) {
				$order['order'] = 'ASC';
			}

			$target_order_query = 'ORDER BY ' . $order['by'] . ' ' . $order['order'];
		}
	}

	/**
	 * @param \stdClass $submission
	 * @param bool      $with_form_fields
	 *
	 * @return array
	 */
	private function get_submission_body( $submission, $with_form_fields = false ) {
		$id = (int) $submission->id;

		$result = [
			'id' => $id,
		];

		$result['post'] = $this->extract( $submission, [ 'post_id' ], [ 'id:int' ] );
		$result['form'] = $this->extract( $submission, [ 'form_name', 'element_id' ], [ 'name' ] );

		$edit_post_id = $submission->post_id;

		// TODO: Should be removed if there is an ability to edit "global widgets"
		$meta = json_decode( $submission->meta, true );

		if ( isset( $meta['edit_post_id'] ) ) {
			$edit_post_id = $meta['edit_post_id'];
		}

		$document = Plugin::elementor()->documents->get( $edit_post_id );

		if ( $document ) {
			$result['post']['edit_url'] = $document->get_edit_url();
		}

		if ( $with_form_fields ) {
			$form = Form_Snapshot_Repository::instance()
				->find( $submission->post_id, $submission->element_id );

			if ( $form ) {
				$result['form']['fields'] = $form->fields;
			}
		}

		$user = get_user_by( 'id', $submission->user_id );

		$result['actions_count'] = (int) $submission->actions_count;
		$result['actions_succeeded_count'] = (int) $submission->actions_succeeded_count;
		$result['referer'] = $submission->referer;
		$result['referer_title'] = $submission->referer_title;
		$result['element_id'] = $submission->element_id;
		$result['main_meta_id'] = $submission->main_meta_id;
		$result['user_id'] = $submission->user_id;
		$result['user_agent'] = $submission->user_agent;
		$result['user_ip'] = $submission->user_ip;
		$result['user_name'] = $user ? $user->display_name : null;

		$result['created_at_gmt'] = $submission->created_at_gmt;
		$result['updated_at_gmt'] = $submission->updated_at_gmt;

		// Return the the dates according to WP current selected timezone.
		$result['created_at'] = get_date_from_gmt( $submission->created_at_gmt );
		$result['updated_at'] = get_date_from_gmt( $submission->updated_at_gmt );

		$result['status'] = $submission->status;
		$result['is_read'] = (bool) $submission->is_read;

		return $result;
	}

	private function get_new_submission_initial_data( array $submission_data ) {
		$current_datetime_gmt = current_time( 'mysql', true );
		$current_datetime = get_date_from_gmt( $current_datetime_gmt );

		$submission_data['hash_id'] = wp_generate_uuid4();

		$submission_data = array_merge( [
			'created_at_gmt' => $current_datetime_gmt,
			'updated_at_gmt' => $current_datetime_gmt,
			'created_at' => $current_datetime,
			'updated_at' => $current_datetime,
			'type' => self::TYPE_SUBMISSION,
			'status' => self::STATUS_NEW,
		], $submission_data );

		return $submission_data;
	}

	private function apply_filter( array $filter ) {
		$where_sql = '';

		$this->filter_after_and_before( $filter, $where_sql );
		$this->filter_status( $filter, $where_sql );
		$this->filter_search( $filter, $where_sql );
		$this->filter_by_form( $filter, $where_sql );
		$this->filter_ids( $filter, $where_sql );
		$this->filter_by_referer( $filter, $where_sql );

		if ( ! $where_sql ) {
			return '';
		}

		return 'WHERE ' . $where_sql;
	}

	public function __construct() {
		global $wpdb;

		$this->wpdb = $wpdb;

		$this->table_submissions = $wpdb->prefix . self::E_SUBMISSIONS;
		$this->table_submissions_values = $wpdb->prefix . self::E_SUBMISSIONS_VALUES;
		$this->table_submissions_actions_log = $wpdb->prefix . self::E_SUBMISSIONS_ACTIONS_LOG;
	}
}
