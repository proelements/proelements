<?php
namespace ElementorPro\Base;

use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Widget extends Widget_Base {

	use Base_Widget_Trait;

	public function get_categories() {
		return [ 'pro-elements' ];
	}
}
