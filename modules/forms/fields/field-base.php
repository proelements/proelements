<?php
namespace ElementorPro\Modules\Forms\Fields;

use ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Field_Base {
	public $depended_scripts = [];
	public $depended_styles = [];

	abstract public function get_type();

	abstract public function get_name();

	abstract public function render( $item, $item_index, $form );

	public function validation( $field, Classes\Form_Record $record, Classes\Ajax_Handler $ajax_handler ) {}

	public function process_field( $field, Classes\Form_Record $record, Classes\Ajax_Handler $ajax_handler ) {}

	public function add_assets_depends( $form ) {
		foreach ( $this->depended_scripts as $script ) {
			$form->add_script_depends( $script );
		}

		foreach ( $this->depended_styles as $style ) {
			$form->add_style_depends( $style );
		}
	}

	public function add_preview_depends() {
		foreach ( $this->depended_scripts as $script ) {
			wp_enqueue_script( $script );
		}

		foreach ( $this->depended_styles as $style ) {
			wp_enqueue_style( $style );
		}
	}

	public function add_field_type( $field_types ) {
		if ( ! in_array( $this->get_type(), $field_types ) ) {
			$field_types[ $this->get_type() ] = $this->get_name();
		}

		return $field_types;
	}

	public function field_render( $item, $item_index, $form ) {
		$this->add_assets_depends( $form );
		$this->render( $item, $item_index, $form );
	}

	public function sanitize_field( $value, $field ) {
		return sanitize_text_field( $value );
	}

	public function inject_field_controls( $array, $controls_to_inject ) {
		$keys = array_keys( $array );
		$key_index = array_search( 'required', $keys ) + 1;

		return array_merge( array_slice( $array, 0, $key_index, true ),
			$controls_to_inject,
			array_slice( $array, $key_index, null, true )
		);
	}

	public function __construct() {
		$field_type = $this->get_type();
		add_action( "elementor_pro/forms/render_field/{$field_type}", [ $this, 'field_render' ], 10, 3 );
		add_action( "elementor_pro/forms/validation/{$field_type}", [ $this, 'validation' ], 10, 3 );
		add_action( "elementor_pro/forms/process/{$field_type}", [ $this, 'process_field' ], 10, 3 );
		add_filter( 'elementor_pro/forms/field_types', [ $this, 'add_field_type' ] );
		add_filter( "elementor_pro/forms/sanitize/{$field_type}", [ $this, 'sanitize_field' ], 10, 2 );
		add_action( 'elementor/preview/enqueue_scripts', [ $this, 'add_preview_depends' ] );
		if ( method_exists( $this, 'update_controls' ) ) {
			add_action( 'elementor/element/form/section_form_fields/before_section_end', [ $this, 'update_controls' ] );
		}
	}
}
