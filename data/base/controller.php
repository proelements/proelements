<?php
namespace ElementorPro\Data\Base;

use Elementor\Data\Base\Controller as CoreController;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// TODO: Need to be removed after core fix those methods.
abstract class Controller extends CoreController {
	/**
	 * Creates multiple items.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|\WP_REST_Response Response object on success, or WP_Error object on failure.
	 */
	public function create_items( $request ) {
		return new \WP_Error( 'invalid-method', sprintf( "Method '%s' not implemented. Must be overridden in subclass.", __METHOD__ ), [ 'status' => 405 ] );
	}

	/**
	 * Updates multiple items.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|\WP_REST_Response Response object on success, or WP_Error object on failure.
	 */
	public function update_items( $request ) {
		return new \WP_Error( 'invalid-method', sprintf( "Method '%s' not implemented. Must be overridden in subclass.", __METHOD__ ), [ 'status' => 405 ] );
	}

	/**
	 * Delete multiple items.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|\WP_REST_Response Response object on success, or WP_Error object on failure.
	 */
	public function delete_items( $request ) {
		return new \WP_Error( 'invalid-method', sprintf( "Method '%s' not implemented. Must be overridden in subclass.", __METHOD__ ), [ 'status' => 405 ] );
	}
}
