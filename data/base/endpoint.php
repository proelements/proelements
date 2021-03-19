<?php
namespace ElementorPro\Data\Base;

use Elementor\Data\Base\Endpoint as CoreEndpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// TODO: Need to be removed after core fix those methods.
abstract class Endpoint extends CoreEndpoint {
	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function create_items( $request ) {
		return $this->controller->create_items( $request );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function update_items( $request ) {
		return $this->controller->update_items( $request );
	}

	/**
	 * @param string           $id
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_item( $id, $request ) {
		return $this->controller->delete_item( $request );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_items( $request ) {
		return $this->controller->delete_items( $request );
	}
}
