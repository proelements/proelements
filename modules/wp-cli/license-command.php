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
		$license_key = $args[0];
		$data = API::activate_license( $args[0] );

		if ( is_wp_error( $data ) ) {
			\WP_CLI::error( sprintf( '%s (%s) ', $data->get_error_message(), $data->get_error_code() ) );
		}

		if ( ! $data['success'] ) {
			$errors = [
				'no_activations_left' => 'You have no more activations left.',
				'expired' => 'Your License Has Expired',
				'missing' => 'Your license is missing. Please check your key again.',
				'cancelled' => 'Your license key has been cancelled',
				'key_mismatch' => 'Your license is invalid for this domain. Please check your key again.',
			];

			if ( isset( $errors[ $data['error'] ] ) ) {
				$error_msg = $errors[ $data['error'] ];
			} else {
				$error_msg = 'An error occurred. (' . $data['error'] . ')';
			}

			\WP_CLI::error( $error_msg );
		}

		Admin::set_license_key( $license_key );
		API::set_license_data( $data );

		\WP_CLI::success( 'The License has been activated successfully.' );
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
		Admin::deactivate();
		\WP_CLI::success( 'The License has been deactivated successfully.' );
	}
}
