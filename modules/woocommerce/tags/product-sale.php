<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Sale extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-sale-tag';
	}

	public function get_title() {
		return esc_html__( 'Product Sale', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_control( 'text', [
			'label' => esc_html__( 'Text', 'elementor-pro' ),
			'type' => Controls_Manager::TEXT,
			'default' => esc_html__( 'Sale!', 'elementor-pro' ),
		] );

		$this->add_product_id_control();
	}

	public function render() {
		$settings = $this->get_settings_for_display();

		$product = $this->get_product( $settings['product_id'] );

		if ( ! $product ) {
			return;
		}

		$value = '';

		if ( $product->is_on_sale() ) {
			$value = $settings['text'];
		}

		echo wp_kses_post( $value );
	}
}
