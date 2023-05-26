<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Header extends Header_Footer_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'header';
		$properties['support_lazyload'] = false;

		return $properties;
	}

	public static function get_type() {
		return 'header';
	}

	public static function get_title() {
		return esc_html__( 'Header', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Headers', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-header';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => esc_html__( 'What is a Header Template?', 'elementor-pro' ),
			'content' => esc_html__( 'The header template allows you to easily design and edit custom WordPress headers so you are no longer constrained by your theme’s header design limitations.', 'elementor-pro' ),
			'tip' => esc_html__( 'You can create multiple headers, and assign each to different areas of your site.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-header',
			'video_url' => 'https://www.youtube.com/embed/HHy5RK6W-6I',
		];
	}
}
