<?php

namespace ElementorPro\Core\Database;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * JOIN clause builder.
 *
 * Essentially, it uses the regular Builder's capabilities while wrapping some method
 * for syntactic sugar and better readability.
 */
class Join_Clause extends Query_Builder {

	// JOIN types.
	const TYPE_INNER = 'inner';
	const TYPE_LEFT = 'left';
	const TYPE_RIGHT = 'right';

	/**
	 * JOIN type.
	 *
	 * @var string
	 */
	public $type;

	/**
	 * Join_Clause constructor.
	 *
	 * @param string $type - JOIN type.
	 * @param \wpdb|null $connection - MySQL connection to use.
	 *
	 * @return void
	 */
	public function __construct( $type, \wpdb $connection = null ) {
		parent::__construct( $connection );

		$this->type = $type;
	}

	/**
	 * @uses `$this->where()`.
	 *
	 * @return Join_Clause
	 */
	public function on( $column, $operator, $value, $and_or = self::RELATION_AND ) {
		return $this->where( $column, $operator, $value, $and_or );
	}

	/**
	 * @shortcut `$this->on()`.
	 *
	 * @return Join_Clause
	 */
	public function or_on( $first, $operator, $second ) {
		return $this->on( $first, $operator, $second, self::RELATION_OR );
	}

	/**
	 * @uses `$this->where_column()`.
	 *
	 * @return Join_Clause
	 */
	public function on_column( $first, $operator, $second, $and_or = self::RELATION_AND ) {
		return $this->where_column( $first, $operator, $second, $and_or );
	}

	/**
	 * @shortcut `$this->on_column()`.
	 *
	 * @return Join_Clause
	 */
	public function or_on_column( $first, $operator, $second ) {
		return $this->on_column( $first, $operator, $second, self::RELATION_OR );
	}
}
