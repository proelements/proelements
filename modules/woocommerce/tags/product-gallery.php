<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Gallery extends Base_Data_Tag {
	public function get_name() {
		return 'woocommerce-product-gallery-tag';
	}

	public function get_title() {
		return __( 'Product Gallery', 'elementor-pro' );
	}

	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::GALLERY_CATEGORY ];
	}

	public function get_value( array $options = [] ) {
		$product = wc_get_product();
		if ( ! $product ) {
			return [];
		}
		$value = [];

		$attachment_ids = $product->get_gallery_image_ids();

		foreach ( $attachment_ids as $attachment_id ) {
			$value[] = [
				'id' => $attachment_id,
			];
		}

		return $value;
	}
}
