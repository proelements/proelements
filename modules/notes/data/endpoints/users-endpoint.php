<?php
namespace ElementorPro\Modules\Notes\Data\Endpoints;

use Elementor\Data\V2\Base\Endpoint;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Database\Query\User_Query_Builder;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Modules\Notes\Database\Transformers\User_Transformer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Users_Endpoint extends Endpoint {
	public function get_name() {
		return 'users';
	}

	public function get_format() {
		return 'notes/users';
	}

	/**
	 * Register the endpoint routes.
	 *
	 * @return void
	 */
	protected function register() {
		$this->register_items_route(
			\WP_REST_Server::READABLE,
			[
				'limit' => [
					'type' => 'integer',
					'description' => 'Limit the results.',
					'required' => false,
				],
				'order_by' => [
					'type' => 'string',
					'description' => 'A column to order the results by.',
					'required' => false,
					'default' => 'display_name',
					'enum' => [
						'user_nicename',
						'display_name',
						'user_registered',
					],
				],
				'order' => [
					'type' => 'string',
					'description' => 'Results order direction.',
					'required' => false,
					'default' => 'asc',
					'enum' => [
						'asc',
						'desc',
					],
				],
				'search' => [
					'type' => 'string',
					'description' => 'Filter users by a search term.',
					'required' => false,
					'sanitize_callback' => function ( $value ) {
						return wp_strip_all_tags( $value, true );
					},
				],
			]
		);
	}

	/**
	 * Index route.
	 *
	 * GET `/notes/users`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 */
	protected function get_items( $request ) {
		$users = User::query()
			->order_by(
				$request->get_param( 'order_by' ),
				$request->get_param( 'order' )
			);

		foreach ( $this->get_filters() as $param => $callback ) {
			if ( $request->has_param( $param ) ) {
				call_user_func( $callback, $users, $request->get_param( $param ) );
			}
		}

		$transformer = new User_Transformer();
		$transform_dependencies = [];

		if ( ! empty( $_GET['post_id'] ) ) {
			$transform_dependencies['post_id'] = (int) $_GET['post_id'];
		}

		return [
			'data' => $users->get()->map( function ( User $user ) use ( $transformer, $transform_dependencies ) {
				return $transformer->transform( $user, $transform_dependencies );
			} ),
			'meta' => [],
		];
	}

	/**
	 * @inheritDoc
	 */
	public function get_permission_callback( $request ) {
		return current_user_can( Capabilities::CREATE_NOTES );
	}

	/**
	 * Get the Users filters.
	 *
	 * @return array
	 */
	protected function get_filters() {
		return [
			'limit' => function ( User_Query_Builder $q, $limit ) {
				$q->limit( $limit );
			},
			'search' => function ( User_Query_Builder $q, $search ) {
				$q->where( 'user_nicename', 'LIKE', '%' . $search . '%' )
					->or_where( 'user_email', 'LIKE', '%' . $search . '%' )
					->or_where( 'display_name', 'LIKE', '%' . $search . '%' );
			},
		];
	}
}
