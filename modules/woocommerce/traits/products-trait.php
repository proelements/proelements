<?php
namespace ElementorPro\Modules\Woocommerce\Traits;

use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Query;

trait Products_Trait {

	private $product_query_types = [
		'cross_sells',
		'related_products',
		'upsells',
	];

	private $product_query_controls_to_hide = [
		'avoid_duplicates',
		'date_after',
		'date_before',
		'exclude',
		'exclude_authors',
		'exclude_ids',
		'exclude_term_ids',
		'include',
		'include_authors',
		'include_term_ids',
		'offset',
		'query_exclude',
		'query_include',
		'select_date',
	];

	private $product_query_group_control_name;

	private $product_query_control_args;

	private $product_query_post_type_control_id;

	/**
	 * Get Product Query Fields Options
	 *
	 * Returns an array of options for controls in the Query group control specific for products-related queries.
	 *
	 * @since 3.8.0
	 *
	 * @return array
	 */
	private function get_query_fields_options() {
		return [
			'post_type' => [
				'default' => 'product',
				'options' => [
					'current_query' => esc_html__( 'Current Query', 'elementor-pro' ),
					'product' => esc_html__( 'Latest Products', 'elementor-pro' ),
					'sale' => esc_html__( 'Sale', 'elementor-pro' ),
					'featured' => esc_html__( 'Featured', 'elementor-pro' ),
					'by_id' => _x( 'Manual Selection', 'Posts Query Control', 'elementor-pro' ),
					'related_products' => esc_html__( 'Related Products', 'elementor-pro' ),
					'upsells' => esc_html__( 'Upsells', 'elementor-pro' ),
					'cross_sells' => esc_html__( 'Cross-Sells', 'elementor-pro' ),
				],
			],
			'orderby' => [
				'default' => 'date',
				'options' => [
					'date' => esc_html__( 'Date', 'elementor-pro' ),
					'title' => esc_html__( 'Title', 'elementor-pro' ),
					'price' => esc_html__( 'Price', 'elementor-pro' ),
					'popularity' => esc_html__( 'Popularity', 'elementor-pro' ),
					'rating' => esc_html__( 'Rating', 'elementor-pro' ),
					'rand' => esc_html__( 'Random', 'elementor-pro' ),
					'menu_order' => esc_html__( 'Menu Order', 'elementor-pro' ),
				],
			],
			'exclude' => [
				'options' => [
					'current_post' => esc_html__( 'Current Post', 'elementor-pro' ),
					'manual_selection' => esc_html__( 'Manual Selection', 'elementor-pro' ),
					'terms' => esc_html__( 'Term', 'elementor-pro' ),
				],
			],
			'include' => [
				'options' => [
					'terms' => esc_html__( 'Term', 'elementor-pro' ),
				],
			],
		];
	}

	private function init_query_settings( $name ) {
		$this->product_query_group_control_name = $name;
		$this->product_query_control_args = $this->get_query_control_args();
		$this->product_query_post_type_control_id = $this->get_query_post_type_control_id();
	}

	/**
	 * @return array
	 */
	private function get_query_control_args() {
		$args = [
			'name' => $this->product_query_group_control_name,
			'post_type' => 'product',
			'presets' => [ 'include', 'exclude', 'order' ],
			'fields_options' => $this->get_query_fields_options(),
			'exclude' => [
				'posts_per_page',
				'exclude_authors',
				'authors',
				'offset',
				'related_fallback',
				'related_ids',
				'query_id',
				'avoid_duplicates',
				'ignore_sticky_posts',
			],
		];

		$args['fields_options'] = array_merge( $args['fields_options'], $this->get_query_exclude_conditions() );

		return $args;
	}

	private function get_query_exclude_conditions() {
		$fields = [];
		foreach ( $this->product_query_controls_to_hide as $control_name ) {
			$fields = $this->add_query_not_supported_types( $control_name, $fields );
		}

		return $fields;
	}

	private function add_query_not_supported_types( $control_name, $fields ) {
		foreach ( $this->product_query_types as $query_type ) {
			$fields[ $control_name ]['condition']['post_type!'][] = $query_type;
		}

		return $fields;
	}

	/**
	 * @return string
	 */
	private function get_query_post_type_control_id() {
		$control_id = $this->product_query_control_args['name'] . '_post_type';

		// Check if the trait is currently being used by a widget or skin. Group controls add
		// the post_type as a prefix when added by a skin.
		if ( method_exists( $this, 'get_control_id' ) ) {
			$control_id = $this->product_query_control_args['post_type'] . '_' . $control_id;
		}

		return $control_id;
	}

	private function add_query_controls( $name ) {
		$this->init_query_settings( $name );

		$this->add_group_control(
			Group_Control_Query::get_type(),
			$this->product_query_control_args
		);

		$this->add_control(
			'related_products_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: The Related Products Query is available when creating a Single Product template', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'condition' => [
					$this->product_query_post_type_control_id => 'related_products',
				],
			]
		);

		$this->add_control(
			'upsells_products_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: The Upsells Query is available when creating a Single Product template', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'condition' => [
					$this->product_query_post_type_control_id => 'upsells',
				],
			]
		);

		$this->add_control(
			'cross_sells_products_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: The Cross-Sells Query is available when creating a Cart page', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'condition' => [
					$this->product_query_post_type_control_id => 'cross_sells',
				],
			]
		);
	}
}
