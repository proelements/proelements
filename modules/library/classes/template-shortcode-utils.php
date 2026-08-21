<?php

namespace ElementorPro\Modules\Library\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Template_Shortcode_Utils {
	const SHORTCODE = 'elementor-template';
	const RENDER_ACTION = 'elementor/shortcode/render';

	public static function extract_template_ids_from_settings( array $settings ): array {
		$template_ids = [];

		foreach ( $settings as $value ) {
			if ( is_array( $value ) ) {
				$template_ids = array_merge( $template_ids, self::extract_template_ids_from_settings( $value ) );
				continue;
			}

			if ( ! is_string( $value ) || false === strpos( $value, '[' . self::SHORTCODE ) ) {
				continue;
			}

			$template_ids = array_merge( $template_ids, self::extract_template_ids_from_shortcode_string( $value ) );
		}

		return $template_ids;
	}

	public static function extract_template_ids_from_shortcode_string( string $value ): array {
		if ( ! preg_match_all( '/\[' . preg_quote( self::SHORTCODE, '/' ) . '\b[^\]]*\]/', $value, $matches ) ) {
			return [];
		}

		$template_ids = [];

		foreach ( $matches[0] as $shortcode ) {
			$template_id = self::parse_elementor_template_shortcode_id( $shortcode );

			if ( null === $template_id ) {
				continue;
			}

			$template_ids[] = $template_id;
		}

		return $template_ids;
	}

	private static function parse_elementor_template_shortcode_id( string $shortcode ): ?int {
		if ( ! preg_match( '/\bid=["\']?(\d+)["\']?/i', $shortcode, $id_match ) ) {
			return null;
		}

		return (int) $id_match[1];
	}
}
