<?php
namespace ElementorPro\Core\Data\Endpoints;

use Elementor\Utils;
use ElementorPro\Plugin;
use ElementorPro\Core\Data\Interfaces\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Refresh_Base extends Base implements Endpoint {
	protected $is_edit_mode;

	abstract public function get_name() : string;

	abstract public function get_route() : string;

	protected function permission_callback( $request, $widget_name = '' ): bool {
		$data = $request->get_params();

		if ( $this->is_edit_mode( $data['post_id'] ) ) {
			return true;
		}

		$post = get_post( $data['post_id'] );

		if ( ! $post || 'publish' !== $post->post_status ) {
			return false;
		}

		$document = Plugin::elementor()->documents->get( $data['post_id'] );

		if ( ! $document ) {
			return false;
		}

		$element_data = $document->get_elements_data();
		$widget = Utils::find_element_recursive( $element_data, $data['widget_id'] );

		if ( empty( $widget ) ) {
			return false;
		}

		if ( 'widget' !== $widget['elType'] || $widget_name !== $widget['widgetType'] ) {
			return false;
		}

		return true;
	}

	protected function is_widget_model_valid( $widget_model ) {
		return is_array( $widget_model )
			&& isset( $widget_model['id'] )
			&& is_string( $widget_model['id'] )
			&& isset( $widget_model['settings'] )
			&& is_array( $widget_model['settings'] );
	}

	/**
	 * The widget ID can only be 7 characters long, and contain only letters and numbers.
	 *
	 * @param $data
	 * @return bool
	 */
	protected function is_widget_id_valid( $widget_id ) {
		return preg_match( '/^[a-zA-Z0-9]+$/', $widget_id )
			&& strlen( $widget_id ) === 7;
	}

	protected function create_widget_instance_from_db( $post_id, $widget_id ) {
		$document = Plugin::elementor()->documents->get( $post_id );

		$widget_data = Utils::find_element_recursive( $document->get_elements_data(), $widget_id );

		return Plugin::elementor()->elements_manager->create_element_instance( $widget_data );
	}

	protected function is_edit_mode( $post_id ) {
		if ( isset( $this->is_edit_mode ) ) {
			return $this->is_edit_mode;
		}

		$document = Plugin::elementor()->documents->get( $post_id );

		$this->is_edit_mode = ! empty( $document ) && $document->is_editable_by_current_user();

		return $this->is_edit_mode;
	}
}
