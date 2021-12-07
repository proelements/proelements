<?php
namespace ElementorPro\Modules\Forms\Fields;

use Elementor\Widget_Base;
use ElementorPro\Modules\Forms\Classes;
use Elementor\Controls_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Number extends Field_Base {

	public function get_type() {
		return 'number';
	}

	public function get_name() {
		return esc_html__( 'Number', 'elementor-pro' );
	}

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual' );

		if ( isset( $item['field_min'] ) ) {
			$form->add_render_attribute( 'input' . $item_index, 'min', esc_attr( $item['field_min'] ) );
		}
		if ( isset( $item['field_max'] ) ) {
			$form->add_render_attribute( 'input' . $item_index, 'max', esc_attr( $item['field_max'] ) );
		}

		?>
			<input <?php $form->print_render_attribute_string( 'input' . $item_index ); ?> >
		<?php
	}

	/**
	 * @param Widget_Base $widget
	 */
	public function update_controls( $widget ) {
		$elementor = Plugin::elementor();

		$control_data = $elementor->controls_manager->get_control_from_stack( $widget->get_unique_name(), 'form_fields' );

		if ( is_wp_error( $control_data ) ) {
			return;
		}

		$field_controls = [
			'field_min' => [
				'name' => 'field_min',
				'label' => esc_html__( 'Min. Value', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab' => 'content',
				'inner_tab' => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
			'field_max' => [
				'name' => 'field_max',
				'label' => esc_html__( 'Max. Value', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab' => 'content',
				'inner_tab' => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
		];

		$control_data['fields'] = $this->inject_field_controls( $control_data['fields'], $field_controls );
		$widget->update_control( 'form_fields', $control_data );
	}

	public function validation( $field, Classes\Form_Record $record, Classes\Ajax_Handler $ajax_handler ) {

		if ( ! empty( $field['field_max'] ) && $field['field_max'] < (int) $field['value'] ) {
			$ajax_handler->add_error( $field['id'], sprintf( esc_html__( 'The value must be less than or equal to %s', 'elementor-pro' ), $field['field_max'] ) );
		}

		if ( ! empty( $field['field_min'] ) && $field['field_min'] > (int) $field['value'] ) {
			$ajax_handler->add_error( $field['id'], sprintf( esc_html__( 'The value must be greater than or equal %s', 'elementor-pro' ), $field['field_min'] ) );
		}
	}

	public function sanitize_field( $value, $field ) {
		return intval( $value );
	}
}
