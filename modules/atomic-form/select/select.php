<?php
namespace ElementorPro\Modules\AtomicForm\Select;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\Attributes\Controls\Repeatable_Attributes_Control;
use Elementor\Modules\AtomicWidgets\PropTypes\Key_Value_Prop_Type;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;
use Elementor\Modules\AtomicWidgets\PropTypes\Options_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly or if Options_Prop_Type is not available
}

class Select extends Atomic_Widget_Base {
	use Has_Template;

	public static $widget_description = 'Display a select with options';

	public static function get_element_type(): string {
		return 'e-form-select';
	}

	public function get_title(): string {
		return esc_html__( 'Select', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-select';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'select', 'dropdown' ];
	}

	protected static function define_props_schema(): array {

		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'name' => String_Prop_Type::make()
				->default( '' ),
			'options' => Options_Prop_Type::make()
				->default( [
					Key_Value_Prop_Type::generate( [
						'key' => String_Prop_Type::generate( 'Select from the list' ),
						'value' => String_Prop_Type::generate( 'empty' ),
					] ),
				] ),
			'required' => Boolean_Prop_Type::make()
				->default( false ),
			'multiple' => Boolean_Prop_Type::make()
				->default( false ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() ),
		];
	}

	private function define_options_control() {
		$control = Repeatable_Attributes_Control::bind_to( 'options' )
			->set_child_control_props( (object) [] )
			->set_repeaterLabel( __( 'Options', 'elementor-pro' ) )
			->set_patternLabel( '${value.key.value} (${value.value.value})' )
			->set_placeholder( 'Empty option' )
			->set_child_control_type( 'options' )
			->hide_toggle()
			->set_prop_key( 'options' )
			->set_is_sortable( true )
			->set_add_item_tooltip_props( [
				'newItemIndex' => null,
			] )
			->set_initialValues( [] );

		return $control;
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					$this->define_options_control(),
					Switch_Control::bind_to( 'required' )
						->set_label( __( 'Required', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'multiple' )
						->set_label( __( 'Multiple selections', 'elementor-pro' ) ),
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
			'select' => __DIR__ . '/select.html.twig',
		];
	}

	protected function define_base_styles(): array {
		return [
			'base' => $this->get_base_style(),
		];
	}

	private function get_base_style(): Style_Definition {

		$border_color_value = Color_Prop_Type::generate( '#D6D5D5' );

		return Style_Definition::make()
			->add_variant(
				Style_Variant::make()
					->add_props( [
						'background' => Background_Prop_Type::generate( [
							'color' => Color_Prop_Type::generate( 'transparent' ),
						] ),
						'border-color' => $border_color_value,
						'border-width' => Size_Prop_Type::generate( [
							'size' => 1,
							'unit' => 'px',
						] ),
						'border-style' => String_Prop_Type::generate( 'solid' ),
						'font-size' => Size_Prop_Type::generate( [
							'size' => 12,
							'unit' => 'px',
						] ),
					] ),
			)
			->add_variant(
				Style_Variant::make()
					->set_state( Style_States::FOCUS )
					->add_props( [
						'border-color' => Color_Prop_Type::generate( '#706F6F' ),
						'outline-style' => String_Prop_Type::generate( 'none' ),
					] ),
			);
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

}
