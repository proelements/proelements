<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

use Elementor\Core\Page_Assets\Data_Managers\Font_Icon_Svg\Manager as Font_Icon_Svg_Data_Manager;
use Elementor\Core\Utils\Svg\Svg_Sanitizer;
use Elementor\Icons_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Resolver {
	const FONT_AWESOME_PREFIX = 'fa-';

	const CACHE_GROUP = 'elementor_custom_icon_svg';

	const MAX_LIBRARY_ICONS = 250;

	const CACHE_TTL = 7 * DAY_IN_SECONDS;

	const CONVERTER_VERSION = '3';

	private static array $memory = [];

	private static array $tab_memory = [];

	private static array $values_memory = [];

	private static array $names_memory = [];

	private static array $signature_memory = [];

	public static function reset_memory(): void {
		self::$memory = [];
		self::$tab_memory = [];
		self::$values_memory = [];
		self::$names_memory = [];
		self::$signature_memory = [];
		Fontello_Glyph_Parser::reset_memory();
		Pack_Directory::reset_memory();
	}

	public static function resolve( array $icon ): string {
		$library = isset( $icon['library'] ) && is_string( $icon['library'] ) ? $icon['library'] : '';
		$value = isset( $icon['value'] ) && is_string( $icon['value'] ) ? $icon['value'] : '';

		if ( '' === $library || '' === $value ) {
			return '';
		}

		if ( str_starts_with( $library, self::FONT_AWESOME_PREFIX ) ) {
			return '';
		}

		if ( Font_Icon_Svg_Data_Manager::get_font_family( $library ) ) {
			return '';
		}

		$tab = self::tab_for_library( $library );

		if ( ! $tab ) {
			return '';
		}

		$cache_key = self::cache_key( $library, $value, $tab );

		$cached = self::cache_get( $cache_key );

		if ( is_string( $cached ) ) {
			return $cached;
		}

		$converter = Converter_Registry::for_tab( $tab );
		$markup = $converter ? $converter->convert( $tab, $value ) : '';
		$markup = self::sanitize( $markup );

		self::cache_set( $cache_key, $markup );

		return $markup;
	}

	public static function resolve_library( string $library ): array {
		return self::resolve_library_response( $library )['icons'];
	}

	/**
	 * @return array{icons: array<string, string>, truncated: bool, total: int}
	 */
	public static function resolve_library_response( string $library, int $offset = 0, int $limit = self::MAX_LIBRARY_ICONS ): array {
		$values = self::build_library_values( $library, max( 0, $offset ), max( 1, min( $limit, self::MAX_LIBRARY_ICONS ) ) );
		$result = [];

		foreach ( $values['values'] as $value ) {
			$markup = self::resolve( [
				'library' => $library,
				'value' => $value,
			] );

			if ( '' !== $markup ) {
				$result[ $value ] = $markup;
			}
		}

		return [
			'icons' => $result,
			'truncated' => $values['truncated'],
			'total' => $values['total'],
		];
	}

	/**
	 * @return array{values: array<string, string>, truncated: bool, total: int}
	 */
	public static function resolve_library_values( string $library ): array {
		if ( ! isset( self::$values_memory[ $library ] ) ) {
			self::$values_memory[ $library ] = self::build_library_values( $library, 0, self::MAX_LIBRARY_ICONS );
		}

		return self::$values_memory[ $library ];
	}

	private static function build_library_values( string $library, int $offset, int $limit ): array {
		$tab = self::tab_for_library( $library );

		if ( ! $tab ) {
			return [
				'values' => [],
				'truncated' => false,
				'total' => 0,
			];
		}

		if ( ! isset( self::$names_memory[ $library ] ) ) {
			self::$names_memory[ $library ] = self::icon_names( $tab );
		}

		$all_names = self::$names_memory[ $library ];
		$total = count( $all_names );
		$names = array_slice( $all_names, $offset, $limit );
		$prefix = isset( $tab['prefix'] ) && is_string( $tab['prefix'] ) ? $tab['prefix'] : '';
		$display_prefix = isset( $tab['displayPrefix'] ) && is_string( $tab['displayPrefix'] ) && '' !== $tab['displayPrefix']
			? $tab['displayPrefix']
			: rtrim( $prefix, '-' );

		$values = [];

		foreach ( $names as $name ) {
			$values[ $name ] = trim( $display_prefix . ' ' . $prefix . $name );
		}

		return [
			'values' => $values,
			'truncated' => $offset + $limit < $total,
			'total' => $total,
		];
	}

	public static function is_renderable_value( string $library, string $value ): bool {
		return '' !== self::resolve( [
			'library' => $library,
			'value' => $value,
		] );
	}

	private static function sanitize( string $markup ): string {
		if ( '' === $markup || ! class_exists( Svg_Sanitizer::class ) ) {
			return '';
		}

		$sanitized = ( new Svg_Sanitizer() )->sanitize( $markup );

		return is_string( $sanitized ) && '' !== $sanitized ? $sanitized : '';
	}

	private static function tab_for_library( string $library ): ?array {
		if ( ! array_key_exists( $library, self::$tab_memory ) ) {
			self::$tab_memory[ $library ] = self::load_tab_for_library( $library );
		}

		return self::$tab_memory[ $library ];
	}

	private static function load_tab_for_library( string $library ): ?array {
		$tab = self::get_tab( $library );

		if ( ! $tab || ! Pack_Directory::is_supported( $tab ) ) {
			return null;
		}

		$from_disk = Icomoon_Converter::tab_from_disk( $library ) ?? Fontello_Converter::tab_from_disk( $library );

		if ( ! $from_disk ) {
			return $tab;
		}

		if ( empty( $tab['prefix'] ) && ! empty( $from_disk['prefix'] ) ) {
			$tab['prefix'] = $from_disk['prefix'];
		}

		if ( empty( $tab['icons'] ) && ! empty( $from_disk['icons'] ) ) {
			$tab['icons'] = $from_disk['icons'];
		}

		if ( empty( $tab['custom_icon_type'] ) && ! empty( $from_disk['custom_icon_type'] ) ) {
			$tab['custom_icon_type'] = $from_disk['custom_icon_type'];
		}

		return $tab;
	}

	private static function get_tab( string $library ): ?array {
		if ( ! class_exists( Icons_Manager::class ) ) {
			return null;
		}

		foreach ( Icons_Manager::get_icon_manager_tabs() as $name => $tab ) {
			if ( ! is_array( $tab ) ) {
				continue;
			}

			$tab_name = isset( $tab['name'] ) && is_scalar( $tab['name'] ) ? (string) $tab['name'] : '';

			if ( (string) $name === $library || $tab_name === $library ) {
				return $tab;
			}
		}

		return null;
	}

	private static function icon_names( array $tab ): array {
		$names = [];

		if ( ! empty( $tab['icons'] ) && is_array( $tab['icons'] ) ) {
			foreach ( $tab['icons'] as $key => $entry ) {
				if ( is_string( $entry ) && '' !== $entry ) {
					$names[] = $entry;
					continue;
				}

				if ( is_string( $key ) && '' !== $key && ! is_numeric( $key ) ) {
					$names[] = $key;
				}
			}
		}

		if ( ! empty( $names ) ) {
			return $names;
		}

		$dir = Pack_Directory::resolve( $tab );

		if ( '' === $dir ) {
			return [];
		}

		$fetch_json = isset( $tab['fetchJson'] ) && is_string( $tab['fetchJson'] ) ? $tab['fetchJson'] : '';

		if ( '' !== $fetch_json ) {
			$fetch_path = wp_parse_url( $fetch_json, PHP_URL_PATH );
			$from_fetch = self::names_from_json_file( $dir . '/' . basename( is_string( $fetch_path ) ? $fetch_path : '' ) );

			if ( ! empty( $from_fetch ) ) {
				return $from_fetch;
			}
		}

		$from_config = self::names_from_json_file( $dir . '/config.json' );

		if ( ! empty( $from_config ) ) {
			return $from_config;
		}

		$selection_path = $dir . '/selection.json';

		if ( is_readable( $selection_path ) ) {
			$raw = file_get_contents( $selection_path );
			$data = is_string( $raw ) ? json_decode( $raw, true ) : null;

			return is_array( $data ) ? Icomoon_Converter::names_from_selection( $data ) : [];
		}

		return [];
	}

	private static function names_from_json_file( string $path ): array {
		if ( '' === $path || ! is_readable( $path ) ) {
			return [];
		}

		$raw = file_get_contents( $path );
		$data = is_string( $raw ) ? json_decode( $raw, true ) : null;

		if ( ! is_array( $data ) ) {
			return [];
		}

		if ( ! empty( $data['icons'] ) && is_array( $data['icons'] ) ) {
			$names = [];

			foreach ( $data['icons'] as $entry ) {
				if ( is_string( $entry ) && '' !== $entry ) {
					$names[] = $entry;
				}
			}

			if ( ! empty( $names ) ) {
				return $names;
			}
		}

		return Fontello_Converter::names_from_config( $data );
	}

	private static function cache_key( string $library, string $value, array $tab ): string {
		if ( ! isset( self::$signature_memory[ $library ] ) ) {
			self::$signature_memory[ $library ] = self::pack_signature( $tab );
		}

		return md5( $library . "\0" . $value . "\0" . self::$signature_memory[ $library ] );
	}

	private static function pack_signature( array $tab ): string {
		$ver = isset( $tab['ver'] ) && ( is_string( $tab['ver'] ) || is_numeric( $tab['ver'] ) ) ? (string) $tab['ver'] : '';
		$dir = Pack_Directory::resolve( $tab );
		$signature = self::CONVERTER_VERSION . '|' . $ver . '|' . $dir;
		$stamp_paths = [
			$dir . '/config.json',
			$dir . '/selection.json',
		];
		$font = Pack_Directory::find_svg_font( $dir );

		if ( '' !== $font ) {
			$stamp_paths[] = $font;
		}

		foreach ( $stamp_paths as $path ) {
			if ( is_readable( $path ) ) {
				$signature .= '|' . filemtime( $path ) . ':' . filesize( $path );
			}
		}

		return $signature;
	}

	private static function cache_get( string $key ): ?string {
		if ( array_key_exists( $key, self::$memory ) ) {
			return self::$memory[ $key ];
		}

		if ( function_exists( 'wp_cache_get' ) ) {
			$cached = wp_cache_get( $key, self::CACHE_GROUP );

			if ( is_string( $cached ) ) {
				self::$memory[ $key ] = $cached;

				return $cached;
			}
		}

		return null;
	}

	private static function cache_set( string $key, string $markup ): void {
		self::$memory[ $key ] = $markup;

		if ( function_exists( 'wp_cache_set' ) ) {
			wp_cache_set( $key, $markup, self::CACHE_GROUP, self::CACHE_TTL );
		}
	}
}
