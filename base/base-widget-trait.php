<?php
namespace ElementorPro\Base;

use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Base_Widget_Trait {
	public function is_editable() {
		return License_API::is_license_active();
	}

	public function get_categories() {
		return [ 'pro-elements' ];
	}
}
