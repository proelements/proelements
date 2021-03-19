<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Migrations;

class Initial extends Base_Migration {
	public function run() {
		$this->create_tables();
		$this->add_indexes();
	}

	private function create_tables() {
		$charset_collate = $this->wpdb->get_charset_collate();

		$e_submission_table = "CREATE TABLE `{$this->query->get_table_submissions()}` (
			id bigint(20) unsigned auto_increment primary key,
			type varchar(255) null,
			hash_id varchar(255) not null,
			main_meta_id bigint(20) unsigned not null comment 'Id of main field. to represent the main meta field',
			post_id bigint(20) unsigned not null,
			referer varchar(500) not null,
			element_id varchar(255) not null,
			form_name varchar(255) not null,
			campaign_id bigint(20) unsigned not null,
			user_id bigint(20) unsigned null,
			user_ip varchar(46) not null,
			user_agent text not null,
			actions_count INT DEFAULT 0,
			actions_succeeded_count INT DEFAULT 0,
			status varchar(20) not null,
			is_read tinyint(1) default 0 not null,
			meta text null,
			created_at_gmt datetime not null,
			updated_at_gmt datetime not null,
			created_at datetime not null,
			updated_at datetime not null
		) {$charset_collate};";

		$e_submission_values_table = "CREATE TABLE `{$this->query->get_table_submissions_values()}` (
			id bigint(20) unsigned auto_increment primary key,
			submission_id bigint(20) unsigned not null default 0,
			`key` varchar(255) null,
			value longtext null
		) {$charset_collate};";

		$e_submission_actions_log_table = "CREATE TABLE `{$this->query->get_table_form_actions_log()}` (
			id bigint(20) unsigned auto_increment primary key,
			submission_id bigint(20) unsigned not null,
			action_name varchar(255) not null,
			action_label varchar(255) null,
			status varchar(20) not null,
			log text null,
			created_at_gmt datetime not null,
			updated_at_gmt datetime not null,
			created_at datetime not null,
			updated_at datetime not null
		) {$charset_collate};";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $e_submission_table . $e_submission_values_table . $e_submission_actions_log_table );
	}

	private function add_indexes() {
		// phpcs:disable
		$this->wpdb->query( "ALTER TABLE `{$this->query->get_table_submissions()}`
    		ADD INDEX `main_meta_id_index` (`main_meta_id`),
    		ADD UNIQUE INDEX `hash_id_unique_index` (`hash_id`),
    		ADD INDEX `hash_id_index` (`hash_id`),
    		ADD INDEX `type_index` (`type`),
    		ADD INDEX `post_id_index` (`post_id`),
    		ADD INDEX `element_id_index` (`element_id`),
    		ADD INDEX `campaign_id_index` (`campaign_id`),
    		ADD INDEX `user_id_index` (`user_id`),
    		ADD INDEX `user_ip_index` (`user_ip`),
    		ADD INDEX `status_index` (`status`),
    		ADD INDEX `is_read_index` (`is_read`),
    		ADD INDEX `created_at_gmt_index` (`created_at_gmt`),
    		ADD INDEX `updated_at_gmt_index` (`updated_at_gmt`),
    		ADD INDEX `created_at_index` (`created_at`),
    		ADD INDEX `updated_at_index` (`updated_at`)
		" );

		$this->wpdb->query( "ALTER TABLE `{$this->query->get_table_submissions_values()}`
    		ADD INDEX `submission_id_index` (`submission_id`),
    		ADD INDEX `key_index` (`key`)
		" );

		$this->wpdb->query( "ALTER TABLE `{$this->query->get_table_form_actions_log()}`
    		ADD INDEX `submission_id_index` (`submission_id`),
    		ADD INDEX `action_name_index` (`action_name`),
    		ADD INDEX `status_index` (`status`),
    		ADD INDEX `created_at_gmt_index` (`created_at_gmt`),
    		ADD INDEX `updated_at_gmt_index` (`updated_at_gmt`),
    		ADD INDEX `created_at_index` (`created_at`),
    		ADD INDEX `updated_at_index` (`updated_at`)
		" );
		// phpcs:enable
	}
}
