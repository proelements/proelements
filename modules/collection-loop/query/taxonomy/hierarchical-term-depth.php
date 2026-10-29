<?php

namespace ElementorPro\Modules\CollectionLoop\Query\Taxonomy;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Depth limiter for a hierarchical set of `WP_Term` objects.
 *
 * Derived from `ElementorPro\Modules\LoopFilter\Traits\Hierarchical_Taxonomy_Trait`,
 * with two deliberate departures — both because a loop grid renders flat, independent
 * items, unlike the nested tree UI that trait was written for:
 *
 * - Depth is measured against the real taxonomy tree, not against `$terms`, so the
 *   result doesn't shift when hide_empty / exclude / manual selection narrow the input.
 * - Input order is preserved instead of being regrouped into parent→children pre-order.
 *   Regrouping pinned every child's position to its parent's, which overrode the user's
 *   `orderby`/`order` and pushed whole branches past the items-per-page cut-off.
 */
final class Hierarchical_Term_Depth {

	/**
	 * Drop terms deeper than `$max_levels`, preserving the incoming order.
	 *
	 * `$max_levels` counts LEVELS to display: 1 = roots only, 2 = roots + direct
	 * children, N = roots + descendants down to level N-1. Caller must pre-guard:
	 * only invoke when `hierarchical == true && max_levels >= 1`.
	 *
	 * @param \WP_Term[] $terms
	 * @return \WP_Term[]
	 */
	public static function filter_by_depth( array $terms, int $max_levels ): array {
		$terms = array_values( array_filter( $terms, static fn( $term ) => $term instanceof \WP_Term ) );

		if ( empty( $terms ) || $max_levels < 1 ) {
			return [];
		}

		$max_tree_depth = $max_levels - 1;

		$by_id = [];

		foreach ( $terms as $term ) {
			$by_id[ (int) $term->term_id ] = $term;
		}

		return array_values( array_filter(
			$terms,
			static fn( \WP_Term $term ) => self::calculate_depth( $term, $by_id ) <= $max_tree_depth
		) );
	}

	/**
	 * Depth of `$term` measured from the root (parent==0).
	 *
	 * Resolved against the real taxonomy tree, because `$terms` is already narrowed
	 * by hide_empty / exclude / manual selection — measuring depth against that
	 * narrowed set would make the depth filter's output depend on every other filter.
	 *
	 * @param array<int, \WP_Term> $by_id
	 */
	private static function calculate_depth( \WP_Term $term, array $by_id ): int {
		if ( 0 === (int) $term->parent ) {
			return 0;
		}

		$taxonomy = isset( $term->taxonomy ) ? (string) $term->taxonomy : '';

		if ( '' !== $taxonomy && function_exists( 'get_ancestors' ) ) {
			return count( get_ancestors( (int) $term->term_id, $taxonomy, 'taxonomy' ) );
		}

		return self::calculate_depth_within_set( $term, $by_id );
	}

	/**
	 * Fallback for when the taxonomy tree isn't reachable (no WP runtime). Returns
	 * `PHP_INT_MAX` for unresolvable chains — a missing or circular parent means the
	 * depth is genuinely unknowable here, so the term is excluded rather than guessed
	 * at depth 0 (the v3 behavior).
	 *
	 * @param array<int, \WP_Term> $by_id
	 */
	private static function calculate_depth_within_set( \WP_Term $term, array $by_id ): int {
		$depth   = 0;
		$visited = [ (int) $term->term_id => true ];
		$current = $term;

		while ( 0 !== (int) $current->parent ) {
			$parent_id = (int) $current->parent;

			if ( ! isset( $by_id[ $parent_id ] ) ) {
				return PHP_INT_MAX;
			}

			if ( isset( $visited[ $parent_id ] ) ) {
				return PHP_INT_MAX;
			}

			$visited[ $parent_id ] = true;
			$current               = $by_id[ $parent_id ];
			$depth++;
		}

		return $depth;
	}
}
