<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Title extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-title-tag';
	}

	public function get_title() {
		return __( 'Product Title', 'elementor-pro' );
	}

	public function render() {
		$product = wc_get_product();
		if ( ! $product ) {
			return;
		}

		echo $product->get_title();
	}
}
