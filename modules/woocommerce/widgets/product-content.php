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
}
