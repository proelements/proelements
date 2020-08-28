<?php
namespace ElementorPro\Modules\Woocommerce\Documents;

use ElementorPro\Modules\ThemeBuilder\Documents\Archive;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Archive extends Archive {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'archive';
		$properties['condition_type'] = 'product_archive';

		return $properties;
	}

	protected static function get_site_editor_type() {
		return 'product-archive';
	}

	public static function get_title() {
		return __( 'Products Archive', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-products';
	}

	/**
	 * Fix for thumbnail name that is different from editor type.
	 *
	 * @return string
	 */
	protected static function get_site_editor_thumbnail_url() {
		return ELEMENTOR_ASSETS_URL . 'images/app/site-editor/products.svg';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Products Archive Template?', 'elementor-pro' ),
			'content' => __( 'A products archive template allows you to easily design the layout and style of your WooCommerce shop page or other product archive pages - those pages that show a list of products, which may be filtered by terms such as categories, tags, etc.', 'elementor-pro' ),
			'tip' => __( 'You can create multiple global archive product templates, and assign each to different categories of products. This gives you the freedom to customize the appearance for each type of product being shown.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-products-archive',
			'video_url' => 'https://www.youtube.com/embed/F2gyAeZdU9s',
		];
	}

	public function enqueue_scripts() {
		// In preview mode it's not a real Woocommerce page - enqueue manually.
		if ( Plugin::elementor()->preview->is_preview_mode( $this->get_main_id() ) ) {
			wp_enqueue_script( 'woocommerce' );
		}
	}

	public function get_container_attributes() {
		$attributes = parent::get_container_attributes();

		$attributes['class'] .= ' product';

		return $attributes;
	}

	public function filter_body_classes( $body_classes ) {
		$body_classes = parent::filter_body_classes( $body_classes );

		if ( get_the_ID() === $this->get_main_id() || Plugin::elementor()->preview->is_preview_mode( $this->get_main_id() ) ) {
			$body_classes[] = 'woocommerce';
		}

		return $body_classes;
	}

	public static function get_preview_as_default() {
		return 'post_type_archive/product';
	}

	public static function get_preview_as_options() {
		$post_type_archives = [];
		$taxonomies = [];
		$post_type = 'product';

		$post_type_object = get_post_type_object( $post_type );

		$post_type_archives[ 'post_type_archive/' . $post_type ] = $post_type_object->label . ' ' . __( 'Archive', 'elementor-pro' );

		$post_type_taxonomies = get_object_taxonomies( $post_type, 'objects' );

		$post_type_taxonomies = wp_filter_object_list( $post_type_taxonomies, [
			'public' => true,
			'show_in_nav_menus' => true,
		] );

		foreach ( $post_type_taxonomies as $slug => $object ) {
			$taxonomies[ 'taxonomy/' . $slug ] = $object->label . ' ' . __( 'Archive', 'elementor-pro' );
		}

		$options = [
			'search' => __( 'Search Results', 'elementor-pro' ),
		];

		$options += $taxonomies + $post_type_archives;

		return [
			'archive' => [
				'label' => __( 'Archive', 'elementor-pro' ),
				'options' => $options,
			],
		];
	}

	public function __construct( array $data = [] ) {
		parent::__construct( $data );

		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 11 );
	}

	protected static function get_editor_panel_categories() {
		$categories = [
			'woocommerce-elements-archive' => [
				'title' => __( 'Product Archive', 'elementor-pro' ),
			],
			// Move to top as active.
			'woocommerce-elements' => [
				'title' => __( 'WooCommerce', 'elementor-pro' ),
				'active' => true,
			],
		];

		$categories += parent::get_editor_panel_categories();

		unset( $categories['theme-elements-archive'] );

		return $categories;
	}

	public static function get_editor_panel_config() {
		$config = parent::get_editor_panel_config();
		$config['widgets_settings']['theme-archive-title']['categories'][] = 'woocommerce-elements-archive';

		return $config;
	}

	protected function _register_controls() {
		parent::_register_controls();

		$this->update_control(
			'preview_type',
			[
				'default' => 'post_type_archive/product',
			]
		);
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = 'product archive';

		return $config;
	}
}
