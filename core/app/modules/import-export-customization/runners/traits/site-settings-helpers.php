<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Site_Settings_Helpers {
	/**
	 * Get the allowed settings for site-settings runners.
	 *
	 * @return array
	 */
	protected function get_allowed_settings(): array {
		return [
			'theme',
			'globalColors',
			'globalFonts',
			'themeStyleSettings',
			'generalSettings',
			'experiments',
			'customCode',
			'customIcons',
			'customFonts',
		];
	}

	/**
	 * Remove setting by key using the appropriate removal method.
	 *
	 * @param array $settings
	 * @param string $setting_key
	 * @return array
	 */
	protected function remove_setting_by_key( array $settings, string $setting_key ): array {
		switch ( $setting_key ) {
			case 'globalColors':
				$settings = $this->remove_global_colors( $settings );
				break;
			case 'globalFonts':
				$settings = $this->remove_global_fonts( $settings );
				break;
			case 'themeStyleSettings':
				$settings = $this->remove_theme_style( $settings );
				break;
			case 'generalSettings':
				$settings = $this->remove_other_settings( $settings );
				break;
		}

		return $settings;
	}

	/**
	 * Remove global colors from settings.
	 *
	 * @param array $settings
	 * @return array
	 */
	private function remove_global_colors( array $settings ): array {
		$color_keys = [ 'system_colors', 'custom_colors' ];
		foreach ( $color_keys as $key ) {
			if ( isset( $settings[ $key ] ) ) {
				unset( $settings[ $key ] );
			}
		}
		return $settings;
	}

	/**
	 * Remove global fonts from settings.
	 *
	 * @param array $settings
	 * @return array
	 */
	private function remove_global_fonts( array $settings ): array {
		$typography_keys = [ 'system_typography', 'custom_typography', 'default_generic_fonts' ];
		foreach ( $typography_keys as $key ) {
			if ( isset( $settings[ $key ] ) ) {
				unset( $settings[ $key ] );
			}
		}
		return $settings;
	}

	/**
	 * Remove theme style settings.
	 *
	 * @param array $settings
	 * @return array
	 */
	private function remove_theme_style( array $settings ): array {
		$theme_style_patterns = [
			'/^body_/',
			'/^h[1-6]_/',
			'/^button_/',
			'/^link_/',
			'/^form_field_/',
		];
		foreach ( $settings as $key => $value ) {
			foreach ( $theme_style_patterns as $pattern ) {
				if ( preg_match( $pattern, $key ) ) {
					unset( $settings[ $key ] );
					break;
				}
			}
		}
		return $settings;
	}

	/**
	 * Remove other general settings.
	 *
	 * @param array $settings
	 * @return array
	 */
	private function remove_other_settings( array $settings ): array {
		$settings_keys = [
			'template',
			'container_width',
			'container_padding',
			'space_between_widgets',
			'viewport_md',
			'viewport_lg',
			'page_title_selector',
			'activeItemIndex',
			'^settings-style-',
		];
		foreach ( $settings_keys as $key ) {
			if ( isset( $settings[ $key ] ) ) {
				unset( $settings[ $key ] );
			}
		}
		return $settings;
	}
}
