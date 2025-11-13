<?php
namespace ElementorPro\Modules\Notes\Database\Migrations;

use ElementorPro\Core\Database\Base_Migration;
use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Add_Capabilities extends Base_Migration {
	/**
	 * @inheritDoc
	 */
	public function up() {
		$admin = get_role( 'administrator' );

		if ( $admin instanceof \WP_Role ) {
			foreach ( Capabilities::all() as $capability ) {
				$admin->add_cap( $capability );
			}
		}
	}

	/**
	 * @inheritDoc
	 */
	public function down() {
		$roles = array_values( wp_roles()->role_objects );

		foreach ( $roles as $role ) {
			if ( ! ( $role instanceof \WP_Role ) ) {
				continue;
			}

			foreach ( Capabilities::all() as $cap ) {
				$role->remove_cap( $cap );
			}
		}
	}
}
