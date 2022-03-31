<?php

namespace ElementorPro\Modules\AdminTopBar;

use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Connect\Apps\Activate;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return 'admin-top-bar';
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'elementor/admin-top-bar/init', function ( $module ) {
			$settings = $module->get_settings();
			$current_screen = null;

			// For BC support.
			// when the action 'elementor/admin-top-bar/init' triggered before screen is registered.
			// TODO: need to remove if elementor core version 3.5.0 is stable
			if ( function_exists( 'get_current_screen' ) ) {
				$current_screen = get_current_screen();
			}

			/** @var Activate $activate */
			$activate = Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );

			$settings['is_user_connected'] = $settings['is_user_connected'] && API::is_license_active();
			$settings['connect_url'] = ! API::is_license_active() ?
				$activate->get_admin_url( 'authorize', [
					'utm_source' => 'top-bar',
					'utm_medium' => 'wp-dash',
					'utm_campaign' => 'connect-and-activate-license',
					'utm_content' => $current_screen ? $current_screen->id : '',
				] ) :
				$settings['connect_url'];

			$module->set_settings( $settings );
		} );
	}
}
