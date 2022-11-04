<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Controls_Manager;
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
		return esc_html__( 'Site Logo', 'elementor-pro' );
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

	public function get_inline_css_depends() {
		return [
			[
				'name' => 'image',
				'is_core_dependency' => true,
			],
		];
	}

	protected function register_controls() {
		parent::register_controls();

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

		$this->add_control(
			'site_identity_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'To edit the logo of your site, go to %1$sSite Identity%2$s.', 'elementor-pro' ),
					'<a href="#" onclick="elementorPro.modules.themeBuilder.openSiteIdentity( event )" >',
					'</a>'
				),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			],
			[
				'position' => [
					'of' => 'image',
					'type' => 'control',
					'at' => 'before',
				],
			]
		);
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
