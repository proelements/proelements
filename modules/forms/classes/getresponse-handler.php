<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Getresponse_Handler {
	public $rest_client = null;
	private $api_key = '';

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
		$this->rest_client = new Rest_Client( 'https://api.getresponse.com/v3/' );
		$this->rest_client->add_headers( [
			'X-Auth-Token' => 'api-key ' . $api_key,
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
		$lists = $this->get_lists();
		if ( ! empty( $lists ) ) {
			return true;
		}
		$this->api_key = '';

		return false;
	}

	/**
	 * get GetResponse lists associated with API key
	 * @return array
	 * @throws \Exception
	 */
	public function get_lists() {
		$results = $this->rest_client->get( 'campaigns' );

		$lists = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( ! empty( $results['body'] ) ) {
			foreach ( $results['body'] as $index => $list ) {
				if ( ! is_array( $list ) ) {
					continue;
				}
				$lists[ $list['campaignId'] ] = $list['name'];
			}
		}

		$return_array = [
			'lists' => $lists,
		];

		return $return_array;
	}

	public function get_fields() {
		$results = $this->rest_client->get( 'custom-fields' );

		$fields = [
			[
				'remote_label' => esc_html__( 'Email', 'elementor-pro' ),
				'remote_type' => 'email',
				'remote_id' => 'email',
				'remote_required' => true,
			],
			[
				'remote_label' => esc_html__( 'Name', 'elementor-pro' ),
				'remote_type' => 'text',
				'remote_id' => 'name',
				'remote_required' => false,
			],
		];

		if ( ! empty( $results['body'] ) ) {
			foreach ( $results['body'] as $field ) {
				$fields[] = [
					'remote_label' => $field['name'],
					'remote_type' => $this->normalize_type( $field['type'] ),
					'remote_id' => $field['customFieldId'],
					'remote_required' => false,
				];
			}
		}

		$return_array = [
			'fields' => $fields,
		];

		return $return_array;
	}

	private function normalize_type( $type ) {
		static $types = [
			'text' => 'text',
			'number' => 'number',
			'address' => 'text',
			'phone' => 'text',
			'date' => 'text',
			'url' => 'url',
			'imageurl' => 'url',
			'radio' => 'radio',
			'dropdown' => 'select',
			'single_select' => 'select',
			'textarea' => 'text',
			'birthday' => 'text',
			'zip' => 'text',
			'country' => 'text',
			'gender' => 'text',
		];

		return $types[ $type ];
	}

	/**
	 * create contact at GetResponse via api
	 *
	 * @param array $subscriber_data
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function create_subscriber( $subscriber_data = [] ) {
		return $this->rest_client->request( 'POST', 'contacts', wp_json_encode( $subscriber_data ), 202 );
	}
}
