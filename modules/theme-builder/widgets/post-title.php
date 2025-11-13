<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Title extends Title_Widget_Base {

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-post-title';
	}

	public function get_title() {
		return esc_html__( 'Post Title', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-post-title';
	}

	public function get_categories() {
		return [ 'theme-elements-single' ];
	}

	public function get_keywords() {
		return [ 'title', 'heading', 'post' ];
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	protected function get_dynamic_tag_name() {
		return 'post-title';
	}

	public function get_common_args() {
		return [
			'_css_classes' => [
				'default' => 'entry-title',
			],
		];
	}
}
