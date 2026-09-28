<?php

namespace ElementorPro\Modules\CollectionLoop\Query\TemplateTypes;

use Elementor\Element_Base;
use Elementor\Modules\AtomicWidgets\Controls\Types\Toggle_Control;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Post_Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Args_Builder;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Runner;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Template_Type_Base {

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	/**
	 * Atomic prop schema fragment contributed by this template type.
	 *
	 * Returned array is keyed by prop name and contains Prop_Type instances.
	 * Implementations are responsible for adding any `eq template_type === <id>`
	 * dependency clauses needed to keep their props hidden when another type is active.
	 *
	 * @return array<string, mixed>
	 */
	abstract public function get_schema_fragment(): array;

	/**
	 * Atomic controls contributed by this template type.
	 *
	 * Implementations should not include the shared Template Type select / posts_per_page
	 * / query_id controls; those are owned by Loop_Query.
	 *
	 * @return array<int, mixed>
	 */
	abstract public function get_query_section_items(): array;

	abstract public function build_query_args( array $query_settings ): array;

	/**
	 * Whether this template type supports pagination.
	 *
	 * Term-based sources return `false` because `get_terms()` needs an extra count
	 * query for `max_num_pages`, and {@see Term_Loop_Item_Provider::max_num_pages()}
	 * is hardcoded to `1`. Post- and product-like sources override nothing.
	 */
	public function supports_pagination(): bool {
		return true;
	}

	/**
	 * Build a Loop_Item_Provider from resolved query settings.
	 *
	 * Default implementation is post-based: delegates to Loop_Query_Runner and
	 * wraps the resulting WP_Query in a Post_Loop_Item_Provider. Term-based
	 * types override this directly.
	 */
	public function build_item_provider( array $query_settings, ?Element_Base $element = null ): Loop_Item_Provider {
		$args     = $this->build_query_args( $query_settings );
		$query_id = Loop_Query_Args_Builder::extract_query_id( $query_settings );
		$page     = Loop_Query_Args_Builder::extract_page( $query_settings );
		$offset   = Loop_Query_Args_Builder::extract_offset( $query_settings );

		// The offset is the slot-aware form of pagination, so it wins over `paged`
		// (WP_Query ignores `paged` once `offset` is set anyway).
		if ( $offset > 0 ) {
			$args['offset'] = $offset;
		} elseif ( $page > 1 ) {
			$args['paged'] = $page;
		}

		$query = ( new Loop_Query_Runner( $args, $query_id ) )->run( $element );

		return new Post_Loop_Item_Provider( $query );
	}

	protected function setting( array $query_settings, string $key ) {
		return $query_settings[ $key ] ?? null;
	}

	protected function template_type_clause(): array {
		return [
			'operator' => 'eq',
			'path'     => [ 'query', 'template_type' ],
			'value'    => $this->get_id(),
			'effect'   => 'hide',
		];
	}

	protected function normalize_filters( $filters ): array {
		if ( ! is_array( $filters ) ) {
			return [];
		}

		$normalized = [];

		foreach ( $filters as $filter ) {
			if ( ! is_array( $filter ) || ! isset( $filter['key'] ) ) {
				continue;
			}

			$values     = $filter['values'] ?? [];
			$taxonomies = $filter['taxonomies'] ?? [];

			if ( ! is_array( $values ) ) {
				$values = [];
			}

			if ( ! is_array( $taxonomies ) ) {
				$taxonomies = [];
			}

			$ids = array_values( array_filter( array_map(
				static fn( $item ) => is_numeric( $item ) ? (int) $item : 0,
				$values
			) ) );

			$slugs = array_values( array_filter( array_map(
				static fn( $item ) => is_string( $item ) && '' !== $item ? $item : null,
				$taxonomies
			) ) );

			$normalized[] = [
				'key'        => (string) $filter['key'],
				'values'     => $ids,
				'taxonomies' => $slugs,
			];
		}

		return $normalized;
	}

	/**
	 * Sanitize a "selection" atomic setting array into a list of unique-order integer IDs.
	 *
	 * Non-array input yields an empty list. Caller decides what to do with empties
	 * (typically `Loop_Query::EMPTY_QUERY_SENTINEL_ID`).
	 *
	 * @return int[]
	 */
	protected function selection_ids_to_int_list( $selection ): array {
		if ( ! is_array( $selection ) ) {
			return [];
		}

		return array_values( array_filter( array_map(
			static fn( $item ) => is_numeric( $item ) ? (int) $item : 0,
			$selection
		) ) );
	}

	protected function build_order_toggle_control( string $bind_to ): Toggle_Control {
		return Toggle_Control::bind_to( $bind_to )
			->add_options( [
				Loop_Query::ORDER_ASC  => [
					'title'       => __( 'ASC', 'elementor-pro' ),
					'atomic-icon' => 'ArrowUpSmallIcon',
				],
				Loop_Query::ORDER_DESC => [
					'title'       => __( 'DESC', 'elementor-pro' ),
					'atomic-icon' => 'ArrowDownSmallIcon',
				],
			] )
			->set_exclusive( true )
			->set_convert_options( true )
			->set_size( 'tiny' )
			->set_label( __( 'Order', 'elementor-pro' ) )
			->set_meta( [ 'layout' => 'two-columns' ] );
	}

	protected function build_current_query_args( array $query_settings ): array {
		global $wp_query;

		$query_vars = isset( $wp_query ) && $wp_query instanceof \WP_Query ? (array) $wp_query->query_vars : [];

		$per_page_setting = $this->setting( $query_settings, 'posts_per_page' );
		if ( null !== $per_page_setting ) {
			$query_vars['posts_per_page'] = Loop_Query::clamp_posts_per_page( $per_page_setting );
		}

		/**
		 * Filters the WP_Query vars used when the loop's source is "Current Query".
		 *
		 * Mirrors the v3 hook from Elementor Pro Query_Control so legacy listeners keep working.
		 *
		 * @param array $query_vars
		 */
		return apply_filters( 'elementor/query/get_query_args/current_query', $query_vars );
	}
}
