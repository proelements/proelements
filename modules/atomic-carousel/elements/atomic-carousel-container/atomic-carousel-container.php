<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Container;

use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Slide\Atomic_Carousel_Slide;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** The slide track. The engine drives this node with an inline `transform`. */
class Atomic_Carousel_Container extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-container';

	public static $widget_description = 'The slide track of a carousel. Locked structural element whose only children are e-carousel-slide elements. Set the space between slides with the CSS gap property on this element.';

	protected static function get_extra_keywords(): array {
		return [ 'slides' ];
	}

	public function get_title() {
		return esc_html__( 'Slides', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-slider-push';
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'display' => String_Prop_Type::generate( 'flex' ),
							// Same `.e-con` 10px inset as the viewport. Slides are a percentage of
							// this content box, so the padding makes them narrower than the clip.
							'padding' => static::px( 0 ),
						] )
				),
		];
	}

	protected function define_initial_attributes() {
		return [
			'aria-live' => 'off',
		];
	}

	protected function define_allowed_child_types() {
		return [ Atomic_Carousel_Slide::ELEMENT_TYPE ];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-container' => __DIR__ . '/atomic-carousel-container.html.twig',
		];
	}
}
