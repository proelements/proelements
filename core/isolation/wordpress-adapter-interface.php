<?php

namespace ElementorPro\Core\Isolation;

interface Wordpress_Adapter_Interface {
	public function has_post_thumbnail();
	public function get_comments_number();
	public function is_author( $author = ''): bool;
}
