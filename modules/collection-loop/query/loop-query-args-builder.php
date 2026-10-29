<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Element_Base;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Post_Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Base;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Registry;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Loop_Query_Args_Builder {
	/**
	 * Storage key under which the transformer stashes the raw resolved settings
	 * so the element / builder can rebuild an item provider on demand. Prefer
	 * the `extract_settings()` helper over reading this key directly.
	 */
	const SETTINGS_KEY = 'settings';

	/**
	 * Internal settings key used to signal pagination for post-based template
	 * types. Prefer the `extract_page()` / `apply_pagination()` helpers over
	 * reading or writing this key directly.
	 */
	const PAGE_SETTING_KEY = '__paged';

	/**
	 * Internal settings key that pages post-based template types by item offset
	 * instead of page number, as static alternates require. Prefer the
	 * `extract_offset()` / `apply_offset()` helpers over using it directly.
	 */
	const OFFSET_SETTING_KEY = '__offset';

	public static function item_provider_from_resolved( array $value, ?Element_Base $element = null ): Loop_Item_Provider {
		$value = self::unwrap_settings( $value );
		$type  = self::resolve_template_type( $value );

		if ( null === $type ) {
			return new Post_Loop_Item_Provider( new \WP_Query() );
		}

		return $type->build_item_provider( $value, $element );
	}

	public static function extract_query_id( array $settings ): string {
		return is_string( $settings['query_id'] ?? null ) ? $settings['query_id'] : '';
	}

	public static function extract_settings( array $resolved ): array {
		return is_array( $resolved[ self::SETTINGS_KEY ] ?? null ) ? $resolved[ self::SETTINGS_KEY ] : [];
	}

	public static function extract_page( array $settings ): int {
		return (int) ( $settings[ self::PAGE_SETTING_KEY ] ?? 0 );
	}

	public static function apply_pagination( array $settings, int $page ): array {
		if ( $page > 1 ) {
			$settings[ self::PAGE_SETTING_KEY ] = $page;
		}

		return $settings;
	}

	public static function extract_offset( array $settings ): int {
		return (int) ( $settings[ self::OFFSET_SETTING_KEY ] ?? 0 );
	}

	public static function apply_offset( array $settings, int $offset ): array {
		if ( $offset > 0 ) {
			$settings[ self::OFFSET_SETTING_KEY ] = $offset;
		}

		return $settings;
	}

	/**
	 * Tolerate callers that hand us the full transformer envelope
	 * (`[ query_id, settings ]`) instead of the raw settings dict. Without
	 * this, `template_type` wouldn't resolve and we'd silently fall back to the
	 * default type with empty settings.
	 */
	private static function unwrap_settings( array $value ): array {
		if ( isset( $value[ self::SETTINGS_KEY ] ) && is_array( $value[ self::SETTINGS_KEY ] ) ) {
			return $value[ self::SETTINGS_KEY ];
		}

		return $value;
	}

	private static function resolve_template_type( array $value ): ?Template_Type_Base {
		$registry = Template_Type_Registry::instance();
		$id       = is_string( $value['template_type'] ?? null ) && '' !== $value['template_type']
			? $value['template_type']
			: $registry->get_default_id();

		return $registry->get( $id ) ?? $registry->get_default();
	}
}
