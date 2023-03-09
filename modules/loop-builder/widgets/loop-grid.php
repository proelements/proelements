<?php
namespace ElementorPro\Modules\LoopBuilder\Widgets;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop_Grid extends Base {

	public function get_name() {
		return 'loop-grid';
	}

	public function get_title() {
		return esc_html__( 'Loop Grid', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'loop', 'dynamic', 'listing', 'archive', 'blog', 'repeater', 'grid', 'products', 'posts', 'portfolio', 'cpt', 'query', 'custom post type' ];
	}

	public function get_icon() {
		return 'eicon-loop-builder';
	}

	protected function register_layout_section() {
		parent::register_layout_section();

		$this->start_injection( [
			'of' => 'template_id',
		] );

		$this->add_responsive_control(
			'columns',
			[
				'label' => esc_html__( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => '3',
				'tablet_default' => '2',
				'mobile_default' => '1',
				'min' => 1,
				'max' => 12,
				'prefix_class' => 'elementor-grid%s-',
				'frontend_available' => true,
				'separator' => 'before',
				'condition' => [
					'template_id!' => '',
				],
			]
		);

		$this->add_control(
			'posts_per_page',
			[
				'label' => esc_html__( 'Items Per Page', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 6,
				'min' => 1,
				'condition' => [
					'template_id!' => '',
				],
			]
		);

		$this->add_control(
			'masonry',
			[
				'label' => esc_html__( 'Masonry', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'condition' => [
					'columns!' => 1,
					'template_id!' => '',
				],
				'render_type' => 'ui',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'equal_height',
			[
				'label' => esc_html__( 'Equal height', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'condition' => [
					'columns!' => 1,
					'template_id!' => '',
					'masonry' => '',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-loop-container' => 'grid-auto-rows: 1fr',
					// `.elementor-section-wrap` exists only when editing the loop template.
					'{{WRAPPER}} .e-loop-item > .elementor-section, {{WRAPPER}} .e-loop-item > .elementor-section > .elementor-container, {{WRAPPER}} .e-loop-item > .e-con, {{WRAPPER}} .e-loop-item .elementor-section-wrap  > .e-con' => 'height: 100%',
				],
			]
		);

		$this->end_injection();
	}

	protected function register_design_layout_controls() {
		$this->start_controls_section(
			'section_design_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'column_gap',
			[
				'label' => esc_html__( 'Gap between columns', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--grid-column-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'row_gap',
			[
				'label' => esc_html__( 'Gap between rows', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'frontend_available' => true,
				'selectors' => [
					'{{WRAPPER}}' => '--grid-row-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}
}
