<?php
namespace ElementorPro\Core\Utils;

use \Elementor\Core\Utils\Collection as Collection_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// TODO: Move to Core.
class Collection extends Collection_Base implements \JsonSerializable {

	/**
	 * Change the items key by an item field.
	 *
	 * @param string $key
	 *
	 * @return Collection
	 */
	public function key_by( $key ) {
		return $this->map_with_keys( function ( $item ) use ( $key ) {
			return [ $item->{$key} => $item ];
		} );
	}

	/**
	 * Flatten the items recursively.
	 *
	 * @return array
	 */
	public function flatten_recursive() {
		$output = [];
		$items = $this->all();

		array_walk_recursive($items, function( $item ) use ( &$output ) {
			$output[] = $item;
		} );

		return $output;
	}

	/**
	 * Run array_diff between the collection and other array or collection.
	 *
	 * @param $filter
	 *
	 * @return $this
	 */
	public function diff( $filter ) {
		if ( $filter instanceof Collection_Base ) {
			$filter = $filter->all();
		}

		return new static( array_diff( $this->all(), $filter ) );
	}

	/**
	 * Reverse the array
	 *
	 * @param false $preserve_keys
	 *
	 * @return $this
	 */
	public function reverse( $preserve_keys = false ) {
		return new static(
			array_reverse( $this->all(), $preserve_keys )
		);
	}

	/**
	 * Return a JSON serialized representation of the Collection.
	 *
	 * @return array
	 */
	public function jsonSerialize() {
		return $this->all();
	}
}
