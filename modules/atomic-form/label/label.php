<?php
namespace ElementorPro\Modules\AtomicForm\Label;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Inline_Editing_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Html_V3_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Label extends Atomic_Widget_Base {
	use Has_Template;

	public static $widget_description = 'Display a label with customizable text and for attribute.';

	public static function get_element_type(): string {
		return 'e-form-label';
	}

	public function get_title(): string {
		return esc_html__( 'Label', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-label';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'label', 'text' ];
	}

	protected static function define_props_schema(): array {
		return [
			'tag' => String_Prop_Type::make()
				->default( 'label' ),
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'text' => Html_V3_Prop_Type::make()
				->default( [
					'content'  => String_Prop_Type::generate( 'Form label' ),
					'children' => [],
				] ),
			'input-id' => String_Prop_Type::make()
				->default( '' )->description( 'ID of connected input' ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Inline_Editing_Control::bind_to( 'text' )
						->set_label( __( 'Label text', 'elementor-pro' ) ),
					Select_Control::bind_to( 'input-id' )
						->set_options( [] )
						->set_collection_id( 'form-elements' )
						->set_label( __( 'Connected to input ID', 'elementor-pro' ) )
						->set_meta( [
							'layout' => 'full',
						] ),
				] ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( $this->get_settings_controls() ),
		];
	}

	protected function get_settings_controls(): array {
		return [
			Text_Control::bind_to( '_cssid' )
				->set_label( __( 'ID', 'elementor-pro' ) )
				->set_meta( $this->get_css_id_control_meta() ),
		];
	}

	protected function get_templates(): array {
		return [
			'label' => __DIR__ . '/label.html.twig',
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	protected function define_base_styles(): array {

		$text_color_value = Color_Prop_Type::generate( '#0c0d0e' );
		$font_size_value = Size_Prop_Type::generate( [
			'size' => 14,
			'unit' => 'px',
		] );

		return [
			'base' => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
					->add_props( [
						'color' => $text_color_value,
						'font-size' => $font_size_value,
					] ),
				),
		];
	}
}
