<?php
namespace ElementorPro\Base;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Markdown_Utils {

	private const HEADING_LEVEL_MAP = [
		'h1' => 1,
		'h2' => 2,
		'h3' => 3,
		'h4' => 4,
		'h5' => 5,
		'h6' => 6,
	];

	private const EMPTY_IMAGE_ALT = 'image';

	public static function heading( string $text, string $tag, int $default_level = 2 ): string {
		$level = self::HEADING_LEVEL_MAP[ $tag ] ?? $default_level;

		return str_repeat( '#', $level ) . ' ' . $text;
	}

	public static function link( string $text, string $url ): string {
		return '[' . $text . '](' . esc_url( $url ) . ')';
	}

	public static function button( string $text, string $url = '' ): string {
		if ( '' === trim( $text ) ) {
			return '';
		}

		if ( '' !== $url ) {
			return '[**' . $text . '**](' . esc_url( $url ) . ')';
		}

		return '**' . $text . '**';
	}

	public static function widget_section( string $title, string $content ): string {
		$content = trim( $content );

		if ( '' === $content ) {
			return '';
		}

		$title = trim( $title );

		if ( '' === $title ) {
			return $content;
		}

		return '## ' . $title . "\n\n" . $content;
	}

	public static function nested_heading_list( array $headings, bool $ordered = false ): string {
		if ( empty( $headings ) ) {
			return '';
		}

		$normalized = [];

		foreach ( $headings as $heading ) {
			$text = trim( (string) ( $heading['text'] ?? '' ) );

			if ( '' === $text ) {
				continue;
			}

			$normalized[] = [
				'level' => (int) ( $heading['level'] ?? 2 ),
				'text' => $text,
			];
		}

		if ( empty( $normalized ) ) {
			return '';
		}

		$lines = [];

		foreach ( $normalized as $index => $heading ) {
			$nest = 0;

			for ( $i = $index - 1; $i >= 0; $i-- ) {
				$previous_level = $normalized[ $i ]['level'];

				if ( $previous_level <= $heading['level'] ) {
					$nest = $lines[ $i ]['nest'];

					if ( $previous_level < $heading['level'] ) {
						$nest++;
					}

					break;
				}
			}

			$lines[] = [
				'nest' => $nest,
				'text' => $heading['text'],
			];
		}

		$output = [];
		$counters = [];

		foreach ( $lines as $line ) {
			$nest = $line['nest'];

			if ( $ordered ) {
				$counters = array_slice( $counters, 0, $nest + 1, true );
				$counters[ $nest ] = ( $counters[ $nest ] ?? 0 ) + 1;
				$prefix = $counters[ $nest ] . '.';
			} else {
				$prefix = '-';
			}

			$output[] = str_repeat( '  ', $nest ) . $prefix . ' ' . $line['text'];
		}

		return implode( "\n", $output );
	}

	public static function image( string $url, string $alt = '' ): string {
		$safe_url = esc_url( $url );

		if ( '' === $safe_url ) {
			return '';
		}

		$alt_text = '' !== trim( $alt ) ? $alt : self::EMPTY_IMAGE_ALT;

		return '![' . $alt_text . '](' . $safe_url . ')';
	}

	public static function get_attachment_alt( int $attachment_id ): string {
		if ( ! $attachment_id ) {
			return '';
		}

		$alt = get_post_meta( $attachment_id, '_wp_attachment_image_alt', true );

		if ( is_string( $alt ) && '' !== trim( $alt ) ) {
			return $alt;
		}

		$attachment = get_post( $attachment_id );

		if ( ! $attachment ) {
			return '';
		}

		return $attachment->post_title;
	}

	public static function image_from_media_array( array $media ): string {
		$url = $media['url'] ?? '';

		if ( '' === $url && ! empty( $media['id'] ) ) {
			$src = wp_get_attachment_image_src( (int) $media['id'], 'full' );
			$url = $src[0] ?? '';
		}

		if ( '' === $url ) {
			return '';
		}

		$alt = '';

		if ( ! empty( $media['id'] ) ) {
			$alt = self::get_attachment_alt( (int) $media['id'] );
		}

		return self::image( $url, $alt );
	}

	public static function bullet_list( array $lines ): string {
		$items = array_filter( $lines, static function ( $line ) {
			return '' !== trim( (string) $line );
		} );

		return implode( "\n", $items );
	}

	public static function join_blocks( array $blocks ): string {
		$parts = array_filter( array_map( 'trim', $blocks ), static function ( $block ) {
			return '' !== $block;
		} );

		return implode( "\n\n", $parts );
	}

	public static function plain_text( $value ): string {
		return Utils::html_to_plain_text( (string) $value );
	}

	public static function format_contact_link( string $platform, array $data, string $prefix ): string {
		switch ( $platform ) {
			case Social_Network_Provider::EMAIL:
				return Social_Network_Provider::build_email_link( $data, $prefix );
			case Social_Network_Provider::SMS:
				$number = $data[ $prefix . '_number' ] ?? $data['number'] ?? '';

				return '' !== $number ? 'sms:' . $number : '';
			case Social_Network_Provider::WHATSAPP:
				$number = $data[ $prefix . '_number' ] ?? $data['number'] ?? '';

				return '' !== $number ? 'https://wa.me/' . $number : '';
			case Social_Network_Provider::TELEPHONE:
				$number = $data[ $prefix . '_number' ] ?? $data['number'] ?? '';

				return '' !== $number ? 'tel:' . $number : '';
			case Social_Network_Provider::MESSENGER:
				$username = $data[ $prefix . '_username' ] ?? $data['username'] ?? '';

				return '' !== $username ? Social_Network_Provider::build_messenger_link( $username ) : '';
			case Social_Network_Provider::VIBER:
				$number = $data[ $prefix . '_number' ] ?? $data['number'] ?? '';
				$action = $data[ $prefix . '_viber_action' ] ?? $data['viber_action'] ?? 'chat';

				return Social_Network_Provider::build_viber_link( $action, $number );
			case Social_Network_Provider::SKYPE:
				$username = $data[ $prefix . '_username' ] ?? $data['username'] ?? '';

				return '' !== $username ? 'skype:' . $username . '?chat' : '';
			case Social_Network_Provider::WAZE:
				$location = $data[ $prefix . '_waze' ] ?? $data[ $prefix . '_location' ] ?? $data['location'] ?? [];

				return is_array( $location ) ? ( $location['url'] ?? '' ) : (string) $location;
			case Social_Network_Provider::URL:
				$url = $data[ $prefix . '_url' ] ?? $data['url'] ?? [];

				return is_array( $url ) ? ( $url['url'] ?? '' ) : (string) $url;
			case Social_Network_Provider::FILE_DOWNLOAD:
			case Social_Network_Provider::VCF:
				$file = $data[ $prefix . '_file' ] ?? $data['file'] ?? [];

				return is_array( $file ) ? ( $file['url'] ?? '' ) : (string) $file;
			default:
				$url = $data[ $prefix . '_url' ] ?? $data['url'] ?? [];

				return is_array( $url ) ? ( $url['url'] ?? '' ) : (string) $url;
		}
	}

	public static function contact_line( string $label, string $platform, string $link, string $value = '' ): string {
		$platform_mapping = Social_Network_Provider::get_text_mapping( $platform );
		$platform_name = $platform_mapping ? $platform_mapping : $platform;
		$display = '' !== $value ? $value : $platform_name;

		if ( '' !== $link ) {
			return '- **' . $label . ':** [' . $display . '](' . esc_url( $link ) . ')';
		}

		if ( '' !== $display ) {
			return '- **' . $label . ':** ' . $display;
		}

		return '';
	}
}
