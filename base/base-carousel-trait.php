<?php
namespace ElementorPro\Base;

use ElementorPro\Plugin;
use Elementor\Controls_Manager;
use Elementor\Icons_Manager;
use Elementor\Group_Control_Typography;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Base_Carousel_Trait {
	public function add_carousel_layout_controls( $params ) {
		$slides_on_display = range( 1, $params['slides_on_display'] );
		$slides_on_display = array_combine( $slides_on_display, $slides_on_display );

		$slides_to_show_shared_settings = [
			'label' => esc_html__( 'Slides on display', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'' => esc_html__( 'Default', 'elementor-pro' ),
			] + $slides_on_display,
			'inherit_placeholders' => false,
			'frontend_available' => true,
			'render_type' => 'template',
			'content_classes' => 'elementor-control-field-select-small',
		];

		$this->add_responsive_control(
			'slides_to_show',
			$params['slides_to_show_custom_settings'] + $slides_to_show_shared_settings
		);

		$slides_to_scroll_shared_settings = [
			'label' => esc_html__( 'Slides on scroll', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'' => esc_html__( 'Default', 'elementor-pro' ),
			] + $slides_on_display,
			'inherit_placeholders' => false,
			'frontend_available' => true,
			'content_classes' => 'elementor-control-field-select-small',
		];

		$this->add_responsive_control(
			'slides_to_scroll',
			$params['slides_to_scroll_custom_settings'] + $slides_to_scroll_shared_settings
		);

		$equal_height_shared_settings = [
			'label' => esc_html__( 'Equal Height', 'elementor-pro' ),
			'type' => Controls_Manager::SWITCHER,
			'label_off' => esc_html__( 'Off', 'elementor-pro' ),
			'label_on' => esc_html__( 'On', 'elementor-pro' ),
			'default' => 'yes',
		];

		$this->add_control(
			'equal_height',
			$params['equal_height_custom_settings'] + $equal_height_shared_settings
		);
	}

	public function add_carousel_settings_controls( $params = [] ) {
		$this->start_controls_section(
			'section_carousel_settings',
			[
				'label' => esc_html__( 'Settings', 'elementor-pro' ),
			]
		);

		$autoplay_shared_settings = [
			'label' => esc_html__( 'Autoplay', 'elementor-pro' ),
			'type' => Controls_Manager::SWITCHER,
			'default' => 'yes',
			'options' => [
				'yes' => esc_html__( 'On', 'elementor-pro' ),
				'no' => esc_html__( 'Off', 'elementor-pro' ),
			],
			'frontend_available' => true,
		];

		$this->add_control(
			'autoplay',
			array_key_exists( 'autoplay_custom_settings', $params )
				? $params['autoplay_custom_settings'] + $autoplay_shared_settings
				: $autoplay_shared_settings
		);

		$this->add_control(
			'autoplay_speed',
			[
				'label' => esc_html__( 'Scroll Speed', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'default' => 5000,
				'condition' => [
					'autoplay' => 'yes',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'pause_on_hover',
			[
				'label' => esc_html__( 'Pause on hover', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'options' => [
					'yes' => esc_html__( 'On', 'elementor-pro' ),
					'no' => esc_html__( 'Off', 'elementor-pro' ),
				],
				'condition' => [
					'autoplay' => 'yes',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'pause_on_interaction',
			[
				'label' => esc_html__( 'Pause on interaction', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'options' => [
					'yes' => esc_html__( 'On', 'elementor-pro' ),
					'no' => esc_html__( 'Off', 'elementor-pro' ),
				],
				'condition' => [
					'autoplay' => 'yes',
				],
				'frontend_available' => true,
			]
		);

		$infinite_shared_settings = [
			'label' => esc_html__( 'Infinite scroll', 'elementor-pro' ),
			'type' => Controls_Manager::SWITCHER,
			'default' => 'yes',
			'options' => [
				'yes' => esc_html__( 'On', 'elementor-pro' ),
				'no' => esc_html__( 'Off', 'elementor-pro' ),
			],
			'frontend_available' => true,
		];

		$this->add_control(
			'infinite',
			array_key_exists( 'infinite_custom_settings', $params )
				? $params['infinite_custom_settings'] + $infinite_shared_settings
				: $infinite_shared_settings
		);

		$this->add_control(
			'speed',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'default' => 500,
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'direction',
			[
				'label' => esc_html__( 'Direction', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => is_rtl() ? 'rtl' : 'ltr',
				'options' => [
					'ltr' => esc_html__( 'Left', 'elementor-pro' ),
					'rtl' => esc_html__( 'Right', 'elementor-pro' ),
				],
			]
		);

		$this->end_controls_section();
	}

	public function add_carousel_navigation_controls( $params = [] ) {
		$navigation_shared_settings = [
			'label' => esc_html__( 'Navigation', 'elementor-pro' ),
		];

		$this->start_controls_section(
			'section_navigation_settings',
			array_key_exists( 'navigation_custom_settings', $params )
				? $params['navigation_custom_settings'] + $navigation_shared_settings
				: $navigation_shared_settings
		);

		$this->add_control(
			'arrows',
			[
				'label' => esc_html__( 'Arrows', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'default' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'navigation_previous_icon',
			[
				'label' => esc_html__( 'Previous Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'skin_settings' => [
					'inline' => [
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended' => [
					'fa-regular' => [
						'arrow-alt-circle-left',
						'caret-square-left',
					],
					'fa-solid' => [
						'angle-double-left',
						'angle-left',
						'arrow-alt-circle-left',
						'arrow-circle-left',
						'arrow-left',
						'caret-left',
						'caret-square-left',
						'chevron-circle-left',
						'chevron-left',
						'long-arrow-alt-left',
					],
				],
				'condition' => [
					'arrows' => 'yes',
				],
				'default' => [
					'value' => 'eicon-chevron-left',
					'library' => 'eicons',
				],
			]
		);

		$this->add_control(
			'navigation_next_icon',
			[
				'label' => esc_html__( 'Next Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'skin_settings' => [
					'inline' => [
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended' => [
					'fa-regular' => [
						'arrow-alt-circle-right',
						'caret-square-right',
					],
					'fa-solid' => [
						'angle-double-right',
						'angle-right',
						'arrow-alt-circle-right',
						'arrow-circle-right',
						'arrow-right',
						'caret-right',
						'caret-square-right',
						'chevron-circle-right',
						'chevron-right',
						'long-arrow-alt-right',
					],
				],
				'condition' => [
					'arrows' => 'yes',
				],
				'default' => [
					'value' => 'eicon-chevron-right',
					'library' => 'eicons',
				],
			]
		);

		$this->end_controls_section();
	}

	public function add_carousel_navigation_styling_controls( $params = [] ) {
		$navigation_styling_shared_settings = [
			'label' => esc_html__( 'Navigation', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		];

		$this->start_controls_section(
			'section_design_navigation',
			array_key_exists( 'navigation_styling_custom_settings', $params )
				? $params['navigation_styling_custom_settings'] + $navigation_styling_shared_settings
				: $navigation_styling_shared_settings
		);

		$this->add_control(
			'heading_icons',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Icons', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'arrows_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 5,
						'max' => 400,
					],
					'em' => [
						'min' => 0.1,
						'max' => 10,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'rem' => [
						'min' => 0.1,
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'arrow-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs( 'arrow_colors' );

		$this->start_controls_tab( 'arrow_normal_colors', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control(
			'arrow_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'arrow-normal-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'arrow_hover_colors', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control(
			'arrow_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'arrow-hover-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'arrows_position',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'inside',
				'options' => [
					'inside' => esc_html__( 'Inside', 'elementor-pro' ),
					'outside' => esc_html__( 'Outside', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-arrows-position-',
				'condition' => [
					'arrows' => 'yes',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	public function add_carousel_pagination_controls( $params = [] ) {
		$pagination_shared_settings = [
			'label' => esc_html__( 'Pagination', 'elementor-pro' ),
		];

		$this->start_controls_section(
			'section_carousel_pagination',
			array_key_exists( 'section_carousel_pagination', $params )
				? $params['section_carousel_pagination'] + $pagination_shared_settings
				: $pagination_shared_settings
		);

		$this->add_control(
			'pagination',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'bullets',
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'bullets' => esc_html__( 'Dots', 'elementor-pro' ),
					'fraction' => esc_html__( 'Fraction', 'elementor-pro' ),
					'progressbar' => esc_html__( 'Progress', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-pagination-type-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->end_controls_section();
	}

	public function add_carousel_pagination_style_controls( $params ) {
		$this->start_controls_section(
			'section_pagination_design',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'pagination!' => '',
				],
			]
		);

		$this->add_control(
			'heading_pagination_dots',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dots', 'elementor-pro' ),
				'condition' => [
					'pagination' => 'bullets',
				],
			]
		);

		$this->add_responsive_control(
			'dots_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 5,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-size: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'pagination' => 'bullets',
				],
			]
		);

		$this->start_controls_tabs( 'dots_colors' );

		$this->start_controls_tab( 'dots_normal_colors', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
			'condition' => [
				'pagination' => 'bullets',
			],
		] );

		$this->add_control(
			'dots_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'dots-normal-color: {{VALUE}};',
				],
				'condition' => [
					'pagination' => 'bullets',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'dots_hover_colors', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
			'condition' => [
				'pagination' => 'bullets',
			],
		] );

		$this->add_control(
			'dots_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'dots-hover-color: {{VALUE}};',
				],
				'condition' => [
					'pagination' => 'bullets',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'dots_position',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'outside',
				'options' => [
					'inside' => esc_html__( 'Inside', 'elementor-pro' ),
					'outside' => esc_html__( 'Outside', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-pagination-position-',
				'condition' => [
					'pagination' => 'bullets',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'dots_pagination_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
				],
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'pagination',
							'operator' => '==',
							'value' => 'bullets',
						],
						[
							'name' => 'dots_position',
							'operator' => '==',
							'value' => 'outside',
						],
					],

				],
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'heading_pagination_fraction',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Fraction', 'elementor-pro' ),
				'condition' => [
					'pagination' => 'fraction',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'typography_fraction',
				'selector' => '{{WRAPPER}} .swiper-pagination',
				'condition' => [
					'pagination' => 'fraction',
				],
				'fields_options' => [
					'font_size' => [
						'selectors' => [
							'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-size: {{SIZE}}{{UNIT}};',
							'{{WRAPPER}} .swiper-pagination' => 'font-size: {{SIZE}}{{UNIT}};',
						],
					],
					'line_height' => [
						'selectors' => [
							'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-size: {{SIZE}}{{UNIT}};',
							'{{WRAPPER}} .swiper-pagination' => 'line-height: {{SIZE}}{{UNIT}};',
						],
					],
				],
			]
		);

		$this->add_control(
			'fraction_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'fraction-color: {{VALUE}};',
				],
				'condition' => [
					'pagination' => 'fraction',
				],
			]
		);

		$this->add_control(
			'fraction_position',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'outside',
				'options' => [
					'inside' => esc_html__( 'Inside', 'elementor-pro' ),
					'outside' => esc_html__( 'Outside', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-pagination-position-',
				'condition' => [
					'pagination' => 'fraction',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'fraction_pagination_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
				],
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'pagination',
							'operator' => '==',
							'value' => 'fraction',
						],
						[
							'name' => 'fraction_position',
							'operator' => '==',
							'value' => 'outside',
						],
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'heading_pagination_progress',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Progress Bar', 'elementor-pro' ),
				'condition' => [
					'pagination' => 'progressbar',
				],
			]
		);

		$this->add_responsive_control(
			'progressbar_height',
			[
				'label' => esc_html__( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'swiper-pagination-size: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'pagination' => 'progressbar',
				],
			]
		);

		$this->start_controls_tabs( 'progressbar_colors' );

		$this->start_controls_tab( 'progressbar_normal_colors', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
			'condition' => [
				'pagination' => 'progressbar',
			],
		] );

		$this->add_control(
			'progressbar_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'progressbar-normal-color: {{VALUE}};',
				],
				'condition' => [
					'pagination' => 'progressbar',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'progressbar_hover_colors', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
			'condition' => [
				'pagination' => 'progressbar',
			],
		] );

		$this->add_control(
			'progressbar_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--' . $params['css_prefix'] . 'progressbar-hover-color: {{VALUE}};',
				],
				'condition' => [
					'pagination' => 'progressbar',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	public function render_carousel_footer( $settings ) { ?>
		<?php if ( 'yes' === $settings['arrows'] ) { ?>
			<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
				<?php $this->render_swiper_button( 'previous' ); ?>
			</div>
			<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
				<?php $this->render_swiper_button( 'next' ); ?>
			</div>
		<?php }

		if ( $settings['pagination'] ) { ?>
			<div class="swiper-pagination"></div>
		<?php }
	}

	private function render_swiper_button( $type ) {
		$icon_settings = $this->get_settings_for_display( 'navigation_' . $type . '_icon' );

		if ( empty( $icon_settings['value'] ) ) {
			return;
		}

		Icons_Manager::render_icon( $icon_settings, [ 'aria-hidden' => 'true' ] );
	}
}
