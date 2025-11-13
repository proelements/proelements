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
		return esc_html__( 'Product Title', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_product_id_control();
	}

	public function render() {
		$product = $this->get_product( $this->get_settings( 'product_id' ) );

		if ( ! $product ) {
			return;
		}

		if ( 'variation' === $product->get_type() ) {
			$title = $product->get_name();
		} else {
			$title = get_the_title( $product->get_id() );
		}

		echo wp_kses_post( $title );
	}
}
