<?php
namespace ElementorPro\Modules\Woocommerce\Conditions;

use ElementorPro\Modules\ThemeBuilder as ThemeBuilder;
use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Archive extends ThemeBuilder\Conditions\Condition_Base {

	private $post_type = 'product';
	private $post_taxonomies;

	public function __construct( array $data = [] ) {
		$taxonomies = get_object_taxonomies( $this->post_type, 'objects' );
		$this->post_taxonomies = wp_filter_object_list( $taxonomies, [
			'public' => true,
			'show_in_nav_menus' => true,
		] );

		parent::__construct( $data );
	}

	public static function get_type() {
		return 'archive';
	}

	public function get_name() {
		return 'product_archive';
	}

	public static function get_priority() {
		return 40;
	}

	public function get_label() {
		return esc_html__( 'Product Archive', 'elementor-pro' );
	}

	public function get_all_label() {
		return esc_html__( 'All Product Archives', 'elementor-pro' );
	}

	public function register_sub_conditions() {
		$this->register_sub_condition( new Shop_page() );
		$this->register_sub_condition( new Product_Search() );

		foreach ( $this->post_taxonomies as $slug => $object ) {
			$condition = new ThemeBuilder\Conditions\Taxonomy( [
				'object' => $object,
			] );
			$this->register_sub_condition( $condition );
		}
	}

	public function check( $args ) {
		return is_shop() || is_product_taxonomy() || Module::is_product_search();
	}
}
