<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Activecampaign_Handler {

	private $rest_client = null;

	private $api_key = '';

	public function __construct( $api_key, $base_url ) {
		if ( empty( $api_key ) ) {
			throw new \Exception( 'Invalid API key' );
		}

		if ( empty( $base_url ) ) {
			throw new \Exception( 'Invalid API key' );
		}

		$this->init_rest_client( $api_key, $base_url );

		if ( ! $this->is_valid_api_key() ) {
			throw new \Exception( 'Invalid API key or URL' );
		}
	}

	private function init_rest_client( $api_key, $base_url ) {
		$this->api_key = $api_key;
		$this->rest_client = new Rest_Client( trailingslashit( $base_url ) . 'admin/api.php' );
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
	 * get ActiveCampaign lists associated with API key
	 * @return array
	 * @throws \Exception
	 */
	public function get_lists() {
		$results = $this->rest_client->get( '?api_action=list_list', [
			'api_key' => $this->api_key,
			'ids' => 'all',
			'api_output' => 'json',
		] );

		$lists = [
			'' => esc_html__( 'Select...', 'elementor-pro' ),
		];

		if ( ! empty( $results['body'] ) ) {
			foreach ( $results['body'] as $index => $list ) {
				if ( ! is_array( $list ) ) {
					continue;
				}

				$lists[ $list['id'] ] = $list['name'];
			}
		}

		$return_array = [
			'lists' => $lists,
			'fields' => $this->get_fields(),
		];

		return $return_array;
	}

	/**
	 * get ActiveCampaign custom fields associated with API key
	 * @return array
	 * @throws \Exception
	 */
	private function get_fields() {
		$results = $this->rest_client->get( '?api_action=list_field_view', [
			'api_key' => $this->api_key,
			'ids' => 'all',
			'api_output' => 'json',
		] );

		$fields = [];

		if ( ! empty( $results['body'] ) ) {
			foreach ( $results['body'] as $index => $field ) {
				if ( ! is_array( $field ) ) {
					continue;
				}
				$fields[] = [
					'remote_label' => $field['title'],
					'remote_type' => $this->normalize_type( $field['type'] ),
					'remote_id' => 'field[' . $field['id'] . ',0]',
					'remote_required' => (bool) $field['isrequired'],
				];
			}
		}

		return $fields;
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
			'birthday' => 'text',
			'zip' => 'text',
		];

		return $types[ $type ];
	}

	/**
	 * create contact at Activecampaign via api
	 *
	 * @param array $subscriber_data
	 *
	 * @return array|mixed
	 * @throws \Exception
	 */
	public function create_subscriber( $subscriber_data = [] ) {
		$end_point = '?api_action=contact_sync&api_key=' . $this->api_key . '&api_output=json';

		return $this->rest_client->request( 'POST', $end_point, $subscriber_data );
	}
}
