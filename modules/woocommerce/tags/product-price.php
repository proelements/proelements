<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Price extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-price-tag';
	}

	public function get_title() {
		return __( 'Product Price', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_control( 'format', [
			'label' => __( 'Format', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'both' => __( 'Both', 'elementor-pro' ),
				'original' => __( 'Original', 'elementor-pro' ),
				'sale' => __( 'Sale', 'elementor-pro' ),
			],
			'default' => 'both',
		] );
	}

	public function render() {
		$product = wc_get_product();
		if ( ! $product ) {
			return '';
		}

		$format = $this->get_settings( 'format' );
		$value = '';
		switch ( $format ) {
			case 'both':
				$value = $product->get_price_html();
				break;
			case 'original':
				$value = wc_price( $product->get_regular_price() ) . $product->get_price_suffix();
				break;
			case 'sale' && $product->is_on_sale():
				$value = wc_price( $product->get_sale_price() ) . $product->get_price_suffix();
				break;
		}

		echo $value;
	}
}
