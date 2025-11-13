<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Import;

use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Import_Runner_Base;
use Elementor\Plugin;
use Elementor\Modules\Library\Documents\Library_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Templates extends Import_Runner_Base {
	public function handle( $result, array $data, array $imported_data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$result = [
			'templates' => [
				'succeed' => [],
				'failed' => [],
				'succeed_summary' => [],
			],
		];

		if ( isset( $customization['siteTemplates']['enabled'] ) && $customization['siteTemplates']['enabled'] ) {
			$template_types = array_keys( Plugin::$instance->documents->get_document_types( [
				'is_editable' => true,
				'show_in_library' => true,
				'export_group' => Library_Document::EXPORT_GROUP,
			] ) );

			$result = $runner->process_templates_import( $data, $template_types );
		}

		/**
		 * Filter the templates import result to allow 3rd parties to add their own imported templates.
		 *
		 * @param array $result The import result structure with 'templates' key containing succeed/failed/succeed_summary.
		 * @param array $data The full import data.
		 * @param array|null $customization The customization settings for templates.
		 * @param object $runner The runner instance.
		 */
		$result = apply_filters( 'elementor/import-export-customization/import/templates_result', $result, $data, $customization, $runner );

		return $result;
	}
}
