<?php

namespace ElementorPro\Modules\CollectionLoop\Utils;

use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Whether the current render is inside a v4 Collection Loop iteration,
 * as signaled on the shared Render_Context stack.
 */
class Loop_Iteration_Context {

	public static function is_v4_collection_loop_active(): bool {
		if ( ! class_exists( Render_Context::class ) || ! class_exists( Collection_Loop::class ) ) {
			return false;
		}

		return ! empty( Render_Context::get( Collection_Loop::LOOP_CONTEXT_KEY ) );
	}
}
