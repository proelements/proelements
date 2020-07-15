<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Additional_Information extends Base_Widget {

	public function get_name() {
		return 'woocommerce-product-additional-information';
	}

	public function get_title() {
		return __( 'Additional Information', 'elementor-pro' );
	}

	public function get_icon() {
		return ' eicon-product-info';
	}

	protected function _register_controls() {

		$this->start_controls_section( 'section_additional_info_style', [
			'label' => __( 'General', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$this->add_control(
			'show_heading',
			[
				'label' => __( 'Heading', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-pro' ),
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'render_type' => 'ui',
				'return_value' => 'yes',
				'default' => 'yes',
				'prefix_class' => 'elementor-show-heading-',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.woocommerce {{WRAPPER}} h2' => 'color: {{VALUE}}',
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
				'label' => __( 'Typography', 'elementor-pro' ),
				'selector' => '.woocommerce {{WRAPPER}} h2',
				'condition' => [
					'show_heading!' => '',
				],
			]
		);

		$this->add_control(
			'content_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.woocommerce {{WRAPPER}} .shop_attributes' => 'color: {{VALUE}}',
				],
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'content_typography',
				'label' => __( 'Typography', 'elementor-pro' ),
				'selector' => '.woocommerce {{WRAPPER}} .shop_attributes',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		global $product;
		$product = wc_get_product();

		if ( empty( $product ) ) {
			return;
		}

		wc_get_template( 'single-product/tabs/additional-information.php' );
	}

	public function render_plain_content() {}
}
