<?php
namespace ElementorPro\Modules\Woocommerce\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Product_Id_Trait {

	public function get_product( $product_id = false ) {
		if ( 'product_variation' === get_post_type() ) {
			return $this->get_product_variation( $product_id );
		}

		$product = wc_get_product( $product_id );

		if ( ! $product ) {
			$product = wc_get_product();
		}

		return $product;
	}

	public function get_product_variation( $product_id = false ) {
		return wc_get_product( get_the_ID() );
	}
}
