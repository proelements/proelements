<?php
namespace ElementorPro\Modules\Notes\Database;

use ElementorPro\Core\Database\Base_Database_Updater;
use ElementorPro\Modules\Notes\Database\Migrations\Add_Capabilities;
use ElementorPro\Modules\Notes\Database\Migrations\Add_Note_Position;
use ElementorPro\Modules\Notes\Database\Migrations\Initial;
use ElementorPro\Modules\Notes\Database\Migrations\Add_Route_Post_Id;
use ElementorPro\Modules\Notes\Database\Migrations\Add_Author_Display_Name;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Notes_Database_Updater extends Base_Database_Updater {
	const DB_VERSION = 5;
	const OPTION_NAME = 'elementor_notes_db_version';

	/**
	 * @inheritDoc
	 */
	protected function get_migrations() {
		return [
			1 => new Initial(),
			2 => new Add_Capabilities(),
			3 => new Add_Author_Display_Name(),
			4 => new Add_Route_Post_Id(),
			5 => new Add_Note_Position(),
		];
	}

	/**
	 * @inheritDoc
	 */
	protected function get_db_version() {
		return static::DB_VERSION;
	}

	/**
	 * @inheritDoc
	 */
	protected function get_db_version_option_name() {
		return static::OPTION_NAME;
	}
}
