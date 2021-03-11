<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Terms extends Base_Tag {
	public function get_name() {
		return 'woocommerce-product-terms-tag';
	}

	public function get_title() {
		return __( 'Product Terms', 'elementor-pro' );
	}

	protected function register_advanced_section() {
		parent::register_advanced_section();

		$this->update_control(
			'before',
			[
				'default' => __( 'Categories', 'elementor-pro' ) . ': ',
			]
		);
	}

	protected function register_controls() {
		$taxonomy_filter_args = [
			'show_in_nav_menus' => true,
			'object_type' => [ 'product' ],
		];

		$taxonomies = get_taxonomies( $taxonomy_filter_args, 'objects' );

		$options = [];

		foreach ( $taxonomies as $taxonomy => $object ) {
			$options[ $taxonomy ] = $object->label;
		}

		$this->add_control(
			'taxonomy',
			[
				'label' => __( 'Taxonomy', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $options,
				'default' => 'product_cat',
			]
		);

		$this->add_control(
			'separator',
			[
				'label' => __( 'Separator', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => ', ',
			]
		);
	}

	public function render() {
		$product = wc_get_product();
		if ( ! $product ) {
			return;
		}

		$settings = $this->get_settings();

		$value = get_the_term_list( get_the_ID(), $settings['taxonomy'], '', $settings['separator'] );

		echo $value;
	}
}
