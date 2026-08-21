<?php
namespace ElementorPro\Modules\Popup;

use Elementor\Core\Base\Document;
use Elementor\Core\DynamicTags\Manager as Dynamic_Tags_Manager;
use Elementor\Core\Files\CSS\Post as Post_CSS;
use Elementor\Modules\AtomicWidgets\Styles\CacheValidity\Cache_Validity;
use Elementor\Modules\AtomicWidgets\Utils\Utils;
use ElementorPro\Plugin;
use Throwable;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Popups opened via a runtime trigger (form action, "Open Popup" dynamic tag) miss the
 * one-time per-request CSS enqueue pass, since they're only queued once the triggering
 * widget renders. This scans a post's elements for such triggers and registers the
 * referenced popups early enough (via `elementor/post/render`) to be included in that pass.
 *
 * @see https://github.com/elementor/elementor/issues/35397
 */
class Popup_Trigger_Styles {
	const CACHE_ROOT_KEY = 'popup-trigger-styles-related-posts';

	private $logger;

	private array $rendered_post_ids = [];

	public function __construct() {
		$this->logger = Plugin::elementor()->logger->get_logger();
	}

	public function register_hooks() {
		add_action( 'elementor/post/render', fn( $post_id ) => $this->render_post( $post_id ) );

		add_action( 'elementor/document/after_save', fn( Document $document ) => $this->invalidate_cache(
			[ $document->get_main_post()->ID ]
		), 20, 2 );

		add_action(
			'elementor/core/files/clear_cache',
			fn() => $this->invalidate_cache(),
		);

		if ( version_compare( ELEMENTOR_VERSION, '4.2', '>=' ) ) {
			add_filter(
				'elementor/document/related_posts',
				fn( array $related, $post_id ) => $this->get_related_posts( $related, $post_id ),
				10,
				2
			);
		}
	}

	private function render_post( $post_id ): void {
		if ( isset( $this->rendered_post_ids[ $post_id ] ) ) {
			return;
		}

		$this->rendered_post_ids[ $post_id ] = true;

		try {
			$popup_ids = $this->get_popup_ids_from_post_cached( $post_id );

			$this->declare_popups_triggered( $popup_ids );
		} catch ( Throwable $e ) {
			$this->logger->error( 'Error associating popup ids with post: ' . $e->getMessage() );
		}
	}

	private function get_related_posts( array $related, $post_id ): array {
		try {
			$popup_ids = $this->get_popup_ids_from_post_cached( $post_id );

			return array_values( array_unique( array_merge( $related, $popup_ids ) ) );
		} catch ( Throwable $e ) {
			$this->logger->error( 'Error resolving related popup post ids: ' . $e->getMessage() );

			return $related;
		}
	}

	private function get_popup_ids_from_post_cached( $post_id ): array {
		$cache_validity = new Cache_Validity();

		if ( $cache_validity->is_valid( [ self::CACHE_ROOT_KEY, $post_id ] ) ) {
			$popup_ids = $cache_validity->get_meta( [ self::CACHE_ROOT_KEY, $post_id ] );

			return ( is_array( $popup_ids ) && ! empty( $popup_ids ) ) ? $popup_ids : [];
		}

		$popup_ids = $this->get_popup_ids_from_post( $post_id );

		$cache_validity->validate( [ self::CACHE_ROOT_KEY, $post_id ], $popup_ids );

		return $popup_ids;
	}

	private function declare_popups_triggered( array $popup_ids ): void {
		foreach ( $popup_ids as $popup_id ) {
			if ( ! is_numeric( $popup_id ) || (int) $popup_id <= 0 ) {
				continue;
			}

			do_action( 'elementor/post/render', $popup_id );

			( new Post_CSS( $popup_id ) )->enqueue();

			Module::add_popup_to_location( $popup_id );
		}
	}

	private function get_popup_ids_from_post( $post_id ): array {
		$popup_ids = [];

		Utils::traverse_post_elements( $post_id, function( $element_data ) use ( &$popup_ids ) {
			$settings = $element_data['settings'] ?? [];

			$popup_ids = array_merge( $popup_ids, $this->extract_popup_ids_from_settings( $settings ) );
		} );

		return array_unique( $popup_ids );
	}

	private function extract_popup_ids_from_settings( array $settings ): array {
		$popup_ids = [];

		if ( $this->has_valid_popup_form_action( $settings ) ) {
			$popup_ids[] = $settings['popup_action_popup_id'];
		}

		$atomic_popup_id = $this->extract_popup_id_from_atomic_dynamic_prop( $settings );

		if ( null !== $atomic_popup_id ) {
			$popup_ids[] = $atomic_popup_id;
		}

		foreach ( $settings as $value ) {
			if ( is_array( $value ) ) {
				$popup_ids = array_merge( $popup_ids, $this->extract_popup_ids_from_settings( $value ) );
				continue;
			}

			if ( ! is_string( $value ) || false === strpos( $value, '[' . Dynamic_Tags_Manager::TAG_LABEL ) ) {
				continue;
			}

			$popup_ids = array_merge( $popup_ids, $this->extract_popup_ids_from_tag_string( $value ) );
		}

		return array_map( 'intval', $popup_ids );
	}

	private function extract_popup_id_from_atomic_dynamic_prop( array $prop ) {
		if ( 'dynamic' !== ( $prop['$$type'] ?? null ) || ! is_array( $prop['value'] ?? null ) ) {
			return null;
		}

		$tag_data = $prop['value'];

		if ( 'popup' !== ( $tag_data['name'] ?? null ) || ! is_array( $tag_data['settings'] ?? null ) ) {
			return null;
		}

		$action = $this->deep_unwrap_atomic_prop( $tag_data['settings']['action'] ?? null );

		if ( 'close' === $action ) {
			return null;
		}

		$popup = $this->deep_unwrap_atomic_prop( $tag_data['settings']['popup'] ?? null );

		return ( is_array( $popup ) && ! empty( $popup['id'] ) ) ? $popup['id'] : null;
	}

	private function deep_unwrap_atomic_prop( $value ) {
		if ( ! is_array( $value ) ) {
			return $value;
		}

		if ( array_key_exists( '$$type', $value ) && array_key_exists( 'value', $value ) ) {
			return $this->deep_unwrap_atomic_prop( $value['value'] );
		}

		return array_map( [ $this, 'deep_unwrap_atomic_prop' ], $value );
	}

	private function has_valid_popup_form_action( array $settings ): bool {
		return ! empty( $settings['submit_actions'] )
			&& is_array( $settings['submit_actions'] )
			&& in_array( 'popup', $settings['submit_actions'], true )
			&& 'open' === ( $settings['popup_action'] ?? '' )
			&& ! empty( $settings['popup_action_popup_id'] );
	}

	private function extract_popup_ids_from_tag_string( string $value ): array {
		$popup_ids = [];

		preg_match_all( '/\[' . Dynamic_Tags_Manager::TAG_LABEL . '.+?(?=\])\]/', $value, $tag_matches );

		foreach ( $tag_matches[0] as $tag_text ) {
			$tag_data = Plugin::elementor()->dynamic_tags->tag_text_to_tag_data( $tag_text );

			if ( ! $tag_data || 'popup' !== $tag_data['name'] || empty( $tag_data['settings']['popup'] ) ) {
				continue;
			}

			$popup_ids[] = $tag_data['settings']['popup'];
		}

		return $popup_ids;
	}

	private function invalidate_cache( ?array $post_ids = null ): void {
		$cache_validity = new Cache_Validity();

		if ( empty( $post_ids ) ) {
			$cache_validity->invalidate( [ self::CACHE_ROOT_KEY ] );

			return;
		}

		foreach ( $post_ids as $post_id ) {
			$cache_validity->invalidate( [ self::CACHE_ROOT_KEY, $post_id ] );
		}
	}
}
