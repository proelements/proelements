<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use ElementorPro\Modules\FloatingButtons\Base\Widget_Floating_Bars_Base_Pro;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Floating_Bars_Var_3_Render;

use Elementor\Controls_Manager;

use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Floating_Bars_Var_3 extends Widget_Floating_Bars_Base_Pro {
	public static function get_configuration() {
		$config = parent::get_configuration();

		$config['content']['announcement_section']['icon_default'] = [
			'value' => 'fas fa-star',
			'library' => 'fa-solid',
		];
		$config['content']['announcement_section']['text_label'] = esc_html__( 'Offer Text', 'elementor-pro' );
		$config['content']['announcement_section']['text_default'] = esc_html__( '10% off on your first order!', 'elementor-pro' );
		$config['content']['floating_bar_section']['accessible_name_default'] = esc_html__( 'Coupon Banner', 'elementor-pro' );
		$config['style']['floating_bar_section']['align_elements_selector'] = [
			'{{WRAPPER}} .e-floating-bars' => 'justify-content: {{VALUE}};',
			'{{WRAPPER}} .e-floating-bars__coupon-button' => 'justify-self: {{VALUE}};',
			'{{WRAPPER}} .e-floating-bars__announcement-text' => 'text-align: {{VALUE}};',
		];

		return $config;
	}

	public function get_name(): string {
		return 'floating-bars-var-3';
	}

	public function get_title(): string {
		return esc_html__( 'Coupon', 'elementor-pro' );
	}

	public function add_coupon_content_section(): void {
		$this->start_controls_section(
			'coupon_content_section',
			[
				'label' => __( 'Coupon', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'coupon_code',
			[
				'label' => esc_html__( 'Code', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
				'label_block' => false,
				'placeholder' => esc_html__( 'Enter coupon code', 'elementor-pro' ),
				'default' => esc_html__( 'NEW10', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'coupon_copy_icon',
			[
				'label' => esc_html__( 'Copy Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'default' => [
					'value' => 'fas fa-copy',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-regular' => [
						'clipboard',
						'copy',
					],
					'fa-solid' => [
						'clipboard',
						'copy',
					],
				],
				'label_block' => false,
				'icon_exclude_inline_options' => [],
			]
		);

		$this->add_control(
			'coupon_success_message',
			[
				'label' => esc_html__( 'Success Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
				'label_block' => false,
				'placeholder' => esc_html__( 'Enter text', 'elementor-pro' ),
				'default' => esc_html__( 'Copied', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'coupon_success_icon',
			[
				'label' => esc_html__( 'Success Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'default' => [
					'value' => 'fas fa-check',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-regular' => [
						'check-circle',
						'check-square',
					],
					'fa-solid' => [
						'check',
						'check-circle',
						'check-square',
					],
				],
				'label_block' => false,
				'icon_exclude_inline_options' => [],
			]
		);

		$this->end_controls_section();
	}

	public function add_coupon_style_section(): void {
		$this->start_controls_section(
			'style_coupon',
			[
				'label' => esc_html__( 'Coupon', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'style_coupon_type',
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'cutout',
				'options' => [
					'text' => esc_html__( 'Text', 'elementor-pro' ),
					'cutout' => esc_html__( 'Cutout', 'elementor-pro' ),
					'price-tag' => esc_html__( 'Price Tag', 'elementor-pro' ),
					'gift-tag' => esc_html__( 'Gift Tag', 'elementor-pro' ),
					'round-ticket' => esc_html__( 'Round Ticket', 'elementor-pro' ),
					'square-ticket' => esc_html__( 'Square Ticket', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'style_coupon_icon_position',
			[
				'label' => esc_html__( 'Icon Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => is_rtl() ? 'row-reverse' : 'row',
				'toggle' => false,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'row-reverse' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'selectors_dictionary' => [
					'row' => is_rtl() ? 'row-reverse' : 'row',
					'row-reverse' => is_rtl() ? 'row' : 'row-reverse',
				],
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars__coupon-text-group' => 'flex-direction: {{VALUE}};',
				],
				'condition' => [
					'coupon_copy_icon[value]!' => '',
				],
			]
		);

		$this->add_control(
			'style_coupon_icon_spacing',
			[
				'label' => esc_html__( 'Icon Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 50,
					],
					'em' => [
						'max' => 5,
					],
					'rem' => [
						'max' => 5,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-icon-gap: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'coupon_copy_icon[value]!' => '',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'style_coupon_typography',
				'selector' => '{{WRAPPER}} .e-floating-bars__coupon-button',
			]
		);

		$this->add_control(
			'style_coupon_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-button-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'style_coupon_bg_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-bg-color: {{VALUE}}',
				],
				'condition' => [
					'style_coupon_type!' => 'text',
				],
			]
		);

		$this->add_control(
			'style_coupon_show_border',
			[
				'label' => esc_html__( 'Border', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'condition' => [
					'style_coupon_type!' => 'text',
				],
			]
		);

		$this->add_responsive_control(
			'style_coupon_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'%' => [
						'min' => 10,
						'max' => 100,
					],
					'px' => [
						'min' => 0,
						'max' => 10,
					],
				],
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-border-width: {{SIZE}}{{UNIT}}',
				],
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'style_coupon_show_border',
							'operator' => '===',
							'value' => 'yes',
						],
						[
							'name' => 'style_coupon_type',
							'operator' => '!==',
							'value' => 'text',
						],
					],
				],
			]
		);

		$this->add_control(
			'style_coupon_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-border-color: {{VALUE}}',
				],
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'style_coupon_show_border',
							'operator' => '===',
							'value' => 'yes',
						],
						[
							'name' => 'style_coupon_type',
							'operator' => '!==',
							'value' => 'text',
						],
					],
				],
			]
		);

		$this->add_control(
			'style_coupon_success_message_duration',
			[
				'label' => esc_html__( 'Success Message Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms' ],
				'default' => [
					'unit' => 's',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'style_coupon_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-padding-block-end: {{BOTTOM}}{{UNIT}} !important; --e-floating-bars-coupon-padding-block-start: {{TOP}}{{UNIT}} !important; --e-floating-bars-coupon-padding-inline-end: {{RIGHT}}{{UNIT}} !important; --e-floating-bars-coupon-padding-inline-start: {{LEFT}}{{UNIT}} !important;',
				],
				'condition' => [
					'style_coupon_type!' => [
						'text',
						'price-tag',
						'gift-tag',
						'round-ticket',
						'square-ticket',
					],
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'style_coupon_animation',
			[
				'label' => esc_html__( 'Entrance Animation', 'elementor-pro' ),
				'type' => Controls_Manager::ANIMATION,
				'frontend_available' => true,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'style_coupon_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '1000',
				'options' => [
					'2000' => esc_html__( 'Slow', 'elementor-pro' ),
					'1000' => esc_html__( 'Normal', 'elementor-pro' ),
					'800' => esc_html__( 'Fast', 'elementor-pro' ),
				],
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-animation-duration: {{VALUE}}ms',
				],
				'prefix_class' => 'animated-',
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'style_coupon_animation',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'style_coupon_animation',
							'operator' => '!==',
							'value' => 'none',
						],
					],
				],
			]
		);

		$this->add_control(
			'style_coupon_animation_delay',
			[
				'label' => esc_html__( 'Animation Delay', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'min' => 0,
				'step' => 100,
				'selectors' => [
					'{{WRAPPER}} .e-floating-bars' => '--e-floating-bars-coupon-animation-delay: {{SIZE}}ms;',
				],
				'render_type' => 'none',
				'frontend_available' => true,
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'style_coupon_animation',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'style_coupon_animation',
							'operator' => '!==',
							'value' => 'none',
						],
					],
				],
			]
		);

		$this->end_controls_section();
	}

	protected function add_content_tab(): void {
		$this->add_announcement_content_section();

		$this->add_coupon_content_section();

		$this->add_floating_bar_content_section();
	}

	protected function add_style_tab(): void {
		$this->add_announcement_style_section();

		$this->add_coupon_style_section();

		$this->add_floating_bar_style_section();
	}

	public function render(): void {
		$this->add_inline_editing_attributes( 'announcement_text', 'none' );

		$render_strategy = new Floating_Bars_Var_3_Render( $this );

		$render_strategy->render();
	}
}
