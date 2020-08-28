<?php
namespace ElementorPro\Modules\Forms\Fields;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Step extends Field_Base {

	public function get_type() {
		return 'step';
	}

	public function get_name() {
		return __( 'Step', 'elementor-pro' );
	}

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute( 'step' . $item_index, [
			'class' => 'e-field-step elementor-hidden',
			'data-label' => $item['field_label'],
			'data-previousButton' => $item['previous_button'],
			'data-nextButton' => $item['next_button'],
			'data-iconUrl' => 'svg' === $item['selected_icon']['library'] && $item['selected_icon']['value'] ? $item['selected_icon']['value']['url'] : '',
			'data-iconLibrary' => 'svg' !== $item['selected_icon']['library'] && $item['selected_icon']['value'] ? $item['selected_icon']['value'] : '',
		] );

		echo '<div ' . $form->get_render_attribute_string( 'step' . $item_index ) . '></div>';
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
			'previous_button' => [
				'name' => 'previous_button',
				'label' => __( 'Previous Button', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab' => 'content',
				'inner_tab' => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
			'next_button' => [
				'name' => 'next_button',
				'label' => __( 'Next Button', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab' => 'content',
				'inner_tab' => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
			'selected_icon' => [
				'name' => 'selected_icon',
				'label' => __( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'description' => __( 'Visible only if selected step type contains "Icon"', 'elementor-pro' ),
				'default' => [
					'value' => 'fas fa-star',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-down',
						'angle-down',
						'angle-double-down',
						'caret-down',
						'caret-square-down',
					],
					'fa-regular' => [
						'caret-square-down',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
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
}
