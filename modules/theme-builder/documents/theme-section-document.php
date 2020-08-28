<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Theme_Section_Document extends Theme_Document {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['condition_type'] = 'general';

		return $properties;
	}

	protected static function get_site_editor_layout() {
		return 'strip';
	}

	public static function get_preview_as_default() {
		return '';
	}

	public static function get_preview_as_options() {
		return array_merge(
			[
				'' => __( 'Select...', 'elementor-pro' ),
			],
			Archive::get_preview_as_options(),
			Single::get_preview_as_options()
		);
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = '';

		return $config;
	}
}
