<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Header extends Header_Footer_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'header';

		return $properties;
	}

	public function get_name() {
		return 'header';
	}

	public static function get_title() {
		return __( 'Header', 'elementor-pro' );
	}
}
