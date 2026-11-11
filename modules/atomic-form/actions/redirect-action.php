<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\Modules\AtomicForm\Classes\Field_Id_Shortcode_Resolver;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Redirect_Action extends Action_Base {

	private const ALLOWED_SCHEMES = [ 'http', 'https', 'ftp', 'ftps' ];

	public function get_type(): string {
		return Action_Type::REDIRECT;
	}

	public function execute( array $form_data, array $widget_settings, array $context ): array {
		$template = trim( (string) ( $widget_settings['redirect_url'] ?? '' ) );

		if ( $this->has_placeholder_in_origin( $template ) ) {
			return $this->failure( __( 'Redirect URL is required and must be valid', 'elementor-pro' ) );
		}

		$resolved = ( new Field_Id_Shortcode_Resolver( $form_data, true, $context['cssid_map'] ?? [] ) )->resolve( $template );
		$url = esc_url_raw( $resolved, self::ALLOWED_SCHEMES );

		// esc_url_raw() prepends "http://" to scheme-less values, so the scheme must already be explicit before sanitizing.
		if ( ! $this->is_valid_redirect_url( $resolved ) || ! $this->is_valid_redirect_url( $url ) ) {
			return $this->failure( __( 'Redirect URL is required and must be valid', 'elementor-pro' ) );
		}

		return $this->success(
			__( 'Redirect URL resolved successfully', 'elementor-pro' ),
			[ 'redirectUrl' => $url ]
		);
	}

	/**
	 * Field placeholders may only appear after the host (path, query, fragment),
	 * so a submitter can never control the scheme or the host of the redirect.
	 */
	private function has_placeholder_in_origin( string $template ): bool {
		preg_match( '#^[^/?\#]*(?://[^/?\#]*)?#', $template, $matches );

		return false !== strpos( $matches[0] ?? '', '[field' );
	}

	private function is_valid_redirect_url( string $url ): bool {
		if ( '' === $url ) {
			return false;
		}

		$parts = wp_parse_url( $url );

		if ( ! is_array( $parts ) || empty( $parts['scheme'] ) || empty( $parts['host'] ) ) {
			return false;
		}

		return in_array( strtolower( $parts['scheme'] ), self::ALLOWED_SCHEMES, true );
	}
}
