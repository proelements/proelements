<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Rest_Client {

	private $api_base_url = '';
	private $user_agent = 'Elementor Forms (elementor.com)';
	public $request_cache = [];
	private $headers = [];
	private $request_args = [];

	public function __construct( $rest_base_url ) {
		$this->api_base_url = $rest_base_url;
		//setup defaults
		$this->set_request_arg( 'timeout', 30 )
			 ->set_request_arg( 'sslverify', false )
			 ->add_headers( 'User-Agent', $this->user_agent );

		/**
		 * Initiate Elementor form REST API client.
		 *
		 * Fires when Elementor forms are initiated on REST API client.
		 *
		 * @since 2.4.0
		 *
		 * @param Rest_Client $this An instance of form REST API client.
		 */
		do_action( 'elementor-pro/forms/rest_client/init', $this );

		return $this;
	}

	/**
	 * Set REST API base url.
	 *
	 * @param string $url
	 */
	public function set_base_url( $url ) {
		$this->api_base_url = $url;
	}

	/**
	 * Get REST API base url.
	 *
	 * @return string
	 */
	public function get_base_url() {
		return $this->api_base_url;
	}

	/**
	 * Add headers to REST API.
	 *
	 * @param $key   Header key.
	 * @param $value Optional. Header value. Default is null.
	 *
	 * @return $this An instance of REST API client.
	 */
	public function add_headers( $key, $value = null ) {
		if ( ! is_array( $key ) ) {
			$this->headers[ $key ] = $value;

			return $this;
		}
		foreach ( $key as $header => $header_value ) {
			$this->headers[ $header ] = $header_value;
		}

		return $this;
	}

	/**
	 * Set REST API request arguments.
	 *
	 * @param string $name  Optional. Request argument name. Default is ''.
	 * @param null   $value Optional. Request argument value. Default is null.
	 *
	 * @return $this An instance of REST API client.
	 */
	public function set_request_arg( $name = '', $value = null ) {
		$this->request_args[ $name ] = $value;

		return $this;
	}

	/**
	 * @uses request
	 *
	 * @param string $endpoint Optional. Default is ''.
	 * @param null   $data     Optional. Default is null.
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function post( $endpoint = '', $data = null ) {
		$request_body = wp_json_encode( $data );

		return $this->request( 'POST', $endpoint, $request_body );
	}

	/**
	 * @uses request
	 *
	 * @param string $endpoint Optional. Default is ''.
	 * @param null   $data     Optional. Default is null.
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function get( $endpoint = '', $data = null ) {
		return $this->request( 'GET', $endpoint, $data );
	}

	/**
	 * @param string $method              Optional. Default is 'GET'.
	 * @param string $endpoint            Optional. Default is ''.
	 * @param null   $request_body        Optional. Default is null.
	 * @param int    $valid_response_code Optional. Default is '200'.
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function request( $method = 'GET', $endpoint = '', $request_body = null, $valid_response_code = 200 ) {
		$request_url = $this->api_base_url . $endpoint;
		$base_args = [
			'method' => $method,
			'headers' => $this->headers,
		];
		$api_request_args = array_merge( $base_args, $this->request_args );
		if ( null !== $request_body ) {
			if ( in_array( $method, [ 'POST', 'PUT' ] ) ) {
				$api_request_args['body'] = $request_body;
			} else {
				$request_url = add_query_arg( $request_body, $request_url );
			}
		}

		$cache_key = md5( $method . $endpoint . json_encode( $api_request_args ) );
		if ( isset( $this->request_cache[ $cache_key ] ) && isset( $this->request_cache[ $cache_key ]['parsed'] ) ) {
			$this->request_cache[ $cache_key ]['parsed'];
		}

		$response = wp_remote_request( $request_url, $api_request_args );
		$response_code = (int) wp_remote_retrieve_response_code( $response );

		$this->request_cache[ $cache_key ]['raw'] = $response;

		if ( is_wp_error( $response ) || $valid_response_code !== $response_code ) {
			throw new \Exception( 'Rest Client Error: response code ' . $response_code );
		}

		$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! is_array( $response_body ) ) {
			throw new \Exception( 'Rest Client Error: unexpected response type' );
		}

		$return = [
			'code' => $response_code,
			'body' => $response_body,
		];
		$this->request_cache[ $cache_key ]['parsed'] = $return;

		return $return;
	}
}
