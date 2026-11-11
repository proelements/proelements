<?php

namespace ElementorPro\Modules\CollectionLoop\Compat;

use ElementorPro\Modules\LoopBuilder\Module as LoopBuilder_Module;
use ElementorPro\Modules\QueryControl\Module as QueryControl_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The only place v4 avoid lists touch v3, so v3 and v4 loops on the same page
 * dedupe each other. Deleting this class (and its call sites in the v4 avoid
 * lists) drops the interop without affecting v4-only pages.
 */
final class Legacy_Avoid_List_Bridge {

	/**
	 * @param int[] $post_ids
	 */
	public static function forward_posts( array $post_ids ): void {
		QueryControl_Module::add_to_avoid_list( $post_ids );
	}

	/**
	 * @return int[]
	 */
	public static function legacy_post_ids(): array {
		return self::to_int_list( QueryControl_Module::get_avoid_list_ids() );
	}

	/**
	 * @param int[] $term_ids
	 */
	public static function forward_terms( array $term_ids ): void {
		LoopBuilder_Module::add_to_taxonomies_avoid_list( $term_ids );
	}

	/**
	 * @return int[]
	 */
	public static function legacy_term_ids(): array {
		return self::to_int_list( LoopBuilder_Module::get_taxonomies_avoid_list_ids() );
	}

	/**
	 * Intended for tests, so resetting a v4 list also clears what it forwarded.
	 */
	public static function reset_posts(): void {
		QueryControl_Module::$displayed_ids = [];
	}

	/**
	 * Intended for tests, so resetting a v4 list also clears what it forwarded.
	 */
	public static function reset_terms(): void {
		LoopBuilder_Module::$taxonomies_displayed_ids = [];
	}

	private static function to_int_list( $ids ): array {
		return is_array( $ids ) ? array_map( 'intval', $ids ) : [];
	}
}
