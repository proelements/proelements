<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExportCustomization;

use Elementor\App\Modules\ImportExportCustomization\Processes\Export;
use Elementor\App\Modules\ImportExportCustomization\Processes\Import;
use Elementor\App\Modules\ImportExportCustomization\Processes\Revert;

class Import_Export_Customization {
	const FILE_NAME = 'custom-fonts';

	public function register_hooks() {
		add_action( 'elementor/import-export-customization/export-kit', function ( Export $export ) {
			$export->register( new Export_Runner() );
		} );

		add_action( 'elementor/import-export-customization/import-kit', function ( Import $import ) {
			$import->register( new Import_Runner() );
		} );

		add_action( 'elementor/import-export-customization/revert-kit', function ( Revert $revert ) {
			$revert->register( new Revert_Runner() );
		} );
	}
}
