<?php
namespace ElementorPro\Core\Preview;

use Elementor\Core\Base\App;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Preview extends App {

	public function __construct() {
		add_action( 'elementor/preview/enqueue_styles', [ $this, 'enqueue_styles' ] );
	}

	public function get_name() {
		return 'pro-preview';
	}

	public function enqueue_styles() {
		wp_enqueue_style(
			'pro-editor-preview',
			$this->get_css_assets_url( 'preview', null, 'default', true ),
			[],
			ELEMENTOR_PRO_VERSION
		);
	}

	protected function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}
}
