<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Widget_Image;
use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Featured_Image extends Widget_Image {

	use Base_Widget_Trait;

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-post-featured-image';
	}

	public function get_title() {
		return esc_html__( 'Featured Image', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-featured-image';
	}

	public function get_categories() {
		return [ 'theme-elements-single' ];
	}

	public function get_keywords() {
		return [ 'image', 'featured', 'thumbnail' ];
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->update_control(
			'image',
			[
				'dynamic' => [
					'default' => Plugin::elementor()->dynamic_tags->tag_data_to_tag_text( null, 'post-featured-image' ),
				],
			],
			[
				'recursive' => true,
			]
		);
	}

	protected function get_html_wrapper_class() {
		return parent::get_html_wrapper_class() . ' elementor-widget-' . parent::get_name();
	}
}
