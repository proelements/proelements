<?php
namespace ElementorPro\Modules\AtomicForm\Radio_Button;

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
use Elementor\Modules\AtomicWidgets\PropTypes\Transition_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Selection_Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Key_Value_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Radio_Button extends Atomic_Widget_Base {
	use Has_Template;

	protected $animation_duration = 200;
	public static $widget_description = 'Display a radio button input with required, and attributes.';

	public static function get_element_type(): string {
		return 'e-form-radio-button';
	}

	public function get_title(): string {
		return esc_html__( 'Radio button', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-radiobutton';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'radio', 'button' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'name' => String_Prop_Type::make()
				->default( '' ),
			'value' => String_Prop_Type::make()
				->default( '' ),
			'required' => Boolean_Prop_Type::make()
				->default( false ),
			'checked' => Boolean_Prop_Type::make()
				->default( false ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Text_Control::bind_to( 'name' )
						->set_label( __( 'Group name', 'elementor-pro' ) )
						->set_placeholder( __( 'Enter radio button group name', 'elementor-pro' ) )
						->set_meta( [
							'layout' => 'two-columns',
						] ),
					Text_Control::bind_to( 'value' )
						->set_label( __( 'Choice value', 'elementor-pro' ) )
						->set_placeholder( __( 'Enter choice value', 'elementor-pro' ) )
						->set_meta( [
							'layout' => 'two-columns',
						] ),
					Switch_Control::bind_to( 'required' )
						->set_label( __( 'Required', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'checked' )
						->set_label( __( 'Checked', 'elementor-pro' ) ),
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
			'radio_button' => __DIR__ . '/radio-button.html.twig',
		];
	}

	protected function define_base_styles(): array {
		return [
			'base' => $this->get_base_style(),
			'base::before' => $this->get_base_before_style(),
			'base:checked::before' => $this->get_base_checked_before_style(),
		];
	}

	private function get_base_style(): Style_Definition {
		$border_radius_value = Size_Prop_Type::generate( [
			'size' => 50,
			'unit' => '%',
		] );

		$border_color_value = Color_Prop_Type::generate( '#D6D5D5' );

		$checked_background_color_value = Background_Prop_Type::generate( [
			'color' => Color_Prop_Type::generate( 'transparent' ),
		] );

		return Style_Definition::make()
			->add_variant(
				Style_Variant::make()
					->add_props( [
						'appearance' => String_Prop_Type::generate( 'none' ), // Without this, the radio button will have native browser style and will be virtually impossible to style.
						'color' => Color_Prop_Type::generate( '#ffffff' ),
						'display' => String_Prop_Type::generate( 'grid' ),
						'background' => Background_Prop_Type::generate( [
							'color' => Color_Prop_Type::generate( 'transparent' ),
						] ),
						'align-items' => String_Prop_Type::generate( 'center' ),
						'justify-items' => String_Prop_Type::generate( 'center' ),
						'border-radius' => $border_radius_value,
						'border-color' => $border_color_value,
						'border-width' => Size_Prop_Type::generate( [
							'size' => 1,
							'unit' => 'px',
						] ),
						'border-style' => String_Prop_Type::generate( 'solid' ),
						'width' => Size_Prop_Type::generate( [
							'size' => 1.15,
							'unit' => 'em',
						] ),
						'height' => Size_Prop_Type::generate( [
							'size' => 1.15,
							'unit' => 'em',
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
			)
			->add_variant(
				Style_Variant::make()
					->set_state( Style_States::CHECKED )
					->add_props( [
						'background' => $checked_background_color_value,
					] ),
			);
	}

	private function get_base_before_style(): Style_Definition {
		$border_radius_value = Size_Prop_Type::generate( [
			'size' => 50,
			'unit' => '%',
		] );

		return Style_Definition::make()
			->add_variant(
				Style_Variant::make()
					->add_props( [
						'border-radius' => $border_radius_value,
						'background' => Background_Prop_Type::generate( [
							'color' => Color_Prop_Type::generate( '#706F6F' ),
						] ),
						'content' => String_Prop_Type::generate( '""' ),
						'height' => Size_Prop_Type::generate( [
							'size' => 65,
							'unit' => '%',
						] ),
						'width' => Size_Prop_Type::generate( [
							'size' => 65,
							'unit' => '%',
						] ),
						'opacity' => Size_Prop_Type::generate( [
							'size' => 0,
							'unit' => '%',
						] ),
						'transition' => Transition_Prop_Type::generate( [
							Selection_Size_Prop_Type::generate( [
								'selection' => Key_Value_Prop_Type::generate( [
									'key' => String_Prop_Type::generate( 'Opacity' ),
									'value' => String_Prop_Type::generate( 'opacity' ),
								] ),
								'size' => Size_Prop_Type::generate( [
									'size' => $this->animation_duration,
									'unit' => 'ms',
								] ),
							] ),
						] ),
					] ),
			);
	}

	private function get_base_checked_before_style(): Style_Definition {
		return Style_Definition::make()
			->add_variant(
				Style_Variant::make()
					->add_props( [
						'opacity' => Size_Prop_Type::generate( [
							'size' => 100,
							'unit' => '%',
						] ),
					] ),
			);
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	protected function define_atomic_pseudo_states(): array {
		return [
			Style_States::get_pseudo_states_map()['checked'],
		];
	}

}
