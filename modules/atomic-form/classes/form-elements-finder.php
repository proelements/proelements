<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Form_Elements_Finder {
	/**
	 * Recursively collects the elements in a form tree whose widget type matches.
	 */
	public static function find_by_type( array $elements, string $widget_type ): array {
		$found = [];

		foreach ( $elements as $element ) {
			if ( ! is_array( $element ) ) {
				continue;
			}

			if ( ( $element['widgetType'] ?? '' ) === $widget_type ) {
				$found[] = $element;
			}

			if ( ! empty( $element['elements'] ) && is_array( $element['elements'] ) ) {
				$found = array_merge( $found, self::find_by_type( $element['elements'], $widget_type ) );
			}
		}

		return $found;
	}
}
