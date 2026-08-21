<?php

namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Query_Filters {
	const MODE_INCLUDE = 'include';
	const MODE_EXCLUDE = 'exclude';

	const TYPE_TERMS = 'terms';
	const TYPE_AUTHORS = 'authors';
	const TYPE_MANUAL_SELECTION = 'manual_selection';
	const TYPE_CURRENT_POST = 'current_post';

	public static function apply( array $args, array $filters, string $mode ): array {
		foreach ( $filters as $filter ) {
			$key = $filter['key'] ?? null;
			$ids = $filter['values'] ?? [];

			if ( ! is_array( $ids ) ) {
				$ids = [];
			}

			switch ( $key ) {
				case self::TYPE_TERMS:
					$args = self::apply_terms( $args, $ids, $mode );
					break;
				case self::TYPE_AUTHORS:
					$args = self::apply_authors( $args, $ids, $mode );
					break;
				case self::TYPE_MANUAL_SELECTION:
					if ( self::MODE_EXCLUDE === $mode ) {
						$args = self::merge_post_not_in( $args, $ids );
					}
					break;
				case self::TYPE_CURRENT_POST:
					if ( self::MODE_EXCLUDE === $mode ) {
						$args = self::apply_current_post( $args );
					}
					break;
			}
		}

		return $args;
	}

	private static function apply_terms( array $args, array $ids, string $mode ): array {
		if ( empty( $ids ) ) {
			return $args;
		}

		$grouped = self::group_term_taxonomy_ids_by_taxonomy( $ids );

		if ( empty( $grouped ) ) {
			return $args;
		}

		$new_tax_items = [];
		foreach ( $grouped as $taxonomy => $term_ids ) {
			$item = [
				'taxonomy' => $taxonomy,
				'field'    => 'term_taxonomy_id',
				'terms'    => $term_ids,
			];

			if ( self::MODE_EXCLUDE === $mode ) {
				$item['operator'] = 'NOT IN';
			}

			$new_tax_items[] = $item;
		}

		if ( empty( $args['tax_query'] ) ) {
			$args['tax_query'] = $new_tax_items;

			return $args;
		}

		$args['tax_query']['relation'] = 'AND';
		foreach ( $new_tax_items as $item ) {
			$args['tax_query'][] = $item;
		}

		return $args;
	}

	private static function apply_authors( array $args, array $ids, string $mode ): array {
		if ( empty( $ids ) ) {
			return $args;
		}

		if ( self::MODE_EXCLUDE === $mode ) {
			if ( empty( $args['author__in'] ) ) {
				$args['author__not_in'] = array_values( array_unique( array_merge( $args['author__not_in'] ?? [], $ids ) ) );
			}

			return $args;
		}

		$args['author__in'] = array_values( array_unique( array_merge( $args['author__in'] ?? [], $ids ) ) );

		return $args;
	}

	private static function merge_post_not_in( array $args, array $ids ): array {
		if ( empty( $ids ) ) {
			return $args;
		}

		$args['post__not_in'] = array_values( array_unique( array_merge( $args['post__not_in'] ?? [], $ids ) ) );

		return $args;
	}

	private static function group_term_taxonomy_ids_by_taxonomy( array $ids ): array {
		$ids = array_values( array_unique( array_map( 'intval', $ids ) ) );

		$terms = get_terms( [
			'term_taxonomy_id' => $ids,
			'hide_empty'       => false,
		] );

		if ( is_wp_error( $terms ) ) {
			return [];
		}

		$grouped = [];

		foreach ( $terms as $term ) {
			$grouped[ $term->taxonomy ][] = (int) $term->term_taxonomy_id;
		}

		return $grouped;
	}

	private static function apply_current_post( array $args ): array {
		if ( ! is_singular() ) {
			return $args;
		}

		$current_id = get_queried_object_id();

		if ( ! $current_id ) {
			return $args;
		}

		return self::merge_post_not_in( $args, [ (int) $current_id ] );
	}
}
