<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Export;

use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Export_Runner_Base;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Traits\Site_Settings_Helpers;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Site_Settings extends Export_Runner_Base {
	use Site_Settings_Helpers;

	public function handle( $result, array $data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$kit = Plugin::elementor()->kits_manager->get_active_kit();
		$kit_data = $kit->get_export_data();

		$allowed_settings = $this->get_allowed_settings();

		foreach ( $customization as $key => $value ) {
			if ( ! in_array( $key, $allowed_settings, true ) ) {
				unset( $customization[ $key ] );
			}
		}

		$manifest_data = [ 'site-settings' => $customization ];

		if ( ! $customization['globalColors'] ) {
			$kit_data = $this->remove_setting_by_key( $kit_data, 'globalColors' );
		}

		if ( ! $customization['globalFonts'] ) {
			$kit_data = $this->remove_setting_by_key( $kit_data, 'globalFonts' );
		}

		if ( ! $customization['themeStyleSettings'] ) {
			$kit_data = $this->remove_setting_by_key( $kit_data, 'themeStyleSettings' );
		}

		if ( ! $customization['generalSettings'] ) {
			$kit_data = $this->remove_setting_by_key( $kit_data, 'generalSettings' );
		}

		if ( ! empty( $customization['theme'] ) ) {
			$theme_data = $runner->export_theme();
			if ( $theme_data ) {
				$kit_data['theme'] = $theme_data;
				$manifest_data['theme'] = $theme_data;
			}
		}

		if ( ! empty( $customization['experiments'] ) ) {
			$experiments = $runner->export_experiments();
			if ( $experiments ) {
				$kit_data['experiments'] = $experiments;
				$manifest_data['experiments'] = array_keys( $experiments );
			}
		}

		return [
			'files' => [
				'path' => 'site-settings',
				'data' => $kit_data,
			],
			'manifest' => [
				$manifest_data,
			],
		];
	}
}
