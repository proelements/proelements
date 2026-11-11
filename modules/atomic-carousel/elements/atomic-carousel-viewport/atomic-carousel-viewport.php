<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Viewport;

use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Span_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Container\Atomic_Carousel_Container;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** The clipping window. The engine initialises on this node. */
class Atomic_Carousel_Viewport extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-viewport';

	public static $widget_description = 'The clipping window of a carousel. Locked structural element with exactly one child: e-carousel-container. Do not place slides or arrows directly inside it.';

	public function get_title() {
		return esc_html__( 'Carousel viewport', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-frame-expand';
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'display' => String_Prop_Type::generate( 'block' ),
							'overflow' => String_Prop_Type::generate( 'hidden' ),
							'grid-row' => Span_Prop_Type::generate( '1' ),
							'grid-column' => Span_Prop_Type::generate( '1' ),
							// `.e-con` adds 10px inline padding. Overflow clips at the padding edge,
							// so that gutter stays visible and the next slide peeks through it.
							'padding' => static::px( 0 ),
						] )
				),
		];
	}

	protected function define_default_children() {
		return [
			Atomic_Carousel_Container::generate()
				->meta( [ 'required' => true ] )
				->editor_settings( [
					'title' => esc_html__( 'Slides', 'elementor-pro' ),
				] )
				->build(),
		];
	}

	protected function define_allowed_child_types() {
		return [ Atomic_Carousel_Container::ELEMENT_TYPE ];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-viewport' => __DIR__ . '/atomic-carousel-viewport.html.twig',
		];
	}
}
