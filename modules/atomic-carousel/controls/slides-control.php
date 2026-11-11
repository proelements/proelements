<?php

namespace ElementorPro\Modules\AtomicCarousel\Controls;

use Elementor\Modules\AtomicWidgets\Controls\Base\Element_Control_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Slides_Control extends Element_Control_Base {
	public function get_type(): string {
		return 'slides';
	}

	public function get_props(): array {
		return [];
	}
}
