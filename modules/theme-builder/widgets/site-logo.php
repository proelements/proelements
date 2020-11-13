<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Widget_Image;
use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Site_Logo extends Widget_Image {

	use Base_Widget_Trait;

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-site-logo';
	}

	public function get_title() {
		return __( 'Site Logo', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-site-logo';
	}

	public function get_categories() {
		return [ 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'site', 'logo', 'branding' ];
	}

	protected function _register_controls() {
		parent::_register_controls();

		$this->update_control(
			'image',
			[
				'dynamic' => [
					'default' => Plugin::elementor()->dynamic_tags->tag_data_to_tag_text( null, 'site-logo' ),
				],
			],
			[
				'recursive' => true,
			]
		);

		$this->update_control(
			'image_size',
			[
				'default' => 'full',
			]
		);

		$this->update_control(
			'link_to',
			[
				'default' => 'custom',
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

		$this->update_control(
			'caption_source',
			[
				'options' => $this->get_caption_source_options(),
			]
		);

		$this->remove_control( 'caption' );
	}

	protected function get_html_wrapper_class() {
		return parent::get_html_wrapper_class() . ' elementor-widget-' . parent::get_name();
	}

	private function get_caption_source_options() {
		$caption_source_options = $this->get_controls( 'caption_source' )['options'];

		unset( $caption_source_options['custom'] );

		return $caption_source_options;
	}
}
