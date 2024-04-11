<?php

namespace ElementorPro\Modules\Popup\AdminMenuItems;

use ElementorPro\Modules\Tiers\AdminMenuItems\Base_Promotion_Item;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\License\API;
use ElementorPro\Plugin;
use ElementorPro\Modules\Popup\Module as Popup_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Popups_Promotion_Menu_Item extends Base_Promotion_Item {

	public function get_position() {
		return null;
	}

	public function get_cta_text() {
		if ( ! API::active_licence_has_feature( Popup_Module::DOCUMENT_TYPE ) ) {
			return esc_html__( 'Upgrade Now', 'elementor-pro' );
		}

		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_cta_url() {
		if ( ! API::active_licence_has_feature( Popup_Module::DOCUMENT_TYPE ) ) {
			$upgrade_url = 'https://go.elementor.com/go-pro-advanced-popups/';

			return $upgrade_url;
		}

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

	public function get_promotion_description() {
		return esc_html__(
			"Create custom designed Popups using all of Elementor's widgets. Use advanced display conditions and triggers to display the right popup, to the right visitor, at the right time and maximize conversions.",
			'elementor-pro'
		);
	}

	/**
	 * @deprecated use get_promotion_description instead
	 * @return void
	 */
	public function render_promotion_description() {
		echo $this->get_promotion_description(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
