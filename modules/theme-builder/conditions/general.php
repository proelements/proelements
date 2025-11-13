<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class General extends Condition_Base {

	protected $sub_conditions = [
		'archive',
		'singular',
	];

	public static function get_type() {
		return 'general';
	}

	public function get_name() {
		return 'general';
	}

	public function get_label() {
		return esc_html__( 'General', 'elementor-pro' );
	}

	public function get_all_label() {
		return esc_html__( 'Entire site', 'elementor-pro' );
	}

	public function check( $args ) {
		return true;
	}
}
