<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;
use ElementorPro\Modules\QueryControl\Module as QueryModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Woocommerce_Add_To_Cart extends Data_Tag {

	public function get_name() {
		return 'woocommerce-add-to-cart';
	}

	public function get_title() {
		return esc_html__( 'Add To Cart', 'elementor-pro' );
	}

	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	protected function register_controls() {
		$this->add_control(
			'product_id',
			[
				'label' => esc_html__( 'Product', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'options' => [],
				'label_block' => true,
				'autocomplete' => [
					'object' => QueryModule::QUERY_OBJECT_POST,
					'query' => [
						'post_type' => [ 'product' ],
						'tax_query' => [
							[
								'taxonomy' => 'product_type',
								'field'    => 'slug',
								'terms'    => 'simple',
							],
						],
					],
				],
			]
		);

		$this->add_control(
			'quantity',
			[
				'label' => esc_html__( 'Quantity', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'default' => 1,
			]
		);
	}

	public function get_value( array $options = [] ) {
		$settings = $this->get_settings_for_display();

		if ( ! $settings['product_id'] ) {
			global $product;

			$product = wc_get_product();

			if ( empty( $product ) ) {
				return;
			}

			$product_id = $product->get_id();
		} else {
			$product_id = absint( $settings['product_id'] );
		}

		$quantity = absint( $settings['quantity'] );

		$url = 'yes' === get_option( 'woocommerce_cart_redirect_after_add' )
			? wc_get_cart_url()
			: get_permalink( $product_id );

		return home_url() . '?add-to-cart=' . $product_id . '&quantity=' . $quantity . '&e-redirect=' . $url;
	}
}
