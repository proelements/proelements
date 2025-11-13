<?php

namespace ElementorPro\Modules\DynamicTags\Tags\Base;

use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Tag_Trait {

	public function is_editable() {
		return License_API::is_license_active();
	}

	protected function render_taxonomy_content_by_key( string $key = 'name' ): void {
		global $wp_query;

		if ( ! isset( $wp_query->loop_term ) || ! is_object( $wp_query->loop_term ) ) {
			return;
		}

		$content = '';

		if ( isset( $wp_query->loop_term->$key ) ) {
			$content = $wp_query->loop_term->$key;
		}

		echo wp_kses_post( $content );
	}

	protected function get_data_id_from_taxonomy_loop_query() {
		global $wp_query;

		if ( isset( $wp_query->loop_term ) && isset( $wp_query->loop_term->term_id ) ) {
			return $wp_query->loop_term->term_id;
		}

		return 0;
	}
}
