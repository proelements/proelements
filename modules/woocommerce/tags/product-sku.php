<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\Woocommerce\Tags\Traits\Tag_Product_Id;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_SKU extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-sku-tag';
	}

	public function get_title() {
		return esc_html__( 'Product SKU', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_product_id_control();
	}

	public function render() {
		$product = wc_get_product( $this->get_settings( 'product_id' ) );
		if ( ! $product ) {
			return;
		}

		$value = '';

		if ( $product->get_sku() ) {
			$value = $product->get_sku();
		}

		echo esc_html( $value );
	}
}
