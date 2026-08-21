<?php

namespace ElementorPro\Modules\CollectionLoop\Query\TemplateTypes;

use Elementor\Modules\AtomicWidgets\Controls\Types\Date_Time_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Chips_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Filter_Repeater_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Date_Time_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Array_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Filter_Array_Prop_Type;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Query_Filters;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Post_Template_Type extends Template_Type_Base {

	const ID = 'post';

	const SOURCE_POST = 'post';
	const SOURCE_PAGE = 'page';
	const SOURCE_MANUAL = 'manual';
	const SOURCE_CURRENT_QUERY = 'current_query';

	const NON_POST_TYPE_SOURCES = [ self::SOURCE_MANUAL, self::SOURCE_CURRENT_QUERY ];

	const INCLUDE_FILTER_TYPES = [
		Query_Filters::TYPE_TERMS,
		Query_Filters::TYPE_AUTHORS,
	];

	const EXCLUDE_FILTER_TYPES = [
		Query_Filters::TYPE_CURRENT_POST,
		Query_Filters::TYPE_MANUAL_SELECTION,
		Query_Filters::TYPE_TERMS,
		Query_Filters::TYPE_AUTHORS,
	];

	public function get_id(): string {
		return self::ID;
	}

	public function get_label(): string {
		return esc_html__( 'Posts', 'elementor-pro' );
	}

	public static function get_post_type_sources(): array {
		return Utils::get_public_post_types();
	}

	public static function get_post_like_sources(): array {
		return array_keys( self::get_post_type_sources() );
	}

	public static function get_source_options(): array {
		return array_merge( self::get_post_like_sources(), self::NON_POST_TYPE_SOURCES );
	}

	public function get_schema_fragment(): array {
		$post_like_sources    = self::get_post_like_sources();
		$is_post_template     = $this->template_type_clause();
		$source_post_like_dep = $this->source_in_post_like_dependency_clause( $post_like_sources );

		$post_like_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( $source_post_like_dep )
			->where( $is_post_template )
			->get();

		$exact_date_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path'     => [ 'query', 'select_date' ],
				'value'    => Loop_Query::SELECT_DATE_EXACT,
				'effect'   => 'hide',
			] )
			->where( $source_post_like_dep )
			->where( $is_post_template )
			->get();

		$post_only_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path'     => [ 'query', 'source' ],
				'value'    => self::SOURCE_POST,
				'effect'   => 'hide',
			] )
			->where( $is_post_template )
			->get();

		$manual_only_dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path'     => [ 'query', 'source' ],
				'value'    => self::SOURCE_MANUAL,
				'effect'   => 'hide',
			] )
			->where( $is_post_template )
			->get();

		$post_template_only = Dependency_Manager::make()
			->where( $is_post_template )
			->get();

		$orderable_sources      = array_merge( $post_like_sources, [ self::SOURCE_MANUAL ] );
		$orderby_dependencies   = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'in',
				'path'     => [ 'query', 'source' ],
				'value'    => $orderable_sources,
				'effect'   => 'hide',
			] )
			->where( $is_post_template )
			->get();

		return [
			'source'              => String_Prop_Type::make()
				->enum( self::get_source_options() )
				->default( self::SOURCE_POST )
				->set_dependencies( $post_template_only ),
			'selection'           => Query_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $manual_only_dependencies ),
			'include_filters'     => Query_Filter_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $post_like_dependencies ),
			'exclude_filters'     => Query_Filter_Array_Prop_Type::make()
				->default( [] )
				->set_dependencies( $post_like_dependencies ),
			'select_date'         => String_Prop_Type::make()
				->enum( Loop_Query::SELECT_DATE_OPTIONS )
				->default( Loop_Query::SELECT_DATE_ANYTIME )
				->set_dependencies( $post_like_dependencies ),
			'date_before'         => Date_Time_Prop_Type::make()
				->set_dependencies( $exact_date_dependencies ),
			'date_after'          => Date_Time_Prop_Type::make()
				->set_dependencies( $exact_date_dependencies ),
			'orderby'             => String_Prop_Type::make()
				->enum( Loop_Query::ORDERBY_OPTIONS )
				->default( Loop_Query::ORDERBY_POST_DATE )
				->set_dependencies( $orderby_dependencies ),
			'order'               => String_Prop_Type::make()
				->enum( Loop_Query::ORDER_OPTIONS )
				->default( Loop_Query::ORDER_DESC )
				->set_dependencies( $orderby_dependencies ),
			'ignore_sticky_posts' => Boolean_Prop_Type::make()
				->default( Loop_Query::DEFAULT_IGNORE_STICKY_POSTS )
				->set_dependencies( $post_only_dependencies ),
		];
	}

	public function get_query_section_items(): array {
		$shared_key_config = $this->build_filter_key_config();

		$source_control = Select_Control::bind_to( 'source' )
			->set_label( __( 'Source', 'elementor-pro' ) )
			->set_meta( [ 'layout' => 'full' ] )
			->set_options( $this->build_source_select_options() );

		$selection_control = Query_Chips_Control::bind_to( 'selection' )
			->set_label( __( 'Selection', 'elementor-pro' ) )
			->set_query_options( [
				'url'    => '/elementor/v1/post',
				'params' => [
					'included_types'    => array_keys( self::get_post_type_sources() ),
					'search_in_content' => true,
				],
			] )
			->set_placeholder( __( 'Search', 'elementor-pro' ) )
			->set_min_input_length( 0 );

		$include_control = Query_Filter_Repeater_Control::bind_to( 'include_filters' )
			->set_label( __( 'Include filter', 'elementor-pro' ) )
			->set_allowed_keys( self::INCLUDE_FILTER_TYPES )
			->set_key_config( $shared_key_config )
			->set_meta( [ 'layout' => 'full' ] );

		$exclude_control = Query_Filter_Repeater_Control::bind_to( 'exclude_filters' )
			->set_label( __( 'Exclude filter', 'elementor-pro' ) )
			->set_allowed_keys( self::EXCLUDE_FILTER_TYPES )
			->set_key_config( $shared_key_config )
			->set_meta( [ 'layout' => 'full' ] );

		$select_date_control = Select_Control::bind_to( 'select_date' )
			->set_label( __( 'Date', 'elementor-pro' ) )
			->set_meta( [ 'topDivider' => true ] )
			->set_options( [
				[
					'value' => Loop_Query::SELECT_DATE_ANYTIME,
					'label' => __( 'All', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_TODAY,
					'label' => __( 'Past day', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_WEEK,
					'label' => __( 'Past week', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_MONTH,
					'label' => __( 'Past month', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_QUARTER,
					'label' => __( 'Past quarter', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_YEAR,
					'label' => __( 'Past year', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::SELECT_DATE_EXACT,
					'label' => __( 'Custom', 'elementor-pro' ),
				],
			] );

		$date_before_control = Date_Time_Control::bind_to( 'date_before' )->set_label( __( 'Before', 'elementor-pro' ) );
		$date_after_control  = Date_Time_Control::bind_to( 'date_after' )->set_label( __( 'After', 'elementor-pro' ) );

		$orderby_control = Select_Control::bind_to( 'orderby' )
			->set_label( __( 'Order by', 'elementor-pro' ) )
			->set_options( [
				[
					'value' => Loop_Query::ORDERBY_POST_DATE,
					'label' => __( 'Date', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::ORDERBY_POST_TITLE,
					'label' => __( 'Title', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::ORDERBY_MENU_ORDER,
					'label' => __( 'Menu order', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::ORDERBY_MODIFIED,
					'label' => __( 'Last modified', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::ORDERBY_COMMENT_COUNT,
					'label' => __( 'Comment count', 'elementor-pro' ),
				],
				[
					'value' => Loop_Query::ORDERBY_RAND,
					'label' => __( 'Random', 'elementor-pro' ),
				],
			] );

		$order_control = $this->build_order_toggle_control( 'order' );

		$ignore_sticky_control = Switch_Control::bind_to( 'ignore_sticky_posts' )
			->set_label( __( 'Ignore sticky posts', 'elementor-pro' ) )
			->set_meta( [ 'topDivider' => true ] );

		return [
			$source_control,
			$selection_control,
			$include_control,
			$exclude_control,
			$select_date_control,
			$date_before_control,
			$date_after_control,
			$orderby_control,
			$order_control,
			$ignore_sticky_control,
		];
	}

	public function build_query_args( array $query_settings ): array {
		$source = $this->setting( $query_settings, 'source' ) ?? self::SOURCE_POST;

		if ( self::SOURCE_CURRENT_QUERY === $source ) {
			return $this->build_current_query_args( $query_settings );
		}

		$per_page = Loop_Query::clamp_posts_per_page( $this->setting( $query_settings, 'posts_per_page' ) );

		$args = [
			'post_type'      => self::SOURCE_MANUAL === $source ? 'any' : $source,
			'posts_per_page' => $per_page,
			'post_status'    => 'publish',
			'orderby'        => $this->setting( $query_settings, 'orderby' ) ?? Loop_Query::ORDERBY_POST_DATE,
			'order'          => $this->setting( $query_settings, 'order' ) ?? Loop_Query::ORDER_DESC,
		];

		if ( self::SOURCE_MANUAL === $source ) {
			$all_ids                     = $this->build_post_in_from_selection( $query_settings );
			$args['post__in']            = array_slice( $all_ids, 0, $per_page );
			$args['ignore_sticky_posts'] = 1;

			return $args;
		}

		$date_query = $this->build_date_query( $query_settings );
		if ( ! empty( $date_query ) ) {
			$args['date_query'] = $date_query;
		}

		if ( self::SOURCE_POST === $source ) {
			$ignore_sticky               = $this->setting( $query_settings, 'ignore_sticky_posts' ) ?? Loop_Query::DEFAULT_IGNORE_STICKY_POSTS;
			$args['ignore_sticky_posts'] = $ignore_sticky ? 1 : 0;
		} else {
			$args['ignore_sticky_posts'] = 1;
		}

		$include_filters = $this->normalize_filters( $this->setting( $query_settings, 'include_filters' ) );
		$exclude_filters = $this->normalize_filters( $this->setting( $query_settings, 'exclude_filters' ) );

		$args = Query_Filters::apply( $args, $include_filters, Query_Filters::MODE_INCLUDE );
		$args = Query_Filters::apply( $args, $exclude_filters, Query_Filters::MODE_EXCLUDE );

		return $args;
	}

	private function source_in_post_like_dependency_clause( array $post_like_sources ): array {
		return [
			'operator' => 'in',
			'path'     => [ 'query', 'source' ],
			'value'    => $post_like_sources,
			'effect'   => 'hide',
		];
	}

	public function build_source_select_options(): array {
		$options = [];

		foreach ( self::get_post_type_sources() as $slug => $label ) {
			$options[] = [
				'value' => $slug,
				'label' => $label,
			];
		}

		$options[] = [
			'value' => self::SOURCE_MANUAL,
			'label' => __( 'Manual selection', 'elementor-pro' ),
		];

		$options[] = [
			'value' => self::SOURCE_CURRENT_QUERY,
			'label' => __( 'Current query', 'elementor-pro' ),
		];

		return $options;
	}

	private function build_filter_key_config(): array {
		$post_like_sources = self::get_post_like_sources();
		$post_type_slugs   = array_keys( self::get_post_type_sources() );

		return [
			Query_Filters::TYPE_TERMS            => [
				'label'         => __( 'Term', 'elementor-pro' ),
				'queryEndpoint' => [
					'url'    => '/elementor/v1/term',
					'params' => [ 'taxonomies' => $this->collect_taxonomies_for_post_types( $post_type_slugs ) ],
				],
				'visibleWhen'   => [
					'path' => [ 'query', 'source' ],
					'in'   => $post_like_sources,
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
						'included_types'    => $post_type_slugs,
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

	private function collect_taxonomies_for_post_types( array $post_type_slugs ): array {
		$taxonomies = [];

		foreach ( $post_type_slugs as $slug ) {
			foreach ( get_object_taxonomies( $slug, 'names' ) as $taxonomy ) {
				$taxonomies[ $taxonomy ] = true;
			}
		}

		return array_keys( $taxonomies );
	}

	private function build_post_in_from_selection( array $query_settings ): array {
		$ids = $this->selection_ids_to_int_list( $this->setting( $query_settings, 'selection' ) );

		return empty( $ids ) ? [ Loop_Query::EMPTY_QUERY_SENTINEL_ID ] : $ids;
	}

	private function build_date_query( array $query_settings ): array {
		$select_date = $this->setting( $query_settings, 'select_date' ) ?? Loop_Query::SELECT_DATE_ANYTIME;

		if ( Loop_Query::SELECT_DATE_ANYTIME === $select_date ) {
			return [];
		}

		if ( Loop_Query::SELECT_DATE_EXACT === $select_date ) {
			return $this->build_exact_date_query( $query_settings );
		}

		if ( isset( Loop_Query::SELECT_DATE_OFFSET_MAP[ $select_date ] ) ) {
			return [ 'after' => Loop_Query::SELECT_DATE_OFFSET_MAP[ $select_date ] ];
		}

		return [];
	}

	private function build_exact_date_query( array $query_settings ): array {
		$date_query = [];
		$after      = $this->date_setting( $query_settings, 'date_after' );
		$before     = $this->date_setting( $query_settings, 'date_before' );

		if ( null !== $after ) {
			$date_query['after'] = $after;
		}

		if ( null !== $before ) {
			$date_query['before'] = $before;
		}

		if ( empty( $date_query ) ) {
			return [];
		}

		$date_query['inclusive'] = true;

		return $date_query;
	}

	private function date_setting( array $query_settings, string $key ): ?string {
		$value = $this->setting( $query_settings, $key );

		return is_string( $value ) && '' !== $value ? $value : null;
	}
}
