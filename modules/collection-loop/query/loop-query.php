<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Modules\AtomicWidgets\Controls\Types\Number_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Post_Template_Type;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Registry;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query {
	const SOURCE_POST = Post_Template_Type::SOURCE_POST;
	const SOURCE_PAGE = Post_Template_Type::SOURCE_PAGE;
	const SOURCE_MANUAL = Post_Template_Type::SOURCE_MANUAL;
	const SOURCE_CURRENT_QUERY = Post_Template_Type::SOURCE_CURRENT_QUERY;

	const NON_POST_TYPE_SOURCES = Post_Template_Type::NON_POST_TYPE_SOURCES;

	const DEFAULT_POSTS_PER_PAGE = 3;
	const DEFAULT_IGNORE_STICKY_POSTS = true;
	const MIN_POSTS_PER_PAGE = 1;
	const MAX_POSTS_PER_PAGE = 100;
	const EMPTY_QUERY_SENTINEL_ID = 0;

	const INCLUDE_FILTER_TYPES = Post_Template_Type::INCLUDE_FILTER_TYPES;
	const EXCLUDE_FILTER_TYPES = Post_Template_Type::EXCLUDE_FILTER_TYPES;

	const SELECT_DATE_ANYTIME = 'anytime';
	const SELECT_DATE_TODAY = 'today';
	const SELECT_DATE_WEEK = 'week';
	const SELECT_DATE_MONTH = 'month';
	const SELECT_DATE_QUARTER = 'quarter';
	const SELECT_DATE_YEAR = 'year';
	const SELECT_DATE_EXACT = 'exact';

	const SELECT_DATE_OPTIONS = [
		self::SELECT_DATE_ANYTIME,
		self::SELECT_DATE_TODAY,
		self::SELECT_DATE_WEEK,
		self::SELECT_DATE_MONTH,
		self::SELECT_DATE_QUARTER,
		self::SELECT_DATE_YEAR,
		self::SELECT_DATE_EXACT,
	];

	const SELECT_DATE_OFFSET_MAP = [
		self::SELECT_DATE_TODAY   => '-1 day',
		self::SELECT_DATE_WEEK    => '-1 week',
		self::SELECT_DATE_MONTH   => '-1 month',
		self::SELECT_DATE_QUARTER => '-3 month',
		self::SELECT_DATE_YEAR    => '-1 year',
	];

	const ORDERBY_POST_DATE = 'post_date';
	const ORDERBY_POST_TITLE = 'post_title';
	const ORDERBY_MENU_ORDER = 'menu_order';
	const ORDERBY_MODIFIED = 'modified';
	const ORDERBY_COMMENT_COUNT = 'comment_count';
	const ORDERBY_RAND = 'rand';

	const ORDERBY_OPTIONS = [
		self::ORDERBY_POST_DATE,
		self::ORDERBY_POST_TITLE,
		self::ORDERBY_MENU_ORDER,
		self::ORDERBY_MODIFIED,
		self::ORDERBY_COMMENT_COUNT,
		self::ORDERBY_RAND,
	];

	const ORDER_ASC = 'asc';
	const ORDER_DESC = 'desc';
	const ORDER_OPTIONS = [ self::ORDER_ASC, self::ORDER_DESC ];

	public static function get_post_type_sources(): array {
		return Post_Template_Type::get_post_type_sources();
	}

	public static function get_post_like_sources(): array {
		return Post_Template_Type::get_post_like_sources();
	}

	public static function get_source_options(): array {
		return Post_Template_Type::get_source_options();
	}

	public static function clamp_posts_per_page( $value ): int {
		$int = (int) ( $value ?? self::DEFAULT_POSTS_PER_PAGE );

		return min( self::MAX_POSTS_PER_PAGE, max( self::MIN_POSTS_PER_PAGE, $int ) );
	}

	public static function get_schema(): array {
		$registry = Template_Type_Registry::instance();

		$schema = [
			'template_type'  => String_Prop_Type::make()
				->enum( $registry->get_ids() )
				->default( $registry->get_default_id() ),
			'posts_per_page' => Number_Prop_Type::make()
				->default( self::DEFAULT_POSTS_PER_PAGE ),
			'query_id'       => String_Prop_Type::make()->default( '' ),
		];

		foreach ( $registry->all() as $template_type ) {
			$fragment   = $template_type->get_schema_fragment();
			$collisions = array_intersect_key( $fragment, $schema );

			if ( ! empty( $collisions ) ) {
				$fragment = array_diff_key( $fragment, $collisions );
			}

			$schema = array_merge( $schema, $fragment );
		}

		return Non_Overridable_Props::apply_to_schema( $schema );
	}

	public static function prop_type(): Loop_Query_Prop_Type {
		return Loop_Query_Prop_Type::make();
	}

	public static function query_section_items(): array {
		$registry = Template_Type_Registry::instance();
		$items    = [];

		$items[] = self::build_template_type_select( $registry );

		foreach ( $registry->all() as $template_type ) {
			$items = array_merge( $items, $template_type->get_query_section_items() );
		}

		$items[] = Number_Control::bind_to( 'posts_per_page' )
			->set_label( __( 'Items per page', 'elementor-pro' ) )
			->set_min( self::MIN_POSTS_PER_PAGE )
			->set_max( self::MAX_POSTS_PER_PAGE )
			->set_meta( [ 'topDivider' => true ] );

		$items[] = Text_Control::bind_to( 'query_id' )
			->set_label( __( 'Query ID', 'elementor-pro' ) )
			->set_description( __( 'Give your query a custom unique ID to allow server side filtering.', 'elementor-pro' ) )
			->set_meta( [ 'topDivider' => true ] );

		return $items;
	}

	private static function build_template_type_select( Template_Type_Registry $registry ): Select_Control {
		$options = [];

		foreach ( $registry->all() as $template_type ) {
			$options[] = [
				'value' => $template_type->get_id(),
				'label' => $template_type->get_label(),
			];
		}

		return Select_Control::bind_to( 'template_type' )
			->set_label( __( 'Template type', 'elementor-pro' ) )
			->set_meta( [ 'layout' => 'full' ] )
			->set_options( $options );
	}
}
