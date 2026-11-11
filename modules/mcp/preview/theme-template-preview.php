<?php

namespace ElementorPro\Modules\Mcp\Preview;

use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders a previewed site part inside the page it applies to. A site part URL on its own
 * redirects anonymous visitors to the home page, so the preview shows the template's
 * "Preview Dynamic Content as" target, or the front page, with the template forced into
 * its location.
 */
class Theme_Template_Preview {

	private ?int $template_id = null;

	public function register(): void {
		add_filter( 'elementor/mcp/preview/query_vars', [ $this, 'filter_query_vars' ], 10, 2 );
		add_filter( 'elementor_pro/theme_builder/force_template_id', [ $this, 'filter_force_template_id' ] );
	}

	public function filter_query_vars( $query_vars, $post ) {
		$document = ThemeBuilderModule::instance()->get_document( $post->ID );

		if ( ! $document instanceof Theme_Document ) {
			return $query_vars;
		}

		$this->template_id = $post->ID;

		$preview_query_vars = $document->get_preview_as_query_args();

		if ( (int) ( $preview_query_vars['p'] ?? 0 ) === $post->ID ) {
			return $this->front_page_query_vars();
		}

		return $preview_query_vars;
	}

	public function filter_force_template_id(): ?int {
		return $this->template_id;
	}

	private function front_page_query_vars(): array {
		$front_page_id = (int) get_option( 'page_on_front' );

		if ( 'page' !== get_option( 'show_on_front' ) || ! $front_page_id ) {
			return [];
		}

		return [ 'page_id' => $front_page_id ];
	}
}
