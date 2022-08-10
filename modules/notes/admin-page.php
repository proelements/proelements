<?php

namespace ElementorPro\Modules\Notes;

use Elementor\Settings;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * A simple admin page to behave as a proxy for Note opening (using a deep-link).
 * This class registers an admin page the redirects to a Note page, in order to make sure that the user is logged in
 * before accessing a Note (since Notes aren't available for unauthorized users).
 */
class Admin_Page {

	const PAGE_ID = 'elementor-pro-notes-proxy';

	/**
	 * Register actions and hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'admin_menu', function () {
			$this->register_admin_menu();
		}, 206 ); // After Elementor.

		add_action( 'admin_head', function () {
			$this->hide_menu_item();
		} );
	}

	/**
	 * Register the admin page (will be removed later from the menu).
	 *
	 * @return void
	 */
	protected function register_admin_menu() {
		add_submenu_page(
			Settings::PAGE_ID,
			esc_html__( 'Notes Proxy', 'elementor-pro' ),
			esc_html__( 'Notes Proxy', 'elementor-pro' ),
			'read',
			static::PAGE_ID
		);

		add_action( 'current_screen', function ( \WP_Screen $current_screen ) {
			if ( static::PAGE_ID !== $current_screen->id ) {
				return;
			}

			$this->on_page_load();
		} );
	}

	/**
	 * Hide the menu item, since it shouldn't be visible to users in the UI.
	 *
	 * @return void
	 */
	protected function hide_menu_item() {
		remove_submenu_page( Settings::PAGE_ID, static::PAGE_ID );
	}

	/**
	 * Run the actual proxy page.
	 *
	 * @return void
	 */
	public function on_page_load() {
		// No need for nonce check since it's not a user action, and it's safe.
		if ( empty( $_GET['note-id'] ) || ! is_numeric( $_GET['note-id'] ) ) { // phpcs:ignore: WordPress.Security.NonceVerification.Recommended
			$this->safe_redirect( get_site_url() );
			return;
		}

		$note = Note::query()->find( (int) $_GET['note-id'] ); // phpcs:ignore: WordPress.Security.NonceVerification.Recommended

		if ( ! $note ) {
			$message = esc_html__( 'Oops, the note you are looking for cannot be found.', 'elementor-pro' );

			$go_to_dashboard = '<a href="' . esc_url( get_admin_url() ) . '">' . esc_html__( 'Go to WP Dashboard', 'elementor-pro' ) . '</a>';
			$view_site = '<a href="' . esc_url( get_site_url() ) . '">' . esc_html__( 'View Site', 'elementor-pro' ) . '</a>';

			$this->message_and_die( "
				{$message}
				<br /><br />
				{$go_to_dashboard}
				&nbsp;|&nbsp;
				{$view_site}
			" );

			return;
		}

		if ( ! current_user_can( Capabilities::READ_NOTES, $note ) ) {
			$this->message_and_die( esc_html__( 'You are not autorized to view this Note. Please contact your admin.', 'elementor-pro' ) );
			return;
		}

		$this->redirect_to_note( $note );
	}

	/**
	 * Redirect to a note - Used for testing.
	 *
	 * @param Note $note
	 *
	 * @return void
	 */
	protected function redirect_to_note( Note $note ) {
		$url = $note->get_url( false );

		// Note: The URL is safe.
		// `header()` is used since `wp_safe_redirect()` filters chars like `{}` which are required in this case.
		header( 'Location:' . $url, true, 302 );
		die;
	}

	/**
	 * Safe redirect to a page - Used for testing.
	 *
	 * @param string $url
	 *
	 * @return void
	 */
	protected function safe_redirect( $url ) {
		wp_safe_redirect( $url );
		die;
	}

	/**
	 * Show a message to the user and die - Used for testing.
	 *
	 * @param string $message
	 *
	 * @return void
	 */
	protected function message_and_die( $message ) {
		wp_die( $message ); // phpcs:ignore WordPress.Security.EscapeOutput
	}
}
