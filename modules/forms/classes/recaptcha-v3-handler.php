<?php
namespace ElementorPro\Modules\Forms\Classes;

use Elementor\Settings;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Integration with Google reCAPTCHA
 */
class Recaptcha_V3_Handler extends Recaptcha_Handler {

	const OPTION_NAME_V3_SITE_KEY = 'elementor_pro_recaptcha_v3_site_key';
	const OPTION_NAME_V3_SECRET_KEY = 'elementor_pro_recaptcha_v3_secret_key';
	const OPTION_NAME_RECAPTCHA_THRESHOLD = 'elementor_pro_recaptcha_v3_threshold';
	const V3 = 'v3';
	const V3_DEFAULT_THRESHOLD = 0.5;
	const V3_DEFAULT_ACTION = 'Form';

	protected static function get_recaptcha_name() {
		return 'recaptcha_v3';
	}

	public static function get_site_key() {
		return get_option( self::OPTION_NAME_V3_SITE_KEY );
	}

	public static function get_secret_key() {
		return get_option( self::OPTION_NAME_V3_SECRET_KEY );
	}

	public static function get_recaptcha_type() {
		return self::V3;
	}

	public static function get_recaptcha_threshold() {
		$threshold = get_option( self::OPTION_NAME_RECAPTCHA_THRESHOLD, self::V3_DEFAULT_THRESHOLD );
		if ( 0 > $threshold || 1 < $threshold ) {
			return self::V3_DEFAULT_THRESHOLD;
		}
		return $threshold;
	}

	public static function is_enabled() {
		return static::get_site_key() && static::get_secret_key();
	}

	public static function get_setup_message() {
		return __( 'To use reCAPTCHA V3, you need to add the API Key and complete the setup process in Dashboard > Elementor > Settings > Integrations > reCAPTCHA V3.', 'elementor-pro' );
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'recaptcha_v3', [
			'label' => __( 'reCAPTCHA V3', 'elementor-pro' ),
			'callback' => function() {
				echo sprintf( __( '<a href="%s" target="_blank">reCAPTCHA V3</a> is a free service by Google that protects your website from spam and abuse. It does this while letting your valid users pass through with ease.', 'elementor-pro' ), 'https://www.google.com/recaptcha/intro/v3.html' );
			},
			'fields' => [
				'pro_recaptcha_v3_site_key' => [
					'label' => __( 'Site Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				'pro_recaptcha_v3_secret_key' => [
					'label' => __( 'Secret Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				'pro_recaptcha_v3_threshold' => [
					'label' => __( 'Score Threshold', 'elementor-pro' ),
					'field_args' => [
						'attributes' => [
							'min' => 0,
							'max' => 1,
							'placeholder' => '0.5',
							'step' => '0.1',
						],
						'std' => 0.5,
						'type' => 'number',
						'desc' => __( 'Score threshold should be a value between 0 and 1, default: 0.5', 'elementor-pro' ),
					],
				],
			],
		] );
	}

	/**
	 * @param $item
	 * @param $item_index
	 * @param $widget Widget_Base
	 */
	protected function add_version_specific_render_attributes( $item, $item_index, $widget ) {
		$recaptcha_name = static::get_recaptcha_name();
		$widget->add_render_attribute( $recaptcha_name . $item_index, [
			'data-action' => self::V3_DEFAULT_ACTION,
			'data-badge' => $item['recaptcha_badge'],
			'data-size' => 'invisible',
		] );
	}

	/**
	 * @param Ajax_Handler $ajax_handler
	 * @param $field
	 * @param $message
	 */
	protected function add_error( $ajax_handler, $field, $message ) {
		parent::add_error( $ajax_handler, $field, $message );
		$ajax_handler->add_error_message( __( 'reCAPTCHA V3 validation failed, suspected as abusive usage', 'elementor-pro' ) );
	}

	protected function validate_result( $result, $field ) {
		$action = self::V3_DEFAULT_ACTION;
		$action_ok = ! isset( $result['action'] ) ? true : $action === $result['action'];
		return $action_ok && ( $result['score'] > self::get_recaptcha_threshold() );
	}

	public function add_field_type( $field_types ) {
		$field_types['recaptcha_v3'] = __( 'reCAPTCHA V3', 'elementor-pro' );

		return $field_types;
	}

	/**
	 * @param $item
	 * @param $item_index
	 * @param Widget_Base $widget
	 *
	 * @return $item
	 */
	public function filter_recaptcha_item( $item, $item_index, $widget ) {
		$widget->add_render_attribute( 'field-group' . $item_index, 'class', [
			self::get_recaptcha_name() . '-' . $item['recaptcha_badge'],
		] );

		return $item;
	}

	public function __construct() {
		parent::__construct();
		add_filter( 'elementor_pro/forms/render/item/' . self::get_recaptcha_name(), [ $this, 'filter_recaptcha_item' ], 10, 3 );
	}
}
