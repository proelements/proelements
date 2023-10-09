<?php
namespace ElementorPro\Core\Upgrade;

use Elementor\Core\Upgrade\Manager as Upgrades_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Manager extends Upgrades_Manager {

	public function get_action() {
		return 'elementor_pro_updater';
	}

	public function get_plugin_name() {
		return 'elementor-pro';
	}

	public function get_plugin_label() {
		return esc_html__( 'Elementor Pro', 'elementor-pro' );
	}

	public function get_updater_label() {
		return esc_html__( 'Elementor Pro Data Updater', 'elementor-pro' );
	}

	public function get_new_version() {
		return ELEMENTOR_PRO_VERSION;
	}

	public function get_version_option_name() {
		return 'elementor_pro_version';
	}

	public function get_upgrades_class() {
		return 'ElementorPro\Core\Upgrade\Upgrades';
	}

	public static function get_install_history_meta() {
		return 'elementor_pro_install_history';
	}
}
