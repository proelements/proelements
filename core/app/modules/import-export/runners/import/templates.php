<?php

namespace ElementorPro\Core\App\Modules\ImportExport\Runners\Import;

use Elementor\App\Modules\ImportExport\Runners\Import\Import_Runner_Base;
use Elementor\App\Modules\ImportExport\Utils as ImportExportUtils;
use Elementor\Core\Base\Document;
use Elementor\Plugin;
use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;
use ElementorPro\Plugin as ProPlugin;
use Elementor\TemplateLibrary\Source_Local;

class Templates extends Import_Runner_Base {

	private $import_session_id;

	private $templates_conditions = [];

	public static function get_name() : string {
		return 'templates';
	}

	public function should_import( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'templates', $data['include'], true ) &&
			! empty( $data['extracted_directory_path'] ) &&
			! empty( $data['manifest']['templates'] )
		);
	}

	public function import( array $data, array $imported_data ) {
		$this->import_session_id = $data['session_id'];

		$path = $data['extracted_directory_path'] . 'templates/';
		$templates = $data['manifest']['templates'];

		$result['templates'] = [
			'succeed' => [],
			'failed' => [],
		];

		foreach ( $templates as $id => $template_settings ) {
			try {
				$template_data = ImportExportUtils::read_json_file( $path . $id );
				$import = $this->import_template( $id, $template_settings, $template_data );

				$result['templates']['succeed'][ $id ] = $import;
			} catch ( \Exception $error ) {
				$result['templates']['failed'][ $id ] = $error->getMessage();
			}
		}

		return $result;
	}

	private function import_template( $id, array $template_settings, array $template_data ) {
		$doc_type = $template_settings['doc_type'];

		$new_document = Plugin::$instance->documents->create(
			$doc_type,
			[
				'post_title' => $template_settings['title'],
				'post_type' => Source_Local::CPT,
				'post_status' => 'publish',
			]
		);

		if ( is_wp_error( $new_document ) ) {
			throw new \Exception( $new_document->get_error_message() );
		}

		$template_data['import_settings'] = $template_settings;
		$template_data['id'] = $id;

		$this->set_templates_conditions( $template_data );

		$new_attachment_callback = function( $attachment_id ) {
			$this->set_session_post_meta( $attachment_id, $this->import_session_id );
		};

		add_filter( 'elementor/template_library/import_images/new_attachment', $new_attachment_callback );

		$new_document->import( $template_data );

		remove_filter( 'elementor/template_library/import_images/new_attachment', $new_attachment_callback );

		$document_id = $new_document->get_main_id();

		$this->set_session_post_meta( $document_id, $this->import_session_id );

		return $document_id;
	}

	public function get_import_session_metadata() : array {
		return [
			'template_conditions' => $this->templates_conditions,
		];
	}

	private function set_templates_conditions( $template_data ) {
		$conditions = $template_data['import_settings']['conditions'];

		if ( empty( $conditions ) ) {
			return;
		}

		$condition = $conditions[0];

		$condition = rtrim( implode( '/', $condition ), '/' );

		/** @var ThemeBuilderModule $theme_builder_module */
		$theme_builder_module = ProPlugin::instance()->modules_manager->get_modules( 'theme-builder' );
		$conditions_manager = $theme_builder_module->get_conditions_manager();

		$conflicts = $conditions_manager->get_conditions_conflicts_by_location(
			$condition,
			$template_data['import_settings']['location']
		);

		foreach ( $conflicts as $template ) {
			$template_document = Plugin::$instance->documents->get( $template['template_id'] );

			$template_conditions = $theme_builder_module->get_conditions_manager()->get_document_conditions( $template_document );

			$this->templates_conditions[ $template['template_id'] ] = $template_conditions;
		}
	}
}
