<?php
namespace ElementorPro\Modules\Search\Data\Endpoints;

use Elementor\Widget_Base;
use ElementorPro\Modules\Search\Module;
use ElementorPro\Plugin;
use ElementorPro\Core\Data\Endpoints\Refresh_Base;
use ElementorPro\Modules\Search\Module as Search_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Refresh_Search extends Refresh_Base {

	public function get_name() : string {
		return 'refresh-search';
	}

	public function get_route() : string {
		return 'refresh-search';
	}

	public function get_updated_search_widget_markup( \WP_REST_Request $request ): array {
		$data = $request->get_params();

		/** @var Module $search_module */
		$search_module = Plugin::instance()->modules_manager->get_modules( 'search' );

		if ( $this->is_edit_mode( $data['post_id'] ) ) {
			$widget_instance = Plugin::elementor()->elements_manager->create_element_instance( $data['widget_model'] );
		} else {
			$widget_instance = $this->create_widget_instance_from_db( $data['post_id'], $data['widget_id'] );
		}

		ob_start();

		/** @var Widget_Base $widget_instance */
		$widget_instance->set_search_term( $data['search_term'] );
		$widget_instance->render_results();

		$markup = ob_get_clean();

		$widget_instance->set_search_term( '' );

		return [
			'data' => $markup,
		];
	}

	protected function register() {
		register_rest_route( $this->controller->get_namespace(), $this->get_route(), [
			[
				'args' => [
					'post_id' => [
						'description' => 'The post ID of the page containing the loop.',
						'type' => 'integer',
						'required' => true,
						'validate_callback' => function ( $param ) {
							return ! empty( $param ) && is_numeric( $param );
						},
					],
					'widget_id' => [
						'description' => 'The ID of the loop widget.',
						'type' => 'string',
						'required' => true,
						'validate_callback' => function ( $param ) {
							return $this->is_widget_id_valid( $param );
						},
					],
					'widget_model' => [
						'description' => 'The model of the loop widget. In Editor mode only.',
						'type' => 'object',
						'required' => false,
						'validate_callback' => function ( $param, $request ) {
							$params = $request->get_params();

							if ( ! $this->is_edit_mode( $params['post_id'] ) ) {
								return false;
							}

							return $this->is_widget_model_valid( $param );
						},
					],
				],
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'get_updated_search_widget_markup' ],
				'permission_callback' => function ( $request ) {
					return $this->permission_callback( $request, Search_Module::FEATURE_ID );
				},
			],
		] );
	}
}
