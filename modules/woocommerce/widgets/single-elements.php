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
		return esc_html__( 'Woo - Single Elements', 'elementor-pro' );
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
				'label' => esc_html__( 'Element', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'element',
			[
				'label' => esc_html__( 'Element', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => '— ' . esc_html__( 'Select', 'elementor-pro' ) . ' —',
					'woocommerce_output_product_data_tabs' => esc_html__( 'Data Tabs', 'elementor-pro' ),
					'woocommerce_template_single_title' => esc_html__( 'Title', 'elementor-pro' ),
					'woocommerce_template_single_rating' => esc_html__( 'Rating', 'elementor-pro' ),
					'woocommerce_template_single_price' => esc_html__( 'Price', 'elementor-pro' ),
					'woocommerce_template_single_excerpt' => esc_html__( 'Excerpt', 'elementor-pro' ),
					'woocommerce_template_single_meta' => esc_html__( 'Meta', 'elementor-pro' ),
					'woocommerce_template_single_sharing' => esc_html__( 'Sharing', 'elementor-pro' ),
					'woocommerce_show_product_sale_flash' => esc_html__( 'Sale Flash', 'elementor-pro' ),
					'woocommerce_product_additional_information_tab' => esc_html__( 'Additional Information Tab', 'elementor-pro' ),
					'woocommerce_upsell_display' => esc_html__( 'Upsell', 'elementor-pro' ),
					'wc_get_stock_html' => esc_html__( 'Stock Status', 'elementor-pro' ),
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
						$html = esc_html__( 'Admin Notice:', 'elementor-pro' ) . ' ' . esc_html__( 'Please enable the Review Rating', 'elementor-pro' );
					}
					break;
				}

				ob_start();
				woocommerce_template_single_rating();
				$html = ob_get_clean();
				if ( '' === $html && $is_edit_mode ) {
					$html = esc_html__( 'Admin Notice:', 'elementor-pro' ) . ' ' . esc_html__( 'No Rating Reviews', 'elementor-pro' );
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
		// PHPCS - the method get_content is safe.
		echo $this->get_element(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function render_plain_content() {}
}
