<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Classes\Integration_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailpoet extends Integration_Base {

	public function get_name() {
		return 'mailpoet';
	}

	public function get_label() {
		return 'MailPoet';
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_mailpoet',
			[
				'label' => __( 'MailPoet', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		/** @var \WYSIJA_model_list $model_list */
		$model_list = \WYSIJA::get( 'list', 'model' );
		$mailpoet_lists = $model_list->get( [ 'name', 'list_id' ], [ 'is_enabled' => 1 ] );
		$options = [];

		foreach ( $mailpoet_lists as $list ) {
			$options[ $list['list_id'] ] = $list['name'];
		}

		$widget->add_control(
			'mailpoet_lists',
			[
				'label' => __( 'List', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'label_block' => true,
				'options' => $options,
				'render_type' => 'none',
			]
		);

		$this->register_fields_map_control( $widget );

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset( $element['mailpoet_lists'] );

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$subscriber = $this->map_fields( $record );

		try {
			/** @var \WYSIJA_help_user $helper_user */
			$helper_user = \WYSIJA::get( 'user', 'helper' );
			$helper_user->addSubscriber( $subscriber );
		} catch ( \Exception $exception ) {
			$ajax_handler->add_admin_error_message( 'MailPoet ' . $exception->getMessage() );
		}
	}

	/**
	 * @param Form_Record $record
	 *
	 * @return array
	 */
	private function map_fields( $record ) {
		$settings = $record->get( 'form_settings' );
		$fields = $record->get( 'fields' );

		$subscriber = [
			'user' => [
				'email' => '',
			],
			'user_list' => [ 'list_ids' => (array) $settings['mailpoet_lists'] ],
		];

		foreach ( $settings['mailpoet_fields_map'] as $map_item ) {
			if ( empty( $fields[ $map_item['local_id'] ]['value'] ) ) {
				continue;
			}

			$value = $fields[ $map_item['local_id'] ]['value'];
			if ( 'email' === $map_item['remote_id'] ) {
				$subscriber['user']['email'] = $value;
			} else {
				$subscriber['user'][ $map_item['remote_id'] ] = $value;
			}
		}

		return $subscriber;
	}

	protected function get_fields_map_control_options() {
		return [
			'default' => [
				[
					'remote_id' => 'firstname',
					'remote_label' => __( 'First Name', 'elementor-pro' ),
					'remote_type' => 'text',
				],
				[
					'remote_id' => 'lastname',
					'remote_label' => __( 'Last Name', 'elementor-pro' ),
					'remote_type' => 'text',
				],
				[
					'remote_id' => 'email',
					'remote_label' => __( 'Email', 'elementor-pro' ),
					'remote_type' => 'email',
					'remote_required' => true,
				],
			],
			'condition' => [
				'mailpoet_lists!' => '',
			],
		];
	}
}
