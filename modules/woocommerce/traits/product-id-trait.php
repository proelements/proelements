<?php
namespace ElementorPro\Modules\Woocommerce\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Product_Id_Trait {

	public function get_product( $product_id = false ) {
		global $product;

		if ( $this->product_already_queried( $product ) ) {
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

	private function product_already_queried( $product ): bool {
		global $wp_query;

		if ( empty( $wp_query->is_loop_product ) ) {
			return false;
		}

		return $product instanceof \WC_Product;
	}

	public function get_product_variation() {
		return wc_get_product( get_the_ID() );
	}
}
