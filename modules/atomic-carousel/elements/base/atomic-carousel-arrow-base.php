<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Base;

use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Span_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** Shared behaviour of the previous/next arrows. */
abstract class Atomic_Carousel_Arrow_Base extends Atomic_Carousel_Child_Base {
	protected const IS_CONTAINER = true;

	const ICON_COLOR = 'rgba(238, 238, 238, 0.9)';

	abstract protected static function get_default_label(): string;

	abstract public static function get_aria_label(): string;

	abstract protected static function get_inline_edge(): string;

	abstract protected static function get_icon_name(): string;

	protected static function get_extra_keywords(): array {
		return [ 'arrow' ];
	}

	protected function define_default_html_tag() {
		return 'button';
	}

	protected function define_initial_attributes() {
		return [
			'type' => 'button',
			'aria-label' => static::get_aria_label(),
		];
	}

	protected function define_base_styles(): array {
		$is_start = 'inline-start' === static::get_inline_edge();

		$styles = [
			// Shares the viewport's grid cell, so it centres on the slides and not on the pagination row.
			'grid-row' => Span_Prop_Type::generate( '1 / 2' ),
			'grid-column' => Span_Prop_Type::generate( '1 / 2' ),
			'align-self' => String_Prop_Type::generate( 'center' ),
			'width' => static::auto(),
			'margin' => Dimensions_Prop_Type::generate( [
				'inline-start' => $is_start ? static::px( 0 ) : static::auto(),
				'inline-end' => $is_start ? static::auto() : static::px( 0 ),
			] ),
			'z-index' => Number_Prop_Type::generate( 1 ),
			'display' => String_Prop_Type::generate( 'flex' ),
			'align-items' => String_Prop_Type::generate( 'center' ),
			'justify-content' => String_Prop_Type::generate( 'center' ),
			'cursor' => String_Prop_Type::generate( 'pointer' ),
			'border-style' => String_Prop_Type::generate( 'none' ),
			'padding' => Dimensions_Prop_Type::generate( [
				'block-start' => static::px( 8 ),
				'block-end' => static::px( 8 ),
				'inline-start' => static::px( 8 ),
				'inline-end' => static::px( 8 ),
			] ),
		];

		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()->add_props( array_merge( $styles, static::idle_colors() ) )
				)
				// Declared before `disabled`, which must win.
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS )
						->add_props( static::idle_colors() )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::HOVER )
						->add_props( static::idle_colors() )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS_VISIBLE )
						// The arrows sit on images and dark slides, where a black ring disappears.
						->add_props( static::focus_visible_outline_props( static::ICON_COLOR ) )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::DISABLED )
						->add_props( [
							'cursor' => String_Prop_Type::generate( 'default' ),
							'opacity' => static::percent( 30 ),
						] )
				),
		];
	}

	private static function idle_colors(): array {
		return [
			'color' => Color_Prop_Type::generate( static::ICON_COLOR ),
			'background' => Background_Prop_Type::generate( [
				'color' => Color_Prop_Type::generate( 'transparent' ),
			] ),
		];
	}

	protected function define_atomic_style_states(): array {
		return [ Style_States::get_class_states_map()['disabled'] ];
	}

	public static function build_default_element(): array {
		return static::generate()
			->children( [ static::build_icon() ] )
			->editor_settings( [
				'title' => static::get_default_label(),
			] )
			->build();
	}

	protected function define_default_children() {
		return [ static::build_icon() ];
	}

	private static function build_icon(): array {
		return static::build_svg_icon( static::get_icon_name() );
	}
}
