<?php

namespace ElementorPro\Modules\LinkActions;

use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * @deprecated since 2.9.0
 */
class Module extends Module_Base {

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since  2.3.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'link-actions';
	}

	/**
	 * Create Action URL.
	 *
	 * @param string $action
	 * @param array  $settings Optional.
	 *
	 * @deprecated 2.9.0 Use `Plugin::elementor()->frontend->create_action_hash()` instead
	 *
	 * @return string
	 */
	public static function create_action_url( $action, array $settings = [] ) {
		_deprecated_function( __METHOD__, '2.9.0', 'Plugin::elementor()->frontend->create_action_hash()' );

		return Plugin::elementor()->frontend->create_action_hash( $action, $settings );
	}
}
