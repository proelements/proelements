<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Widget extends \ElementorPro\Base\Base_Widget {

	public function get_categories() {
		return [ 'woocommerce-elements-single' ];
	}
}
