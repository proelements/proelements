<?php
namespace ElementorPro\Modules\LoopFilter\Data\Endpoints;

use Elementor\Utils;
use Elementor\Widget_Base;
use ElementorPro\Modules\LoopFilter\Data\Interfaces\Endpoint;
use ElementorPro\Modules\LoopFilter\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Refresh_Loop extends Base implements Endpoint {

	private $is_edit_mode;

	public function get_name() : string {
		return 'refresh-loop';
	}

	public function get_route() : string {
		return 'refresh-loop';
	}

	private function is_widget_model_valid( $widget_model ) {
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
	private function is_widget_id_valid( $widget_id ) {
		return preg_match( '/^[a-zA-Z0-9]+$/', $widget_id )
			&& strlen( $widget_id ) === 7;
	}

	private function permission_callback( $request ): bool {
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
		$loop_widget = Utils::find_element_recursive( $element_data, $data['widget_id'] );

		if ( empty( $loop_widget ) ) {
			return false;
		}

		if ( 'widget' !== $loop_widget['elType'] || 'loop-grid' !== $loop_widget['widgetType'] ) {
			return false;
		}

		return true;
	}

	private function create_widget_instance_from_db( $post_id, $widget_id ) {
		$document = Plugin::elementor()->documents->get( $post_id );

		$widget_data = Utils::find_element_recursive( $document->get_elements_data(), $widget_id );

		return Plugin::elementor()->elements_manager->create_element_instance( $widget_data );
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

	private function is_edit_mode( $post_id ) {
		if ( isset( $this->is_edit_mode ) ) {
			return $this->is_edit_mode;
		}

		$document = Plugin::elementor()->documents->get( $post_id );

		$this->is_edit_mode = ! empty( $document ) && $document->is_editable_by_current_user();

		return $this->is_edit_mode;
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
					return $this->permission_callback( $request );
				},
			],
		] );
	}
}
