<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Single_Page extends Single_Base {
	protected static function get_site_editor_type() {
		return 'single-page';
	}

	public static function get_sub_type() {
		return 'page';
	}

	public static function get_title() {
		return __( 'Single Page', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-single-page';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Single Page Template?', 'elementor-pro' ),
			'content' => __( 'A single page template allows you to easily create the layout and style of pages, ensuring design consistency across all the pages of your site.', 'elementor-pro' ),
			'tip' => __( 'You can create multiple global page templates, and assign each to different areas of your site.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-page',
			'video_url' => 'https://www.youtube.com/embed/_y5eZ60lVoY',
		];
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = 'single page';

		return $config;
	}
}
