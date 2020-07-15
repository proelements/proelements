<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Classes\Integration_Base;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Classes\Getresponse_Handler;
use ElementorPro\Core\Utils;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Getresponse extends Integration_Base {

	const OPTION_NAME_API_KEY = 'pro_getresponse_api_key';

	private function get_global_api_key() {
		return get_option( 'elementor_' . self::OPTION_NAME_API_KEY, '' );
	}

	public function get_name() {
		return 'getresponse';
	}

	public function get_label() {
		return __( 'GetResponse', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_getresponse',
			[
				'label' => __( 'GetResponse', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		self::global_api_control(
			$widget,
			$this->get_global_api_key(),
			'GetResponse API key',
			[
				'getresponse_api_key_source' => 'default',
			],
			$this->get_name()
		);

		$widget->add_control(
			'getresponse_api_key_source',
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
			'getresponse_custom_api_key',
			[
				'label' => __( 'Custom API Key', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'description' => __( 'Use this field to set a custom API Key for the current form', 'elementor-pro' ),
				'condition' => [
					'getresponse_api_key_source' => 'custom',
				],
			]
		);

		$widget->add_control(
			'getresponse_list',
			[
				'label' => __( 'List', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [],
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'getresponse_custom_api_key',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'getresponse_api_key_source',
							'operator' => '=',
							'value' => 'default',
						],
					],
				],
			]
		);

		$widget->add_control(
			'getresponse_dayofcycle',
			[
				'label' => __( 'Day Of Cycle', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'min' => 0,
				'condition' => [
					'getresponse_list!' => '',
				],
			]
		);

		$widget->add_control(
			'getresponse_fields_map',
			[
				'label' => __( 'Field Mapping', 'elementor-pro' ),
				'type' => Fields_Map::CONTROL_TYPE,
				'separator' => 'before',
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
					'getresponse_list!' => '',
				],
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['settings']['getresponse_api_key_source'],
			$element['settings']['getresponse_custom_api_key'],
			$element['settings']['getresponse_list'],
			$element['settings']['getresponse_fields_map']
		);

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$form_settings = $record->get( 'form_settings' );
		$subscriber = $this->create_subscriber_object( $record );

		if ( ! $subscriber ) {
			$ajax_handler->add_admin_error_message( __( 'GetResponse Integration requires an email field', 'elementor-pro' ) );

			return;
		}

		if ( 'default' === $form_settings['getresponse_api_key_source'] ) {
			$api_key = $this->get_global_api_key();
		} else {
			$api_key = $form_settings['getresponse_custom_api_key'];
		}

		try {
			$handler = new Getresponse_Handler( $api_key );
			$handler->create_subscriber( $subscriber );
		} catch ( \Exception $exception ) {
			foreach ( (array) $handler->rest_client->request_cache as $response ) {
				if ( isset( $response['parsed'] ) || ! isset( $response['raw'] ) || ! isset( $response['raw']['response'] ) || ! isset( $response['raw']['response']['code'] ) ) {
					continue;
				}
				if ( ! in_array( $response['raw']['response']['code'], [ 200, 202, 409 ] ) ) {
					$ajax_handler->add_error_message( 'GetResponse ' . $exception->getMessage() );
				}
			}
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
		$form_settings = $record->get( 'form_settings' );
		$subscriber = $this->map_fields( $record );

		if ( ! isset( $subscriber['email'] ) ) {
			return false;
		}

		if ( isset( $form_settings['getresponse_dayofcycle'] ) ) {
			$subscriber['dayOfCycle'] = intval( $form_settings['getresponse_dayofcycle'] );
		}
		$subscriber['ipAddress'] = Utils::get_client_ip();
		$subscriber['campaign'] = [ 'campaignId' => $form_settings['getresponse_list'] ];

		return $subscriber;
	}


	/**
	 * @param Form_Record $record
	 *
	 * @return array
	 */
	private function get_getresponse_custom_fields( Form_Record $record ) {
		$local_email_id = '';
		$local_name_id = '';
		foreach ( $record->get_form_settings( 'getresponse_fields_map' ) as $map_item ) {
			if ( 'email' === $map_item['remote_id'] ) {
				$local_email_id = $map_item['local_id'];
			}
			if ( 'name' === $map_item['remote_id'] ) {
				$local_name_id = $map_item['local_id'];
			}
		}
		$custom_fields = [];
		foreach ( $record->get( 'fields' ) as $id => $field ) {
			if ( in_array( $id, [ $local_email_id, $local_name_id ] ) ) {
				continue;
			}
			$custom_fields[ $id ] = $field['value'];
		}

		return $custom_fields;
	}

	/**
	 * @param Form_Record $record
	 *
	 * @return array
	 */
	private function map_fields( Form_Record $record ) {
		$subscriber = [];
		$custom_fields = [];
		$fields = $record->get( 'fields' );

		// Other form has a field mapping
		foreach ( $record->get_form_settings( 'getresponse_fields_map' ) as $map_item ) {
			if ( empty( $fields[ $map_item['local_id'] ]['value'] ) ) {
				continue;
			}

			$value = $fields[ $map_item['local_id'] ]['value'];
			if ( in_array( $map_item['remote_id'], [ 'name', 'email' ] ) ) {
				$subscriber[ $map_item['remote_id'] ] = $value;
				continue;
			}

			$custom_fields[] = [
				'customFieldId' => $map_item['remote_id'],
				'value' => [ $value ],
			];
		}
		$subscriber['customFieldValues'] = $custom_fields;

		return $subscriber;
	}

	/**
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function handle_panel_request( array $data ) {
		if ( ! empty( $data['api_key'] ) && 'default' === $data['api_key'] ) {
			$api_key = $this->get_global_api_key();
		} elseif ( ! empty( $data['custom_api_key'] ) ) {
			$api_key = $data['custom_api_key'];
		}

		if ( empty( $api_key ) ) {
			throw new \Exception( '`api_key` is required', 400 );
		}

		$handler = new Getresponse_Handler( $api_key );

		if ( 'lists' === $data['getresponse_action'] ) {
			return $handler->get_lists();
		}

		return $handler->get_fields();
	}

	public function ajax_validate_api_token() {
		check_ajax_referer( self::OPTION_NAME_API_KEY, '_nonce' );
		if ( ! isset( $_POST['api_key'] ) ) {
			wp_send_json_error();
		}
		try {
			new Getresponse_Handler( $_POST['api_key'] );
		} catch ( \Exception $exception ) {
			wp_send_json_error();
		}
		wp_send_json_success();
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'getresponse', [
			'callback' => function() {
				echo '<hr><h2>' . esc_html__( 'GetResponse', 'elementor-pro' ) . '</h2>';
			},
			'fields' => [
				self::OPTION_NAME_API_KEY => [
					'label' => __( 'API Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
						'desc' => sprintf( __( 'To integrate with our forms you need an <a href="%s" target="_blank">API Key</a>.', 'elementor-pro' ), 'https://www.getresponse.com' ),
					],
				],
				'validate_api_data' => [
					'field_args' => [
						'type' => 'raw_html',
						'html' => sprintf( '<button data-action="%s" data-nonce="%s" class="button elementor-button-spinner" id="elementor_pro_getresponse_api_key_button">%s</button>', self::OPTION_NAME_API_KEY . '_validate', wp_create_nonce( self::OPTION_NAME_API_KEY ), __( 'Validate API Key', 'elementor-pro' ) ),
					],
				],
			],
		] );
	}

	public function __construct() {
		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], 15 );
		}
		add_action( 'wp_ajax_' . self::OPTION_NAME_API_KEY . '_validate', [ $this, 'ajax_validate_api_token' ] );
	}
}
