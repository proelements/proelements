<?php
namespace ElementorPro\Modules\AtomicForm\Recaptcha_Score;

use Elementor\Utils as ElementorUtils;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Recaptcha_Score_Client {
	const ASSESSMENTS_URL = 'https://recaptchaenterprise.googleapis.com/v1/projects/%s/assessments';

	const CREDENTIALS_CHECK_TOKEN = 'elementor-credentials-check';

	const REQUEST_TIMEOUT = 10;

	private string $project_id;

	private string $api_key;

	private string $site_key;

	public function __construct( string $project_id, string $api_key, string $site_key ) {
		$this->project_id = $project_id;
		$this->api_key = $api_key;
		$this->site_key = $site_key;
	}

	public function create_assessment( string $token, string $expected_action ): ?array {
		$response = $this->post_assessment( [
			'token' => $token,
			'siteKey' => $this->site_key,
			'expectedAction' => $expected_action,
			'userIpAddress' => Utils::get_client_ip(),
			'userAgent' => $this->get_user_agent(),
		] );

		if ( is_wp_error( $response ) || 200 !== (int) wp_remote_retrieve_response_code( $response ) ) {
			return null;
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		return is_array( $body ) ? $body : null;
	}

	// Google answers an assessment for a placeholder token with 200 only when the project and API key are accepted.
	public function validate_credentials(): bool {
		$response = $this->post_assessment( [
			'token' => self::CREDENTIALS_CHECK_TOKEN,
			'siteKey' => $this->site_key,
		] );

		if ( is_wp_error( $response ) ) {
			return false;
		}

		return 200 === (int) wp_remote_retrieve_response_code( $response );
	}

	/**
	 * @return array|\WP_Error
	 */
	private function post_assessment( array $event ) {
		// The API key goes in a header so it never shows up in URLs (access logs, debug tools, WP_Error messages).
		return wp_remote_post( sprintf( self::ASSESSMENTS_URL, rawurlencode( $this->project_id ) ), [
			'timeout' => self::REQUEST_TIMEOUT,
			'headers' => [
				'Content-Type' => 'application/json',
				'X-goog-api-key' => $this->api_key,
			],
			'body' => wp_json_encode( [ 'event' => $event ] ),
		] );
	}

	private function get_user_agent(): string {
		$user_agent = ElementorUtils::get_super_global_value( $_SERVER, 'HTTP_USER_AGENT' );

		return is_string( $user_agent ) ? sanitize_text_field( $user_agent ) : '';
	}
}
