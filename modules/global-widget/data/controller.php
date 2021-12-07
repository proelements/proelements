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
				$template_data = Plugin::elementor()->templates_manager->get_template_data( [
					'source' => 'local',
					'template_id' => $template_id,
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
}
