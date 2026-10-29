<?php

namespace ElementorPro\Modules\CollectionLoop\Query\ItemProviders;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Provides the items a Collection Loop iterates over (posts, terms, ...).
 *
 * Template types build a `Loop_Item_Provider` from resolved query settings. The
 * loop iteration engine, preview endpoint, and render-context builder consume
 * this interface without knowing whether the underlying items are posts or
 * terms — the provider owns the engine-specific side effects (setting up post
 * globals for posts, `$wp_query->loop_term` for terms).
 */
interface Loop_Item_Provider {

	public function has_items(): bool;

	public function count(): int;

	/**
	 * Flat list of `[ 'id' => int, 'title' => string ]` — used by the loop preview
	 * endpoint / editor canvas static-items pipeline.
	 *
	 * @return array<int, array{id:int,title:string}>
	 */
	public function items(): array;

	/**
	 * Iterate items, invoking `$on_iteration( (string) $iteration_id )` per item.
	 *
	 * The callback returns `false` to stop early. Implementations must honor it,
	 * set/restore per-iteration globals (`the_post` / `$wp_query->loop_term`),
	 * and clean up in a `finally` block.
	 *
	 * Early-stop exists because the render layer counts *slots*, not items
	 * (`Alternate_Selector` can emit multiple slots per item). Once the caller's
	 * slot budget is met, stopping here avoids one wasted global-state mutation.
	 */
	public function iterate( callable $on_iteration ): void;

	/**
	 * Underlying WP_Query for post-based providers, or null for non-post ones.
	 *
	 * Post-loop iteration relies on `have_posts()` / `the_post()` semantics that
	 * mutate WP globals; the iteration engine calls this to drive the outer loop.
	 * It's also placed into the render context (`$loop_context['query']`) so v3-
	 * shaped tests can push a duck-typed query and still exercise the trait.
	 */
	public function query(): ?\WP_Query;

	/**
	 * Total number of pages available for pagination. Post providers return
	 * `WP_Query::$max_num_pages`; non-paginated providers return 1.
	 */
	public function max_num_pages(): int;
}
