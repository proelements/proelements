<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Single_Post extends Single_Base {

	protected static function get_site_editor_type() {
		return 'single-post';
	}

	public static function get_title() {
		return __( 'Single Post', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-single-post';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Single Post Template?', 'elementor-pro' ),
			'content' => __( 'A single post template allows you to easily design the layout and style of posts, ensuring a design consistency throughout all your blog posts, for example.', 'elementor-pro' ),
			'tip' => __( 'You can create multiple single post templates, and assign each to a different category.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-post',
			'video_url' => 'https://www.youtube.com/embed/8Fk-Edu7DL0',
		];
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = 'single post';

		return $config;
	}
}
