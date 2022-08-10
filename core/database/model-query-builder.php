<?php
namespace ElementorPro\Core\Database;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Model_Query_Builder extends Query_Builder {
	/**
	 * The Query Builder associated model.
	 *
	 * @var string
	 */
	public $model;

	/**
	 * Whether the returned value should be hydrated into a model.
	 *
	 * @var bool
	 */
	public $return_as_model = true;

	/**
	 * Model_Query_Builder constructor.
	 *
	 * @param string $model_classname - Model to use inside the builder.
	 * @param \wpdb|null $connection - MySQL connection.
	 */
	public function __construct( $model_classname, \wpdb $connection = null ) {
		$this->set_model( $model_classname );

		parent::__construct( $connection );
	}

	/**
	 * Set the model the generated from the query builder.
	 *
	 * @param $model_classname
	 *
	 * @return $this
	 */
	public function set_model( $model_classname ) {
		$this->model = $model_classname;

		return $this;
	}

	/**
	 * Disable model hydration.
	 *
	 * @return $this
	 */
	public function disable_model_initiation() {
		$this->return_as_model = false;

		return $this;
	}

	/**
	 * Disable hydration before calling the original count.
	 *
	 * @param string $column
	 *
	 * @return int
	 */
	public function count( $column = '*' ) {
		$this->disable_model_initiation();

		return parent::count( $column );
	}

	/**
	 * Disable hydration before calling the original pluck.
	 *
	 * @inheritDoc
	 */
	public function pluck( $column = null ) {
		$this->disable_model_initiation();

		return parent::pluck( $column );
	}

	/**
	 * Override the parent `get()` and make Models from the results.
	 *
	 * @return \ElementorPro\Core\Utils\Collection
	 */
	public function get() {
		$items = parent::get();

		if ( ! $this->return_as_model ) {
			return $items;
		}

		// Convert the SQL results to Model instances.
		return $items->map( function ( $comment ) {
			return new $this->model( $comment );
		} );
	}
}
