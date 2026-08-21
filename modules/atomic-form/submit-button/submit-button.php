<?php
namespace ElementorPro\Modules\AtomicForm\Submit_Button;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Inline_Editing_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Background_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Html_V3_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Submit_Button extends Atomic_Widget_Base {
	use Has_Template;

	private static $button_background_color = '#000';
	private static $button_text_color = '#fff';
	private static $button_background_color_hover = '#323232';

	public static $widget_description = 'Display a submit button with customizable label text.';

	public static function get_element_type(): string {
		return 'e-form-submit-button';
	}

	public function get_title(): string {
		return esc_html__( 'Submit button', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-submit-button';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'button', 'submit', 'send' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'text' => Html_V3_Prop_Type::make()
				->default( 'Submit' ),
			'tag' => String_Prop_Type::make()
				->default( 'button' )
				->description( 'The HTML tag for the button element.' ),
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
						->set_label( __( 'Button Text', 'elementor-pro' ) )
						->set_placeholder( 'Submit' ),
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
			'submit_button' => __DIR__ . '/submit-button.html.twig',
		];
	}

	protected function define_base_styles(): array {
		$background_color_value = Background_Prop_Type::generate( [
			'color' => Color_Prop_Type::generate( self::$button_background_color ),
		] );
		$text_color_value = Color_Prop_Type::generate( self::$button_text_color );
		$display_value = String_Prop_Type::generate( 'flex' );
		$padding_value = Dimensions_Prop_Type::generate( [
			'block-start' => Size_Prop_Type::generate( [
				'size' => 10,
				'unit' => 'px',
			]),
			'inline-end' => Size_Prop_Type::generate( [
				'size' => 30,
				'unit' => 'px',
			]),
			'block-end' => Size_Prop_Type::generate( [
				'size' => 10,
				'unit' => 'px',
			]),
			'inline-start' => Size_Prop_Type::generate( [
				'size' => 28,
				'unit' => 'px',
			]),
		]);
		$justify_content_value = String_Prop_Type::generate( 'center' );
		$align_items_value = String_Prop_Type::generate( 'center' );
		$background_color_hover_value = Background_Prop_Type::generate( [
			'color' => Color_Prop_Type::generate( self::$button_background_color_hover ),
		] );
		$border_base_size = Size_Prop_Type::generate( [
			'size' => 0,
			'unit' => 'px',
		] );
		return [
			'base' => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_prop( 'background', $background_color_value )
						->add_prop( 'color', $text_color_value )
						->add_prop( 'display', $display_value )
						->add_prop( 'padding', $padding_value )
						->add_prop( 'justify-content', $justify_content_value )
						->add_prop( 'align-items', $align_items_value )
						->add_prop( 'border-radius', $border_base_size )
						->add_prop( 'border-width', $border_base_size )
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::HOVER )
						->add_prop( 'background', $background_color_hover_value )
				),
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	public static function get_inline_styles(): string {
		$base_class = self::get_element_type() . '-base';
		return ".{$base_class} { cursor: pointer; box-sizing: border-box; }";
	}
}
