<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Migrations;

class Referer_Extra extends Base_Migration {
	public function run() {
		// phpcs:disable
		$this->wpdb->query("
			ALTER TABLE `{$this->query->get_table_submissions()}`
			ADD COLUMN `referer_title` varchar(300) null AFTER `referer`;
		");

		$this->wpdb->query("
			ALTER TABLE `{$this->query->get_table_submissions()}`
			ADD INDEX `referer_index` (`referer`),
			ADD INDEX `referer_title_index` (`referer_title`);
		");
		// phpcs:enable
	}
}
