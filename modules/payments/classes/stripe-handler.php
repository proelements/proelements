<?php

namespace ElementorPro\Modules\Payments\Classes;

use Elementor\Core\Base\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Stripe_Handler {
	const STRIPE_ENDPOINT_URL = 'https://api.stripe.com/v1/';

	/**
	 * Abstract function to create GET calls from the stripe API
	 * @param string $secret_key
	 * @param string $endpoint
	 * @param array $body
	 * @return array|\WP_Error
	 */
	public function get( $secret_key, $endpoint = '', $body = [] ) {
		$headers = [ 'Authorization' => 'Bearer ' . $secret_key ];
		return wp_remote_get( self::STRIPE_ENDPOINT_URL . $endpoint, [
			'headers' => $headers,
			'body' => $body,
		] );
	}

	/**
	 * @param $headers
	 * @param $body
	 * @param $endpoint
	 * @return array|\WP_Error
	 */
	public function post( $headers, $body, $endpoint ) {
		return wp_remote_post( self::STRIPE_ENDPOINT_URL . $endpoint, [
			'headers' => $headers,
			'body' => $body,
		] );
	}
}
