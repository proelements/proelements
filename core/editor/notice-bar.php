<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Editor\Notice_Bar as Base_Notice_Bar;
use ElementorPro\License\Admin;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notice_Bar extends Base_Notice_Bar {

	const ELEMENTOR_PRO_EDITOR_GO_PRO_TRIAL_ABOUT_TO_EXPIRE_LICENSE_NOTICE_DISMISSED = '_elementor_pro_editor_go_pro_trial_about_to_expire_license_notice_dismissed';
	const ELEMENTOR_PRO_EDITOR_GO_PRO_TRIAL_EXPIRED_LICENSE_NOTICE_DISMISSED = '_elementor_pro_editor_go_pro_trial_expired_license_notice_dismissed';
	const ELEMENTOR_PRO_EDITOR_RENEW_LICENSE_NOTICE_DISMISSED = '_elementor_pro_editor_renew_license_notice_dismissed';
	const ELEMENTOR_PRO_EDITOR_ACTIVATE_LICENSE_NOTICE_DISMISSED = '_elementor_pro_editor_activate_license_notice_dismissed';
	const ELEMENTOR_PRO_EDITOR_RENEW_ABOUT_TO_EXPIRE_LICENSE_NOTICE_DISMISSED = '_elementor_pro_editor_renew_about_to_expire_license_notice_dismissed';

	protected function get_init_settings() {
		if (defined('IS_PRO_ELEMENTS')) return [];
		$license_data = License_API::get_license_data();
		$license_admin = Plugin::instance()->license_admin;

		if ( License_API::is_license_active() && License_API::is_licence_pro_trial() ) {
			return [
				'option_key' => self::ELEMENTOR_PRO_EDITOR_GO_PRO_TRIAL_ABOUT_TO_EXPIRE_LICENSE_NOTICE_DISMISSED,
				'message' =>
					esc_html__( 'Heads up! You are using a free trial. Want to enjoy Pro widgets & templates for a whole year?', 'elementor-pro' )
						. sprintf( ' <a href="https://my.elementor.com/upgrade-subscription/?utm_source=editor-notice-bar&utm_medium=wp-dash&utm_campaign=pro-trial&utm_content=trial-period" target="_blank">%s</a>', esc_html__( 'Go Pro now', 'elementor-pro' ) ),
				'action_title' => '',
				'action_url' => '',
				'muted_period' => 0,
			];
		}

		if ( License_API::is_license_expired() && License_API::is_licence_pro_trial() ) {
			return [
				'option_key' => self::ELEMENTOR_PRO_EDITOR_GO_PRO_TRIAL_EXPIRED_LICENSE_NOTICE_DISMISSED,
				'message' => esc_html__( 'Your trial has expired. Miss your favorite Elementor Pro features?', 'elementor-pro' )
					. sprintf( ' <a href="https://my.elementor.com/upgrade-subscription/?utm_source=editor-notice-bar&utm_medium=wp-dash&utm_campaign=pro-trial&utm_content=trial-expired" target="_blank">%s</a>', esc_html__( 'Upgrade now', 'elementor-pro' ) ),
				'action_title' => '',
				'action_url' => '',
				'muted_period' => 0,
			];
		}

		if ( License_API::is_license_expired() ) {
			return [
				'option_key' => self::ELEMENTOR_PRO_EDITOR_RENEW_LICENSE_NOTICE_DISMISSED,
				'icon' => 'eicon-lock',
				'message' => esc_html__(
					'Renew to unlock all Elementor Pro features',
					'elementor-pro'
				),
				'action_title' => esc_html__( 'Renew now', 'elementor-pro' ),
				'action_url' => 'https://go.elementor.com/editor-notice-bar-renew/',
				'secondary_message' => esc_html__(
					'Already renewed?',
					'elementor-pro'
				),
				'secondary_action_title' => esc_html__( 'Reload Editor', 'elementor-pro' ),
				'secondary_action_url' => Admin::get_url() . '&redirect-to-document=' . Plugin::elementor()->documents->get_current()->get_id(),
				'secondary_action_target' => '_self',
				'muted_period' => 0,
			];
		}

		if ( ! License_API::is_license_active() ) {
			return [
				'option_key' => self::ELEMENTOR_PRO_EDITOR_ACTIVATE_LICENSE_NOTICE_DISMISSED,
				'message' => esc_html__( 'Activate Your License and Get Access to Premium Elementor Templates, Support & Plugin Updates.', 'elementor-pro' ),
				'action_title' => esc_html__( 'Connect & Activate', 'elementor-pro' ),
				'action_url' => $license_admin->get_connect_url( [
					'mode' => 'popup',
					'callback_id' => 'editor-pro-activate',

					// UTM
					'utm_source' => 'editor-notice-bar',
					'utm_medium' => 'wp-dash',
					'utm_campaign' => 'connect-and-activate-license',
				] ),
				'muted_period' => 0,
			];
		}

		if ( ! License_API::is_license_about_to_expire() ) {
			return [];
		}

		if ( isset( $license_data['renewal_discount'] ) && 0 < $license_data['renewal_discount'] ) {
			$message = sprintf(
				/* translators: %s: Renewal discount. */
				esc_html__( 'Your Elementor Pro license is about to expire. Renew now and get an exclusive, time-limited %s discount.', 'elementor-pro' ),
				$license_data['renewal_discount'] . '&#37;'
			);
		} else {
			$message = esc_html__( 'Your Elementor Pro license is about to expire. Renew now and get updates, support, Pro widgets & templates for another year.', 'elementor-pro' );
		}

		return [
			'option_key' => self::ELEMENTOR_PRO_EDITOR_RENEW_ABOUT_TO_EXPIRE_LICENSE_NOTICE_DISMISSED,
			'message' => $message,
			'action_title' => esc_html__( 'Renew now', 'elementor-pro' ),
			'action_url' => 'https://go.elementor.com/editor-notice-bar-renew/',
			'muted_period' => 1,
		];
	}
}
