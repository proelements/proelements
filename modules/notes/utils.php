<?php
namespace ElementorPro\Modules\Notes;

use Elementor\Core\Utils\Collection;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * This is specific for notes and should not be used outside the module.
 */
class Utils {

	/**
	 * Clean the url.
	 *
	 * @param $url
	 *
	 * @return string
	 */
	public static function clean_url( $url ) {
		$parsed_url = wp_parse_url( $url );

		$url = '/';

		if ( isset( $parsed_url['path'] ) ) {
			$url = $parsed_url['path'];
		}

		if ( isset( $parsed_url['query'] ) ) {
			$query = [];

			parse_str( $parsed_url['query'], $query );

			$remove_if_start_with = [ 'utm_' ];
			$remove_if_end_with = [ '_nonce' ];
			$remove_if_is = [ 'fbclid', 'elementor-preview', 'ver', 'preview_id', 'preview_nonce', 'preview', 'theme_template_id', 'nonce' ];

			$query = ( new Collection( $query ) )
				->filter( function ( $value, $key ) use ( $remove_if_start_with, $remove_if_end_with, $remove_if_is ) {
					foreach ( $remove_if_start_with as $term ) {
						if ( 0 === strpos( $key, $term ) ) {
							return false;
						};
					}

					foreach ( $remove_if_end_with as $term ) {
						if ( 1 === preg_match( "/{$term}$/", $key ) ) {
							return false;
						};
					}

					foreach ( $remove_if_is as $term ) {
						if ( $key === $term ) {
							return false;
						}
					}

					return true;
				} );

			if ( ! $query->is_empty() ) {
				$url = implode( '?', [
					$url,
					build_query( $query->all() ),
				] );
			}
		}

		return esc_url_raw( rtrim( $url, '/' ) );
	}

	/**
	 * @param $value
	 *
	 * @return bool
	 */
	public static function validate_url_or_relative_url( $value ) {
		$is_valid_url = filter_var( $value, FILTER_VALIDATE_URL );

		if ( $is_valid_url ) {
			return (bool) $is_valid_url;
		}

		// Check if the $value is relative url.
		return (bool) filter_var( 'https://localhost/' . ltrim( $value, '/' ), FILTER_VALIDATE_URL );
	}

	/**
	 * Clean the WP document title and return it.
	 *
	 * @return string
	 */
	public static function get_clean_document_title() {
		$filter = function ( $title ) {
			if ( is_home() || is_front_page() ) {
				return [ esc_html__( 'Home page', 'elementor-pro' ) ];
			}

			unset( $title['site'] );

			return $title;
		};

		add_filter( 'document_title_parts', $filter );

		$title = wp_get_document_title();

		remove_filter( 'document_title_parts', $filter );

		return $title;
	}
}
