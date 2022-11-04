<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems;

use Elementor\Modules\Promotions\AdminMenuItems\Base_Promotion_Item;
use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Icons_Promotion_Menu_Item extends Base_Promotion_Item {
	public function get_cta_url() {
		$connect_url = Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'wp-custom-icons',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );

		$renew_url = 'https://go.elementor.com/renew-custom-icons/';

		return API::is_license_expired()
			? $renew_url
			: $connect_url;
	}

	public function get_position() {
		return null;
	}

	public function get_cta_text() {
		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_label() {
		return esc_html__( 'Custom Icons', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Custom Icons', 'elementor-pro' );
	}

	public function get_promotion_title() {
		return esc_html__( 'Add Your Custom Icons', 'elementor-pro' );
	}

	public function render_promotion_description() {
		echo esc_html__(
			'Don\'t rely solely on the FontAwesome icons everyone else is using! Differentiate your website and your style with custom icons you can upload from your favorite icons source.',
			'elementor-pro'
		);
	}
}
