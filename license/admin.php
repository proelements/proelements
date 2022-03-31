<?php
namespace ElementorPro\License;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin {
	public static function get_url() {
		return \Elementor\Utils::get_pro_link( 'https://elementor.com/pro/?utm_source=wp-plugins&utm_campaign=gopro&utm_medium=wp-dash' );
	}

	public static function get_license_key() {
		return '';
	}
}
