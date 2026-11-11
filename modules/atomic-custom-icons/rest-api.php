<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

use Elementor\Core\Utils\Api\Error_Builder;
use Elementor\Core\Utils\Api\Response_Builder;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Rest_Api {
	const API_NAMESPACE = 'elementor-pro/v1';

	const API_BASE = 'custom-icon-svg';

	public function register_hooks() {
		add_action( 'rest_api_init', fn() => $this->register_routes() );
	}

	private function register_routes() {
		register_rest_route( self::API_NAMESPACE, '/' . self::API_BASE, [
			[
				'methods' => 'GET',
				'callback' => [ $this, 'get_svg' ],
				'permission_callback' => static function ( \WP_REST_Request $request ) {
					if ( ! current_user_can( 'edit_posts' ) ) {
						return false;
					}

					// Rendering a saved icon never depends on the license; only browsing a whole library does.
					$value = $request->get_param( 'value' );

					return Module::is_licensed() || ( is_string( $value ) && '' !== $value );
				},
				'args' => [
					'library' => [
						'type' => 'string',
						'required' => true,
						'sanitize_callback' => static function ( $value ) {
							return is_scalar( $value ) ? (string) $value : '';
						},
					],
					'offset' => [
						'type' => 'integer',
						'required' => false,
						'minimum' => 0,
					],
					'limit' => [
						'type' => 'integer',
						'required' => false,
						'minimum' => 1,
						'maximum' => Resolver::MAX_LIBRARY_ICONS,
					],
					'value' => [
						'type' => 'string',
						'required' => false,
						'sanitize_callback' => static function ( $value ) {
							return is_scalar( $value ) ? (string) $value : '';
						},
					],
				],
			],
		] );
	}

	public function get_svg( \WP_REST_Request $request ) {
		$library = (string) $request->get_param( 'library' );
		$value = $request->get_param( 'value' );

		if ( '' === $library ) {
			return Error_Builder::make( 'invalid_library' )
				->set_status( 400 )
				->set_message( __( 'The "library" parameter is required.', 'elementor-pro' ) )
				->build();
		}

		if ( is_string( $value ) && '' !== $value ) {
			return Response_Builder::make( [
				'html' => Resolver::resolve( [
					'library' => $library,
					'value' => $value,
				] ),
			] )->build();
		}

		$limit = (int) $request->get_param( 'limit' );

		return Response_Builder::make(
			Resolver::resolve_library_response(
				$library,
				(int) $request->get_param( 'offset' ),
				$limit > 0 ? $limit : Resolver::MAX_LIBRARY_ICONS
			)
		)->build();
	}
}
