<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use ElementorPro\Modules\Popup\Document as Popup_Document;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Popup_Display_Settings_Writer {

	public const DISPLAY_SETTINGS_TYPES = [ 'triggers', 'timing' ];

	private Popup_Display_Settings_Schema $schema;

	public function __construct( ?Popup_Display_Settings_Schema $schema = null ) {
		$this->schema = $schema ?? new Popup_Display_Settings_Schema();
	}

	public function write( Theme_Document $document, $raw_display_settings ) {
		if ( ! $document instanceof Popup_Document ) {
			return new \WP_Error(
				'display_settings_not_supported',
				__( 'display_settings is only supported for popup site parts.', 'elementor-pro' ),
				[ 'status' => \WP_Http::BAD_REQUEST ]
			);
		}

		if ( ! is_array( $raw_display_settings ) || empty( $raw_display_settings ) ) {
			return $this->invalid_display_settings(
				__( 'display_settings must be an object with "triggers" and/or "timing".', 'elementor-pro' )
			);
		}

		$stored = $this->get_stored_display_settings( $document );
		$display_settings_stacks = $document->get_display_settings();

		foreach ( $raw_display_settings as $type => $settings ) {
			if ( ! in_array( $type, self::DISPLAY_SETTINGS_TYPES, true ) ) {
				return $this->invalid_display_settings(
					sprintf(
						/* translators: 1: submitted display settings type, 2: comma-separated list of allowed types. */
						__( 'Unknown display_settings type "%1$s". Allowed types: %2$s.', 'elementor-pro' ),
						(string) $type,
						implode( ', ', self::DISPLAY_SETTINGS_TYPES )
					)
				);
			}

			if ( ! is_array( $settings ) ) {
				return $this->invalid_display_settings(
					sprintf(
						/* translators: %s: display settings type. */
						__( 'display_settings.%s must be an object.', 'elementor-pro' ),
						$type
					)
				);
			}

			$normalized = $this->normalize_settings( $display_settings_stacks[ $type ], $type, $settings );

			if ( is_wp_error( $normalized ) ) {
				return $normalized;
			}

			$stored[ $type ] = $normalized;
		}

		$document->save_display_settings_data( $stored );

		return $stored;
	}

	private function get_stored_display_settings( Popup_Document $document ): array {
		$stored = $document->get_display_settings_data();
		$stored = is_array( $stored ) ? $stored : [];

		foreach ( self::DISPLAY_SETTINGS_TYPES as $type ) {
			$stored[ $type ] = isset( $stored[ $type ] ) && is_array( $stored[ $type ] ) ? $stored[ $type ] : [];
		}

		return $stored;
	}

	private function normalize_settings( Controls_Stack $stack, string $type, array $settings ) {
		$writable_controls = $this->schema->get_writable_controls( $stack );
		$normalized = [];

		foreach ( $settings as $field => $value ) {
			if ( ! isset( $writable_controls[ $field ] ) ) {
				return $this->invalid_display_settings(
					sprintf(
						/* translators: 1: display settings type, 2: submitted field name, 3: comma-separated list of allowed field names. */
						__( 'Unknown display_settings.%1$s field "%2$s". Allowed fields: %3$s.', 'elementor-pro' ),
						$type,
						(string) $field,
						implode( ', ', array_keys( $writable_controls ) )
					)
				);
			}

			$normalized[ $field ] = $this->normalize_value( $writable_controls[ $field ]['type'], $value );
		}

		return $normalized;
	}

	private function normalize_value( string $control_type, $value ) {
		if ( Controls_Manager::SWITCHER === $control_type && is_bool( $value ) ) {
			return $value ? Popup_Display_Settings_Schema::SWITCHER_ON : Popup_Display_Settings_Schema::SWITCHER_OFF;
		}

		if ( Controls_Manager::NUMBER === $control_type && is_string( $value ) && is_numeric( $value ) ) {
			return 0 + $value;
		}

		return $value;
	}

	private function invalid_display_settings( string $message ): \WP_Error {
		return new \WP_Error( 'invalid_display_setting', $message, [ 'status' => \WP_Http::BAD_REQUEST ] );
	}
}
