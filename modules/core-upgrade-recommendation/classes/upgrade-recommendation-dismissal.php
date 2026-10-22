<?php

namespace ElementorPro\Modules\CoreUpgradeRecommendation\Classes;

use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Upgrade_Recommendation_Dismissal {
	const DISMISS_DURATION_SECONDS = 12 * HOUR_IN_SECONDS;

	const NOTICE_ID_PREFIX = 'elementor_pro_core_upgrade_recommendation_';

	const TRANSIENT_PREFIX = 'elementor_pro_core_upgrade_rec_dismiss_';

	private static $dismiss_handlers_registered = false;

	public static function register_dismiss_handlers(): void {
		if ( self::$dismiss_handlers_registered ) {
			return;
		}

		self::$dismiss_handlers_registered = true;

		add_action( 'wp_ajax_elementor_set_admin_notice_viewed', [ __CLASS__, 'handle_dismiss' ], 5 );
		add_action( 'admin_post_elementor_set_admin_notice_viewed', [ __CLASS__, 'handle_dismiss' ], 5 );
	}

	public static function handle_dismiss(): void {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce is verified below for matching notices.
		$notice_id = Utils::get_super_global_value( $_REQUEST, 'notice_id' );

		if ( ! is_string( $notice_id ) || ! self::is_upgrade_recommendation_notice( $notice_id ) ) {
			return;
		}

		check_admin_referer( 'elementor_set_admin_notice_viewed' );

		if ( ! current_user_can( 'update_plugins' ) ) {
			wp_die();
		}

		$recommended_version = self::get_recommended_version_from_notice_id( $notice_id );

		if ( $recommended_version ) {
			self::dismiss( $recommended_version );
		}

		if ( ! wp_doing_ajax() ) {
			wp_safe_redirect( admin_url() );
			die;
		}

		wp_die();
	}

	public static function should_show_notice( string $recommended_version, string $core_version ): bool {
		if ( self::is_dismissed( $recommended_version ) ) {
			return false;
		}

		return ! elementor_pro_compare_major_version( $core_version, $recommended_version, '>=' );
	}

	public static function get_notice_id( string $recommended_version ): string {
		return self::NOTICE_ID_PREFIX . $recommended_version;
	}

	public static function get_transient_key( string $recommended_version ): string {
		return self::TRANSIENT_PREFIX . str_replace( '.', '_', $recommended_version );
	}

	/**
	 * ED-25616 uses a site-wide dismiss (12h), not Core's per-user `User::is_user_notice_viewed()`.
	 * Any admin who dismisses hides the notice for all admins until the transient expires.
	 * On multisite, `get_site_transient` / `set_site_transient` are shared across the network (one dismiss hides for all sites).
	 */
	public static function is_dismissed( string $recommended_version ): bool {
		return (bool) get_site_transient( self::get_transient_key( $recommended_version ) );
	}

	public static function dismiss( string $recommended_version ): bool {
		return set_site_transient(
			self::get_transient_key( $recommended_version ),
			1,
			self::DISMISS_DURATION_SECONDS
		);
	}

	public static function clear_dismissal( string $recommended_version ): void {
		delete_site_transient( self::get_transient_key( $recommended_version ) );
	}

	public static function is_upgrade_recommendation_notice( string $notice_id ): bool {
		return 0 === strpos( $notice_id, self::NOTICE_ID_PREFIX );
	}

	public static function get_recommended_version_from_notice_id( string $notice_id ): ?string {
		if ( ! self::is_upgrade_recommendation_notice( $notice_id ) ) {
			return null;
		}

		$version = substr( $notice_id, strlen( self::NOTICE_ID_PREFIX ) );

		return '' !== $version ? $version : null;
	}
}
