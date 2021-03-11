<?php
namespace ElementorPro\Modules\Woocommerce\Documents;

use Elementor\Controls_Manager;
use ElementorPro\Modules\ThemeBuilder\Documents\Single_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product extends Single_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'single';
		$properties['condition_type'] = 'product';

		return $properties;
	}

	protected static function get_site_editor_type() {
		return 'product';
	}

	public static function get_title() {
		return __( 'Single Product', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-single-product';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Single Product Template?', 'elementor-pro' ),
			'content' => __( 'A single product template allows you to easily design the layout and style of WooCommerce single product pages, and apply that template to various conditions that you assign.', 'elementor-pro' ),
			'tip' => __( 'You can create multiple single product templates, and assign each to different types of products, enabling a custom design for each group of similar products.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-product',
			'video_url' => 'https://www.youtube.com/embed/PjhoB1RWkBM',
		];
	}

	public static function get_editor_panel_config() {
		$config = parent::get_editor_panel_config();
		$config['widgets_settings']['woocommerce-product-content'] = [
			'show_in_panel' => true,
		];

		return $config;
	}

	public function enqueue_scripts() {
		// In preview mode it's not a real Product page - enqueue manually.
		if ( Plugin::elementor()->preview->is_preview_mode( $this->get_main_id() ) ) {
			global $product;

			if ( is_singular( 'product' ) ) {
				$product = wc_get_product();
			}

			if ( current_theme_supports( 'wc-product-gallery-zoom' ) ) {
				wp_enqueue_script( 'zoom' );
			}
			if ( current_theme_supports( 'wc-product-gallery-slider' ) ) {
				wp_enqueue_script( 'flexslider' );
			}
			if ( current_theme_supports( 'wc-product-gallery-lightbox' ) ) {
				wp_enqueue_script( 'photoswipe-ui-default' );
				wp_enqueue_style( 'photoswipe-default-skin' );
				add_action( 'wp_footer', 'woocommerce_photoswipe' );
			}
			wp_enqueue_script( 'wc-single-product' );

			wp_enqueue_style( 'photoswipe' );
			wp_enqueue_style( 'photoswipe-default-skin' );
			wp_enqueue_style( 'photoswipe-default-skin' );
			wp_enqueue_style( 'woocommerce_prettyPhoto_css' );
		}
	}

	public function get_depended_widget() {
		return Plugin::elementor()->widgets_manager->get_widget_types( 'woocommerce-product-data-tabs' );
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

	public function before_get_content() {
		parent::before_get_content();

		global $product;
		if ( ! is_object( $product ) ) {
			$product = wc_get_product( get_the_ID() );
		}

		do_action( 'woocommerce_before_single_product' );
	}

	public function after_get_content() {
		parent::after_get_content();

		do_action( 'woocommerce_after_single_product' );
	}

	public function print_content() {
		if ( post_password_required() ) {
			echo get_the_password_form();
			return;
		}

		parent::print_content();
	}

	public function __construct( array $data = [] ) {
		parent::__construct( $data );

		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 11 );
	}

	protected static function get_editor_panel_categories() {
		$categories = [
			'woocommerce-elements-single' => [
				'title' => __( 'Product', 'elementor-pro' ),

			],
			// Move to top as active.
			'woocommerce-elements' => [
				'title' => __( 'WooCommerce', 'elementor-pro' ),
				'active' => true,
			],
		];

		$categories += parent::get_editor_panel_categories();

		unset( $categories['theme-elements-single'] );

		return $categories;
	}

	protected function register_controls() {
		parent::register_controls();

		$this->update_control(
			'preview_type',
			[
				'type' => Controls_Manager::HIDDEN,
				'default' => 'single/product',
			]
		);

		$latest_posts = get_posts( [
			'posts_per_page' => 1,
			'post_type' => 'product',
		] );

		if ( ! empty( $latest_posts ) ) {
			$this->update_control(
				'preview_id',
				[
					'default' => $latest_posts[0]->ID,
				]
			);
		}
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = 'single product';

		return $config;
	}
}
