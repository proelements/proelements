<?php
namespace ElementorPro\Modules\CustomCode\AdminMenuItems;

use Elementor\Modules\Promotions\AdminMenuItems\Base_Promotion_Item;
use ElementorPro\License\API;
use ElementorPro\Plugin;
use ElementorPro\Modules\CustomCode\Module as Custom_Code_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Code_Promotion_Menu_Item extends Base_Promotion_Item {
	public function get_cta_url() {
		if ( ! API::active_licence_has_feature( Custom_Code_Module::MODULE_NAME ) ) {
			$upgrade_url = 'https://go.elementor.com/go-pro-advanced-custom-code/';

			return $upgrade_url;
		}

		$connect_url = Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'custom-code',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );

		$renew_url = 'https://go.elementor.com/renew-custom-code/';

		return API::is_license_expired()
			? $renew_url
			: $connect_url;
	}

	public function get_position() {
		return null;
	}

	public function get_cta_text() {
		if ( ! API::active_licence_has_feature( Custom_Code_Module::MODULE_NAME ) ) {
			return esc_html__( 'Upgrade Now', 'elementor-pro' );
		}

		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_label() {
		return esc_html__( 'Custom Code', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Custom Code', 'elementor-pro' );
	}

	public function get_promotion_title() {
		return esc_html__( 'Add Your Custom Code', 'elementor-pro' );
	}

	public function render_promotion_description() {
		echo esc_html__(
			'Add Custom Code snippets to your website.',
			'elementor-pro'
		);
	}
}
