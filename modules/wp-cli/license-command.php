<?php
namespace ElementorPro\Modules\WpCli;

use ElementorPro\License\Admin;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Elementor Page Builder Pro cli tools.
 */
class License_Command extends \WP_CLI_Command {

	/**
	 * Activate Elementor Pro License key.
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor-pro license activate <license-key>
	 *      - This will try activate your license key.
	 */
	public function activate( $args, $assoc_args ) {
	}

	/**
	 * Deactivate Elementor Pro License key.
	 *
	 * ## EXAMPLES
	 *
	 *  1. wp elementor-pro license deactivate.
	 *      - This will deactivate your license key.
	 */
	public function deactivate() {
	}
}
