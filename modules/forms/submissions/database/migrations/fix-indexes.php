<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Migrations;

use Elementor\Core\Utils\Collection;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Fix_Indexes extends Base_Migration {
	/**
	 * In the previous migrations some databases had problems with the indexes.
	 * this migration checks if user's tables are filled with required indexes, if not it creates them.
	 */
	public function run() {
		$indexes = $this->get_indexes();

		foreach ( $indexes as $table => $table_indexes ) {
			$existing_indexes = $this->get_existed_indexes_of( $table );

			// Protect from database errors (for example: table do not exists somehow).
			if ( null === $existing_indexes ) {
				continue;
			}

			$indexes_query = $table_indexes->except( $existing_indexes )->implode( ',' );

			$this->wpdb->query( "ALTER TABLE `{$table}` {$indexes_query};" ); // phpcs:ignore
		}
	}

	/**
	 * Get the user exited indexes
	 *
	 * @param $table_name
	 *
	 * @return array|null
	 */
	private function get_existed_indexes_of( $table_name ) {
		$result = $this->wpdb->get_results( "SHOW INDEX FROM {$table_name};", ARRAY_A ); // phpcs:ignore

		if ( false === $result ) {
			return null;
		}

		return ( new Collection( $result ) )
			->map( function ( $row ) {
				if ( ! isset( $row['Key_name'] ) ) {
					return null;
				}

				return $row['Key_name'];
			} )
			->filter()
			->values();
	}

	/**
	 * Get all the database indexes.
	 *
	 * @return Collection[]
	 */
	private function get_indexes() {
		$max_index_length = static::MAX_INDEX_LENGTH;

		return [
			$this->query->get_table_submissions() => new Collection( [
				'main_meta_id_index' => 'ADD INDEX `main_meta_id_index` (`main_meta_id`)',
				'hash_id_unique_index' => "ADD UNIQUE INDEX `hash_id_unique_index` (`hash_id` ({$max_index_length}))",
				'hash_id_index' => "ADD INDEX `hash_id_index` (`hash_id` ({$max_index_length}))",
				'type_index' => "ADD INDEX `type_index` (`type` ({$max_index_length}))",
				'post_id_index' => 'ADD INDEX `post_id_index` (`post_id`)',
				'element_id_index' => "ADD INDEX `element_id_index` (`element_id` ({$max_index_length}))",
				'campaign_id_index' => 'ADD INDEX `campaign_id_index` (`campaign_id`)',
				'user_id_index' => 'ADD INDEX `user_id_index` (`user_id`)',
				'user_ip_index' => 'ADD INDEX `user_ip_index` (`user_ip`)',
				'status_index' => 'ADD INDEX `status_index` (`status`)',
				'is_read_index' => 'ADD INDEX `is_read_index` (`is_read`)',
				'created_at_gmt_index' => 'ADD INDEX `created_at_gmt_index` (`created_at_gmt`)',
				'updated_at_gmt_index' => 'ADD INDEX `updated_at_gmt_index` (`updated_at_gmt`)',
				'created_at_index' => 'ADD INDEX `created_at_index` (`created_at`)',
				'updated_at_index' => 'ADD INDEX `updated_at_index` (`updated_at`)',
				'referer_index' => "ADD INDEX `referer_index` (`referer` ({$max_index_length}))",
				'referer_title_index' => "ADD INDEX `referer_title_index` (`referer_title` ({$max_index_length}))",
			] ),
			$this->query->get_table_submissions_values() => new Collection( [
				'submission_id_index' => 'ADD INDEX `submission_id_index` (`submission_id`)',
				'key_index' => "ADD INDEX `key_index` (`key` ({$max_index_length}))",
			] ),
			$this->query->get_table_form_actions_log() => new Collection( [
				'submission_id_index' => 'ADD INDEX `submission_id_index` (`submission_id`)',
				'action_name_index' => "ADD INDEX `action_name_index` (`action_name` ({$max_index_length}))",
				'status_index' => 'ADD INDEX `status_index` (`status`)',
				'created_at_gmt_index' => 'ADD INDEX `created_at_gmt_index` (`created_at_gmt`)',
				'updated_at_gmt_index' => 'ADD INDEX `updated_at_gmt_index` (`updated_at_gmt`)',
				'created_at_index' => 'ADD INDEX `created_at_index` (`created_at`)',
				'updated_at_index' => 'ADD INDEX `updated_at_index` (`updated_at`)',
			] ),
		];
	}
}
