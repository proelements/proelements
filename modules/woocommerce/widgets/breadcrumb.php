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
		return __( 'WooCommerce Breadcrumbs', 'elementor-pro' );
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

	protected function _register_controls() {

		$this->start_controls_section(
			'section_product_rating_style',
			[
				'label' => __( 'Style', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'wc_style_warning',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => __( 'The style of this widget is often affected by your theme and plugins. If you experience any such issue, try to switch to a basic theme and deactivate related plugins.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .woocommerce-breadcrumb' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'link_color',
			[
				'label' => __( 'Link Color', 'elementor-pro' ),
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
				'label' => __( 'Alignment', 'elementor-pro' ),
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
}
