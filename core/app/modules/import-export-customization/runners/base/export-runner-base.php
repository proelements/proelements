<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Export_Runner_Base {
	/**
	 * Handle the export customization for a specific type.
	 *
	 * @param mixed $result Previous filter result
	 * @param array $data Export data
	 * @param array $customization Customization settings
	 * @param object $runner Core runner instance
	 * @return array|mixed
	 */
	abstract public function handle( $result, array $data, array $customization, $runner );
}
