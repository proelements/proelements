<?php
namespace ElementorPro\Modules\GlobalWidget\Data;

use Elementor\Data\Base\Controller as Controller_Base;
use ElementorPro\Plugin;

class Controller extends Controller_Base {

	public function get_name() {
		return 'global-widget/templates';
	}

	public function register_endpoints() {} // No endpoints.

	// TODO: After merging with 'REST API V2' add `get_collection_params`.
	public function get_items( $request ) {
		$result = [];
		$ids = $request->get_param( 'ids' );

		if ( ! empty( $ids ) ) {
			// TODO: This logic should be handled at REST API.
			$ids = explode( ',', $ids );

			foreach ( $ids as $template_id ) {
				if ( ! $this->is_allowed_to_read_template( $template_id ) ) {
					continue;
				}

				$template_data = Plugin::elementor()->templates_manager->get_template_data( [
					'source' => 'local',
					'template_id' => $template_id,
					'check_permissions' => false,
				] );

				if ( ! empty( $template_data ) ) {
					$result[ $template_id ] = $template_data['content'][0];
				}
			}
		}

		return $result;
	}

	public function get_permission_callback( $request ) {
		return current_user_can( 'edit_posts' );
	}

	private function is_allowed_to_read_template( $template_id ): bool {
		return $this->user_can_edit_template( $template_id ) || $this->is_published_and_unprotected( $template_id );
	}

	private function is_published_and_unprotected( int $template_id ): bool {
		$post_status = get_post_status( $template_id );

		return 'publish' === $post_status && ! post_password_required( $template_id );
	}

	private function user_can_edit_template( int $template_id ): bool {
		return current_user_can( 'edit_post', $template_id );
	}
}
