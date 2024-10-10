<?php

namespace ElementorPro\core\utils;

use Elementor\Core\Utils\Hints as Core_Hints;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Hints
 */
class Hints extends Core_Hints {
	public static function should_show_hint( $hint_id ): bool {
		// Check if needed functions exists - if not, require them
		// TODO: Remove in v3.27.0 [ED-15717]
		if ( ! function_exists( 'get_plugins' ) || ! function_exists( 'is_plugin_active' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( is_array( $hint_id ) ) {
			$hint = $hint_id;
		} else {
			$hint = self::get_hints( $hint_id );
		}
		foreach ( $hint as $key => $value ) {
			switch ( $key ) {
				case self::DISMISSED:
					// support multiple dismissed hints
					foreach ( (array) $value as $dismissed_hint ) {
						if ( self::is_dismissed( $dismissed_hint ) ) {
							return false;
						}
					}
					break;
				case self::CAPABILITY:
					if ( ! current_user_can( $value ) ) {
						return false;
					}
					break;
				case self::DEFINED:
					if ( defined( $value ) ) {
						return false;
					}
					break;
				case self::PLUGIN_INSTALLED:
					if ( ! self::is_plugin_installed( $value ) ) {
						return false;
					}
					break;
				case self::PLUGIN_ACTIVE:
					if ( ! self::is_plugin_active( $value ) ) {
						return false;
					}
					break;
			}
		}
		return true;
	}

	public static function get_hints( $hint_key = null ): array {
		$hints = [
			'site_mailer_forms_email_notice' => [
				self::DISMISSED => 'site_mailer_forms_email_notice',
				self::CAPABILITY => 'install_plugins',
				self::DEFINED => 'SITE_MAILER_VERSION',
			],
			'site_mailer_forms_submissions_notice' => [
				self::DISMISSED => [ 'site_mailer_forms_submissions_notice', 'site_mailer_forms_email_notice' ],
				self::CAPABILITY => 'install_plugins',
				self::DEFINED => 'SITE_MAILER_VERSION',
			],
		];
		if ( ! $hint_key ) {
			return $hints;
		}

		return $hints[ $hint_key ] ?? [];
	}
}
