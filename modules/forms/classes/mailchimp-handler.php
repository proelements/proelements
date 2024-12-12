<?php
namespace ElementorPro\Modules\Forms\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Handler {

	private $api_base_url = '';
	private $api_key = '';
	private $api_request_args = [];

	/**
	 * Mailchimp_Handler constructor.
	 *
	 * @param $api_key
	 *
	 * @throws \Exception
	 */
	public function __construct( $api_key ) {
		if ( empty( $api_key ) ) {
			throw new \Exception( 'Invalid API key.' );
		}

		// The API key is in format XXXXXXXXXXXXXXXXXXXX-us2 where us2 is the server sub domain for this account
		$key_parts = explode( '-', $api_key );
		if ( empty( $key_parts[1] ) || 0 !== strpos( $key_parts[1], 'us' ) ) {
			throw new \Exception( 'Invalid API key.' );
		}

		$this->api_key = $api_key;
		$this->api_base_url = 'https://' . $key_parts[1] . '.api.mailchimp.com/3.0/';
		$this->api_request_args = [
			'headers' => [
				'Authorization' => 'Basic ' . base64_encode( 'user:' . $this->api_key ),
			],
		];
	}

	public function query( $end_point ) {
		$response = wp_safe_remote_get( $this->api_base_url . $end_point, $this->api_request_args );

		if ( is_wp_error( $response ) || 200 != (int) wp_remote_retrieve_response_code( $response ) ) {
			throw new \Exception( 'Mailchimp error.' );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! is_array( $body ) ) {
			throw new \Exception( 'Mailchimp error.' );
		}

		return $body;
	}

	public function post( $end_point, $data, $request_args = [] ) {
		$this->api_request_args += $request_args;
		$this->api_request_args['headers']['Content-Type'] = 'application/json; charset=utf-8';
		$this->api_request_args['body'] = wp_json_encode( $data );
		$response = wp_safe_remote_post( $this->api_base_url . $end_point, $this->api_request_args );

		if ( is_wp_error( $response ) ) {
			throw new \Exception( 'Mailchimp error.' );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );
		$code = (int) wp_remote_retrieve_response_code( $response );

		// Throw an exception if there is no response body.
		// NOTE: HTTP 204 doesn't have a body.
		if ( 204 !== $code && ! is_array( $body ) ) {
			throw new \Exception( 'Mailchimp error.' );
		}

		return [
			'code' => $code,
			'body' => $body,
		];
	}

	public function get_lists() {
		$results = $this->query( 'lists?count=999' );

		$lists = [
			'' => 'Select...',
		];

		if ( ! empty( $results['lists'] ) ) {
			foreach ( $results['lists'] as $list ) {
				$lists[ $list['id'] ] = $list['name'];
			}
		}

		$return_array = [
			'lists' => $lists,
		];

		return $return_array;
	}

	public function get_groups( $list_id ) {
		$results = $this->query( 'lists/' . $list_id . '/interest-categories?count=999' );
		$groups = [];

		if ( ! empty( $results['categories'] ) ) {
			foreach ( $results['categories'] as $category ) {
				$interests_results = $this->query( 'lists/' . $list_id . '/interest-categories/' . $category['id'] . '/interests?count=999' );

				foreach ( $interests_results['interests'] as $interest ) {
					$groups[ $interest['id'] ] = $category['title'] . ' - ' . $interest['name'];
				}
			}
		}

		$return_array = [
			'groups' => $groups,
		];

		return $return_array;
	}

	public function get_fields( $list_id ) {
		$results = $this->query( 'lists/' . $list_id . '/merge-fields?count=999' );

		$fields = [
			[
				'remote_label' => 'Email',
				'remote_type' => 'email',
				'remote_id' => 'email',
				'remote_required' => true,
			],
		];

		if ( ! empty( $results['merge_fields'] ) ) {
			foreach ( $results['merge_fields'] as $field ) {
				$fields[] = [
					'remote_label' => $field['name'],
					'remote_type' => $this->normalize_type( $field['type'] ),
					'remote_id' => $field['tag'],
					'remote_required' => $field['required'],
				];
			}
		}

		$return_array = [
			'fields' => $fields,
		];

		return $return_array;
	}

	public function get_list_details( $list_id ) {
		$groups = $this->get_groups( $list_id );
		$fields = $this->get_fields( $list_id );

		return [
			'list_details' => $groups + $fields,
		];
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
}
