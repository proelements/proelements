<?php

namespace ElementorPro\Modules\Attributes\Utils;

use Elementor\Core\Base\Document;
use Elementor\Modules\AtomicWidgets\Utils\Custom_Attributes_Trust;
use Elementor\Plugin;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Mirrors Core's custom attribute rules for Core versions that predate them.
// Remove once ELEMENTOR_PRO_REQUIRED_CORE_VERSION guarantees Core ships Custom_Attributes_Trust.
class Custom_Attributes_Compat {
	const LAST_EDITOR_META_KEY = '_elementor_data_last_editor';

	const UNFILTERED_CAPABILITY = 'unfiltered_html';

	const NAME_PATTERN = '/^[a-zA-Z0-9_-]+$/D';

	const EVENT_HANDLER_NAME_PATTERN = '/^on[a-z]*$/iD';

	const BLOCKED_NAME_PREFIXES = [ 'x-' ];

	const URL_NAMES = [ 'action', 'formaction', 'href', 'src' ];

	const HTML_NAMES = [ 'srcdoc' ];

	public static function is_core_supported(): bool {
		return class_exists( Custom_Attributes_Trust::class )
			&& method_exists( Utils::class, 'is_allowed_custom_attribute_name' )
			&& method_exists( Utils::class, 'sanitize_custom_attribute_value' );
	}

	public static function register_hooks(): void {
		if ( self::is_core_supported() ) {
			return;
		}

		add_action( 'added_post_meta', [ self::class, 'record_last_editor' ], 10, 3 );
		add_action( 'updated_post_meta', [ self::class, 'record_last_editor' ], 10, 3 );
		add_filter( 'elementor/editor/localize_settings', [ self::class, 'add_editor_user_settings' ] );
	}

	public static function record_last_editor( $meta_id, $post_id, $meta_key ): void {
		$user_id = get_current_user_id();

		if ( Document::ELEMENTOR_DATA_META_KEY !== $meta_key || ! $user_id ) {
			return;
		}

		update_metadata( 'post', $post_id, self::LAST_EDITOR_META_KEY, $user_id );
	}

	public static function add_editor_user_settings( $settings ) {
		if ( ! isset( $settings['user']['can_save_unfiltered_html'] ) ) {
			$settings['user']['can_save_unfiltered_html'] = current_user_can( self::UNFILTERED_CAPABILITY );
		}

		return $settings;
	}

	public static function can_print_unfiltered_in_current_document(): bool {
		if ( self::is_core_supported() ) {
			return Custom_Attributes_Trust::can_print_unfiltered_in_current_document();
		}

		if ( self::is_editor_request() ) {
			return false;
		}

		$document = Plugin::$instance->documents->get_current();

		return $document instanceof Document && self::is_post_trusted( (int) $document->get_post()->ID );
	}

	public static function is_allowed_name( $name, bool $allow_unfiltered_names ): bool {
		if ( self::is_core_supported() ) {
			return Utils::is_allowed_custom_attribute_name( $name, $allow_unfiltered_names );
		}

		if ( ! is_string( $name ) || ! preg_match( self::NAME_PATTERN, $name ) ) {
			return false;
		}

		if ( $allow_unfiltered_names ) {
			return true;
		}

		$normalized_name = strtolower( $name );

		if ( in_array( $normalized_name, self::HTML_NAMES, true ) || preg_match( self::EVENT_HANDLER_NAME_PATTERN, $name ) ) {
			return false;
		}

		foreach ( self::BLOCKED_NAME_PREFIXES as $prefix ) {
			if ( 0 === strpos( $normalized_name, $prefix ) ) {
				return false;
			}
		}

		return true;
	}

	public static function sanitize_value( string $name, string $value ): string {
		if ( self::is_core_supported() ) {
			return Utils::sanitize_custom_attribute_value( $name, $value );
		}

		$normalized_name = strtolower( $name );

		if ( in_array( $normalized_name, self::URL_NAMES, true ) ) {
			return wp_kses_bad_protocol( $value, wp_allowed_protocols() );
		}

		if ( in_array( $normalized_name, self::HTML_NAMES, true ) ) {
			return wp_kses_post( $value );
		}

		return $value;
	}

	private static function is_post_trusted( int $post_id ): bool {
		if ( ! metadata_exists( 'post', $post_id, self::LAST_EDITOR_META_KEY ) ) {
			return true;
		}

		$last_editor_id = (int) get_metadata( 'post', $post_id, self::LAST_EDITOR_META_KEY, true );

		return $last_editor_id > 0 && user_can( $last_editor_id, self::UNFILTERED_CAPABILITY );
	}

	private static function is_editor_request(): bool {
		return Plugin::$instance->editor->is_edit_mode() || Plugin::$instance->preview->is_preview_mode();
	}
}
