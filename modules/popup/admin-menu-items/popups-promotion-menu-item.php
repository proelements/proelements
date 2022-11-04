<?php

namespace ElementorPro\Modules\Popup\AdminMenuItems;

use Elementor\Modules\Promotions\AdminMenuItems\Base_Promotion_Item;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Popups_Promotion_Menu_Item extends Base_Promotion_Item {

	public function get_position() {
		return null;
	}

	public function get_cta_text() {
		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_cta_url() {
		$connect_url = Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'popup-templates',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );

		$renew_url = 'https://go.elementor.com/renew-popups/';

		return API::is_license_expired()
			? $renew_url
			: $connect_url;
	}

	public function get_parent_slug() {
		return Source_Local::ADMIN_MENU_SLUG;
	}

	public function get_label() {
		return esc_html__( 'Popups', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Popups', 'elementor-pro' );
	}

	public function get_promotion_title() {
		return esc_html__( 'Get Popup Builder', 'elementor-pro' );
	}

	public function render_promotion_description() {
		echo esc_html__(
			'Popup Builder lets you take advantage of all the amazing features in Elementor, so you can build beautiful & highly converting popups. Go pro and start designing your popups today.',
			'elementor-pro'
		);
	}
}
