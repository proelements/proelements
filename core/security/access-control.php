<?php

namespace ElementorPro\Core\Security;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Access_Control {
	public static function user_can_edit( int $post_id ): bool {
		return current_user_can( Capability::EDIT_POST_META, $post_id );
	}

	public static function user_can_edit_posts(): bool {
		return current_user_can( Capability::EDIT_POSTS );
	}

	public static function user_can_access_private_posts(): bool {
		return current_user_can( Capability::READ_PRIVATE_POSTS );
	}

	/**
	 * @throws \Exception
	 */
	public static function verify_post_edit_access( int $post_id ): void {
		if ( ! self::user_can_edit( $post_id ) ) {
			throw new \Exception( 'You do not have permission to edit this post.' );
		}
	}

	/**
	 * @throws \Exception
	 */
	public static function verify_user_editing_capability(): void {
		if ( ! self::user_can_edit_posts() ) {
			throw new \Exception( 'Access denied: User does not have editing capabilities.' );
		}
	}
}
