<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

use Elementor\Core\Utils\Svg\Svg_Sanitizer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Durable store for Font Awesome Pro icon geometry captured from the user's own kit.
 *
 * The kit is the only source of Pro SVG data and only exists in the browser, so the editor
 * sends the geometry once when a licensed user renders an icon, and the server keeps it. Saved
 * icons keep rendering whatever the license state while a kit is configured; once the kit is
 * removed, callers render the default icon instead.
 *
 * Each icon is its own non-autoloaded option, so a render reads one small row and the first
 * write is an atomic insert. The first write wins: geometry stays as captured even after the
 * kit moves to a newer Font Awesome version, until an admin re-renders the icon.
 *
 * Content that never went through a licensed canvas render (imports, templates, cross-site
 * paste, AI or MCP writes) has nothing stored and renders the default icon.
 */
class Font_Awesome_Pro_Icons {
	const OPTION_PREFIX = 'elementor_pro_atomic_fa_pro_icon_';

	const LIBRARIES = [ 'fa-solid', 'fa-regular', 'fa-light', 'fa-brands' ];

	const MAX_ENTRIES = 2500;

	const MAX_PATHS = 2;

	const MAX_PATH_LENGTH = 8000;

	const MAX_TOTAL_PATH_LENGTH = 10000;

	const MAX_DIMENSION = 2048;

	private static $entries_cache = [];

	const VALUE_PATTERN = '/^fa-[a-z]+ fa-[a-z0-9-]+\z/D';

	const PATH_PATTERN = '/^[MmLlHhVvCcSsQqTtAaZz0-9eE.,\s+-]+\z/D';

	public static function reset_cache(): void {
		self::$entries_cache = [];
	}

	public static function is_font_awesome_pro_library( $library ): bool {
		return is_string( $library ) && in_array( $library, self::LIBRARIES, true );
	}

	/**
	 * @return true|\WP_Error
	 */
	public static function store( string $library, string $value, int $width, int $height, array $paths ) {
		$error = self::validate( $library, $value, $width, $height, $paths );

		if ( $error ) {
			return $error;
		}

		$option_name = self::get_option_name( $library, $value );
		$entry = [
			'library' => $library,
			'value' => $value,
			'width' => $width,
			'height' => $height,
			'paths' => array_values( $paths ),
		];

		$existing = self::get_entry( $library, $value );

		if ( null !== $existing ) {
			if ( self::is_invalid_entry( $existing ) || current_user_can( 'manage_options' ) ) {
				update_option( $option_name, $entry, false );
				self::$entries_cache[ $option_name ] = $entry;
			}

			return true;
		}

		if ( self::count_entries() >= self::MAX_ENTRIES ) {
			return new \WP_Error( 'font_awesome_pro_icon_limit', __( 'Too many stored icons.', 'elementor-pro' ) );
		}

		if ( add_option( $option_name, $entry, '', false ) ) {
			self::$entries_cache[ $option_name ] = $entry;
		} elseif ( self::is_unusable_row( $option_name ) ) {
			// A corrupt or colliding row would otherwise block this icon for good.
			delete_option( $option_name );
			self::$entries_cache[ $option_name ] = add_option( $option_name, $entry, '', false ) ? $entry : null;
		} else {
			unset( self::$entries_cache[ $option_name ] );
		}

		return true;
	}

	public static function resolve( array $icon ): string {
		$library = isset( $icon['library'] ) && is_string( $icon['library'] ) ? $icon['library'] : '';
		$value = isset( $icon['value'] ) && is_string( $icon['value'] ) ? $icon['value'] : '';

		if ( ! self::is_font_awesome_pro_library( $library ) || '' === $value ) {
			return '';
		}

		$entry = self::get_entry( $library, $value );

		if ( null === $entry || self::is_invalid_entry( $entry ) ) {
			return '';
		}

		$paths_markup = '';

		foreach ( $entry['paths'] as $path ) {
			$paths_markup .= '<path d="' . esc_attr( $path ) . '"></path>';
		}

		$svg = sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d">%s</svg>',
			(int) $entry['width'],
			(int) $entry['height'],
			$paths_markup
		);

		$sanitized = ( new Svg_Sanitizer() )->sanitize( $svg );

		return is_string( $sanitized ) ? $sanitized : '';
	}

	private static function validate( string $library, string $value, int $width, int $height, array $paths ) {
		$valid = self::is_font_awesome_pro_library( $library )
			&& 0 === strpos( $value, $library . ' fa-' )
			&& 1 === preg_match( self::VALUE_PATTERN, $value )
			&& $width >= 1 && $width <= self::MAX_DIMENSION
			&& $height >= 1 && $height <= self::MAX_DIMENSION
			&& count( $paths ) >= 1 && count( $paths ) <= self::MAX_PATHS;

		$total_length = 0;

		if ( $valid ) {
			foreach ( $paths as $path ) {
				if ( ! is_string( $path ) || strlen( $path ) > self::MAX_PATH_LENGTH || 1 !== preg_match( self::PATH_PATTERN, $path ) ) {
					$valid = false;
					break;
				}

				$total_length += strlen( $path );
			}
		}

		$valid = $valid && $total_length <= self::MAX_TOTAL_PATH_LENGTH;

		return $valid ? null : new \WP_Error( 'invalid_font_awesome_pro_icon', __( 'Invalid icon data.', 'elementor-pro' ) );
	}

	private static function get_option_name( string $library, string $value ): string {
		return self::OPTION_PREFIX . md5( $library . ':' . $value );
	}

	private static function get_entry( string $library, string $value ): ?array {
		$option_name = self::get_option_name( $library, $value );

		if ( ! array_key_exists( $option_name, self::$entries_cache ) ) {
			$entry = get_option( $option_name, null );
			self::$entries_cache[ $option_name ] = is_array( $entry ) ? $entry : null;
		}

		$entry = self::$entries_cache[ $option_name ];

		$matches = is_array( $entry )
			&& ( $entry['library'] ?? null ) === $library
			&& ( $entry['value'] ?? null ) === $value;

		return $matches ? $entry : null;
	}

	private static function is_unusable_row( string $option_name ): bool {
		unset( self::$entries_cache[ $option_name ] );
		wp_cache_delete( $option_name, 'options' );

		$entry = get_option( $option_name, null );

		if ( ! is_array( $entry ) ) {
			return null !== $entry;
		}

		$library = $entry['library'] ?? null;
		$value = $entry['value'] ?? null;

		if ( ! is_string( $library ) || ! is_string( $value ) || self::get_option_name( $library, $value ) !== $option_name ) {
			return true;
		}

		return self::is_invalid_entry( $entry );
	}

	private static function is_invalid_entry( array $entry ): bool {
		return null !== self::validate(
			is_string( $entry['library'] ?? null ) ? $entry['library'] : '',
			is_string( $entry['value'] ?? null ) ? $entry['value'] : '',
			(int) ( $entry['width'] ?? 0 ),
			(int) ( $entry['height'] ?? 0 ),
			(array) ( $entry['paths'] ?? [] )
		);
	}

	private static function count_entries(): int {
		global $wpdb;

		return (int) $wpdb->get_var( $wpdb->prepare(
			"SELECT COUNT(*) FROM {$wpdb->options} WHERE option_name LIKE %s",
			$wpdb->esc_like( self::OPTION_PREFIX ) . '%'
		) );
	}
}
