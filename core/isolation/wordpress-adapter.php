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
}
