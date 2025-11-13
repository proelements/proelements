<?php
namespace ElementorPro\Modules\Notes\Data\Endpoints;

use Elementor\Data\V2\Base\Endpoint;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Modules\Notes\Database\Models\Note_Summary;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Summary_Endpoint extends Endpoint {
	public function get_name() {
		return 'summary';
	}

	public function get_format() {
		return 'notes/summary';
	}

	/**
	 * Register the endpoint routes.
	 *
	 * @return void
	 */
	protected function register() {
		$this->register_items_route(
			\WP_REST_Server::READABLE,
			$this->get_controller()->get_collection_params()
		);
	}

	/**
	 * Index route.
	 *
	 * GET `/notes/summary`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 */
	protected function get_items( $request ) {
		$user_id = get_current_user_id();

		$query = Note_Summary::query()
			->only_visible( $user_id )
			->only_visible_posts( $user_id );

		foreach ( $this->get_controller()->get_filters() as $param => $callback ) {
			if ( $request->has_param( $param ) ) {
				call_user_func( $callback, $query, $request->get_param( $param ) );
			}
		}

		return [
			'data' => $query->get(),
			'meta' => [],
		];
	}

	/**
	 * @inheritDoc
	 */
	public function get_permission_callback( $request ) {
		return current_user_can( Capabilities::READ_NOTES );
	}
}
