<?php
namespace ElementorPro\Modules\LoopBuilder\Widgets;

use Elementor\Icons_Manager;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop_Carousel extends Base {

	public function get_name() {
		return 'loop-carousel';
	}

	public function get_title() {
		return esc_html__( 'Loop Carousel', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'loop', 'carousel', 'dynamic', 'listing', 'archive', 'blog', 'repeater', 'grid', 'products', 'posts', 'portfolio', 'cpt ', 'query', 'custom post type' ];
	}

	public function get_icon() {
		return 'eicon-carousel-loop';
	}

	protected function get_initial_config() {
		$config = parent::get_initial_config();

		$config['add_parent_render_footer'] = false;
		$config['edit_handle_selector'] = '.elementor-widget-container';

		return $config;
	}

	public function register_pagination_section_controls() {
		$this->start_controls_section(
			'section_carousel_pagination',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'condition' => [
					'template_id!' => '',
				],
			]
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

	public function register_settings_section_controls() {
		$this->start_controls_section(
			'section_carousel_settings',
			[
				'label' => esc_html__( 'Settings', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'autoplay',
			[
				'label' => esc_html__( 'Autoplay', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'options' => [
					'yes' => esc_html__( 'On', 'elementor-pro' ),
					'no' => esc_html__( 'Off', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'autoplay_speed',
			[
				'label' => esc_html__( 'Scroll Speed (ms)', 'elementor-pro' ),
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

		// Loop requires a re-render so no 'render_type = none'
		$this->add_control(
			'infinite',
			[
				'label' => esc_html__( 'Infinite scroll', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'options' => [
					'yes' => esc_html__( 'On', 'elementor-pro' ),
					'no' => esc_html__( 'Off', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'speed',
			[
				'label' => esc_html__( 'Transition Duration (ms)', 'elementor-pro' ),
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
				'default' => 'ltr',
				'options' => [
					'ltr' => esc_html__( 'Left', 'elementor-pro' ),
					'rtl' => esc_html__( 'Right', 'elementor-pro' ),
				],
			]
		);

		$this->end_controls_section();
	}

	public function register_navigation_section_controls() {
		$this->start_controls_section(
			'section_navigation_settings',
			[
				'label' => esc_html__( 'Navigation', 'elementor-pro' ),
				'condition' => [
					'template_id!' => '',
				],
			]
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

	public function register_design_layout_controls() {
		$this->start_controls_section(
			'section_layout_style',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'image_spacing_custom',
			[
				'label' => esc_html__( 'Gap between slides', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 400,
					],
				],
				'default' => [
					'size' => 10,
				],
				'frontend_available' => true,
				'render_type' => 'none',
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-slides-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_design_navigation_controls() {
		$this->start_controls_section(
			'section_design_navigation',
			[
				'label' => esc_html__( 'Navigation', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'arrows' => 'yes',
					'template_id!' => '',
				],
			]
		);

		$this->add_control(
			'heading_icons',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Icons', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'arrows_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%', 'rem' ],
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
					'{{WRAPPER}}' => '--arrow-size: {{SIZE}}{{UNIT}};',
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
					'{{WRAPPER}}' => '--arrow-normal-color: {{VALUE}};',
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
					'{{WRAPPER}}' => '--arrow-hover-color: {{VALUE}};',
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

	public function register_design_pagination_controls() {
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
				'size_units' => [ 'px', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 5,
						'max' => 50,
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
					'{{WRAPPER}}' => '--dots-size: {{SIZE}}{{UNIT}};',
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
					'{{WRAPPER}}' => '--dots-normal-color: {{VALUE}};',
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
					'{{WRAPPER}}' => '--dots-hover-color: {{VALUE}};',
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
				'selectors_dictionary' => [
					'inside' => '0',
					'outside' => '30px',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-padding-bottom: {{VALUE}};',
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
				'selector' => '{{WRAPPER}} .swiper-pagination-fraction',
				'condition' => [
					'pagination' => 'fraction',
				],
			]
		);

		$this->add_control(
			'fraction_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--fraction-color: {{VALUE}};',
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
				'selectors_dictionary' => [
					'inside' => '0',
					'outside' => '30px',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-padding-bottom: {{VALUE}};',
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
				'size_units' => [ 'px', '%', 'vh' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'vh' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--progressbar-height: {{SIZE}}{{UNIT}};',
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
					'{{WRAPPER}}' => '--progressbar-normal-color: {{VALUE}};',
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
					'{{WRAPPER}}' => '--progressbar-hover-color: {{VALUE}};',
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

	public function render_loop_header() {
		?>
		<div class="swiper-wrapper">
		<?php
	}

	public function render_loop_footer() {
		$settings = $this->get_settings_for_display();
		?>
		</div>
		<?php if ( $settings['pagination'] ) { ?>
			<div class="swiper-pagination"></div>
		<?php } ?>

		<?php if ( 'yes' === $settings['arrows'] ) { ?>
			<div class="elementor-swiper-button elementor-swiper-button-prev">
				<?php $this->render_swiper_button( 'previous' ); ?>
				<span class="elementor-screen-only"><?php echo esc_html__( 'Previous', 'elementor-pro' ); ?></span>
			</div>
			<div class="elementor-swiper-button elementor-swiper-button-next">
				<?php $this->render_swiper_button( 'next' ); ?>
				<span class="elementor-screen-only"><?php echo esc_html__( 'Next', 'elementor-pro' ); ?></span>
			</div>
		<?php } ?>

		</div>
		<?php
	}

	private function render_swiper_button( $type ) {
		$icon_settings = $this->get_settings_for_display( 'navigation_' . $type . '_icon' );

		if ( empty( $icon_settings['value'] ) ) {
			return;
		}

		Icons_Manager::render_icon( $icon_settings, [ 'aria-hidden' => 'true' ] );
	}

	public function add_swiper_slide_class_to_loop_item( $attributes, $document ) {
		if ( LoopDocument::DOCUMENT_TYPE === $document::get_type() ) {
			$attributes['class'] .= ' swiper-slide';
		}

		return $attributes;
	}

	public function add_loop_header_attributes( $render_attributes ) {
		$settings = $this->get_settings_for_display();

		if ( ! empty( $settings['direction'] ) ) {
			$render_attributes['dir'] = $settings['direction'];
		}

		return $render_attributes;
	}


	public function get_loop_header_widget_classes(): array {
		$swiper_class = Plugin::elementor()->experiments->is_feature_active( 'e_swiper_latest' ) ? 'swiper' : 'swiper-container';
		return [ $swiper_class ];
	}

	public function before_skin_render() {
		add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_swiper_slide_class_to_loop_item' ], 10, 2 );
		add_filter( 'elementor/skin/loop_header_attributes', [ $this, 'add_loop_header_attributes' ], 10, 1 );
	}

	public function after_skin_render() {
		remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_swiper_slide_class_to_loop_item' ] );
		remove_filter( 'elementor/skin/loop_header_attributes', [ $this, 'add_loop_header_attributes' ] );
	}

	protected function register_layout_section() {
		parent::register_layout_section();

		$this->start_injection( [
			'of' => 'template_id',
		] );

		$this->add_control(
			'posts_per_page',
			[
				'label' => esc_html__( 'Number of slides', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 6,
				'min' => 1,
				'condition' => [
					'template_id!' => '',
				],
				'separator' => 'before',
			]
		);

		$slides_to_show = range( 1, 8 );
		$slides_to_show = array_combine( $slides_to_show, $slides_to_show );

		$this->add_responsive_control(
			'slides_to_show',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Slides to display', 'elementor-pro' ),
				'options' => [ '' => esc_html__( 'Default', 'elementor-pro' ) ] + $slides_to_show,
				'default' => '3',
				'widescreen_default' => '3',
				'laptop_default' => '3',
				'tablet_extra_default' => '3',
				'tablet_default' => '2',
				'mobile_extra_default' => '2',
				'mobile_default' => '1',
				'inherit_placeholders' => false,
				'frontend_available' => true,
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
				'render_type' => 'template',
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-slides-to-display: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'slides_to_scroll',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Slides on Scroll', 'elementor-pro' ),
				'options' => [ '' => esc_html__( 'Default', 'elementor-pro' ) ] + $slides_to_show,
				'inherit_placeholders' => false,
				'default' => '1',
				'frontend_available' => true,
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
			]
		);

		$this->add_control(
			'equal_height',
			[
				'label' => esc_html__( 'Equal height', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'default' => 'yes',
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} .swiper-slide > .elementor-element' => 'height: 100%',
				],
			]
		);

		$this->end_injection();
	}
}
