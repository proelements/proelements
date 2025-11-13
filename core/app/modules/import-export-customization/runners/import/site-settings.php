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

class Site_Settings extends Import_Runner_Base {
	use Site_Settings_Helpers;

	/**
	 * @var int
	 */
	private $active_kit_id;

	/**
	 * @var int
	 */
	private $previous_kit_id;

	/**
	 * @var int
	 */
	private $imported_kit_id;

	public function handle( $result, array $data, array $imported_data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$new_site_settings = $data['site_settings']['settings'];
		$title = $data['manifest']['title'] ?? 'Imported Kit';

		$active_kit = Plugin::elementor()->kits_manager->get_active_kit();

		$this->active_kit_id = (int) $active_kit->get_id();
		$this->previous_kit_id = (int) Plugin::elementor()->kits_manager->get_previous_id();

		$result = [];

		$old_settings = $active_kit->get_meta( PageManager::META_KEY );
		if ( ! $old_settings ) {
			$old_settings = [];
		}

		$new_site_settings = $this->filter_settings_by_customization( $new_site_settings, $customization );

		if ( ( $customization['globalColors'] ?? false ) && ! empty( $old_settings['custom_colors'] ) && ! empty( $new_site_settings['custom_colors'] ) ) {
			$new_site_settings['custom_colors'] = array_merge( $old_settings['custom_colors'], $new_site_settings['custom_colors'] );
		}

		if ( ( $customization['globalFonts'] ?? false ) && ! empty( $old_settings['custom_typography'] ) && ! empty( $new_site_settings['custom_typography'] ) ) {
			$new_site_settings['custom_typography'] = array_merge( $old_settings['custom_typography'], $new_site_settings['custom_typography'] );
		}

		if ( ( $customization['generalSettings'] ?? false ) && ! empty( $new_site_settings['space_between_widgets'] ) ) {
			$new_site_settings['space_between_widgets'] = Utils::update_space_between_widgets_values( $new_site_settings['space_between_widgets'] );
		}

		$new_site_settings = array_replace_recursive( $old_settings, $new_site_settings );

		$new_kit = Plugin::elementor()->kits_manager->create_new_kit( $title, $new_site_settings );
		$this->imported_kit_id = (int) $new_kit;

		$result['site-settings'] = (bool) $new_kit;

		if ( $customization['theme'] ?? false ) {
			$import_theme_result = $runner->import_theme( $data );
			if ( ! empty( $import_theme_result ) ) {
				$result['theme'] = $import_theme_result;
			}
		}

		if ( $customization['experiments'] ?? false ) {
			$runner->import_experiments( $data );
			$session_meta = $runner->get_import_session_metadata();
			$imported_experiments = $session_meta['imported_experiments'] ?? [];
			if ( ! empty( $imported_experiments ) ) {
				$result['experiments'] = $imported_experiments;
			}
		}

		return $result;
	}

	private function filter_settings_by_customization( array $settings, array $customization ): array {
		$allowed_settings = $this->get_allowed_settings();

		foreach ( $customization as $key => $value ) {
			if ( ! in_array( $key, $allowed_settings, true ) ) {
				continue;
			}

			if ( ! $value ) {
				$settings = $this->remove_setting_by_key( $settings, $key );
			}
		}

		return $settings;
	}
}
