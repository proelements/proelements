<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Upsell extends Products_Base {

	public function get_name() {
		return 'woocommerce-product-upsell';
	}

	public function get_title() {
		return esc_html__( 'Upsells', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-upsell';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'shop', 'store', 'upsell', 'product' ];
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the widget requires.
	 *
	 * @since 3.24.0
	 * @access public
	 *
	 * @return array Widget style dependencies.
	 */
	public function get_style_depends(): array {
		return [ 'widget-woocommerce-products' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_upsell_content',
			[
				'label' => esc_html__( 'Upsells', 'elementor-pro' ),
			]
		);

		$this->add_columns_responsive_control();

		$this->add_control(
			'orderby',
			[
				'label' => esc_html__( 'Order By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
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
			]
		);

		$this->add_control(
			'order',
			[
				'label' => esc_html__( 'Order', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'desc',
				'options' => [
					'asc' => esc_html__( 'ASC', 'elementor-pro' ),
					'desc' => esc_html__( 'DESC', 'elementor-pro' ),
				],
			]
		);

		$this->end_controls_section();

		parent::register_controls();

		$this->start_injection( [
			'at' => 'before',
			'of' => 'section_design_box',
		] );

		$this->start_controls_section(
			'section_heading_style',
			[
				'label' => esc_html__( 'Heading', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'show_heading',
			[
				'label' => esc_html__( 'Heading', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'default' => 'yes',
				'return_value' => 'yes',
				'prefix_class' => 'show-heading-',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_PRIMARY,
				],
				'selectors' => [
					'{{WRAPPER}}.elementor-wc-products .products > h2' => 'color: {{VALUE}}',
				],
				'condition' => [
					'show_heading!' => '',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'heading_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
				'selector' => '{{WRAPPER}}.elementor-wc-products .products > h2',
				'condition' => [
					'show_heading!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'heading_text_align',
			[
				'label' => esc_html__( 'Text Align', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}.elementor-wc-products .products > h2' => 'text-align: {{VALUE}}',
				],
				'condition' => [
					'show_heading!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'heading_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}.elementor-wc-products .products > h2' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'show_heading!' => '',
				],
			]
		);

		$this->end_controls_section();

		$this->end_injection();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		// Add a wrapper class to the Add to Cart & View Items elements if the automically_align_buttons switch has been selected.
		if ( 'yes' === $settings['automatically_align_buttons'] ) {
			add_filter( 'woocommerce_loop_add_to_cart_link', [ $this, 'add_to_cart_wrapper' ], 10, 1 );
		}

		$limit = '-1';
		$columns = 4;
		$orderby = 'rand';
		$order = 'desc';

		if ( ! empty( $settings['columns'] ) ) {
			$columns = $settings['columns'];
		}

		if ( ! empty( $settings['orderby'] ) ) {
			$orderby = $settings['orderby'];
		}

		if ( ! empty( $settings['order'] ) ) {
			$order = $settings['order'];
		}

		ob_start();

		woocommerce_upsell_display(
			sanitize_text_field( $limit ),
			sanitize_text_field( $columns ),
			sanitize_text_field( $orderby ),
			sanitize_text_field( $order )
		);

		$upsells_html = ob_get_clean();

		if ( $upsells_html ) {
			$upsells_html = str_replace( '<ul class="products', '<ul class="products elementor-grid', $upsells_html );

			// PHPCS - Doesn't need to be escaped since it's a WooCommerce template, and 3rd party plugins might hook into it.
			echo $upsells_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		if ( 'yes' === $settings['automatically_align_buttons'] ) {
			remove_filter( 'woocommerce_loop_add_to_cart_link', [ $this, 'add_to_cart_wrapper' ] );
		}
	}

	public function render_plain_content() {}

	public function get_group_name() {
		return 'woocommerce';
	}
}
