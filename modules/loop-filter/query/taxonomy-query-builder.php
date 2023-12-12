<?php

namespace ElementorPro\Modules\LoopFilter\Query;

use ElementorPro\Modules\LoopFilter\Query\Data\Query_Constants;
use ElementorPro\Modules\LoopFilter\Query\Interfaces\Query_Interface;
use ElementorPro\Modules\LoopFilter\Query\QueryTypes\Hierarchy_And_Query;
use ElementorPro\Modules\LoopFilter\Query\QueryTypes\Hierarchy_Or_Query;
use ElementorPro\Modules\LoopFilter\Query\QueryTypes\Single_Terms_Query;

class Taxonomy_Query_Builder {
	private $query;
	private $single_terms_query;
	private $hierarchy_query;
	private $filter_terms;
	private $tax_query;
	private $taxonomy_manager;

	public function __construct() {
		$this->query = Query_Constants::DATA;
	}

	public function get_merged_queries( &$tax_query, $taxonomy, $filter ) {
		$this->tax_query = &$tax_query;

		// Taxonomy Filter parameter is empty i.e. `e-filter-389c132-product_cat=`.
		if ( ! empty( $filter['terms'] ) && '' === $filter['terms'][0] ) {
			return;
		}

		$this->taxonomy_manager = new Taxonomy_Manager();
		$this->taxonomy_manager->get_taxonomy_terms( $taxonomy );
		$this->filter_terms = $this->taxonomy_manager->get_hierarchy_of_selected_terms( $filter, $taxonomy );

		if ( ! empty( $this->filter_terms['single-term'] ) ) {
			$this->get_single_selection_query( $tax_query );
			return;
		}

		$this->get_multiple_selection_query( $tax_query );
	}

	private function get_single_selection_query( &$tax_query ) {
		$this->single_terms_query = $this->get_query( new Single_Terms_Query( $this->filter_terms, $this->taxonomy_manager ) );
		$this->merge_single_selection_query( $tax_query );
	}

	private function get_multiple_selection_query( &$tax_query ) {
		$this->single_terms_query = $this->get_query( new Single_Terms_Query( $this->filter_terms, $this->taxonomy_manager ) );

		if ( 'AND' === $this->filter_terms['logicalJoin'] ) {
			$this->hierarchy_query = $this->get_query( new Hierarchy_And_Query( $this->filter_terms, $this->taxonomy_manager ) );
		}

		if ( 'OR' === $this->filter_terms['logicalJoin'] ) {
			$this->hierarchy_query = $this->get_query( new Hierarchy_Or_Query( $this->filter_terms, $this->taxonomy_manager ) );
		}

		$this->merge_multiple_selection_query( $tax_query );
	}

	private function merge_single_selection_query( &$tax_query ) {
		if ( empty( $this->single_terms_query ?? [] ) ) {
			return;
		}

		$tax_query = array_merge( $tax_query, $this->single_terms_query ?? [] );
	}

	private function merge_multiple_selection_query( &$tax_query ) {
		if ( empty( $this->single_terms_query ?? [] ) && empty( $this->hierarchy_query ?? [] ) ) {
			return;
		}

		$tax_query = [ array_merge( $tax_query, $this->single_terms_query ?? [], $this->hierarchy_query ?? [], [ 'relation' => $this->query[ $this->filter_terms['logicalJoin'] ]['relation'] ] ) ];
	}

	private function get_query( Query_Interface $query_type ) {
		return $query_type->get_query();
	}
}
