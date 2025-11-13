<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Module as QueryModule;
use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Elements extends Base_Widget {

	public function get_name() {
		return 'wc-elements';
	}

	public function get_title() {
		return esc_html__( 'WooCommerce Pages', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-pages';
	}

	public function on_export( $element ) {
		unset( $element['settings']['product_id'] );

		return $element;
	}

	public function get_keywords() {
		return [
			'woocommerce',
			'shop',
			'store',
			'cart',
			'checkout',
			'account',
			'order tracking',
			'shortcode',
			'product',
		];
	}

	public function get_categories() {
		return [
			'woocommerce-elements',
		];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_product',
			[
				'label' => esc_html__( 'Element', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'element',
			[
				'label' => esc_html__( 'Page', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => '— ' . esc_html__( 'Select', 'elementor-pro' ) . ' —',
					'woocommerce_cart' => esc_html__( 'Cart Page', 'elementor-pro' ),
					'product_page' => esc_html__( 'Single Product Page', 'elementor-pro' ),
					'woocommerce_checkout' => esc_html__( 'Checkout Page', 'elementor-pro' ),
					'woocommerce_order_tracking' => esc_html__( 'Order Tracking Form', 'elementor-pro' ),
					'woocommerce_my_account' => esc_html__( 'My Account', 'elementor-pro' ),
				],
			]
		);

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
					],
				],
				'condition' => [
					'element' => [ 'product_page' ],
				],
			]
		);

		$this->end_controls_section();
	}

	private function get_shortcode() {
		$settings = $this->get_settings();

		switch ( $settings['element'] ) {
			case '':
				return '';
				break;

			case 'product_page':
				if ( ! empty( $settings['product_id'] ) ) {
					$product_data = get_post( $settings['product_id'] );
					$product = ! empty( $product_data ) && in_array( $product_data->post_type, [ 'product', 'product_variation' ] ) ? wc_setup_product_data( $product_data ) : false;
				}

				if ( empty( $product ) && current_user_can( 'manage_options' ) ) {
					return esc_html__( 'Please set a valid product', 'elementor-pro' );
				}

				$this->add_render_attribute( 'shortcode', 'id', $settings['product_id'] );
				break;

			case 'woocommerce_cart':
			case 'woocommerce_checkout':
			case 'woocommerce_order_tracking':
				break;
		}

		$shortcode = sprintf(
			'[%s %s]',
			esc_html( $settings['element'] ),
			$this->get_render_attribute_string( 'shortcode' )
		);

		return $shortcode;
	}

	protected function render() {
		$shortcode = $this->get_shortcode();

		if ( empty( $shortcode ) ) {
			return;
		}

		Module::instance()->add_products_post_class_filter();

		$html = do_shortcode( $shortcode );

		if ( 'woocommerce_checkout' === $this->get_settings( 'element' ) && '<div class="woocommerce"></div>' === $html ) {
			$html = '<div class="woocommerce">' . esc_html__( 'Your cart is currently empty.', 'elementor-pro' ) . '</div>';
		}

		// PHPCS - Woocommerce output
		echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		Module::instance()->remove_products_post_class_filter();
	}

	public function render_plain_content() {
		// PHPCS - Already escaped in get_shortcode
		echo $this->get_shortcode(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
