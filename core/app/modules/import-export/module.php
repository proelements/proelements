<?php
namespace ElementorPro\Core\App\Modules\ImportExport;

use Elementor\Core\Base\Module as BaseModule;
use ElementorPro\Plugin;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;
use Elementor\App\Modules\ImportExport\Processes\Export;
use Elementor\App\Modules\ImportExport\Processes\Import;
use Elementor\App\Modules\ImportExport\Processes\Revert;
use ElementorPro\Core\App\Modules\ImportExport\Runners\Import\Templates as ImportTemplates;
use ElementorPro\Core\App\Modules\ImportExport\Runners\Export\Templates as ExportTemplates;
use ElementorPro\Core\App\Modules\ImportExport\Runners\Revert\Templates as RevertTemplates;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseModule {

	public function get_name() {
		return 'import-export';
	}

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	private function add_actions() {
		add_filter( 'elementor/import/get_default_settings_conflicts', function( array $conflicts, array $templates ) {
			return $this->apply_conditions_conflicts( $conflicts, $templates );
		}, 10, 2 );

		add_action( 'elementor/import-export/import-kit', function( Import $import ) {
			$this->register_import_kit_runners( $import );
		} );

		add_action( 'elementor/import-export/export-kit', function( Export $export ) {
			$this->register_export_kit_runners( $export );
		} );

		add_action( 'elementor/import-export/revert-kit', function( Revert $revert ) {
			$this->register_revert_kit_runners( $revert );
		} );
	}

	private function apply_conditions_conflicts( $conflicts, $templates ) {
		/** @var ThemeBuilderModule $theme_builder_module */
		$theme_builder_module = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		if ( ! $theme_builder_module ) {
			return $conflicts;
		}

		return $conflicts + $theme_builder_module->get_conditions_conflicts( $templates );
	}

	private function register_import_kit_runners( Import $import ) {
		$import->register( new ImportTemplates() );
	}

	private function register_export_kit_runners( Export $export ) {
		$export->register( new ExportTemplates() );
	}

	private function register_revert_kit_runners( Revert $revert ) {
		$revert->register( new RevertTemplates() );
	}
}
