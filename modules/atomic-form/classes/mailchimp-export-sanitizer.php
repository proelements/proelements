<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Modules\AtomicWidgets\Elements\Atomic_Form\Atomic_Form;
use Elementor\Modules\AtomicWidgets\PropTypes\Prop_Sensitivity;
use ElementorPro\Modules\AtomicForm\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Export_Sanitizer {

	public static function sanitize_elements( $elements ) {
		if ( empty( $elements ) || ! is_array( $elements ) ) {
			return $elements;
		}

		return Plugin::elementor()->db->iterate_data( $elements, [ self::class, 'sanitize_form_element' ] );
	}

	public static function sanitize_form_element( array $element ): array {
		if ( Module::FORM_ELEMENT_TYPE !== ( $element['elType'] ?? '' ) ) {
			return $element;
		}

		if ( ! isset( $element['settings'] ) || ! is_array( $element['settings'] ) ) {
			return $element;
		}

		$element['settings'] = Prop_Sensitivity::strip_non_exportable_settings( $element['settings'], Atomic_Form::get_props_schema() );

		return $element;
	}
}
