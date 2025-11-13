<?php

namespace ElementorPro\Modules\CustomCode\ImportExportCustomization;

use Elementor\App\Modules\ImportExportCustomization\Processes\Export as CustomizationExport;
use Elementor\App\Modules\ImportExportCustomization\Processes\Import as CustomizationImport;
use Elementor\App\Modules\ImportExportCustomization\Processes\Revert as CustomizationRevert;

class Import_Export_Customization {
	const FILE_NAME = 'custom-code';

	public function register_hooks() {
		add_action( 'elementor/import-export-customization/export-kit', function ( CustomizationExport $export ) {
			$export->register( new Export_Runner() );
		} );

		add_action( 'elementor/import-export-customization/import-kit', function ( CustomizationImport $import ) {
			$import->register( new Import_Runner() );
		} );

		add_action( 'elementor/import-export-customization/revert-kit', function ( CustomizationRevert $revert ) {
			$revert->register( new Revert_Runner() );
		} );
	}
}
