<?php

namespace ElementorPro\Modules\CollectionLoop\Query\ItemProviders;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Post_Loop_Item_Provider implements Loop_Item_Provider {

	private \WP_Query $query;

	public function __construct( \WP_Query $query ) {
		$this->query = $query;
	}

	public function has_items(): bool {
		return $this->query->have_posts();
	}

	public function count(): int {
		return (int) $this->query->post_count;
	}

	public function items(): array {
		$items = [];

		try {
			while ( $this->query->have_posts() ) {
				$this->query->the_post();

				$items[] = [
					'id'    => (int) get_the_ID(),
					'title' => (string) get_the_title(),
				];
			}
		} finally {
			wp_reset_postdata();
		}

		return $items;
	}

	public function iterate( callable $on_iteration ): void {
		try {
			while ( $this->query->have_posts() ) {
				$this->query->the_post();

				if ( false === $on_iteration( (string) get_the_ID() ) ) {
					break;
				}
			}
		} finally {
			wp_reset_postdata();
		}
	}

	public function query(): ?\WP_Query {
		return $this->query;
	}

	public function max_num_pages(): int {
		return (int) $this->query->max_num_pages;
	}
}
