<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use ElementorPro\Plugin;
use Elementor\Core\Utils\Exceptions;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Core\App\Modules\SiteEditor\Data\Responses\Lock_Error_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Templates_Conditions extends Base_Endpoint {
	/**
	 * @return string
	 */
	public function get_name() {
		return 'templates-conditions';
	}

	protected function register() {
		$this->register_item_route();
		$this->register_item_route( \WP_REST_Server::EDITABLE );
	}

	public function get_item( $template_id, $request ) {
		return $this->get_conditions( $template_id );
	}

	public function update_item( $template_id, $request ) {
		$lock_by_user_id = $this->is_post_lock( $template_id );

		if ( $lock_by_user_id ) {
			return new Lock_Error_Response( $lock_by_user_id );
		}

		$data = $request->get_body_params();

		if ( ! isset( $data['conditions'] ) ) {
			$data['conditions'] = [];
		}

		$is_saved = $this->save_conditions( $template_id, $data['conditions'] );

		if ( ! $is_saved ) {
			return new \WP_Error(
				'conditions',
				__( 'Error while saving conditions.', 'elementor-pro' ),
				[ 'status' => Exceptions::INTERNAL_SERVER_ERROR ]
			);
		}

		return true;
	}

	protected function get_conditions( $post_id ) {
		$document = \Elementor\Plugin::$instance->documents->get( $post_id );

		/** @var Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		return $theme_builder
			->get_conditions_manager()
			->get_document_conditions( $document );
	}

	protected function save_conditions( $post_id, $conditions ) {
		/** @var Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$is_saved = $theme_builder
			->get_conditions_manager()
			->save_conditions( $post_id, $conditions );

		if ( ! $is_saved ) {
			return new \WP_Error(
				'conditions_save',
				__( 'Cannot save those conditions.', 'elementor-pro' ),
				[ 'status' => Exceptions::INTERNAL_SERVER_ERROR ]
			);
		}

		return true;
	}
}
