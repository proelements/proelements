<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Base;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Svg\Atomic_Svg;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Icon_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Size_Constants;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Shared behaviour of the locked carousel child elements.
 */
abstract class Atomic_Carousel_Child_Base extends Atomic_Element_Base {
	// Declared only here. A subclass that `use`s the trait again would override `build_template_context()`.
	use Has_Element_Template;

	const BASE_STYLE_KEY = 'base';

	protected const IS_CONTAINER = false;

	const ICON_LIBRARY = 'fa-solid';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'permanently_locked', true );

		if ( static::IS_CONTAINER ) {
			$this->meta( 'is_container', true );
		}
	}

	public static function get_type() {
		return static::ELEMENT_TYPE;
	}

	public static function get_element_type(): string {
		return static::ELEMENT_TYPE;
	}

	public function should_show_in_panel() {
		return false;
	}

	public function get_keywords() {
		return array_merge(
			[ 'ato', 'atom', 'atoms', 'atomic', 'carousel' ],
			static::get_extra_keywords()
		);
	}

	protected static function get_extra_keywords(): array {
		return [];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()->default( [] ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
		];
	}

	public static function get_props_schema(): array {
		$schema = parent::get_props_schema();

		unset( $schema['display-conditions'] );

		return $schema;
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( [] ),
		];
	}

	protected static function px( $size ): array {
		return Size_Prop_Type::generate( [
			'size' => $size,
			'unit' => 'px',
		] );
	}

	protected static function percent( $size ): array {
		return Size_Prop_Type::generate( [
			'size' => $size,
			'unit' => Size_Constants::UNIT_PERCENT,
		] );
	}

	protected static function auto(): array {
		return Size_Prop_Type::generate( [
			'size' => '',
			'unit' => Size_Constants::UNIT_AUTO,
		] );
	}

	protected static function custom( string $value ): array {
		return Size_Prop_Type::generate( [
			'size' => $value,
			'unit' => Size_Constants::UNIT_CUSTOM,
		] );
	}

	protected static function focus_visible_outline_props( string $color = '#000' ): array {
		return [
			'outline-width' => static::px( 2 ),
			'outline-style' => String_Prop_Type::generate( 'solid' ),
			'outline-color' => Color_Prop_Type::generate( $color ),
			'outline-offset' => static::px( 2 ),
		];
	}

	protected static function build_svg_icon( string $icon_name ): array {
		return Atomic_Svg::generate()
			->settings( [
				'svg' => Icon_Prop_Type::generate( [
					'value' => String_Prop_Type::generate( static::ICON_LIBRARY . ' fa-' . $icon_name ),
					'library' => String_Prop_Type::generate( static::ICON_LIBRARY ),
				] ),
			] )
			->build();
	}

	protected function build_template_context(): array {
		return array_merge( $this->build_base_template_context(), [
			'carousel_i18n' => Carousel_I18n::bag(),
		] );
	}
}
