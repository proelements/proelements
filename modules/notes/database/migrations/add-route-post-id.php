<?php
namespace ElementorPro\Modules\Notes\Database\Migrations;

use ElementorPro\Modules\Notes\Module;
use ElementorPro\Core\Database\Base_Migration;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Add_Route_Post_Id extends Base_Migration {
	/**
	 * @inheritDoc
	 */
	public function up() {
		$this->add_columns( Module::TABLE_NOTES, [
			'route_post_id' => 'bigint(20) unsigned null comment "The post id of the route that the note was created on." AFTER `route_title`',
		] );
	}

	/**
	 * @inheritDoc
	 */
	public function down() {
		$this->drop_columns( Module::TABLE_NOTES, [ 'route_post_id' ] );
	}
}
