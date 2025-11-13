<?php
namespace ElementorPro\Modules\LoopFilter\Data\Endpoints;

use Elementor\Widget_Base;
use Elementor\Utils;
use ElementorPro\Modules\LoopFilter\Module;
use ElementorPro\Plugin;
use ElementorPro\Core\Data\Endpoints\Refresh_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Refresh_Loop extends Refresh_Base {
	public function get_name() : string {
		return 'refresh-loop';
	}

	public function get_route() : string {
		return 'refresh-loop';
	}

	public function get_updated_loop_widget_markup( \WP_REST_Request $request ): array {
		$data = $request->get_params();

		/** @var Module $loop_filter */
		$loop_filter = Plugin::instance()->modules_manager->get_modules( 'loop-filter' );

		$loop_filter->register_widget_filter( $data['widget_id'], $data['widget_filters'] );

		if ( $this->is_edit_mode( $data['post_id'] ) ) {
			$widget_instance = Plugin::elementor()->elements_manager->create_element_instance( $data['widget_model'] );
		} else {
			$widget_instance = $this->create_widget_instance_from_db( $data['post_id'], $data['widget_id'] );
		}

		set_query_var( 'pagination_base_url', $data['pagination_base_url'] );

		ob_start();

		/** @var Module $loop_filter */
		$loop_filter = Plugin::instance()->modules_manager->get_modules( 'loop-filter' );

		add_filter( 'elementor/query/query_args', [ $loop_filter, 'filter_loop_query' ], 10, 2 );

		/** @var Widget_Base $widget_instance */
		$widget_instance->render_content();

		remove_filter( 'elementor/query/query_args', [ $loop_filter, 'filter_loop_query' ] );

		$markup = ob_get_clean();

		set_query_var( 'pagination_base_url', null );

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
					'widget_filters' => [
						'description' => 'The filters for the loop widget.',
						'type' => 'object',
						'required' => true,
						'validate_callback' => function( $param ) {
							// TODO: Build a validator for this that iterates over all passed filters and validates them.
							return is_array( $param );
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
					'pagination_base_url' => [
						'required' => false,
						'validate_callback' => function ( $param ) {
							return filter_var( $param, FILTER_VALIDATE_URL );
						},
						'sanitize_callback' => 'esc_url_raw',
					],
				],
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'get_updated_loop_widget_markup' ],
				'permission_callback' => function ( $request ) {
					return $this->permission_callback( $request, 'loop-grid' );
				},
			],
		] );
	}
}
