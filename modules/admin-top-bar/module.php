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

			/** @var Activate $activate */
			$activate = Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );

			$settings['is_user_connected'] = $settings['is_user_connected'] && API::is_license_active();
			$settings['connect_url'] = ! API::is_license_active() ? $activate->get_admin_url( 'authorize' ) : $settings['connect_url'];

			$module->set_settings( $settings );
		} );
	}
}
