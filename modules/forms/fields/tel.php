<?php
namespace ElementorPro\Modules\Forms\Fields;

use ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Tel extends Field_Base {

	public function get_type() {
		return 'tel';
	}

	public function get_name() {
		return __( 'Tel', 'elementor-pro' );
	}

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual' );
		$form->add_render_attribute( 'input' . $item_index, 'pattern', '[0-9()#&+*-=.]+' );
		$form->add_render_attribute( 'input' . $item_index, 'title', __( 'Only numbers and phone characters (#, -, *, etc) are accepted.', 'elementor-pro' ) );
		echo '<input size="1" ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
	}

	public function validation( $field, Classes\Form_Record $record, Classes\Ajax_Handler $ajax_handler ) {
		if ( empty( $field['value'] ) ) {
			return;
		}
		if ( preg_match( '/^[0-9()#&+*-=.]+$/', $field['value'] ) !== 1 ) {
			$ajax_handler->add_error( $field['id'], __( 'Only numbers and phone characters (#, -, *, etc) are accepted.', 'elementor-pro' ) );
		}
	}
}
