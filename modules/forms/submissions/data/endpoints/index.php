<?php
namespace ElementorPro\Modules\Forms\Submissions\Data\Endpoints;

use ElementorPro\Data\Base\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Index extends Endpoint {
	public function get_name() {
		return 'index';
	}

	protected function register() {
		$this->register_route(
			'',
			\WP_REST_Server::READABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::READABLE, $request, true );
			},
			$this->controller->get_collection_params()
		);

		$this->register_route(
			'(?P<id>[\d]+)/',
			\WP_REST_Server::READABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::READABLE, $request );
			},
			[
				'id' => [
					'description' => 'Unique identifier for the object.',
					'type' => 'string',
					'required' => true,
				],
			]
		);

		$this->register_route(
			'(?P<id>[\d]+)/',
			\WP_REST_Server::DELETABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::DELETABLE, $request );
			},
			[
				'id' => [
					'description' => 'Unique identifier for the object.',
					'type' => 'string',
					'required' => true,
				],
				'force' => [
					'description' => 'Delete the object permanently.',
					'type' => 'boolean',
					'required' => false,
				],
			]
		);

		$this->register_route(
			'',
			\WP_REST_Server::DELETABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::DELETABLE, $request, true );
			},
			[
				'ids' => [
					'description' => 'Unique identifiers for the objects.',
					'type' => 'array',
					'items' => [
						'type' => 'integer',
					],
					'validate_callback' => function ( $param ) {
						return ! empty( $param );
					},
					'required'    => true,
				],
				'force' => [
					'description' => 'Delete the object permanently.',
					'type' => 'boolean',
					'required' => false,
				],
			]
		);

		$this->register_route(
			'(?P<id>[\d]+)/',
			\WP_REST_Server::EDITABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::EDITABLE, $request );
			},
			[
				'id' => [
					'description' => 'Unique identifier for the object.',
					'type' => 'string',
					'required' => true,
				],
				'is_read' => [
					'description' => 'mark whether the submission was read or not',
					'type' => 'boolean',
					'required' => false,
				],
				'values' => [
					'description' => 'Form field values, receive an array, the key should be the form field id and the value should be the value.',
					'type' => 'object',
					'required' => false,
					'sanitize_callback' => function ( $values ) {
						$result = [];

						foreach ( $values as $key => $value ) {
							$result[ $key ] = sanitize_text_field( $value );
						}

						return $result;
					},
				],
			]
		);

		$this->register_route(
			'',
			\WP_REST_Server::EDITABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::EDITABLE, $request, true );
			},
			[
				'ids' => [
					'description' => 'Unique identifiers for the objects.',
					'type' => 'array',
					'items' => [
						'type' => 'integer',
					],
					'validate_callback' => function ( $param ) {
						return ! empty( $param );
					},
					'required'    => true,
				],
				'is_read' => [
					'description' => 'mark whether the submission was read or not',
					'type' => 'boolean',
					'required' => false,
				],
			]
		);
	}
}
