<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Slide;

use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Flex_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Responsive_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Styles_Renderer;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Plugin;
use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** One slide. Empty by default; width comes from `--e-carousel-slides-per-view` and, per breakpoint, `--e-carousel-spv-*` on the root. */
class Atomic_Carousel_Slide extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-slide';

	protected const IS_CONTAINER = true;

	const LAYOUT_CLASS = 'e-carousel__slide';

	const SLIDE_WIDTH = 'calc((100% - (var(--e-carousel-slides-per-view, 3) - 1) * var(--e-carousel-gap, 0px)) / var(--e-carousel-slides-per-view, 3))';

	public static $widget_description = 'A single carousel slide. Accepts any element inside; starts empty so a full layout can be built in it. Lives only inside e-carousel-container.';

	protected static function get_extra_keywords(): array {
		return [ 'slide' ];
	}

	public function get_title() {
		return esc_html__( 'Slide', 'elementor-pro' );
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
							'display' => String_Prop_Type::generate( 'block' ),
							'position' => String_Prop_Type::generate( 'relative' ),
							'min-width' => static::px( 0 ),
						] )
				),
		];
	}

	/**
	 * Slides Per View and the gap, as module CSS instead of base styles, so the panel does not show
	 * these internals. `div.e-carousel__slide` (0,1,1) outranks any single-class rule and stays below
	 * the slide's own styles (0,2,0), whatever the load order.
	 */
	public static function get_layout_css(): string {
		$definition = Style_Definition::make()
			->add_variant(
				Style_Variant::make()
					->add_props( [
						'flex' => Flex_Prop_Type::generate( [
							'flexGrow' => Number_Prop_Type::generate( 0 ),
							'flexShrink' => Number_Prop_Type::generate( 0 ),
							'flexBasis' => static::custom( self::SLIDE_WIDTH ),
						] ),
						// A margin on every slide, including the last, instead of a `gap` on the track:
						// the engine only reads the last slide's end margin to size the loop seam.
						'margin' => Dimensions_Prop_Type::generate( [
							'inline-end' => static::custom( 'var(--e-carousel-gap, 0px)' ),
						] ),
					] )
			);

		// Widest first: in one stylesheet a narrower `max-width` query has to come later to win.
		foreach ( array_reverse( Responsive_Prop_Type::breakpoint_keys() ) as $breakpoint ) {
			if ( Breakpoints_Manager::BREAKPOINT_KEY_DESKTOP === $breakpoint ) {
				continue;
			}

			$definition->add_variant(
				Style_Variant::make()
					->set_breakpoint( $breakpoint )
					->add_prop( 'flex', self::flex_for_breakpoint( $breakpoint ) )
			);
		}

		$css = Styles_Renderer::make( Plugin::$instance->breakpoints->get_breakpoints_config() )
			->render( [ $definition->build( self::LAYOUT_CLASS ) ] );

		return str_replace( '.elementor .' . self::LAYOUT_CLASS, 'div.' . self::LAYOUT_CLASS, $css );
	}

	private static function flex_for_breakpoint( string $breakpoint ): array {
		$slides_per_view = Responsive_Prop_Type::css_var_fallback_chain(
			'e-carousel-spv',
			$breakpoint,
			(string) 3
		);

		$width = sprintf(
			'calc((100%% - (%s - 1) * var(--e-carousel-gap, 0px)) / %s)',
			$slides_per_view,
			$slides_per_view
		);

		return Flex_Prop_Type::generate( [
			'flexGrow' => Number_Prop_Type::generate( 0 ),
			'flexShrink' => Number_Prop_Type::generate( 0 ),
			'flexBasis' => static::custom( $width ),
		] );
	}

	protected function define_initial_attributes() {
		return [
			'role' => 'group',
			'aria-roledescription' => Carousel_I18n::bag()['slide_roledescription'],
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-slide' => __DIR__ . '/atomic-carousel-slide.html.twig',
		];
	}
}
