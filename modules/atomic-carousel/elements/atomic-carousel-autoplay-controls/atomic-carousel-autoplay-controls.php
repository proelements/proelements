<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Controls;

use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Span_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Plugin;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Pause\Atomic_Carousel_Autoplay_Pause;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Play\Atomic_Carousel_Autoplay_Play;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** Wrapper of the autoplay Play and Pause buttons. The carousel root's state class shows one of them. */
class Atomic_Carousel_Autoplay_Controls extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-autoplay-controls';

	protected const IS_CONTAINER = true;

	public static $widget_description = 'The autoplay play/pause controls of a carousel. Locked container, present only while autoplay and show_autoplay_button are on. REQUIRED children: exactly one e-carousel-autoplay-play and one e-carousel-autoplay-pause; only the one matching the current state is visible. Must be a direct child of e-carousel.';

	protected static function get_extra_keywords(): array {
		return [ 'autoplay', 'play', 'pause', 'controls' ];
	}

	public function get_title() {
		return esc_html__( 'Play/Pause Controls', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-play';
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'display' => String_Prop_Type::generate( 'flex' ),
							'width' => static::auto(),
							'align-items' => String_Prop_Type::generate( 'center' ),
							'grid-row' => Span_Prop_Type::generate( '3' ),
							'grid-column' => Span_Prop_Type::generate( '1' ),
							// The style schema has no `justify-self`; auto inline margins centre the grid item.
							'margin' => Dimensions_Prop_Type::generate( [
								'inline-start' => static::auto(),
								'inline-end' => static::auto(),
							] ),
						] )
				),
		];
	}

	protected function define_atomic_style_states(): array {
		$class_states = Style_States::get_class_states_map();

		return [
			$class_states['playing'],
			$class_states['paused'],
		];
	}

	protected function define_allowed_child_types() {
		return [
			Atomic_Carousel_Autoplay_Play::ELEMENT_TYPE,
			Atomic_Carousel_Autoplay_Pause::ELEMENT_TYPE,
		];
	}

	protected function define_default_children() {
		return [
			Atomic_Carousel_Autoplay_Play::build_default_element( true ),
			Atomic_Carousel_Autoplay_Pause::build_default_element( true ),
		];
	}

	/**
	 * Component instances attach the controls from the children dependency's `default_model`, which is
	 * empty and only hydrated in the editor. Print the missing default buttons for this response only.
	 * They are not written back into `elements`.
	 */
	protected function render_children_to_html(): string {
		$html = parent::render_children_to_html();

		foreach ( [ Atomic_Carousel_Autoplay_Play::class, Atomic_Carousel_Autoplay_Pause::class ] as $class ) {
			if ( $this->has_child_of_type( $class::ELEMENT_TYPE ) ) {
				continue;
			}

			$fallback = Plugin::$instance->elements_manager->create_element_instance(
				static::with_derived_ids( $class::build_default_element(), $this->get_id() . '-' . $class::ELEMENT_TYPE )
			);

			if ( ! $fallback ) {
				continue;
			}

			ob_start();
			$fallback->print_element();
			$html .= ob_get_clean();
		}

		return $html;
	}

	private function has_child_of_type( string $type ): bool {
		foreach ( $this->get_children() as $child ) {
			if ( $type === $child->get_name() ) {
				return true;
			}
		}

		return false;
	}

	private static function with_derived_ids( array $element, string $id ): array {
		$element['id'] = $id;

		foreach ( $element['elements'] ?? [] as $index => $child ) {
			$element['elements'][ $index ] = static::with_derived_ids( $child, $id . '-' . $index );
		}

		return $element;
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-autoplay-controls' => __DIR__ . '/atomic-carousel-autoplay-controls.html.twig',
		];
	}
}
