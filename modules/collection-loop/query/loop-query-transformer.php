<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Modules\AtomicWidgets\PropsResolver\Props_Resolver_Context;
use Elementor\Modules\AtomicWidgets\PropsResolver\Transformer_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query_Transformer extends Transformer_Base {
	public function transform( $value, Props_Resolver_Context $context ) {
		if ( ! is_array( $value ) ) {
			$value = [];
		}

		$args = Loop_Query_Args_Builder::from_resolved( $value );

		return [
			'args'     => $args,
			'query_id' => $value['query_id'] ?? '',
		];
	}
}
