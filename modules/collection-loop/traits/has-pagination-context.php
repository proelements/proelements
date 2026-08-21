<?php
namespace ElementorPro\Modules\CollectionLoop\Traits;

use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Pagination;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait Has_Pagination_Context {

	protected function get_pagination_context(): array {
		return Render_Context::get( Collection_Loop::LOOP_CONTEXT_KEY );
	}

	protected function has_pagination_context(): bool {
		$context = $this->get_pagination_context();

		return ! empty( $context['loop_id'] )
			&& isset( $context['max_pages'] )
			&& $context['max_pages'] > 1;
	}

	protected function get_pagination_urls_config(): array {
		$context = $this->get_pagination_context();
		$loop_id = (string) ( $context['loop_id'] ?? '' );
		$page_key = Loop_Query_Pagination::get_page_query_var_key( $loop_id );
		$base = html_entity_decode( remove_query_arg( $page_key ), ENT_QUOTES, 'UTF-8' );
		$format = ( false !== strpos( $base, '?' ) ? '&' : '?' ) . $page_key . '=%#%';

		return [
			'base' => $base . '%_%',
			'format' => $format,
		];
	}

	protected function build_page_url( int $page ): string {
		if ( $page < 1 ) {
			return '';
		}

		$config = $this->get_pagination_urls_config();

		if ( $page <= 1 ) {
			return str_replace( '%_%', '', $config['base'] );
		}

		$link = str_replace( '%_%', $config['format'], $config['base'] );

		return str_replace( '%#%', (string) $page, $link );
	}
}
