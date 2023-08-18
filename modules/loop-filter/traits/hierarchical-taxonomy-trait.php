<?php
namespace ElementorPro\Modules\LoopFilter\Traits;

trait Hierarchical_Taxonomy_Trait {

	/**
	 * @param \WP_Term[] $terms
	 * @param int $target_depth
	 * @return \WP_Term[]
	 */
	public function filter_child_terms_by_depth( $terms, $target_depth ) {
		$filtered = [];

		foreach ( $terms as $term ) {
			$this->filter_single_term( $filtered, $terms, $term, $target_depth );
		}

		return $filtered;
	}

	/**
	 * @param \WP_Term[] $terms
	 * @param \WP_Term $current_term
	 * @param int $target_depth
	 * @return void
	 */
	private function filter_single_term( &$result, $terms, $current_term, $target_depth ) {
		if ( 0 === $current_term->parent ) {
			$result[ $current_term->parent ][] = $current_term;
			return;
		}

		$item_depth = $this->calculate_depth_for_child_term( $terms, $current_term, 0 );

		if ( $item_depth <= $target_depth ) {
			$result[ $current_term->parent ][] = $current_term;
		}
	}

	/**
	 * @param \WP_Term[] $terms
	 * @param \WP_Term $child_term
	 * @param int $depth
	 * @return int|void
	 */
	private function calculate_depth_for_child_term( $terms, $child_term, $depth ) {
		$depth++;

		foreach ( $terms as $term ) {
			if ( $term->term_id !== $child_term->parent ) {
				continue;
			}

			if ( 0 === $term->parent ) {
				return $depth;
			}
			return $this->calculate_depth_for_child_term( $terms, $term, $depth );
		}
	}


	/**
	 * Transform terms hierarchy structure to plain [ parent_term_id => [ term, term ... ], ...] to [ term, term, ... ]
	 *
	 * @param array $taxonomy_plain_view
	 * @param array $hierarchy_terms
	 * @param int $parent_term_id
	 * @return void
	 */
	public function transform_taxonomy_hierarchy_to_plain( &$taxonomy_plain_view, $hierarchy_terms, $parent_term_id = 0 ) {
		if ( empty( $hierarchy_terms[ $parent_term_id ] ) ) {
			return;
		}

		foreach ( $hierarchy_terms[ $parent_term_id ] as $term ) {
			$taxonomy_plain_view[] = $term;
			$this->transform_taxonomy_hierarchy_to_plain( $taxonomy_plain_view, $hierarchy_terms, $term->term_id );
		}
	}
}
