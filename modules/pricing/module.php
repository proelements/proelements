<?php
namespace ElementorPro\Modules\Pricing;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}

	public function get_name() {
		return 'pricing';
	}

	public function get_widgets() {
		return [
			'Price_List',
			'Price_Table',
		];
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
	 * At build time, Elementor compiles `/modules/pricing/assets/scss/frontend.scss`
	 * to `/assets/css/widget-pricing.min.css`.
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
			'widget-price-list',
			'widget-price-table',
		];
	}
}
