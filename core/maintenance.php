<?php
namespace ElementorPro\Core;

use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Maintenance {

	public static function init(): void {
		register_deactivation_hook( ELEMENTOR_PRO_PLUGIN_BASE, [ __CLASS__, 'on_deactivated' ] );
	}

	public static function on_deactivated(): void {
		API::get_version( true, 'deactivated' );
	}
}
