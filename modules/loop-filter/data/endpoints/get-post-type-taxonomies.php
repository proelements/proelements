<?php
namespace ElementorPro\Modules\LoopFilter\Data\Endpoints;

use ElementorPro\Modules\LoopFilter\Data\Interfaces\Endpoint;
use ElementorPro\Modules\LoopFilter\Traits\Taxonomy_Filter_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Create a class that extends the Base Endpoint class.
// This class should handle fetching taxonomies from the database, it registers an endpoint that can be accessed via the REST API.
// The endpoint accepts a string argument of 'post_type' and returns an array of taxonomies for that post type.

class Get_Post_Type_Taxonomies extends Base implements Endpoint {

	use Taxonomy_Filter_Trait;

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

		return $this->get_taxonomy_options( [ $data['post_type'] ] );
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
