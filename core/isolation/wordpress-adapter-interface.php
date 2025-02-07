<?php

namespace ElementorPro\Core\Isolation;

interface Wordpress_Adapter_Interface {
	public function has_post_thumbnail();
	public function get_comments_number();
	public function is_author( $author = ''): bool;
	public function wp_get_attachment_caption( $attachment_id ): string;
	public function get_the_title( $post_id ): string;
	public function current_user_can( $capability, ...$args ): bool;
}
