<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * @todo [ED-22528] Remove in 4.6.0
 */
class Legacy_Default_Value_Normalizer {
	private const WIDGET_TYPES = [ 'e-form-checkbox', 'e-form-radio-button' ];

	public static function normalize( array $data ): array {
		return Plugin::instance()->db->iterate_data(
			$data,
			[ self::class, 'normalize_element' ]
		);
	}

	public static function normalize_element( $element, $args = [] ) {
		if ( ! is_array( $element ) || ! in_array( $element['widgetType'] ?? '', self::WIDGET_TYPES, true ) ) {
			return $element;
		}

		$settings = $element['settings'] ?? [];

		if ( isset( $settings[ Default_Value_Provider::TOGGLE_PROP ] ) ) {
			return $element;
		}

		if ( true !== self::extract_checked( $settings ) ) {
			return $element;
		}

		$element['settings'][ Default_Value_Provider::TOGGLE_PROP ] = Boolean_Prop_Type::generate( true );

		return $element;
	}

	private static function extract_checked( array $settings ) {
		$checked = $settings['checked'] ?? null;

		if ( is_array( $checked ) && 'overridable' === ( $checked['$$type'] ?? null ) ) {
			$checked = $checked['value']['origin_value'] ?? null;
		}

		return is_array( $checked ) ? ( $checked['value'] ?? null ) : null;
	}
}
