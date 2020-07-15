<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Category_Image extends Base_Data_Tag {
	public function get_name() {
		return 'woocommerce-category-image-tag';
	}

	public function get_title() {
		return __( 'Category Image', 'elementor-pro' );
	}

	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::IMAGE_CATEGORY ];
	}

	public function get_value( array $options = [] ) {
		$category_id = 0;

		if ( is_product_category() ) {
			$category_id = get_queried_object_id();
		} elseif ( is_product() ) {
			$product = wc_get_product();
			if ( $product ) {
				$category_ids = $product->get_category_ids();
				if ( ! empty( $category_ids ) ) {
					$category_id = $category_ids[0];
				}
			}
		}

		if ( $category_id ) {
			$image_id = get_term_meta( $category_id, 'thumbnail_id', true );
		}

		if ( empty( $image_id ) ) {
			return [];
		}

		$src = wp_get_attachment_image_src( $image_id, 'full' );

		return [
			'id' => $image_id,
			'url' => $src[0],
		];
	}
}
