<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use Elementor\Data\Base\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Endpoint extends Endpoint {
	/**
	 * Check if post is lock.
	 *
	 * @param $post_id
	 *
	 * @return bool|false|int
	 */
	protected function is_post_lock( $post_id ) {
		require_once ABSPATH . 'wp-admin/includes/post.php';

		return wp_check_post_lock( $post_id );
	}
}
