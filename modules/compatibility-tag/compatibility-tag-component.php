<?php
namespace ElementorPro\Modules\CompatibilityTag;

use Elementor\Modules\CompatibilityTag\Base_Module as Compatibility_Tag_Base_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Compatibility_Tag_Component extends Compatibility_Tag_Base_Module {
	/**
	 * This is the header used by extensions to show testing.
	 *
	 * @var string
	 */
	const PLUGIN_VERSION_TESTED_HEADER = 'Elementor Pro tested up to';

	/**
	 * @return string
	 */
	protected function get_plugin_header() {
		return self::PLUGIN_VERSION_TESTED_HEADER;
	}

	/**
	 * @return string
	 */
	protected function get_plugin_label() {
		return __( 'Elementor Pro', 'elementor-pro' );
	}

	/**
	 * @return string
	 */
	protected function get_plugin_name() {
		return ELEMENTOR_PRO_PLUGIN_BASE;
	}

	/**
	 * @return string
	 */
	protected function get_plugin_version() {
		return ELEMENTOR_PRO_VERSION;
	}
}
