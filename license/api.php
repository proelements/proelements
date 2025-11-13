<?php
namespace ElementorPro\License;

use Elementor\Core\Common\Modules\Connect\Module as ConnectModule;
use ElementorPro\Plugin;
use ElementorPro\Modules\Tiers\Module as Tiers;
use Elementor\Api as Core_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class API {

	const PRODUCT_NAME = 'Elementor Pro';

	/**
	 * @deprecated 3.8.0
	 */
	const STORE_URL = 'https://my.elementor.com/api/v1/licenses/';

	const BASE_URL = 'https://my.elementor.com/api/v2/';

	const RENEW_URL = 'https://go.elementor.com/renew/';

	// License Statuses
	const STATUS_EXPIRED = 'expired';
	const STATUS_SITE_INACTIVE = 'site_inactive';
	const STATUS_CANCELLED = 'cancelled';
	const STATUS_REQUEST_LOCKED = 'request_locked';
	const STATUS_MISSING = 'missing';
	const STATUS_HTTP_ERROR = 'http_error';

	/**
	 * @deprecated 3.8.0
	 */
	const STATUS_VALID = 'valid';
	/**
	 * @deprecated 3.8.0
	 */
	const STATUS_INVALID = 'invalid';

	/**
	 * @deprecated 3.8.0
	 */
	const STATUS_DISABLED = 'disabled';

	/**
	 * @deprecated 3.8.0
	 */
	const STATUS_REVOKED = 'revoked';

	// Features
	const FEATURE_PRO_TRIAL = 'pro_trial';

	// Requests lock config.
	const REQUEST_LOCK_TTL = MINUTE_IN_SECONDS;
	const REQUEST_LOCK_OPTION_NAME = '_elementor_pro_api_requests_lock';

	const TRANSIENT_KEY_PREFIX = 'elementor_pro_remote_info_api_data_';

	const LICENCE_TIER_KEY = 'tier';
	const LICENCE_GENERATION_KEY = 'generation';

	// Tiers.
	const TIER_ESSENENTIAL = 'essential';
	const TIER_ADVANCED = 'advanced';
	const TIER_EXPERT = 'expert';
	const TIER_AGENCY = 'agency';

	// Generations.
	const GENERATION_ESSENTIAL_OCT2023 = 'essential-oct2023';
	const GENERATION_EMPTY = 'empty';

	const BC_VALIDATION_CALLBACK = 'should_allow_all_features';

	protected static $transient_data = [];

	public static function set_transient( $cache_key, $value, $expiration = '+12 hours' ) {
		$data = [
			'timeout' => strtotime( $expiration, current_time( 'timestamp' ) ),
			'value' => json_encode( $value ),
		];

		$updated = update_option( $cache_key, $data, false );
		if ( false === $updated ) {
			self::$transient_data[ $cache_key ] = $data;
		}
	}

	private static function get_transient( $cache_key ) {
		$cache = self::$transient_data[ $cache_key ] ?? get_option( $cache_key );

		if ( empty( $cache['timeout'] ) ) {
			return false;
		}

		if ( current_time( 'timestamp' ) > $cache['timeout'] && is_user_logged_in() ) {
			return false;
		}

		return json_decode( $cache['value'], true );
	}

	public static function set_license_data( $license_data, $expiration = null ) {
	}
 	public static function get_license_data( $force_request = false ) {
		$license_data['success'] = true;
		$license_data['expires'] = 'lifetime';
		$license_data['features'] = [  
		                             'custom-attributes',
		                             'custom_code',
		                             'custom-css',
		                             'global-css',
		                             'display-conditions',
		                             'dynamic-tags-acf',
		                             'dynamic-tags-pods',
		                             'dynamic-tags-toolset',
		                             'element-manager-permissions',
		                             'global-widget',
		                             'editor_comments',
		                             'stripe-button',
		                             'popup',
		                             'role-manager',
		                             'woocommerce-menu-cart',
		                             'product-single',
		                             'product-archive',
		                             'settings-woocommerce-pages',
		                             'settings-woocommerce-notices',
		                             'dynamic-tags-wc',
		                             'settings-woocommerce-pages',
		                             'settings-woocommerce-notices'];
		return $license_data;
	}

	public static function get_version( $force_update = true, $additional_status = '' ) {
		return [];
	}

	public static function get_plugin_package_url( $version ) {
		return '';
	}

	public static function get_errors() {
		return [
			'no_activations_left' => '',
			'expired' => '',
			'missing' => '',
			'cancelled' => '',
			'key_mismatch' => '',
		];
	}

	public static function get_error_message( $error ) {
		$errors = self::get_errors();

		if ( isset( $errors[ $error ] ) ) {
			$error_msg = $errors[ $error ];
		} else {
			$error_msg = esc_html__( 'An error occurred. Please check your internet connection and try again. If the problem persists, contact our support.', 'elementor-pro' ) . ' (' . $error . ')';
		}

		return $error_msg;
	}

	public static function is_license_active() {
		$license_data = self::get_license_data();

		return (bool) $license_data['success'];
	}

	public static function is_license_expired() {
		$license_data = self::get_license_data();

		return ! empty( $license_data['error'] ) && self::STATUS_EXPIRED === $license_data['error'];
	}

	public static function is_licence_pro_trial() {
		return self::is_licence_has_feature( self::FEATURE_PRO_TRIAL );
	}

	public static function is_licence_has_feature( $feature_name, $license_check_validator = null ) {
		$license_data = self::get_license_data();

		if ( self::custom_licence_validator_passed( $license_check_validator ) ) {
			return true;
		}

		return ! empty( $license_data['features'] )
			&& in_array( $feature_name, $license_data['features'], true );
	}

	private static function custom_licence_validator_passed( $license_check_validator ) {
		return null !== $license_check_validator &&
			is_callable( [ __CLASS__, $license_check_validator ] ) &&
			self::$license_check_validator();
	}

	private static function should_allow_all_features() {
		return ! self::licence_supports_tiers() || self::is_frontend();
	}

	private static function is_frontend() {
		return ! is_admin() && ! Plugin::elementor()->preview->is_preview_mode();
	}

	/*
	 * We can consider removing this function and it's usages at a future point if
	 * we feel confident that all user's Licence Caches has been refreshed
	 * and should definitely contain a tier and generation.
	 */
	private static function licence_supports_tiers() {
		$license_data = self::get_license_data();

		return ! empty( $license_data[ static::LICENCE_TIER_KEY ] ) && ! empty( $license_data[ static::LICENCE_GENERATION_KEY ] );
	}

	public static function is_need_to_show_upgrade_promotion() {
		if ( ! self::licence_supports_tiers() ) {
			return false;
		}

		return self::is_licence_tier( static::TIER_ESSENENTIAL ) && self::is_licence_generation( static::GENERATION_EMPTY );
	}

	private static function is_licence_tier( $tier ) {
		if ( ! self::licence_supports_tiers() ) {
			return false;
		}

		return self::get_license_data()[ static::LICENCE_TIER_KEY ] === $tier;
	}

	private static function is_licence_generation( $generation ) {
		if ( ! self::licence_supports_tiers() ) {
			return false;
		}

		return self::get_license_data()[ static::LICENCE_GENERATION_KEY ] === $generation;
	}

	public static function filter_active_features( $features ) {
		if ( self::should_allow_all_features() ) {
			return array_values( $features );
		}

		$license_data = self::get_license_data();
		$filtered_values = [];

		if ( ! is_array( $license_data['features'] ) ) {
			$license_data['features'] = [];
		}

		foreach ( $license_data['features'] as $key ) {
			if ( ! array_key_exists( $key, $features ) ) {
				continue;
			}

			$filtered_values[] = $features[ $key ];
		}

		return $filtered_values;
	}

	public static function get_promotion_widgets() {
		$promotions = Core_API::get_promotion_widgets();
		$license_data = self::get_license_data();

		if ( ! self::licence_supports_tiers() ) {
			return [];
		}

		if ( ! is_array( $license_data['features'] ) ) {
			$license_data['features'] = [];
		}

		foreach ( $promotions as $key => $promotion ) {
			if ( ! in_array( $promotion['name'], $license_data['features'] ) ) {
				continue;
			}

			unset( $promotions[ $key ] );
		}

		return array_values( $promotions );
	}

	/*
	 * Check if the Licence is not Expired and also has a Feature.
	 * Needed because even Expired Licences keep the features array for BC.
	 */
	public static function active_licence_has_feature( $feature_name ) {
		return ! self::is_license_expired() && self::is_licence_has_feature( $feature_name, static::BC_VALIDATION_CALLBACK );
	}

	public static function is_license_about_to_expire() {
		$license_data = self::get_license_data();

		if ( ! empty( $license_data['recurring'] ) ) {
			return false;
		}

		if ( 'lifetime' === $license_data['expires'] ) {
			return false;
		}

		return time() > strtotime( '-28 days', strtotime( $license_data['expires'] ) );
	}

	/**
	 * @param string $library_type
	 *
	 * @return int
	 */
	public static function get_library_access_level( $library_type = 'template' ) {
		$license_data = static::get_license_data();

		$access_level = ConnectModule::ACCESS_LEVEL_CORE;

		if ( static::is_license_active() ) {
			$access_level = ConnectModule::ACCESS_LEVEL_PRO;
		}

		// For BC: making sure that it returns the correct access_level even if "features" is not defined in the license data.
		if ( ! isset( $license_data['features'] ) || ! is_array( $license_data['features'] ) ) {
			return $access_level;
		}

		$library_access_level_prefix = "{$library_type}_access_level_";

		foreach ( $license_data['features'] as $feature ) {
			if ( strpos( $feature, $library_access_level_prefix ) !== 0 ) {
				continue;
			}

			$access_level = (int) str_replace( $library_access_level_prefix, '', $feature );
		}

		return $access_level;
	}

	/**
	 * The license API uses "tiers" and "generations".
	 * Because we don't use the same logic, and have a flat list of prioritized tiers & generations,
	 * we take the generation if exists and fallback to the tier otherwise.
	 *
	 * For example:
	 *   [ 'tier' => 'essential', 'generation' => 'essential-oct2023' ] => 'essential-oct2023'
	 *   [ 'tier' => 'essential', 'generation' => 'empty' ] => 'essential'
	 *   [ 'tier' => '', 'generation' => '' ] => 'essential-oct2023'
	 *   [] => 'essential-oct2023'
	 *
	 * @return string
	 */
	public static function get_access_tier() {
		if ( ! static::is_license_active() ) {
			return 'free';
		}

		$license_data = static::get_license_data();
		$tier = $license_data['tier'] ?? null;
		$generation = $license_data['generation'] ?? null;

		// Fallback to legacy license when the API returns empty values.
		$is_legacy_api = empty( $tier ) || empty( $generation );

		if ( $is_legacy_api ) {
			return 'essential-oct2023';
		}

		// The license API returns "empty" instead of empty string.
		$has_generation = 'empty' !== $generation;

		if ( $has_generation ) {
			return $generation;
		}

		return $tier;
	}

	public static function get_plan_type() {
		if ( ! static::is_license_active() ) {
			return 'free';
		}

		$license_data = static::get_license_data();
		$plan_type = $license_data['tier'] ?? 'free';

		return $plan_type;
	}
}
