<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Breadcrumb extends Base_Widget {

	public function get_name() {
		return 'woocommerce-breadcrumb';
	}

	public function get_title() {
		return esc_html__( 'WooCommerce Breadcrumbs', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-breadcrumbs';
	}

	public function get_keywords() {
		return [ 'woocommerce-elements', 'shop', 'store', 'breadcrumbs', 'internal links', 'product' ];
	}

	public function get_categories() {
		return [ 'woocommerce-elements', 'woocommerce-elements-single' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_product_rating_style',
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'wc_style_warning',
			[
				// TODO: Remove define() with the release of Elementor 3.22
				'type' => defined( 'Controls_Manager::ALERT' ) ? Controls_Manager::ALERT : 'alert',
				'alert_type' => 'info',
				'content' => esc_html__( 'The style of this widget is often affected by your theme and plugins. If you experience any such issue, try to switch to a basic theme and deactivate related plugins.', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .woocommerce-breadcrumb' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'link_color',
			[
				'label' => esc_html__( 'Link Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .woocommerce-breadcrumb > a' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'text_typography',
				'selector' => '{{WRAPPER}} .woocommerce-breadcrumb',
			]
		);

		$this->add_responsive_control(
			'alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
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
					'{{WRAPPER}} .woocommerce-breadcrumb' => 'text-align: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		woocommerce_breadcrumb();
	}

	public function render_plain_content() {}

	public function get_group_name() {
		return 'woocommerce';
	}
}
