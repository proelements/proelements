<?php
namespace ElementorPro\Modules\Usage;

use Elementor\Modules\System_Info\Reporters\Base as Base_Reporter;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Features_Reporter extends Base_Reporter {

	public function get_title() {
		return esc_html__( 'Features', 'elementor-pro' );
	}

	public function get_fields() {
		return [
			'custom_fonts' => 'Custom Fonts',
			'custom_icons' => 'Custom Icons',
		];
	}

	public function get_custom_fonts() : array {
		return [
			'value' => count( Module::get_fonts_usage() ),
		];
	}

	public function get_custom_icons() : array {
		return [
			'value' => count( Module::get_icons_usage() ),
		];
	}
}
