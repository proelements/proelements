<?php
namespace ElementorPro\Modules\Woocommerce\Data\Endpoints;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Set_Notice_Dismissed extends Base_Endpoint {

	public function get_name() : string {
		return 'set-notice-dismissed';
	}

	public function handle_post_meta_request( \WP_REST_Request $request ): array {
		$data = $request->get_params();
		$post_id = $data['post_id'];
		$is_cart_dismissed = $data[ self::IS_CART_NOTICE_DISMISSED ];
		$is_cart_dismissed_database_value = true === $is_cart_dismissed ? 'true' : 'false';
		$is_dismissed_database_key = self::IS_CART_NOTICE_DISMISSED;

		update_post_meta( $post_id, $is_dismissed_database_key, $is_cart_dismissed_database_value );

		return [
			self::IS_CART_NOTICE_DISMISSED => $is_cart_dismissed,
		];
	}

	protected function register() {
		register_rest_route( $this->controller->get_namespace(), $this->get_route(), [
			[
				'args' => [
					'post_id' => [
						'type' => 'integer',
						'required' => true,
					],
					self::IS_CART_NOTICE_DISMISSED => [
						'type' => 'boolean',
						'required' => true,
					],
				],
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'handle_post_meta_request' ],
				'permission_callback' => function () {
					return $this->permission_callback();
				},
			],
		] );
	}
}
