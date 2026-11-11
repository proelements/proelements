<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

use Elementor\Core\Utils\Api\Error_Builder;
use Elementor\Core\Utils\Api\Response_Builder;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Font_Awesome_Pro;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Font_Awesome_Pro_Rest_Api {
	const API_NAMESPACE = 'elementor-pro/v1';

	const API_BASE = 'font-awesome-pro-icon';

	public function register_hooks() {
		add_action( 'rest_api_init', fn() => $this->register_routes() );
	}

	private function register_routes() {
		register_rest_route( self::API_NAMESPACE, '/' . self::API_BASE, [
			[
				'methods' => 'GET',
				'callback' => [ $this, 'get_icon' ],
				// No license check: saved icons keep rendering in the editor like they do on the frontend.
				'permission_callback' => static fn() => current_user_can( 'edit_posts' ),
				'args' => [
					'library' => [
						'type' => 'string',
						'required' => true,
					],
					'value' => [
						'type' => 'string',
						'required' => true,
					],
				],
			],
			[
				'methods' => 'POST',
				'callback' => [ $this, 'store_icon' ],
				// Stored geometry renders site-wide, so contributors, who can't publish, can't set it.
				'permission_callback' => static fn() => current_user_can( 'publish_posts' ) && Module::is_licensed(),
				'args' => [
					'library' => [
						'type' => 'string',
						'required' => true,
					],
					'value' => [
						'type' => 'string',
						'required' => true,
					],
					'width' => [
						'type' => 'integer',
						'required' => true,
					],
					'height' => [
						'type' => 'integer',
						'required' => true,
					],
					'paths' => [
						'type' => 'array',
						'required' => true,
						'items' => [ 'type' => 'string' ],
					],
				],
			],
		] );
	}

	public function get_icon( \WP_REST_Request $request ) {
		$html = Font_Awesome_Pro::has_kit_id()
			? Font_Awesome_Pro_Icons::resolve( [
				'library' => (string) $request->get_param( 'library' ),
				'value' => (string) $request->get_param( 'value' ),
			] )
			: '';

		return Response_Builder::make( [ 'html' => $html ] )->build();
	}

	public function store_icon( \WP_REST_Request $request ) {
		$result = Font_Awesome_Pro_Icons::store(
			(string) $request->get_param( 'library' ),
			(string) $request->get_param( 'value' ),
			(int) $request->get_param( 'width' ),
			(int) $request->get_param( 'height' ),
			(array) $request->get_param( 'paths' )
		);

		if ( is_wp_error( $result ) ) {
			return Error_Builder::make( $result->get_error_code() )
				->set_status( 400 )
				->set_message( $result->get_error_message() )
				->build();
		}

		return Response_Builder::make( [ 'stored' => true ] )->build();
	}
}
