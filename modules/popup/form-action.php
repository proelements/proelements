<?php
namespace ElementorPro\Modules\Popup;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Classes\Action_Base;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;
use ElementorPro\Modules\Forms\Module as FormsModule;
use Elementor\TemplateLibrary\Source_Local;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Form_Action extends Action_Base {

	public function get_name() {
		return 'popup';
	}

	public function get_label() {
		return __( 'Popup', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_popup',
			[
				'label' => __( 'Popup', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'popup_action',
			[
				'label' => __( 'Action', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Choose', 'elementor-pro' ),
					'open' => __( 'Open Popup', 'elementor-pro' ),
					'close' => __( 'Close Popup', 'elementor-pro' ),
				],
			]
		);

		$widget->add_control(
			'popup_action_popup_id',
			[
				'label' => __( 'Popup', 'elementor-pro' ),
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'label_block' => true,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_LIBRARY_TEMPLATE,
					'query' => [
						'posts_per_page' => 20,
						'meta_query' => [
							[
								'key' => Document::TYPE_META_KEY,
								'value' => 'popup',
							],
						],
					],
				],
				'condition' => [
					'popup_action' => 'open',
				],
			]
		);

		$widget->add_control(
			'popup_action_do_not_show_again',
			[
				'label' => __( 'Don\'t Show Again', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'condition' => [
					'popup_action' => 'close',
				],
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['settings']['popup_action'],
			$element['settings']['popup_action_popup_id'],
			$element['settings']['popup_action_do_not_show_again']
		);

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$popup_action = $record->get_form_settings( 'popup_action' );

		if ( empty( $popup_action ) ) {
			return;
		}

		$action_settings = [
			'action' => $popup_action,
		];

		if ( 'open' === $popup_action ) {
			$popup_id = $record->get_form_settings( 'popup_action_popup_id' );

			if ( empty( $popup_id ) ) {
				return;
			}

			$action_settings['id'] = $popup_id;
		} else {
			$action_settings['do_not_show_again'] = $record->get_form_settings( 'popup_action_do_not_show_again' );
		}

		$ajax_handler->add_response_data( 'popup', $action_settings );
	}

	public function maybe_print_popup( $settings, $widget ) {
		if ( ! is_array( $settings['submit_actions'] ) || ! in_array( 'popup', $settings['submit_actions'] ) ) {
			return;
		}

		$has_valid_settings = ( ! empty( $settings['popup_action'] ) && 'open' === $settings['popup_action'] && ! empty( $settings['popup_action_popup_id'] ) );
		if ( ! $has_valid_settings ) {
			return;
		}

		Module::add_popup_to_location( $settings['popup_action_popup_id'] );
	}

	public function __construct() {
		/** @var FormsModule $forms_module */
		$forms_module = FormsModule::instance();

		// Register popup form action
		$forms_module->add_form_action( $this->get_name(), $this );

		add_action( 'elementor-pro/forms/pre_render', [ $this, 'maybe_print_popup' ], 10, 2 );
	}
}
