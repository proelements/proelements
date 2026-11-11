<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Default_Id_Provider {
	const CSSID_PROP = '_cssid';

	public static function get_default_id( string $prefix ): string {
		return $prefix . substr( wp_unique_id( '-' ), 0, 5 );
	}

	public static function get_default_id_prop( string $prefix ): String_Prop_Type {
		return String_Prop_Type::make()->default( self::get_default_id( $prefix ) )->meta( Overridable_Prop_Type::ignore() );
	}

	public static function get_field_id( string $element_type, string $element_id ): string {
		return $element_type . '-' . substr( wp_hash( 'e-form-field-' . $element_id ), 0, 7 );
	}

	public static function with_field_id( array $data, string $element_type ): array {
		$element_id = (string) ( $data['id'] ?? '' );

		if ( '' === $element_id || self::has_saved_field_id( $data ) ) {
			return $data;
		}

		$data['settings'][ self::CSSID_PROP ] = String_Prop_Type::generate( self::get_field_id( $element_type, $element_id ) );

		return $data;
	}

	private static function has_saved_field_id( array $data ): bool {
		$cssid = $data['settings'][ self::CSSID_PROP ] ?? null;
		$value = is_array( $cssid ) ? ( $cssid['value'] ?? null ) : $cssid;

		return null !== $value && '' !== $value;
	}
}
