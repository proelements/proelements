<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Classes\Action_Base;
use MailPoet\API\API;
use MailPoet\Models\Subscriber;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
};

class Mailpoet3 extends Action_Base {

	public function get_name() {
		return 'mailpoet3';
	}

	public function get_label() {
		return 'MailPoet 3';
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_mailpoet3',
			[
				'label' => __( 'MailPoet 3', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$mailpoet3_lists = API::MP( 'v1' )->getLists();
		$options = [];

		foreach ( $mailpoet3_lists as $list ) {
			$options[ $list['id'] ] = $list['name'];
		}

		$widget->add_control(
			'mailpoet3_lists',
			[
				'label' => __( 'List', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'label_block' => true,
				'options' => $options,
				'render_type' => 'none',
			]
		);

		$mailpoet_fields = [
			[
				'remote_id' => 'first_name',
				'remote_label' => __( 'First Name', 'elementor-pro' ),
				'remote_type' => 'text',
			],
			[
				'remote_id' => 'last_name',
				'remote_label' => __( 'Last Name', 'elementor-pro' ),
				'remote_type' => 'text',
			],
			[
				'remote_id' => 'email',
				'remote_label' => __( 'Email', 'elementor-pro' ),
				'remote_type' => 'email',
				'remote_required' => true,
			],
		];
		$fields = API::MP( 'v1' )->getSubscriberFields();

		if ( ! empty( $fields ) && is_array( $fields ) ) {
			foreach ( $fields as $index => $remote ) {
				if ( in_array( $remote['id'], [ 'first_name', 'last_name', 'email' ] ) ) {
					continue;
				}
				$mailpoet_fields[] = [
					'remote_id' => $remote['id'],
					'remote_label' => $remote['name'],
					'remote_type' => 'text',
				];
			}
		}

		$widget->add_control(
			'mailpoet3_fields_map',
			[
				'label' => __( 'Field Mapping', 'elementor-pro' ),
				'type' => Fields_Map::CONTROL_TYPE,
				'default' => $mailpoet_fields,
				'fields' => [
					[
						'name' => 'remote_id',
						'type' => Controls_Manager::HIDDEN,
					],
					[
						'name' => 'local_id',
						'type' => Controls_Manager::SELECT,
					],
				],
				'condition' => [
					'mailpoet3_lists!' => '',
				],
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset( $element['mailpoet3_lists'] );

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );
		$subscriber = $this->map_fields( $record );

		$existing_subscriber = false;

		try {
			API::MP( 'v1' )->addSubscriber( $subscriber, (array) $settings['mailpoet3_lists'] );
			$existing_subscriber = false;
		} catch ( \Exception $exception ) {
			$error_string = __( 'This subscriber already exists.', 'mailpoet' ); // phpcs:ignore WordPress.WP.I18n

			if ( $error_string === $exception->getMessage() ) {
				$existing_subscriber = true;
			} else {
				$ajax_handler->add_admin_error_message( 'MailPoet ' . $exception->getMessage() );
			}
		}

		if ( $existing_subscriber ) {
			try {
				API::MP( 'v1' )->subscribeToLists( $subscriber['email'], (array) $settings['mailpoet3_lists'] );
			} catch ( \Exception $exception ) {
				$ajax_handler->add_admin_error_message( 'MailPoet ' . $exception->getMessage() );
			}
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

		$subscriber = [];

		foreach ( $settings['mailpoet3_fields_map'] as $map_item ) {
			if ( empty( $fields[ $map_item['local_id'] ]['value'] ) ) {
				continue;
			}

			$subscriber[ $map_item['remote_id'] ] = $fields[ $map_item['local_id'] ]['value'];
		}

		return $subscriber;
	}
}
