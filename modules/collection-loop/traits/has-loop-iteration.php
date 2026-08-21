<?php
namespace ElementorPro\Modules\CollectionLoop\Traits;

use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Has_Loop_Iteration {
	use Has_Element_Template {
		render_children_to_html as protected render_default_children_to_html;
	}

	abstract protected function get_loop_context_key(): string;

	protected function render_children_to_html(): string {
		$loop_context = Render_Context::get( $this->get_loop_context_key() );

		if ( empty( $loop_context ) ) {
			return $this->render_default_children_to_html();
		}

		return $this->render_children_for_loop();
	}

	protected function render_children_for_loop(): string {
		$loop_context = Render_Context::get( $this->get_loop_context_key() );

		if ( empty( $loop_context ) || empty( $loop_context['has_items'] ) ) {
			return '';
		}

		$children = $this->get_children();
		// MVP assumes the first child is the repeating item template.
		// Alternating-item support (later ticket) will introduce position-based selection.
		$template = $children[ Collection_Loop::TEMPLATE_CHILD_INDEX ] ?? null;

		if ( ! $template ) {
			return '';
		}

		$query = $loop_context['query'];
		$html = '';

		while ( $query->have_posts() ) {
			$query->the_post();

			$template->reset_descendant_render_state();

			ob_start();
			$template->print_element();
			$html .= (string) ob_get_clean();
		}

		wp_reset_postdata();

		return $html;
	}
}
