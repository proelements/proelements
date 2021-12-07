<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Footer extends Header_Footer_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'footer';

		return $properties;
	}

	public static function get_type() {
		return 'footer';
	}

	public static function get_title() {
		return esc_html__( 'Footer', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Footers', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-footer';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => esc_html__( 'What is a Footer Template?', 'elementor-pro' ),
			'content' => esc_html__( 'The footer template allows you to easily design and edit custom WordPress footers without the limits of your theme’s footer design constraints', 'elementor-pro' ),
			'tip' => esc_html__( 'You can create multiple footers, and assign each to different areas of your site.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-footer',
			'video_url' => 'https://www.youtube.com/embed/xa8DoR4tQrY',
		];
	}
}
