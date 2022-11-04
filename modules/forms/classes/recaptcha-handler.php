<?php
namespace ElementorPro\Modules\Forms\Classes;

use Elementor\Settings;
use Elementor\Widget_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Integration with Google reCAPTCHA
 */
class Recaptcha_Handler {

	const OPTION_NAME_SITE_KEY = 'elementor_pro_recaptcha_site_key';

	const OPTION_NAME_SECRET_KEY = 'elementor_pro_recaptcha_secret_key';

	const OPTION_NAME_RECAPTCHA_THRESHOLD = 'elementor_pro_recaptcha_threshold';

	const V2_CHECKBOX = 'v2_checkbox';

	protected static function get_recaptcha_name() {
		return 'recaptcha';
	}

	public static function get_site_key() {
		return get_option( self::OPTION_NAME_SITE_KEY );
	}

	public static function get_secret_key() {
		return get_option( self::OPTION_NAME_SECRET_KEY );
	}

	public static function get_recaptcha_type() {
		return self::V2_CHECKBOX;
	}

	public static function is_enabled() {
		return static::get_site_key() && static::get_secret_key();
	}

	public static function get_setup_message() {
		return esc_html__( 'To use reCAPTCHA, you need to add the API Key and complete the setup process in Dashboard > Elementor > Settings > Integrations > reCAPTCHA.', 'elementor-pro' );
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, static::get_recaptcha_name(), [
			'label' => esc_html__( 'reCAPTCHA', 'elementor-pro' ),
			'callback' => function () {
				echo sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( '%1$sreCAPTCHA%2$s is a free service by Google that protects your website from spam and abuse. It does this while letting your valid users pass through with ease.', 'elementor-pro' ),
					'<a href="https://www.google.com/recaptcha/" target="_blank">',
					'</a>'
				);
			},
			'fields' => [
				'pro_recaptcha_site_key' => [
					'label' => esc_html__( 'Site Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				'pro_recaptcha_secret_key' => [
					'label' => esc_html__( 'Secret Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
			],
		] );
	}

	public function localize_settings( $settings ) {
		$settings = array_replace_recursive( $settings, [
			'forms' => [
				static::get_recaptcha_name() => [
					'enabled' => static::is_enabled(),
					'type' => static::get_recaptcha_type(),
					'site_key' => static::get_site_key(),
					'setup_message' => static::get_setup_message(),
				],
			],
		] );

		return $settings;
	}

	protected static function get_script_render_param() {
		return 'explicit';
	}

	protected static function get_script_name() {
		return 'elementor-' . static::get_recaptcha_name() . '-api';
	}

	public function register_scripts() {
		$script_name = static::get_script_name();
		$src = 'https://www.google.com/recaptcha/api.js?render=explicit';
		wp_register_script( $script_name, $src, [], ELEMENTOR_PRO_VERSION, true );
	}

	public function enqueue_scripts() {
		if ( Plugin::elementor()->preview->is_preview_mode() ) {
			return;
		}
		$script_name = static::get_script_name();
		wp_enqueue_script( $script_name );
	}

	/**
	 * @param Form_Record  $record
	 * @param Ajax_Handler $ajax_handler
	 */
	public function validation( $record, $ajax_handler ) {
		$fields = $record->get_field( [
			'type' => static::get_recaptcha_name(),
		] );

		if ( empty( $fields ) ) {
			return;
		}

		$field = current( $fields );

		if ( empty( $_POST['g-recaptcha-response'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
			$ajax_handler->add_error( $field['id'], esc_html__( 'The Captcha field cannot be blank. Please enter a value.', 'elementor-pro' ) );

			return;
		}

		$recaptcha_errors = [
			'missing-input-secret' => esc_html__( 'The secret parameter is missing.', 'elementor-pro' ),
			'invalid-input-secret' => esc_html__( 'The secret parameter is invalid or malformed.', 'elementor-pro' ),
			'missing-input-response' => esc_html__( 'The response parameter is missing.', 'elementor-pro' ),
			'invalid-input-response' => esc_html__( 'The response parameter is invalid or malformed.', 'elementor-pro' ),
		];

		// PHPCS - response protected by recaptcha secret
		$recaptcha_response = $_POST['g-recaptcha-response']; // phpcs:ignore WordPress.Security.NonceVerification.Missing
		$recaptcha_secret = static::get_secret_key();
		$client_ip = Utils::get_client_ip();

		$request = [
			'body' => [
				'secret' => $recaptcha_secret,
				'response' => $recaptcha_response,
				'remoteip' => $client_ip,
			],
		];

		$response = wp_remote_post( 'https://www.google.com/recaptcha/api/siteverify', $request );

		$response_code = wp_remote_retrieve_response_code( $response );

		if ( 200 !== (int) $response_code ) {
			/* translators: %d: Response code. */
			$ajax_handler->add_error( $field['id'], sprintf( esc_html__( 'Can not connect to the reCAPTCHA server (%d).', 'elementor-pro' ), $response_code ) );

			return;
		}

		$body = wp_remote_retrieve_body( $response );

		$result = json_decode( $body, true );

		if ( ! $this->validate_result( $result, $field ) ) {
			$message = esc_html__( 'Invalid form, reCAPTCHA validation failed.', 'elementor-pro' );

			if ( isset( $result['error-codes'] ) ) {
				$result_errors = array_flip( $result['error-codes'] );

				foreach ( $recaptcha_errors as $error_key => $error_desc ) {
					if ( isset( $result_errors[ $error_key ] ) ) {
						$message = $recaptcha_errors[ $error_key ];
						break;
					}
				}
			}

			$this->add_error( $ajax_handler, $field, $message );

		}

		// If success - remove the field form list (don't send it in emails and etc )
		$record->remove_field( $field['id'] );

	}

	/**
	 * @param Ajax_Handler $ajax_handler
	 * @param $field
	 * @param $message
	 */
	protected function add_error( $ajax_handler, $field, $message ) {
		$ajax_handler->add_error( $field['id'], $message );
	}

	protected function validate_result( $result, $field ) {
		if ( ! $result['success'] ) {
			return false;
		}

		return true;
	}

	/**
	 * @param $item
	 * @param $item_index
	 * @param $widget Widget_Base
	 */
	public function render_field( $item, $item_index, $widget ) {
		$recaptcha_html = '<div class="elementor-field" id="form-field-' . $item['custom_id'] . '">';

		$recaptcha_name = static::get_recaptcha_name();

		if ( static::is_enabled() ) {
			$this->enqueue_scripts();
			$this->add_render_attributes( $item, $item_index, $widget );
			$recaptcha_html .= '<div ' . $widget->get_render_attribute_string( $recaptcha_name . $item_index ) . '></div>';
		} elseif ( current_user_can( 'manage_options' ) ) {
			$recaptcha_html .= '<div class="elementor-alert elementor-alert-info">';
			$recaptcha_html .= static::get_setup_message();
			$recaptcha_html .= '</div>';
		}

		$recaptcha_html .= '</div>';

		// PHPCS - It's all escaped
		echo $recaptcha_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * @param $item
	 * @param $item_index
	 * @param $widget Widget_Base
	 */
	protected function add_render_attributes( $item, $item_index, $widget ) {
		$recaptcha_name = static::get_recaptcha_name();

		$widget->add_render_attribute( [
			$recaptcha_name . $item_index => [
				'class' => 'elementor-g-recaptcha',
				'data-sitekey' => static::get_site_key(),
				'data-type' => static::get_recaptcha_type(),
			],
		] );

		$this->add_version_specific_render_attributes( $item, $item_index, $widget );
	}

	/**
	 * @param $item
	 * @param $item_index
	 * @param $widget Widget_Base
	 */
	protected function add_version_specific_render_attributes( $item, $item_index, $widget ) {
		$recaptcha_name = static::get_recaptcha_name();
		$widget->add_render_attribute( $recaptcha_name . $item_index, [
			'data-theme' => $item['recaptcha_style'],
			'data-size' => $item['recaptcha_size'],
		] );
	}

	public function add_field_type( $field_types ) {
		$field_types['recaptcha'] = esc_html__( 'reCAPTCHA', 'elementor-pro' );

		return $field_types;
	}

	public function filter_field_item( $item ) {
		if ( static::get_recaptcha_name() === $item['field_type'] ) {
			$item['field_label'] = false;
		}

		return $item;
	}

	public function __construct() {
		$this->register_scripts();

		add_filter( 'elementor_pro/forms/field_types', [ $this, 'add_field_type' ] );
		add_action( 'elementor_pro/forms/render_field/' . static::get_recaptcha_name(), [ $this, 'render_field' ], 10, 3 );
		add_filter( 'elementor_pro/forms/render/item', [ $this, 'filter_field_item' ] );
		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'localize_settings' ] );

		if ( static::is_enabled() ) {
			add_action( 'elementor_pro/forms/validation', [ $this, 'validation' ], 10, 2 );
			add_action( 'elementor/preview/enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		}

		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ] );
		}
	}
}
