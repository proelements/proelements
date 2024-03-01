<?php
namespace ElementorPro\Modules\Woocommerce\Data\Endpoints;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Get_Notice_Dismissed extends Base_Endpoint {

	public function get_name() : string {
		return 'get-notice-dismissed';
	}

	public function handle_post_meta_request( \WP_REST_Request $request ): array {
		$data = $request->get_params();
		$post_id = $data['post_id'];
		$is_dismissed_database_key = self::IS_CART_NOTICE_DISMISSED;

		return [
			self::IS_CART_NOTICE_DISMISSED => get_post_meta( $post_id, $is_dismissed_database_key, true ),
		];
	}

	protected function register() {
		register_rest_route( $this->controller->get_namespace(), $this->get_route() . '/(?P<post_id>\d+)', [
			[
				'methods' => \WP_REST_Server::READABLE,
				'callback' => [ $this, 'handle_post_meta_request' ],
				'permission_callback' => function () {
					return $this->permission_callback();
				},
			],
		] );
	}
}
