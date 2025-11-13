<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Convertkit_Handler {
	/*
	 * @var Rest_Client
	 */
	private $rest_client = null;
	private $api_key = '';

	/**
	 * Convertkit_Handler constructor.
	 *
	 * @param $api_key
	 *
	 * @throws \Exception
	 */
	public function __construct( $api_key ) {
		if ( empty( $api_key ) ) {
			throw new \Exception( 'Invalid API key.' );
		}

		$this->init_rest_client( $api_key );

		if ( ! $this->is_valid_api_key() ) {
			throw new \Exception( 'Invalid API key.' );
		}
	}

	private function init_rest_client( $api_key ) {
		$this->api_key = $api_key;
		$this->rest_client = new Rest_Client( 'https://api.convertkit.com/v3/' );
	}

	/**
	 * validate api key
	 *
	 * @return bool
	 * @throws \Exception
	 */
	private function is_valid_api_key() {
		$forms = $this->get_forms();
		if ( ! empty( $forms ) ) {
			return true;
		}
		$this->api_key = '';

		return false;
	}

	public function get_forms_and_tags() {
		$forms = $this->get_forms();
		$tags = $this->get_tags();

		return [
			'data' => [
				'forms' => $forms['forms'],
				'tags' => $tags['tags'],
			],
		];
	}

	/**
	 * get GetResponse lists associated with API key
	 * @return array
	 * @throws \Exception
	 */
	public function get_forms() {
		$results = $this->rest_client->get( 'forms/?api_key=' . $this->api_key );

		$forms = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( ! empty( $results['body']['forms'] ) ) {
			foreach ( $results['body']['forms'] as $index => $form ) {
				if ( ! is_array( $form ) ) {
					continue;
				}
				$forms[ $form['id'] ] = $form['name'];
			}
		}

		$return_array = [
			'forms' => $forms,
		];

		return $return_array;
	}

	public function get_tags() {
		$results = $this->rest_client->get( 'tags/?api_key=' . $this->api_key );

		$tags = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( ! empty( $results['body']['tags'] ) ) {
			foreach ( $results['body']['tags'] as $index => $tag ) {
				if ( ! is_array( $tag ) ) {
					continue;
				}
				$tags[ $tag['id'] ] = $tag['name'];
			}
		}

		$return_array = [
			'tags' => $tags,
		];

		return $return_array;
	}

	/**
	 * create contact at ConvertKit via api
	 *
	 * @param array $subscriber_data
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function create_subscriber( $form_id, $subscriber_data = [] ) {
		$endpoint = sprintf( 'forms/' . $form_id . '/subscribe?api_key=%s', $this->api_key );
		$this->rest_client->add_headers( 'Content-Type', 'application/json' );

		return $this->rest_client->post( $endpoint, $subscriber_data );
	}
}
