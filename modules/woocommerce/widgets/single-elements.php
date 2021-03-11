<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Single_Elements extends Base_Widget {

	public function get_name() {
		return 'wc-single-elements';
	}

	public function get_title() {
		return __( 'Woo - Single Elements', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-woocommerce';
	}

	/* Deprecated Widget */
	public function show_in_panel() {
		return false;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_product',
			[
				'label' => __( 'Element', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'element',
			[
				'label' => __( 'Element', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => '— ' . __( 'Select', 'elementor-pro' ) . ' —',
					'woocommerce_output_product_data_tabs' => __( 'Data Tabs', 'elementor-pro' ),
					'woocommerce_template_single_title' => __( 'Title', 'elementor-pro' ),
					'woocommerce_template_single_rating' => __( 'Rating', 'elementor-pro' ),
					'woocommerce_template_single_price' => __( 'Price', 'elementor-pro' ),
					'woocommerce_template_single_excerpt' => __( 'Excerpt', 'elementor-pro' ),
					'woocommerce_template_single_meta' => __( 'Meta', 'elementor-pro' ),
					'woocommerce_template_single_sharing' => __( 'Sharing', 'elementor-pro' ),
					'woocommerce_show_product_sale_flash' => __( 'Sale Flash', 'elementor-pro' ),
					'woocommerce_product_additional_information_tab' => __( 'Additional Information Tab', 'elementor-pro' ),
					'woocommerce_upsell_display' => __( 'Upsell', 'elementor-pro' ),
					'wc_get_stock_html' => __( 'Stock Status', 'elementor-pro' ),
				],
			]
		);

		$this->end_controls_section();
	}

	public function remove_description_tab( $tabs ) {
		unset( $tabs['description'] );

		return $tabs;
	}

	private function get_element() {
		global $product;
		$product = wc_get_product();
		$settings = $this->get_settings();
		$html = '';

		switch ( $settings['element'] ) {
			case '':
				break;

			case 'wc_get_stock_html':
				$html = wc_get_stock_html( $product );
				break;

			case 'woocommerce_output_product_data_tabs':
				add_filter( 'woocommerce_product_tabs', [ $this, 'remove_description_tab' ], 11 /* after default tabs*/ );
				ob_start();
				woocommerce_output_product_data_tabs();
				// Wrap with the internal woocommerce `product` class
				$html = '<div class="product">' . ob_get_clean() . '</div>';
				remove_filter( 'woocommerce_product_tabs', [ $this, 'remove_description_tab' ], 11 );
				break;

			case 'woocommerce_template_single_rating':
				$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();

				if ( 'no' === get_option( 'woocommerce_enable_review_rating' ) ) {
					if ( $is_edit_mode ) {
						$html = __( 'Admin Notice:', 'elementor-pro' ) . ' ' . __( 'Please enable the Review Rating', 'elementor-pro' );
					}
					break;
				}

				ob_start();
				woocommerce_template_single_rating();
				$html = ob_get_clean();
				if ( '' === $html && $is_edit_mode ) {
					$html = __( 'Admin Notice:', 'elementor-pro' ) . ' ' . __( 'No Rating Reviews', 'elementor-pro' );
				}
				break;

			default:
				if ( is_callable( $settings['element'] ) ) {
					$html = call_user_func( $settings['element'] );
				}
		}

		return $html;
	}

	protected function render() {
		echo $this->get_element();
	}

	public function render_plain_content() {}
}
