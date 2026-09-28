<?php

namespace ElementorPro\Modules\CollectionLoop\Query\ItemProviders;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Item provider for taxonomy template types. Iterates `WP_Term[]`, exposing each
 * term via the `$wp_query->loop_term` sidecar (v3 parity for dynamic tags).
 */
final class Term_Loop_Item_Provider implements Loop_Item_Provider {

	/**
	 * @var \WP_Term[]
	 */
	private array $terms;

	/**
	 * @param \WP_Term[] $terms
	 */
	public function __construct( array $terms ) {
		$this->terms = array_values( array_filter( $terms, static fn( $term ) => $term instanceof \WP_Term ) );
	}

	public function has_items(): bool {
		return ! empty( $this->terms );
	}

	public function count(): int {
		return count( $this->terms );
	}

	public function items(): array {
		$items = [];

		foreach ( $this->terms as $term ) {
			$items[] = [
				'id'    => (int) $term->term_id,
				'title' => (string) $term->name,
			];
		}

		return $items;
	}

	public function iterate( callable $on_iteration ): void {
		$restore_globals = self::begin_taxonomy_context();

		try {
			foreach ( $this->terms as $term ) {
				self::set_current_loop_term( $term );

				if ( false === $on_iteration( (string) $term->term_id ) ) {
					break;
				}
			}
		} finally {
			$restore_globals();
		}
	}

	/**
	 * Enter taxonomy iteration mode: flip `$wp_query->is_loop_taxonomy` so v3
	 * dynamic tags detect the mode via `is_loop_taxonomy_strict()`. Returns a
	 * closure that restores the previous globals.
	 *
	 * Guards against a missing / non-WP_Query global (DB-less tests, pre-`wp` init),
	 * since setting a property on a non-object would fatal.
	 */
	public static function begin_taxonomy_context(): callable {
		global $wp_query;

		if ( ! $wp_query instanceof \WP_Query ) {
			return static function (): void {};
		}

		$had_loop_term        = isset( $wp_query->loop_term );
		$previous_loop_term   = $had_loop_term ? $wp_query->loop_term : null;
		$had_is_loop_taxonomy = isset( $wp_query->is_loop_taxonomy );
		$previous_flag        = $had_is_loop_taxonomy ? $wp_query->is_loop_taxonomy : null;

		$wp_query->is_loop_taxonomy = true;

		return static function () use ( $wp_query, $had_loop_term, $previous_loop_term, $had_is_loop_taxonomy, $previous_flag ): void {
			if ( $had_loop_term ) {
				$wp_query->loop_term = $previous_loop_term;
			} else {
				unset( $wp_query->loop_term );
			}

			if ( $had_is_loop_taxonomy ) {
				$wp_query->is_loop_taxonomy = $previous_flag;
			} else {
				unset( $wp_query->is_loop_taxonomy );
			}
		};
	}

	public static function set_current_loop_term( \WP_Term $term ): void {
		global $wp_query;

		if ( $wp_query instanceof \WP_Query ) {
			$wp_query->loop_term = $term;
		}
	}

	public function query(): ?\WP_Query {
		return null;
	}

	public function max_num_pages(): int {
		return 1;
	}

	/**
	 * @return \WP_Term[]
	 */
	public function terms(): array {
		return $this->terms;
	}
}
