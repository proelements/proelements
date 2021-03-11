<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use Elementor\Settings;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Classes\Mailerlite_Handler;
use ElementorPro\Modules\Forms\Classes\Integration_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Mailerlite extends Integration_Base {

	const OPTION_NAME_API_KEY = 'pro_mailerlite_api_key';

	private function get_global_api_key() {
		return get_option( 'elementor_' . self::OPTION_NAME_API_KEY );
	}

	public function get_name() {
		return 'mailerlite';
	}

	public function get_label() {
		return __( 'MailerLite', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_mailerlite',
			[
				'label' => __( 'MailerLite', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		self::global_api_control(
			$widget,
			$this->get_global_api_key(),
			'MailerLite API Key',
			[
				'mailerlite_api_key_source' => 'default',
			],
			$this->get_name()
		);

		$widget->add_control(
			'mailerlite_api_key_source',
			[
				'label' => __( 'API Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'label_block' => false,
				'options' => [
					'default' => 'Default',
					'custom' => 'Custom',
				],
				'default' => 'default',
			]
		);

		$widget->add_control(
			'mailerlite_custom_api_key',
			[
				'label' => __( 'Custom API Key', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'condition' => [
					'mailerlite_api_key_source' => 'custom',
				],
				'description' => __( 'Use this field to set a custom API Key for the current form', 'elementor-pro' ),
			]
		);

		$widget->add_control(
			'mailerlite_group',
			[
				'label' => __( 'Group', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [],
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'mailerlite_custom_api_key',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'mailerlite_api_key_source',
							'operator' => '=',
							'value' => 'default',
						],
					],
				],
			]
		);

		$this->register_fields_map_control( $widget );

		$widget->add_control(
			'allow_resubscribe',
			[
				'label' => __( 'Allow Resubscribe', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'condition' => [
					'mailerlite_group!' => '',
				],
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['settings']['mailerlite_api_key_source'],
			$element['settings']['mailerlite_custom_api_key'],
			$element['settings']['mailerlite_group'],
			$element['settings']['mailerlite_fields_map']
		);

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$form_settings = $record->get( 'form_settings' );
		$subscriber = $this->create_subscriber_object( $record );

		if ( ! $subscriber ) {
			$ajax_handler->add_admin_error_message( __( 'MailerLite Integration requires an email field', 'elementor-pro' ) );
			return;
		}

		if ( 'default' === $form_settings['mailerlite_api_key_source'] ) {
			$api_key = $this->get_global_api_key();
		} else {
			$api_key = $form_settings['mailerlite_custom_api_key'];
		}

		try {
			$handler = new Mailerlite_Handler( $api_key );
			$handler->create_subscriber( $form_settings['mailerlite_group'], $subscriber );
		} catch ( \Exception $exception ) {
			$ajax_handler->add_admin_error_message( 'MailerLite ' . $exception->getMessage() );
		}
	}

	/**
	 * Create subscriber array from submitted data and form settings
	 * returns a subscriber array or false on error
	 *
	 * @param Form_Record $record
	 *
	 * @return array|bool
	 */
	private function create_subscriber_object( Form_Record $record ) {
		$email = $this->get_mapped_field( $record, 'email' );

		if ( ! $email ) {
			return false;
		}

		$subscriber = [
			'email' => $email,
			'name' => $this->get_mapped_field( $record, 'name' ),
		];

		$subscriber['fields'] = $this->get_mailerlite_custom_fields( $record );

		// Allow re-subscribe
		$allow_resubscribe = $record->get_form_settings( 'allow_resubscribe' );
		if ( ! empty( $allow_resubscribe ) && 'yes' === $allow_resubscribe ) {
			$subscriber['resubscribe'] = true;
		}

		return $subscriber;
	}

	/**
	 * @param Form_Record $record
	 *
	 * @return array
	 */
	private function get_mailerlite_custom_fields( Form_Record $record ) {
		$custom_fields = [];
		$form_fields = $record->get( 'fields' );
		$field_mapping = $record->get_form_settings( 'mailerlite_fields_map' );
		foreach ( $field_mapping as $map_item ) {
			if ( in_array( $map_item['remote_id'], [ 'email', 'name' ] ) ) {
				continue;
			}

			if ( empty( $map_item['local_id'] ) ) {
				continue;
			}

			foreach ( $form_fields as $id => $field ) {
				if ( $id !== $map_item['local_id'] ) {
					continue;
				}
				$custom_fields[ $map_item['remote_id'] ] = $field['value'];
			}
		}

		return $custom_fields;
	}

	private function get_mapped_field( Form_Record $record, $field_id ) {
		$fields = $record->get( 'fields' );
		foreach ( $record->get_form_settings( 'mailerlite_fields_map' ) as $map_item ) {
			if ( empty( $fields[ $map_item['local_id'] ]['value'] ) ) {
				continue;
			}

			if ( $field_id === $map_item['remote_id'] ) {
				return $fields[ $map_item['local_id'] ]['value'];
			}
		}

		return '';
	}

	public function handle_panel_request( array $data ) {
		if ( ! empty( $data['api_key'] ) && 'default' === $data['api_key'] ) {
			$api_key = $this->get_global_api_key();
		} elseif ( ! empty( $data['custom_api_key'] ) ) {
			$api_key = $data['custom_api_key'];
		}

		if ( empty( $api_key ) ) {
			throw new \Exception( '`api_key` is required', 400 );
		}

		$handler = new Mailerlite_Handler( $api_key );
		if ( 'groups' === $data['mailerlite_action'] ) {
			return $handler->get_groups();
		}
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'mailerlite', [
			'callback' => function() {
				echo '<hr><h2>' . esc_html__( 'MailerLite', 'elementor-pro' ) . '</h2>';
			},
			'fields' => [
				self::OPTION_NAME_API_KEY => [
					'label' => __( 'API Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
						'desc' => sprintf( __( 'To integrate with our forms you need an <a href="%s" target="_blank">API Key</a>.', 'elementor-pro' ), 'https://help.mailerlite.com/article/show/35040-where-can-i-find-the-api-key' ),
					],
				],
				'validate_api_data' => [
					'field_args' => [
						'type' => 'raw_html',
						'html' => sprintf( '<button data-action="%s" data-nonce="%s" class="button elementor-button-spinner" id="elementor_pro_mailerlite_api_key_button">%s</button>', self::OPTION_NAME_API_KEY . '_validate', wp_create_nonce( self::OPTION_NAME_API_KEY ), __( 'Validate API Key', 'elementor-pro' ) ),
					],
				],
			],
		] );
	}

	public function ajax_validate_api_key() {
		check_ajax_referer( self::OPTION_NAME_API_KEY, '_nonce' );
		if ( ! isset( $_POST['api_key'] ) ) {
			wp_send_json_error();
		}
		try {
			new Mailerlite_Handler( $_POST['api_key'] );
		} catch ( \Exception $exception ) {
			wp_send_json_error();
		}
		wp_send_json_success();
	}

	public function __construct() {
		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], 15 );
		}
		add_action( 'wp_ajax_' . self::OPTION_NAME_API_KEY . '_validate', [ $this, 'ajax_validate_api_key' ] );
	}

	protected function get_fields_map_control_options() {
		return [
			'condition' => [
				'mailerlite_group!' => '',
			],
		];
	}
}
