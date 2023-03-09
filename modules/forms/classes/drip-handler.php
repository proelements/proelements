<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Drip_Handler {
	private $rest_client = null;
	private $api_token = '';

	/**
	 * Drip_Handler constructor.
	 *
	 * @param $api_token
	 *
	 * @throws \Exception
	 */
	public function __construct( $api_token ) {
		if ( empty( $api_token ) ) {
			throw new \Exception( 'Invalid API key.' );
		}
		$this->init_rest_client( $api_token );
		if ( ! $this->is_valid_api_token() ) {
			throw new \Exception( 'Invalid API key.' );
		}
	}

	private function init_rest_client( $api_token ) {
		$this->api_token = $api_token;
		$this->rest_client = new Rest_Client( 'https://api.getdrip.com/v2/' );
		$this->rest_client->add_headers( [
			'Authorization' => 'Basic ' . base64_encode( $this->api_token ),
			'Content-Type' => 'application/vnd.api+json',
		] );
	}

	/**
	 * validate api token
	 *
	 * @return bool
	 * @throws \Exception
	 */
	private function is_valid_api_token() {
		$accounts = $this->get_accounts();
		if ( ! empty( $accounts ) ) {
			return true;
		}
		$this->api_token = '';

		return false;
	}

	/**
	 * get drip accounts associated with API token
	 * @return array
	 * @throws \Exception
	 */
	public function get_accounts() {
		$results = $this->rest_client->get( 'accounts' );

		$accounts = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( ! empty( $results['body']['accounts'] ) ) {
			foreach ( $results['body']['accounts'] as $index => $account ) {
				$accounts[ $account['id'] ] = $account['name'];
			}
		}

		$return_array = [
			'accounts' => $accounts,
		];

		return $return_array;
	}

	/**
	 * create subscriber at drip via api
	 *
	 * @param string $account_id
	 * @param array  $subscriber_data
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function create_subscriber( $account_id = '', $subscriber_data = [] ) {
		$end_point = sprintf( '%s/subscribers/', $account_id );

		return $this->rest_client->post( $end_point, [ 'subscribers' => [ $subscriber_data ] ] );
	}
}
