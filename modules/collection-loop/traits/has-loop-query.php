<?php

namespace ElementorPro\Modules\CollectionLoop\Traits;

use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Post_Loop_Item_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Has_Loop_Query {

	abstract protected function get_loop_item_provider(): Loop_Item_Provider;

	abstract protected function get_loop_context_key(): string;

	protected function define_render_context(): array {
		$item_provider = $this->get_loop_item_provider();

		if ( ! $item_provider instanceof Loop_Item_Provider ) {
			$item_provider = new Post_Loop_Item_Provider( new \WP_Query() );
		}

		$context = [
			'item_provider' => $item_provider,
			'query'         => $item_provider->query(),
			'has_items'     => $item_provider->has_items(),
		];

		return [
			[
				'context_key' => $this->get_loop_context_key(),
				'context'     => $this->extend_loop_render_context( $context, $item_provider ),
			],
		];
	}

	protected function extend_loop_render_context( array $context, Loop_Item_Provider $item_provider ): array {
		return $context;
	}
}
