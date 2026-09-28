<?php

namespace ElementorPro\Modules\CollectionLoop\Import;

use Elementor\Modules\AtomicWidgets\Utils\Atomic_Prop_Remap;
use Elementor\Modules\AtomicWidgets\Utils\Atomic_Prop_Remap_Registry;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query_Import_Remap {
	private const SELECTION_KEY = 'selection';
	private const INCLUDE_FILTERS_KEY = 'include_filters';
	private const EXCLUDE_FILTERS_KEY = 'exclude_filters';
	private const INCLUDE_SUFFIX = '_include';
	private const EXCLUDE_SUFFIX = '_exclude';

	public static function register(): void {
		Atomic_Prop_Remap_Registry::register( Loop_Query_Prop_Type::get_key(), [ self::class, 'remap' ] );
	}

	public static function remap( array $atomic, array $replacements, callable $descend, array $context = [] ): array {
		$value = $atomic['value'] ?? null;

		if ( ! is_array( $value ) ) {
			return $atomic;
		}

		foreach ( $value as $key => $field ) {
			$value[ $key ] = $descend( $field, self::context_for_field( $key, $context ) );
		}

		$atomic['value'] = $value;

		return $atomic;
	}

	private static function context_for_field( $key, array $context ): array {
		if ( ! is_string( $key ) ) {
			return $context;
		}

		if ( self::SELECTION_KEY === $key ) {
			$context['kind'] = Atomic_Prop_Remap::KIND_POST;

			return $context;
		}

		if ( self::INCLUDE_FILTERS_KEY === $key || self::EXCLUDE_FILTERS_KEY === $key ) {
			return $context;
		}

		if ( self::ends_with( $key, self::INCLUDE_SUFFIX ) || self::ends_with( $key, self::EXCLUDE_SUFFIX ) ) {
			$context['kind'] = Atomic_Prop_Remap::KIND_TERM;
		}

		return $context;
	}

	private static function ends_with( string $value, string $suffix ): bool {
		$length = strlen( $suffix );

		return $length <= strlen( $value ) && substr( $value, -$length ) === $suffix;
	}
}
