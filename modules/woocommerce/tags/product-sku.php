<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_SKU extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-sku-tag';
	}

	public function get_title() {
		return __( 'Product SKU', 'elementor-pro' );
	}

	public function render() {
		$product = wc_get_product();
		if ( ! $product ) {
			return;
		}

		$value = '';

		if ( $product->get_sku() ) {
			$value = esc_html( $product->get_sku() );
		}

		echo $value;
	}
}
