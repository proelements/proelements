<?php
namespace ElementorPro\Core\Compatibility;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Compatibility {

	public static function register_actions() {
		add_action( 'init', [ __CLASS__, 'on_init' ] );
	}

	public static function on_init() {
		static::translate_press();
	}

	private static function translate_press() {
		if ( ! class_exists( 'TRP_Translate_Press' ) ) {
			return;
		}

		add_filter( 'elementor_pro/license/api/use_home_url', '__return_false' );
	}
}
