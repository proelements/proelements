<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Dot;

use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Styleable pagination bullet. One prototype is stored; the handler clones it per snap.
 */
class Atomic_Carousel_Dot extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-dot';

	const SIZE = 6;
	const IDLE_COLOR = 'rgba(0, 0, 0, 0.2)';
	const ACTIVE_COLOR = '#000';

	public static $widget_description = 'The pagination bullet of a carousel. Locked, not a container. Exactly one prototype is stored as a child of e-carousel-pagination; the handler clones it once per snap and never writes the clones back. Style the prototype, including the Selected state for the active snap.';

	protected static function get_extra_keywords(): array {
		return [ 'dot', 'bullet', 'pagination' ];
	}

	public function get_title() {
		return esc_html__( 'Dot', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-circle';
	}

	protected function define_default_html_tag() {
		return 'button';
	}

	protected function define_initial_attributes() {
		return [
			'type' => 'button',
		];
	}

	protected function define_atomic_style_states(): array {
		return [ Style_States::get_class_states_map()['selected'] ];
	}

	protected function define_base_styles(): array {
		$active = static::fill( self::ACTIVE_COLOR );

		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( array_merge( [
							'display' => String_Prop_Type::generate( 'inline-flex' ),
							'appearance' => String_Prop_Type::generate( 'none' ),
							'width' => static::px( self::SIZE ),
							'height' => static::px( self::SIZE ),
							'min-width' => static::px( self::SIZE ),
							'min-height' => static::px( self::SIZE ),
							'padding' => Dimensions_Prop_Type::generate( [
								'block-start' => static::px( 0 ),
								'block-end' => static::px( 0 ),
								'inline-start' => static::px( 0 ),
								'inline-end' => static::px( 0 ),
							] ),
							'border-style' => String_Prop_Type::generate( 'none' ),
							'border-width' => static::px( 0 ),
							'border-radius' => static::percent( 50 ),
							'cursor' => String_Prop_Type::generate( 'pointer' ),
						], static::fill( self::IDLE_COLOR ) ) )
				)
				// A clicked dot keeps focus while the snap moves on, so `:focus` must not look selected.
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS )
						->add_props( static::fill( self::IDLE_COLOR ) )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::HOVER )
						->add_props( $active )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::SELECTED )
						->add_props( $active )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS_VISIBLE )
						->add_props( static::focus_visible_outline_props() )
				),
		];
	}

	protected function define_allowed_child_types() {
		return [];
	}

	public static function build_default_element(): array {
		return static::generate()
			->is_locked( true )
			->editor_settings( [
				'title' => esc_html__( 'Dot', 'elementor-pro' ),
			] )
			->build();
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-dot' => __DIR__ . '/atomic-carousel-dot.html.twig',
		];
	}

	private static function fill( string $color ): array {
		return [
			'background' => Background_Prop_Type::generate( [
				'color' => Color_Prop_Type::generate( $color ),
			] ),
		];
	}
}
