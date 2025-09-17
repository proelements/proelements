<?php

namespace ElementorPro\Modules\Lottie;

use Elementor\Utils;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
		add_filter( 'wp_check_filetype_and_ext', [ $this, 'handle_file_type' ], 10, 3 );
		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localize_settings' ] );
		add_action( 'elementor/frontend/before_register_scripts', [ $this, 'register_frontend_scripts' ] );
	}

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since  2.7.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'lottie';
	}

	public function get_widgets() {
		return [
			'lottie',
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
	 * At build time, Elementor compiles `/modules/lottie/assets/scss/frontend.scss`
	 * to `/assets/css/widget-lottie.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-lottie',
			$this->get_css_assets_url( 'widget-lottie', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}

	// Fixing wordpress problem when `finfo_file()` returns wrong file type
	public function handle_file_type( $file_data, $file, $filename ) {
		if ( $file_data['ext'] && $file_data['type'] ) {
			return $file_data;
		}

		$filetype = wp_check_filetype( $filename );

		if ( 'json' === $filetype['ext'] ) {
			$file_data['ext'] = 'json';
			$file_data['type'] = 'application/json';
		}

		return $file_data;
	}

	public function register_frontend_scripts() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_register_script(
			'lottie',
			ELEMENTOR_PRO_URL . 'assets/lib/lottie/lottie' . $suffix . '.js',
			[
				'jquery',
			],
			'5.6.6',
			true
		);
	}

	public function localize_settings( array $settings ) {
		$settings['lottie']['defaultAnimationUrl'] = ELEMENTOR_PRO_MODULES_URL . 'lottie/assets/animations/default.json';

		return $settings;
	}
}
