<?php

namespace ElementorPro\Core\Isolation;

class Wordpress_Adapter implements Wordpress_Adapter_Interface {

	public function has_post_thumbnail(): bool {
		return has_post_thumbnail();
	}

	public function get_comments_number() {
		return get_comments_number();
	}

	public function is_author( $author = '' ): bool {
		return is_author( $author );
	}

	public function wp_get_attachment_caption( $attachment_id ): string {
		return wp_get_attachment_caption( $attachment_id );
	}

	public function get_the_title( $post_id ): string {
		return get_the_title( $post_id );
	}

	public function current_user_can( $capability, ...$args ): bool {
		return current_user_can( $capability, ...$args );
	}
}
