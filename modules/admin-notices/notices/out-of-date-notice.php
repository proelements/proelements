<?php

namespace ElementorPro\Modules\AdminNotices\Notices;

use ElementorPro\Modules\AdminNotices\Components\Notice_Renderer;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Out_Of_Date_Notice {

	public function print(): void {
		if ( ! current_user_can( 'update_plugins' ) ) {
			return;
		}

		$file_path = 'elementor/elementor.php';
		$upgrade_link = wp_nonce_url( self_admin_url( 'update.php?action=upgrade-plugin&plugin=' ) . $file_path, 'upgrade-plugin_' . $file_path );

		$renderer = new Notice_Renderer();
		$renderer->print_admin_notice( [
			'title' => esc_html__( 'Elementor Pro requires newer version of the Elementor plugin', 'elementor-pro' ),
			'description' => esc_html__( 'Update the Elementor plugin to reactivate the Elementor Pro plugin.', 'elementor-pro' ),
			'button' => [
				'text' => esc_html__( 'Update Now', 'elementor-pro' ),
				'url' => $upgrade_link,
				'type' => 'cta',
			],
			'dismissible' => false,
		] );
	}
}
