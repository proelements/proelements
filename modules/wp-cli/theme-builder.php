<?php
namespace ElementorPro\Modules\WpCli;

use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Cache;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
* Elementor Pro Page Builder cli tools.
 */
class ThemeBuilder extends \WP_CLI_Command {

	/**
	 * Clear template conditions cache.
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor-pro theme-builder clear-conditions
	 *
	 * @since  3.13.0
	 * @access public
	 * @alias clear-conditions
	 */
	public function clear_conditions() {
		$cache = new Conditions_Cache();
		$cache_cleared = $cache->regenerate();

		if ( is_wp_error( $cache_cleared ) ) {
			\WP_CLI::error( $cache_cleared->get_error_message() );
		}

		\WP_CLI::success( 'Template conditions cache is cleared.' );
	}
}
