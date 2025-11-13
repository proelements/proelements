<?php
namespace ElementorPro\Modules\LoopFilter\Query;

class Taxonomy_Manager {
	private $terms_by_slug = [];
	private $terms_by_id = [];
	private $terms_hierarchy = [];

	/**
	 * @param string $taxonomy default 'category'. Use taxonomy string i.e. 'product_cat'. This generates the terms_by_slug and terms_by_id arrays.
	 * @return void
	 */
	public function get_taxonomy_terms( $taxonomy = 'category' ) {
		$args = [
			'taxonomy' => $taxonomy,
			'hide_empty' => true,
		];

		$terms = get_terms( $args );

		if ( is_wp_error( $terms ) ) {
			return;
		}

		$this->get_terms_by_slug_and_id( $terms );
		$this->terms_hierarchy = $this->filter_child_terms_by_depth( $terms, 100 );
	}

	private function get_term_id( $slug, $taxonomy ) {
		if ( ! isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) ) {
			return -1;
		}
		return $this->terms_by_slug[ $taxonomy ][ $slug ]['term_id'];
	}

	/**
	 * Check if a term is a parent term.
	 * @param string $slug
	 * @param string $taxonomy
	 * @return bool;
	 */
	public function is_parent_term_without_children( $slug, $taxonomy ) {
		// Empty terms do not exist in $terms_by_slug
		$has_children = $this->has_children( $slug, $taxonomy );
		$is_top_level_parent_term = $this->is_top_level_parent_term( $slug, $taxonomy );
		return ( isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) && $is_top_level_parent_term && ! $has_children );
	}

	public function is_parent_term_with_children( $slug, $taxonomy ) {
		// Empty terms do not exist in $terms_by_slug
		return ( isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) && $this->has_children( $slug, $taxonomy ) );
	}

	private function has_children( $slug, $taxonomy ) {
		$term_id = $this->get_term_id( $slug, $taxonomy );
		return isset( $this->terms_hierarchy[ $term_id ] ) && count( $this->terms_hierarchy[ $term_id ] ) > 0;
	}

	private function get_children( $slug, $taxonomy ) {
		$term_id = $this->get_term_id( $slug, $taxonomy );
		return $this->terms_hierarchy[ $term_id ];
	}

	private function is_child_term( $slug, $taxonomy ) {
		return ( isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) && 0 !== $this->terms_by_slug[ $taxonomy ][ $slug ]['parent'] );
	}

	public function is_top_level_parent_term( $slug, $taxonomy ) {
		return ( isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) && 0 === $this->terms_by_slug[ $taxonomy ][ $slug ]['parent'] );
	}

	private function get_parent( $slug, $taxonomy ) {
		return $this->terms_by_slug[ $taxonomy ][ $slug ]['parent'];
	}

	private function get_parent_id( $child_slug, $taxonomy ) {
		if ( ! isset( $this->terms_by_slug[ $taxonomy ][ $child_slug ]['parent'] ) ) {
			return -1;
		}

		return $this->terms_by_slug[ $taxonomy ][ $child_slug ]['parent'];
	}

	private function get_parent_slug( $child_slug, $taxonomy ) {
		$parent_id = $this->get_parent_id( $child_slug, $taxonomy );

		if ( -1 === $parent_id ) {
			return 'UNDEFINED';
		}

		return $this->terms_by_id[ $taxonomy ][ $parent_id ]['slug'];
	}

	/**
	 * @param array $filter_terms
	 * @param string $taxonomy
	 * @return array
	 */
	public function get_hierarchy_of_selected_terms( $filter_terms, $taxonomy ) {
		// Taxonomy Filter parameter is empty i.e. `e-filter-389c132-product_cat=`.
		if ( ! empty( $filter_terms['terms'] ) && '' === $filter_terms['terms'][0] ) {
			return [
				'single-term' => [],
				'parent-terms-without-children' => [],
				'hierarchical-terms' => [],
				'logicalJoin' => $filter_terms['logicalJoin'],
				'taxonomy' => $taxonomy,
			];
		}

		$parents_without_children = [];
		$parents_with_children_by_parent = [];
		$single_selection_term = [];

		if ( 1 === count( $filter_terms['terms'] ) ) {
			$single_selection_term = $filter_terms['terms'];
		}

		foreach ( $filter_terms['terms'] as $term ) {

			if ( ! empty( $single_selection_term ) ) {
				break;
			}

			$term = urldecode( sanitize_title( $term ) ); // decode non-latin slugs.
			$is_parent_term_without_children = $this->is_parent_term_without_children( $term, $taxonomy );
			$is_parent_term_with_children = $this->is_parent_term_with_children( $term, $taxonomy );

			if ( $is_parent_term_without_children ) {
				$parents_without_children[] = $term;
				continue;
			}

			if ( $is_parent_term_with_children ) {
				$parents_with_children_by_parent[ $term ][] = $term;
				continue;
			}

			$parent_slug = $this->get_parent_slug( $term, $taxonomy );
			if ( 'UNDEFINED' === $parent_slug ) {
				continue;
			}
			$parents_with_children_by_parent[ $parent_slug ][] = $term;
		}

		return [
			'single-term' => $single_selection_term,
			'parent-terms-without-children' => $parents_without_children,
			'hierarchical-terms' => $parents_with_children_by_parent,
			'logicalJoin' => $filter_terms['logicalJoin'],
			'taxonomy' => $taxonomy,
		];
	}

	/**
	 * @param array $terms
	 * @return void
	 */
	private function get_terms_by_slug_and_id( $terms = [] ) {
		$this->terms_by_slug = [];
		foreach ( $terms as $term ) {
			$slug = urldecode( $term->slug );

			$this->try_set_terms_by_slug( $slug, $term );
			$this->try_set_terms_by_id( $slug, $term );
		}
	}

	/**
	 * @param string $slug
	 * @param string $term
	 * @return void
	 */
	public function try_set_terms_by_slug( $slug, $term ) {
		$term_id = $term->term_id;
		$taxonomy = $term->taxonomy;

		if ( ! isset( $this->terms_by_slug[ $taxonomy ][ $slug ] ) ) {
			$this->terms_by_slug[ $taxonomy ][ $slug ] = [
				'term_id' => $term_id,
				'parent' => $term->parent,
				'count' => $term->count,
			];
		}
	}

	/**
	 * @param string $slug
	 * @param string $term
	 * @return void
	 */
	public function try_set_terms_by_id( $slug, $term ) {
		$term_id = $term->term_id;
		$taxonomy = $term->taxonomy;

		if ( ! isset( $this->terms_by_id[ $taxonomy ][ $slug ] ) ) {
			$this->terms_by_id[ $taxonomy ][ $term_id ] = [
				'slug' => $slug,
				'parent' => $term->parent,
				'count' => $term->count,
			];
		}
	}

	/**
	 * @param \WP_Term[] $terms
	 * @param int $target_depth
	 * @return \WP_Term[]
	 */
	private function filter_child_terms_by_depth( $terms, $target_depth ) {
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
			$result[ $current_term->parent ][ $current_term->term_id ] = $current_term;
			return;
		}

		$item_depth = $this->calculate_depth_for_child_term_recursively( $terms, $current_term, 0 );

		if ( $item_depth <= $target_depth ) {
			$result[ $current_term->parent ][ $current_term->term_id ] = $current_term;
		}
	}

	/**
	 * @param \WP_Term[] $terms
	 * @param \WP_Term $child_term
	 * @param int $depth
	 * @return int|void
	 */
	private function calculate_depth_for_child_term_recursively( $terms, $child_term, $depth ) {
		$depth++;

		foreach ( $terms as $term ) {
			if ( $term->term_id !== $child_term->parent ) {
				continue;
			}

			if ( 0 === $term->parent ) {
				return $depth;
			}
			return $this->calculate_depth_for_child_term_recursively( $terms, $term, $depth );
		}
	}

}
