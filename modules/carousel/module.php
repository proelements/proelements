<?php
namespace ElementorPro\Modules\Carousel;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Media_Carousel',
			'Testimonial_Carousel',
			'Reviews',
		];
	}

	public function get_name() {
		return 'carousel';
	}
}
