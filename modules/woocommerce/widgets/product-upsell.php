<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Upsell extends Products_Base {

	public function get_name() {
		return 'woocommerce-product-upsell';
	}

	public function get_title() {
		return __( 'Upsells', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-upsell';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'shop', 'store', 'upsell', 'product' ];
	}

	protected function _register_controls() {

		$this->start_controls_section(
			'section_upsell_content',
			[
				'label' => __( 'Upsells', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'columns',
			[
				'label' => __( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'prefix_class' => 'elementor-products-columns%s-',
				'default' => 4,
				'min' => 1,
				'max' => 12,
			]
		);

		$this->add_control(
			'orderby',
			[
				'label' => __( 'Order By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'date',
				'options' => [
					'date' => __( 'Date', 'elementor-pro' ),
					'title' => __( 'Title', 'elementor-pro' ),
					'price' => __( 'Price', 'elementor-pro' ),
					'popularity' => __( 'Popularity', 'elementor-pro' ),
					'rating' => __( 'Rating', 'elementor-pro' ),
					'rand' => __( 'Random', 'elementor-pro' ),
					'menu_order' => __( 'Menu Order', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'order',
			[
				'label' => __( 'Order', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'desc',
				'options' => [
					'asc' => __( 'ASC', 'elementor-pro' ),
					'desc' => __( 'DESC', 'elementor-pro' ),
				],
			]
		);

		$this->end_controls_section();

		parent::_register_controls();

		$this->start_injection( [
			'at' => 'before',
			'of' => 'section_design_box',
		] );

		$this->start_controls_section(
			'section_heading_style',
			[
				'label' => __( 'Heading', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'show_heading',
			[
				'label' => __( 'Heading', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'label_on' => __( 'Show', 'elementor-pro' ),
				'default' => 'yes',
				'return_value' => 'yes',
				'prefix_class' => 'show-heading-',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
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
				'label' => __( 'Text Align', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-pro' ),
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
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
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

		woocommerce_upsell_display( $limit, $columns, $orderby, $order );
	}

	public function render_plain_content() {}
}
