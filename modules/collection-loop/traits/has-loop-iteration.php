<?php
namespace ElementorPro\Modules\CollectionLoop\Traits;

use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use Elementor\Plugin;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Post_Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Counts;
use ElementorPro\Modules\CollectionLoop\Utils\Alternate_Selector;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Has_Loop_Iteration {
	use Has_Element_Template {
		render_children_to_html as protected render_default_children_to_html;
	}

	abstract protected function get_loop_context_key(): string;

	protected function render_children_to_html(): string {
		$loop_context = Render_Context::get( $this->get_loop_context_key() );

		if ( empty( $loop_context ) ) {
			return $this->render_default_children_to_html();
		}

		return $this->render_children_for_loop();
	}

	protected function render_children_for_loop(): string {
		$loop_context = Render_Context::get( $this->get_loop_context_key() );

		if ( empty( $loop_context ) || empty( $loop_context['has_items'] ) ) {
			return '';
		}

		$selector = Alternate_Selector::for_loop_items( $this->get_children() );

		if ( ! $selector ) {
			return '';
		}

		$item_provider = $this->resolve_item_provider( $loop_context );

		if ( null === $item_provider ) {
			return '';
		}

		/**
		 * TODO: @deprecate this check on version 4.4
		 */
		$format_element_ids_class = 'Elementor\\Modules\\AtomicWidgets\\Utils\\Format_Element_Ids';

		if ( ! class_exists( $format_element_ids_class ) ) {
			return $this->render_children_for_loop_legacy( $selector, $loop_context, $item_provider );
		}

		return $this->render_children_for_loop_with_unique_ids( $selector, $loop_context, $item_provider, $format_element_ids_class );
	}

	private function render_children_for_loop_with_unique_ids( Alternate_Selector $selector, array $loop_context, Loop_Item_Provider $item_provider, string $format_element_ids_class ): string {
		$loop_id        = (string) ( $loop_context['loop_id'] ?? '' );
		$html           = '';
		$raw_data_by_id = [];
		$slot           = $this->resolve_start_slot( $loop_context );
		$end_slot       = $slot + $this->resolve_slot_budget( $loop_context, $item_provider );

		$item_provider->iterate( function ( string $item_id ) use ( $selector, $loop_id, &$slot, $end_slot, $format_element_ids_class, &$raw_data_by_id, &$html ): bool {
			if ( $slot >= $end_slot ) {
				return false;
			}

			$html .= $this->render_alternate_slots_for_item(
				$selector,
				$loop_id,
				$item_id,
				$slot,
				$end_slot,
				$format_element_ids_class,
				$raw_data_by_id
			);

			return $slot < $end_slot;
		} );

		return $html;
	}

	private function render_children_for_loop_legacy( Alternate_Selector $selector, array $loop_context, Loop_Item_Provider $item_provider ): string {
		$html     = '';
		$slot     = $this->resolve_start_slot( $loop_context );
		$end_slot = $slot + $this->resolve_slot_budget( $loop_context, $item_provider );

		$item_provider->iterate( function () use ( $selector, &$slot, $end_slot, &$html ): bool {
			if ( $slot >= $end_slot ) {
				return false;
			}

			$html .= $this->render_alternate_slots_for_item_legacy( $selector, $slot, $end_slot );

			return $slot < $end_slot;
		} );

		return $html;
	}

	/**
	 * Renders the slots the current loop item occupies — static alternates take a
	 * slot without advancing to the next item. A page boundary can cut that short;
	 * the next page re-fetches the item, since its offset skipped the static slot.
	 */
	private function render_alternate_slots_for_item(
		Alternate_Selector $selector,
		string $loop_id,
		string $item_id,
		int &$slot,
		int $end_slot,
		string $format_element_ids_class,
		array &$raw_data_by_id
	): string {
		$html = '';

		foreach ( $selector->consume_item_slots( $slot ) as $pick ) {
			if ( $slot >= $end_slot ) {
				break;
			}

			$picked = $pick['element'];
			$picked_id = $picked->get_id();

			if ( ! isset( $raw_data_by_id[ $picked_id ] ) ) {
				$raw_data_by_id[ $picked_id ] = $picked->get_raw_data();
			}

			$template_data = $raw_data_by_id[ $picked_id ];
			$children_data = $template_data['elements'] ?? [];

			// The slot index is in the seed so static slots (same $item_id) still get unique ids.
			$rewritten_children = $format_element_ids_class::format(
				$children_data,
				[ $loop_id, $item_id, (string) $slot ]
			);

			$iteration_data = array_merge( $template_data, [ 'elements' => $rewritten_children ] );
			$element        = Plugin::$instance->elements_manager->create_element_instance( $iteration_data );

			if ( $element ) {
				ob_start();
				$element->print_element();
				$html .= (string) ob_get_clean();
			}

			++$slot;
		}

		return $html;
	}

	private function render_alternate_slots_for_item_legacy(
		Alternate_Selector $selector,
		int &$slot,
		int $end_slot
	): string {
		$html = '';

		foreach ( $selector->consume_item_slots( $slot ) as $pick ) {
			if ( $slot >= $end_slot ) {
				break;
			}

			$picked = $pick['element'];
			$picked->reset_descendant_render_state();

			ob_start();
			$picked->print_element();
			$html .= (string) ob_get_clean();

			++$slot;
		}

		return $html;
	}

	/**
	 * First global slot of the current page. Global rather than page-local so
	 * "apply once" fires once across the whole query instead of once per page.
	 */
	private function resolve_start_slot( array $loop_context ): int {
		return max( 0, (int) ( $loop_context['start_slot'] ?? 0 ) );
	}

	/**
	 * Slots this page may fill, published by the loop element that owns the slot
	 * map. The fallback covers contexts built without it (v3-shaped fake contexts
	 * in tests): static alternates add slots without consuming a post, so
	 * budgeting by item count alone drops the pushed post off the tail, while
	 * `max()` absorbs an unbounded or absent `posts_per_page` and sticky posts
	 * inflating `post_count`.
	 */
	private function resolve_slot_budget( array $loop_context, Loop_Item_Provider $item_provider ): int {
		if ( isset( $loop_context['slot_budget'] ) ) {
			return max( 0, (int) $loop_context['slot_budget'] );
		}

		return max( $item_provider->count(), Loop_Query_Counts::items_per_page( $item_provider ) );
	}

	/**
	 * Resolve the item provider out of the render context, tolerating pre-refactor
	 * `query` shape (raw WP_Query) so v3-shaped fake contexts in tests still work.
	 */
	private function resolve_item_provider( array $loop_context ): ?Loop_Item_Provider {
		$item_provider = $loop_context['item_provider'] ?? null;

		if ( $item_provider instanceof Loop_Item_Provider ) {
			return $item_provider;
		}

		$query = $loop_context['query'] ?? null;

		if ( $query instanceof \WP_Query ) {
			return new Post_Loop_Item_Provider( $query );
		}

		if ( is_object( $query ) && method_exists( $query, 'have_posts' ) && method_exists( $query, 'the_post' ) ) {
			return new class( $query ) implements Loop_Item_Provider {
				private $query;

				public function __construct( $query ) {
					$this->query = $query;
				}

				public function has_items(): bool {
					return (bool) $this->query->have_posts();
				}

				public function count(): int {
					return property_exists( $this->query, 'post_count' ) ? (int) $this->query->post_count : 0;
				}

				public function items(): array {
					return [];
				}

				public function iterate( callable $on_iteration ): void {
					try {
						while ( $this->query->have_posts() ) {
							$this->query->the_post();

							if ( false === $on_iteration( '' ) ) {
								break;
							}
						}
					} finally {
						wp_reset_postdata();
					}
				}

				public function query(): ?\WP_Query {
					return $this->query instanceof \WP_Query ? $this->query : null;
				}

				public function max_num_pages(): int {
					return property_exists( $this->query, 'max_num_pages' ) ? (int) $this->query->max_num_pages : 1;
				}
			};
		}

		return null;
	}
}
