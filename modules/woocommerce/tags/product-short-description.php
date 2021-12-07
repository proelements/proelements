<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\Woocommerce\Tags\Traits\Tag_Product_Id;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Short_Description extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-short-description-tag';
	}

	public function get_title() {
		return esc_html__( 'Product Short Description', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_product_id_control();
	}

	public function render() {
		$product = wc_get_product( $this->get_settings( 'product_id' ) );
		if ( ! $product ) {
			return;
		}

		echo wp_kses_post( $product->get_short_description() );
	}
}
