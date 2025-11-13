<?php
namespace ElementorPro\Modules\NavMenu;

use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}

	public function get_widgets() {
		return [
			'Nav_Menu',
		];
	}

	public function get_name() {
		return 'nav-menu';
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
	 * At build time, Elementor compiles `/modules/nav-menu/assets/scss/frontend.scss`
	 * to `/assets/css/widget-nav-menu.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$direction_suffix = is_rtl() ? '-rtl' : '';
		$has_custom_breakpoints = Plugin::elementor()->breakpoints->has_custom_breakpoints();

		wp_register_style(
			'widget-nav-menu',
			Plugin::get_frontend_file_url( "widget-nav-menu{$direction_suffix}.min.css", $has_custom_breakpoints ),
			[ 'elementor-frontend' ],
			$has_custom_breakpoints ? null : ELEMENTOR_PRO_VERSION
		);
	}
}
