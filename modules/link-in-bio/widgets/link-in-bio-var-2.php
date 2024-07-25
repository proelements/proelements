<?php

namespace ElementorPro\Modules\LinkInBio\Widgets;

use Elementor\Controls_Manager;
use Elementor\Modules\LinkInBio\Base\Widget_Link_In_Bio_Base;
use ElementorPro\Modules\LinkInBio\Classes\Render\Icons_Below_Cta_Render;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Link_In_Bio_Var_2 extends Widget_Link_In_Bio_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['bio_section']['description']['default'] = '';
		$config['content']['identity_section']['has_heading_text'] = esc_html__( 'Profile', 'elementor-pro' );
		$config['content']['identity_section']['has_profile_image_controls'] = true;
		$config['content']['identity_section']['identity_image_style'] = false;
		$config['content']['cta_section']['cta_repeater_defaults'] = [
			[
				'cta_link_text' => esc_html__( 'Get Healthy', 'elementor-pro' ),
			],
			[
				'cta_link_text' => esc_html__( 'Top 10 Recipes', 'elementor-pro' ),
			],
			[
				'cta_link_text' => esc_html__( 'Meal Prep', 'elementor-pro' ),
			],
		];
		$config['style']['cta_section']['has_corners']['default'] = 'sharp';
		$config['style']['identity_section']['has_profile_image_shape'] = false;
		$config['style']['identity_section']['profile_image_max'] = 200;

		return $config;
	}

	public function get_name(): string {
		return 'link-in-bio-var-2';
	}

	public function get_title(): string {
		return esc_html__( 'Classic', 'elementor-pro' );
	}

	public function render(): void {
		$render = new Icons_Below_Cta_Render( $this );
		$render->render();
	}

	protected function add_content_tab(): void {
		$this->add_identity_section();

		$this->add_bio_section();

		$this->add_cta_controls();

		$this->add_icons_controls();
	}

	protected function add_style_tab(): void {
		$this->add_style_identity_controls();

		$this->add_style_bio_controls();

		$this->add_style_cta_section();

		$this->add_style_icons_controls();

		$this->add_style_background_controls();
	}

	protected function add_style_identity_controls(): void {
		$this->start_controls_section(
			'identity_section_style',
			[
				'label' => esc_html__( 'Identity', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'identity_section_style_cover_heading',
			[
				'label' => esc_html__( 'Cover', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'none',
			]
		);

		$this->add_identity_image_cover_control( [] );

		$this->add_control(
			'identity_section_style_profile_heading',
			[
				'label' => esc_html__( 'Profile', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_identity_image_profile_controls( [] );

		$this->end_controls_section();
	}
}
