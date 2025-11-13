<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Import_Runner_Base {
	/**
	 * Handle the import customization for a specific type.
	 *
	 * @param mixed $result Previous filter result
	 * @param array $data Import data
	 * @param array $imported_data Already imported data
	 * @param array $customization Customization settings
	 * @param object $runner Core runner instance
	 * @return array|mixed
	 */
	abstract public function handle( $result, array $data, array $imported_data, array $customization, $runner );
}
