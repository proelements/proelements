<?php

namespace ElementorPro\Core\Security;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Capability {
	/**
	 * 'edit_post' is one of the meta-capabilities which is the combination of
	 *  edit_posts and edit_others_posts primitive capabilities
	 *
	 *  https://wordpress.org/documentation/article/roles-and-capabilities/
	 *  https://learn.wordpress.org/tutorial/custom-post-types-and-capabilities/
	 */
	const EDIT_POST_META = 'edit_post';
	const EDIT_POSTS = 'edit_posts';
	const READ_PRIVATE_POSTS = 'read_private_posts';
}
