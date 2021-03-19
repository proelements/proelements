<?php
namespace ElementorPro\Modules\Forms\Submissions\Data\Endpoints;

use ElementorPro\Data\Base\Endpoint;
use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Referer extends Endpoint {
	public function get_name() {
		return 'referer';
	}

	protected function register() {
		$this->register_route(
			'',
			\WP_REST_Server::READABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::READABLE, $request, true );
			},
			[
				'context' => [
					'description' => 'Scope under which the request is made, determines fields present in response. (only "options" available for now)',
					'type' => 'string',
					'enum' => [
						'options',
					],
					'default' => 'options',
					'required' => false,
				],
				'search' => [
					'description' => 'Limit results to those matching a string.',
					'type' => 'string',
					'required' => false,
					'additionalProperties' => [
						'context' => 'filter',
					],
				],
				'value' => [
					'description' => 'Limit results specific referer.',
					'type' => 'string',
					'required' => false,
					'additionalProperties' => [
						'context' => 'filter',
					],
				],
			]
		);
	}

	public function get_items( $request ) {
		$referrers = Query::get_instance()->get_referrers(
			$request->get_param( 'search' ),
			$request->get_param( 'value' )
		);

		// For now return only as "options"
		return [
			'data' => $referrers->map(function ( $referer ) {
				return [
					'label' => $referer['referer_title'],
					'value' => $referer['referer'],
				];
			})->values(),
			'meta' => [],
		];
	}
}
