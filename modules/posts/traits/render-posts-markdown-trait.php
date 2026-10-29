<?php
namespace ElementorPro\Modules\Posts\Traits;

use ElementorPro\Modules\QueryControl\Module as Query_Control_Module;

trait Render_Posts_Markdown_Trait {

	protected function render_posts_query_as_markdown(): string {
		$avoid_list_before = Query_Control_Module::$displayed_ids;

		$this->query_posts();
		$query = $this->get_query();

		Query_Control_Module::$displayed_ids = $avoid_list_before;

		if ( ! $query || ! $query->have_posts() ) {
			return '';
		}

		$lines = [];

		foreach ( $query->posts as $post ) {
			$line = $this->build_post_markdown_line( $post );

			if ( '' !== $line ) {
				$lines[] = $line;
			}
		}

		wp_reset_postdata();

		return implode( "\n", $lines );
	}

	private function build_post_markdown_line( \WP_Post $post ): string {
		$title = $this->sanitize_markdown_text( get_the_title( $post ) );

		if ( '' === $title ) {
			return '';
		}

		$permalink = (string) get_permalink( $post );
		$excerpt = $this->sanitize_markdown_text( get_the_excerpt( $post ) );

		$line = '' !== $permalink
			? '- [' . $title . '](' . esc_url( $permalink ) . ')'
			: '- ' . $title;

		if ( '' !== $excerpt ) {
			$line .= ' — ' . $excerpt;
		}

		return $line;
	}

	private function sanitize_markdown_text( $value ): string {
		$text = trim( wp_strip_all_tags( (string) $value ) );

		if ( '' === $text ) {
			return '';
		}

		$text = preg_replace( '/\s+/', ' ', $text );

		return str_replace( [ '[', ']' ], [ '\\[', '\\]' ], $text );
	}
}
