<?php
namespace ElementorPro\Modules\LoopFilter\Data\Endpoints;

use ElementorPro\Modules\LoopFilter\Data\Interfaces\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Create a class that extends the Base Endpoint class.
// This class should handle fetching taxonomies from the database, it registers an endpoint that can be accessed via the REST API.
// The endpoint accepts a string argument of 'post_type' and returns an array of taxonomies for that post type.

class Get_Post_Type_Taxonomies extends Base implements Endpoint {

	public function get_name() : string {
		return 'get_post_type_taxonomies';
	}

	public function get_route() : string {
		return 'get-post-type-taxonomies';
	}

	private function permission_callback() {
		return current_user_can( 'edit_posts' );
	}

	public function get_items( \WP_REST_Request $request ): array {
		$data = $request->get_params();

		$post_type_taxonomies = get_object_taxonomies( sanitize_key( $data['post_type'] ), 'objects' );
		$taxonomies_to_exclude = $this->get_taxonomies_to_exclude( $data['post_type'] );

		$control_options = [];

		foreach ( $post_type_taxonomies as $taxonomy ) {
			if ( $this->should_exclude_taxonomy( $taxonomy->name, $taxonomies_to_exclude ) ) {
				continue;
			}

			$control_options[ $taxonomy->name ] = $taxonomy->label;
		}

		return $control_options;
	}

	private function get_taxonomies_to_exclude( $post_type ) {
		if ( 'post' === $post_type ) {
			return [ 'post_format' ];
		}

		return [];
	}

	private function should_exclude_taxonomy( $taxonomy_name, $taxonomies_to_exclude ) {
		return ! empty( $taxonomies_to_exclude ) && in_array( $taxonomy_name, $taxonomies_to_exclude );
	}

	protected function register() {
		register_rest_route( $this->controller->get_namespace(), $this->get_route(), [
			[
				'args' => [
					'post_type' => [
						'description' => 'The post type for which to fetch the list of taxonomies.',
						'type' => 'string',
						'required' => true,
						'validate_callback' => function ( $param ) {
							return ! empty( $param ) && is_string( $param );
						},
					],
				],
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'get_items' ],
				'permission_callback' => function ( $request ) {
					return $this->permission_callback( $request );
				},
			],
		] );
	}
}
