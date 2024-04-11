<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Stock extends Base_Widget {

	public function get_name() {
		return 'woocommerce-product-stock';
	}

	public function get_title() {
		return esc_html__( 'Product Stock', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-stock';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'shop', 'store', 'stock', 'quantity', 'product' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_product_stock_style',
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
					'.woocommerce {{WRAPPER}} .stock' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'text_typography',
				'selector' => '.woocommerce {{WRAPPER}} .stock',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		global $product;
		$product = $this->get_product();

		if ( ! $product ) {
			return;
		}

		// PHPCS - the method wc_get_stock_html is safe.
		echo wc_get_stock_html( $product ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function render_plain_content() {}

	public function get_group_name() {
		return 'woocommerce';
	}
}
