<?php
namespace ElementorPro\Modules\Slides;

use Elementor\Controls_Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Slides\Controls\Control_Slides_Animation;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );

		add_action( 'elementor/controls/register', function ( Controls_Manager $controls_manager ) {
			$controls_manager->register( new Control_Slides_Animation() );
		} );
	}

	public function get_name() {
		return 'slides';
	}

	public function get_widgets() {
		return [
			'Slides',
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
	 * At build time, Elementor compiles `/modules/slides/assets/scss/frontend.scss`
	 * to `/assets/css/widget-slides.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$direction_suffix = is_rtl() ? '-rtl' : '';
		$has_custom_breakpoints = Plugin::elementor()->breakpoints->has_custom_breakpoints();

		wp_register_style(
			'widget-slides',
			Plugin::get_frontend_file_url( "widget-slides{$direction_suffix}.min.css", $has_custom_breakpoints ),
			[ 'elementor-frontend' ],
			$has_custom_breakpoints ? null : ELEMENTOR_PRO_VERSION
		);
	}
}
