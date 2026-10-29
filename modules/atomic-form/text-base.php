<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Modules\AtomicWidgets\PropTypes\Html_V3_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Text_Base {
	protected static function get_text_prop_type() {
		return class_exists( '\Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type' )
			? \Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type::class
			: Html_V3_Prop_Type::class;
	}

	protected static function does_use_escaped_html() {
		return class_exists( '\Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type' );
	}

	protected static function get_normalized_text( $text ) {
		if ( self::does_use_escaped_html() ) {
			return $text;
		}

		return [
			'content' => String_Prop_Type::generate( $text ),
			'children' => [],
		];
	}
}
