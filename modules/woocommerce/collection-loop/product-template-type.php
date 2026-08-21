<?php

namespace ElementorPro\Modules\Woocommerce\CollectionLoop;

use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Chips_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Filter_Repeater_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Array_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Filter_Array_Prop_Type;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Query_Filters;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Product_Template_Type extends Template_Type_Base {

	const ID = 'product';

	const SOURCE_PRODUCT = 'product';
	const SOURCE_SALE = 'sale';
	const SOURCE_FEATURED = 'featured';
	const SOURCE_BY_ID = 'by_id';
	const SOURCE_RELATED_PRODUCTS = 'related_products';
	const SOURCE_UPSELLS = 'upsells';
	const SOURCE_CROSS_SELLS = 'cross_sells';
	const SOURCE_CURRENT_QUERY = 'current_query';

	const SOURCES = [
		self::SOURCE_PRODUCT,
		self::SOURCE_SALE,
		self::SOURCE_FEATURED,
		self::SOURCE_BY_ID,
		self::SOURCE_RELATED_PRODUCTS,
		self::SOURCE_UPSELLS,
		self::SOURCE_CROSS_SELLS,
		self::SOURCE_CURRENT_QUERY,
	];

	const SINGLE_PRODUCT_CONTEXT_SOURCES = [
		self::SOURCE_RELATED_PRODUCTS,
		self::SOURCE_UPSELLS,
		self::SOURCE_CROSS_SELLS,
	];

	// Sources that support include/exclude filters (term, author, manual).
	const FILTERABLE_SOURCES = [
		self::SOURCE_PRODUCT,
		self::SOURCE_SALE,
		self::SOURCE_FEATURED,
		self::SOURCE_BY_ID,
	];

	// Current Query uses the global query and has no meaningful orderby override.
	const NON_ORDERABLE_SOURCES = [ self::SOURCE_CURRENT_QUERY ];

	const PRODUCT_INCLUDE_FILTER_TYPES = [
		Query_Filters::TYPE_TERMS,
		Query_Filters::TYPE_AUTHORS,
	];

	const PRODUCT_EXCLUDE_FILTER_TYPES = [
		Query_Filters::TYPE_CURRENT_POST,
		Query_Filters::TYPE_MANUAL_SELECTION,
		Query_Filters::TYPE_TERMS,
		Query_Filters::TYPE_AUTHORS,
	];

	const ORDERBY_DATE = 'date';
	const ORDERBY_TITLE = 'title';
	const ORDERBY_PRICE = 'price';
	const ORDERBY_POPULARITY = 'popularity';
	const ORDERBY_RATING = 'rating';
	const ORDERBY_RAND = 'rand';
	const ORDERBY_MENU_ORDER = 'menu_order';

	const ORDERBY_OPTIONS = [
		self::ORDERBY_DATE,
		self::ORDERBY_TITLE,
		self::ORDERBY_PRICE,
		self::ORDERBY_POPULARITY,
		self::ORDERBY_RATING,
		self::ORDERBY_RAND,
		self::ORDERBY_MENU_ORDER,
	];

	const ORDERBY_META_KEY_MAP = [
		self::ORDERBY_PRICE      => '_price',
		self::ORDERBY_RATING     => '_wc_average_rating',
		self::ORDERBY_POPULARITY => 'total_sales',
	];

	public function get_id(): string {
		return self::ID;
	}

	public function get_label(): string {
		return esc_html__( 'Products', 'elementor-pro' );
	}

	public function get_schema_fragment(): array {
		$is_product_template = $this->template_type_clause();

		$visible_only_for_product = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( $is_product_template )
			->get();

		$by_id_only = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path'     => [ 'query', 'product_source' ],
				'value'    => self::SOURCE_BY_ID,
				'effect'   => 'hide',
			] )
			->where( $is_product_template )
			->get();

		$filterable_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'in',
				'path'     => [ 'query', 'product_source' ],
				'value'    => self::FILTERABLE_SOURCES,
				'effect'   => 'hide',
			] )
			->where( $is_product_template )
			->get();

		$orderable_sources = array_values( array_diff( self::SOURCES, self::NON_ORDERABLE_SOURCES ) );

		$orderby_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'in',
				'path'     => [ 'query', 'product_source' ],
				'value'    => $orderable_sources,
				'effect'   => 'hide',
			] )
			->where( $is_product_template )
			->get();

		return [
			'product_source'          => String_Prop_Type::make()
				->enum( self::SOURCES )
				->default( self::SOURCE_PRODUCT )
				->set_dependencies( $visible_only_for_product ),
			'product_selection'       => Query_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $by_id_only ),
			'product_include_filters' => Query_Filter_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $filterable_dependencies ),
			'product_exclude_filters' => Query_Filter_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $filterable_dependencies ),
			'product_orderby'         => String_Prop_Type::make()
				->enum( self::ORDERBY_OPTIONS )
				->default( self::ORDERBY_DATE )
				->set_dependencies( $orderby_dependencies ),
			'product_order'           => String_Prop_Type::make()
				->enum( Loop_Query::ORDER_OPTIONS )
				->default( Loop_Query::ORDER_DESC )
				->set_dependencies( $orderby_dependencies ),
		];
	}

	public function get_query_section_items(): array {
		$filter_key_config = $this->build_filter_key_config();

		$source_control = Select_Control::bind_to( 'product_source' )
			->set_label( __( 'Source', 'elementor-pro' ) )
			->set_meta( [ 'layout' => 'full' ] )
			->set_options( $this->build_source_select_options() );

		$selection_control = Query_Chips_Control::bind_to( 'product_selection' )
			->set_label( __( 'Selection', 'elementor-pro' ) )
			->set_query_options( [
				'url'    => '/elementor/v1/post',
				'params' => [
					'included_types'    => [ self::SOURCE_PRODUCT ],
					'search_in_content' => true,
				],
			] )
			->set_placeholder( __( 'Search', 'elementor-pro' ) )
			->set_min_input_length( 0 );

		$include_control = Query_Filter_Repeater_Control::bind_to( 'product_include_filters' )
			->set_label( __( 'Include filter', 'elementor-pro' ) )
			->set_allowed_keys( self::PRODUCT_INCLUDE_FILTER_TYPES )
			->set_key_config( $filter_key_config )
			->set_meta( [ 'layout' => 'full' ] );

		$exclude_control = Query_Filter_Repeater_Control::bind_to( 'product_exclude_filters' )
			->set_label( __( 'Exclude filter', 'elementor-pro' ) )
			->set_allowed_keys( self::PRODUCT_EXCLUDE_FILTER_TYPES )
			->set_key_config( $filter_key_config )
			->set_meta( [ 'layout' => 'full' ] );

		$orderby_control = Select_Control::bind_to( 'product_orderby' )
			->set_label( __( 'Order by', 'elementor-pro' ) )
			->set_options( [
				[
					'value' => self::ORDERBY_DATE,
					'label' => __( 'Date', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_TITLE,
					'label' => __( 'Title', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_PRICE,
					'label' => __( 'Price', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_POPULARITY,
					'label' => __( 'Popularity', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_RATING,
					'label' => __( 'Rating', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_RAND,
					'label' => __( 'Random', 'elementor-pro' ),
				],
				[
					'value' => self::ORDERBY_MENU_ORDER,
					'label' => __( 'Menu order', 'elementor-pro' ),
				],
			] );

		$order_control = $this->build_order_toggle_control( 'product_order' );

		return [
			$source_control,
			$selection_control,
			$include_control,
			$exclude_control,
			$orderby_control,
			$order_control,
		];
	}

	public function build_query_args( array $query_settings ): array {
		$source = $this->setting( $query_settings, 'product_source' ) ?? self::SOURCE_PRODUCT;

		if ( self::SOURCE_CURRENT_QUERY === $source ) {
			return $this->build_current_query_args( $query_settings );
		}

		$per_page = Loop_Query::clamp_posts_per_page( $this->setting( $query_settings, 'posts_per_page' ) );

		if ( self::SOURCE_BY_ID === $source ) {
			return $this->build_by_id_query_args( $query_settings, $per_page );
		}

		$args = [
			'post_type'           => self::SOURCE_PRODUCT,
			'post_status'         => 'publish',
			'posts_per_page'      => $per_page,
			'ignore_sticky_posts' => 1,
		];

		$this->apply_orderby_to_args( $args, $query_settings );
		$this->apply_visibility_to_args( $args );

		switch ( $source ) {
			case self::SOURCE_FEATURED:
				$this->apply_featured_to_args( $args );
				break;
			case self::SOURCE_SALE:
				$this->apply_sale_to_args( $args );
				break;
			case self::SOURCE_RELATED_PRODUCTS:
			case self::SOURCE_UPSELLS:
			case self::SOURCE_CROSS_SELLS:
				$this->apply_single_product_context_to_args( $args, $source, $per_page );

				return $args;
		}

		$include_filters = $this->normalize_filters( $this->setting( $query_settings, 'product_include_filters' ) );
		$exclude_filters = $this->normalize_filters( $this->setting( $query_settings, 'product_exclude_filters' ) );

		$args = Query_Filters::apply( $args, $include_filters, Query_Filters::MODE_INCLUDE );
		$args = Query_Filters::apply( $args, $exclude_filters, Query_Filters::MODE_EXCLUDE );

		return self::reconcile_post_in_with_excludes( $args );
	}

	/**
	 * WP_Query silently ignores `post__not_in` when `post__in` is non-empty
	 * (see `WP_Query::get_posts()`), so for sources that pre-populate `post__in`
	 * (Sale) we have to apply excludes manually. v3 mirrors this in
	 * `Products_Renderer::set_exclude_query_args()` via `array_diff`.
	 */
	protected static function reconcile_post_in_with_excludes( array $args ): array {
		if ( empty( $args['post__in'] ) || empty( $args['post__not_in'] ) ) {
			return $args;
		}

		$args['post__in'] = array_values( array_diff( $args['post__in'], $args['post__not_in'] ) );
		unset( $args['post__not_in'] );

		if ( empty( $args['post__in'] ) ) {
			$args['post__in'] = [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ];
		}

		return $args;
	}

	private function build_source_select_options(): array {
		return [
			[
				'value' => self::SOURCE_PRODUCT,
				'label' => __( 'Latest products', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_SALE,
				'label' => __( 'Sale', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_FEATURED,
				'label' => __( 'Featured', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_BY_ID,
				'label' => __( 'Manual selection', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_RELATED_PRODUCTS,
				'label' => __( 'Related products', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_UPSELLS,
				'label' => __( 'Upsells', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_CROSS_SELLS,
				'label' => __( 'Cross-sells', 'elementor-pro' ),
			],
			[
				'value' => self::SOURCE_CURRENT_QUERY,
				'label' => __( 'Current query', 'elementor-pro' ),
			],
		];
	}

	private function apply_orderby_to_args( array &$args, array $query_settings ): void {
		$orderby = $this->setting( $query_settings, 'product_orderby' ) ?? self::ORDERBY_DATE;
		$order   = strtoupper( $this->setting( $query_settings, 'product_order' ) ?? Loop_Query::ORDER_DESC );

		if ( isset( self::ORDERBY_META_KEY_MAP[ $orderby ] ) ) {
			$args['meta_key'] = self::ORDERBY_META_KEY_MAP[ $orderby ];
			$args['orderby']  = 'meta_value_num';
			$args['order']    = $order;

			return;
		}

		$args['orderby'] = $orderby;
		$args['order']   = $order;
	}

	private function apply_visibility_to_args( array &$args ): void {
		if ( ! function_exists( 'wc_get_product_visibility_term_ids' ) ) {
			return;
		}

		$visibility_term_ids = wc_get_product_visibility_term_ids();

		if ( empty( $visibility_term_ids['exclude-from-catalog'] ) ) {
			return;
		}

		$args['tax_query']   = $args['tax_query'] ?? [];
		$args['tax_query'][] = [
			'taxonomy' => 'product_visibility',
			'field'    => 'term_taxonomy_id',
			'terms'    => [ $visibility_term_ids['exclude-from-catalog'] ],
			'operator' => 'NOT IN',
		];
	}

	private function apply_featured_to_args( array &$args ): void {
		if ( ! function_exists( 'wc_get_product_visibility_term_ids' ) ) {
			return;
		}

		$visibility_term_ids = wc_get_product_visibility_term_ids();

		if ( empty( $visibility_term_ids['featured'] ) ) {
			return;
		}

		$args['tax_query']   = $args['tax_query'] ?? [];
		$args['tax_query'][] = [
			'taxonomy' => 'product_visibility',
			'field'    => 'term_taxonomy_id',
			'terms'    => [ $visibility_term_ids['featured'] ],
		];
	}

	private function apply_sale_to_args( array &$args ): void {
		$on_sale_ids = function_exists( 'wc_get_product_ids_on_sale' )
			? wc_get_product_ids_on_sale()
			: [];

		$args['post__in'] = empty( $on_sale_ids ) ? [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ] : $on_sale_ids;
	}

	private function build_by_id_query_args( array $query_settings, int $per_page ): array {
		$ids = $this->selection_ids_to_int_list( $this->setting( $query_settings, 'product_selection' ) );

		$args = [
			'post_type'      => self::SOURCE_PRODUCT,
			'post_status'    => 'publish',
			'posts_per_page' => $per_page,
			'post__in'       => empty( $ids ) ? [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ] : $ids,
		];

		$this->apply_orderby_to_args( $args, $query_settings );

		$include_filters = $this->normalize_filters( $this->setting( $query_settings, 'product_include_filters' ) );
		$exclude_filters = $this->normalize_filters( $this->setting( $query_settings, 'product_exclude_filters' ) );

		$args = Query_Filters::apply( $args, $include_filters, Query_Filters::MODE_INCLUDE );
		$args = Query_Filters::apply( $args, $exclude_filters, Query_Filters::MODE_EXCLUDE );

		return self::reconcile_post_in_with_excludes( $args );
	}

	private function apply_single_product_context_to_args( array &$args, string $source, int $per_page ): void {
		$args['post_type'] = [ self::SOURCE_PRODUCT, 'product_variation' ];

		$ids = $this->resolve_single_product_context_ids( $source, $per_page );

		$args['post__in'] = empty( $ids ) ? [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ] : $ids;
	}

	private function resolve_single_product_context_ids( string $source, int $per_page ): array {
		global $product;

		switch ( $source ) {
			case self::SOURCE_RELATED_PRODUCTS:
				if ( ! $product || ! function_exists( 'wc_get_related_products' ) ) {
					return [];
				}

				return $this->filter_visible_product_ids(
					wc_get_related_products( $product->get_id(), $per_page, $product->get_upsell_ids() )
				);

			case self::SOURCE_UPSELLS:
				if ( ! $product ) {
					return [];
				}

				return $this->filter_visible_product_ids( $product->get_upsell_ids() );

			case self::SOURCE_CROSS_SELLS:
				if ( ! function_exists( 'WC' ) || null === WC()->cart || is_checkout() ) {
					return [];
				}

				return $this->filter_visible_product_ids( array_unique( WC()->cart->get_cross_sells() ) );
		}

		return [];
	}

	/**
	 * Mirrors v3 `Products_Renderer::set_single_product_query_args()`: hydrate IDs
	 * through `wc_get_product` and drop anything that isn't visible / purchasable
	 * (catalog visibility, hide-out-of-stock option, etc.).
	 */
	private function filter_visible_product_ids( array $ids ): array {
		if ( empty( $ids ) || ! function_exists( 'wc_get_product' ) || ! function_exists( 'wc_products_array_filter_visible' ) ) {
			return $ids;
		}

		$products = array_filter( array_map( 'wc_get_product', $ids ), 'wc_products_array_filter_visible' );

		return array_values( array_map( static fn( $product ) => $product->get_id(), $products ) );
	}

	private function build_filter_key_config(): array {
		$product_taxonomies = function_exists( 'get_object_taxonomies' )
			? get_object_taxonomies( self::SOURCE_PRODUCT, 'names' )
			: [];

		return [
			Query_Filters::TYPE_TERMS            => [
				'label'         => __( 'Term', 'elementor-pro' ),
				'queryEndpoint' => [
					'url'    => '/elementor/v1/term',
					'params' => [ 'taxonomies' => $product_taxonomies ],
				],
				'visibleWhen'   => [
					'path' => [ 'query', 'product_source' ],
					'in'   => self::FILTERABLE_SOURCES,
				],
			],
			Query_Filters::TYPE_AUTHORS          => [
				'label'         => __( 'Author', 'elementor-pro' ),
				'queryEndpoint' => [
					'url'    => '/elementor/v1/user',
					'params' => [ 'roles' => [ 'administrator', 'editor', 'author', 'contributor' ] ],
				],
			],
			Query_Filters::TYPE_MANUAL_SELECTION => [
				'label'         => __( 'Manual selection', 'elementor-pro' ),
				'queryEndpoint' => [
					'url'    => '/elementor/v1/post',
					'params' => [
						'included_types'    => [ self::SOURCE_PRODUCT ],
						'search_in_content' => true,
					],
				],
			],
			Query_Filters::TYPE_CURRENT_POST     => [
				'label'         => __( 'Current post', 'elementor-pro' ),
				'queryEndpoint' => null,
			],
		];
	}

}
