<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Import;

use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Import_Runner_Base;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Traits\Site_Settings_Helpers;
use ElementorPro\Plugin;
use Elementor\Core\Settings\Page\Manager as PageManager;
use Elementor\App\Modules\ImportExportCustomization\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Elementor_Content extends Import_Runner_Base {
	public function handle( $result, array $data, array $imported_data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$selected_pages = $customization['pages'] ?? null;

		if ( is_array( $selected_pages ) && ! in_array( $data['id'], $selected_pages ) ) {
			return [
				'status' => 'failed',
				'result' => __( 'Skipped', 'elementor-pro' ),
			];
		}

		return $runner->read_and_import_post(
			$data['path'],
			$data['id'],
			$data['post_settings'],
			$data['post_type'],
			$data['imported_terms'],
		);
	}
}
