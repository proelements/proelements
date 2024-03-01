<?php
namespace ElementorPro\Modules\ElementManager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Options {

	public static function get_role_restrictions() {
		return (array) get_option( 'elementor_pro_element_manager_role_permission', [] );
	}

	public static function update_role_restrictions( $role_restrictions ) {
		update_option( 'elementor_pro_element_manager_role_permission', (array) $role_restrictions );
	}
}
