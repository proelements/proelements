<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Mailerlite_Handler {
	/**
	 * @var Rest_Client
	 */
	private $rest_client = null;
	private $api_key = '';

	/**
	 * Mailerlite_Handler constructor.
	 *
	 * @param $api_key
	 *
	 * @throws \Exception
	 */
	public function __construct( $api_key ) {
		if ( empty( $api_key ) ) {
			throw new \Exception( 'Invalid API key' );
		}
		$this->init_rest_client( $api_key );
		if ( ! $this->is_valid_api_key() ) {
			throw new \Exception( 'Invalid API key' );
		}
	}

	private function init_rest_client( $api_key ) {
		$this->api_key = $api_key;
		$this->rest_client = new Rest_Client( 'https://api.mailerlite.com/api/v2/' );
		$this->rest_client->add_headers( [
			'X-MailerLite-ApiKey' => $api_key,
			'Content-Type' => 'application/json',
		] );
	}

	/**
	 * validate api key
	 *
	 * @return bool
	 * @throws \Exception
	 */
	private function is_valid_api_key() {
		$groups = $this->rest_client->get( 'groups' );
		if ( ! empty( $groups ) ) {
			return true;
		}
		$this->api_key = '';

		return false;
	}

	/**
	 * get MailerLite groups associated with API key
	 * @return array
	 * @throws \Exception
	 */
	public function get_groups() {
		$results = $this->rest_client->get( 'groups' );

		$groups = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( 200 === $results['code'] ) {
			foreach ( $results['body'] as $index => $group ) {
				$groups[ $group['id'] ] = $group['name'];
			}
		}

		$return_array = [
			'groups' => $groups,
			'fields' => $this->get_fields(),
		];

		return $return_array;
	}

	/**
	 * get MailerLite fields associated with API key
	 * @return array
	 * @throws \Exception
	 */
	public function get_fields() {
		$results = $this->rest_client->get( 'fields' );

		$fields = [];
		if ( ! empty( $results['body'] ) ) {
			foreach ( $results['body'] as $index => $field ) {
				if ( ! is_array( $field ) || empty( $field['date_updated'] ) ) {
					continue;
				}
				$fields[] = [
					'remote_label' => $field['title'],
					'remote_type' => strtolower( $field['type'] ),
					'remote_id' => $field['key'],
					'remote_required' => false,
				];
			}
		}

		return $fields;
	}

	/**
	 * create subscriber at drip via api
	 *
	 * @param string $group
	 * @param array  $subscriber_data
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function create_subscriber( $group = '', $subscriber_data = [] ) {
		$end_point = sprintf( 'groups/%s/subscribers', $group );

		return $this->rest_client->post( $end_point, $subscriber_data );
	}
}
