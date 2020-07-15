<?php
namespace ElementorPro\Modules\DynamicTags\Toolset\Tags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Toolset_Text extends Toolset_Base {

	public function get_name() {
		return 'toolset-text';
	}

	public function get_title() {
		return __( 'Toolset', 'elementor-pro' ) . ' ' . __( 'Field', 'elementor-pro' );
	}

	public function render() {
		// Toolset Embedded version loads its bootstrap later
		if ( ! function_exists( 'types_render_field' ) ) {
			return;
		}

		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return;
		}

		list( $field_group, $field_key ) = explode( ':', $key );

		$field = wpcf_admin_fields_get_field( $field_key );

		if ( $field && ! empty( $field['type'] ) ) {
			$value = '';
			switch ( $field['type'] ) {
				case 'google_address':
					$value = types_render_field( $field_key, [ 'format' => 'FIELD_ADDRESS' ] );
					break;
				case 'email':
				case 'embed':
					$value = types_render_field( $field_key, [ 'output' => 'raw' ] );
					break;
				default:
					$value = types_render_field( $field_key );
					break;
			} // End switch().
		} else {
			// Field settings has been deleted or not available.
			$value = types_render_field( $field_key );
		} // End if().

		echo wp_kses_post( $value );
	}

	protected function get_supported_fields() {
		return [
			'textfield',
			'phone',
			'textarea',
			'checkbox',
			'select',
			'numeric',
			'email',
			'embed',
			'google_address',
			'wysiwyg',
			'radio',
		];
	}
}
