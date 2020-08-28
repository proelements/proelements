<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Search_Results extends Archive {

	public function get_name() {
		return 'search-results';
	}

	public static function get_sub_type() {
		return 'search';
	}

	public static function get_title() {
		return __( 'Search Results', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-search-results';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Search Results Template?', 'elementor-pro' ),
			'content' => __( 'You can easily control the layout and design of the Search Results page with the Search Results template, which is simply a special archive template just for displaying search results.', 'elementor-pro' ),
			'tip' => __( 'You can customize the message if there are no results for the search term.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-search-results',
			'video_url' => 'https://www.youtube.com/embed/KKkIU_L5sDo',
		];
	}

	public static function get_preview_as_default() {
		return 'search';
	}

	public static function get_preview_as_options() {
		$options = [
			'search' => __( 'Search Results', 'elementor-pro' ),
		];

		return [
			'archive' => [
				'label' => __( 'Archive', 'elementor-pro' ),
				'options' => $options,
			],
		];
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = 'archive';

		return $config;
	}
}
