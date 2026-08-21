<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Loop_Query_Pagination {
	const PAGE_QUERY_VAR_PREFIX = 'e-page-';

	public static function get_page_query_var_key( string $loop_id ): string {
		return self::PAGE_QUERY_VAR_PREFIX . $loop_id;
	}

	public static function get_current_page_for_loop( string $loop_id ): int {
		$raw = Utils::get_super_global_value( $_GET, self::get_page_query_var_key( $loop_id ) );
		$page = (int) ( $raw ?? 0 );

		return $page > 0 ? $page : 1;
	}

	public static function apply_paged_to_args( array $args, string $loop_id ): array {
		if ( '' === $loop_id ) {
			return $args;
		}

		$page = self::get_current_page_for_loop( $loop_id );

		if ( $page > 1 ) {
			$args['paged'] = $page;
		}

		return $args;
	}
}
