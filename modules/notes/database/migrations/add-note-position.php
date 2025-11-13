<?php
namespace ElementorPro\Modules\Notes\Database\Migrations;

use ElementorPro\Modules\Notes\Module;
use ElementorPro\Core\Database\Base_Migration;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Add_Note_Position extends Base_Migration {
	/**
	 * @inheritDoc
	 */
	public function up() {
		$this->add_columns( Module::TABLE_NOTES, [
			'position' => 'text null comment "A JSON string that represents the position of the note inside the element in percentages. e.g. {x:10, y:15}" AFTER `status`',
		] );
	}

	/**
	 * @inheritDoc
	 */
	public function down() {
		$this->drop_columns( Module::TABLE_NOTES, [ 'position' ] );
	}
}
