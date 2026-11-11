<?php

namespace ElementorPro\Modules\CollectionLoop\Query\Taxonomy;

use ElementorPro\Modules\CollectionLoop\Compat\Legacy_Avoid_List_Bridge;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Page-global list of term IDs emitted by taxonomy loops during the current
 * request. When a subsequent taxonomy loop has `taxonomy_avoid_duplicates`
 * enabled, its exclude arg is augmented with this list so already-shown terms
 * do not repeat.
 *
 * Mirrors v3's `LoopBuilder\Module::taxonomies_avoid_list` (frontend-only,
 * request-scoped, no explicit reset — the runtime lifetime of a PHP request
 * is the natural scope).
 */
final class Taxonomy_Avoid_List {

	/**
	 * @var int[]
	 */
	private static array $term_ids = [];

	/**
	 * @param int[] $term_ids
	 */
	public static function add( array $term_ids ): void {
		$added = [];

		foreach ( $term_ids as $term_id ) {
			$id = (int) $term_id;

			if ( $id <= 0 ) {
				continue;
			}

			$added[] = $id;
		}

		if ( empty( $added ) ) {
			return;
		}

		self::$term_ids = array_merge( self::$term_ids, $added );

		Legacy_Avoid_List_Bridge::forward_terms( $added );
	}

	/**
	 * @return int[]
	 */
	public static function get(): array {
		return array_values( array_unique( array_merge( self::$term_ids, Legacy_Avoid_List_Bridge::legacy_term_ids() ) ) );
	}

	/**
	 * Intended for tests. Not part of any product-facing lifecycle.
	 */
	public static function reset(): void {
		self::$term_ids = [];

		Legacy_Avoid_List_Bridge::reset_terms();
	}
}
