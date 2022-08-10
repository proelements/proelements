<?php

namespace ElementorPro\Modules\Notes;

use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin_Bar {

	/**
	 * Register actions and hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'admin_bar_menu', function ( \WP_Admin_Bar $wp_admin_bar ) {
			if ( is_admin() || ! current_user_can( Capabilities::READ_NOTES ) ) {
				return;
			}

			$wp_admin_bar->add_node( [
				'id' => 'elementor_notes',
				'title' => esc_html__( 'Notes', 'elementor-pro' ),
				'href' => '#', // Click event is handled by JS.
			] );
		}, 200 ); // Before "Elementor Debugger".
	}
}
