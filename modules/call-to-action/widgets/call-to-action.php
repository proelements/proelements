<?php
namespace ElementorPro\Modules\CallToAction\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Css_Filter;
use Elementor\Group_Control_Image_Size;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Utils;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Call_To_Action extends Base_Widget {

	public function get_name() {
		return 'call-to-action';
	}

	public function get_title() {
		return __( 'Call to Action', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-image-rollover';
	}

	public function get_keywords() {
		return [ 'call to action', 'cta', 'button' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_main_image',
			[
				'label' => __( 'Image', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'skin',
			[
				'label' => __( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'classic' => __( 'Classic', 'elementor-pro' ),
					'cover' => __( 'Cover', 'elementor-pro' ),
				],
				'render_type' => 'template',
				'prefix_class' => 'elementor-cta--skin-',
				'default' => 'classic',
			]
		);

		$this->add_responsive_control(
			'layout',
			[
				'label' => __( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'above' => [
						'title' => __( 'Above', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'prefix_class' => 'elementor-cta-%s-layout-image-',
				'condition' => [
					'skin!' => 'cover',
				],
			]
		);

		$this->add_control(
			'bg_image',
			[
				'label' => __( 'Choose Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'dynamic' => [
					'active' => true,
				],
				'default' => [
					'url' => Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->add_group_control(
			Group_Control_Image_Size::get_type(),
			[
				'name' => 'bg_image', // Actually its `image_size`
				'label' => __( 'Image Resolution', 'elementor-pro' ),
				'default' => 'large',
				'condition' => [
					'bg_image[id]!' => '',
				],
				'separator' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'graphic_element',
			[
				'label' => __( 'Graphic Element', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'none' => [
						'title' => __( 'None', 'elementor-pro' ),
						'icon' => 'eicon-ban',
					],
					'image' => [
						'title' => __( 'Image', 'elementor-pro' ),
						'icon' => 'fa fa-picture-o',
					],
					'icon' => [
						'title' => __( 'Icon', 'elementor-pro' ),
						'icon' => 'eicon-star',
					],
				],
				'default' => 'none',
			]
		);

		$this->add_control(
			'graphic_image',
			[
				'label' => __( 'Choose Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'dynamic' => [
					'active' => true,
				],
				'default' => [
					'url' => Utils::get_placeholder_image_src(),
				],
				'condition' => [
					'graphic_element' => 'image',
				],
				'show_label' => false,
			]
		);

		$this->add_group_control(
			Group_Control_Image_Size::get_type(),
			[
				'name' => 'graphic_image', // Actually its `image_size`
				'default' => 'thumbnail',
				'condition' => [
					'graphic_element' => 'image',
					'graphic_image[id]!' => '',
				],
			]
		);

		$this->add_control(
			'selected_icon',
			[
				'label' => __( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'default' => [
					'value' => 'fas fa-star',
					'library' => 'fa-solid',
				],
				'condition' => [
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'icon_view',
			[
				'label' => __( 'View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'default' => __( 'Default', 'elementor-pro' ),
					'stacked' => __( 'Stacked', 'elementor-pro' ),
					'framed' => __( 'Framed', 'elementor-pro' ),
				],
				'default' => 'default',
				'condition' => [
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'icon_shape',
			[
				'label' => __( 'Shape', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'circle' => __( 'Circle', 'elementor-pro' ),
					'square' => __( 'Square', 'elementor-pro' ),
				],
				'default' => 'circle',
				'condition' => [
					'icon_view!' => 'default',
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'This is the heading', 'elementor-pro' ),
				'placeholder' => __( 'Enter your title', 'elementor-pro' ),
				'label_block' => true,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'description',
			[
				'label' => __( 'Description', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor', 'elementor-pro' ),
				'placeholder' => __( 'Enter your description', 'elementor-pro' ),
				'separator' => 'none',
				'rows' => 5,
			]
		);

		$this->add_control(
			'title_tag',
			[
				'label' => __( 'Title HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'h1' => 'H1',
					'h2' => 'H2',
					'h3' => 'H3',
					'h4' => 'H4',
					'h5' => 'H5',
					'h6' => 'H6',
					'div' => 'div',
					'span' => 'span',
				],
				'default' => 'h2',
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_control(
			'button',
			[
				'label' => __( 'Button Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Click Here', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'link',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => __( 'https://your-link.com', 'elementor-pro' ),

			]
		);

		$this->add_control(
			'link_click',
			[
				'label' => __( 'Apply Link On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'box' => __( 'Whole Box', 'elementor-pro' ),
					'button' => __( 'Button Only', 'elementor-pro' ),
				],
				'default' => 'button',
				'separator' => 'none',
				'condition' => [
					'link[url]!' => '',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_ribbon',
			[
				'label' => __( 'Ribbon', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'ribbon_title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'ribbon_horizontal_position',
			[
				'label' => __( 'Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'condition' => [
					'ribbon_title!' => '',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'box_style',
			[
				'label' => __( 'Box', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'min-height',
			[
				'label' => __( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 100,
						'max' => 1000,
					],
					'vh' => [
						'min' => 10,
						'max' => 100,
					],
				],
				'size_units' => [ 'px', 'vh' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__content' => 'min-height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'alignment',
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
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__content' => 'text-align: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'vertical_position',
			[
				'label' => __( 'Vertical Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'top' => [
						'title' => __( 'Top', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'middle' => [
						'title' => __( 'Middle', 'elementor-pro' ),
						'icon' => 'eicon-v-align-middle',
					],
					'bottom' => [
						'title' => __( 'Bottom', 'elementor-pro' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'prefix_class' => 'elementor-cta--valign-',
				'separator' => 'none',
			]
		);

		$this->add_responsive_control(
			'padding',
			[
				'label' => __( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'heading_bg_image_style',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Image', 'elementor-pro' ),
				'condition' => [
					'bg_image[url]!' => '',
					'skin' => 'classic',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'image_min_width',
			[
				'label' => __( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__bg-wrapper' => 'min-width: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'skin' => 'classic',
					'layout!' => 'above',
				],
			]
		);

		$this->add_responsive_control(
			'image_min_height',
			[
				'label' => __( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'vh' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px', 'vh' ],

				'selectors' => [
					'{{WRAPPER}} .elementor-cta__bg-wrapper' => 'min-height: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'graphic_element_style',
			[
				'label' => __( 'Graphic Element', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'graphic_element!' => [
						'none',
						'',
					],
				],
			]
		);

		$this->add_control(
			'graphic_image_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__image' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'graphic_element' => 'image',
				],
			]
		);

		$this->add_control(
			'graphic_image_width',
			[
				'label' => __( 'Size', 'elementor-pro' ) . ' (%)',
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ '%' ],
				'default' => [
					'unit' => '%',
				],
				'range' => [
					'%' => [
						'min' => 5,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__image img' => 'width: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'graphic_element' => 'image',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'graphic_image_border',
				'selector' => '{{WRAPPER}} .elementor-cta__image img',
				'condition' => [
					'graphic_element' => 'image',
				],
			]
		);

		$this->add_control(
			'graphic_image_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__image img' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'graphic_element' => 'image',
				],
			]
		);

		$this->add_control(
			'icon_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-icon-wrapper' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'icon_primary_color',
			[
				'label' => __( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-view-stacked .elementor-icon' => 'background-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-view-stacked .elementor-icon svg' => 'stroke: {{VALUE}}',
					'{{WRAPPER}} .elementor-view-framed .elementor-icon, {{WRAPPER}} .elementor-view-default .elementor-icon' => 'color: {{VALUE}}; border-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-view-framed .elementor-icon, {{WRAPPER}} .elementor-view-default .elementor-icon svg' => 'fill: {{VALUE}};',
				],
				'condition' => [
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'icon_secondary_color',
			[
				'label' => __( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'graphic_element' => 'icon',
					'icon_view!' => 'default',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-view-framed .elementor-icon' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-view-framed .elementor-icon svg' => 'stroke: {{VALUE}};',
					'{{WRAPPER}} .elementor-view-stacked .elementor-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .elementor-view-stacked .elementor-icon svg' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'icon_size',
			[
				'label' => __( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 6,
						'max' => 300,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-icon' => 'font-size: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'graphic_element' => 'icon',
				],
			]
		);

		$this->add_control(
			'icon_padding',
			[
				'label' => __( 'Icon Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-icon' => 'padding: {{SIZE}}{{UNIT}};',
				],
				'range' => [
					'em' => [
						'min' => 0,
						'max' => 5,
					],
				],
				'condition' => [
					'graphic_element' => 'icon',
					'icon_view!' => 'default',
				],
			]
		);

		$this->add_control(
			'icon_border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-icon' => 'border-width: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'graphic_element' => 'icon',
					'icon_view' => 'framed',
				],
			]
		);

		$this->add_control(
			'icon_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-icon' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'graphic_element' => 'icon',
					'icon_view!' => 'default',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_style',
			[
				'label' => __( 'Content', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'title',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'description',
							'operator' => '!==',
							'value' => '',
						],
					],
				],
			]
		);

		$this->add_control(
			'heading_style_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Title', 'elementor-pro' ),
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
				'selector' => '{{WRAPPER}} .elementor-cta__title',
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'title_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__title:not(:last-child)' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_control(
			'heading_style_description',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Description', 'elementor-pro' ),
				'separator' => 'before',
				'condition' => [
					'description!' => '',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'description_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-cta__description',
				'condition' => [
					'description!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'description_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__description:not(:last-child)' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'description!' => '',
				],
			]
		);

		$this->add_control(
			'heading_content_colors',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Colors', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'color_tabs' );

		$this->start_controls_tab( 'colors_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'content_bg_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__content' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => __( 'Title Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__title' => 'color: {{VALUE}}',
				],
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_control(
			'description_color',
			[
				'label' => __( 'Description Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__description' => 'color: {{VALUE}}',
				],
				'condition' => [
					'description!' => '',
				],
			]
		);

		$this->add_control(
			'button_color',
			[
				'label' => __( 'Button Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'color: {{VALUE}}; border-color: {{VALUE}}',
				],
				'condition' => [
					'button!' => '',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'colors_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'content_bg_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:hover .elementor-cta__content' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'title_color_hover',
			[
				'label' => __( 'Title Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:hover .elementor-cta__title' => 'color: {{VALUE}}',
				],
				'condition' => [
					'title!' => '',
				],
			]
		);

		$this->add_control(
			'description_color_hover',
			[
				'label' => __( 'Description Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:hover .elementor-cta__description' => 'color: {{VALUE}}',
				],
				'condition' => [
					'description!' => '',
				],
			]
		);

		$this->add_control(
			'button_color_hover',
			[
				'label' => __( 'Button Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:hover .elementor-cta__button' => 'color: {{VALUE}}; border-color: {{VALUE}}',
				],
				'condition' => [
					'button!' => '',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'button_style',
			[
				'label' => __( 'Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'button!' => '',
				],
			]
		);

		$this->add_control(
			'button_size',
			[
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'sm',
				'options' => [
					'xs' => __( 'Extra Small', 'elementor-pro' ),
					'sm' => __( 'Small', 'elementor-pro' ),
					'md' => __( 'Medium', 'elementor-pro' ),
					'lg' => __( 'Large', 'elementor-pro' ),
					'xl' => __( 'Extra Large', 'elementor-pro' ),
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'label' => __( 'Typography', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .elementor-cta__button',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
			]
		);

		$this->start_controls_tabs( 'button_tabs' );

		$this->start_controls_tab( 'button_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'button-hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_hover_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button:hover' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'button_border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 20,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'border-width: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__button' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_ribbon_style',
			[
				'label' => __( 'Ribbon', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'show_label' => false,
				'condition' => [
					'ribbon_title!' => '',
				],
			]
		);

		$this->add_control(
			'ribbon_bg_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-ribbon-inner' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'ribbon_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-ribbon-inner' => 'color: {{VALUE}}',
				],
			]
		);

		$ribbon_distance_transform = is_rtl() ? 'translateY(-50%) translateX({{SIZE}}{{UNIT}}) rotate(-45deg)' : 'translateY(-50%) translateX(-50%) translateX({{SIZE}}{{UNIT}}) rotate(-45deg)';

		$this->add_responsive_control(
			'ribbon_distance',
			[
				'label' => __( 'Distance', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-ribbon-inner' => 'margin-top: {{SIZE}}{{UNIT}}; transform: ' . $ribbon_distance_transform,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'ribbon_typography',
				'selector' => '{{WRAPPER}} .elementor-ribbon-inner',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'selector' => '{{WRAPPER}} .elementor-ribbon-inner',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'hover_effects',
			[
				'label' => __( 'Hover Effects', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'content_hover_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Content', 'elementor-pro' ),
				'condition' => [
					'skin' => 'cover',
				],
			]
		);

		$this->add_control(
			'content_animation',
			[
				'label' => __( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => [
					[
						'label' => __( 'None', 'elementor-pro' ),
						'options' => [
							'' => __( 'None', 'elementor-pro' ),
						],
					],
					[
						'label' => __( 'Entrance', 'elementor-pro' ),
						'options' => [
							'enter-from-right' => 'Slide In Right',
							'enter-from-left' => 'Slide In Left',
							'enter-from-top' => 'Slide In Up',
							'enter-from-bottom' => 'Slide In Down',
							'enter-zoom-in' => 'Zoom In',
							'enter-zoom-out' => 'Zoom Out',
							'fade-in' => 'Fade In',
						],
					],
					[
						'label' => __( 'Reaction', 'elementor-pro' ),
						'options' => [
							'grow' => 'Grow',
							'shrink' => 'Shrink',
							'move-right' => 'Move Right',
							'move-left' => 'Move Left',
							'move-up' => 'Move Up',
							'move-down' => 'Move Down',
						],
					],
					[
						'label' => __( 'Exit', 'elementor-pro' ),
						'options' => [
							'exit-to-right' => 'Slide Out Right',
							'exit-to-left' => 'Slide Out Left',
							'exit-to-top' => 'Slide Out Up',
							'exit-to-bottom' => 'Slide Out Down',
							'exit-zoom-in' => 'Zoom In',
							'exit-zoom-out' => 'Zoom Out',
							'fade-out' => 'Fade Out',
						],
					],
				],
				'default' => 'grow',
				'condition' => [
					'skin' => 'cover',
				],
			]
		);

		/*
		 *
		 * Add class 'elementor-animated-content' to widget when assigned content animation
		 *
		 */
		$this->add_control(
			'animation_class',
			[
				'label' => __( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'default' => 'animated-content',
				'prefix_class' => 'elementor-',
				'condition' => [
					'content_animation!' => '',
				],
			]
		);

		$this->add_control(
			'content_animation_duration',
			[
				'label' => __( 'Animation Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'render_type' => 'template',
				'default' => [
					'size' => 1000,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__content-item' => 'transition-duration: {{SIZE}}ms',
					'{{WRAPPER}}.elementor-cta--sequenced-animation .elementor-cta__content-item:nth-child(2)' => 'transition-delay: calc( {{SIZE}}ms / 3 )',
					'{{WRAPPER}}.elementor-cta--sequenced-animation .elementor-cta__content-item:nth-child(3)' => 'transition-delay: calc( ( {{SIZE}}ms / 3 ) * 2 )',
					'{{WRAPPER}}.elementor-cta--sequenced-animation .elementor-cta__content-item:nth-child(4)' => 'transition-delay: calc( ( {{SIZE}}ms / 3 ) * 3 )',
				],
				'condition' => [
					'content_animation!' => '',
					'skin' => 'cover',
				],
			]
		);

		$this->add_control(
			'sequenced_animation',
			[
				'label' => __( 'Sequenced Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'On', 'elementor-pro' ),
				'label_off' => __( 'Off', 'elementor-pro' ),
				'return_value' => 'elementor-cta--sequenced-animation',
				'prefix_class' => '',
				'condition' => [
					'content_animation!' => '',

				],
			]
		);

		$this->add_control(
			'background_hover_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Background', 'elementor-pro' ),
				'separator' => 'before',
				'condition' => [
					'skin' => 'cover',
				],
			]
		);

		$this->add_control(
			'transformation',
			[
				'label' => __( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => 'None',
					'zoom-in' => 'Zoom In',
					'zoom-out' => 'Zoom Out',
					'move-left' => 'Move Left',
					'move-right' => 'Move Right',
					'move-up' => 'Move Up',
					'move-down' => 'Move Down',
				],
				'default' => 'zoom-in',
				'prefix_class' => 'elementor-bg-transform elementor-bg-transform-',
			]
		);

		$this->start_controls_tabs( 'bg_effects_tabs' );

		$this->start_controls_tab( 'normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'overlay_color',
			[
				'label' => __( 'Overlay Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:not(:hover) .elementor-cta__bg-overlay' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			[
				'name' => 'bg_filters',
				'selector' => '{{WRAPPER}} .elementor-cta__bg',
			]
		);

		$this->add_control(
			'overlay_blend_mode',
			[
				'label' => __( 'Blend Mode', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Normal', 'elementor-pro' ),
					'multiply' => 'Multiply',
					'screen' => 'Screen',
					'overlay' => 'Overlay',
					'darken' => 'Darken',
					'lighten' => 'Lighten',
					'color-dodge' => 'Color Dodge',
					'color-burn' => 'Color Burn',
					'hue' => 'Hue',
					'saturation' => 'Saturation',
					'color' => 'Color',
					'exclusion' => 'Exclusion',
					'luminosity' => 'Luminosity',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta__bg-overlay' => 'mix-blend-mode: {{VALUE}}',
				],
				'separator' => 'none',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'overlay_color_hover',
			[
				'label' => __( 'Overlay Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-cta:hover .elementor-cta__bg-overlay' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			[
				'name' => 'bg_filters_hover',
				'selector' => '{{WRAPPER}} .elementor-cta:hover .elementor-cta__bg',
			]
		);

		$this->add_control(
			'effect_duration',
			[
				'label' => __( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'render_type' => 'template',
				'default' => [
					'size' => 1500,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-cta .elementor-cta__bg, {{WRAPPER}} .elementor-cta .elementor-cta__bg-overlay' => 'transition-duration: {{SIZE}}ms',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$title_tag = $settings['title_tag'];
		$wrapper_tag = 'div';
		$button_tag = 'a';
		$bg_image = '';
		$content_animation = $settings['content_animation'];
		$animation_class = '';
		$print_bg = true;
		$print_content = true;

		if ( ! empty( $settings['bg_image']['id'] ) ) {
			$bg_image = Group_Control_Image_Size::get_attachment_image_src( $settings['bg_image']['id'], 'bg_image', $settings );
		} elseif ( ! empty( $settings['bg_image']['url'] ) ) {
			$bg_image = $settings['bg_image']['url'];
		}

		if ( empty( $bg_image ) && 'classic' == $settings['skin'] ) {
			$print_bg = false;
		}

		if ( empty( $settings['title'] ) && empty( $settings['description'] ) && empty( $settings['button'] ) && 'none' == $settings['graphic_element'] ) {
			$print_content = false;
		}

		$this->add_render_attribute( 'background_image', 'style', [
			'background-image: url(' . $bg_image . ');',
		] );

		$this->add_render_attribute( 'title', 'class', [
			'elementor-cta__title',
			'elementor-cta__content-item',
			'elementor-content-item',
		] );

		$this->add_render_attribute( 'description', 'class', [
			'elementor-cta__description',
			'elementor-cta__content-item',
			'elementor-content-item',
		] );

		$this->add_render_attribute( 'button', 'class', [
			'elementor-cta__button',
			'elementor-button',
			'elementor-size-' . $settings['button_size'],
		] );

		$this->add_render_attribute( 'graphic_element', 'class',
			[
				'elementor-content-item',
				'elementor-cta__content-item',
			]
		);

		if ( 'icon' === $settings['graphic_element'] ) {
			$this->add_render_attribute( 'graphic_element', 'class',
				[
					'elementor-icon-wrapper',
					'elementor-cta__icon',
				]
			);
			$this->add_render_attribute( 'graphic_element', 'class', 'elementor-view-' . $settings['icon_view'] );
			if ( 'default' != $settings['icon_view'] ) {
				$this->add_render_attribute( 'graphic_element', 'class', 'elementor-shape-' . $settings['icon_shape'] );
			}

			if ( ! isset( $settings['icon'] ) && ! Icons_Manager::is_migration_allowed() ) {
				// add old default
				$settings['icon'] = 'fa fa-star';
			}

			if ( ! empty( $settings['icon'] ) ) {
				$this->add_render_attribute( 'icon', 'class', $settings['icon'] );
			}
		} elseif ( 'image' === $settings['graphic_element'] && ! empty( $settings['graphic_image']['url'] ) ) {
			$this->add_render_attribute( 'graphic_element', 'class', 'elementor-cta__image' );
		}

		if ( ! empty( $content_animation ) && 'cover' == $settings['skin'] ) {

			$animation_class = 'elementor-animated-item--' . $content_animation;

			$this->add_render_attribute( 'title', 'class', $animation_class );

			$this->add_render_attribute( 'graphic_element', 'class', $animation_class );

			$this->add_render_attribute( 'description', 'class', $animation_class );

		}

		if ( ! empty( $settings['link']['url'] ) ) {
			$link_element = 'button';

			if ( 'box' === $settings['link_click'] ) {
				$wrapper_tag = 'a';
				$button_tag = 'span';
				$link_element = 'wrapper';
			}

			$this->add_link_attributes( $link_element, $settings['link'] );
		}

		$this->add_inline_editing_attributes( 'title' );
		$this->add_inline_editing_attributes( 'description' );
		$this->add_inline_editing_attributes( 'button' );

		$migrated = isset( $settings['__fa4_migrated']['selected_icon'] );
		$is_new = empty( $settings['icon'] ) && Icons_Manager::is_migration_allowed();

		?>
		<<?php echo $wrapper_tag . ' ' . $this->get_render_attribute_string( 'wrapper' ); ?> class="elementor-cta">
		<?php if ( $print_bg ) : ?>
			<div class="elementor-cta__bg-wrapper">
				<div class="elementor-cta__bg elementor-bg" <?php echo $this->get_render_attribute_string( 'background_image' ); ?>></div>
				<div class="elementor-cta__bg-overlay"></div>
			</div>
		<?php endif; ?>
		<?php if ( $print_content ) : ?>
			<div class="elementor-cta__content">
				<?php if ( 'image' === $settings['graphic_element'] && ! empty( $settings['graphic_image']['url'] ) ) : ?>
					<div <?php echo $this->get_render_attribute_string( 'graphic_element' ); ?>>
						<?php echo Group_Control_Image_Size::get_attachment_image_html( $settings, 'graphic_image' ); ?>
					</div>
				<?php elseif ( 'icon' === $settings['graphic_element'] && ( ! empty( $settings['icon'] ) || ! empty( $settings['selected_icon'] ) ) ) : ?>
					<div <?php echo $this->get_render_attribute_string( 'graphic_element' ); ?>>
						<div class="elementor-icon">
							<?php if ( $is_new || $migrated ) :
								Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );
							else : ?>
								<i <?php echo $this->get_render_attribute_string( 'icon' ); ?>></i>
							<?php endif; ?>
						</div>
					</div>
				<?php endif; ?>

				<?php if ( ! empty( $settings['title'] ) ) : ?>
					<<?php echo $title_tag . ' ' . $this->get_render_attribute_string( 'title' ); ?>>
						<?php echo $settings['title']; ?>
					</<?php echo $title_tag; ?>>
				<?php endif; ?>

				<?php if ( ! empty( $settings['description'] ) ) : ?>
					<div <?php echo $this->get_render_attribute_string( 'description' ); ?>>
						<?php echo $settings['description']; ?>
					</div>
				<?php endif; ?>

				<?php if ( ! empty( $settings['button'] ) ) : ?>
					<div class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item <?php echo $animation_class; ?>">
					<<?php echo $button_tag . ' ' . $this->get_render_attribute_string( 'button' ); ?>>
						<?php echo $settings['button']; ?>
					</<?php echo $button_tag; ?>>
					</div>
				<?php endif; ?>
			</div>
		<?php endif; ?>
		<?php
		if ( ! empty( $settings['ribbon_title'] ) ) :
			$this->add_render_attribute( 'ribbon-wrapper', 'class', 'elementor-ribbon' );

			if ( ! empty( $settings['ribbon_horizontal_position'] ) ) {
				$this->add_render_attribute( 'ribbon-wrapper', 'class', 'elementor-ribbon-' . $settings['ribbon_horizontal_position'] );
			}
			?>
			<div <?php echo $this->get_render_attribute_string( 'ribbon-wrapper' ); ?>>
				<div class="elementor-ribbon-inner"><?php echo $settings['ribbon_title']; ?></div>
			</div>
		<?php endif; ?>
		</<?php echo $wrapper_tag; ?>>
		<?php
	}

	/**
	 * Render Call to Action widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
			var wrapperTag = 'div',
				buttonTag = 'a',
				contentAnimation = settings.content_animation,
				animationClass,
				btnSizeClass = 'elementor-size-' + settings.button_size,
				printBg = true,
				printContent = true,
				iconHTML = elementor.helpers.renderIcon( view, settings.selected_icon, { 'aria-hidden': true }, 'i' , 'object' ),
				migrated = elementor.helpers.isIconMigrated( settings, 'selected_icon' );

			if ( 'box' === settings.link_click ) {
				wrapperTag = 'a';
				buttonTag = 'span';
				view.addRenderAttribute( 'wrapper', 'href', '#' );
			}

			if ( '' !== settings.bg_image.url ) {
				var bg_image = {
					id: settings.bg_image.id,
					url: settings.bg_image.url,
					size: settings.bg_image_size,
					dimension: settings.bg_image_custom_dimension,
					model: view.getEditModel()
				};

				var bgImageUrl = elementor.imagesManager.getImageUrl( bg_image );
			}

			if ( ! bg_image && 'classic' == settings.skin ) {
				printBg = false;
			}

			if ( ! settings.title && ! settings.description && ! settings.button && 'none' == settings.graphic_element ) {
				printContent = false;
			}

			if ( 'icon' === settings.graphic_element ) {
				var iconWrapperClasses = 'elementor-icon-wrapper';
					iconWrapperClasses += ' elementor-cta__image';
					iconWrapperClasses += ' elementor-view-' + settings.icon_view;
				if ( 'default' !== settings.icon_view ) {
					iconWrapperClasses += ' elementor-shape-' + settings.icon_shape;
				}
				view.addRenderAttribute( 'graphic_element', 'class', iconWrapperClasses );

			} else if ( 'image' === settings.graphic_element && '' !== settings.graphic_image.url ) {
				var image = {
					id: settings.graphic_image.id,
					url: settings.graphic_image.url,
					size: settings.graphic_image_size,
					dimension: settings.graphic_image_custom_dimension,
					model: view.getEditModel()
				};

				var imageUrl = elementor.imagesManager.getImageUrl( image );
				view.addRenderAttribute( 'graphic_element', 'class', 'elementor-cta__image' );
			}

			if ( contentAnimation && 'cover' === settings.skin ) {

				var animationClass = 'elementor-animated-item--' + contentAnimation;

				view.addRenderAttribute( 'title', 'class', animationClass );

				view.addRenderAttribute( 'description', 'class', animationClass );

				view.addRenderAttribute( 'graphic_element', 'class', animationClass );
			}

			view.addRenderAttribute( 'background_image', 'style', 'background-image: url(' + bgImageUrl + ');' );
			view.addRenderAttribute( 'title', 'class', [ 'elementor-cta__title', 'elementor-cta__content-item', 'elementor-content-item' ] );
			view.addRenderAttribute( 'description', 'class', [ 'elementor-cta__description', 'elementor-cta__content-item', 'elementor-content-item' ] );
			view.addRenderAttribute( 'button', 'class', [ 'elementor-cta__button', 'elementor-button', btnSizeClass ] );
			view.addRenderAttribute( 'graphic_element', 'class', [ 'elementor-cta__content-item', 'elementor-content-item' ] );


			view.addInlineEditingAttributes( 'title' );
			view.addInlineEditingAttributes( 'description' );
			view.addInlineEditingAttributes( 'button' );
		#>

		<{{ wrapperTag }} class="elementor-cta" {{{ view.getRenderAttributeString( 'wrapper' ) }}}>

		<# if ( printBg ) { #>
			<div class="elementor-cta__bg-wrapper">
				<div class="elementor-cta__bg elementor-bg" {{{ view.getRenderAttributeString( 'background_image' ) }}}></div>
				<div class="elementor-cta__bg-overlay"></div>
			</div>
		<# } #>
		<# if ( printContent ) { #>
			<div class="elementor-cta__content">
				<# if ( 'image' === settings.graphic_element && '' !== settings.graphic_image.url ) { #>
					<div {{{ view.getRenderAttributeString( 'graphic_element' ) }}}>
						<img src="{{ imageUrl }}">
					</div>
				<#  } else if ( 'icon' === settings.graphic_element && ( settings.icon || settings.selected_icon ) ) { #>
					<div {{{ view.getRenderAttributeString( 'graphic_element' ) }}}>
						<div class="elementor-icon">
							<# if ( iconHTML && iconHTML.rendered && ( ! settings.icon || migrated ) ) { #>
								{{{ iconHTML.value }}}
							<# } else { #>
								<i class="{{ settings.icon }}"></i>
							<# } #>
						</div>
					</div>
				<# } #>
				<# if ( settings.title ) { #>
					<{{ settings.title_tag }} {{{ view.getRenderAttributeString( 'title' ) }}}>{{{ settings.title }}}</{{ settings.title_tag }}>
				<# } #>

				<# if ( settings.description ) { #>
					<div {{{ view.getRenderAttributeString( 'description' ) }}}>{{{ settings.description }}}</div>
				<# } #>

				<# if ( settings.button ) { #>
					<div class="elementor-cta__button-wrapper elementor-cta__content-item elementor-content-item {{ animationClass }}">
						<{{ buttonTag }} href="#" {{{ view.getRenderAttributeString( 'button' ) }}}>{{{ settings.button }}}</{{ buttonTag }}>
					</div>
				<# } #>
			</div>
		<# } #>
		<# if ( settings.ribbon_title ) {
			var ribbonClasses = 'elementor-ribbon';

			if ( settings.ribbon_horizontal_position ) {
				ribbonClasses += ' elementor-ribbon-' + settings.ribbon_horizontal_position;
			} #>
			<div class="{{ ribbonClasses }}">
				<div class="elementor-ribbon-inner">{{{ settings.ribbon_title }}}</div>
			</div>
		<# } #>
		</{{ wrapperTag }}>
		<?php
	}
}
