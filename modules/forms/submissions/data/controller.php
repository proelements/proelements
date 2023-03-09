<?php
namespace ElementorPro\Modules\Forms\Submissions\Data;

use Elementor\Core\Utils\Collection;
use Elementor\Data\Base\Controller as Controller_Base;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Data\Responses\Query_Failed_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Controller extends Controller_Base {
	/**
	 * @var \ElementorPro\Modules\Forms\Submissions\Database\Query
	 */
	private $query;

	public function get_name() {
		return 'form-submissions';
	}

	/**
	 * Get collection params by 'additionalProperties' context.
	 *
	 * TODO Should move to base after merge with 'Sub controllers & Sub endpoints'.
	 *
	 * @param string $context
	 *
	 * @return array
	 */
	private function get_collection_params_by_additional_props_context( $context ) {
		$result = [];

		$collection_params = $this->get_collection_params();

		foreach ( $collection_params as $collection_param_key => $collection_param ) {
			if ( isset( $collection_param['additionalProperties']['context'] ) && $context === $collection_param['additionalProperties']['context'] ) {
				$result[ $collection_param_key ] = $collection_param;
			}
		}

		return $result;
	}

	public function get_collection_params() {
		$default_collection_params = parent::get_collection_params();

		return array_merge( $default_collection_params, [
			'page' => [
				'description' => 'Current page of the collection.',
				'type' => 'integer',
				'default' => 1,
				'minimum' => 1,
				'required' => false,
			],
			'per_page' => [
				'description' => 'Maximum number of items to be returned in result set.',
				'type' => 'integer',
				'default' => 50,
				'minimum' => 1,
				'maximum' => 100,
				'required' => false,
			],
			'order' => [
				'description' => 'Order sort attribute ascending or descending.',
				'type' => 'string',
				'default' => 'desc',
				'enum' => [
					'asc',
					'desc',
				],
				'required' => false,
			],
			'order_by' => [
				'description' => 'Sort collection by object attribute.',
				'type' => 'string',
				'default' => 'created_at',
				'enum' => [
					'created_at',
					'id',
					'main_meta_id',
				],
				'required' => false,
			],
			'status' => [
				'description' => 'Limit result set to submissions assigned one or more statuses.',
				'type' => 'string',
				'default' => 'all',
				'enum' => [
					'all',
					'unread',
					'read',
					'trash',
				],
				'additionalProperties' => [
					'context' => 'filter',
				],
				'required' => false,
			],
			'search' => [
				'description' => 'Limit results to those matching a string.',
				'type' => 'string',
				'required' => false,
				'additionalProperties' => [
					'context' => 'filter',
				],
			],
			'form' => [
				'description' => 'Limit result set to submissions assigned to specific forms. The form id should follow this pattern {post_id}_{element_id} e.g: 10_476d0ce',
				'type' => 'string',
				'required' => false,
				'additionalProperties' => [
					'context' => 'filter',
				],
			],
			'referer' => [
				'description' => 'Limit result set to submissions assigned to specific referer.',
				'type' => 'string',
				'required' => false,
				'additionalProperties' => [
					'context' => 'filter',
				],
			],
			'after' => [
				'description' => 'Limit response to submissions sent after a given ISO8601 compliant date.',
				'type' => 'string',
				'format' => 'date',
				'required' => false,
				'additionalProperties' => [
					'context' => 'filter',
				],
			],
			'before' => [
				'description' => 'Limit response to submissions sent before a given ISO8601 compliant date.',
				'type' => 'string',
				'format' => 'date',
				'required' => false,
				'additionalProperties' => [
					'context' => 'filter',
				],
			],
		] );
	}

	public function get_items( $request ) {
		$filters = [];

		// Get & set filters with values.
		foreach ( $this->get_collection_params_by_additional_props_context( 'filter' ) as $collection_param_name => $collection_param_values ) {
			$request_filter_value = $request->get_param( $collection_param_name );

			if ( null !== $request_filter_value ) {
				$collection_param_values['value'] = $request_filter_value;

				$filters[ $collection_param_name ] = $collection_param_values;
			}
		}

		$result = $this->query->get_submissions( [
			'page' => $request->get_param( 'page' ),
			'per_page' => $request->get_param( 'per_page' ),
			'filters' => $filters,
			'order' => [
				'order' => $request->get_param( 'order' ),
				'by' => $request->get_param( 'order_by' ),
			],
		] );

		$result['meta']['count'] = $this->query
			->count_submissions_by_status( $filters )
			->all();

		return $result;
	}

	public function get_item( $request ) {
		return $this->query->get_submission( (int) $request->get_param( 'id' ) );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_items( $request ) {
		return $this->delete(
			$request->get_param( 'ids' ),
			$request->get_param( 'force' )
		);
	}

	/**
	 * Delete single submission
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_item( $request ) {
		return $this->delete(
			[ $request->get_param( 'id' ) ],
			$request->get_param( 'force' )
		);
	}

	/**
	 * Update a single submission.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function update_item( $request ) {
		return $this->update(
			[ (int) $request->get_param( 'id' ) ],
			$request
		);
	}

	/**
	 * Update multiple submissions.
	 *
	 * @param $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function update_items( $request ) {
		return $this->update(
			$request->get_param( 'ids' ),
			$request
		);
	}

	public function get_permission_callback( $request ) {
		return current_user_can( 'manage_options' );
	}

	public function register_endpoints() {
		$this->register_endpoint( Endpoints\Restore::class );
		$this->register_endpoint( Endpoints\Export::class );
		$this->register_endpoint( Endpoints\Referer::class );
	}

	protected function register_internal_endpoints() {
		// Register as internal to remove the default endpoint generated by the base controller.
		$this->register_endpoint( Endpoints\Index::class );
	}

	protected function register() {
		parent::register();

		$this->query = Query::get_instance();
	}

	/**
	 * Delete one or more submissions.
	 *
	 * @param array $ids
	 * @param false $force
	 *
	 * @return Query_Failed_Response|\WP_Error|\WP_REST_Response
	 */
	private function delete( array $ids, $force = false ) {
		$affected = 0;
		$failed = 0;

		foreach ( $ids as $id ) {
			if ( $force ) {
				$affected_rows = $this->query->delete_submission( $id );
			} else {
				$affected_rows = $this->query->move_to_trash_submission( $id );
			}

			if ( false === $affected_rows ) {
				$failed++;
			} else {
				$affected += $affected_rows;
			}
		}

		if ( count( $ids ) === $failed ) {
			return new Query_Failed_Response(
				$this->query->get_last_error()
			);
		}

		if ( 1 === count( $ids ) && 0 === $affected ) {
			return new \WP_Error(
				'rest_not_found',
				__( 'Submission not found.', 'elementor-pro' ),
				[ 'status' => 404 ]
			);
		}

		return new \WP_REST_Response( [
			'data' => [],
			'meta' => [
				'affected' => $affected,
				'failed' => $failed,
			],
		], 200 );
	}

	/**
	 * Update one or more submissions.
	 *
	 * @param array            $ids
	 * @param \WP_REST_Request $request
	 *
	 * @return Query_Failed_Response|\WP_Error|\WP_REST_Response
	 */
	private function update( array $ids, \WP_REST_Request $request ) {
		$allowed_args = ( new Collection( $request->get_attributes()['args'] ) )
			->except( [ 'id', 'ids', 'values' ] )
			->keys();

		$data = ( new Collection( $request->get_body_params() ) )
			->only( $allowed_args )
			->all();

		$values = $request->get_param( 'values' );

		$affected = 0;
		$failed = 0;

		foreach ( $ids as $id ) {
			$affected_rows = $this->query->update_submission( $id, $data, $values );

			if ( false === $affected_rows ) {
				$failed++;
			} else {
				$affected += $affected_rows;
			}
		}

		if ( count( $ids ) === $failed ) {
			return new Query_Failed_Response(
				$this->query->get_last_error()
			);
		}

		if ( 1 === count( $ids ) ) {
			if ( 0 === $affected ) {
				return new \WP_Error(
					'rest_not_found',
					__( 'Submission not found.', 'elementor-pro' ),
					[ 'status' => 404 ]
				);
			}

			return new \WP_REST_Response( $this->query->get_submission( $ids[0] ) );
		}

		return new \WP_REST_Response( [
			'data' => [],
			'meta' => [
				'affected' => $affected,
				'failed' => $failed,
			],
		], 200 );
	}
}
