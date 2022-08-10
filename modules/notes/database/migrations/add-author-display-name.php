<?php
namespace ElementorPro\Modules\Notes\Database\Migrations;

use ElementorPro\Modules\Notes\Module;
use ElementorPro\Core\Database\Base_Migration;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Add_Author_Display_Name extends Base_Migration {
	/**
	 * @inheritDoc
	 */
	public function up() {
		$this->add_columns( Module::TABLE_NOTES, [
			'author_display_name' => 'varchar(250) null comment "Save the author name when the author was deleted." AFTER `author_id`',
		] );
	}

	/**
	 * @inheritDoc
	 */
	public function down() {
		$this->drop_columns( Module::TABLE_NOTES, [ 'author_display_name' ] );
	}
}
