<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Query;
use ElementorPro\Modules\Woocommerce\Classes\Products_Renderer;
use ElementorPro\Modules\Woocommerce\Classes\Current_Query_Renderer;
use ElementorPro\Modules\Woocommerce\Module;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Products extends Products_Base {

	private $product_query_types = [
		'cross_sells',
		'related_products',
		'upsells',
	];

	private $controls_to_hide = [
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

	public function get_name() {
		return 'woocommerce-products';
	}

	public function get_title() {
		return esc_html__( 'Products', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-products';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'shop', 'store', 'product', 'archive', 'upsells', 'cross-sells', 'cross sells', 'related' ];
	}

	public function get_categories() {
		return [
			'woocommerce-elements',
		];
	}

	/**
	 * @throws \Exception
	 */
	protected function register_query_controls() {
		$this->start_controls_section(
			'section_query',
			[
				'label' => esc_html__( 'Query', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_group_control(
			Group_Control_Query::get_type(),
			$this->build_products_control_args()
		);

		$this->add_control(
			'related_products_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: The Related Products Query is available when creating a Single Product template', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'condition' => [
					Products_Renderer::QUERY_CONTROL_NAME . '_post_type' => 'related_products',
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
					Products_Renderer::QUERY_CONTROL_NAME . '_post_type' => 'upsells',
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
					Products_Renderer::QUERY_CONTROL_NAME . '_post_type' => 'cross_sells',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'elementor-pro' ),
			]
		);

		$this->add_columns_responsive_control();

		$this->add_control(
			'rows',
			[
				'label' => esc_html__( 'Rows', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => Products_Renderer::DEFAULT_COLUMNS_AND_ROWS,
				'render_type' => 'template',
				'range' => [
					'px' => [
						'max' => 20,
					],
				],
			]
		);

		$this->add_control(
			'paginate',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					Products_Renderer::QUERY_CONTROL_NAME . '_post_type!' => [
						'related_products',
						'upsells',
						'cross_sells',
					],
				],
			]
		);

		$this->add_control(
			'allow_order',
			[
				'label' => esc_html__( 'Allow Order', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					'paginate' => 'yes',
				],
			]
		);

		$this->add_control(
			'wc_notice_frontpage',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Ordering is not available if this widget is placed in your front page. Visible on frontend only.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'condition' => [
					'paginate' => 'yes',
					'allow_order' => 'yes',
				],
			]
		);

		$this->add_control(
			'show_result_count',
			[
				'label' => esc_html__( 'Show Result Count', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					'paginate' => 'yes',
				],
			]
		);

		$this->end_controls_section();

		$this->register_query_controls();

		$this->start_controls_section(
			'section_products_title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'related_products',
						],
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'upsells',
						],
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'cross_sells',
						],
					],
				],
			]
		);

		$this->add_control(
			'products_title_show',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => '',
				'return_value' => 'show',
				'prefix_class' => 'products-heading-',
			]
		);

		$query_type_strings = [
			'related_products' => esc_html__( 'Related Products', 'elementor-pro' ),
			'upsells' => esc_html__( 'You may also like...', 'elementor-pro' ),
			'cross_sells' => esc_html__( 'You may be interested in...', 'elementor-pro' ),
		];

		foreach ( $query_type_strings as $query_type => $string ) {
			$this->add_control(
				'products_' . $query_type . '_title_text',
				[
					'label' => esc_html__( 'Section Title', 'elementor-pro' ),
					'type' => Controls_Manager::TEXT,
					'label_block' => true,
					'placeholder' => $string,
					'default' => $string,
					'dynamic' => [
						'active' => true,
					],
					'condition' => [
						'products_title_show!' => '',
						Products_Renderer::QUERY_CONTROL_NAME . '_post_type' => $query_type,
					],
				]
			);
		}

		$this->add_responsive_control(
			'products_title_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--products-title-alignment: {{VALUE}};',
				],
				'condition' => [
					'products_title_show!' => '',
				],
			]
		);

		$this->end_controls_section();

		parent::register_controls();

		$this->start_injection( [
			'type' => 'section',
			'at' => 'start',
			'of' => 'section_design_box',
		] );

		$this->start_controls_section(
			'products_title_style',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'products_title_show!' => '',
				],
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'related_products',
						],
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'upsells',
						],
						[
							'name' => Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
							'operator' => '=',
							'value' => 'cross_sells',
						],
					],
				],
			]
		);

		$this->add_control(
			'products_title_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_PRIMARY,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--products-title-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'products_title_typography',
				'selector' => '{{WRAPPER}}.products-heading-show .related-products > h2, {{WRAPPER}}.products-heading-show .upsells > h2, {{WRAPPER}}.products-heading-show .cross-sells > h2',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
			]
		);

		$this->add_responsive_control(
			'products_title_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--products-title-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->end_injection();
	}

	protected function get_shortcode_object( $settings ) {
		if ( 'current_query' === $settings[ Products_Renderer::QUERY_CONTROL_NAME . '_post_type' ] ) {
			$type = 'current_query';
			return new Current_Query_Renderer( $settings, $type );
		}
		$type = 'products';
		return new Products_Renderer( $settings, $type );
	}

	protected function render() {

		if ( WC()->session ) {
			wc_print_notices();
		}

		$settings = $this->get_settings_for_display();
		$post_type_setting = $settings[ Products_Renderer::QUERY_CONTROL_NAME . '_post_type' ];

		// Add a wrapper class to the Add to Cart & View Items elements if the automically_align_buttons switch has been selected.
		if ( 'yes' === $settings['automatically_align_buttons'] ) {
			add_filter( 'woocommerce_loop_add_to_cart_link', [ $this, 'add_to_cart_wrapper' ], 10, 1 );
		}

		if ( 'related_products' === $post_type_setting ) {
			$content = Module::get_products_related_content( $settings );
		} elseif ( 'upsells' === $post_type_setting ) {
			$content = Module::get_upsells_content( $settings );
		} elseif ( 'cross_sells' === $post_type_setting ) {
			$content = Module::get_cross_sells_content( $settings );
		} else {
			// For Products_Renderer.
			if ( ! isset( $GLOBALS['post'] ) ) {
				$GLOBALS['post'] = null; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			}

			$shortcode = $this->get_shortcode_object( $settings );
			$content = $shortcode->get_content();
		}

		if ( $content ) {
			$content = str_replace( '<ul class="products', '<ul class="products elementor-grid', $content );

			// PHPCS - Woocommerce output
			echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} elseif ( $this->get_settings_for_display( 'nothing_found_message' ) ) {
			echo '<div class="elementor-nothing-found elementor-products-nothing-found">' . esc_html( $this->get_settings_for_display( 'nothing_found_message' ) ) . '</div>';
		}

		if ( 'yes' === $settings['automatically_align_buttons'] ) {
			remove_filter( 'woocommerce_loop_add_to_cart_link', [ $this, 'add_to_cart_wrapper' ] );
		}
	}

	public function render_plain_content() {}

	public function get_group_name() {
		return 'woocommerce';
	}

	/**
	 * @return array
	 */
	private function build_products_control_args() {
		$args = [
			'name' => Products_Renderer::QUERY_CONTROL_NAME,
			'post_type' => 'product',
			'presets' => [ 'include', 'exclude', 'order' ],
			'fields_options' => [
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
			],
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

		$args['fields_options'] = array_merge( $args['fields_options'], $this->get_exclude_conditions() );
		return $args;
	}

	private function get_exclude_conditions() {
		$fields = [];
		foreach ( $this->controls_to_hide as $control_name ) {
			$fields = $this->add_not_supported_query_types( $control_name, $fields );
		}

		return $fields;
	}

	private function add_not_supported_query_types( $control_name, $fields ) {
		foreach ( $this->product_query_types as $query_type ) {
			$fields[ $control_name ]['condition']['post_type!'][] = $query_type;
		}

		return $fields;
	}
}
