<?php
namespace ElementorPro\Modules\CollectionLoop;

use Elementor\Core\Base\Document;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\LoopBuilder\Documents\Loop;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Css_Printer;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Embedded_Loop_Item_Css {

	public function register_hooks(): void {
		add_action( 'elementor/frontend/before_get_builder_content', [ $this, 'enqueue_for_embedded_template' ], 10, 2 );
	}

	public function enqueue_for_embedded_template( Document $document, bool $is_excerpt ): void {
		if ( $is_excerpt || empty( Render_Context::get( Collection_Loop::LOOP_CONTEXT_KEY ) ) ) {
			return;
		}

		if ( ! $document instanceof Loop ) {
			return;
		}

		Loop_Css_Printer::print_for_post( $document->get_main_id(), $document->is_autosave() );
	}
}
