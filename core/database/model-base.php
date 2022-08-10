<?php
namespace ElementorPro\Core\Database;

use ElementorPro\Core\Utils\Collection;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Model_Base implements \JsonSerializable {

	// Casting types.
	const TYPE_BOOLEAN = 'boolean';
	const TYPE_COLLECTION = 'collection';
	const TYPE_INTEGER = 'integer';
	const TYPE_STRING = 'string';
	const TYPE_JSON = 'json';
	const TYPE_DATETIME = 'datetime';
	const TYPE_DATETIME_GMT = 'datetime_gmt';

	/**
	 * Casts array.
	 * Used to automatically cast values from DB to the appropriate property type.
	 *
	 * @var array
	 */
	protected static $casts = [];

	/**
	 * Model_Base constructor.
	 *
	 * @param array $fields - Fields from the DB to fill.
	 *
	 * @return void
	 */
	public function __construct( array $fields ) {
		foreach ( $fields as $key => $value ) {
			if ( ! property_exists( $this, $key ) ) {
				continue;
			}

			$this->{$key} = ( empty( static::$casts[ $key ] ) )
				? $value
				: static::cast( $value, static::$casts[ $key ] );
		}
	}

	/**
	 * Get the model's table name.
	 * Throws an exception by default in order to require implementation,
	 * since abstract static functions are not allowed.
	 *
	 * @return string
	 */
	public static function get_table() {
		throw new \Exception( 'You must implement `get_table()` inside ' . static::class );
	}

	/**
	 * Create a Query Builder for the model's table.
	 *
	 * @param \wpdb|null $connection - MySQL connection to use.
	 *
	 * @return Query_Builder
	 */
	public static function query( \wpdb $connection = null ) {
		$builder = new Model_Query_Builder( static::class, $connection );

		return $builder->from( static::get_table() );
	}

	/**
	 * Cast value into specific type.
	 *
	 * @param $value - Value to cast.
	 * @param $type - Type to cast into.
	 *
	 * @return mixed
	 */
	protected static function cast( $value, $type ) {
		if ( null === $value ) {
			return null;
		}

		switch ( $type ) {
			case self::TYPE_BOOLEAN:
				return boolval( $value );

			case self::TYPE_COLLECTION:
				return new Collection( $value );

			case self::TYPE_INTEGER:
				return intval( $value );

			case self::TYPE_STRING:
				return strval( $value );

			case self::TYPE_JSON:
				return json_decode( $value, true );

			case self::TYPE_DATETIME:
				return new \DateTime( $value );

			case self::TYPE_DATETIME_GMT:
				return new \DateTime( $value, new \DateTimeZone( 'GMT' ) );
		}

		return $value;
	}

	/**
	 * Cast a model property value into a JSON compatible data type.
	 *
	 * @param $value - Value to cast.
	 * @param $type - Type to cast into.
	 * @param $property_name - The model property name.
	 *
	 * @return mixed
	 */
	protected static function json_serialize_property( $value, $type, $property_name ) {
		switch ( $type ) {
			case self::TYPE_DATETIME:
			case self::TYPE_DATETIME_GMT:
				/** @var \DateTime $value */
				return $value->format( 'c' );
		}

		/** @var mixed $value */
		return $value;
	}

	/**
	 * @return array
	 */
	public function jsonSerialize() {
		return ( new Collection( (array) $this ) )
			->map( function ( $_, $key ) {
				$value = $this->{$key};

				$type = array_key_exists( $key, static::$casts )
					? static::$casts[ $key ]
					: null;

				if ( null === $value ) {
					return $value;
				}

				// Can be overridden by child model.
				$value = static::json_serialize_property( $value, $type, $key );

				if ( $value instanceof \JsonSerializable ) {
					return $value->jsonSerialize();
				}

				return $value;
			} )
			->all();
	}
}
