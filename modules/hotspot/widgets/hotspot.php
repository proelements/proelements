<?php

namespace ElementorPro\Modules\Hotspot\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Image_Size;
use Elementor\Repeater;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Icons_Manager;
use Elementor\Utils;
use Elementor\Widget_Image;
use ElementorPro\Base\Base_Widget_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Hotspot extends Widget_Image {
	use Base_Widget_Trait;

	public function get_name() {
		return 'hotspot';
	}

	public function get_title() {
		return esc_html__( 'Hotspot', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-image-hotspot';
	}

	public function get_keywords() {
		return [ 'image', 'tooltip', 'CTA', 'dot' ];
	}

	protected function is_dynamic_content(): bool {
		return false;
	}

	public function has_widget_inner_wrapper(): bool {
		return true;
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the widget requires.
	 *
	 * @since 3.24.0
	 * @access public
	 *
	 * @return array Widget style dependencies.
	 */
	public function get_style_depends(): array {
		return [ 'widget-hotspot' ];
	}

	protected function register_controls() {
		parent::register_controls();

		/**
		 * Image Section
		 */

		$this->remove_control( 'caption_source' );
		$this->remove_control( 'caption' );
		$this->remove_control( 'link_to' );
		$this->remove_control( 'link' );
		$this->remove_control( 'open_lightbox' );

		/**
		 * Section Hotspot
		 */
		$this->start_controls_section(
			'hotspot_section',
			[
				'label' => esc_html__( 'Hotspot', 'elementor-pro' ),
			]
		);

		$repeater = new Repeater();

		$repeater->start_controls_tabs( 'hotspot_repeater' );

		$repeater->start_controls_tab(
			'hotspot_content_tab',
			[
				'label' => esc_html__( 'Content', 'elementor-pro' ),
			]
		);

		$repeater->add_control(
			'hotspot_label',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'label_block' => true,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$repeater->add_control(
			'hotspot_link',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$repeater->add_control(
			'hotspot_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$start = is_rtl() ? 'right' : 'left';
		$end = is_rtl() ? 'left' : 'right';

		$repeater->add_control(
			'hotspot_icon_position',
			[
				'label' => esc_html__( 'Icon Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => "eicon-h-align-{$start}",
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => "eicon-h-align-{$end}",
					],
				],
				'selectors_dictionary' => [
					'start' => 'grid-column: 1;',
					'end' => 'grid-column: 2;',
				],
				'condition' => [
					'hotspot_icon[value]!' => '',
					'hotspot_label[value]!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .e-hotspot__icon' => '{{VALUE}}',
				],
				'default' => 'start',
			]
		);

		$repeater->add_control(
			'hotspot_icon_spacing',
			[
				'label' => esc_html__( 'Icon Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'default' => [
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .e-hotspot__button' =>
							'grid-gap: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'hotspot_icon[value]!' => '',
					'hotspot_label[value]!' => '',
				],
			]
		);

		$repeater->add_control(
			'hotspot_custom_size',
			[
				'label' => esc_html__( 'Custom Hotspot Size', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'default' => 'no',
				'description' => esc_html__( 'Set custom Hotspot size that will only affect this specific hotspot.', 'elementor-pro' ),
			]
		);

		$repeater->add_control('hotspot_width',
			[
				'label' => esc_html__( 'Min Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 1000,
					],
					'em' => [
						'max' => 100,
					],
					'rem' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => '--hotspot-min-width: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'hotspot_custom_size' => 'yes',
				],
			]
		);

		$repeater->add_control(
			'hotspot_height',
			[
				'label' => esc_html__( 'Min Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'max' => 1000,
					],
					'em' => [
						'max' => 100,
					],
					'rem' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => '--hotspot-min-height: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'hotspot_custom_size' => 'yes',
				],
			]
		);

		$repeater->add_control(
			'hotspot_tooltip_content',
			[
				'render_type' => 'template',
				'label' => esc_html__( 'Tooltip Content', 'elementor-pro' ),
				'type' => Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'Add Your Tooltip Text Here', 'elementor-pro' ),
			]
		);

		$repeater->end_controls_tab();

		$repeater->start_controls_tab(
			'hotspot_position_tab',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
			]
		);

		$repeater->add_control(
			'hotspot_horizontal',
			[
				'label' => esc_html__( 'Horizontal Orientation', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => is_rtl() ? 'right' : 'left',
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'toggle' => false,
			]
		);

		$repeater->add_responsive_control(
			'hotspot_offset_x',
			[
				'label' => esc_html__( 'Offset', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ '%' ],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' =>
							'{{hotspot_horizontal.VALUE}}: {{SIZE}}%; --hotspot-translate-x: {{SIZE}}%;',
				],
			]
		);

		$repeater->add_control(
			'hotspot_vertical',
			[
				'label' => esc_html__( 'Vertical Orientation', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'top' => [
						'title' => esc_html__( 'Top', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'bottom' => [
						'title' => esc_html__( 'Bottom', 'elementor-pro' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'top',
				'toggle' => false,
			]
		);

		$repeater->add_responsive_control(
			'hotspot_offset_y',
			[
				'label' => esc_html__( 'Offset', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ '%' ],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' =>
							'{{hotspot_vertical.VALUE}}: {{SIZE}}%; --hotspot-translate-y: {{SIZE}}%;',
				],
			]
		);

		$repeater->add_control(
			'hotspot_tooltip_position',
			[
				'label' => esc_html__( 'Custom Tooltip Properties', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'default' => 'no',
				'description' => esc_html__( 'Set custom Tooltip opening that will only affect this specific hotspot.', 'elementor-pro' ),
			]
		);

		$repeater->add_control(
			'hotspot_heading',
			[
				'label' => esc_html__( 'Box', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					'hotspot_tooltip_position' => 'yes',
				],
			]
		);

		$repeater->add_responsive_control(
			'hotspot_position',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'right' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'bottom' => [
						'title' => esc_html__( 'Top', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'left' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
					'top' => [
						'title' => esc_html__( 'Bottom', 'elementor-pro' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .e-hotspot--tooltip-position' => 'right: initial;bottom: initial;left: initial;top: initial;{{VALUE}}: calc(100% + 5px );',
				],
				'condition' => [
					'hotspot_tooltip_position' => 'yes',
				],
				'render_type' => 'template',
			]
		);

		$repeater->add_responsive_control(
			'hotspot_tooltip_width',
			[
				'label' => esc_html__( 'Min Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 2000,
					],
					'em' => [
						'max' => 200,
					],
					'rem' => [
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .e-hotspot__tooltip' => 'min-width: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'hotspot_tooltip_position' => 'yes',
				],
			]
		);

		$repeater->add_control(
			'hotspot_tooltip_text_wrap',
			[
				'label' => esc_html__( 'Text Wrap', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => '--white-space: normal',
				],
				'condition' => [
					'hotspot_tooltip_position' => 'yes',
				],
			]
		);

		$repeater->end_controls_tab();

		$repeater->end_controls_tabs();

		$this->add_control(
			'hotspot',
			[
				'label' => esc_html__( 'Hotspot', 'elementor-pro' ),
				'type' => Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'title_field' => '{{{ hotspot_label }}}',
				'default' => [
					[
						// Default #1 circle
					],
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'hotspot_animation',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'e-hotspot--soft-beat' => esc_html__( 'Soft Beat', 'elementor-pro' ),
					'e-hotspot--expand' => esc_html__( 'Expand', 'elementor-pro' ),
					'e-hotspot--overlay' => esc_html__( 'Overlay', 'elementor-pro' ),
					'' => esc_html__( 'None', 'elementor-pro' ),
				],
				'default' => 'e-hotspot--expand',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'hotspot_sequenced_animation',
			[
				'label' => esc_html__( 'Sequenced Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'default' => 'no',
				'frontend_available' => true,
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'hotspot_sequenced_animation_duration',
			[
				'label' => esc_html__( 'Sequence Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 20000,
						'step' => 100,
					],
				],
				'condition' => [
					'hotspot_sequenced_animation' => 'yes',
				],
				'frontend_available' => true,
				'render_type' => 'ui',
			]
		);

		$this->end_controls_section();

		/**
		 * Tooltip Section
		 */
		$this->start_controls_section(
			'tooltip_section',
			[
				'label' => esc_html__( 'Tooltip', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'tooltip_position',
			[
				'label' => esc_html__( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'top',
				'toggle' => false,
				'options' => [
					'right' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'bottom' => [
						'title' => esc_html__( 'Top', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'left' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
					'top' => [
						'title' => esc_html__( 'Bottom', 'elementor-pro' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .e-hotspot--tooltip-position' => 'right: initial;bottom: initial;left: initial;top: initial;{{VALUE}}: calc(100% + 5px );',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'tooltip_trigger',
			[
				'label' => esc_html__( 'Trigger', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'mouseenter' => esc_html__( 'Hover', 'elementor-pro' ),
					'click' => esc_html__( 'Click', 'elementor-pro' ),
					'none' => esc_html__( 'None', 'elementor-pro' ),
				],
				'default' => 'click',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'tooltip_animation',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'e-hotspot--fade-in-out' => esc_html__( 'Fade In/Out', 'elementor-pro' ),
					'e-hotspot--fade-grow' => esc_html__( 'Fade Grow', 'elementor-pro' ),
					'e-hotspot--fade-direction' => esc_html__( 'Fade By Direction', 'elementor-pro' ),
					'e-hotspot--slide-direction' => esc_html__( 'Slide By Direction', 'elementor-pro' ),
				],
				'default' => 'e-hotspot--fade-in-out',
				'placeholder' => esc_html__( 'Enter your image caption', 'elementor-pro' ),
				'condition' => [
					'tooltip_trigger!' => 'none',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'tooltip_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 10000,
						'step' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-transition-duration: {{SIZE}}ms;',
				],
				'condition' => [
					'tooltip_trigger!' => 'none',
				],
			]
		);

		$this->end_controls_section();

		/*************
		 * Style Tab
		 ************/
		/**
		 * Section Style Image
		 */

		$this->remove_control( 'section_style_caption' );

		$this->remove_control( 'caption_align' );

		$this->remove_control( 'text_color' );

		$this->remove_control( 'caption_background_color' );

		$this->remove_control( 'caption_typography' );

		$this->remove_control( 'caption_text_shadow' );

		$this->remove_control( 'caption_space' );

		$this->update_control( 'align', [
			'options' => [
				'flex-start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => 'eicon-text-align-left',
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-text-align-center',
				],
				'flex-end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => 'eicon-text-align-right',
				],
			],
			'selectors' => [
				'{{WRAPPER}}' => '--background-align: {{VALUE}};',
			],
		] );

		$this->update_control(
			'width',
			[
				'selectors' => [
					'{{WRAPPER}}' => '--container-width: {{SIZE}}{{UNIT}}; --image-width: 100%;',
				],
			]
		);

		$this->update_control(
			'space',
			[
				'selectors' => [
					'{{WRAPPER}}' => '--container-max-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->update_control(
			'height',
			[
				'selectors' => [
					'{{WRAPPER}}' => '--container-height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->remove_control( 'hover_animation' );

		$this->update_control(
			'opacity',
			[
				'selectors' => [
					'{{WRAPPER}}' => '--opacity: {{SIZE}};',
				],
			]
		);

		$this->update_control(
			'opacity_hover',
			[
				'selectors' => [
					'{{WRAPPER}} .elementor-widget-container>img:hover' => '--opacity: {{SIZE}};',
				],
			]
		);

		/**
		 * Section Style Hotspot
		 */
		$this->start_controls_section(
			'section_style_hotspot',
			[
				'label' => esc_html__( 'Hotspot', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'style_hotspot_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_PRIMARY,
				],
			]
		);

		$this->add_responsive_control(
			'style_hotspot_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 300,
					],
					'em' => [
						'max' => 30,
					],
					'rem' => [
						'max' => 30,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'style_typography',
				'selector' => '{{WRAPPER}} .e-hotspot__label',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
			]
		);

		$this->add_responsive_control(
			'style_hotspot_width',
			[
				'label' => esc_html__( 'Min Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 1000,
					],
					'em' => [
						'max' => 100,
					],
					'rem' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-min-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'style_hotspot_height',
			[
				'label' => esc_html__( 'Min Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'max' => 1000,
					],
					'em' => [
						'max' => 100,
					],
					'rem' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-min-height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'style_hotspot_box_color',
			[
				'label' => esc_html__( 'Box Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-box-color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
			]
		);

		$this->add_responsive_control(
			'style_hotspot_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-padding: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'style_hotspot_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--hotspot-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'style_hotspot_box_shadow',
				'selector' => '
					{{WRAPPER}} .e-hotspot:not(.e-hotspot--circle) .e-hotspot__button,
					{{WRAPPER}} .e-hotspot.e-hotspot--circle .e-hotspot__button .e-hotspot__outer-circle
				',
			]
		);

		$this->end_controls_section();

		/**
		 * Section Style Tooltip
		 */
		$this->start_controls_section(
			'section_style_tooltip',
			[
				'label' => esc_html__( 'Tooltip', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'style_tooltip_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'style_tooltip_typography',
				'selector' => '{{WRAPPER}} .e-hotspot__tooltip',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
			]
		);

		$this->add_responsive_control(
			'style_tooltip_align',
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
					'justify' => [
						'title' => esc_html__( 'Justified', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-align: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'style_tooltip_heading',
			[
				'label' => esc_html__( 'Box', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'style_tooltip_width',
			[
				'label' => esc_html__( 'Min Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 2000,
					],
					'em' => [
						'max' => 200,
					],
					'rem' => [
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-min-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'style_tooltip_max_width',
			[
				'label' => esc_html__( 'Max Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 2000,
					],
					'em' => [
						'max' => 200,
					],
					'rem' => [
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-max-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'style_tooltip_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'style_tooltip_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-color: {{VALUE}}',
				],
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
			]
		);

		$this->add_control(
			'style_tooltip_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--tooltip-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'style_tooltip_box_shadow',
				'selector' => '{{WRAPPER}} .e-hotspot__tooltip',
			]
		);

		$this->end_controls_section();
	}


	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['image']['url'] ) ) {
			return;
		}

		$is_tooltip_direction_animation = 'e-hotspot--slide-direction' === $settings['tooltip_animation'] || 'e-hotspot--fade-direction' === $settings['tooltip_animation'];
		$show_tooltip = 'none' === $settings['tooltip_trigger'];
		$sequenced_animation_class = 'yes' === $settings['hotspot_sequenced_animation'] ? 'e-hotspot--sequenced' : '';

		// Main Image
		Group_Control_Image_Size::print_attachment_image_html( $settings, 'image', 'image' );

		// Hotspot
		foreach ( $settings['hotspot'] as $key => $hotspot ) :
			$is_circle = ! $hotspot['hotspot_label'] && ! $hotspot['hotspot_icon']['value'];
			$is_only_icon = ! $hotspot['hotspot_label'] && $hotspot['hotspot_icon']['value'];
			$hotspot_position_x = '%' === $hotspot['hotspot_offset_x']['unit'] ? 'e-hotspot--position-' . $hotspot['hotspot_horizontal'] : '';
			$hotspot_position_y = '%' === $hotspot['hotspot_offset_y']['unit'] ? 'e-hotspot--position-' . $hotspot['hotspot_vertical'] : '';
			$is_hotspot_link = ! empty( $hotspot['hotspot_link']['url'] );
			$hotspot_element_tag = $is_hotspot_link ? 'a' : 'div';

			// hotspot attributes
			$hotspot_repeater_setting_key = $this->get_repeater_setting_key( 'hotspot', 'hotspots', $key );
			$this->add_render_attribute(
				$hotspot_repeater_setting_key, [
					'class' => [
						'e-hotspot',
						'elementor-repeater-item-' . $hotspot['_id'],
						$sequenced_animation_class,
						$hotspot_position_x,
						$hotspot_position_y,
						$is_hotspot_link ? 'e-hotspot--link' : '',
						( 'click' === $settings['tooltip_trigger'] && $is_hotspot_link ) ? 'e-hotspot--no-tooltip' : '',
					],
				]
			);
			if ( $is_circle ) {
				$this->add_render_attribute( $hotspot_repeater_setting_key, 'class', 'e-hotspot--circle' );
			}
			if ( $is_only_icon ) {
				$this->add_render_attribute( $hotspot_repeater_setting_key, 'class', 'e-hotspot--icon' );
			}

			if ( $is_hotspot_link ) {
				$this->add_link_attributes( $hotspot_repeater_setting_key, $hotspot['hotspot_link'] );
			}

			// hotspot trigger attributes
			$trigger_repeater_setting_key = $this->get_repeater_setting_key( 'trigger', 'hotspots', $key );
			$this->add_render_attribute(
				$trigger_repeater_setting_key, [
					'class' => [
						'e-hotspot__button',
						$settings['hotspot_animation'],
					],
				]
			);

			//direction mask attributes
			$direction_mask_repeater_setting_key = $this->get_repeater_setting_key( 'e-hotspot__direction-mask', 'hotspots', $key );
			$this->add_render_attribute(
				$direction_mask_repeater_setting_key, [
					'class' => [
						'e-hotspot__direction-mask',
						( $is_tooltip_direction_animation ) ? 'e-hotspot--tooltip-position' : '',
					],
				]
			);

			//tooltip attributes
			$tooltip_custom_position = ( $is_tooltip_direction_animation && $hotspot['hotspot_tooltip_position'] && $hotspot['hotspot_position'] ) ? 'e-hotspot--override-tooltip-animation-from-' . $hotspot['hotspot_position'] : '';
			$tooltip_repeater_setting_key = $this->get_repeater_setting_key( 'tooltip', 'hotspots', $key );
			$this->add_render_attribute(
				$tooltip_repeater_setting_key, [
					'class' => [
						'e-hotspot__tooltip',
						( $show_tooltip ) ? 'e-hotspot--show-tooltip' : '',
						( ! $is_tooltip_direction_animation ) ? 'e-hotspot--tooltip-position' : '',
						( ! $show_tooltip ) ? $settings['tooltip_animation'] : '',
						$tooltip_custom_position,
					],
				]
			); ?>

			<?php // Hotspot ?>
			<<?php Utils::print_validated_html_tag( $hotspot_element_tag ); ?> <?php $this->print_render_attribute_string( $hotspot_repeater_setting_key ); ?>>

				<?php // Hotspot Trigger ?>
				<div <?php $this->print_render_attribute_string( $trigger_repeater_setting_key ); ?>>
					<?php if ( $is_circle ) : ?>
						<div class="e-hotspot__outer-circle"></div>
						<div class="e-hotspot__inner-circle"></div>
					<?php else : ?>
						<?php if ( $hotspot['hotspot_icon']['value'] ) : ?>
							<div class="e-hotspot__icon"><?php Icons_Manager::render_icon( $hotspot['hotspot_icon'] ); ?></div>
						<?php endif; ?>
						<?php if ( $hotspot['hotspot_label'] ) : ?>
							<div class="e-hotspot__label"><?php
								// PHPCS - the main text of a widget should not be escaped.
								echo $hotspot['hotspot_label']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							?></div>
						<?php endif; ?>
					<?php endif; ?>
				</div>

				<?php // Hotspot Tooltip ?>
				<?php if ( $hotspot['hotspot_tooltip_content'] && ! ( 'click' === $settings['tooltip_trigger'] && $is_hotspot_link ) ) : ?>
					<?php if ( $is_tooltip_direction_animation ) : ?>
						<div <?php $this->print_render_attribute_string( $direction_mask_repeater_setting_key ); ?>>
					<?php endif; ?>
					<div <?php $this->print_render_attribute_string( $tooltip_repeater_setting_key ); ?> >
						<?php
						// PHPCS - the main text of a widget should not be escaped.
						echo $hotspot['hotspot_tooltip_content']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						?>
					</div>
					<?php if ( $is_tooltip_direction_animation ) : ?>
						</div>
					<?php endif; ?>
				<?php endif; ?>

			</<?php Utils::print_validated_html_tag( $hotspot_element_tag ); ?>>

	<?php endforeach; ?>

		<?php
	}

	/**
	 * Render Hotspot widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since  2.9.0
	 * @access protected
	 */
	protected function content_template() {         ?>
		<#
		const image = {
			id: settings.image.id,
			url: settings.image.url,
			size: settings.image_size,
			dimension: settings.image_custom_dimension,
			model: view.getEditModel()
		};

		const imageUrl = elementor.imagesManager.getImageUrl( image );

		if ( ! imageUrl ) {
			return;
		}
		#>
		<img src="{{ imageUrl }}" title="" alt="">
		<#
		const isTooltipDirectionAnimation = (settings.tooltip_animation==='e-hotspot--slide-direction' || settings.tooltip_animation==='e-hotspot--fade-direction' ) ? true : false;
		const showTooltip = ( settings.tooltip_trigger === 'none' );

		_.each( settings.hotspot, ( hotspot, index ) => {
			const iconHTML = elementor.helpers.renderIcon( view, hotspot.hotspot_icon, {}, 'i' , 'object' );

			const isCircle = !hotspot.hotspot_label && !hotspot.hotspot_icon.value;
			const isOnlyIcon = !hotspot.hotspot_label && hotspot.hotspot_icon.value;
			const hotspotPositionX = '%' === hotspot.hotspot_offset_x.unit ? 'e-hotspot--position-' + hotspot.hotspot_horizontal : '';
			const hotspotPositionY = '%' === hotspot.hotspot_offset_y.unit ? 'e-hotspot--position-' + hotspot.hotspot_vertical : '';
			const hotspotLink = hotspot.hotspot_link.url;
			const hotspotElementTag = hotspotLink ? 'a': 'div';

			// hotspot attributes
			const hotspotRepeaterSettingKey = view.getRepeaterSettingKey( 'hotspot', 'hotspots', index );
			view.addRenderAttribute( hotspotRepeaterSettingKey, {
				'class' : [
					'e-hotspot',
					'elementor-repeater-item-' + hotspot._id,
					hotspotPositionX,
					hotspotPositionY,
					hotspotLink ? 'e-hotspot--link' : '',,
				]
			});

			if ( isCircle ) {
				view.addRenderAttribute( hotspotRepeaterSettingKey, 'class', 'e-hotspot--circle' );
			}

			if ( isOnlyIcon ) {
				view.addRenderAttribute( hotspotRepeaterSettingKey, 'class', 'e-hotspot--icon' );
			}

			// hotspot trigger attributes
			const triggerRepeaterSettingKey = view.getRepeaterSettingKey( 'trigger', 'hotspots', index );
			view.addRenderAttribute(triggerRepeaterSettingKey, {
				'class' : [
					'e-hotspot__button',
					settings.hotspot_animation,
					//'hotspot-trigger-' + hotspot.hotspot_icon_position
				]
			});

			//direction mask attributes
			const directionMaskRepeaterSettingKey = view.getRepeaterSettingKey( 'e-hotspot__direction-mask', 'hotspots', index );
			view.addRenderAttribute(directionMaskRepeaterSettingKey, {
				'class' : [
					'e-hotspot__direction-mask',
					( isTooltipDirectionAnimation ) ? 'e-hotspot--tooltip-position' : ''
				]
			});

			//tooltip attributes
			const tooltipCustomPosition = ( isTooltipDirectionAnimation && hotspot.hotspot_tooltip_position && hotspot.hotspot_position ) ? 'e-hotspot--override-tooltip-animation-from-' + hotspot.hotspot_position : '';
			const tooltipRepeaterSettingKey = view.getRepeaterSettingKey('tooltip', 'hotspots', index);
			view.addRenderAttribute( tooltipRepeaterSettingKey, {
				'class': [
					'e-hotspot__tooltip',
					( showTooltip ) ? 'e-hotspot--show-tooltip' : '',
					( !isTooltipDirectionAnimation ) ? 'e-hotspot--tooltip-position' : '',
					( !showTooltip ) ? settings.tooltip_animation : '',
					tooltipCustomPosition
				],
			});

			#>
			<{{{ hotspotElementTag }}} {{{ view.getRenderAttributeString( hotspotRepeaterSettingKey ) }}}>

					<?php // Hotspot Trigger ?>
					<div {{{ view.getRenderAttributeString( triggerRepeaterSettingKey ) }}}>
						<# if ( isCircle ) { #>
						<div class="e-hotspot__outer-circle"></div>
						<div class="e-hotspot__inner-circle"></div>
						<# } else { #>
						<# if (hotspot.hotspot_icon.value){ #>
						<div class="e-hotspot__icon">{{{ iconHTML.value }}}</div>
						<# } #>
						<# if ( hotspot.hotspot_label ){ #>
						<div class="e-hotspot__label">{{{ hotspot.hotspot_label }}}</div>
						<# } #>
						<# } #>
					</div>

					<?php // Hotspot Tooltip ?>
					<# if( hotspot.hotspot_tooltip_content && ! ( 'click' === settings.tooltip_trigger && hotspotLink ) ){ #>
					<# if( isTooltipDirectionAnimation ){ #>
					<div {{{ view.getRenderAttributeString( directionMaskRepeaterSettingKey ) }}}>
						<# } #>
						<div {{{ view.getRenderAttributeString( tooltipRepeaterSettingKey ) }}}>
							{{{ hotspot.hotspot_tooltip_content }}}
						</div>
						<# if( isTooltipDirectionAnimation ){ #>
					</div>
					<# } #>
					<# } #>

			</{{{ hotspotElementTag }}}>
		<# }); #>
		<?php
	}
}
