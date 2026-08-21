<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Element_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Loop_Query_Runner {
	private array $args;

	private string $query_id;

	public function __construct( array $args, string $query_id = '' ) {
		$this->args     = $args;
		$this->query_id = $query_id;
	}

	public function args(): array {
		return $this->args;
	}

	public function run( ?Element_Base $element = null ): \WP_Query {
		if ( '' === $this->query_id ) {
			return new \WP_Query( $this->args );
		}

		$query_id = $this->query_id;
		$listener = function ( \WP_Query $wp_query ) use ( $query_id, $element ) {
			do_action( "elementor/query/{$query_id}", $wp_query, $element );
		};

		add_action( 'pre_get_posts', $listener );
		$query = new \WP_Query( $this->args );
		remove_action( 'pre_get_posts', $listener );

		return $query;
	}
}
