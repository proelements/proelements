<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Pagination;

use Elementor\Modules\AtomicWidgets\ChildrenDependencies\Child_Dependency;
use Elementor\Modules\AtomicWidgets\Elements\Base\Element_Builder;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Span_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\Utils\Element_Position;
use Elementor\Plugin;
use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Dot\Atomic_Carousel_Dot;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Child_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** Dot strip. Holds one styleable prototype; the handler clones it per snap. */
class Atomic_Carousel_Pagination extends Atomic_Carousel_Child_Base {
	const ELEMENT_TYPE = 'e-carousel-pagination';

	protected const IS_CONTAINER = true;

	public static $widget_description = 'The pagination strip of a carousel. Locked container with exactly one child, e-carousel-dot. That child is a prototype: the handler clones it once per snap position and never writes the clones into the document. Gap on this element is the space between dots. Must be a direct child of e-carousel.';

	protected static function get_extra_keywords(): array {
		return [ 'pagination', 'dots' ];
	}

	public function get_title() {
		return esc_html__( 'Pagination', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-ellipsis-h';
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'display' => String_Prop_Type::generate( 'flex' ),
							'justify-content' => String_Prop_Type::generate( 'center' ),
							'align-items' => String_Prop_Type::generate( 'center' ),
							'gap' => static::px( 12 ),
							'grid-row' => Span_Prop_Type::generate( '2' ),
							'grid-column' => Span_Prop_Type::generate( '1' ),
							'padding' => Dimensions_Prop_Type::generate( [
								'block-start' => static::px( 16 ),
								'block-end' => static::px( 16 ),
								'inline-start' => static::px( 0 ),
								'inline-end' => static::px( 0 ),
							] ),
						] )
				),
		];
	}

	protected function define_initial_attributes() {
		return [
			'aria-label' => Carousel_I18n::bag()['pagination_aria_label'],
		];
	}

	protected function define_allowed_child_types() {
		return [ Atomic_Carousel_Dot::ELEMENT_TYPE ];
	}

	protected function define_default_children() {
		return [ Atomic_Carousel_Dot::build_default_element() ];
	}

	/**
	 * The bullet is required chrome. `classes` is never `false`, including when the stored
	 * value is still missing, so the prototype is reattached if it is removed. Stash keeps
	 * the user's styles on that prototype.
	 */
	protected function define_children_dependencies(): array {
		return [
			Child_Dependency::for( Atomic_Carousel_Dot::ELEMENT_TYPE )
				->when( Dependency_Manager::make()->where( [
					'operator' => 'ne',
					'path' => [ 'classes' ],
					'value' => false,
				] ) )
				->position( Element_Position::last() )
				->stash( true )
				->default_model(
					Element_Builder::make( Atomic_Carousel_Dot::ELEMENT_TYPE )
						->is_locked( true )
						->build()
				),
		];
	}

	public static function build_default_element(): array {
		return static::generate()
			->children( [ Atomic_Carousel_Dot::build_default_element() ] )
			->editor_settings( [
				'title' => esc_html__( 'Pagination', 'elementor-pro' ),
			] )
			->build();
	}

	/**
	 * A document saved before the dot child existed renders an empty strip. Print one prototype
	 * for this response only. It is not written back into `elements`.
	 */
	protected function render_children_to_html(): string {
		$html = parent::render_children_to_html();

		if ( $this->has_dot_child() ) {
			return $html;
		}

		$fallback = Plugin::$instance->elements_manager->create_element_instance( array_merge(
			Atomic_Carousel_Dot::build_default_element(),
			[ 'id' => $this->get_id() . '-dot' ]
		) );

		if ( ! $fallback ) {
			return $html;
		}

		ob_start();
		$fallback->print_element();

		return $html . ob_get_clean();
	}

	private function has_dot_child(): bool {
		foreach ( $this->get_children() as $child ) {
			if ( Atomic_Carousel_Dot::ELEMENT_TYPE === $child->get_name() ) {
				return true;
			}
		}

		return false;
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-pagination' => __DIR__ . '/atomic-carousel-pagination.html.twig',
		];
	}
}
