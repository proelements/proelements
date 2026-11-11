<?php
namespace ElementorPro\Modules\AtomicForm\Honeypot;

use ElementorPro\Modules\AtomicForm\Classes\Form_Elements_Finder;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Honeypot_Handler {

	private array $honeypot_ids;

	private array $cssid_to_element_id;

	public function __construct( array $form_element, array $cssid_map = [] ) {
		$this->honeypot_ids = $this->collect_honeypot_ids( $form_element['elements'] ?? [] );
		$this->cssid_to_element_id = $this->filter_honeypot_cssids( $cssid_map );
	}

	public function is_triggered( array $form_fields ): bool {
		foreach ( $form_fields as $field ) {
			if ( ! $this->is_honeypot_field( $field ) ) {
				continue;
			}

			$value = $field['value'] ?? '';

			if ( is_array( $value ) || '' !== (string) $value ) {
				return true;
			}
		}

		return false;
	}

	public function remove_honeypot_fields( array $form_fields ): array {
		return array_values( array_filter( $form_fields, fn( $field ) => ! $this->is_honeypot_field( $field ) ) );
	}

	private function is_honeypot_field( $field ): bool {
		if ( ! is_array( $field ) ) {
			return false;
		}

		$id = sanitize_text_field( $field['id'] ?? '' );

		if ( '' === $id ) {
			return false;
		}

		if ( in_array( $id, $this->honeypot_ids, true ) ) {
			return true;
		}

		return isset( $this->cssid_to_element_id[ $id ] );
	}

	private function collect_honeypot_ids( array $elements ): array {
		$honeypots = Form_Elements_Finder::find_by_type( $elements, Honeypot::get_element_type() );

		return array_values( array_filter( array_column( $honeypots, 'id' ) ) );
	}

	private function filter_honeypot_cssids( array $cssid_map ): array {
		$honeypot_set = array_flip( $this->honeypot_ids );

		return array_filter(
			$cssid_map,
			fn( $element_id ) => isset( $honeypot_set[ $element_id ] )
		);
	}
}
