<?php
namespace ElementorPro\Core\Connect\Apps;

use Elementor\Core\Common\Modules\Connect\Apps\Common_App;
use ElementorPro\License;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Activate extends Common_App {
	public function get_title() {
		return esc_html__( 'Activate', 'elementor-pro' );
	}

	public function get_slug() {
		return 'activate';
	}

	protected function after_connect() {
		$this->action_activate_license();
	}

	/**
	 * @since 2.3.0
	 * @access public
	 */
	public function action_authorize() {
		// In case the first connect was not from Activate App - require a new authorization.
		if ( $this->is_connected() && ! License\Admin::get_license_key() ) {
			$this->disconnect();
		}

		parent::action_authorize();
	}

	public function action_activate_pro() {
		$this->action_activate_license();
	}

	public function action_switch_license() {
		$this->disconnect();
		$this->action_authorize();
	}

	public function action_deactivate() {
		License\Admin::deactivate();
		$this->disconnect();
		wp_safe_redirect( License\Admin::get_url() );
		die;
	}

	public function action_activate_license() {
		if ( ! $this->is_connected() ) {
			$this->add_notice( esc_html__( 'Please connect to Elementor in order to activate license.', 'elementor-pro' ), 'error' );

			$this->redirect_to_admin_page();
		}

		$license = $this->request( 'get_connected_license' );

		if ( empty( $license ) ) {
			// TODO: add suggestions how to check/resolve.
			wp_die( 'License not found for user ' . esc_attr( $this->get( 'user' )->email ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		if ( is_wp_error( $license ) ) {
			wp_die( $license, esc_html__( 'Elementor Pro', 'elementor-pro' ), [ // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				'back_link' => true,
			] );
		}

		$license_key = trim( $license->key );

		if ( empty( $license_key ) ) {
			wp_die( esc_html__( 'License key is missing.', 'elementor-pro' ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		$data = License\API::activate_license( $license_key );

		if ( is_wp_error( $data ) ) {
			wp_die( sprintf( '%s (%s) ', $data->get_error_message(), $data->get_error_code() ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [ // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				'back_link' => true,
			] );
		}

		if ( empty( $data['success'] ) ) {
			$error_msg = License\API::get_error_message( $data['error'] ); // get_error_message() escapes html

			wp_die( $error_msg, esc_html__( 'Elementor Pro', 'elementor-pro' ), [ // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				'back_link' => true,
			] );
		}

		License\Admin::set_license_key( $license_key );

		License\API::set_license_data( $data );

		$this->add_notice( esc_html__( 'License has been activated successfully.', 'elementor-pro' ) );

		$this->redirect_to_admin_page( License\Admin::get_url() );
		die;
	}

	public function action_reset() {
		if ( current_user_can( 'manage_options' ) ) {
			delete_option( 'elementor_pro_license_key' );
			delete_transient( 'elementor_pro_license_data' );
		}

		$this->redirect_to_admin_page();
	}

	protected function get_popup_success_event_data() {
		return [
			'templates_access_level' => API::get_library_access_level( 'template' ),
			'kits_access_level' => API::get_library_access_level( 'kit' ),
			'access_tier' => API::get_access_tier(),
		];
	}

	protected function get_app_info() {
		return [
			'license_data' => [
				'label' => 'License Data',
				'value' => get_option( '_elementor_pro_license_data' ),
			],
			'license_key' => [
				'label' => 'License Key',
				'value' => get_option( 'elementor_pro_license_key' ),
			],
		];
	}
}
