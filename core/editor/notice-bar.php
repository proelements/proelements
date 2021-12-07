<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Editor\Notice_Bar as Base_Notice_Bar;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notice_Bar extends Base_Notice_Bar {

	protected function get_init_settings() {
		if (defined('IS_PRO_ELEMENTS')) return [];
		$license_data = License_API::get_license_data();
		$license_admin = Plugin::instance()->license_admin;

		if ( License_API::STATUS_EXPIRED === $license_data['license'] ) {
			return [
				'option_key' => '_elementor_pro_editor_renew_license_notice_dismissed',
				'message' => esc_html__( 'Renew Elementor Pro and enjoy updates, support and Pro templates for another year.', 'elementor-pro' ),
				'action_title' => esc_html__( 'Renew Now', 'elementor-pro' ),
				'action_url' => 'https://go.elementor.com/editor-notice-bar-renew/',
				'muted_period' => 30,
			];
		}

		if ( ! License_API::is_license_active() ) {
			return [
				'option_key' => '_elementor_pro_editor_activate_license_notice_dismissed',
				'message' => esc_html__( 'Activate Your License and Get Access to Premium Elementor Templates, Support & Plugin Updates.', 'elementor-pro' ),
				'action_title' => esc_html__( 'Connect & Activate', 'elementor-pro' ),
				'action_url' => $license_admin->get_connect_url( [
					'mode' => 'popup',
					'callback_id' => 'editor-pro-activate',
				] ),
				'muted_period' => 0,
			];
		}

		if ( ! License_API::is_license_about_to_expire() ) {
			return [];
		}

		if ( isset( $license_data['renewal_discount'] ) && 0 < $license_data['renewal_discount'] ) {
			$message = sprintf( esc_html__( 'Oh-oh... Looks like your Elementor Pro license is about to expire. Renew now and get an exclusive, time-limited %s discount.', 'elementor-pro' ), $license_data['renewal_discount'] . '&#37;' );
		} else {
			$message = esc_html__( 'Oh-oh! Your Elementor Pro license is about to expire. Renew now and enjoy updates, support and Pro templates for another year.', 'elementor-pro' );
		}

		return [
			'option_key' => '_elementor_pro_editor_renew_about_to_expire_license_notice_dismissed',
			'message' => $message,
			'action_title' => esc_html__( 'Renew Now', 'elementor-pro' ),
			'action_url' => 'https://go.elementor.com/editor-notice-bar-renew/',
			'muted_period' => 10,
		];
	}
}
