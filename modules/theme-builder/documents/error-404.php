<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Error_404 extends Single_Base {

	protected static function get_site_editor_type() {
		return 'error-404';
	}

	public static function get_sub_type() {
		return 'not_found404';
	}

	public static function get_title() {
		return __( 'Error 404', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return __( 'Error 404', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-error-404';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a 404 Page Template?', 'elementor-pro' ),
			'content' => __( 'A 404 page template allows you to easily design the layout and style of the page that is displayed when a visitor arrives at a page that does not exist.', 'elementor-pro' ),
			'tip' => __( 'Keep your site\'s visitors happy when they get lost by displaying your recent posts, a search bar, or any information that might help the user find what they were looking for.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-error-404',
			'video_url' => 'https://www.youtube.com/embed/ACCNp9tBMQg',
		];
	}

	public static function get_preview_as_options() {
		return [
			'page/404' => __( '404', 'elementor-pro' ),
		];
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = '404 page';

		return $config;
	}
}
