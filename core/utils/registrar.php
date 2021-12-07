<?php

namespace ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Basic items registrar.
 *
 * TODO: Move to Core.
 */
class Registrar {

	/**
	 * @var array
	 */
	private $items;

	/**
	 * Registrar constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->items = [];
	}

	/**
	 * Register a new item.
	 *
	 * @param           $instance - Item instance.
	 * @param string    $id - Optional - For BC - Deprecated.
	 *
	 * @return boolean - Whether the item was registered.
	 */
	public function register( $instance, $id = null ) {
		// TODO: For BC. Remove in the future.
		if ( ! $id ) {
			// Get the ID or default to the class name.
			$id = ( method_exists( $instance, 'get_id' ) ) ? $instance->get_id() : get_class( $instance );
		}

		if ( $this->get( $id ) ) {
			return false;
		}

		$this->items[ $id ] = $instance;

		return true;
	}

	/**
	 * Get an item by ID.
	 *
	 * @param string $id
	 *
	 * @return array|null
	 */
	public function get( $id = null ) {
		if ( ! $id ) {
			return $this->items;
		}

		return isset( $this->items[ $id ] ) ? $this->items[ $id ] : null;
	}
}
