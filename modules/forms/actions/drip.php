<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use Elementor\Settings;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Classes\Integration_Base;
use ElementorPro\Modules\Forms\Classes\Drip_Handler;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Drip extends Integration_Base {

	const OPTION_NAME_API_KEY = 'pro_drip_api_token';

	private function get_global_api_key() {
		return get_option( 'elementor_' . self::OPTION_NAME_API_KEY );
	}

	public function get_name() {
		return 'drip';
	}

	public function get_label() {
		return esc_html__( 'Drip', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_drip',
			[
				'label' => esc_html__( 'Drip', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		self::global_api_control(
			$widget,
			$this->get_global_api_key(),
			'Drip API Token',
			[
				'drip_api_token_source' => 'default',
			],
			$this->get_name()
		);

		$widget->add_control(
			'drip_api_token_source',
			[
				'label' => esc_html__( 'API Key', 'elementor-pro' ),
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
			'drip_custom_api_token',
			[
				'label' => esc_html__( 'Custom API Key', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'condition' => [
					'drip_api_token_source' => 'custom',
				],
				'description' => esc_html__( 'Use this field to set a custom API key for the current form', 'elementor-pro' ),
			]
		);

		$widget->add_control(
			'drip_account',
			[
				'label' => esc_html__( 'Account', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [],
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'drip_custom_api_token',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'drip_api_token_source',
							'operator' => '=',
							'value' => 'default',
						],
					],
				],
			]
		);

		$this->register_fields_map_control( $widget );

		$widget->add_control(
			'drip_custom_field_heading',
			[
				'label' => esc_html__( 'Send Additional Data to Drip', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					'drip_account!' => '',
				],
			]
		);

		$widget->add_control(
			'drip_custom_fields',
			[
				'label' => esc_html__( 'Form Fields', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'description' => esc_html__( 'Send all form fields to drip as custom fields', 'elementor-pro' ),
				'condition' => [
					'drip_account!' => '',
				],
			]
		);

		$widget->add_control(
			'tags',
			[
				'label' => esc_html__( 'Tags', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'description' => esc_html__( 'Add as many tags as you want, comma separated.', 'elementor-pro' ),
				'condition' => [
					'drip_account!' => '',
				],
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['settings']['drip_api_token_source'],
			$element['settings']['drip_custom_api_token'],
			$element['settings']['drip_account'],
			$element['settings']['drip_fields_map'],
			$element['settings']['tags'],
			$element['settings']['drip_custom_fields']
		);

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$form_settings = $record->get( 'form_settings' );
		$subscriber = $this->create_subscriber_object( $record );

		if ( ! $subscriber ) {
			throw new \Exception( 'Integration requires an email field.' );
		}

		if ( 'default' === $form_settings['drip_api_token_source'] ) {
			$api_key = $this->get_global_api_key();
		} else {
			$api_key = $form_settings['drip_custom_api_token'];
		}

		$handler = new Drip_Handler( $api_key );
		$handler->create_subscriber( $form_settings['drip_account'], $subscriber );
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
		$email = $this->map_email_field( $record );

		if ( ! $email ) {
			return false;
		}
		$subscriber = [
			'ip_address' => Utils::get_client_ip(),
			'email' => $email,
		];

		if ( isset( $form_settings['tags'] ) && ! empty( $form_settings['tags'] ) ) {
			$tags = $record->replace_setting_shortcodes( $form_settings['tags'] );

			$subscriber['tags'] = explode( ',', $tags );
		}

		$custom_fields = [];
		if ( isset( $form_settings['drip_custom_fields'] ) && 'yes' === $form_settings['drip_custom_fields'] ) {
			$custom_fields = $this->get_drip_custom_fields( $record );
		}

		$subscriber['custom_fields'] = $custom_fields;

		return $subscriber;
	}

	/**
	 * @param Form_Record $record
	 *
	 * @return array
	 */
	private function get_drip_custom_fields( Form_Record $record ) {
		$local_email_id = '';
		foreach ( $record->get_form_settings( 'drip_fields_map' ) as $map_item ) {
			if ( 'email' === $map_item['remote_id'] ) {
				$local_email_id = $map_item['local_id'];
			}
		}
		$custom_fields = [];
		foreach ( $record->get( 'fields' ) as $id => $field ) {
			if ( $local_email_id === $id ) {
				continue;
			}
			$custom_fields[ $id ] = $field['value'];
		}

		return $custom_fields;
	}

	/**
	 * extracts Email field from form based on mapping
	 * returns email address or false if missing
	 *
	 * @param Form_Record $record
	 *
	 * @return bool
	 */
	private function map_email_field( Form_Record $record ) {
		$fields = $record->get( 'fields' );
		foreach ( $record->get_form_settings( 'drip_fields_map' ) as $map_item ) {
			if ( empty( $fields[ $map_item['local_id'] ]['value'] ) ) {
				continue;
			}

			$value = $fields[ $map_item['local_id'] ]['value'];
			if ( 'email' === $map_item['remote_id'] ) {
				return $value;
			}
		}

		return false;
	}

	/**
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function handle_panel_request( array $data ) {
		if ( ! empty( $data['api_token'] ) && 'default' === $data['api_token'] ) {
			$api_key = $this->get_global_api_key();
		} elseif ( ! empty( $data['custom_api_token'] ) ) {
			$api_key = $data['custom_api_token'];
		}

		if ( empty( $api_key ) ) {
			throw new \Exception( '`api_token` is required.', 400 );
		}

		$handler = new Drip_Handler( $api_key );

		return $handler->get_accounts();
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'drip', [
			'callback' => function() {
				echo '<hr><h2>' . esc_html__( 'Drip', 'elementor-pro' ) . '</h2>';
			},
			'fields' => [
				self::OPTION_NAME_API_KEY => [
					'label' => esc_html__( 'API Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
						'desc' => sprintf(
							/* translators: 1: Link opening tag, 2: Link closing tag. */
							esc_html__( 'To integrate with our forms you need an %1$sAPI Key%2$s.', 'elementor-pro' ),
							'<a href="http://kb.getdrip.com/general/where-can-i-find-my-api-token/" target="_blank">',
							'</a>'
						),
					],
				],
				'validate_api_data' => [
					'field_args' => [
						'type' => 'raw_html',
						'html' => sprintf( '<button data-action="%s" data-nonce="%s" class="button elementor-button-spinner" id="elementor_pro_drip_api_token_button">%s</button>', self::OPTION_NAME_API_KEY . '_validate', wp_create_nonce( self::OPTION_NAME_API_KEY ), esc_html__( 'Validate API Key', 'elementor-pro' ) ),
					],
				],
			],
		] );
	}

	/**
	 *
	 */
	public function ajax_validate_api_token() {
		check_ajax_referer( self::OPTION_NAME_API_KEY, '_nonce' );
		if ( ! isset( $_POST['api_key'] ) ) {
			wp_send_json_error();
		}
		try {
			new Drip_Handler( $_POST['api_key'] ); // phpcs:ignore -- No need to sanitize to support special characters.
		} catch ( \Exception $exception ) {
			wp_send_json_error();
		}
		wp_send_json_success();
	}

	public function __construct() {
		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], 15 );
		}
		add_action( 'wp_ajax_' . self::OPTION_NAME_API_KEY . '_validate', [ $this, 'ajax_validate_api_token' ] );
	}

	protected function get_fields_map_control_options() {
		return [
			'condition' => [
				'drip_account!' => '',
			],
		];
	}
}
