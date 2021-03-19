<?php
namespace ElementorPro\Core\Utils;

use Elementor\Core\Utils\Collection as BaseCollection;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Collection extends BaseCollection {
	/**
	 * Get specific item from the collection.
	 *
	 * @param      $key
	 * @param null $default
	 *
	 * @return mixed|null
	 */
	public function get( $key, $default = null ) {
		if ( ! array_key_exists( $key, $this->items ) ) {
			return $default;
		}

		return $this->items[ $key ];
	}

	/**
	 * Run over the collection to get specific prop from the collection item.
	 *
	 * @param $key
	 *
	 * @return $this
	 */
	public function pluck( $key ) {
		$result = [];

		foreach ( $this->items as $value ) {
			if ( is_object( $value ) && isset( $value->{$key} ) ) {
				$result[] = $value->{$key};
			} elseif ( is_array( $value ) && isset( $value[ $key ] ) ) {
				$result[] = $value[ $key ];
			}
		}

		return new static( $result );
	}

	/**
	 * Group the collection items by specific key in each collection item.
	 *
	 * @param $group_by
	 *
	 * @return $this
	 */
	public function group_by( $group_by ) {
		$result = [];

		foreach ( $this->items as $value ) {
			$group_key = 0;

			if ( is_object( $value ) && isset( $value->{$group_by} ) ) {
				$group_key = $value->{$group_by};
			} elseif ( is_array( $value ) && isset( $value[ $group_by ] ) ) {
				$group_key = $value[ $group_by ];
			}

			$result[ $group_key ][] = $value;
		}

		return new static( $result );
	}

	/**
	 * @return $this
	 */
	public function unique() {
		return new static(
			array_unique( $this->items )
		);
	}

	/**
	 * @param null $default
	 *
	 * @return mixed|null
	 */
	public function first( $default = null ) {
		if ( $this->is_empty() ) {
			return $default;
		}

		foreach ( $this->items as $item ) {
			return $item;
		}
	}

	/**
	 * @return array
	 */
	public function values() {
		return array_values( $this->all() );
	}
}
