<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\License\API;
use ElementorPro\Modules\AtomicForm\Module;
use ElementorPro\Modules\Forms\Actions\Mailchimp;
use ElementorPro\Modules\Forms\Classes\Mailchimp_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Action extends Action_Base {

	const API_KEY_SOURCE_DEFAULT = 'default';
	const API_KEY_SOURCE_CUSTOM = 'custom';
	const EMAIL_REMOTE_ID = 'email';
	const STATUS_SUBSCRIBED = 'subscribed';
	const STATUS_PENDING = 'pending';
	const HTTP_OK = 200;
	const HTTP_NO_CONTENT = 204;
	const HTTP_NOT_FOUND = 404;

	public function get_type(): string {
		return Action_Type::MAILCHIMP;
	}

	public static function get_global_api_key(): string {
		return trim( (string) get_option( 'elementor_' . Mailchimp::OPTION_NAME_API_KEY, '' ) );
	}

	public static function resolve_api_key( array $settings ): string {
		if ( self::API_KEY_SOURCE_CUSTOM === ( $settings['mailchimp-api-key-source'] ?? self::API_KEY_SOURCE_DEFAULT ) ) {
			$custom_api_key = $settings['mailchimp-api-key'] ?? '';

			return is_string( $custom_api_key ) ? trim( $custom_api_key ) : '';
		}

		return self::get_global_api_key();
	}

	public function execute( array $form_data, array $widget_settings, array $context ): array {
		if ( ! API::is_licence_has_feature( Module::MAILCHIMP_ACTION_LICENSE_FEATURE_NAME ) ) {
			return $this->failure(
				__( 'Mailchimp action is not available', 'elementor-pro' ),
				[ 'log' => __( 'Skipped: the license does not include this action', 'elementor-pro' ) ]
			);
		}

		$api_key = self::resolve_api_key( $widget_settings );
		$audience = $this->get_string_value( $widget_settings, 'mailchimp-audience' );

		if ( '' === $api_key || '' === $audience ) {
			return $this->failure( __( 'Mailchimp API key and audience are required', 'elementor-pro' ) );
		}

		$fields_map = $widget_settings['mailchimp-fields-map'] ?? [];

		$subscriber = $this->map_fields(
			$form_data,
			is_array( $fields_map ) ? $fields_map : [],
			$context['cssid_map'] ?? [],
			$context['field_group_members'] ?? []
		);

		if ( empty( $subscriber['email_address'] ) ) {
			return $this->failure( __( 'Mailchimp requires an email address', 'elementor-pro' ) );
		}

		if ( ! is_email( $subscriber['email_address'] ) ) {
			return $this->failure( __( 'Mailchimp requires a valid email address', 'elementor-pro' ) );
		}

		$member_endpoint = sprintf( 'lists/%s/members/%s', rawurlencode( $audience ), md5( strtolower( $subscriber['email_address'] ) ) );

		try {
			$this->set_subscriber( $api_key, $member_endpoint, $subscriber, $widget_settings );
		} catch ( \Exception $e ) {
			// The Mailchimp error can expose account details, so it goes to the action log only.
			return $this->failure(
				__( 'The subscriber could not be added to Mailchimp', 'elementor-pro' ),
				[ 'log' => $e->getMessage() ]
			);
		}

		$success_message = __( 'Subscriber added to Mailchimp', 'elementor-pro' );

		try {
			$this->add_tags( $api_key, $member_endpoint, $this->parse_tags( $this->get_string_value( $widget_settings, 'mailchimp-tags' ) ) );
		} catch ( \Exception $e ) {
			return $this->success( $success_message, [
				'log' => sprintf(
					/* translators: %s: Mailchimp error message. */
					__( 'Subscriber saved, but tags were not added: %s', 'elementor-pro' ),
					$e->getMessage()
				),
			] );
		}

		return $this->success( $success_message );
	}

	private function get_string_value( array $data, string $key ): string {
		$value = $data[ $key ] ?? '';

		return is_string( $value ) ? $value : '';
	}

	private function map_fields( array $form_data, array $fields_map, array $cssid_map, array $field_group_members ): array {
		$subscriber = [];

		foreach ( $fields_map as $map_item ) {
			if ( ! is_array( $map_item ) ) {
				continue;
			}

			$remote_id = $this->get_string_value( $map_item, 'key' );
			$cssid = $this->get_string_value( $map_item, 'value' );
			$value = $this->resolve_mapped_field_value( $form_data, $cssid, $cssid_map, $field_group_members );

			if ( '' === $remote_id || '' === $value ) {
				continue;
			}

			if ( self::EMAIL_REMOTE_ID === $remote_id ) {
				$subscriber['email_address'] = $value;
			} else {
				$subscriber['merge_fields'][ $remote_id ] = $value;
			}
		}

		return $subscriber;
	}

	private function resolve_mapped_field_value( array $form_data, string $cssid, array $cssid_map, array $field_group_members ): string {
		$element_id = $cssid_map[ $cssid ] ?? $cssid;
		$candidate_ids = $field_group_members[ $element_id ] ?? [ $element_id ];

		foreach ( $candidate_ids as $candidate_id ) {
			if ( ! array_key_exists( $candidate_id, $form_data ) ) {
				continue;
			}

			$value = $form_data[ $candidate_id ];
			$normalized = is_array( $value ) ? implode( ', ', $value ) : (string) $value;

			if ( '' !== $normalized ) {
				return $normalized;
			}
		}

		return '';
	}

	private function set_subscriber( string $api_key, string $member_endpoint, array $subscriber, array $settings ): void {
		$groups = $settings['mailchimp-groups'] ?? [];

		foreach ( is_array( $groups ) ? $groups : [] as $group ) {
			if ( is_string( $group ) && '' !== $group ) {
				$subscriber['interests'][ $group ] = true;
			}
		}

		if ( empty( $settings['mailchimp-double-opt-in'] ) ) {
			$subscriber['status_if_new'] = self::STATUS_SUBSCRIBED;
		} else {
			$subscriber['status_if_new'] = self::STATUS_PENDING;
			$existing_status = $this->get_subscriber_status( $api_key, $member_endpoint );

			if ( $existing_status && self::STATUS_SUBSCRIBED !== $existing_status ) {
				$subscriber['status'] = self::STATUS_PENDING;
			}
		}

		$response = ( new Mailchimp_Handler( $api_key ) )->post( $member_endpoint, $subscriber, [ 'method' => 'PUT' ] );

		$this->assert_response_code( $response, self::HTTP_OK );
	}

	private function get_subscriber_status( string $api_key, string $member_endpoint ): ?string {
		try {
			return ( new Mailchimp_Handler( $api_key ) )->query( $member_endpoint )['status'] ?? null;
		} catch ( \Exception $e ) {
			if ( self::HTTP_NOT_FOUND === $e->getCode() ) {
				return null;
			}

			throw $e;
		}
	}

	private function add_tags( string $api_key, string $member_endpoint, array $tags ): void {
		if ( empty( $tags ) ) {
			return;
		}

		$response = ( new Mailchimp_Handler( $api_key ) )->post( $member_endpoint . '/tags', [
			'tags' => array_map( fn( $tag ) => [
				'name' => $tag,
				'status' => 'active',
			], $tags ),
		] );

		$this->assert_response_code( $response, self::HTTP_NO_CONTENT );
	}

	private function parse_tags( string $tags ): array {
		return array_values( array_filter( array_map( 'trim', explode( ',', $tags ) ) ) );
	}

	private function assert_response_code( array $response, int $expected_code ): void {
		if ( $expected_code === $response['code'] ) {
			return;
		}

		$body = is_array( $response['body'] ) ? $response['body'] : [];
		$error = is_string( $body['detail'] ?? null ) ? $body['detail'] : '';
		$field_errors = $this->format_field_errors( $body['errors'] ?? [] );

		if ( '' !== $field_errors ) {
			$error = trim( "{$error} ({$field_errors})" );
		}

		throw new \Exception( "Mailchimp HTTP {$response['code']} - {$error}" );
	}

	private function format_field_errors( $errors ): string {
		if ( ! is_array( $errors ) ) {
			return '';
		}

		$messages = [];

		foreach ( $errors as $error ) {
			$message = is_array( $error ) && is_string( $error['message'] ?? null ) ? $error['message'] : '';

			if ( '' === $message ) {
				continue;
			}

			$field = is_string( $error['field'] ?? null ) ? $error['field'] : '';
			$messages[] = '' !== $field ? "{$field}: {$message}" : $message;
		}

		return implode( '; ', $messages );
	}
}
