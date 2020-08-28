<?php

namespace ElementorPro\Modules\Gallery;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
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
		return 'gallery';
	}

	public function get_widgets() {
		return [
			'gallery',
		];
	}
}
