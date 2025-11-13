<?php
namespace ElementorPro\Modules\LoopFilter\Query\QueryTypes;

use ElementorPro\Modules\LoopFilter\Query\Data\Query_Constants;
use ElementorPro\Modules\LoopFilter\Query\Interfaces\Query_Interface;
use ElementorPro\Modules\LoopFilter\Query\Taxonomy_Manager;

class Hierarchy_And_Query implements Query_Interface {
	private $query;
	private $terms;
	private $taxonomy;
	private $logical_join;
	private $taxonomy_manager;

	public function __construct( $filter_terms, $taxonomy_manager ) {
		$this->query = Query_Constants::DATA;
		$this->taxonomy_manager = $taxonomy_manager;
		$this->terms = $filter_terms['hierarchical-terms'] ?? [];
		$this->taxonomy = $filter_terms['taxonomy'];
		$this->logical_join = $filter_terms['logicalJoin'];
	}

	/**
	 * @return array
	 */
	public function get_query() {
		$query = [];

		if ( empty( $this->terms ) ) {
			return $query;
		}

		foreach ( $this->terms as $parent_term => $terms ) {
			$filtered_terms = $this->filter_query_terms( $parent_term, $terms );
			$query[] = $this->get_hierarchy_query( $filtered_terms );
		}

		return $query;
	}

	/**
	 * @param $parent_term
	 * @param $terms
	 * @return array
	 */
	private function filter_query_terms( $parent_term, $terms ) {
		$query_terms = [];
		$filters_on_parent_term = in_array( $parent_term, $terms );
		$filters_on_parent_and_child_terms = count( $terms ) > 1 && $filters_on_parent_term;
		$is_parent_term_only = $filters_on_parent_term && ! $filters_on_parent_and_child_terms;
		$has_child_terms_only = ! $filters_on_parent_term;

		// For an AND Queries exclude parent term if there are child and parent terms.
		if ( $filters_on_parent_and_child_terms ) {
			$query_terms = array_diff( $terms, [ $parent_term ] ); //drop parent term
		}

		if ( $is_parent_term_only || $has_child_terms_only ) {
			$query_terms = $terms;
		}

		return $query_terms;
	}


	/**
	 * Create the Inner query for AND OR queries with one or more filter terms targeted at the same Widget.
	 * @param array $terms
	 * @return array
	 */
	private function get_hierarchy_query( $terms ) {
		$inner_query = [
			'taxonomy' => $this->taxonomy,
			'field' => 'slug',
			'terms' => [],
			'operator' => $this->query['OR']['operator'],
		];

		foreach ( $terms as $term ) {
			if ( 1 < count( $terms ) && $this->taxonomy_manager->is_parent_term_with_children( $term, $this->taxonomy ) ) {
				$parent_query = $this->get_hierarchy_query( [ $term ] );
				continue;
			}

			$inner_query['terms'] = [ urldecode( sanitize_title( $term ?? '' ) ) ]; //decode non-latin strings
			$child_queries[] = $inner_query;
		}

		$hierarchy_query = array_merge( $parent_query ?? [], $child_queries ?? [] );
		$hierarchy_query['relation'] = $this->query['OR']['relation']; //broaden search results when two child terms are selected. And relation between unrelated terms.
		return $hierarchy_query;
	}
}
