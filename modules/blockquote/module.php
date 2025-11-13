<?php
namespace ElementorPro\Modules\Blockquote;

use ElementorPro\Base\Module_Base;

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
			'Blockquote',
		];
	}

	public function get_name() {
		return 'blockquote';
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
	 * At build time, Elementor compiles `/modules/blockquote/assets/scss/frontend.scss`
	 * to `/assets/css/widget-blockquote.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-blockquote',
			$this->get_css_assets_url( 'widget-blockquote', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}
}
