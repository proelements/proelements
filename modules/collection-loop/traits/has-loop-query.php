<?php

namespace ElementorPro\Modules\CollectionLoop\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Has_Loop_Query {
	abstract protected function get_loop_query();

	abstract protected function get_loop_context_key(): string;

	protected function define_render_context(): array {
		$wp_query = $this->get_loop_query();

		if ( ! $wp_query instanceof \WP_Query ) {
			$wp_query = new \WP_Query();
		}

		$context = [
			'query'     => $wp_query,
			'has_items' => $wp_query->have_posts(),
		];

		return [
			[
				'context_key' => $this->get_loop_context_key(),
				'context'     => $this->extend_loop_render_context( $context, $wp_query ),
			],
		];
	}

	protected function extend_loop_render_context( array $context, \WP_Query $wp_query ): array {
		return $context;
	}
}
