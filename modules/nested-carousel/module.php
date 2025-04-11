<?php
namespace ElementorPro\Modules\NestedCarousel;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const NESTED_CAROUSEL = 'nested-carousel';

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}

	public function get_widgets() {
		return [
			'Nested_Carousel',
		];
	}

	public function get_name() {
		return static::NESTED_CAROUSEL;
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( 'nested-elements' );
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
	 * At build time, Elementor compiles `/modules/nested-carousel/assets/scss/frontend.scss`
	 * to `/assets/css/widget-nested-carousel.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-nested-carousel',
			$this->get_css_assets_url( 'widget-nested-carousel', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}
}
