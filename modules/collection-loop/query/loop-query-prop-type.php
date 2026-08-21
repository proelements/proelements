<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Modules\AtomicWidgets\PropTypes\Base\Object_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query_Prop_Type extends Object_Prop_Type {
	public static function get_key(): string {
		return 'loop-query';
	}

	protected function define_shape(): array {
		return Loop_Query::get_schema();
	}
}
