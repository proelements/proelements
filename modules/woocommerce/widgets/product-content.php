<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use ElementorPro\Modules\ThemeBuilder\Widgets\Post_Content;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Content extends Post_Content {

	public function get_name() {
		return 'woocommerce-product-content';
	}

	public function get_title() {
		return esc_html__( 'Product Content', 'elementor-pro' );
	}

	public function get_categories() {
		return [ 'woocommerce-elements-single' ];
	}

	public function get_keywords() {
		return [ 'content', 'post', 'product' ];
	}

	public function get_group_name() {
		return 'woocommerce';
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	public function render_markdown(): string {
		$product = wc_get_product( get_the_ID() );

		if ( $product ) {
			$description = $product->get_description();

			if ( empty( $description ) ) {
				$description = $product->get_short_description();
			}

			if ( ! empty( $description ) ) {
				$content = apply_filters( 'the_content', $description );
				$content = str_replace( ']]>', ']]&gt;', $content );

				return \Elementor\Modules\MarkdownRender\Html_To_Markdown::convert( $content );
			}
		}

		return parent::render_markdown();
	}
}
