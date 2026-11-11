<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Base;

use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Shared behaviour of the autoplay Play and Pause buttons. The carousel root's state class decides
 * which one is visible, so each can be styled on its own.
 */
abstract class Atomic_Carousel_Autoplay_Control_Base extends Atomic_Carousel_Child_Base {
	protected const IS_CONTAINER = true;

	// Set on every state, so a theme's button hover colours never reach the icon.
	const ICON_COLOR = '#000';

	abstract protected static function get_default_label(): string;

	abstract public static function get_aria_label(): string;

	abstract protected static function get_icon_name(): string;

	protected static function get_extra_keywords(): array {
		return [ 'autoplay', 'play', 'pause' ];
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
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( array_merge( [
							'display' => String_Prop_Type::generate( 'flex' ),
							'width' => static::auto(),
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
						], static::idle_colors() ) )
				)
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
						->add_props( static::focus_visible_outline_props() )
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

	public static function build_default_element( bool $mark_required = false ): array {
		$builder = static::generate()
			->children( [ static::build_svg_icon( static::get_icon_name() ) ] )
			->editor_settings( [
				'title' => static::get_default_label(),
			] );

		if ( $mark_required ) {
			$builder->meta( [ 'required' => true ] );
		}

		return $builder->build();
	}

	protected function define_default_children() {
		return [ static::build_svg_icon( static::get_icon_name() ) ];
	}
}
