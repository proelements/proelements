<?php
namespace ElementorPro\Modules\GlobalWidget\ImportExportCustomization;

use Elementor\Core\Base\Document;
use Elementor\TemplateLibrary\Source_Local;
use Elementor\App\Modules\ImportExportCustomization\Utils as ImportExportCustomizationUtils;
use ElementorPro\Modules\GlobalWidget\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Import {

	public function add_global_widgets_to_import( $result, $data, $customization, $runner ) {
		if ( $customization && ( ! isset( $customization['globalWidgets']['enabled'] ) || ! $customization['globalWidgets']['enabled'] ) ) {
			return $result;
		}

		$global_widgets_result = $this->import_global_widgets( $data );

		if ( ! empty( $global_widgets_result ) ) {
			$result['templates']['succeed'] = array_merge( $result['templates']['succeed'], $global_widgets_result['succeed'] );
			$result['templates']['failed'] = array_merge( $result['templates']['failed'], $global_widgets_result['failed'] );

			foreach ( $global_widgets_result['succeed_summary'] as $doc_type => $count ) {
				$result['templates']['succeed_summary'][ $doc_type ] = ( $result['templates']['succeed_summary'][ $doc_type ] ?? 0 ) + $count;
			}
		}

		return $result;
	}

	private function import_global_widgets( $data ) {
		$path = $data['extracted_directory_path'] . 'templates/';
		$templates = $data['manifest']['templates'];

		$result = [
			'succeed' => [],
			'failed' => [],
			'succeed_summary' => [],
		];

		foreach ( $templates as $id => $template_settings ) {
			if ( Module::TEMPLATE_TYPE !== $template_settings['doc_type'] ) {
				continue;
			}

			try {
				$template_data = ImportExportCustomizationUtils::read_json_file( $path . $id );
				$imported_id = $this->import_global_widget( $id, $template_settings, $template_data, $data );

				$result['succeed'][ $id ] = $imported_id;
				$result['succeed_summary'][ $template_settings['doc_type'] ] = ( $result['succeed_summary'][ $template_settings['doc_type'] ] ?? 0 ) + 1;
			} catch ( \Exception $error ) {
				$result['failed'][ $id ] = $error->getMessage();
			}
		}

		return $result;
	}

	private function import_global_widget( $id, array $template_settings, array $template_data, array $import_data ) {
		$new_document = Plugin::elementor()->documents->create(
			Module::TEMPLATE_TYPE,
			[
				'post_title' => $template_settings['title'],
				'post_type' => Source_Local::CPT,
				'post_status' => 'publish',
			]
		);

		if ( is_wp_error( $new_document ) ) {
			throw new \Exception( esc_html( $new_document->get_error_message() ) );
		}

		$template_data['import_settings'] = $template_settings;
		$template_data['id'] = $id;

		if ( isset( $import_data['session_id'] ) ) {
			$new_attachment_callback = function( $attachment_id ) use ( $import_data ) {
				$this->set_session_post_meta( $attachment_id, $import_data['session_id'] );
			};

			add_filter( 'elementor/template_library/import_images/new_attachment', $new_attachment_callback );
		}

		$new_document->import( $template_data );

		if ( isset( $new_attachment_callback ) ) {
			remove_filter( 'elementor/template_library/import_images/new_attachment', $new_attachment_callback );
		}

		$document_id = $new_document->get_main_id();

		if ( isset( $import_data['session_id'] ) ) {
			$this->set_session_post_meta( $document_id, $import_data['session_id'] );
		}

		return $document_id;
	}

	private function set_session_post_meta( $post_id, $session_id ) {
		update_post_meta( $post_id, '_elementor_import_session_id', $session_id );
	}
}
