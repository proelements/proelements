<?php
namespace ElementorPro\License;


use Elementor\Core\Admin\Admin_Notices;
use Elementor\Settings;
use Elementor\Utils;
use ElementorPro\Core\Connect\Apps\Activate;
use ElementorPro\License\Notices\Trial_Expired_Notice;
use ElementorPro\License\Notices\Trial_Period_Notice;
use ElementorPro\Plugin;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin {
	public static function get_url() {
		return \Elementor\Utils::get_pro_link( 'https://elementor.com/pro/?utm_source=wp-plugins&utm_campaign=gopro&utm_medium=wp-dash' );
	}

	public static function get_license_key() {
		return '';
	}

	public function register_actions() {

    }

	private function is_connected() {
		return $this->get_app()->is_connected();
	}


	public function get_connect_url( $params = [] ) {
		$action = $this->is_connected() ? 'activate_pro' : 'authorize';

		return $this->get_app()->get_admin_url( $action, $params );
	}

	/**
	 * @return Activate
	 */
	private function get_app() {
		return Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );
	}

}
