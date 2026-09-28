<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Modules\AtomicWidgets\PropsResolver\Props_Resolver_Context;
use Elementor\Modules\AtomicWidgets\PropsResolver\Transformer_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query_Transformer extends Transformer_Base {
	/**
	 * Output shape:
	 *
	 * - `query_id` — hook suffix, plumbed through the render context.
	 * - `settings` — raw resolved settings. The element rebuilds the item
	 *                provider from these at render time so per-request state
	 *                (current page) can be injected before the template type
	 *                runs.
	 */
	public function transform( $value, Props_Resolver_Context $context ) {
		if ( ! is_array( $value ) ) {
			$value = [];
		}

		return [
			'query_id' => $value['query_id'] ?? '',
			Loop_Query_Args_Builder::SETTINGS_KEY => $value,
		];
	}
}
