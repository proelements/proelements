<?php

namespace ElementorPro\Modules\CollectionLoop\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Maps a collection loop's alternate configuration onto the grid slots it fills.
 *
 * `posts_per_page` is a count of slots, not of items: a static alternate takes a
 * slot without consuming an item. Both walks here drive
 * {@see Alternate_Selector::consume_item_slots()}, so the plan and the renderer
 * can never disagree about slot composition — and each needs its own selector.
 */
final class Loop_Slot_Map {

	/**
	 * Items consumed by slots [0, $slot_count) — the query offset for the page
	 * that starts at $slot_count.
	 */
	public static function items_before_slot( Alternate_Selector $selector, int $slot_count ): int {
		$items = 0;
		$slot  = 0;

		while ( $slot < $slot_count ) {
			foreach ( $selector->consume_item_slots( $slot ) as $pick ) {
				if ( $slot >= $slot_count ) {
					return $items;
				}

				if ( ! $pick['is_static'] ) {
					++$items;
				}

				++$slot;
			}
		}

		return $items;
	}

	/**
	 * Slots needed to render $total_items, including the slots statics insert.
	 *
	 * An item expansion always ends on the item's own template, so statics never
	 * trail past the last item.
	 */
	public static function total_slots( Alternate_Selector $selector, int $total_items ): int {
		$items = 0;
		$slots = 0;

		while ( $items < $total_items ) {
			foreach ( $selector->consume_item_slots( $slots ) as $pick ) {
				++$slots;

				if ( ! $pick['is_static'] ) {
					++$items;
				}
			}
		}

		return $slots;
	}
}
