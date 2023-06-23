<?php
namespace ElementorPro\Modules\NestedCarousel;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const NESTED_CAROUSEL = 'nested-carousel';

	public function get_widgets() {
		return [
			'Nested_Carousel',
		];
	}

	public function get_name() {
		return static::NESTED_CAROUSEL;
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( 'nested-elements' );
	}
}
