<?php
namespace ElementorPro\License\Data\Endpoints;

use ElementorPro\Core\Data\Endpoints\Base;
use ElementorPro\Core\Data\Interfaces\Endpoint;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Get_Tier_Features extends Base implements Endpoint {

	public function get_name(): string {
		return 'get-tier-features';
	}

	public function get_route(): string {
		return 'tier-features';
	}

	protected function register() {
		register_rest_route(
			$this->controller->get_namespace(),
			'/' . $this->controller->get_name() . '/' . $this->get_route(),
			[
				[
					'methods' => 'GET',
					'callback' => [ $this, 'get_features' ],
					'permission_callback' => [ $this, 'permission_callback' ],
				],
			]
		);
	}

	public function get_features( $request ) {
		$license_data = API::get_license_data();
		$features = ! empty( $license_data['features'] ) ? $license_data['features'] : [];

		return new \WP_REST_Response( [
			'features' => $features,
		], 200 );
	}

	public function permission_callback( $request ) {
		return is_user_logged_in();
	}
}
