<?php

namespace ElementorPro\Modules\CollectionLoop\Utils;

use Elementor\Modules\AtomicWidgets\PropTypes\Base\Array_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Base\Object_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Contracts\Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Non_Overridable_Props {
	public static function apply_to_schema( array $schema ): array {
		foreach ( $schema as $key => $prop_type ) {
			if ( $prop_type instanceof Prop_Type ) {
				$schema[ $key ] = self::apply( $prop_type );
			}
		}

		return $schema;
	}

	public static function apply( Prop_Type $prop_type ): Prop_Type {
		if ( $prop_type instanceof Object_Prop_Type ) {
			$prop_type->set_shape(
				self::apply_to_schema( $prop_type->get_shape() )
			);
		}

		if ( $prop_type instanceof Array_Prop_Type ) {
			$prop_type->set_item_type(
				self::apply( $prop_type->get_item_type() )
			);
		}

		return $prop_type->meta( Overridable_Prop_Type::ignore() );
	}
}
