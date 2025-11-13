<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Controls_Manager;
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
		return esc_html__( 'Site Title', 'elementor-pro' );
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

	protected function register_controls() {
		parent::register_controls();
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

		$this->add_control(
			'site_identity_notice',
			[
				'type' => Controls_Manager::ALERT,
				'alert_type' => 'info',
				'content' => sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'To edit the title of your site, go to %1$sSite Identity%2$s.', 'elementor-pro' ),
					'<a href="#" onclick="elementorPro.modules.themeBuilder.openSiteIdentity( event )" >',
					'</a>'
				),
			],
			[
				'position' => [
					'of' => 'title',
					'type' => 'control',
					'at' => 'before',
				],
			]
		);
	}

	protected function get_html_wrapper_class() {
		return parent::get_html_wrapper_class() . ' elementor-widget-' . parent::get_name();
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}
}
