<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Item counts only a post-based provider can answer.
 *
 * `Loop_Item_Provider::query()` is null for term providers, and that interface
 * stays minimal for third-party template types, so both counts read WP_Query
 * directly and degrade to the provider's own item count.
 */
final class Loop_Query_Counts {

	/**
	 * Items matching the query across every page, ignoring the current window.
	 * Falls back to the loaded items for `no_found_rows` queries, where
	 * `found_posts` is 0.
	 */
	public static function found_items( Loop_Item_Provider $item_provider ): int {
		$query = $item_provider->query();
		$found = $query instanceof \WP_Query ? (int) $query->found_posts : 0;

		return max( $found, $item_provider->count() );
	}

	/**
	 * Items the query asks for per page, or 0 when there is no WP_Query to ask.
	 * An unbounded query reports -1.
	 */
	public static function items_per_page( Loop_Item_Provider $item_provider ): int {
		$query = $item_provider->query();

		return $query instanceof \WP_Query ? (int) $query->get( 'posts_per_page' ) : 0;
	}
}
