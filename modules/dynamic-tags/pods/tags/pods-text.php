<?php
namespace ElementorPro\Modules\DynamicTags\Pods\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Pods_Text extends Pods_Base {

	public function get_name() {
		return 'pods-text';
	}

	public function get_title() {
		return __( 'Pods', 'elementor-pro' ) . ' ' . __( 'Field', 'elementor-pro' );
	}

	public function render() {
		$field_data = $this->get_field();
		$field = $field_data['field'];
		$value = empty( $field_data['value'] ) ? '' : $field_data['value'];

		if ( ! empty( $field['type'] ) ) {
			switch ( $field['type'] ) {
				case 'paragraph':
					$value = $field_data['display'];
					break;
				case 'pick':
					$value = $field_data['display'];
					if ( is_array( $value ) ) {
						$value = implode( ', ', $value );
					}
					break;
			}
		}

		echo wp_kses_post( $value );
	}

	protected function get_supported_fields() {
		return [
			'text',
			'phone',
			'paragraph',
			'relationship',
			'pick',
			'numeric',
			'email',
			'oembed',
			'google_address',
			'wysiwyg',
			'time',
		];
	}
}
