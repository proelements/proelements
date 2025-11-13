<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Export;

use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Export_Runner_Base;
use Elementor\Plugin;
use Elementor\Modules\Library\Documents\Library_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Templates extends Export_Runner_Base {
	public function handle( $result, array $data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$template_types = [];

		if ( isset( $customization['siteTemplates']['enabled'] ) && $customization['siteTemplates']['enabled'] ) {
			$template_types = array_keys( Plugin::$instance->documents->get_document_types( [
				'is_editable' => true,
				'show_in_library' => true,
				'export_group' => Library_Document::EXPORT_GROUP,
			] ) );
		}

		return $runner->export_templates_by_types( $template_types, $data );
	}
}
