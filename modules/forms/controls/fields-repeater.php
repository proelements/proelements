<?php

namespace ElementorPro\Modules\Forms\Controls;

use Elementor\Control_Repeater;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Fields_Repeater extends Control_Repeater {

	const CONTROL_TYPE = 'form-fields-repeater';

	public function get_type() {
		return self::CONTROL_TYPE;
	}
}
