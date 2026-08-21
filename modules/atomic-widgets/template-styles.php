<?php

namespace ElementorPro\Modules\AtomicWidgets;

use Elementor\Core\Base\Document;
use Elementor\Modules\AtomicWidgets\Styles\CacheValidity\Cache_Validity;
use Elementor\Modules\AtomicWidgets\Utils\Utils;
use ElementorPro\Modules\Library\Classes\Template_Shortcode_Utils;
use Throwable;
use ElementorPro\Plugin;

class Template_Styles {
	const CACHE_ROOT_KEY = 'template-styles-related-posts';
	private $logger;

	public function __construct() {
		$this->logger = Plugin::elementor()->logger->get_logger();
	}

	public function register_hooks() {
		add_action( 'elementor/post/render', fn( $post_id ) => $this->render_post( $post_id ) );

		// Render styles of templates in shortcodes
		add_action(
			Template_Shortcode_Utils::RENDER_ACTION,
			fn( $shortcode, $attributes ) => $this->handle_shortcode_render( $shortcode, $attributes ),
			10,
			2
		);

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
		try {
			$template_ids = $this->get_template_ids_from_post_cached( $post_id );

			$this->declare_templates_rendered( $template_ids );
		} catch ( Throwable $e ) {
			$this->logger->error( 'Error associating template ids with post: ' . $e->getMessage() );
		}
	}

	private function get_related_posts( array $related, $post_id ): array {
		try {
			$template_ids = $this->get_template_ids_from_post_cached( $post_id );

			return array_values( array_unique( array_merge( $related, $template_ids ) ) );
		} catch ( Throwable $e ) {
			$this->logger->error( 'Error resolving related template post ids: ' . $e->getMessage() );
			return $related;
		}
	}

	private function get_template_ids_from_post_cached( $post_id ): array {
		$cache_validity = new Cache_Validity();

		if ( $cache_validity->is_valid( [ self::CACHE_ROOT_KEY, $post_id ] ) ) {
			$template_ids = $cache_validity->get_meta( [ self::CACHE_ROOT_KEY, $post_id ] );

			return ( is_array( $template_ids ) && ! empty( $template_ids ) ) ? $template_ids : [];
		}

		$template_ids = $this->get_template_ids_from_post( $post_id );

		$cache_validity->validate( [ self::CACHE_ROOT_KEY, $post_id ], $template_ids );

		return $template_ids;
	}

	private function declare_templates_rendered( array $post_ids ): void {
		foreach ( $post_ids as $post_id ) {
			if ( ! is_numeric( $post_id ) || (int) $post_id <= 0 ) {
				continue;
			}

			do_action( 'elementor/post/render', $post_id );
		}
	}

	private function get_template_ids_from_post( $post_id ): array {
		$template_ids = [];

		Utils::traverse_post_elements( $post_id, function( $element_data ) use ( &$template_ids ) {
			$settings = $element_data['settings'] ?? [];

			foreach ( $this->extract_template_ids_from_settings( $settings ) as $id ) {
				$template_ids[] = $id;
			}
		} );

		return array_unique( $template_ids );
	}

	private function extract_template_ids_from_settings( array $settings ): array {
		$candidates = [];

		if ( $this->has_valid_template_id( $settings ) ) {
			$candidates[] = $settings['template_id'];
		}

		foreach ( $settings['alternate_templates'] ?? [] as $item ) {
			if ( $this->has_valid_template_id( $item ) ) {
				$candidates[] = $item['template_id'];
			}
		}

		$candidates = array_merge( $candidates, Template_Shortcode_Utils::extract_template_ids_from_settings( $settings ) );

		return array_map( 'intval', $candidates );
	}

	private function handle_shortcode_render( $shortcode, $attributes ): void {
		if ( Template_Shortcode_Utils::SHORTCODE !== $shortcode || empty( $attributes['id'] ) || ! is_numeric( $attributes['id'] ) ) {
			return;
		}

		$this->declare_templates_rendered( [ (int) $attributes['id'] ] );
	}

	private function has_valid_template_id( array $data ): bool {
		return ! empty( $data['template_id'] ) && is_numeric( $data['template_id'] );
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
