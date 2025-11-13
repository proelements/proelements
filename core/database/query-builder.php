<?php

namespace ElementorPro\Core\Database;

use ElementorPro\Core\Utils\Collection;
use InvalidArgumentException;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Query_Builder {

	// Relation types.
	const RELATION_AND = 'AND';
	const RELATION_OR = 'OR';

	// Column types.
	const COLUMN_BASIC = 'basic'; // Regular column - will be automatically escaped.
	const COLUMN_RAW = 'raw'; // Raw column - SHOULD BE ESCAPED BY THE DEVELOPER.
	const COLUMN_SUB_SELECT = 'sub-select'; // Sub select - will be automatically bind & escaped.
	const COLUMN_COUNT = 'count'; // Count - wrap the column with a COUNT function.

	// WHERE types.
	const WHERE_BASIC = 'basic';
	const WHERE_NULL = 'null';
	const WHERE_COLUMN = 'column';
	const WHERE_IN = 'in';
	const WHERE_NOT_IN = 'not-in';
	const WHERE_SUB = 'sub';
	const WHERE_NESTED = 'nested';
	const WHERE_EXISTS = 'exists';
	const WHERE_NOT_EXISTS = 'not-exists';

	// HAVING types.
	const HAVING_RAW = 'raw';

	/**
	 * MySQL connection.
	 *
	 * @var \wpdb
	 */
	protected $connection;

	/**
	 * Current query value binding.
	 *
	 * @var array[]
	 */
	protected $bindings = [
		'select' => [],
		'join' => [],
		'where' => [],
	];

	/**
	 * Current query columns to return.
	 *
	 * @var array
	 */
	protected $columns = [
		[
			'type' => self::COLUMN_RAW,
			'column' => '*',
			'as' => null,
		],
	];

	/**
	 * Table to select from.
	 *
	 * @var array
	 */
	protected $from = [];

	/**
	 * Current query joins.
	 *
	 * @var array
	 */
	protected $joins = [];

	/**
	 * The where constraints for the query.
	 *
	 * @var array
	 */
	protected $wheres = [];

	/**
	 * The having constraints for the query.
	 *
	 * @var array
	 */
	protected $havings = [];

	/**
	 * The groupings for the query.
	 *
	 * @var array
	 */
	protected $groups = [];

	/**
	 * The orderings for the query.
	 *
	 * @var array
	 */
	protected $orders = [];

	/**
	 * The maximum number of records to return.
	 *
	 * @var int
	 */
	protected $limit;

	/**
	 * The number of records to skip.
	 *
	 * @var int
	 */
	protected $offset;

	/**
	 * Aggregations.
	 *
	 * @var array
	 */
	protected $with = [];

	/**
	 * Query_Builder constructor.
	 *
	 * @param \wpdb|null $connection - The Mysql connection instance to use.
	 */
	public function __construct( \wpdb $connection = null ) {
		if ( $connection ) {
			$this->connection = $connection;
			return;
		}

		global $wpdb;

		$this->connection = $wpdb;
	}

	/**
	 * Add columns to the SELECT clause.
	 *
	 * @param string[] $columns - Array of column names.
	 * @param string $type - Select type.
	 *
	 * @return $this
	 */
	public function select( $columns = [ '*' ], $type = self::COLUMN_BASIC ) {
		$this->columns = [];
		$this->bindings['select'] = [];

		foreach ( $columns as $as => $column ) {
			$this->columns[ $as ] = [
				'type' => $type,
				'as' => is_string( $as ) ? $as : null,
				'column' => $column,
			];
		}

		return $this;
	}

	/**
	 * @shortcut `$this->select()`.
	 */
	public function select_raw( $raw_columns = [ '*' ] ) {
		return $this->select( $raw_columns, self::COLUMN_RAW );
	}

	/**
	 * Add a `(SELECT ...) AS alias` statement to the SELECT clause.
	 *
	 * @param callable $callback - Callback that gets a `Query_Builder` and modifies it.
	 * @param string $as - Alias for the sub select.
	 *
	 * @return $this
	 */
	public function add_sub_select( callable $callback, $as ) {
		call_user_func( $callback, $query = $this->new_query() );

		$this->add_binding( $query->get_bindings(), 'select' );

		$this->columns[] = [
			'type' => self::COLUMN_SUB_SELECT,
			'column' => $query->to_sql(),
			'as' => $as,
		];

		return $this;
	}

	/**
	 * Add a `COUNT({col}) AS {alias}` statement to the SELECT clause.
	 *
	 * @param $column_name
	 * @param $as
	 *
	 * @return $this
	 */
	public function add_count_select( $column_name, $as = null ) {
		$this->columns[] = [
			'type' => self::COLUMN_COUNT,
			'column' => $column_name,
			'as' => $as,
		];

		return $this;
	}

	/**
	 * Set the table to select from.
	 *
	 * @param string $table - Table name.
	 * @param string|null $as - Table alias.
	 *
	 * @return $this
	 */
	public function from( $table, $as = null ) {
		// Default the alias to the table name without prefix.
		$as = $as ? $as : $table;

		// Get the prefixed table name from the connection.
		$table = $this->connection->$table;

		$this->from = [
			'table' => $table,
			'as' => $as,
		];

		return $this;
	}

	/**
	 * @shortcut $this->from()
	 *
	 * Used for readability with UPDATE / INSERT / DELETE statements.
	 */
	public function table( $table, $as = null ) {
		return $this->from( $table, $as );
	}

	/**
	 * Execute a query operation only on specific condition.
	 * For example:
	 *
	 * $query->when( 1 === $a, function( Query_Builder $builder ) {
	 *      // Runs if $a = 1.
	 *      $builder->where( ... );
	 * }, function( Query_Builder $builder ) {
	 *      // Runs if $a != 1.
	 *      $builder->where( ... );
	 * } )
	 *
	 * @param mixed $condition - Condition to check.
	 * @param callable $true_callback - Callback if the condition is truthy.
	 * @param callable|null $false_callback - Callback if the condition is falsy. Optional.
	 *
	 * @return $this
	 */
	public function when( $condition, callable $true_callback, callable $false_callback = null ) {
		if ( $condition ) {
			call_user_func( $true_callback, $this, $condition );
		} elseif ( $false_callback instanceof \Closure ) {
			call_user_func( $false_callback, $this, $condition );
		}

		return $this;
	}

	/**
	 * Add a `WHERE` statement.
	 *
	 * @param string|callable $column - Column name to check.
	 * @param string $operator - Statement operator.
	 * @param string|callable $value - Value as string or callback.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 *
	 * @return $this
	 */
	public function where( $column, $operator = null, $value = null, $and_or = self::RELATION_AND ) {
		// `$column` is a function, create a nested where.
		if ( $column instanceof \Closure ) {
			return $this->where_nested( $column, $and_or );
		}

		// `$value` is a function, create a sub select.
		if ( $value instanceof \Closure ) {
			return $this->where_sub( $column, $operator, $value, $and_or );
		}

		// Validate relation.
		if ( ! in_array( strtoupper( $and_or ), [ self::RELATION_AND, self::RELATION_OR ], true ) ) {
			throw new InvalidArgumentException( 'Relation must be "and" or "or".' );
		}

		// If it's a `LIKE` statement, escape it using WP's `esc_like`.
		if ( 'like' === strtolower( $operator ) ) {
			$value = $this->escape_like( $value );
		}

		// Create an `IS NULL` statement if the `$value` is null.
		if ( null === $value ) {
			$type = self::WHERE_NULL;
		} else {
			$this->add_binding( $value, 'where' );
			$type = self::WHERE_BASIC;
		}

		$this->wheres[] = [
			'type' => $type,
			'column' => $column,
			'operator' => $operator,
			'value' => $value,
			'and_or' => $and_or,
		];

		return $this;
	}

	/**
	 * Add an `OR WHERE` statement.
	 *
	 * @shortcut $this->where().
	 */
	public function or_where( $column, $operator = null, $value = null ) {
		return $this->where( $column, $operator, $value, self::RELATION_OR );
	}

	/**
	 * @shortcut `$this->where()`.
	 */
	public function where_null( $column, $and_or = self::RELATION_AND ) {
		return $this->where( $column, '=', null );
	}

	/**
	 * @shortcut `$this->where_null()`.
	 */
	public function or_where_null( $column ) {
		return $this->where_null( $column, self::RELATION_OR );
	}

	/**
	 * Add a `WHERE col1 = col2` statement.
	 *
	 * @param string $first - First column name to check.
	 * @param string $operator - Statement operator.
	 * @param string $second - Second column name to check.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 *
	 * @return $this
	 */
	public function where_column( $first, $operator, $second, $and_or = self::RELATION_AND ) {
		// Validate relation.
		if ( ! in_array( strtoupper( $and_or ), [ self::RELATION_AND, self::RELATION_OR ], true ) ) {
			throw new InvalidArgumentException( 'Relation must be "and" or "or".' );
		}

		$this->wheres[] = [
			'type' => self::WHERE_COLUMN,
			'first' => $first,
			'second' => $second,
			'operator' => $operator,
			'and_or' => $and_or,
		];

		return $this;
	}

	/**
	 * Add an `OR WHERE col1 = col2` statement.
	 *
	 * @shortcut $this->where_column().
	 */
	public function or_where_column( $first, $operator, $second ) {
		return $this->where_column( $first, $operator, $second, self::RELATION_OR );
	}

	/**
	 * Add a `WHERE IN()` statement.
	 *
	 * @param string $column - Column name to check.
	 * @param string[]|callable $values - Array of values.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 * @param boolean $in - Whether it's `IN` or `NOT IN`.
	 *
	 * @return $this
	 */
	public function where_in( $column, $values, $and_or = self::RELATION_AND, $in = true ) {
		$type = $in ? self::WHERE_IN : self::WHERE_NOT_IN;

		// Support `WHERE IN ( SELECT ... FROM )`.
		if ( $values instanceof \Closure ) {
			$operator = $in ? 'IN' : 'NOT IN';

			return $this->where( $column, $operator, $values );
		}

		$this->wheres[] = [
			'type' => $type,
			'column' => $column,
			'value' => $values,
			'and_or' => $and_or,
		];

		$this->add_binding( $values, 'where' );

		return $this;
	}

	/**
	 * Add an `OR WHERE IN()` statement.
	 *
	 * @shortcut $this->where_in().
	 */
	public function or_where_in( $column, $values ) {
		return $this->where_in( $column, $values, self::RELATION_OR );
	}

	/**
	 * Add a `WHERE NOT IN()` statement.
	 *
	 * @shortcut $this->where_in().
	 */
	public function where_not_in( $column, $values, $and_or = self::RELATION_AND ) {
		return $this->where_in( $column, $values, $and_or, false );
	}

	/**
	 * Add an `OR WHERE NOT IN()` statement.
	 *
	 * @shortcut $this->where_in().
	 */
	public function or_where_not_in( $column, $values ) {
		return $this->where_not_in( $column, $values, self::RELATION_OR );
	}

	/**
	 * Add a `WHERE EXISTS()` statement.
	 *
	 * @param callable $callback - Callback that gets a `Query_Builder` and modifies it.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 * @param bool $exists - Whether to use `EXISTS` or `NOT EXISTS` statement.
	 *
	 * @return $this
	 */
	public function where_exists( callable $callback, $and_or = self::RELATION_AND, $exists = true ) {
		call_user_func( $callback, $query = $this->new_query() );

		$type = $exists ? self::WHERE_EXISTS : self::WHERE_NOT_EXISTS;

		$this->wheres[] = [
			'type' => $type,
			'query' => $query,
			'and_or' => $and_or,
		];

		$this->add_binding( $query->get_bindings(), 'where' );

		return $this;
	}

	/**
	 * Add an `OR WHERE EXISTS()` statement.
	 *
	 * @shortcut $this->where_exists().
	 */
	public function or_where_exists( callable $callback, $exists = true ) {
		return $this->where_exists( $callback, self::RELATION_OR, $exists );
	}

	/**
	 * Add a `WHERE NOT EXISTS()` statement.
	 *
	 * @shortcut $this->where_exists().
	 */
	public function where_not_exists( callable $callback, $and_or = self::RELATION_AND ) {
		return $this->where_exists( $callback, $and_or, false );
	}

	/**
	 * Add an `OR WHERE NOT EXISTS()` statement.
	 *
	 * @shortcut $this->where_exists().
	 */
	public function or_where_not_exists( callable $callback ) {
		return $this->or_where_exists( $callback, false );
	}

	/**
	 * Add a sub query.
	 *
	 * @param string $column - Column name to check.
	 * @param string $operator - Statement operator.
	 * @param callable $callback - Callback that gets a `Query_Builder` and modifies it.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 *
	 * @return $this
	 */
	public function where_sub( $column, $operator, callable $callback, $and_or = self::RELATION_AND ) {
		call_user_func( $callback, $query = $this->new_query() );

		$this->wheres[] = [
			'type' => self::WHERE_SUB,
			'column' => $column,
			'operator' => $operator,
			'query' => $query,
			'and_or' => $and_or,
		];

		$this->add_binding( $query->get_bindings(), 'where' );

		return $this;
	}

	/**
	 * Add a nested `WHERE` query.
	 *
	 * @param callable $callback - Callback that gets a `Query_Builder` and modifies it.
	 * @param string   $and_or - Boolean relation, one of `and` / `or`.
	 *
	 * @return $this
	 */
	public function where_nested( callable $callback, $and_or = self::RELATION_AND ) {
		call_user_func( $callback, $query = $this->new_query() );

		$this->wheres[] = [
			'type' => self::WHERE_NESTED,
			'query' => $query,
			'and_or' => $and_or,
		];

		$this->add_binding( $query->get_bindings( 'where' ), 'where' );

		return $this;
	}

	/**
	 * Add `HAVING` statement.
	 *
	 * @param string $sql - RAW SQL having clause.
	 * @param string $and_or - Boolean relation, one of `and` / `or`.
	 *
	 * @return $this
	 */
	public function having_raw( $sql, $and_or = self::RELATION_AND ) {
		$this->havings[] = [
			'type' => self::HAVING_RAW,
			'and_or' => $and_or,
			'sql' => $sql,
		];

		return $this;
	}

	/**
	 * Add `OR HAVING` statement.
	 *
	 * @param string $sql - RAW SQL having clause.
	 *
	 * @return $this
	 */
	public function or_having_raw( $sql ) {
		return $this->having_raw( $sql, self::RELATION_OR );
	}

	/**
	 * Add a `JOIN ... ON` statement.
	 *
	 * @param callable $callback - Closure that builds the JOIN clause.
	 * @param string $type - JOIN type.
	 *
	 * @return $this
	 */
	public function join( callable $callback, $type = Join_Clause::TYPE_INNER ) {
		// Validate type.
		if ( ! in_array( strtolower( $type ), [ Join_Clause::TYPE_INNER, Join_Clause::TYPE_LEFT, Join_Clause::TYPE_RIGHT ], true ) ) {
			throw new InvalidArgumentException( 'Join type must be "inner", "left" or "right".' );
		}

		call_user_func( $callback, $join = $this->new_join_clause( $type ) );

		$this->add_binding( $join->get_bindings(), 'join' );
		$this->joins[] = $join;

		return $this;
	}

	/**
	 * @shortcut `$this->join()`
	 */
	public function left_join( callable $callback ) {
		return $this->join( $callback, Join_Clause::TYPE_LEFT );
	}

	/**
	 * @shortcut `$this->join()`
	 */
	public function right_join( callable $callback ) {
		return $this->join( $callback, Join_Clause::TYPE_RIGHT );
	}

	/**
	 * Creates a new Query Builder instance using the same connection as the initiator.
	 *
	 * @return self
	 */
	public function new_query() {
		// Make sure this is `new self` and not `new static`.
		// When extending the Query Builder, sometimes it comes with default table or queries.
		// For that reason it should be avoided passing those defaults to `nested` or `sub-queries`.
		return new self( $this->connection );
	}

	/**
	 * Creates a new Join Clause instance using the same connection as the initiator.
	 *
	 * @param string $type - JOIN type.
	 *
	 * @return Join_Clause
	 */
	public function new_join_clause( $type ) {
		return new Join_Clause( $type, $this->connection );
	}

	/**
	 * Limit the returned results.
	 * Adds a `LIMIT` statement.
	 *
	 * @param int $limit - Max count of results to return.
	 *
	 * @return $this
	 */
	public function limit( $limit ) {
		$this->limit = (int) $limit;

		return $this;
	}

	/**
	 * Add and `OFFSET` statement.
	 *
	 * @param int $offset - Count of results to skip.
	 *
	 * @return $this
	 */
	public function offset( $offset ) {
		$this->offset = (int) $offset;

		return $this;
	}

	/**
	 * Adds an `ORDER BY` statement.
	 * NOTE: `$column` IS NOT ESCAPED & SHOULD BE WHITELISTED!
	 *
	 * @param string $column - Column to order by.
	 * @param string $direction - Direction (`asc` / `desc`).
	 *
	 * @return $this
	 */
	public function order_by( $column, $direction = 'asc' ) {
		if ( ! in_array( strtolower( $direction ), [ 'asc', 'desc' ], true ) ) {
			throw new InvalidArgumentException( 'Order direction must be "asc" or "desc".' );
		}

		$this->orders[] = [
			'column' => $column,
			'direction' => $direction,
		];

		return $this;
	}

	/**
	 * Adds a `GROUP BY` statement.
	 * NOTE: `$column` IS NOT ESCAPED & SHOULD BE WHITELISTED!
	 *
	 * @param string $column - Column to group by.
	 *
	 * @return $this
	 */
	public function group_by( $column ) {
		$this->groups[] = [
			'column' => $column,
		];

		return $this;
	}

	/**
	 * Get the raw bindings array.
	 *
	 * @return array[]
	 */
	public function get_raw_bindings() {
		return $this->bindings;
	}

	/**
	 * Get the columns to use inside the SELECT statement.
	 * Defaults to `*` if non are selected.
	 *
	 * @return string
	 */
	public function compile_columns() {
		if ( 0 === count( $this->columns ) ) {
			return '*';
		};

		$columns = [];

		foreach ( $this->columns as $column ) {
			switch ( $column['type'] ) {
				case self::COLUMN_BASIC:
					$column_name = $this->parse_column( $column['column'] );
					$as = $this->parse_as( $column['as'] );

					$columns[] = "{$column_name}{$as}";
					break;

				case self::COLUMN_SUB_SELECT:
					$as = $this->parse_as( $column['as'] );

					$columns[] = "( {$column['column']} ){$as}";
					break;

				case self::COLUMN_RAW:
					$columns[] = $column['column'];
					break;

				case self::COLUMN_COUNT:
					$column_name = $this->parse_column( $column['column'] );
					$as = $this->parse_as( $column['as'] );

					$columns[] = "COUNT({$column_name}){$as}";
					break;
			}
		}

		return $this->concatenate( $columns, ', ' );
	}

	/**
	 * Get the raw columns array.
	 *
	 * @return string[]
	 */
	public function get_raw_columns() {
		return $this->columns;
	}

	/**
	 * Compile the `columns` & `from` attributes into an actual `SELECT` statement.
	 *
	 * @return string
	 */
	public function compile_select() {
		return $this->concatenate( [
			'SELECT',
			$this->compile_columns(),
			'FROM',
			$this->compile_from(),
		] );
	}

	/**
	 * Compile the table name and alias.
	 *
	 * @return string
	 */
	public function compile_from() {
		$table = $this->wrap_with_backticks( $this->from['table'] );
		$as = $this->parse_as( $this->from['as'] );

		return "{$table}{$as}";
	}

	/**
	 * Compile the `joins` array into an actual `JOIN` statement.
	 *
	 * @return string
	 */
	public function compile_joins() {
		$joins = [];

		foreach ( $this->joins as $join ) {
			/**
			 * @var Join_Clause $join
			 */

			$table = $join->compile_from();
			$ons = $join->compile_wheres();

			switch ( $join->type ) {
				case Join_Clause::TYPE_INNER:
					$joins[] = "INNER JOIN {$table} ON {$ons}";
					break;

				case Join_Clause::TYPE_LEFT:
					$joins[] = "LEFT JOIN {$table} ON {$ons}";
					break;

				case Join_Clause::TYPE_RIGHT:
					$joins[] = "RIGHT JOIN {$table} ON {$ons}";
					break;
			}
		}

		return $this->concatenate( $joins );
	}

	/**
	 * Compile the `wheres` array into an actual `WHERE` statement.
	 *
	 * @return string
	 */
	public function compile_wheres() {
		$wheres = [
			'1 = 1', // A default statement for easier `WHERE` concatenation.
		];

		foreach ( $this->wheres as $where ) {
			switch ( $where['type'] ) {
				case self::WHERE_BASIC:
					$column = $this->parse_column( $where['column'] );
					$binding = $this->get_binding_type( $where['value'] );

					$wheres[] = "{$where['and_or']} {$column} {$where['operator']} {$binding}";
					break;

				case self::WHERE_NULL:
					$column = $this->parse_column( $where['column'] );

					$wheres[] = "{$where['and_or']} {$column} IS NULL";
					break;

				case self::WHERE_COLUMN:
					$first = $this->parse_column( $where['first'] );
					$second = $this->parse_column( $where['second'] );

					$wheres[] = "{$where['and_or']} {$first} {$where['operator']} {$second}";
					break;

				case self::WHERE_IN:
					// Handle invalid `WHERE IN` - Force the SQL to fail.
					if ( empty( $where['value'] ) ) {
						$wheres[] = "{$where['and_or']} 0 = 1";
						break;
					}

					$column = $this->parse_column( $where['column'] );
					$binding = $this->get_binding_type( $where['value'] );

					$wheres[] = "{$where['and_or']} {$column} IN( {$binding} )";
					break;

				case self::WHERE_NOT_IN:
					// Handle invalid `WHERE IN` - Force the SQL to fail.
					if ( empty( $where['value'] ) ) {
						$wheres[] = "{$where['and_or']} 1 = 1";
						break;
					}

					$column = $this->parse_column( $where['column'] );
					$binding = $this->get_binding_type( $where['value'] );

					$wheres[] = "{$where['and_or']} {$column} NOT IN( {$binding} )";
					break;

				case self::WHERE_SUB:
					$column = $this->parse_column( $where['column'] );
					$sub_query = $where['query']->to_sql();

					$wheres[] = "{$where['and_or']} {$column} {$where['operator']} ( {$sub_query} )";
					break;

				case self::WHERE_NESTED:
					$nested_query = $where['query']->compile_wheres();
					$wheres[] = "{$where['and_or']} ( {$nested_query} )";
					break;

				case self::WHERE_EXISTS:
					$sub_query = $where['query']->to_sql();
					$wheres[] = "{$where['and_or']} EXISTS ( {$sub_query} )";
					break;

				case self::WHERE_NOT_EXISTS:
					$sub_query = $where['query']->to_sql();
					$wheres[] = "{$where['and_or']} NOT EXISTS ( {$sub_query} )";
					break;
			}
		}

		return $this->concatenate( $wheres );
	}

	/**
	 * Compile the `havings` array into an actual `HAVING` statement.
	 * TODO: Add more types.
	 *
	 * @return string
	 */
	public function compile_having() {
		if ( 0 === count( $this->havings ) ) {
			return '';
		}

		$havings = [
			'HAVING',
			'1 = 1', // A default statement for easier `HAVING` concatenation.
		];

		foreach ( $this->havings as $having ) {
			switch ( $having['type'] ) {
				case self::HAVING_RAW:
					$havings[] = "{$having['and_or']} {$having['sql']}";
					break;
			}
		}

		return $this->concatenate( $havings );
	}

	/**
	 * Compile the `groups` array into an actual `GROUP BY` statement.
	 *
	 * @return string
	 */
	public function compile_group_by() {
		if ( 0 === count( $this->groups ) ) {
			return '';
		}

		$groups = [];

		foreach ( $this->groups as $group ) {
			$groups[] = $this->parse_column( $group['column'] );
		}

		return $this->concatenate( [
			'GROUP BY',
			$this->concatenate( $groups, ', ' ),
		] );
	}

	/**
	 * Compile the `orders` array into an actual `ORDER BY` statement.
	 *
	 * @return string
	 */
	public function compile_order_by() {
		if ( 0 === count( $this->orders ) ) {
			return '';
		}

		$orders = [];

		foreach ( $this->orders as $order ) {
			$column = $this->parse_column( $order['column'] );
			$orders[] = "{$column} {$order['direction']}";
		}

		return $this->concatenate( [
			'ORDER BY',
			$this->concatenate( $orders, ', ' ),
		] );
	}

	/**
	 * Compile the `limit` attribute into an actual `LIMIT` statement.
	 *
	 * @return string
	 */
	public function compile_limit() {
		return $this->limit ? "LIMIT {$this->limit}" : '';
	}

	/**
	 * Compile the `offset` attribute into an actual `OFFSET` statement.
	 *
	 * @return string
	 */
	public function compile_offset() {
		return $this->offset ? "OFFSET {$this->offset}" : '';
	}

	/**
	 * Get the final SQL of the query, with bindings placeholders.
	 *
	 * @return string
	 */
	public function to_sql() {
		$select = $this->compile_select();
		$join = $this->compile_joins();
		$where = $this->compile_wheres();
		$group_by = $this->compile_group_by();
		$having = $this->compile_having();
		$order_by = $this->compile_order_by();
		$limit = $this->compile_limit();
		$offset = $this->compile_offset();

		return $this->concatenate( [
			$select,
			$join,
			'WHERE',
			$where,
			$group_by,
			$having,
			$order_by,
			$limit,
			$offset,
		] );
	}

	/**
	 * Find & get by id.
	 *
	 * @param int $id - ID to search for.
	 * @param string $field - Field name. Defaults to `id`.
	 *
	 * @return array|null
	 */
	public function find( $id, $field = 'id' ) {
		return $this->where( $field, '=', $id )->first();
	}

	/**
	 * Return the first matching row or null otherwise.
	 *
	 * @return array|null
	 */
	public function first() {
		return $this->limit( 1 )->get()->first();
	}

	/**
	 * Pluck a specific column from the query results.
	 *
	 * @param string $column - The column to pluck.
	 *
	 * @return Collection
	 */
	public function pluck( $column ) {
		return $this
			->select( [ $column ] )
			->get()
			->pluck( $column );
	}

	/**
	 * Return the count of rows based on the query.
	 *
	 * @param string $column
	 *
	 * @return int
	 */
	public function count( $column = '*' ) {
		return (int) ( new Collection(
			$this->select( [] )
				->add_count_select( $column )
				->first()
		) )->first( 0 );
	}

	/**
	 * Get the query result.
	 *
	 * @return Collection
	 */
	public function get() {
		$sql = $this->to_sql();
		$bindings = $this->get_bindings();

		if ( 0 !== count( $bindings ) ) {
			$sql = $this->connection->prepare( $sql, $bindings );
		}

		$result = $this->connection->get_results( $sql, ARRAY_A );
		$result = new Collection( $result );

		// Add aggregations.
		foreach ( $this->with as $resolver ) {
			$result = $resolver( $result );
		}

		return $result;
	}

	/**
	 * Insert data to a table.
	 *
	 * @param array $values - Array of [ `column` => `value` ] pairs. Non-escaped.
	 *
	 * @return int
	 * @throws \Exception
	 */
	public function insert( array $values ) {
		// Take the raw table name since `wpdb` wraps it with backticks.
		$table = $this->from['table'];

		// Data should be escaped since `wpdb` escapes it.
		// https://developer.wordpress.org/reference/classes/wpdb/insert/
		$succeed = $this->connection->insert( $table, $values );

		if ( ! $succeed ) {
			throw new \Exception( $this->connection->last_error );
		}

		return $this->connection->insert_id;
	}

	/**
	 * Update data in the table.
	 *
	 * @param array $values - Array of [ `column` => `value` ] pairs. Non-escaped.
	 *
	 * @return bool|int
	 */
	public function update( array $values ) {
		$this->add_binding( array_values( $values ), 'select' );

		$columns = [];

		foreach ( $values as $column => $value ) {
			$binding_type = $this->get_binding_type( $value );
			$column = $this->wrap_with_backticks( $column );

			$columns[] = "{$column} = {$binding_type}";
		}

		$table = $this->compile_from();
		$columns = $this->concatenate( $columns, ', ' );
		$where = $this->compile_wheres();

		$sql = $this->concatenate( [
			'UPDATE',
			$table,
			'SET',
			$columns,
			'WHERE',
			$where,
		] );

		$prepared = $this->connection->prepare( $sql, $this->get_bindings() );

		return $this->connection->query( $prepared );
	}

	/**
	 * Delete data from the table.
	 *
	 * @return bool|int
	 */
	public function delete() {
		$where = $this->compile_wheres();
		$table = $this->wrap_with_backticks( $this->from['table'] );

		$sql = $this->concatenate( [
			'DELETE FROM',
			$table,
			'WHERE',
			$where,
		] );

		$prepared = $this->connection->prepare( $sql, $this->get_bindings() );

		return $this->connection->query( $prepared );
	}

	/**
	 * Add an eager loaded relation.
	 *
	 * @param string $key - Array key to store the resolver in.
	 * @param callable $resolver - Resolve function that gets the results and adds the eager loaded relation.
	 *
	 * @return $this
	 */
	protected function add_with( $key, callable $resolver ) {
		$this->with[ $key ] = $resolver;

		return $this;
	}

	/**
	 * Escape a value for `LIKE` statement.
	 *
	 * @param string $value - Value to escape.
	 *
	 * @return string
	 */
	protected function escape_like( $value ) {
		$value = explode( '%', $value );

		$value = array_map( function ( $str ) {
			return $this->connection->esc_like( $str );
		}, $value );

		return implode( '%', $value );
	}

	/**
	 * Get a flat array of the current bindings.
	 *
	 * @param null|string $type - The binding type to get.
	 *
	 * @return array
	 */
	protected function get_bindings( $type = null ) {
		if ( $type && isset( $this->bindings[ $type ] ) ) {
			return $this->bindings[ $type ];
		}

		return ( new Collection( $this->bindings ) )->flatten_recursive();
	}

	/**
	 * Add a binding to the bindings array by a sector.
	 *
	 * @param string|array $value - Raw value that needs to be bind.
	 * @param string $type - Bind type (the sector in the SQL query).
	 *
	 * @return $this
	 */
	protected function add_binding( $value, $type ) {
		if ( is_array( $value ) ) {
			$this->bindings[ $type ] = array_values( array_merge( $this->bindings[ $type ], $value ) );
		} else {
			$this->bindings[ $type ][] = $value;
		}

		return $this;
	}

	/**
	 * Get the type of the binding type for SQL `prepare` function.
	 *
	 * @param array|string|numeric $value - The value to get the binding for.
	 *
	 * @return string - One of `%d` / `%f` / `%s`.
	 */
	protected function get_binding_type( $value ) {
		if ( is_array( $value ) ) {
			$bindings = array_map( function( $value ) {
				return $this->get_binding_type( $value );
			}, array_values( $value ) );

			return $this->concatenate( $bindings, ', ' );
		}

		return is_float( $value ) ? '%f' : ( is_int( $value ) ? '%d' : '%s' );
	}

	/**
	 * Wrap a value with backticks.
	 *
	 * @param numeric|string|string[] $value - Value to wrap.
	 *
	 * @return string|string[]
	 */
	protected function wrap_with_backticks( $value ) {
		if ( is_array( $value ) ) {
			return array_map( [ $this, 'wrap_with_backticks' ], $value );
		}

		// It should not wrap '*' with backticks.
		if ( '*' === $value ) {
			return $value;
		}

		$sanitized_value = is_scalar( $value )
			? preg_replace( '/[^a-zA-Z0-9_\-]/', '', $value )
			: '';

		return "`{$sanitized_value}`";
	}

	/**
	 * Concatenate an array of segments, removing empties.
	 *
	 * @param array $segments - Segments to concatenate.
	 * @param array $separator - Separator string. Defaults to empty space.
	 *
	 * @return string
	 */
	protected function concatenate( array $segments, $separator = ' ' ) {
		return implode( $separator, array_filter( $segments, function ( $value ) {
			return '' !== (string) $value;
		} ) );
	}

	/**
	 * Parse a column by splitting it to table & column names, and wrapping it with backticks.
	 *
	 * @param $column - Column to parse.
	 *
	 * @return string
	 */
	protected function parse_column( $column ) {
		$parsed = explode( '.', $column );
		$parsed = $this->wrap_with_backticks( $parsed );

		return $this->concatenate( $parsed, '.' );
	}

	protected function parse_as( $as ) {
		if ( ! $as ) {
			return '';
		}

		$as = $this->wrap_with_backticks( $as );

		return " AS {$as}";
	}

	/**
	 * Determine if a column is already selected.
	 *
	 * @param string $name - Column name to check.
	 *
	 * @return mixed|null
	 */
	protected function is_column_selected( $name ) {
		return ( new Collection( $this->columns ) )
			->find( function ( $column ) use ( $name ) {
				// Check for aliases.
				if ( ! empty( $column['as'] ) ) {
					return $name === $column['as'];
				}

				return $name === $column['column'];
			} );
	}
}
