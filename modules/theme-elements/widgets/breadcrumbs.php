<?php
namespace ElementorPro\Modules\ThemeElements\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Breadcrumbs extends Base {

	public function get_name() {
		return 'breadcrumbs';
	}

	public function get_title() {
		return __( 'Breadcrumbs', 'elementor-pro' );
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

	private function is_breadcrumbs_enabled() {
		$breadcrumbs_enabled = current_theme_supports( 'yoast-seo-breadcrumbs' );
		if ( ! $breadcrumbs_enabled ) {
			// The check for option 'wpseo_internallinks' is a BC fix for old versions of Yoast (<7.0.0).
			// In this version Yoast changed the DB key for the breadcrumbs options to 'wpseo_titles'.
			$options = get_option( 'wpseo_internallinks' );
			if ( empty( $options ) ) {
				$options = get_option( 'wpseo_titles' );
			}
			$breadcrumbs_enabled = true === $options['breadcrumbs-enable'];
		}

		return $breadcrumbs_enabled;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_breadcrumbs_content',
			[
				'label' => __( 'Breadcrumbs', 'elementor-pro' ),
			]
		);

		if ( ! $this->is_breadcrumbs_enabled() ) {
			$this->add_control(
				'html_disabled_alert',
				[
					'raw' => __( 'Breadcrumbs are disabled in the Yoast SEO', 'elementor-pro' ) . ' ' . sprintf( '<a href="%s" target="_blank">%s</a>', admin_url( 'admin.php?page=wpseo_titles#top#breadcrumbs' ), __( 'Breadcrumbs Panel', 'elementor-pro' ) ),
					'type' => Controls_Manager::RAW_HTML,
					'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				]
			);
		}

		$this->add_responsive_control(
			'align',
			[
				'label' => __( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'prefix_class' => 'elementor%s-align-',
			]
		);

		$this->add_control(
			'html_tag',
			[
				'label' => __( 'HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Default', 'elementor-pro' ),
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
				'raw' => __( 'Additional settings are available in the Yoast SEO', 'elementor-pro' ) . ' ' . sprintf( '<a href="%s" target="_blank">%s</a>', admin_url( 'admin.php?page=wpseo_titles#top#breadcrumbs' ), __( 'Breadcrumbs Panel', 'elementor-pro' ) ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => __( 'Breadcrumbs', 'elementor-pro' ),
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
				'label' => __( 'Text Color', 'elementor-pro' ),
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
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'link_color',
			[
				'label' => __( 'Link Color', 'elementor-pro' ),
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
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'link_hover_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
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
		$html_tag = $this->get_html_tag();
		yoast_breadcrumb( '<' . $html_tag . ' id="breadcrumbs">', '</' . $html_tag . '>' );
	}
}
