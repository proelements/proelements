<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Content extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-content-tag';
	}

	public function get_title() {
		return esc_html__( 'Product Content', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_product_id_control();
	}

	public function render() {
		$product = $this->get_product( $this->get_settings( 'product_id' ) );

		if ( ! $product ) {
			return;
		}

		echo wp_kses_post( $product->get_description() );
	}
}
