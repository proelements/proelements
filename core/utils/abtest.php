<?php
namespace ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Abtest {

	const PREFIX_CACHE_KEY = '_elementor_ab_test_';

	const CACHE_TTL = 90 * DAY_IN_SECONDS;

	public static function get_variation( $test_name ): int {
		$variation_id = self::get_variation_id_from_cache( $test_name );

		if ( false === $variation_id ) {
			$variation_id = self::get_random_variation();
			self::set_variation_id_from_cache( $test_name, $variation_id );
		}

		return absint( $variation_id );
	}

	private static function get_variation_id_from_cache( $test_name ) {
		$cache_key = self::PREFIX_CACHE_KEY . $test_name;

		return get_transient( $cache_key );
	}

	private static function set_variation_id_from_cache( $test_name, $variation_id ): void {
		$cache_key = self::PREFIX_CACHE_KEY . $test_name;

		set_transient( $cache_key, $variation_id, self::CACHE_TTL );
	}

	private static function get_random_variation(): int {
		return mt_rand( 1, 2 );
	}
}
