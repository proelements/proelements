<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use ElementorPro\Plugin;
use Elementor\Core\Utils\Exceptions;
use Elementor\TemplateLibrary\Manager as TemplateManager;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;
use ElementorPro\Modules\ThemeBuilder\Classes\Templates_Types_Manager;
use ElementorPro\Core\App\Modules\SiteEditor\Render_Mode_Template_Preview;
use ElementorPro\Core\App\Modules\SiteEditor\Data\Responses\Lock_Error_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Templates extends Base_Endpoint {

	/**
	 * @var TemplateManager
	 */
	private $templates_manager;

	/**
	 * @var array
	 */
	private $document_types;

	public function __construct( $controller ) {
		parent::__construct( $controller );

		$this->templates_manager = Plugin::elementor()->templates_manager;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return 'templates';
	}

	protected function register() {
		parent::register();

		$this->register_item_route( \WP_REST_Server::DELETABLE );
		$this->register_item_route( \WP_REST_Server::EDITABLE );
		$this->register_items_route( \WP_REST_Server::CREATABLE );
	}

	public function get_items( $request ) {
		$templates = $this->templates_manager->get_source( 'local' )->get_items( [
			'type' => array_keys( $this->get_documents_types() ),
			'post_status' => 'any',
			'orderby' => 'post_date',
			'order' => 'DESC',
		] );

		return $this->normalize_templates_json( $templates );
	}

	public function create_items( $request ) {
		$response = $this->templates_manager->import_template( $request->get_body_params() );

		if ( is_wp_error( $response ) ) {
			return new \WP_Error( 'file', $response->get_error_message(), [ 'status' => Exceptions::BAD_REQUEST ] );
		}

		return $this->normalize_templates_json( $response );
	}

	public function update_item( $id, $request ) {
		$lock_by_user_id = $this->is_post_lock( $id );

		if ( $lock_by_user_id ) {
			return new Lock_Error_Response( $lock_by_user_id );
		}

		wp_update_post( array_merge( [
			'ID' => $id,
		], $request->get_body_params() ) );

		return $this->normalize_template_json_item(
			$this->templates_manager->get_source( 'local' )->get_item( $id )
		);
	}

	public function delete_item( $id, $request ) {
		$lock_by_user_id = $this->is_post_lock( $id );

		if ( $lock_by_user_id ) {
			return new Lock_Error_Response( $lock_by_user_id );
		}

		return ! ! wp_trash_post( $id );
	}

	/**
	 * @return array
	 */
	private function get_documents_types() {
		if ( ! $this->document_types ) {
			/** @var Templates_Types_Manager $types_manager */
			$types_manager = ThemeBuilderModule::instance()->get_types_manager();

			$this->document_types = $types_manager->get_types_config( [
				'support_site_editor' => true,
			] );
		}

		return $this->document_types;
	}

	/**
	 * @param $templates
	 *
	 * @return array
	 */
	private function normalize_templates_json( $templates ) {
		return array_map( [ $this, 'normalize_template_json_item' ], $templates );
	}

	/**
	 * @param $template
	 *
	 * @return array
	 */
	private function normalize_template_json_item( $template ) {
		/** @var Conditions_Manager $conditions_manager */
		$conditions_manager = Plugin::instance()->modules_manager->get_modules( 'theme-builder' )->get_conditions_manager();

		/** @var Theme_Document $document */
		$document = Plugin::elementor()->documents->get( $template['template_id'] );

		$supports_site_editor = $document::get_property( 'support_site_editor' );

		// Supports also a non site editor parts.
		if ( ! $supports_site_editor ) {
			return [
				'id' => $template['template_id'],
				'url' => $template['url'],
				'editURL' => $document->get_edit_url(),
				'supportsSiteEditor' => false,
			];
		}

		$types = $this->get_documents_types();

		$template['instances'] = $conditions_manager->get_document_instances( $template['template_id'] );
		$template['defaultCondition'] = $types[ $template['type'] ]['condition_type'];

		$has_instances = ! empty( $template['instances'] );
		$is_active = false;

		if ( ! $has_instances ) {
			$template['instances'] = [ 'no_instances' => __( 'No instances', 'elementor-pro' ) ];
		} else {
			$is_active = 'publish' === $template['status'];
		}

		if ( ! $template['thumbnail'] ) {
			$template['thumbnail'] = '';
		}

		$site_editor_config = $document->get_site_editor_config();

		$data = array_merge( $template, [
			'id' => $template['template_id'],
			'exportLink' => $template['export_link'],
			'modifiedDate' => $template['human_modified_date'],
			'editURL' => $document->get_edit_url(),
			'conditions' => array_map( function ( $condition ) {
				return array_merge( $condition, [
					'sub' => $condition['sub_name'],
					'subId' => $condition['sub_id'],
				] );
			}, $conditions_manager->get_document_conditions( $document ) ),
			'isActive' => $is_active,
			'type' => $this->calculate_template_type( $template['type'], $template['instances'] ),
			'previewUrl' => $this->get_preview_url( $template['template_id'] ),
			'placeholderUrl' => $site_editor_config['urls']['thumbnail'],
			'pageLayout' => $site_editor_config['page_layout'],
			'supportsSiteEditor' => true,
		] );

		return apply_filters( 'elementor-pro/site-editor/data/template', $data );
	}

	/**
	 * @param $type
	 * @param $instances
	 *
	 * @return string
	 */
	private function calculate_template_type( $type, $instances ) {
		$condition_to_type_map = [
			'front_page' => 'single-page',
			'child_of' => 'single-page',
			'page' => 'single-page',
			'not_found404' => 'error-404',
			'search' => 'search-results',
		];

		// "single" type was split into "single-page", "single-post" and "404".
		// this section supports all the old templates that was created as "single".
		if ( 'single' === $type ) {
			// By default show it under single-post.
			$type = 'single-post';

			foreach ( $instances as $condition_name => $condition_label ) {
				if ( isset( $condition_to_type_map[ $condition_name ] ) ) {
					$type = $condition_to_type_map[ $condition_name ];
					break;
				}
			}
		}

		return $type;
	}

	private function get_preview_url( $post_id ) {
		return Render_Mode_Template_Preview::get_url( $post_id );
	}
}
