<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Pack_Directory {
	/**
	 * @return string[]
	 */
	const SVG_FONT_RELATIVE_PATHS = [
		'fontello' => 'font/fontello.svg',
		'icomoon' => 'fonts/icomoon.svg',
		'fontastic' => 'fonts/fontastic.svg',
	];

	const ALLOWED_TYPES = [ 'fontello', 'icomoon', 'fontastic' ];

	const SVG_FONT_FOLDERS = [ 'font', 'fonts' ];

	private static array $font_memory = [];

	public static function reset_memory(): void {
		self::$font_memory = [];
	}

	public static function detect_type( array $tab ): string {
		$type = isset( $tab['custom_icon_type'] ) && is_string( $tab['custom_icon_type'] )
			? strtolower( $tab['custom_icon_type'] )
			: '';

		if ( in_array( $type, self::ALLOWED_TYPES, true ) ) {
			return $type;
		}

		if ( '' !== $type ) {
			return '';
		}

		$dir = self::resolve( $tab );

		if ( '' === $dir ) {
			return '';
		}

		if ( is_readable( $dir . '/selection.json' ) ) {
			return 'icomoon';
		}

		if ( is_readable( $dir . '/config.json' ) && '' !== self::find_svg_font_in( $dir, 'font' ) ) {
			return 'fontello';
		}

		if ( self::is_svg_font( $dir . '/' . self::SVG_FONT_RELATIVE_PATHS['fontastic'] ) ) {
			return 'fontastic';
		}

		return '';
	}

	public static function is_supported( array $tab ): bool {
		return '' !== self::detect_type( $tab );
	}

	public static function resolve( array $tab ): string {
		$candidates = self::candidates( $tab );
		$fallback = isset( $candidates[0] ) && is_string( $candidates[0] ) ? $candidates[0] : '';

		if ( function_exists( 'apply_filters' ) ) {
			$filtered = apply_filters(
				'elementor-pro/atomic-custom-icons/library-dir',
				$fallback,
				$tab
			);

			if ( is_string( $filtered ) && '' !== $filtered && self::is_allowed_pack_dir( $filtered ) ) {
				array_unshift( $candidates, rtrim( $filtered, '/\\' ) );
			}
		}

		foreach ( array_unique( $candidates ) as $dir ) {
			if ( '' !== $dir && self::is_allowed_pack_dir( $dir ) ) {
				$resolved = realpath( $dir );

				return is_string( $resolved ) ? $resolved : '';
			}
		}

		return self::is_allowed_pack_dir( $fallback ) ? (string) realpath( $fallback ) : '';
	}

	/**
	 * Lookup order: the fixed names of each vendor export first, then the first valid SVG font
	 * (alphabetical) in `font/`, then in `fonts/`. Packs exported with a custom font name only
	 * match the last two steps. Memoized per request; `reset_memory()` clears it.
	 */
	public static function find_svg_font( string $dir ): string {
		if ( '' === $dir ) {
			return '';
		}

		if ( isset( self::$font_memory[ $dir ] ) && is_readable( self::$font_memory[ $dir ] ) ) {
			return self::$font_memory[ $dir ];
		}

		$path = self::lookup_svg_font( $dir );

		if ( '' !== $path ) {
			self::$font_memory[ $dir ] = $path;
		}

		return $path;
	}

	private static function lookup_svg_font( string $dir ): string {
		foreach ( self::SVG_FONT_RELATIVE_PATHS as $relative ) {
			$path = $dir . '/' . $relative;

			if ( self::is_svg_font( $path ) ) {
				return $path;
			}
		}

		foreach ( self::SVG_FONT_FOLDERS as $folder ) {
			$path = self::find_svg_font_in( $dir, $folder );

			if ( '' !== $path ) {
				return $path;
			}
		}

		return '';
	}

	private static function find_svg_font_in( string $dir, string $folder ): string {
		$folder_path = $dir . '/' . $folder;
		$names = is_dir( $folder_path ) ? scandir( $folder_path ) : false;

		foreach ( false === $names ? [] : $names as $name ) {
			$path = $folder_path . '/' . $name;

			if ( 'svg' === strtolower( pathinfo( $name, PATHINFO_EXTENSION ) ) && self::is_svg_font( $path ) ) {
				return $path;
			}
		}

		return '';
	}

	public static function public_urls( array $tab ): array {
		$dir = self::resolve( $tab );

		if ( '' === $dir || ! function_exists( 'wp_upload_dir' ) ) {
			return [];
		}

		$uploads = wp_upload_dir();
		$basedir_raw = isset( $uploads['basedir'] ) && is_string( $uploads['basedir'] ) ? $uploads['basedir'] : '';
		$baseurl = isset( $uploads['baseurl'] ) && is_string( $uploads['baseurl'] ) ? rtrim( $uploads['baseurl'], '/' ) : '';
		$basedir = false !== realpath( $basedir_raw ) ? str_replace( '\\', '/', rtrim( (string) realpath( $basedir_raw ), '/\\' ) ) : '';
		$dir_norm = str_replace( '\\', '/', $dir );

		if ( '' === $basedir || '' === $baseurl || ! self::is_allowed_pack_dir( $dir ) ) {
			return [];
		}

		$url = $baseurl . substr( $dir_norm, strlen( $basedir ) );
		$urls = [];

		if ( isset( $tab['fetchJson'] ) && is_string( $tab['fetchJson'] ) && '' !== $tab['fetchJson'] ) {
			$urls['fetchJson'] = $tab['fetchJson'];
		}

		if ( is_readable( $dir . '/config.json' ) ) {
			$urls['configUrl'] = $url . '/config.json';
		}

		if ( is_readable( $dir . '/selection.json' ) ) {
			$urls['selectionUrl'] = $url . '/selection.json';
		}

		$font = self::find_svg_font( $dir );

		if ( '' !== $font && str_starts_with( $font, $dir . '/' ) ) {
			$relative = str_replace( '\\', '/', substr( $font, strlen( $dir ) ) );
			$urls['fontUrl'] = $url . implode( '/', array_map( 'rawurlencode', explode( '/', $relative ) ) );
		}

		return $urls;
	}

	/**
	 * @return string[]
	 */
	private static function candidates( array $tab ): array {
		$dirs = [];
		$name = '';

		if ( isset( $tab['name'] ) && is_scalar( $tab['name'] ) ) {
			$name = (string) $tab['name'];
		}

		$base = self::uploads_base();
		$uploads_root = $base ? rtrim( $base, '/\\' ) . '/elementor/custom-icons/' : '';

		if ( self::is_pack_name( $name ) && '' !== $uploads_root ) {
			$dirs[] = $uploads_root . $name;
		}

		$from_json = self::dir_from_url( isset( $tab['fetchJson'] ) && is_string( $tab['fetchJson'] ) ? $tab['fetchJson'] : '' );

		if ( '' !== $from_json ) {
			$dirs[] = $from_json;
		}

		return $dirs;
	}

	private static function is_pack_name( string $name ): bool {
		return '' !== $name
			&& '.' !== $name
			&& '..' !== $name
			&& ! str_contains( $name, '/' )
			&& ! str_contains( $name, '\\' );
	}

	private static function is_allowed_pack_dir( string $dir ): bool {
		$base_raw = self::uploads_base();

		if ( '' === $base_raw ) {
			return false;
		}

		$root = realpath( rtrim( $base_raw, '/\\' ) . '/elementor/custom-icons' );
		$resolved = realpath( $dir );

		if ( false === $root || false === $resolved ) {
			return false;
		}

		$root_prefix = trailingslashit( str_replace( '\\', '/', $root ) );

		return str_starts_with( str_replace( '\\', '/', $resolved ) . '/', $root_prefix )
			&& str_replace( '\\', '/', $resolved ) . '/' !== $root_prefix;
	}

	private static function is_svg_font( string $path ): bool {
		if ( ! is_readable( $path ) ) {
			return false;
		}

		$sample = file_get_contents( $path, false, null, 0, 4096 );

		return is_string( $sample ) && ( str_contains( $sample, '<font' ) || str_contains( $sample, '<glyph' ) );
	}

	private static function dir_from_url( string $url ): string {
		if ( '' === $url || ! function_exists( 'wp_upload_dir' ) ) {
			return '';
		}

		$uploads = wp_upload_dir();
		$baseurl = isset( $uploads['baseurl'] ) && is_string( $uploads['baseurl'] ) ? $uploads['baseurl'] : '';
		$basedir = isset( $uploads['basedir'] ) && is_string( $uploads['basedir'] ) ? $uploads['basedir'] : '';

		if ( '' === $baseurl || '' === $basedir ) {
			return '';
		}

		$baseurl_prefix = rtrim( $baseurl, '/' ) . '/';

		if ( rtrim( $baseurl, '/' ) !== $url && ! str_starts_with( $url, $baseurl_prefix ) ) {
			return '';
		}

		$url_path = wp_parse_url( $url, PHP_URL_PATH );
		$base_path = wp_parse_url( $baseurl, PHP_URL_PATH );

		if ( ! is_string( $url_path ) || ! is_string( $base_path ) ) {
			return '';
		}

		$base_path_prefix = rtrim( $base_path, '/' ) . '/';

		if ( rtrim( $base_path, '/' ) !== $url_path && ! str_starts_with( $url_path, $base_path_prefix ) ) {
			return '';
		}

		if ( str_contains( $url_path, '..' ) ) {
			return '';
		}

		$relative = substr( $url_path, strlen( $base_path ) );
		$path = rtrim( $basedir, '/\\' ) . $relative;
		$dir = rtrim( dirname( $path ), '/\\' );

		if ( ! self::is_allowed_pack_dir( $dir ) ) {
			return '';
		}

		$resolved = realpath( $dir );

		return is_string( $resolved ) ? $resolved : '';
	}

	private static function uploads_base(): string {
		if ( ! function_exists( 'wp_upload_dir' ) ) {
			return '';
		}

		$uploads = wp_upload_dir();

		return isset( $uploads['basedir'] ) && is_string( $uploads['basedir'] ) ? $uploads['basedir'] : '';
	}
}
