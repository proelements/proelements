<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Front_Page extends Condition_Base {

	public static function get_type() {
		return 'singular';
	}

	public static function get_priority() {
		return 30;
	}

	public function get_name() {
		return 'front_page';
	}

	public function get_label() {
		return esc_html__( 'Front page', 'elementor-pro' );
	}

	public function check( $args ) {
		return is_front_page();
	}
}
