<?php

namespace ElementorPro\Modules\Attributes\PropsResolver\Transformers\Settings;

use Elementor\Modules\AtomicWidgets\PropsResolver\Props_Resolver_Context;
use Elementor\Modules\AtomicWidgets\PropsResolver\Transformer_Base;
use ElementorPro\Modules\Attributes\Utils\Custom_Attributes_Compat;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Pro_Attributes_Transformer extends Transformer_Base {
	public function transform( $value, Props_Resolver_Context $context ) {
		if ( ! is_array( $value ) ) {
			return null;
		}

		$allow_unfiltered_names = Custom_Attributes_Compat::can_print_unfiltered_in_current_document();

		$pairs = array_map( function ( $item ) use ( $allow_unfiltered_names ) {
			if ( ! $this->is_valid_attribute_item( $item, $allow_unfiltered_names ) ) {
				return '';
			}

			$decoded_value = html_entity_decode( $item['value'], ENT_QUOTES | ENT_HTML5, 'UTF-8' );
			$sanitized_value = Custom_Attributes_Compat::sanitize_value( $item['key'], $decoded_value );

			return $item['key'] . '="' . esc_attr( $sanitized_value ) . '"';
		}, $value );

		return implode( ' ', array_filter( $pairs ) );
	}

	private function is_valid_attribute_item( $item, bool $allow_unfiltered_names ): bool {
		return isset( $item['key'], $item['value'] )
			&& is_string( $item['key'] )
			&& is_string( $item['value'] )
			&& '' !== $item['value']
			&& Custom_Attributes_Compat::is_allowed_name( $item['key'], $allow_unfiltered_names );
	}
}
