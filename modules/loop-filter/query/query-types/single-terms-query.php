<?php
namespace ElementorPro\Modules\LoopFilter\Query\QueryTypes;

use ElementorPro\Modules\LoopFilter\Query\Data\Query_Constants;
use ElementorPro\Modules\LoopFilter\Query\Interfaces\Query_Interface;

class Single_Terms_Query implements Query_Interface {
	private $query;
	private $terms;
	private $taxonomy;
	private $logical_join;
	private $taxonomy_manager;

	public function __construct( $filter_terms, $taxonomy_manager ) {
		$this->query = Query_Constants::DATA;
		$this->taxonomy_manager = $taxonomy_manager;
		$this->set_single_or_multiple_selection_terms( $filter_terms );
		$this->taxonomy = $filter_terms['taxonomy'] ?? [];
		$this->logical_join = $filter_terms['logicalJoin'];
	}

	/**
	 * Create the Inner query for AND OR queries with one or more filter terms targeted at the same Widget using terms with no parent and no children
	 * @return array
	 */
	public function get_query() {
		if ( empty( $this->terms ) ) {
			return [];
		}

		$query = [
			[
				'taxonomy' => $this->taxonomy,
				'field' => 'slug',
				'terms' => [],
				'operator' => $this->get_inner_query_operator(),
			],
		];

		foreach ( $this->terms as $term ) {
			$query[0]['terms'][] = urldecode( sanitize_title( $term ?? '' ) ); //decode non-latin strings
		}

		return $query;
	}

	/**
	 * @param $filter_terms
	 * @return void
	 */
	private function set_single_or_multiple_selection_terms( $filter_terms ) {
		// Single Selection
		if ( ! empty( $filter_terms['single-term'][0] ) ) {
			$this->terms = $filter_terms['single-term'];
			return;
		}

		$this->terms = $filter_terms['parent-terms-without-children'];

	}

	/**
	 * @return string 'IN' / 'AND' (default)
	 */
	private function get_inner_query_operator() {
		if ( $this->is_single_parent_term() ) {
			return $this->query['OR']['operator']; // Allow showing posts from parent category when it's selected.
		}

		if ( 'DISABLED' !== $this->logical_join ) {
			return $this->query[ $this->logical_join ?? 'DISABLED' ]['operator'];
		}

		return $this->query['AND']['operator'];
	}

	/**
	 * @return boolean
	 */
	private function is_single_parent_term() {
		if ( empty( $this->terms ?? [] ) ) {
			return false;
		}

		$is_parent_term = $this->taxonomy_manager->is_parent_term_with_children( $this->terms[0], $this->taxonomy );
		return 1 === count( $this->terms ?? [] ) && $is_parent_term;
	}
}
