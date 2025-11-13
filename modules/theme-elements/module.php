<?php
namespace ElementorPro\Modules\ThemeElements;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const SOURCE_TYPE_CURRENT_POST = 'current_post';
	const SOURCE_TYPE_CUSTOM = 'custom';

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}

	public function get_name() {
		return 'theme-elements';
	}

	public function get_widgets() {
		$widgets = [
			'Search_Form',
			'Author_Box',
			'Post_Comments',
			'Post_Navigation',
			'Post_Info',
			'Sitemap',
		];

		if ( $this->is_yoast_seo_active() ) {
			$widgets[] = 'Breadcrumbs';
		}

		return $widgets;
	}

	public function is_yoast_seo_active() {
		return function_exists( 'yoast_breadcrumb' );
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/theme-elements/assets/scss/frontend.scss`
	 * to `/assets/css/widget-theme-elements.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$widget_styles = $this->get_widgets_style_list();

		foreach ( $widget_styles as $widget_style_name ) {
			wp_register_style(
				$widget_style_name,
				$this->get_css_assets_url( $widget_style_name, null, true, true ),
				[ 'elementor-frontend' ],
				ELEMENTOR_PRO_VERSION
			);
		}
	}

	private function get_widgets_style_list(): array {
		return [
			'widget-author-box',
			'widget-breadcrumbs',
			'widget-post-info',
			'widget-post-navigation',
			'widget-search-form',
			'widget-sitemap',
		];
	}
}
