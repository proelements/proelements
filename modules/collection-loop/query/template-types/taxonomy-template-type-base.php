<?php

namespace ElementorPro\Modules\CollectionLoop\Query\TemplateTypes;

use Elementor\Element_Base;
use Elementor\Modules\AtomicWidgets\Controls\Types\Number_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Chips_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Array_Prop_Type;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Args_Builder;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Term_Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\Taxonomy\Hierarchical_Term_Depth;
use ElementorPro\Modules\CollectionLoop\Query\Taxonomy\Taxonomy_Avoid_List;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Shared behavior for taxonomy-based Loop template types. Iterates `WP_Term[]`
 * via {@see Term_Loop_Item_Provider} (sets `$wp_query->loop_term` per iteration
 * for v3-parity dynamic tag resolution).
 */
abstract class Taxonomy_Template_Type_Base extends Template_Type_Base {

	const FILTER_BY_ALL              = 'show_all';
	const FILTER_BY_MANUAL_SELECTION = 'manual_selection';

	const FILTER_BY_OPTIONS = [
		self::FILTER_BY_ALL,
		self::FILTER_BY_MANUAL_SELECTION,
	];

	const ORDERBY_NAME    = 'name';
	const ORDERBY_TERM_ID = 'term_id';

	const ORDERBY_OPTIONS = [
		self::ORDERBY_NAME,
		self::ORDERBY_TERM_ID,
	];

	const DEPTH_ALL         = '0';
	const DEPTH_OPTIONS     = [ '0', '1', '2', '3', '4', '5', '6' ];
	const MAX_ITEMS_PER_LOOP = 100;

	/**
	 * @return string[] taxonomy slugs shown in the source select.
	 */
	abstract protected function get_taxonomy_choices(): array;

	/**
	 * Fallback default taxonomy for the source enum when the configured default
	 * isn't part of the current WP install (e.g. WooCommerce not activated).
	 */
	abstract protected function get_default_taxonomy(): string;

	/**
	 * Prop key prefix — differentiates schema fragments emitted by different
	 * taxonomy template types so they can coexist under the same `query` envelope.
	 */
	abstract protected function get_prop_prefix(): string;

	public function get_schema_fragment(): array {
		$is_this_template   = $this->template_type_clause();
		$hierarchical_slugs = $this->get_hierarchical_taxonomies();

		$visible_only_for_this = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( $is_this_template )
			->get();

		$manual_selection_dep = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path'     => [ 'query', $this->prop( 'filter_by' ) ],
				'value'    => self::FILTER_BY_MANUAL_SELECTION,
				'effect'   => 'hide',
			] )
			->where( $is_this_template )
			->get();

		$hierarchical_dep = empty( $hierarchical_slugs )
			? $visible_only_for_this
			: Dependency_Manager::make( Dependency_Manager::RELATION_AND )
				->where( [
					'operator' => 'in',
					'path'     => [ 'query', $this->prop( 'source' ) ],
					'value'    => $hierarchical_slugs,
					'effect'   => 'hide',
				] )
				->where( $is_this_template )
				->get();

		$depth_dep = empty( $hierarchical_slugs )
			? $visible_only_for_this
			: Dependency_Manager::make( Dependency_Manager::RELATION_AND )
				->where( [
					'operator' => 'in',
					'path'     => [ 'query', $this->prop( 'source' ) ],
					'value'    => $hierarchical_slugs,
					'effect'   => 'hide',
				] )
				->where( [
					'operator' => 'eq',
					'path'     => [ 'query', $this->prop( 'hierarchical' ) ],
					'value'    => true,
					'effect'   => 'hide',
				] )
				->where( $is_this_template )
				->get();

		$default_source = $this->resolve_default_source();

		return [
			$this->prop( 'source' )            => String_Prop_Type::make()
				->enum( $this->get_taxonomy_choices() )
				->default( $default_source )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'filter_by' )         => String_Prop_Type::make()
				->enum( self::FILTER_BY_OPTIONS )
				->default( self::FILTER_BY_ALL )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'include' )           => Query_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $manual_selection_dep ),
			$this->prop( 'exclude' )           => Query_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'orderby' )           => String_Prop_Type::make()
				->enum( self::ORDERBY_OPTIONS )
				->default( self::ORDERBY_NAME )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'order' )             => String_Prop_Type::make()
				->enum( Loop_Query::ORDER_OPTIONS )
				->default( Loop_Query::ORDER_DESC )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'avoid_duplicates' )  => Boolean_Prop_Type::make()
				->default( false )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'hide_empty' )        => Boolean_Prop_Type::make()
				->default( false )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'offset' )            => Number_Prop_Type::make()
				->default( 0 )
				->set_dependencies( $visible_only_for_this ),
			$this->prop( 'hierarchical' )      => Boolean_Prop_Type::make()
				->default( false )
				->set_dependencies( $hierarchical_dep ),
			$this->prop( 'depth' )             => String_Prop_Type::make()
				->enum( self::DEPTH_OPTIONS )
				->default( self::DEPTH_ALL )
				->set_dependencies( $depth_dep ),
		];
	}

	public function get_query_section_items(): array {
		return [
			Select_Control::bind_to( $this->prop( 'source' ) )
				->set_label( __( 'Source', 'elementor-pro' ) )
				->set_meta( [ 'layout' => 'full' ] )
				->set_options( $this->build_source_select_options() ),

			Select_Control::bind_to( $this->prop( 'filter_by' ) )
				->set_label( __( 'Filter by', 'elementor-pro' ) )
				->set_options( [
					[
						'value' => self::FILTER_BY_ALL,
						'label' => __( 'Show all', 'elementor-pro' ),
					],
					[
						'value' => self::FILTER_BY_MANUAL_SELECTION,
						'label' => __( 'Manual selection', 'elementor-pro' ),
					],
				] ),

			Query_Chips_Control::bind_to( $this->prop( 'include' ) )
				->set_label( __( 'Include', 'elementor-pro' ) )
				->set_query_options( $this->build_term_query_options() )
				->set_placeholder( __( 'Search', 'elementor-pro' ) )
				->set_min_input_length( 0 ),

			Query_Chips_Control::bind_to( $this->prop( 'exclude' ) )
				->set_label( __( 'Exclude', 'elementor-pro' ) )
				->set_query_options( $this->build_term_query_options() )
				->set_placeholder( __( 'Search', 'elementor-pro' ) )
				->set_min_input_length( 0 ),

			Select_Control::bind_to( $this->prop( 'orderby' ) )
				->set_label( __( 'Order by', 'elementor-pro' ) )
				->set_options( [
					[
						'value' => self::ORDERBY_NAME,
						'label' => __( 'Name', 'elementor-pro' ),
					],
					[
						'value' => self::ORDERBY_TERM_ID,
						'label' => __( 'ID', 'elementor-pro' ),
					],
				] ),

			$this->build_order_toggle_control( $this->prop( 'order' ) ),

			Switch_Control::bind_to( $this->prop( 'hide_empty' ) )
				->set_label( __( 'Hide empty', 'elementor-pro' ) )
				->set_meta( [ 'topDivider' => true ] ),

			Switch_Control::bind_to( $this->prop( 'avoid_duplicates' ) )
				->set_label( __( 'Avoid duplicates', 'elementor-pro' ) )
				->set_description( __( 'Prevents duplicate terms from appearing across multiple loops on the same page. Applies to the frontend only.', 'elementor-pro' ) ),

			Number_Control::bind_to( $this->prop( 'offset' ) )
				->set_label( __( 'Skip items', 'elementor-pro' ) )
				->set_description( __( 'Number of items to skip before the grid starts.', 'elementor-pro' ) )
				->set_min( 0 ),

			Switch_Control::bind_to( $this->prop( 'hierarchical' ) )
				->set_label( __( 'Filter by depth', 'elementor-pro' ) )
				->set_description( __( 'Evaluates all matching terms in PHP before paging. May impact performance on very large taxonomies.', 'elementor-pro' ) )
				->set_meta( [ 'topDivider' => true ] ),

			Select_Control::bind_to( $this->prop( 'depth' ) )
				->set_label( __( 'Depth', 'elementor-pro' ) )
				->set_options( [
					[
						'value' => '0',
						'label' => __( 'All', 'elementor-pro' ),
					],
					[
						'value' => '1',
						'label' => __( '1', 'elementor-pro' ),
					],
					[
						'value' => '2',
						'label' => __( '2', 'elementor-pro' ),
					],
					[
						'value' => '3',
						'label' => __( '3', 'elementor-pro' ),
					],
					[
						'value' => '4',
						'label' => __( '4', 'elementor-pro' ),
					],
					[
						'value' => '5',
						'label' => __( '5', 'elementor-pro' ),
					],
					[
						'value' => '6',
						'label' => __( '6', 'elementor-pro' ),
					],
				] ),
		];
	}

	// Required override from `Template_Type_Base`; taxonomy iteration bypasses
	// WP_Query, so this just exposes the get_terms args for introspection.
	public function build_query_args( array $query_settings ): array {
		return $this->build_get_terms_args( $query_settings );
	}

	public function supports_pagination(): bool {
		return false;
	}

	public function build_item_provider( array $query_settings, ?Element_Base $element = null ): Loop_Item_Provider {
		$args     = $this->build_get_terms_args( $query_settings );
		$query_id = Loop_Query_Args_Builder::extract_query_id( $query_settings );

		$hierarchical = (bool) $this->setting( $query_settings, $this->prop( 'hierarchical' ) );
		$depth        = (int) ( $this->setting( $query_settings, $this->prop( 'depth' ) ) ?? self::DEPTH_ALL );

		$is_depth_filtered = $hierarchical && $depth > 0;

		$offset = 0;
		$number = 0;

		// The depth filter removes terms, so paging has to happen after it — otherwise the
		// DB hands back `number` rows, the filter thins them out, and the loop renders
		// fewer items than asked for. Fetch the full candidate set and page it in PHP.
		if ( $is_depth_filtered ) {
			$offset = (int) ( $args['offset'] ?? 0 );
			$number = (int) ( $args['number'] ?? 0 );

			unset( $args['offset'], $args['number'] );
		}

		$terms = $this->run_term_query( $args, $query_id, $element );

		if ( $is_depth_filtered ) {
			$terms = Hierarchical_Term_Depth::filter_by_depth( $terms, $depth );
			$terms = array_slice( $terms, $offset, $number > 0 ? $number : null );
		}

		Taxonomy_Avoid_List::add( array_map( static fn( \WP_Term $t ) => (int) $t->term_id, $terms ) );

		return new Term_Loop_Item_Provider( $terms );
	}

	/**
	 * Runs the term query, firing the shared `elementor/query/{$query_id}` hook.
	 *
	 * Type note: this hook fires with a `WP_Term_Query` first argument, while the
	 * post-loop path fires the same hook with a `WP_Query`. Listeners that need
	 * to work with both must `instanceof`-guard the argument.
	 *
	 * @return \WP_Term[]
	 */
	protected function run_term_query( array $args, string $query_id, ?Element_Base $element ): array {
		if ( '' === $query_id ) {
			return $this->fetch_terms( $args );
		}

		$listener = static function ( \WP_Term_Query $term_query ) use ( $query_id, $element ) {
			do_action( "elementor/query/{$query_id}", $term_query, $element );
		};

		add_action( 'pre_get_terms', $listener );

		try {
			return $this->fetch_terms( $args );
		} finally {
			remove_action( 'pre_get_terms', $listener );
		}
	}

	/**
	 * @return \WP_Term[]
	 */
	protected function fetch_terms( array $args ): array {
		if ( ! function_exists( 'get_terms' ) ) {
			return [];
		}

		$terms = get_terms( $args );

		if ( ! is_array( $terms ) ) {
			return [];
		}

		return array_values( array_filter( $terms, static fn( $term ) => $term instanceof \WP_Term ) );
	}

	protected function build_get_terms_args( array $query_settings ): array {
		$taxonomy = (string) ( $this->setting( $query_settings, $this->prop( 'source' ) ) ?? $this->resolve_default_source() );

		$args = [
			'taxonomy'   => $taxonomy,
			'hide_empty' => (bool) $this->setting( $query_settings, $this->prop( 'hide_empty' ) ),
			'orderby'    => (string) ( $this->setting( $query_settings, $this->prop( 'orderby' ) ) ?? self::ORDERBY_NAME ),
			'order'      => strtoupper( (string) ( $this->setting( $query_settings, $this->prop( 'order' ) ) ?? Loop_Query::ORDER_DESC ) ),
			'number'     => $this->resolve_number( $query_settings ),
		];

		$offset = (int) ( $this->setting( $query_settings, $this->prop( 'offset' ) ) ?? 0 );
		if ( $offset > 0 ) {
			$args['offset'] = $offset;
		}

		$filter_by = (string) ( $this->setting( $query_settings, $this->prop( 'filter_by' ) ) ?? self::FILTER_BY_ALL );

		if ( self::FILTER_BY_MANUAL_SELECTION === $filter_by ) {
			$include_ids = $this->selection_ids_to_int_list( $this->setting( $query_settings, $this->prop( 'include' ) ) );

			// Mirrors Post_Template_Type::build_post_in_from_selection(): an empty
			// manual-selection must yield zero results, not fall back to "show all".
			// term_id 0 doesn't exist in WP, so `include => [0]` returns no terms.
			$args['include'] = empty( $include_ids ) ? [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ] : $include_ids;
		}

		$exclude_ids = $this->selection_ids_to_int_list( $this->setting( $query_settings, $this->prop( 'exclude' ) ) );

		// WP_Term_Query discards `exclude` (and `exclude_tree`) whenever `include`
		// is non-empty — see wp-includes/class-wp-term-query.php: "If $include is
		// non-empty, $exclude is ignored." That means avoid_duplicates + manual
		// selection is a silent no-op. v3 has the same limitation (see
		// `Taxonomy_Filter_Trait`); v4 mirrors it intentionally.
		if ( (bool) $this->setting( $query_settings, $this->prop( 'avoid_duplicates' ) ) ) {
			$exclude_ids = array_values( array_unique( array_merge( $exclude_ids, Taxonomy_Avoid_List::get() ) ) );
		}

		if ( ! empty( $exclude_ids ) ) {
			$args['exclude'] = $exclude_ids;
		}

		return $args;
	}

	protected function build_source_select_options(): array {
		$options = [];

		foreach ( $this->get_taxonomy_choices() as $slug ) {
			$options[] = [
				'value' => $slug,
				'label' => $this->get_taxonomy_label( $slug ),
			];
		}

		return $options;
	}

	protected function build_term_query_options(): array {
		return [
			'url'    => '/elementor/v1/term',
			'params' => [
				'taxonomies' => $this->get_taxonomy_choices(),
			],
		];
	}

	protected function get_hierarchical_taxonomies(): array {
		$hierarchical = [];

		foreach ( $this->get_taxonomy_choices() as $slug ) {
			if ( function_exists( 'is_taxonomy_hierarchical' ) && is_taxonomy_hierarchical( $slug ) ) {
				$hierarchical[] = $slug;
			}
		}

		return $hierarchical;
	}

	protected function get_taxonomy_label( string $slug ): string {
		if ( function_exists( 'get_taxonomy' ) ) {
			$taxonomy = get_taxonomy( $slug );

			if ( $taxonomy && isset( $taxonomy->labels->name ) && '' !== $taxonomy->labels->name ) {
				return (string) $taxonomy->labels->name;
			}
		}

		return $slug;
	}

	protected function resolve_default_source(): string {
		$default  = $this->get_default_taxonomy();
		$choices  = $this->get_taxonomy_choices();

		if ( '' !== $default && in_array( $default, $choices, true ) ) {
			return $default;
		}

		return $choices[0] ?? $default;
	}

	protected function resolve_number( array $query_settings ): int {
		$per_page = $this->setting( $query_settings, 'posts_per_page' );

		if ( null === $per_page ) {
			return Loop_Query::DEFAULT_POSTS_PER_PAGE;
		}

		$per_page = (int) $per_page;

		return min( self::MAX_ITEMS_PER_LOOP, max( 1, $per_page ) );
	}

	protected function prop( string $suffix ): string {
		return $this->get_prop_prefix() . '_' . $suffix;
	}
}
