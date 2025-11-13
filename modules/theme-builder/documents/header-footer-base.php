<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use Elementor\Controls_Manager;
use Elementor\Core\DocumentTypes\Post;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Header_Footer_Base extends Theme_Section_Document {

	public function get_css_wrapper_selector() {
		return '.elementor-' . $this->get_main_id();
	}

	protected static function get_editor_panel_categories() {
		// Move to top as active.
		$categories = [
			'theme-elements' => [
				'title' => esc_html__( 'Site', 'elementor-pro' ),
				'active' => true,
			],
		];

		return $categories + parent::get_editor_panel_categories();
	}

	protected function register_controls() {
		parent::register_controls();

		Post::register_style_controls( $this );

		$this->update_control(
			'section_page_style',
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
			]
		);

		$this->start_injection( [
			'of' => 'margin',
		] );

		$this->add_control(
			'hidden_header_footer_style_control',
			[
				'type' => Controls_Manager::HIDDEN,
				'default' => 'hidden_control',
				'selectors' => [
					'.elementor-theme-builder-content-area' => 'height: 400px;',
					'.elementor-location-header:before, .elementor-location-footer:before' => 'content: ""; display: table; clear: both;',
				],
			]
		);

		$this->end_injection();
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['category'] = $this->get_name();

		return $config;
	}
}
