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
		return esc_html__( 'Product Price', 'elementor-pro' );
	}

	protected function register_controls() {
		$this->add_control( 'format', [
			'label' => esc_html__( 'Format', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'both' => esc_html__( 'Both', 'elementor-pro' ),
				'original' => esc_html__( 'Original', 'elementor-pro' ),
				'sale' => esc_html__( 'Sale', 'elementor-pro' ),
			],
			'default' => 'both',
		] );

		$this->add_product_id_control();
	}

	public function render() {
		$settings = $this->get_settings();

		$product = $this->get_product( $settings['product_id'] );

		if ( ! $product ) {
			return '';
		}

		$format = $settings['format'];
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

		// PHPCS - Just passing WC price as is
		echo $value; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
