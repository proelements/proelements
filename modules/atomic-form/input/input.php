<?php
namespace ElementorPro\Modules\AtomicForm\Input;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Input extends Atomic_Widget_Base {
	use Has_Template;

	public static $widget_description = 'Display a text input with customizable type, placeholder, default value, required, readonly, and attributes.';

	public static function get_element_type(): string {
		return 'e-form-input';
	}

	public function get_title(): string {
		return esc_html__( 'Input', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-input';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'input', 'text', 'email', 'number', 'tel', 'password' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'placeholder' => String_Prop_Type::make()
				->default( '' ),
			'type' => String_Prop_Type::make()
				->default( 'text' )
				->enum( [ 'text', 'email', 'number', 'tel', 'password', 'url' ] ),
			'required' => Boolean_Prop_Type::make()
				->default( false ),
			'autocomplete' => Boolean_Prop_Type::make()
				->default( true ),
			'readonly' => Boolean_Prop_Type::make()
				->default( false ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() )->meta( 'llm_configurable', true )->description( 'ID of the input, should be unique and map to a label id' ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Text_Control::bind_to( 'placeholder' )
					  ->set_placeholder( 'Enter placeholder text' )
						->set_label( __( 'Input placeholder', 'elementor-pro' ) ),
					Select_Control::bind_to( 'type' )
						->set_label( __( 'Type', 'elementor-pro' ) )
						->set_options( [
							[
								'label' => __( 'Text', 'elementor-pro' ),
								'value' => 'text',
							],
							[
								'label' => __( 'Email', 'elementor-pro' ),
								'value' => 'email',
							],
							[
								'label' => __( 'Number', 'elementor-pro' ),
								'value' => 'number',
							],
							[
								'label' => __( 'Tel', 'elementor-pro' ),
								'value' => 'tel',
							],
							[
								'label' => __( 'Password', 'elementor-pro' ),
								'value' => 'password',
							],
							[
								'label' => __( 'URL', 'elementor-pro' ),
								'value' => 'url',
							],
						] ),
					Switch_Control::bind_to( 'required' )
						->set_label( __( 'Required', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'autocomplete' )
						->set_label( __( 'Autocomplete', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'readonly' )
						->set_label( __( 'Read only', 'elementor-pro' ) ),
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
			'input' => __DIR__ . '/input.html.twig',
		];
	}

	protected function define_base_styles(): array {
		$border_radius_value = Size_Prop_Type::generate( [
			'size' => 0,
			'unit' => 'px',
		] );

		$height_value = Size_Prop_Type::generate( [
			'size' => 36,
			'unit' => 'px',
		] );

		$border_color_value = Color_Prop_Type::generate( '#D6D5D5' );

		return [
			'base' => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
							->add_props( [
								'border-radius' => $border_radius_value,
								'height' => $height_value,
								'border-color' => $border_color_value,
								'font-size' => Size_Prop_Type::generate( [
									'size' => 12,
									'unit' => 'px',
								] ),
								'color' => Color_Prop_Type::generate( '#0c0d0e' ),
							] ),
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS )
						->add_props( [
							'border-color' => Color_Prop_Type::generate( '#706F6F' ),
							'outline-style' => String_Prop_Type::generate( 'none' ),
						] ),
				),
			'base::placeholder' => Style_Definition::make() // this should be changed once we support placeholder/pseudo-elements styles in the styles system.
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'color' => Color_Prop_Type::generate( '#9DA5AE' ),
						] ),
				),
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

}
