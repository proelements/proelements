<?php
namespace ElementorPro\Modules\LoopBuilder\Providers;

use ElementorPro\Core\Utils;
use ElementorPro\Modules\LoopBuilder\Module as LoopBuilderModule;
use ElementorPro\Modules\Woocommerce\Module as WoocommerceModule;
use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Taxonomy_Loop_Provider {
	// QUERY TABS
	const TABS_WRAPPER = 'query_args';
	const INCLUDE_TAB = 'query_include';
	const EXCLUDE_TAB = 'query_exclude';

	// QUERY CONTROL KEYS
	const QUERY_CONTROL_GROUP_NAME = LoopBuilderModule::QUERY_ID;
	const POST_TYPE = 'post_type';
	const FILTER_BY = 'filter_by';
	const PARENT = 'child_of';
	const INCLUDE = 'posts_ids';
	const EXCLUDE = 'exclude_ids';
	const AVOID_DUPLICATES = 'avoid_duplicates';
	const OFFSET = 'offset';
	const ORDER_BY = 'orderby';
	const ORDER = 'order';
	const HIDE_EMPTY = 'hide_empty';
	const HIERARCHICAL = 'hierarchical';
	const QUERY_DEPTH = 'child_taxonomy_depth';
	const QUERY_ID = 'term_taxonomy_id';

	// DEFAULT TAXONOMIES
	const POST_CATEGORY_TAXONOMY = 'category';
	const POST_TAG_TAXONOMY = 'post_tag';
	const PRODUCT_CATEGORY_TAXONOMY = 'product_cat';
	const PRODUCT_TAG_TAXONOMY = 'product_tag';

	// FILTER_BY OPTION KEYs
	const MANUAL_SELECTION = 'manual_selection';
	const SHOW_ALL = 'show_all';
	const BY_PARENT = 'by_parent';
	const CURRENT_QUERY = 'current_query';
	const CURRENT_SUBCATEGORIES = 'current_subcategories';

	// ORDER_BY OPTION KEYS
	const ORDER_BY_NAME = 'name';
	const ORDER_BY_ID = 'term_id';

	// ORDER OPTION KEYS
	const ASC_ORDER = 'ASC';
	const DESC_ORDER = 'DESC';

	private $skin_id;
	private $default_source_type;

	public function __construct( $skin_id = LoopBuilderModule::LOOP_POST_TAXONOMY_SKIN_ID, $default_source_type = self::POST_CATEGORY_TAXONOMY ) {
		$this->skin_id = $skin_id;
		$this->default_source_type = $default_source_type;
	}

	public function get_query_settings( array $display_settings ): array {
		$taxonomy_type = $display_settings[ $this->get_query_property_name( self::POST_TYPE ) ] ?? self::POST_CATEGORY_TAXONOMY;
		$term_taxonomy_id = $display_settings[ $this->get_property_name( self::QUERY_ID ) ];
		$depth = (int) $display_settings[ $this->get_property_name( self::QUERY_DEPTH ) ];
		$hierarchical = $display_settings[ $this->get_property_name( self::HIERARCHICAL ) ];

		$settings = [
			'taxonomy' => empty( $taxonomy_type ) ? $this->default_source_type : $taxonomy_type,
			'show_empty_items' => 'yes' === $display_settings[ $this->get_property_name( self::HIDE_EMPTY ) ] ? 'no' : 'yes',
			'include' => $display_settings[ $this->get_property_name( self::INCLUDE ) ],
			'exclude' => $display_settings[ $this->get_property_name( self::EXCLUDE ) ],
			'term_taxonomy_id' => strlen( $term_taxonomy_id ) ? $term_taxonomy_id : null,
			'child_of' => $display_settings[ $this->get_property_name( self::PARENT ) ],
			'offset' => $display_settings[ $this->get_property_name( self::OFFSET ) ],
			'number' => $display_settings['posts_per_page'],
			'orderby' => $display_settings[ $this->get_property_name( self::ORDER_BY ) ],
			'order' => $display_settings[ $this->get_property_name( self::ORDER ) ],
			'avoid_reset_parent' => true,
			'show_child_taxonomy' => 'no',
		];

		if ( $depth && 'yes' === $hierarchical ) {
			$settings['hierarchical'] = 'yes';
			$settings['child_taxonomy_depth'] = $depth - 1;
			$settings['show_child_taxonomy'] = 'yes';
		}

		return $settings;
	}

	public function get_control_args( string $key, bool $is_prefixed ): array {
		$tabs_wrapper = $this->get_query_property_name( self::TABS_WRAPPER );
		$include_tab = $this->get_query_property_name( self::INCLUDE_TAB );
		$exclude_tab = $this->get_query_property_name( self::EXCLUDE_TAB );
		$include_exclude_conditions = $this->get_include_exclude_conditions( $is_prefixed );
		$filter_related_conditions = $this->get_depth_related_filter_conditions( $is_prefixed, false );

		$post_type_key = $is_prefixed ? $this->get_query_property_name( self::POST_TYPE ) : self::POST_TYPE;
		$filter_by_key = $is_prefixed ? $this->get_query_property_name( self::FILTER_BY ) : self::FILTER_BY;
		$hierarchical_key = $is_prefixed ? $this->get_property_name( self::HIERARCHICAL ) : self::HIERARCHICAL;

		$filter_by_parent_term = Utils::format_control_condition( $filter_by_key, '===', self::PARENT );
		$is_hierarchical_term = Utils::format_control_condition( $hierarchical_key, '===', 'yes' );

		$control_options = [
			self::FILTER_BY => [
				'label' => esc_html__( 'Filter By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'show_all',
				'options' => [
					self::SHOW_ALL => esc_html__( 'Show All', 'elementor-pro' ),
					self::MANUAL_SELECTION => esc_html__( 'Manual Selection', 'elementor-pro' ),
				],
				'conditions' => $filter_related_conditions,
			],
			self::PARENT => [
				'label' => esc_html__( 'Parent', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [ 1, 2, 3, 4 ],
				'conditions' => [
					'relation' => 'and',
					'terms' => $this->get_related_tags_conditions( $post_type_key, '!==', [ $filter_by_parent_term ] ),
				],
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
			self::INCLUDE_TAB => [
				'type' => Controls_Manager::TAB,
				'label' => esc_html__( 'Include', 'elementor-pro' ),
				'tabs_wrapper' => $tabs_wrapper,
				'conditions' => $include_exclude_conditions,
			],
			self::EXCLUDE_TAB => [
				'type' => Controls_Manager::TAB,
				'label' => esc_html__( 'Exclude', 'elementor-pro' ),
				'tabs_wrapper' => $tabs_wrapper,
				'conditions' => $include_exclude_conditions,
			],
			self::INCLUDE => [
				'label' => esc_html__( 'Include By', 'elementor-pro' ),
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'label_block' => true,
				'multiple' => true,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_TAX,
					'autocomplete' => [],
				],
				'default' => '',
				'conditions' => $include_exclude_conditions,
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
			self::EXCLUDE => [
				'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'label_block' => true,
				'multiple' => true,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_TAX,
				],
				'default' => '',
				'conditions' => $include_exclude_conditions,
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $exclude_tab,
			],
			self::ORDER_BY => [
				'label' => esc_html__( 'Order By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => self::ORDER_BY_NAME,
				'options' => [
					self::ORDER_BY_NAME => esc_html__( 'Name', 'elementor-pro' ),
					self::ORDER_BY_ID => esc_html__( 'ID', 'elementor-pro' ),
				],
				'separator' => 'before',
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
				'condition' => [],
			],
			self::ORDER => [
				'label' => esc_html__( 'Order', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => self::DESC_ORDER,
				'options' => [
					self::ASC_ORDER => esc_html__( 'ASC', 'elementor-pro' ),
					self::DESC_ORDER => esc_html__( 'DESC', 'elementor-pro' ),
				],
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
				'condition' => [],
			],
			self::AVOID_DUPLICATES => [
				'label' => esc_html__( 'Avoid Duplicates', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'description' => esc_html__( 'Set to Yes to avoid duplicate posts from showing up. This only effects the frontend.', 'elementor-pro' ),
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $exclude_tab,
			],
			self::HIDE_EMPTY => [
				'label' => esc_html__( 'Hide Empty', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'separator' => 'before',
				'condition' => [],
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
			self::OFFSET => [
				'label' => esc_html__( 'Skip Taxonomy', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 0,
				'description' => esc_html__( 'Start grid from chosen taxonomy', 'elementor-pro' ),
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $exclude_tab,
			],
			self::HIERARCHICAL => [
				'label' => esc_html__( 'Filter by depth', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'conditions' => $this->get_depth_related_filter_conditions( $is_prefixed, true ),
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
			self::QUERY_DEPTH => [
				'label' => esc_html__( 'Depth', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '0',
				'options' => [
					'0' => esc_html__( 'All', 'elementor-pro' ),
					'1' => esc_html__( '1', 'elementor-pro' ),
					'2' => esc_html__( '2', 'elementor-pro' ),
					'3' => esc_html__( '3', 'elementor-pro' ),
					'4' => esc_html__( '4', 'elementor-pro' ),
					'5' => esc_html__( '5', 'elementor-pro' ),
					'6' => esc_html__( '6', 'elementor-pro' ),
				],
				'conditions' => $this->get_depth_related_filter_conditions( $is_prefixed, true, [ $is_hierarchical_term ] ),
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
			self::QUERY_ID => [
				'label' => esc_html__( 'Query ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'ai' => [
					'active' => false,
				],
				'description' => esc_html__( 'Give your Query a custom unique id to allow server side filtering', 'elementor-pro' ),
				'separator' => 'before',
				'dynamic' => [
					'active' => true,
				],
				'tabs_wrapper' => $tabs_wrapper,
				'inner_tab' => $include_tab,
			],
		];

		return $control_options[ $key ] ?? $control_options;
	}

	/**
	 * Get settings key names.
	 *
	 * Adds prefix to the desired key.
	 */
	public function get_property_name( string $key ): string {
		return $this->skin_id . '_' . $key;
	}

	/**
	 * Get query settings key names.
	 *
	 * Adds prefix and '_query_' to the desired key.
	 */
	public function get_query_property_name( string $key ): string {
		return $this->get_property_name( 'query_' . $key );
	}

	public static function is_source_type_taxonomy( $source_type ) {
		$available_source_types = self::get_loop_taxonomy_types();

		return in_array( $source_type, $available_source_types, true );
	}

	public static function get_loop_taxonomy_types() {
		return [
			LoopBuilderModule::LOOP_POST_TAXONOMY_SKIN_ID,
			WoocommerceModule::LOOP_PRODUCT_TAXONOMY_SKIN_ID,
		];
	}

	public static function get_default_source_type( $taxonomy_loop_type, $prefix = '' ): string {
		$options = [
			WoocommerceModule::LOOP_PRODUCT_TAXONOMY_SKIN_ID => self::PRODUCT_CATEGORY_TAXONOMY,
			LoopBuilderModule::LOOP_POST_TAXONOMY_SKIN_ID => self::POST_CATEGORY_TAXONOMY,
		];

		return isset( $options[ $taxonomy_loop_type ] )
			? $prefix . $options[ $taxonomy_loop_type ]
			: '';
	}

	public static function get_supported_cpts( $taxonomy_loop_type ) {
		$post_types = array_merge( [ 'post' ], self::get_post_additional_cpts() );
		$options = [
			WoocommerceModule::LOOP_PRODUCT_TAXONOMY_SKIN_ID => [ 'product' ],
			'product' => [ 'product' ],
			LoopBuilderModule::LOOP_POST_TAXONOMY_SKIN_ID => $post_types,
			'post' => $post_types,
		];

		return $options[ $taxonomy_loop_type ] ?? [];
	}

	private function get_include_exclude_conditions( bool $is_prefixed = false ): array {
		$post_type_name = $is_prefixed ? $this->get_query_property_name( self::POST_TYPE ) : self::POST_TYPE;
		$filter_by_key = $is_prefixed ? $this->get_query_property_name( self::FILTER_BY ) : self::FILTER_BY;

		$manual_selection_terms = Utils::format_control_condition( $filter_by_key, '===', self::MANUAL_SELECTION );

		return [
			'relation' => 'or',
			'terms' => $this->get_related_tags_conditions( $post_type_name, '===', [ $manual_selection_terms ] ),
		];
	}

	private function get_depth_related_filter_conditions( $is_prefixed, $should_add_hierarchy_condition, $extra_terms = [] ) {
		$filter_by_key = $is_prefixed ? $this->get_query_property_name( self::FILTER_BY ) : self::FILTER_BY;
		$post_type_key = $is_prefixed ? $this->get_query_property_name( self::POST_TYPE ) : self::POST_TYPE;

		$conditions = [
			'relation' => 'and',
			'terms' => $this->get_related_tags_conditions( $post_type_key, '!==' ),
		];

		if ( $should_add_hierarchy_condition ) {
			$conditions['terms'][] = Utils::format_control_condition( $filter_by_key, '!==', self::MANUAL_SELECTION );
		}

		$conditions['terms'] = array_merge( $conditions['terms'], $extra_terms );

		return $conditions;
	}

	private function get_related_tags_conditions( $name, $operator, $extra_terms = [] ) {
		$tags = [ self::POST_TAG_TAXONOMY, self::PRODUCT_TAG_TAXONOMY ];

		return $this->get_related_taxonomy_condition_terms( $tags, $name, $operator, $extra_terms );
	}

	private function get_related_taxonomy_condition_terms( $value_options, $name, $operator, $extra_terms = [] ) {
		$terms = [];

		foreach ( $value_options as $value ) {
			$terms[] = Utils::format_control_condition( $name, $operator, $value );
		}

		return array_merge( $terms, $extra_terms );
	}

	public static function is_loop_taxonomy(): bool {
		global $wp_query;

		return $wp_query->is_loop_taxonomy ?? false;
	}

	public static function is_loop_taxonomy_strict(): bool {
		global $wp_query;

		return self::is_loop_taxonomy() && ( $wp_query->loop_term ?? false );
	}

	private static function get_post_additional_cpts() {
		$post_types = get_post_types( [
			'public'   => true,
			'_builtin' => false,
		] );

		return array_filter( $post_types, function( $post_type ) {
			return ! in_array( $post_type, [ 'product', 'e-landing-page', 'elementor_library' ] );
		} );
	}
}
