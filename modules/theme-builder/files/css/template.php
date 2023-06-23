<?php
namespace ElementorPro\Modules\ThemeBuilder\Files\CSS;

use Elementor\Core\Files\CSS\Post as Post_CSS;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


class Template extends Post_CSS {

	protected function parse_content() {
		$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();

		if ( $is_edit_mode || ! method_exists( Plugin::elementor()->controls_manager, 'clear_stack_cache' ) ) {
			return parent::parse_content();
		}

		$stack_cache_has_been_cleared = Plugin::elementor()->controls_manager->has_stacks_cache_been_cleared();
		if ( ! $stack_cache_has_been_cleared ) {
			Plugin::elementor()->controls_manager->clear_stack_cache();
		}

		return parent::parse_content();
	}
}
