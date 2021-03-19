<?php
namespace ElementorPro\Modules\Forms\Submissions\Data\Endpoints;

use Elementor\Data\Base\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Forms_Index extends Endpoint {
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
			]
		);
	}
}
