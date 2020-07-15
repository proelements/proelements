<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Date extends Condition_Base {

	public static function get_type() {
		return 'archive';
	}

	public static function get_priority() {
		return 70;
	}

	public function get_name() {
		return 'date';
	}

	public function get_label() {
		return __( 'Date Archive', 'elementor-pro' );
	}

	public function check( $args ) {
		return is_date();
	}
}
