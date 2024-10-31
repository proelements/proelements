<?php
namespace ElementorPro\Modules\Woocommerce\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Product_Id_Trait {

	public function get_product( $product_id = false ) {
		global $product;

		if ( $product instanceof \WC_Product ) {
			return $product;
		}

		if ( 'product_variation' === get_post_type() ) {
			return $this->get_product_variation();
		}

		$product_data = wc_get_product( $product_id );

		if ( ! $product_data ) {
			$product_data = wc_get_product();
		}

		return $product_data;
	}

	public function get_product_variation() {
		return wc_get_product( get_the_ID() );
	}
}
