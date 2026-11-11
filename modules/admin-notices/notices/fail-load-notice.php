<?php

namespace ElementorPro\Modules\AdminNotices\Notices;

use ElementorPro\Modules\AdminNotices\Components\Notice_Renderer;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Fail_Load_Notice {

	public function should_print(): bool {
		$screen = get_current_screen();

		if ( isset( $screen->parent_file ) && 'plugins.php' === $screen->parent_file && 'update' === $screen->id ) {
			return false;
		}

		return true;
	}

	public function print(): void {
		if ( ! $this->should_print() ) {
			return;
		}

		$plugin = 'elementor/elementor.php';
		$renderer = new Notice_Renderer();

		if ( _is_elementor_installed() ) {
			if ( ! current_user_can( 'activate_plugins' ) ) {
				return;
			}

			$activation_url = wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . $plugin . '&amp;plugin_status=all&amp;paged=1&amp;s', 'activate-plugin_' . $plugin );

			$renderer->print_admin_notice( [
				'title' => esc_html__( 'You\'re not using Elementor Pro yet!', 'elementor-pro' ),
				'description' => esc_html__( 'Activate the Elementor plugin to start using all of Elementor Pro plugin’s features.', 'elementor-pro' ),
				'button' => [
					'text' => esc_html__( 'Activate Now', 'elementor-pro' ),
					'url' => $activation_url,
					'type' => 'cta',
				],
				'dismissible' => false,
			] );

			return;
		}

		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		$install_url = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=elementor' ), 'install-plugin_elementor' );

		$renderer->print_admin_notice( [
			'title' => esc_html__( 'Elementor Pro plugin requires installing the Elementor plugin', 'elementor-pro' ),
			'description' => esc_html__( 'Install and activate the Elementor plugin to access all the Pro features.', 'elementor-pro' ),
			'button' => [
				'text' => esc_html__( 'Install Now', 'elementor-pro' ),
				'url' => $install_url,
				'type' => 'cta',
			],
			'dismissible' => false,
		] );
	}
}
