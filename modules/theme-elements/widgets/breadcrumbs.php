<?php
namespace ElementorPro\Modules\ThemeElements\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Utils;
use WPSEO_Breadcrumbs;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Breadcrumbs extends Base {

	public function get_name() {
		return 'breadcrumbs';
	}

	public function get_title() {
		return esc_html__( 'Breadcrumbs', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-yoast';
	}

	public function get_script_depends() {
		return [ 'breadcrumbs' ];
	}

	public function get_keywords() {
		return [ 'yoast', 'seo', 'breadcrumbs', 'internal links' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_breadcrumbs_content',
			[
				'label' => esc_html__( 'Breadcrumbs', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'prefix_class' => 'elementor%s-align-',
			]
		);

		$this->add_control(
			'html_tag',
			[
				'label' => esc_html__( 'HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'Default', 'elementor-pro' ),
					'p' => 'p',
					'div' => 'div',
					'nav' => 'nav',
					'span' => 'span',
				],
				'default' => '',
			]
		);

		$this->add_control(
			'html_description',
			[
				'raw' => esc_html__( 'Additional settings are available in the Yoast SEO', 'elementor-pro' ) . ' ' . sprintf( '<a href="%s" target="_blank">%s</a>', admin_url( 'admin.php?page=wpseo_titles#top#breadcrumbs' ), esc_html__( 'Breadcrumbs Panel', 'elementor-pro' ) ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Breadcrumbs', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'typography',
				'selector' => '{{WRAPPER}}',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => 'color: {{VALUE}};',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_breadcrumbs_style' );

		$this->start_controls_tab(
			'tab_color_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'link_color',
			[
				'label' => esc_html__( 'Link Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_color_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'link_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} a:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();
	}

	private function get_html_tag() {
		$html_tag = $this->get_settings( 'html_tag' );

		if ( empty( $html_tag ) ) {
			$html_tag = 'p';
		}

		return Utils::validate_html_tag( $html_tag );
	}

	protected function render() {
		if ( class_exists( '\WPSEO_Breadcrumbs' ) ) {
			$html_tag = $this->get_html_tag();
			WPSEO_Breadcrumbs::breadcrumb( '<' . $html_tag . ' id="breadcrumbs">', '</' . $html_tag . '>' );
		}

	}

	public function get_group_name() {
		return 'theme-elements';
	}
}
