<?php
namespace ElementorPro\Modules\Carousel;

use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const WIDGET_HAS_CUSTOM_BREAKPOINTS = true;

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}

	public function get_widgets() {
		return [
			'Media_Carousel',
			'Testimonial_Carousel',
			'Reviews',
		];
	}

	public function get_name() {
		return 'carousel';
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
	 * At build time, Elementor compiles `/modules/carousel/assets/scss/widgets/*.scss`
	 * to `/assets/css/widget-*.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$widgets = $this->get_widgets_style_list();
		$direction_suffix = is_rtl() ? '-rtl' : '';
		$has_custom_breakpoints = Plugin::elementor()->breakpoints->has_custom_breakpoints();

		foreach ( $widgets as $widget_style_name => $widget_has_responsive_style ) {
			$should_load_responsive_css = $widget_has_responsive_style ? $has_custom_breakpoints : false;

			wp_register_style(
				$widget_style_name,
				Plugin::get_frontend_file_url( "{$widget_style_name}{$direction_suffix}.min.css", $should_load_responsive_css ),
				[ 'elementor-frontend' ],
				ELEMENTOR_PRO_VERSION
			);
		}
	}

	private function get_widgets_style_list(): array {
		return [
			'widget-media-carousel' => ! self::WIDGET_HAS_CUSTOM_BREAKPOINTS,
			'widget-testimonial-carousel' => self::WIDGET_HAS_CUSTOM_BREAKPOINTS,
			'widget-reviews' => ! self::WIDGET_HAS_CUSTOM_BREAKPOINTS,
			'widget-carousel-module-base' => ! self::WIDGET_HAS_CUSTOM_BREAKPOINTS,
		];
	}
}
