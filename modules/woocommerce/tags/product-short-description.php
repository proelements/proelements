<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Short_Description extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-short-description-tag';
	}

	public function get_title() {
		return __( 'Product Short Description', 'elementor-pro' );
	}

	public function render() {
		$product = wc_get_product();
		if ( ! $product ) {
			return;
		}

		echo $product->get_short_description();
	}
}
