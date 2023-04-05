<?php
namespace ElementorPro\Modules\LoopBuilder\Widgets;

use Elementor\Controls_Manager;
use Elementor\Repeater;
use Elementor\Core\Base\Document;
use ElementorPro\Modules\QueryControl\Controls\Template_Query;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Plugin;

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
				'selectors' => [
					'{{WRAPPER}}' => '--grid-columns: {{VALUE}}',
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

		$this->add_control(
			'alternate_template',
			[
				'label' => esc_html__( 'Apply an alternate template', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
				'render_type' => 'template',
				'frontend_available' => true,
				'separator' => 'before',
			]
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'template_id',
			[
				'label' => esc_html__( 'Choose a template', 'elementor-pro' ),
				'type' => Template_Query::CONTROL_ID,
				'label_block' => true,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_LIBRARY_TEMPLATE,
					'query' => [
						'post_status' => Document::STATUS_PUBLISH,
						'meta_query' => [
							[
								'key' => Document::TYPE_META_KEY,
								'value' => LoopDocument::get_type(),
								'compare' => 'IN',
							],
						],
					],
				],
				'actions' => [
					'new' => [
						'visible' => true,
						'document_config' => [
							'type' => LoopDocument::get_type(),
						],
						'after_action' => 'redirect',
					],
					'edit' => [
						'visible' => true,
						'after_action' => 'redirect',
					],
				],
				'frontend_available' => true,
			]
		);

		$repeater->add_control(
			'repeat_template',
			[
				'label' => esc_html__( 'Position in grid', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'condition' => [
					'template_id!' => '',
				],
			]
		);

		$repeater->add_control(
			'repeat_template_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: Repeat the alternate template once every chosen number of items.', 'elementor-pro' ),
				'content_classes' => 'elementor-descriptor',
				'condition' => [
					'template_id!' => '',
				],
			]
		);

		$repeater->add_control(
			'show_once',
			[
				'label' => esc_html__( 'Apply Once', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'condition' => [
					'template_id!' => '',
				],
				'render_type' => 'template',
			]
		);

		$repeater->add_responsive_control(
			'column_span',
			[
				'label' => esc_html__( 'Column Span', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '1',
				'options' => [
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
					'7' => '7',
					'8' => '8',
					'9' => '9',
					'10' => '10',
					'11' => '11',
					'12' => '12',
				],
				'condition' => [
					'template_id!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'grid-column: span min( {{VALUE}}, var(--grid-columns) );',
				],
			]
		);

		$repeater->add_control(
			'column_span_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: Item will span across a number of columns.', 'elementor-pro' ),
				'content_classes' => 'elementor-descriptor',
			]
		);

		$repeater->add_control(
			'column_span_masonry_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: The Masonry option combined with Column Span might cause unexpected results and break the layout.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
				'condition' => [
					'column_span!' => '1',
				],
			]
		);

		$this->add_control(
			'alternate_templates',
			[
				'label' => esc_html__( 'Templates', 'elementor-pro' ),
				'type' => Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'title_field' => 'Alternate Template',
				'condition' => [
					'alternate_template' => 'yes',
				],
				'default' => [
					[
						'template_id' => null,
					],
				],
			]
		);

		// Location for the Edit handle.
		$this->add_control(
			'edit_handle_selector',
			[
				'label' => esc_html__( 'Edit Handle Selector', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'default' => '[data-elementor-type="loop-item"]',
				'render_type' => 'none',
				'frontend_available' => true,
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
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
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
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
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
