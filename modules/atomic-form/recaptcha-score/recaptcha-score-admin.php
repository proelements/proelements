<?php
namespace ElementorPro\Modules\AtomicForm\Recaptcha_Score;

use Elementor\Settings;
use Elementor\Utils as ElementorUtils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Recaptcha_Score_Admin {
	const SECTION_ID = 'recaptcha_score';

	// Runs after the reCAPTCHA (v2) and V3 sections, which register on the default priority.
	const SETTINGS_PRIORITY = 11;

	const VALIDATE_ACTION = 'elementor_pro_recaptcha_score_validate';

	const VALIDATE_FIELD_ID = 'recaptcha_score_validate';

	const VALIDATE_BUTTON_ID = 'elementor_pro_recaptcha_score_validate_button';

	const SETUP_GUIDE_URL = 'https://go.elementor.com/wp-dash-atomic-form-recaptcha-google/';

	// Core settings use the URL hash for the tab id and render section titles without an id,
	// so the section is passed as a query arg and the admin script scrolls to this anchor.
	const SECTION_QUERY_ARG = 'elementor_settings_section';

	const SECTION_ANCHOR_ID = 'elementor-pro-recaptcha-score-section';

	public function __construct() {
		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], self::SETTINGS_PRIORITY );
		}

		add_action( 'wp_ajax_' . self::VALIDATE_ACTION, [ $this, 'ajax_validate' ] );
	}

	public static function get_section_url(): string {
		return add_query_arg( self::SECTION_QUERY_ARG, self::SECTION_ID, Settings::get_settings_tab_url( Settings::TAB_INTEGRATIONS ) );
	}

	public function register_admin_fields( Settings $settings ): void {
		$settings->add_section( Settings::TAB_INTEGRATIONS, self::SECTION_ID, [
			'label' => esc_html__( 'Score-based reCAPTCHA', 'elementor-pro' ),
			'callback' => function () {
				printf( '<span id="%s"></span>', esc_attr( self::SECTION_ANCHOR_ID ) );
				echo esc_html__( 'Protect Atomic Form submissions from spam using Google\'s score-based reCAPTCHA. This integration is available for Atomic Forms only.', 'elementor-pro' );
				echo ' ';
				printf(
					'<a href="%s" target="_blank">%s</a>',
					esc_url( self::SETUP_GUIDE_URL ),
					esc_html__( 'Set up score-based reCAPTCHA', 'elementor-pro' )
				);
			},
			'fields' => [
				Recaptcha_Score_Settings::FIELD_SITE_KEY => [
					'label' => esc_html__( 'reCAPTCHA Key ID', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				Recaptcha_Score_Settings::FIELD_PROJECT_ID => [
					'label' => esc_html__( 'Google Cloud Project ID', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				Recaptcha_Score_Settings::FIELD_API_KEY => [
					'label' => esc_html__( 'Google Cloud API Key', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
					],
				],
				Recaptcha_Score_Settings::FIELD_THRESHOLD => [
					'label' => esc_html__( 'Spam Score Threshold', 'elementor-pro' ),
					'field_args' => [
						'attributes' => [
							'min' => 0,
							'max' => 1,
							'placeholder' => '0.5',
							'step' => '0.1',
						],
						'std' => Recaptcha_Score_Settings::DEFAULT_THRESHOLD,
						'type' => 'number',
						'desc' => esc_html__( 'Submissions with a score below this value are treated as spam. Recommended: 0.5.', 'elementor-pro' ),
					],
					'setting_args' => [
						'sanitize_callback' => [ Recaptcha_Score_Settings::class, 'sanitize_threshold' ],
					],
				],
				self::VALIDATE_FIELD_ID => [
					'field_args' => [
						'type' => 'raw_html',
						'html' => $this->get_validate_button_html(),
					],
				],
			],
		] );
	}

	public function ajax_validate(): void {
		check_ajax_referer( self::VALIDATE_ACTION, '_nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( esc_html__( 'Permission denied', 'elementor-pro' ) );
		}

		$site_key = $this->get_posted_value( 'site_key' );
		$project_id = $this->get_posted_value( 'project_id' );
		$api_key = $this->get_posted_value( 'api_key' );

		if ( '' === $site_key || '' === $project_id || '' === $api_key ) {
			wp_send_json_error();
		}

		$client = new Recaptcha_Score_Client( $project_id, $api_key, $site_key );

		if ( ! $client->validate_credentials() ) {
			wp_send_json_error();
		}

		wp_send_json_success();
	}

	private function get_posted_value( string $key ): string {
		$value = ElementorUtils::get_super_global_value( $_POST, $key ); // phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is validated in ajax_validate.

		return is_string( $value ) ? trim( sanitize_text_field( $value ) ) : '';
	}

	private function get_validate_button_html(): string {
		// Validate only proves that the project and API key are accepted; Google does not reject a wrong key ID for a placeholder token.
		return sprintf(
			'<button type="button" data-action="%1$s" data-nonce="%2$s" data-success-message="%3$s" data-error-message="%4$s" data-section-query-arg="%7$s" data-section-id="%8$s" data-section-anchor="%9$s" class="button elementor-button-spinner" id="%5$s">%6$s</button><p class="elementor-pro-recaptcha-score-validation-message hidden" aria-live="polite"></p>',
			esc_attr( self::VALIDATE_ACTION ),
			esc_attr( wp_create_nonce( self::VALIDATE_ACTION ) ),
			esc_attr__( 'Score-based reCAPTCHA project and API key verified', 'elementor-pro' ),
			esc_attr__( 'We couldn’t validate these credentials. Check your details and try again', 'elementor-pro' ),
			esc_attr( self::VALIDATE_BUTTON_ID ),
			esc_html__( 'Validate', 'elementor-pro' ),
			esc_attr( self::SECTION_QUERY_ARG ),
			esc_attr( self::SECTION_ID ),
			esc_attr( self::SECTION_ANCHOR_ID )
		);
	}
}
