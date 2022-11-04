<?php
namespace ElementorPro\Modules\Notes\Database\Transformers;

use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class User_Transformer {

	/**
	 * Apply transformations to the $user received.
	 *
	 * @param User $user
	 * @param array $dependencies{post_id: int}
	 *
	 * @return array
	 */
	public function transform( User $user, $dependencies = [] ) {
		return $this->add_capabilities( $this->map_properties( $user ), $dependencies );
	}

	/**
	 * Maps the user properties to new keys.
	 *
	 * @param User $user
	 *
	 * @return array
	 */
	protected function map_properties( User $user ) {
		// TODO: This response might be visible to unauthorized users.
		//  DON'T INCLUDE ANY SENSITIVE DATA.
		return [
			'id' => $user->ID,
			'name' => $user->display_name,
			'url' => $user->user_url,
			'slug' => $user->user_nicename,
			'avatar_urls' => $user->get_avatars()->all(),
		];
	}

	/**
	 * Add user capabilities to the user object.
	 *
	 * @param array $user
	 * @param array $dependencies
	 *
	 * @return array
	 */
	protected function add_capabilities( array $user, $dependencies ) {
		$user['capabilities']['notes']['can_read'] = Capabilities::can_read_notes( $user['id'] );

		if ( ! empty( $dependencies['post_id'] ) ) {
			$user['capabilities']['post']['can_edit'] = Capabilities::can_edit_post( $user['id'], $dependencies['post_id'] );
		}

		return $user;
	}
}
