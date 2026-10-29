<?php
namespace ElementorPro\Base;

use Elementor\Plugin;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Markdown_Heading_Collector {

	private const HEADING_LEVEL_MAP = [
		'h1' => 1,
		'h2' => 2,
		'h3' => 3,
		'h4' => 4,
		'h5' => 5,
		'h6' => 6,
	];

	public static function collect_from_document( int $post_id, array $allowed_tags, string $exclude_widget_id = '' ): array {
		$document = Plugin::$instance->documents->get( $post_id, false );

		if ( ! $document ) {
			return [];
		}

		$elements_data = $document->get_elements_data();

		if ( empty( $elements_data ) ) {
			return [];
		}

		$normalized_tags = array_map( 'strtolower', $allowed_tags );
		$headings = [];

		Plugin::$instance->db->iterate_data( $elements_data, function ( $element_data ) use ( $normalized_tags, $exclude_widget_id, &$headings ) {
			if ( empty( $element_data ) || 'widget' !== ( $element_data['elType'] ?? '' ) ) {
				return $element_data;
			}

			if ( ( $element_data['id'] ?? '' ) === $exclude_widget_id ) {
				return $element_data;
			}

			$widget_type = $element_data['widgetType'] ?? '';
			$settings = $element_data['settings'] ?? [];

			if ( 'table-of-contents' === $widget_type ) {
				return $element_data;
			}

			$extracted = self::extract_headings_from_widget( $widget_type, $settings, $normalized_tags );

			foreach ( $extracted as $heading ) {
				$headings[] = $heading;
			}

			return $element_data;
		} );

		return $headings;
	}

	private static function extract_headings_from_widget( string $widget_type, array $settings, array $allowed_tags ): array {
		switch ( $widget_type ) {
			case 'heading':
				return self::heading_from_tag_and_text(
					$settings['header_size'] ?? 'h2',
					$settings['title'] ?? '',
					$allowed_tags
				);
			case 'animated-headline':
				$text = trim(
					Utils::html_to_plain_text( $settings['before_text'] ?? '' ) . ' ' .
					Utils::html_to_plain_text( $settings['highlighted_text'] ?? '' ) . ' ' .
					Utils::html_to_plain_text( $settings['after_text'] ?? '' )
				);

				if ( 'rotate' === ( $settings['headline_style'] ?? '' ) ) {
					$text = trim(
						Utils::html_to_plain_text( $settings['before_text'] ?? '' ) . ' ' .
						Utils::html_to_plain_text( $settings['rotating_text'] ?? '' ) . ' ' .
						Utils::html_to_plain_text( $settings['after_text'] ?? '' )
					);
					$text = preg_replace( '/\s+/', ' ', $text );
				}

				return self::heading_from_tag_and_text( $settings['tag'] ?? 'h2', $text, $allowed_tags );
			case 'call-to-action':
				return self::heading_from_tag_and_text( $settings['title_tag'] ?? 'h2', $settings['title'] ?? '', $allowed_tags );
			case 'flip-box':
				$headings = self::heading_from_tag_and_text( $settings['title_tag'] ?? 'h3', $settings['title_text_a'] ?? '', $allowed_tags );
				$back = self::heading_from_tag_and_text( $settings['title_tag'] ?? 'h3', $settings['title_text_b'] ?? '', $allowed_tags );

				return array_merge( $headings, $back );
			case 'price-table':
				$headings = self::heading_from_tag_and_text( $settings['heading_tag'] ?? 'h2', $settings['heading'] ?? '', $allowed_tags );
				$sub = self::heading_from_tag_and_text( 'h3', $settings['sub_heading'] ?? '', $allowed_tags );

				return array_merge( $headings, $sub );
			case 'slides':
				return self::headings_from_repeater( $settings['slides'] ?? [], 'heading', 'h3', $allowed_tags );
			case 'text-editor':
			case 'theme-post-content':
				return self::headings_from_html( $settings['editor'] ?? $settings['content'] ?? '', $allowed_tags );
			default:
				return self::headings_from_html( $settings['editor'] ?? '', $allowed_tags );
		}
	}

	private static function heading_from_tag_and_text( string $tag, $text, array $allowed_tags ): array {
		$tag = strtolower( $tag );
		$plain_text = Utils::html_to_plain_text( (string) $text );

		if ( '' === trim( $plain_text ) || ! in_array( $tag, $allowed_tags, true ) ) {
			return [];
		}

		return [
			[
				'tag' => $tag,
				'level' => self::HEADING_LEVEL_MAP[ $tag ] ?? 2,
				'text' => $plain_text,
			],
		];
	}

	private static function headings_from_repeater( array $items, string $text_key, string $default_tag, array $allowed_tags ): array {
		$headings = [];

		foreach ( $items as $item ) {
			$extracted = self::heading_from_tag_and_text( $default_tag, $item[ $text_key ] ?? '', $allowed_tags );
			$headings = array_merge( $headings, $extracted );
		}

		return $headings;
	}

	private static function headings_from_html( string $html, array $allowed_tags ): array {
		if ( '' === trim( $html ) ) {
			return [];
		}

		$headings = [];
		$pattern = '/<h([1-6])(?:\s[^>]*)?>(.*?)<\/h\1>/is';

		if ( ! preg_match_all( $pattern, $html, $matches, PREG_SET_ORDER ) ) {
			return [];
		}

		foreach ( $matches as $match ) {
			$tag = 'h' . $match[1];

			if ( ! in_array( $tag, $allowed_tags, true ) ) {
				continue;
			}

			$plain_text = Utils::html_to_plain_text( $match[2] );

			if ( '' === trim( $plain_text ) ) {
				continue;
			}

			$headings[] = [
				'tag' => $tag,
				'level' => (int) $match[1],
				'text' => $plain_text,
			];
		}

		return $headings;
	}
}
