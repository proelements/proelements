<?php

namespace ElementorPro\Modules\AdminNotices\Components;

use Elementor\Core\Admin\Admin_Notices;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Notice_Renderer {

	public function print_legacy_error( string $message ): void {
		if ( ! $message ) {
			return;
		}

		echo '<div class="error">' . $message . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function print_admin_notice( array $options, array $exclude_pages = [] ): void {
		if ( ! did_action( 'elementor/loaded' ) || ! isset( Plugin::$instance->admin ) ) {
			$this->print_legacy_error( $this->build_legacy_message_from_options( $options ) );

			return;
		}

		/** @var Admin_Notices|null $admin_notices */
		$admin_notices = Plugin::$instance->admin->get_component( 'admin-notices' );

		if ( ! $admin_notices ) {
			$this->print_legacy_error( $this->build_legacy_message_from_options( $options ) );

			return;
		}

		$admin_notices->print_admin_notice( $options, $exclude_pages );
	}

	private function build_legacy_message_from_options( array $options ): string {
		$message = '';

		if ( ! empty( $options['title'] ) ) {
			$message .= '<h3>' . wp_kses_post( $options['title'] ) . '</h3>';
		}

		if ( ! empty( $options['description'] ) ) {
			$message .= '<p>' . wp_kses_post( $options['description'] ) . '</p>';
		}

		if ( ! empty( $options['button']['text'] ) && ! empty( $options['button']['url'] ) ) {
			$message .= '<p>' . sprintf(
				'<a href="%s" class="button-primary">%s</a>',
				esc_url( $options['button']['url'] ),
				esc_html( $options['button']['text'] )
			) . '</p>';
		}

		return $message;
	}
}
