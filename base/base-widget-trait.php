<?php
namespace ElementorPro\Base;

use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Base_Widget_Trait {
	public function is_editable() {
		return License_API::is_license_active();
	}

	public function get_categories() {
		return [ 'pro-elements' ];
	}

	public function get_widget_css_config( $widget_name ) {
		$direction = is_rtl() ? '-rtl' : '';

		$has_custom_breakpoints = $this->is_custom_breakpoints_widget();

		$file_name = 'widget-' . $widget_name . $direction . '.min.css';

		// The URL of the widget's external CSS file that is loaded in case that the CSS content is too large to be printed inline.
		$file_url = Plugin::instance()->get_frontend_file_url( $file_name, $has_custom_breakpoints );

		// The local path of the widget's CSS file that is being read and saved in the DB when the CSS content should be printed inline.
		$file_path = Plugin::instance()->get_frontend_file_path( $file_name, $has_custom_breakpoints );

		return [
			'key' => $widget_name,
			'version' => ELEMENTOR_PRO_VERSION,
			'file_path' => $file_path,
			'data' => [
				'file_url' => $file_url,
			],
		];
	}

	public function get_responsive_widgets_config() {
		$responsive_widgets_data_manager = $this->get_responsive_widgets_data_manager();

		return [
			'key' => 'pro-' . $responsive_widgets_data_manager::RESPONSIVE_WIDGETS_DATABASE_KEY,
			'version' => ELEMENTOR_PRO_VERSION,
			'file_path' => ELEMENTOR_PRO_ASSETS_PATH . $responsive_widgets_data_manager::RESPONSIVE_WIDGETS_FILE_PATH,
		];
	}
}
