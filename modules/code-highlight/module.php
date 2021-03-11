<?php
namespace ElementorPro\Modules\CodeHighlight;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return 'code-highlight';
	}

	public function get_widgets() {
		return [
			'Code_Highlight',
		];
	}

	public function register_frontend_scripts() {
		$base_url = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0';
		wp_register_script( 'prismjs_core', $base_url . '/components/prism-core.min.js', [], '1.23.0', true );
		wp_register_script( 'prismjs_loader', $base_url . '/plugins/autoloader/prism-autoloader.min.js', [ 'prismjs_core' ], '1.23.0', true );
		wp_register_script( 'prismjs_normalize', $base_url . '/plugins/normalize-whitespace/prism-normalize-whitespace.min.js', [ 'prismjs_core' ], '1.23.0', true );
		wp_register_script( 'prismjs_line_numbers', $base_url . '/plugins/line-numbers/prism-line-numbers.min.js', [ 'prismjs_normalize' ], '1.23.0', true );
		wp_register_script( 'prismjs_line_highlight', $base_url . '/plugins/line-highlight/prism-line-highlight.min.js', [ 'prismjs_normalize' ], '1.23.0', true );
		wp_register_script( 'prismjs_toolbar', $base_url . '/plugins/toolbar/prism-toolbar.min.js', [ 'prismjs_normalize' ], '1.23.0', true );
		wp_register_script( 'prismjs_copy_to_clipboard', $base_url . '/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js', [ 'prismjs_toolbar' ], '1.23.0', true );

		wp_register_style( 'prismjs_style', ELEMENTOR_PRO_URL . 'assets/css/modules/code-highlight.min.css', [], '1.23.0', false );
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/before_register_scripts', [ $this, 'register_frontend_scripts' ] );
	}
}
