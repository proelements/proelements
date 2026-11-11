<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Submission_Preview {

	const MAX_LENGTH = 120;
	const MAX_VALUE_LENGTH = 30;
	const MAX_LABEL_LENGTH = 20;
	const SEPARATOR = ' · ';
	const LABEL_SEPARATOR = ': ';
	const ELLIPSIS = '…';

	const SKIPPED_FIELD_TYPES = [ 'acceptance', 'honeypot', 'recaptcha', 'recaptcha_v3', 'step', 'html' ];

	/**
	 * @param array       $values        Submission values, each with `key` and `value`.
	 * @param array       $form_fields   Form snapshot fields, each with `id`, `type` and `label`.
	 * @param string|null $main_field_id Field already shown as the row's main value.
	 */
	public static function build( array $values, array $form_fields, ?string $main_field_id ): string {
		$fields_by_id = array_column( $form_fields, null, 'id' );
		$parts = [];

		foreach ( $values as $value ) {
			$field_id = (string) $value['key'];
			$text = self::normalize( $value['value'] );
			$field = $fields_by_id[ $field_id ] ?? [];

			if ( '' === $text || $field_id === $main_field_id || self::is_skipped_type( $field ) ) {
				continue;
			}

			$parts[] = self::truncate( self::label( $field, $field_id ), self::MAX_LABEL_LENGTH )
				. self::LABEL_SEPARATOR
				. self::truncate( $text, self::MAX_VALUE_LENGTH );
		}

		return self::truncate( implode( self::SEPARATOR, $parts ), self::MAX_LENGTH );
	}

	public static function label( array $field, string $field_id ): string {
		$label = self::normalize( wp_strip_all_tags( (string) ( $field['label'] ?? '' ) ) );

		return '' !== $label ? $label : $field_id;
	}

	private static function is_skipped_type( array $field ): bool {
		return in_array( $field['type'] ?? '', self::SKIPPED_FIELD_TYPES, true );
	}

	private static function normalize( $text ): string {
		return trim( preg_replace( '/\s+/', ' ', (string) $text ) );
	}

	private static function truncate( string $text, int $max_length ): string {
		if ( mb_strlen( $text ) <= $max_length ) {
			return $text;
		}

		return rtrim( mb_substr( $text, 0, $max_length - mb_strlen( self::ELLIPSIS ) ) ) . self::ELLIPSIS;
	}
}
