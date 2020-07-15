<?php
namespace ElementorPro\Modules\QueryControl\Controls;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\QueryControl\Module as Query_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Group_Control_Query extends Group_Control_Base {

	protected static $presets;
	protected static $fields;

	public static function get_type() {
		return 'query-group';
	}

	protected function init_args( $args ) {
		parent::init_args( $args );
		$args = $this->get_args();
		static::$fields = $this->init_fields_by_name( $args['name'] );
	}

	protected function init_fields() {
		$args = $this->get_args();

		return $this->init_fields_by_name( $args['name'] );
	}

	/**
	 * Build the group-controls array
	 * Note: this method completely overrides any settings done in Group_Control_Posts
	 * @param string $name
	 *
	 * @return array
	 */
	protected function init_fields_by_name( $name ) {
		$fields = [];

		$name .= '_';

		$fields['post_type'] = [
			'label' => __( 'Source', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'by_id' => __( 'Manual Selection', 'elementor-pro' ),
				'current_query' => __( 'Current Query', 'elementor-pro' ),
			],
		];

		$fields['query_args'] = [
			'type' => Controls_Manager::TABS,
		];

		$tabs_wrapper = $name . 'query_args';
		$include_wrapper = $name . 'query_include';
		$exclude_wrapper = $name . 'query_exclude';

		$fields['query_include'] = [
			'type' => Controls_Manager::TAB,
			'label' => __( 'Include', 'elementor-pro' ),
			'tabs_wrapper' => $tabs_wrapper,
			'condition' => [
				'post_type!' => [
					'current_query',
					'by_id',
				],
			],
		];

		$fields['posts_ids'] = [
			'label' => __( 'Search & Select', 'elementor-pro' ),
			'type' => Query_Module::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'multiple' => true,
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_POST,
			],
			'condition' => [
				'post_type' => 'by_id',
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $include_wrapper,
			'export' => false,
		];

		$fields['include'] = [
			'label' => __( 'Include By', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT2,
			'multiple' => true,
			'options' => [
				'terms' => __( 'Term', 'elementor-pro' ),
				'authors' => __( 'Author', 'elementor-pro' ),
			],
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'label_block' => true,
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $include_wrapper,
		];

		$fields['include_term_ids'] = [
			'label' => __( 'Term', 'elementor-pro' ),
			'description' => __( 'Terms are items in a taxonomy. The available taxonomies are: Categories, Tags, Formats and custom taxonomies.', 'elementor-pro' ),
			'type' => Query_Module::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'multiple' => true,
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_CPT_TAX,
				'display' => 'detailed',
			],
			'group_prefix' => $name,
			'condition' => [
				'include' => 'terms',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $include_wrapper,
		];

		$fields['include_authors'] = [
			'label' => __( 'Author', 'elementor-pro' ),
			'label_block' => true,
			'type' => Query_Module::QUERY_CONTROL_ID,
			'multiple' => true,
			'default' => [],
			'options' => [],
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_AUTHOR,
			],
			'condition' => [
				'include' => 'authors',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $include_wrapper,
			'export' => false,
		];

		$fields['query_exclude'] = [
			'type' => Controls_Manager::TAB,
			'label' => __( 'Exclude', 'elementor-pro' ),
			'tabs_wrapper' => $tabs_wrapper,
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
		];

		$fields['exclude'] = [
			'label' => __( 'Exclude By', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT2,
			'multiple' => true,
			'options' => [
				'current_post' => __( 'Current Post', 'elementor-pro' ),
				'manual_selection' => __( 'Manual Selection', 'elementor-pro' ),
				'terms' => __( 'Term', 'elementor-pro' ),
				'authors' => __( 'Author', 'elementor-pro' ),
			],
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'label_block' => true,
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
		];

		$fields['exclude_ids'] = [
			'label' => __( 'Search & Select', 'elementor-pro' ),
			'type' => Query_Module::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'multiple' => true,
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_POST,
			],
			'condition' => [
				'exclude' => 'manual_selection',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
			'export' => false,
		];

		$fields['exclude_term_ids'] = [
			'label' => __( 'Term', 'elementor-pro' ),
			'type' => Query_Module::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'multiple' => true,
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_CPT_TAX,
				'display' => 'detailed',
			],
			'group_prefix' => $name,
			'condition' => [
				'exclude' => 'terms',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
			'export' => false,
		];

		$fields['exclude_authors'] = [
			'label' => __( 'Author', 'elementor-pro' ),
			'type' => Query_Module::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'multiple' => true,
			'autocomplete' => [
				'object' => Query_Module::QUERY_OBJECT_AUTHOR,
				'display' => 'detailed',
			],
			'condition' => [
				'exclude' => 'authors',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
			'export' => false,
		];

		$fields['avoid_duplicates'] = [
			'label' => __( 'Avoid Duplicates', 'elementor-pro' ),
			'type' => Controls_Manager::SWITCHER,
			'default' => '',
			'description' => __( 'Set to Yes to avoid duplicate posts from showing up. This only effects the frontend.', 'elementor-pro' ),
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
		];

		$fields['offset'] = [
			'label' => __( 'Offset', 'elementor-pro' ),
			'type' => Controls_Manager::NUMBER,
			'default' => 0,
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'description' => __( 'Use this setting to skip over posts (e.g. \'2\' to skip over 2 posts).', 'elementor-pro' ),
			'tabs_wrapper' => $tabs_wrapper,
			'inner_tab' => $exclude_wrapper,
		];

		$fields['select_date'] = [
			'label' => __( 'Date', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'post_type' => '',
			'options' => [
				'anytime' => __( 'All', 'elementor-pro' ),
				'today' => __( 'Past Day', 'elementor-pro' ),
				'week' => __( 'Past Week', 'elementor-pro' ),
				'month'  => __( 'Past Month', 'elementor-pro' ),
				'quarter' => __( 'Past Quarter', 'elementor-pro' ),
				'year' => __( 'Past Year', 'elementor-pro' ),
				'exact' => __( 'Custom', 'elementor-pro' ),
			],
			'default' => 'anytime',
			'multiple' => false,
			'condition' => [
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'separator' => 'before',
		];

		$fields['date_before'] = [
			'label' => __( 'Before', 'elementor-pro' ),
			'type' => Controls_Manager::DATE_TIME,
			'post_type' => '',
			'label_block' => false,
			'multiple' => false,
			'placeholder' => __( 'Choose', 'elementor-pro' ),
			'condition' => [
				'select_date' => 'exact',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'description' => __( 'Setting a ‘Before’ date will show all the posts published until the chosen date (inclusive).', 'elementor-pro' ),
		];

		$fields['date_after'] = [
			'label' => __( 'After', 'elementor-pro' ),
			'type' => Controls_Manager::DATE_TIME,
			'post_type' => '',
			'label_block' => false,
			'multiple' => false,
			'placeholder' => __( 'Choose', 'elementor-pro' ),
			'condition' => [
				'select_date' => 'exact',
				'post_type!' => [
					'by_id',
					'current_query',
				],
			],
			'description' => __( 'Setting an ‘After’ date will show all the posts published since the chosen date (inclusive).', 'elementor-pro' ),
		];

		$fields['orderby'] = [
			'label' => __( 'Order By', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'default' => 'post_date',
			'options' => [
				'post_date' => __( 'Date', 'elementor-pro' ),
				'post_title' => __( 'Title', 'elementor-pro' ),
				'menu_order' => __( 'Menu Order', 'elementor-pro' ),
				'rand' => __( 'Random', 'elementor-pro' ),
			],
			'condition' => [
				'post_type!' => 'current_query',
			],
		];

		$fields['order'] = [
			'label' => __( 'Order', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'default' => 'desc',
			'options' => [
				'asc' => __( 'ASC', 'elementor-pro' ),
				'desc' => __( 'DESC', 'elementor-pro' ),
			],
			'condition' => [
				'post_type!' => 'current_query',
			],
		];

		$fields['posts_per_page'] = [
			'label' => __( 'Posts Per Page', 'elementor-pro' ),
			'type' => Controls_Manager::NUMBER,
			'default' => 3,
			'condition' => [
				'post_type!' => 'current_query',
			],
		];

		$fields['ignore_sticky_posts'] = [
			'label' => __( 'Ignore Sticky Posts', 'elementor-pro' ),
			'type' => Controls_Manager::SWITCHER,
			'default' => 'yes',
			'condition' => [
				'post_type' => 'post',
			],
			'description' => __( 'Sticky-posts ordering is visible on frontend only', 'elementor-pro' ),
		];

		$fields['query_id'] = [
			'label' => __( 'Query ID', 'elementor-pro' ),
			'type' => Controls_Manager::TEXT,
			'default' => '',
			'description' => __( 'Give your Query a custom unique id to allow server side filtering', 'elementor-pro' ),
			'separator' => 'before',
		];

		static::init_presets();

		return $fields;
	}

	/**
	 * Presets: filter controls subsets to be be used by the specific Group_Control_Query instance.
	 *
	 * Possible values:
	 * 'full' : (default) all presets
	 * 'include' : the 'include' tab - by id, by taxonomy, by author
	 * 'exclude': the 'exclude' tab - by id, by taxonomy, by author
	 * 'advanced_exclude': extend the 'exclude' preset with 'avoid-duplicates' & 'offset'
	 * 'date': date query controls
	 * 'pagination': posts per-page
	 * 'order': sort & ordering controls
	 * 'query_id': allow saving a specific query for future usage.
	 *
	 * Usage:
	 * full: build a Group_Controls_Query with all possible controls,
	 * when 'full' is passed, the Group_Controls_Query will ignore all other preset values.
	 * $this->add_group_control(
	 * Group_Control_Query::get_type(),
	 * [
	 * ...
	 * 'presets' => [ 'full' ],
	 *  ...
	 *  ] );
	 *
	 * Subset: build a Group_Controls_Query with subset of the controls,
	 * in the following example, the Query controls will set only the 'include' & 'date' query args.
	 * $this->add_group_control(
	 * Group_Control_Query::get_type(),
	 * [
	 * ...
	 * 'presets' => [ 'include', 'date' ],
	 *  ...
	 *  ] );
	 */
	protected static function init_presets() {

		$tabs = [
			'query_args',
			'query_include',
			'query_exclude',
		];

		static::$presets['include'] = array_merge( $tabs, [
			'include',
			'include_ids',
			'include_term_ids',
			'include_authors',
		] );

		static::$presets['exclude'] = array_merge( $tabs, [
			'exclude',
			'exclude_ids',
			'exclude_term_ids',
			'exclude_authors',
		] );

		static::$presets['advanced_exclude'] = array_merge( static::$presets['exclude'], [
			'avoid_duplicates',
			'offset',
		] );

		static::$presets['date'] = [
			'select_date',
			'date_before',
			'date_after',
		];

		static::$presets['pagination'] = [
			'posts_per_page',
			'ignore_sticky_posts',
		];

		static::$presets['order'] = [
			'orderby',
			'order',
		];

		static::$presets['query_id'] = [
			'query_id',
		];
	}

	private function filter_by_presets( $presets, $fields ) {

		if ( in_array( 'full', $presets, true ) ) {
			return $fields;
		}

		$control_ids = [];
		foreach ( static::$presets as $key => $preset ) {
			$control_ids = array_merge( $control_ids, $preset );
		}

		foreach ( $presets as $preset ) {
			if ( array_key_exists( $preset, static::$presets ) ) {
				$control_ids = array_diff( $control_ids, static::$presets[ $preset ] );
			}
		}

		foreach ( $control_ids as $remove ) {
			unset( $fields[ $remove ] );
		}

		return $fields;

	}

	protected function prepare_fields( $fields ) {

		$args = $this->get_args();

		if ( ! empty( $args['presets'] ) ) {
			$fields = $this->filter_by_presets( $args['presets'], $fields );
		}

		$post_type_args = [];
		if ( ! empty( $args['post_type'] ) ) {
			$post_type_args['post_type'] = $args['post_type'];
		}

		$post_types = Utils::get_public_post_types( $post_type_args );

		$fields['post_type']['options'] = array_merge( $post_types, $fields['post_type']['options'] );
		$fields['post_type']['default'] = key( $post_types );
		$fields['posts_ids']['object_type'] = array_keys( $post_types );

		//skip parent, go directly to grandparent
		return Group_Control_Base::prepare_fields( $fields );
	}

	protected function get_child_default_args() {
		$args = parent::get_child_default_args();
		$args['presets'] = [ 'full' ];

		return $args;
	}

	protected function get_default_options() {
		return [
			'popover' => false,
		];
	}
}
