<?php
namespace ElementorPro\Modules\Screenshots;

use Elementor\Core\Frontend\RenderModes\Render_Mode_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Render_Mode_Screenshot extends Render_Mode_Base {
	const ENQUEUE_SCRIPTS_PRIORITY = 1000;

	public static function get_name() {
		return 'screenshot';
	}

	public function prepare_render() {
		parent::prepare_render();

		show_admin_bar( false );

		remove_filter(
			'the_content',
			[ \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager(), 'builder_wrapper' ],
			9999999
		);

		add_filter( 'template_include', [ $this, 'filter_template' ] );
	}

	public function filter_template() {
		return ELEMENTOR_PATH . 'modules/page-templates/templates/canvas.php';
	}

	public function is_static() {
		return true;
	}

	public function enqueue_scripts() {
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG || defined( 'ELEMENTOR_TESTS' ) && ELEMENTOR_PRO_TESTS ) ? '' : '.min';

		wp_enqueue_script(
			'dom-to-image',
			ELEMENTOR_PRO_ASSETS_URL . "/lib/dom-to-image/js/dom-to-image{$suffix}.js",
			[],
			'2.6.0',
			true
		);

		wp_enqueue_script(
			'html2canvas',
			ELEMENTOR_PRO_ASSETS_URL . "/lib/html2canvas/js/html2canvas{$suffix}.js",
			[],
			'1.0.0-rc.5',
			true
		);

		wp_enqueue_script(
			'elementor-screenshot',
			ELEMENTOR_PRO_ASSETS_URL . "/js/screenshot{$suffix}.js",
			[ 'dom-to-image', 'html2canvas' ],
			ELEMENTOR_PRO_VERSION,
			true
		);

		$config = [
			'selector' => '.elementor-' . $this->post_id,
			'nonce' => wp_create_nonce( Module::SCREENSHOT_PROXY_NONCE_ACTION ),
			'home_url' => home_url(),
			'post_id' => $this->post_id,
		];

		wp_add_inline_script( 'elementor-screenshot', 'var ElementorScreenshotConfig = ' . wp_json_encode( $config ) . ';' );
	}
}
