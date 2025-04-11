<?php
namespace ElementorPro\Modules\Blockquote\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Modules\DynamicTags\Module as TagsModule;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Blockquote extends Base_Widget {

	public function get_name() {
		return 'blockquote';
	}

	public function get_title() {
		return esc_html__( 'Blockquote', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-blockquote';
	}

	protected function is_dynamic_content(): bool {
		return false;
	}

	public function get_keywords() {
		return [ 'blockquote', 'quote', 'paragraph', 'testimonial', 'text', 'twitter', 'tweet' ];
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	public function get_style_depends(): array {
		$style_depends = [ 'widget-blockquote' ];

		if ( Icons_Manager::is_migration_allowed() ) {
			$style_depends[] = 'elementor-icons-fa-brands';
		}

		return $style_depends;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_blockquote_content',
			[
				'label' => esc_html__( 'Blockquote', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'blockquote_skin',
			[
				'label' => esc_html__( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'border' => esc_html__( 'Border', 'elementor-pro' ),
					'quotation' => esc_html__( 'Quotation', 'elementor-pro' ),
					'boxed' => esc_html__( 'Boxed', 'elementor-pro' ),
					'clean' => esc_html__( 'Clean', 'elementor-pro' ),
				],
				'default' => 'border',
				'prefix_class' => 'elementor-blockquote--skin-',
			]
		);

		$this->add_control(
			'alignment',
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
				'prefix_class' => 'elementor-blockquote--align-',
				'condition' => [
					'blockquote_skin!' => 'border',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'blockquote_content',
			[
				'label' => esc_html__( 'Content', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'elementor-pro' ) . esc_html__( 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Enter your quote', 'elementor-pro' ),
				'rows' => 10,
			]
		);

		$this->add_control(
			'author_name',
			[
				'label' => esc_html__( 'Author', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
				'default' => esc_html__( 'John Doe', 'elementor-pro' ),
				'separator' => 'after',
			]
		);

		$this->add_control(
			'tweet_button',
			[
				'label' => esc_html__( 'Tweet Button', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'tweet_button_view',
			[
				'label' => esc_html__( 'View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'icon-text' => esc_html__( 'Icon & Text', 'elementor-pro' ),
					'icon' => esc_html__( 'Icon', 'elementor-pro' ),
					'text' => esc_html__( 'Text', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-blockquote--button-view-',
				'default' => 'icon-text',
				'render_type' => 'template',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'tweet_button_skin',
			[
				'label' => esc_html__( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'classic' => esc_html__( 'Classic', 'elementor-pro' ),
					'bubble' => esc_html__( 'Bubble', 'elementor-pro' ),
					'link' => esc_html__( 'Link', 'elementor-pro' ),
				],
				'default' => 'classic',
				'prefix_class' => 'elementor-blockquote--button-skin-',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'tweet_button_label',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Tweet', 'elementor-pro' ),
				'condition' => [
					'tweet_button' => 'yes',
					'tweet_button_view!' => 'icon',
				],
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
			]
		);

		$this->add_control(
			'user_name',
			[
				'label' => esc_html__( 'Username', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => '@username',
				'condition' => [
					'tweet_button' => 'yes',
				],
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
			]
		);

		$this->add_control(
			'url_type',
			[
				'label' => esc_html__( 'Target URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'current_page' => esc_html__( 'Current Page', 'elementor-pro' ),
					'none' => esc_html__( 'None', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => 'current_page',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'url',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'input_type' => 'url',
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::POST_META_CATEGORY,
						TagsModule::URL_CATEGORY,
					],
				],
				'ai' => [
					'active' => false,
				],
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'url_type' => 'custom',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_style',
			[
				'label' => esc_html__( 'Content', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'content_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'content_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__content',
			]
		);

		$this->add_responsive_control(
			'content_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content +.e-q-footer' => 'margin-top: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'heading_author_style',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Author', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'author_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__author' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'author_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__author',
			]
		);

		$this->add_responsive_control(
			'author_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'size' => 20,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__author' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'alignment' => 'center',
					'tweet_button' => 'yes',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button_style',
			[
				'label' => esc_html__( 'Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'button_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'font-size: calc({{SIZE}}{{UNIT}} * 10);',
				],
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
				'range' => [
					'px' => [
						'max' => 50,
					],
					'em' => [
						'min' => 0,
						'max' => 5,
					],
					'rem' => [
						'min' => 0,
						'max' => 5,
					],
				],
			]
		);

		$this->add_control(
			'button_color_source',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'official' => esc_html__( 'Official', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => 'official',
				'prefix_class' => 'elementor-blockquote--button-color-',
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
				'condition' => [
					'button_color_source' => 'custom',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'background-color: {{VALUE}}',
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-left .elementor-blockquote__tweet-button:before' => 'border-right-color: {{VALUE}}; border-left-color: transparent',
					'body.rtl {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-right .elementor-blockquote__tweet-button:before' => 'border-left-color: {{VALUE}}; border-right-color: transparent',
				],
				'condition' => [
					'button_color_source' => 'custom',
					'tweet_button_skin!' => 'link',
				],
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'color: {{VALUE}}',
					'{{WRAPPER}} .elementor-blockquote__tweet-button svg' => 'fill: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
				'condition' => [
					'button_color_source' => 'custom',
				],
			]
		);

		$this->add_control(
			'button_background_color_hover',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button:hover' => 'background-color: {{VALUE}}',

					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote__tweet-button:hover:before, body {{WRAPPER}}.elementor-blockquote--align-left .elementor-blockquote__tweet-button:hover:before' => 'border-right-color: {{VALUE}}; border-left-color: transparent',

					'body.rtl {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-right .elementor-blockquote__tweet-button:hover:before' => 'border-left-color: {{VALUE}}; border-right-color: transparent',
				],
				'condition' => [
					'button_color_source' => 'custom',
					'tweet_button_skin!' => 'link',
				],
			]
		);

		$this->add_control(
			'button_text_color_hover',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button:hover' => 'color: {{VALUE}}',
					'{{WRAPPER}} .elementor-blockquote__tweet-button:hover svg' => 'fill: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$default_fonts = Plugin::elementor()->kits_manager->get_current_settings( 'default_generic_fonts' );

		if ( $default_fonts ) {
			$default_fonts = ', ' . $default_fonts;
		}

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__tweet-button span, {{WRAPPER}} .elementor-blockquote__tweet-button i',
				'separator' => 'before',
				'fields_options' => [
					'font_family' => [
						'selectors' => [
							'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'font-family: "{{VALUE}}"' . $default_fonts . ';',
						],
					],
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_border_style',
			[
				'label' => esc_html__( 'Border', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'border',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_border_style' );

		$this->start_controls_tab(
			'tab_border_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote' => 'border-left-width: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote' => 'border-right-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote' => 'padding-left: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote' => 'padding-right: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_border_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'border_color_hover',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_width_hover',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote:hover' => 'border-left-width: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote:hover' => 'border-right-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_gap_hover',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote:hover' => 'padding-left: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote:hover' => 'padding-right: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'border_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'border_vertical_padding',
			[
				'label' => esc_html__( 'Vertical Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'padding-top: {{SIZE}}{{UNIT}}; padding-bottom: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
				'condition' => [
					'blockquote_skin' => 'border',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_box_style',
			[
				'label' => esc_html__( 'Box', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'boxed',
				],
			]
		);

		$this->add_responsive_control(
			'box_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'padding: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_box_style' );

		$this->start_controls_tab(
			'tab_box_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'box_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'box_border',
				'selector' => '{{WRAPPER}} .elementor-blockquote',
			]
		);

		$this->add_responsive_control(
			'box_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_box_shadow',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => '{{WRAPPER}} .elementor-blockquote',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_box_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'box_background_color_hover',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'box_border_hover',
				'selector' => '{{WRAPPER}} .elementor-blockquote:hover',
			]
		);

		$this->add_responsive_control(
			'box_border_radius_hover',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_box_shadow_hover',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => '{{WRAPPER}} .elementor-blockquote:hover',
			]
		);

		$this->add_control(
			'box_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_quote_style',
			[
				'label' => esc_html__( 'Quote', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'quotation',
				],
			]
		);

		$this->add_control(
			'quote_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:before' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'quote_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.1,
					],
				],
				'default' => [
					'size' => 1,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:before' => 'font-size: calc({{SIZE}}{{UNIT}} * 100)',
				],
			]
		);

		$this->add_responsive_control(
			'quote_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content' => 'margin-top: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['blockquote_content'] ) && empty( $settings['author_name'] ) && 'yes' !== $settings['tweet_button'] ) {
			return;
		}

		$tweet_button_view = $settings['tweet_button_view'];
		$share_link = 'https://twitter.com/intent/tweet';

		$text = rawurlencode( $settings['blockquote_content'] );

		if ( ! empty( $settings['author_name'] ) ) {
			$text .= ' — ' . $settings['author_name'];
		}

		$share_link = add_query_arg( 'text', $text, $share_link );

		if ( 'current_page' === $settings['url_type'] ) {
			$share_link = add_query_arg( 'url', rawurlencode( home_url() . add_query_arg( false, false ) ), $share_link );
		} elseif ( 'custom' === $settings['url_type'] ) {
			$share_link = add_query_arg( 'url', rawurlencode( $settings['url'] ), $share_link );
		}

		if ( ! empty( $settings['user_name'] ) ) {
			$user_name = $settings['user_name'];
			if ( '@' === substr( $user_name, 0, 1 ) ) {
				$user_name = substr( $user_name, 1 );
			}
			$share_link = add_query_arg( 'via', rawurlencode( $user_name ), $share_link );
		}

		$this->add_render_attribute( [
			'blockquote_content' => [ 'class' => 'elementor-blockquote__content' ],
			'author_name' => [ 'class' => 'elementor-blockquote__author' ],
			'tweet_button_label' => [ 'class' => 'elementor-blockquote__tweet-label' ],
		] );

		$this->add_inline_editing_attributes( 'blockquote_content' );
		$this->add_inline_editing_attributes( 'author_name', 'none' );
		$this->add_inline_editing_attributes( 'tweet_button_label', 'none' );
		?>
		<blockquote class="elementor-blockquote">
			<p <?php $this->print_render_attribute_string( 'blockquote_content' ); ?>>
				<?php $this->print_unescaped_setting( 'blockquote_content' ); ?>
			</p>
			<?php if ( ! empty( $settings['author_name'] ) || 'yes' === $settings['tweet_button'] ) : ?>
				<div class="e-q-footer">
					<?php if ( ! empty( $settings['author_name'] ) ) : ?>
						<cite <?php $this->print_render_attribute_string( 'author_name' ); ?>><?php
							$this->print_unescaped_setting( 'author_name' );
						?></cite>
					<?php endif ?>
					<?php if ( 'yes' === $settings['tweet_button'] ) : ?>
						<a href="<?php echo esc_attr( $share_link ); ?>" class="elementor-blockquote__tweet-button" target="_blank">
							<?php if ( 'text' !== $tweet_button_view ) : ?>
								<?php
								$icon = [
									'value' => 'fab fa-twitter',
									'library' => 'fa-brands',
								];
								if ( ! Icons_Manager::is_migration_allowed() || ! Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] ) ) : ?>
									<i class="fa fa-twitter" aria-hidden="true"></i>
								<?php endif; ?>
								<?php if ( 'icon-text' !== $tweet_button_view ) : ?>
									<span class="elementor-screen-only"><?php echo esc_html__( 'Tweet', 'elementor-pro' ); ?></span>
								<?php endif; ?>
							<?php endif; ?>
							<?php if ( 'icon-text' === $tweet_button_view || 'text' === $tweet_button_view ) : ?>
								<span <?php $this->print_render_attribute_string( 'tweet_button_label' ); ?>><?php
									$this->print_unescaped_setting( 'tweet_button_label' );
								?></span>
							<?php endif; ?>
						</a>
					<?php endif ?>
				</div>
			<?php endif ?>
		</blockquote>
		<?php
	}

	/**
	 * Render Blockquote widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
		if ( '' === settings.blockquote_content && '' === settings.author_name && 'yes' !== settings.tweet_button) {
			return;
		}

		var tweetButtonView = settings.tweet_button_view;
		#>
			<blockquote class="elementor-blockquote">
				<p class="elementor-blockquote__content elementor-inline-editing" data-elementor-setting-key="blockquote_content">
					{{{ settings.blockquote_content }}}
				</p>
				<# if ( 'yes' === settings.tweet_button || settings.author_name ) { #>
					<div class="e-q-footer">
						<# if ( settings.author_name ) { #>
							<cite class="elementor-blockquote__author elementor-inline-editing" data-elementor-setting-key="author_name" data-elementor-inline-editing-toolbar="none">{{{ settings.author_name }}}</cite>
						<# } #>
						<# if ( 'yes' === settings.tweet_button ) { #>
							<a href="#" class="elementor-blockquote__tweet-button">
								<# if ( 'text' !== tweetButtonView ) {
									// If FontAwesome migration has been done, load the FA5 version, otherwise load FA4
									if ( ! elementor.config.icons_update_needed ) { #>
										<i class="fab fa-twitter" aria-hidden="true"></i>
									<# } else { #>
										<i class="fa fa-twitter" aria-hidden="true"></i>
									<# } #>
									<# if ( 'icon-text' !== tweetButtonView ) { #>
										<span class="elementor-screen-only"><?php echo esc_html__( 'Tweet', 'elementor-pro' ); ?></span>
									<# } #>
								<# } #>
								<# if ( 'icon-text' === tweetButtonView || 'text' === tweetButtonView ) { #>
									<span class="elementor-inline-editing elementor-blockquote__tweet-label" data-elementor-setting-key="tweet_button_label" data-elementor-inline-editing-toolbar="none">{{{ settings.tweet_button_label }}}</span>
								<# } #>
							</a>
						<# } #>
					</div>
				<# } #>
			</blockquote>
		<?php
	}
}
