<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Page_Title extends Title_Widget_Base {

	protected function get_dynamic_tag_name() {
		return 'page-title';
	}

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-page-title';
	}

	public function get_title() {
		return __( 'Page Title', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-archive-title';
	}

	public function get_categories() {
		return [ 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'title', 'heading', 'page' ];
	}
}
