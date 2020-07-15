<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Widget_Heading;
use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Site_Title extends Widget_Heading {

	use Base_Widget_Trait;

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-site-title';
	}

	public function get_title() {
		return __( 'Site Title', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-site-title';
	}

	public function get_categories() {
		return [ 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'site', 'title', 'name' ];
	}

	protected function _register_controls() {
		parent::_register_controls();

		$this->update_control(
			'title',
			[
				'dynamic' => [
					'default' => Plugin::elementor()->dynamic_tags->tag_data_to_tag_text( null, 'site-title' ),
				],
			],
			[
				'recursive' => true,
			]
		);

		$this->update_control(
			'link',
			[
				'dynamic' => [
					'default' => Plugin::elementor()->dynamic_tags->tag_data_to_tag_text( null, 'site-url' ),
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
