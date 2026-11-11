<?php

namespace ElementorPro\Modules\CollectionLoop\Query\Post;

use ElementorPro\Modules\CollectionLoop\Compat\Legacy_Avoid_List_Bridge;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Page-global list of post IDs emitted by post-based loops during the current
 * request. When a subsequent loop has `avoid_duplicates` enabled, its
 * `post__not_in` is augmented with this list so already-shown posts do not repeat.
 *
 * Request-scoped with no explicit reset, same as {@see \ElementorPro\Modules\CollectionLoop\Query\Taxonomy\Taxonomy_Avoid_List}.
 */
final class Post_Avoid_List {

	/**
	 * @var int[]
	 */
	private static array $post_ids = [];

	/**
	 * @param int[] $post_ids
	 */
	public static function add( array $post_ids ): void {
		$added = [];

		foreach ( $post_ids as $post_id ) {
			$id = (int) $post_id;

			if ( $id <= 0 ) {
				continue;
			}

			$added[] = $id;
		}

		if ( empty( $added ) ) {
			return;
		}

		self::$post_ids = array_merge( self::$post_ids, $added );

		Legacy_Avoid_List_Bridge::forward_posts( $added );
	}

	/**
	 * @return int[]
	 */
	public static function get(): array {
		return array_values( array_unique( array_merge( self::$post_ids, Legacy_Avoid_List_Bridge::legacy_post_ids() ) ) );
	}

	/**
	 * Intended for tests. Not part of any product-facing lifecycle.
	 */
	public static function reset(): void {
		self::$post_ids = [];

		Legacy_Avoid_List_Bridge::reset_posts();
	}
}
