<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExport;

use Elementor\App\Modules\ImportExport\Processes\Export;
use Elementor\App\Modules\ImportExport\Processes\Import;
use Elementor\App\Modules\ImportExport\Processes\Revert;

class Import_Export {
	const FILE_NAME = 'custom-fonts';

	public function register_hooks() {
		add_action( 'elementor/import-export/export-kit', function ( Export $export ) {
			$export->register( new Export_Runner() );
		} );

		add_action( 'elementor/import-export/import-kit', function ( Import $import ) {
			$import->register( new Import_Runner() );
		} );

		add_action( 'elementor/import-export/revert-kit', function ( Revert $revert ) {
			$revert->register( new Revert_Runner() );
		} );
	}
}
