<?php

namespace ElementorPro\Modules\Search\Widgets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Icons_Manager;
use Elementor\Utils;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Query;
use ElementorPro\Modules\QueryControl\Module as Module_Query;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\QueryControl\Controls\Template_Query;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;
use Elementor\Core\Base\Document;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Css_Trait;

class Search extends Base_Widget {

	use Loop_Css_Trait;

	protected $query = null;

	protected $search_term = '';

	private $element_attribute_ids = [
		'search_wrapper' => 'search_wrapper',
		'form' => 'form',
		'label' => 'label',
		'label_text' => 'label_text',
		'input' => 'input',
		'input_wrapper' => 'input_wrapper',
		'submit_button' => 'submit_button',
		'submit_text' => 'submit_text',
		'results_wrapper' => 'results_wrapper',
		'query_vars' => 'query_vars',
	];

	public function set_search_term( string $search_term ) {
		$this->search_term = $search_term;
	}

	public function get_name() {
		return 'search';
	}

	public function get_title() {
		return esc_html__( 'Search', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-site-search';
	}

	public function get_keywords() {
		return [ 'search' ];
	}

	public function get_categories() {
		return [ 'pro-elements' ];
	}

	public function get_query() {
		if ( null === $this->query ) {
			$this->query_posts();
		}

		return $this->query;
	}

	public function get_query_args() {
		/** @var Module_Query $elementor_query */
		$elementor_query = Module_Query::instance();
		$settings = $this->get_settings_for_display();
		$query_args = [
			'posts_per_page' => $settings['number_of_items'] ?? -1,
		];

		if ( ! empty( $this->search_term ) ) {
			$query_args['s'] = $this->search_term;
		}

		return $elementor_query->get_query( $this, $this->get_property_key_prefix(), $query_args, [] );
	}

	public function get_query_args_for_results_page() {
		// Fetch the initial query arguments
		$query = $this->get_query_args()->query;

		// Define the keys to be removed
		$keys_to_remove = [ 'orderby', 'order' ];

		// Use the Collection class to manipulate the query array
		$query_collection = new Collection( $query );

		// Remove the specified keys and set the 'posts_per_page' value
		return $query_collection
			->except( $keys_to_remove )
			->merge( [ 'posts_per_page' => -1 ] )
			->all();
	}

	protected function register_controls() {
		$this->register_content_tab();
		$this->register_style_tab();
	}

	protected function register_content_tab() {
		$this->register_content_section_search_field();
		$this->register_content_section_results();
		$this->register_content_section_query();
	}

	protected function register_content_section_search_field() {
		$this->start_controls_section(
			'content_section_search_field',
			[
				'label' => esc_html__( 'Search Field', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'heading_input',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Input', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'search_input_placeholder_text',
			[
				'label' => esc_html__( 'Placeholder', 'elementor-pro' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Type to start searching...', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
			]
		);

		$this->add_control(
			'icon_search',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->add_control(
			'autocomplete',
			[
				'type' => Controls_Manager::SWITCHER,
				'label' => esc_html__( 'Autocomplete', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'separator' => 'before',
				'return_value' => 'yes',
			]
		);

		$this->add_control(
			'heading_clear',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Clear', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'icon_clear',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'skin_settings' => [
					'inline' => [
						'icon' => [
							'icon' => 'eicon-close',
						],
					],
				],
				'label_block' => false,
				'default' => [
					'value' => 'fas fa-times',
					'library' => 'fa-solid',
				],
			]
		);

		$this->add_control(
			'heading_submit',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Submit', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'submit_trigger',
			[
				'label' => esc_html__( 'Trigger', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'click_submit' => esc_html__( 'Submit button', 'elementor-pro' ),
					'key_enter' => esc_html__( 'Enter key', 'elementor-pro' ),
					'both' => esc_html__( 'Both', 'elementor-pro' ),
				],
				'default' => 'click_submit',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'submit_button_text',
			[
				'label' => esc_html__( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Search', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Search', 'elementor-pro' ),
				'condition' => [
					'submit_trigger!' => 'key_enter',
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
			'icon_submit',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'condition' => [
					'submit_trigger!' => 'key_enter',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_content_section_results() {
		$this->start_controls_section(
			'content_section_results',
			[
				'label' => esc_html__( 'Results', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'live_results',
			[
				'label' => esc_html__( 'Live Results', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'default' => '',
				'frontend_available' => true,
			]
		);

		$this->add_control(
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
						'visible' => false,
					],
					'edit' => [
						'visible' => true,
						'after_action' => 'redirect',
					],
				],
				'condition' => [
					'live_results' => 'yes',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'minimum_search_characters',
			[
				'label' => esc_html__( 'Minimum search characters', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 3,
				'min' => 1,
				'condition' => [
					'live_results' => 'yes',
					'template_id!' => '',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'number_of_columns',
			[
				'label' => esc_html__( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 1,
				'min' => 1,
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-columns: {{VALUE}}',
				],
				'condition' => [
					'live_results' => 'yes',
					'template_id!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'number_of_items',
			[
				'label' => esc_html__( 'Items', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 6,
				'min' => 1,
				'condition' => [
					'live_results' => 'yes',
					'template_id!' => '',
				],
			]
		);

		$this->add_control(
			'equal_height',
			[
				'label' => esc_html__( 'Equal Height', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'default' => '',
				'condition' => [
					'live_results' => 'yes',
					'template_id!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-grid-auto-rows: 1fr; --e-search-loop-item-equal-height: 100%',
				],
			]
		);

		$this->add_control(
			'enable_nothing_found_message',
			[
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'default' => 'yes',
				'condition' => [
					'live_results' => 'yes',
					'template_id!' => '',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'nothing_found_message_description',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'This appears when the search yields no results.', 'elementor-pro' ),
				'content_classes' => 'elementor-descriptor',
				'condition' => $this->get_nothing_found_conditions(),
			]
		);

		$this->add_control(
			'nothing_found_message_text',
			[
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'condition' => $this->get_nothing_found_conditions(),
				'default' => esc_html__( 'It seems we can’t find what you’re looking for.', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'nothing_found_message_html_tag',
			[
				'label' => esc_html__( 'HTML Tag', 'elementor-pro' ),
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
				'default' => 'div',
				'condition' => $this->get_nothing_found_conditions(),
			]
		);

		$this->end_controls_section();
	}

	protected function register_content_section_query() {
		$this->start_controls_section(
			'content_section_query',
			[
				'label' => esc_html__( 'Query', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Query::get_type(),
			[
				'name' => 'search_query',
				'presets' => [ 'full' ],
				'fields_options' => [
					'post_type' => [
						'default' => 'any',
						'options' => $this->get_supported_post_types(),
					],
					'exclude' => [
						'options' => [
							'terms' => esc_html__( 'Term', 'elementor-pro' ),
							'authors' => esc_html__( 'Author', 'elementor-pro' ),
							'manual_selection' => esc_html__( 'Manual Selection', 'elementor-pro' ),
						],
					],
				],
				'exclude' => [
					'avoid_duplicates',
					'offset',
					'posts_per_page',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function get_nothing_found_conditions() {
		return [
			'enable_nothing_found_message' => 'yes',
			'live_results' => 'yes',
			'template_id!' => '',
		];
	}

	protected function register_style_tab() {
		$this->register_style_section_search_field();
		$this->register_style_section_clear();
		$this->register_style_section_submit();
		$this->register_style_section_results();
		$this->register_style_section_nothing_found_message();
	}

	protected function register_style_section_search_field() {
		$this->start_controls_section(
			'section_search_field_style',
			[
				'label' => esc_html__( 'Search Field', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'search_field_typography',
				'selector' => '{{WRAPPER}} .e-search-input',
			]
		);

		$this->add_control(
			'placeholder_color',
			[
				'label' => esc_html__( 'Placeholder Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-placeholder-color: {{VALUE}};',
				],
			]
		);

		$this->start_controls_tabs( 'search_field_tabs' );

		$this->start_controls_tab(
			'search_field_tab_input_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->register_search_field_style_tabs( 'normal' );

		$this->end_controls_tab();

		$this->start_controls_tab(
			'search_field_tab_input_focus',
			[
				'label' => esc_html__( 'Focus', 'elementor-pro' ),
			]
		);

		$this->register_search_field_style_tabs( 'focus' );

		$this->add_control(
			'search_field_search_input_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 's',
				],
				'range' => [
					's' => [
						'max' => 5,
					],
					'ms' => [
						'max' => 5000,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-input-transition: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'search_field_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .e-search-input' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'search_field_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-input-padding-block-start: {{TOP}}{{UNIT}}; --e-search-input-padding-inline-start: {{LEFT}}{{UNIT}}; --e-search-input-padding-block-end: {{BOTTOM}}{{UNIT}}; --e-search-input-padding-inline-end: {{RIGHT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'search_field_icon_label_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-icon-label-size: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
				'condition' => [
					'icon_search[value]!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'search_field_icon_gap',
			[
				'label' => esc_html__( 'Gap between text and icon', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw' ],
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
					'vw' => [
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-input-gap: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'icon_search[value]!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'search_field_submit_gap',
			[
				'label' => esc_html__( 'Gap between input and button', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw' ],
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
					'vw' => [
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-submit-margin-inline-start: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_search_field_style_tabs( $tab_id ) {
		$is_normal = 'normal' === $tab_id;
		$selector_suffix = $is_normal ? '' : '.e-focus';

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => "search_field_background_$tab_id",
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => "{{WRAPPER}}$selector_suffix .e-search-input",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_control(
			"search_field_input_text_color_$tab_id",
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					"{{WRAPPER}}$selector_suffix" => '--e-search-input-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			"search_field_icon_search_normal_color_$tab_id",
			[
				'label' => esc_html__( 'Icon Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}}$selector_suffix" => '--e-search-icon-label-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => "search_field_border_$tab_id",
				'selector' => "{{WRAPPER}}$selector_suffix .e-search-input",
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => "search_field_box_shadow__$tab_id",
				'selector' => "{{WRAPPER}}$selector_suffix .e-search-input",
			]
		);
	}

	protected function register_style_section_clear() {
		$this->start_controls_section(
			'style_section_clear',
			[
				'label' => esc_html__( 'Clear', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'icon_clear[value]!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'icon_clear_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
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
					'vw' => [
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-icon-clear-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs(
			'icon_clear_color_tabs',
		);

		$this->start_controls_tab(
			'icon_clear_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'icon_clear_normal_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-icon-clear-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'icon_clear_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'icon_clear_hover_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-search-input-wrapper > svg:hover' => '--e-search-icon-clear-color: {{VALUE}};',
					'{{WRAPPER}} .e-search-input-wrapper > i:hover' => '--e-search-icon-clear-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'icon_clear_hover_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 's',
				],
				'range' => [
					's' => [
						'max' => 5,
					],
					'ms' => [
						'max' => 5000,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-icon-clear-transition: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	protected function register_style_section_submit() {
		$this->start_controls_section(
			'style_section_submit',
			[
				'label' => esc_html__( 'Submit Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'submit_trigger!' => 'key_enter',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'submit_typography',
				'selector' => '{{WRAPPER}} .e-search-submit span',
			]
		);

		$this->add_responsive_control(
			'icon_submit_position',
			[
				'label' => esc_html__( 'Icon Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start (before)', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'end' => [
						'title' => esc_html__( 'End (after)', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'condition' => [
					'icon_submit[value]!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}}',
				],
				'selectors_dictionary' => [
					'start' => '--e-search-submit-button-flex-direction: row; --e-search-submit-icon-margin-inline-start: 0px; --e-search-submit-icon-margin-inline-end: var(--e-search-submit-icon-gap);',
					'end' => '--e-search-submit-button-flex-direction: row-reverse; --e-search-submit-icon-margin-inline-start: var(--e-search-submit-icon-gap); --e-search-submit-icon-margin-inline-end: 0px;',
				],
			]
		);

		$this->add_responsive_control(
			'icon_submit_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
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
					'vw' => [
						'max' => 50,
					],
				],
				'condition' => [
					'icon_submit[value]!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-icon-submit-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'icon_submit_gap',
			[
				'label' => esc_html__( 'Gap between text and icon', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
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
					'vw' => [
						'max' => 50,
					],
				],
				'condition' => [
					'icon_submit[value]!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-submit-icon-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs(
			'submit_style_tabs',
		);

		$this->start_controls_tab(
			'submit_style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->register_submit_style_tabs( 'normal' );

		$this->end_controls_tab();

		$this->start_controls_tab(
			'submit_style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->register_submit_style_tabs( 'hover' );

		$this->add_control(
			'submit_hover_animation',
			[
				'label' => esc_html__( 'Hover animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->add_control(
			'submit_hover_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 's',
				],
				'range' => [
					's' => [
						'max' => 5,
					],
					'ms' => [
						'max' => 5000,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-submit-hover-transition: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'submit_border_radius',
			[
				'label' => esc_html__( 'Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-submit-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'submit_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-submit-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Registers the controls of the submit section style for normal/hover state tabs.
	 *
	 * @param string $tab_id Accepts 'normal' or 'hover' as value.
	 */
	protected function register_submit_style_tabs( $tab_id ) {
		$is_normal = 'normal' === $tab_id;
		$state_suffix = $is_normal ? '' : ":$tab_id";
		$selector_suffix = $is_normal ? '' : " .e-search-submit$state_suffix";

		$this->add_control(
			"submit_text_color_$tab_id",
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					"{{WRAPPER}}$selector_suffix" => '--e-search-submit-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			"submit_icon_color_$tab_id",
			[
				'label' => esc_html__( 'Icon Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'condition' => [
					'icon_submit[value]!' => '',
				],
				'selectors' => [
					"{{WRAPPER}}$selector_suffix" => '--e-search-icon-submit-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => "submit_background_$tab_id",
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => "{{WRAPPER}} .e-search-submit$state_suffix",
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => "submit_border_$tab_id",
				'selector' => "{{WRAPPER}} .e-search-submit$state_suffix",
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => "submit_box_shadow_$tab_id",
				'selector' => "{{WRAPPER}} .e-search-submit$state_suffix",
			]
		);
	}

	protected function register_style_section_results() {
		$this->start_controls_section(
			'style_section_results',
			[
				'label' => esc_html__( 'Results', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'live_results' => 'yes',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'results_background',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} .e-search-results',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'results_border_type',
				'selector' => '{{WRAPPER}} .e-search-results > div',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'results_box_shadow',
				'selector' => '{{WRAPPER}} .e-search-results > div',
			]
		);

		$this->add_responsive_control(
			'results_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'results_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'results_distance_from_search_field',
			[
				'label' => esc_html__( 'Distance from search field', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
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
					'vw' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-input-and-results-gap: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'results_is_custom_width',
			[
				'label' => esc_html__( 'Custom Width', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'On', 'elementor-pro' ),
				'label_on' => esc_html__( 'Off', 'elementor-pro' ),
				'default' => '',
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'results_custom_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
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
					'{{WRAPPER}}' => '--e-search-results-width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'results_is_custom_width' => 'yes',
				],
			]
		);

		$this->add_responsive_control(
			'results_max_height',
			[
				'label' => esc_html__( 'Max height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 500,
					],
					'%' => [
						'max' => 50,
					],
					'em' => [
						'max' => 50,
					],
					'rem' => [
						'max' => 50,
					],
					'vw' => [
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-max-height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'results_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-pro' ),
						'icon' => 'eicon-h-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'toggle' => true,
				'condition' => [
					'results_is_custom_width' => 'yes',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}}',
				],
				'selectors_dictionary' => [
					'start' => '--e-search-results-inset-inline-start: 0; --e-search-results-inset-inline-end: initial; --e-search-results-transform: initial;',
					'center' => '--e-search-results-inset-inline-start: 50%; --e-search-results-inset-inline-end: initial; --e-search-results-transform: translateX(-50%);',
					'end' => '--e-search-results-inset-inline-start: initial; --e-search-results-inset-inline-end: 0; --e-search-results-transform: initial;',
				],
			]
		);

		$this->add_responsive_control(
			'search_result_column_gap',
			[
				'label' => esc_html__( 'Gap between columns', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-column-gap: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'search_result_row_gap',
			[
				'label' => esc_html__( 'Gap between rows', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-results-row-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_style_section_nothing_found_message() {
		$this->start_controls_section(
			'style_section_nothing_found_message',
			[
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => $this->get_nothing_found_conditions(),
			]
		);

		$this->add_responsive_control(
			'nothing_found_message_space_from_top',
			[
				'label' => esc_html__( 'Space from top', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 200,
					],
					'em' => [
						'max' => 20,
					],
					'rem' => [
						'max' => 20,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-nothing-found-padding-block-start: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'nothing_found_message_space_from_bottom',
			[
				'label' => esc_html__( 'Space from bottom', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 200,
					],
					'em' => [
						'max' => 20,
					],
					'rem' => [
						'max' => 20,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-nothing-found-padding-block-end: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'nothing_found_message_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-nothing-found-message-alignment: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'nothing_found_message_typography',
				'selector' => '{{WRAPPER}} .e-search-nothing-found-message',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'nothing_found_message_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-search-nothing-found-message-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'nothing_found_message_text_shadow',
				'selector' => '{{WRAPPER}} .e-search-nothing-found-message',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'nothing_found_message_text_stroke',
				'selector' => '{{WRAPPER}} .e-search-nothing-found-message',
			]
		);

		$this->end_controls_section();
	}

	public function render_results() {
		$this->query_posts();

		/** @var \WP_Query $query */
		$query = $this->get_query();

		if ( ! $query->found_posts ) {
			$this->handle_no_posts_found();
			return;
		}

		while ( $query->have_posts() ) {
			$query->the_post();

			$this->render_post();
		}

		wp_reset_postdata();
	}

	protected function handle_no_posts_found() {
		$settings = $this->get_settings_for_display();

		if ( 'yes' !== $settings['enable_nothing_found_message'] ) {
			return;
		}
		$nothing_found_message_html_tag = Utils::validate_html_tag( $settings['nothing_found_message_html_tag'] );
		?>
			<<?php Utils::print_validated_html_tag( $nothing_found_message_html_tag ); ?> class="e-search-nothing-found-message">
				<?php echo wp_kses_post( $settings['nothing_found_message_text'] ); ?>
			</<?php Utils::print_validated_html_tag( $nothing_found_message_html_tag ); ?>>
		<?php
	}

	protected function render_post() {
		$settings = $this->get_settings_for_display();
		$template_id = $settings['template_id'] ?? 0;
		$post_id = get_the_ID();

		/** @var LoopDocument $document */
		$document = Plugin::elementor()->documents->get( $template_id );

		if ( ! $document ) {
			return;
		}

		$this->print_dynamic_css( $post_id, $template_id );
		$document->print_content();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$attribute_ids = $this->element_attribute_ids;
		$this->add_render_attibutes();
		?>
		<search <?php $this->print_render_attribute_string( $attribute_ids['search_wrapper'] ); ?>>
			<form <?php $this->print_render_attribute_string( $attribute_ids['form'] ); ?>>

				<?php do_action( 'elementor_pro/search/before_input', $this ); ?>

				<label <?php $this->print_render_attribute_string( $attribute_ids['label'] ); ?>>
					<span <?php $this->print_render_attribute_string( $attribute_ids['label_text'] ); ?>>
						<?php esc_html_e( 'Search', 'elementor-pro' ); ?>
					</span>
					<?php $this->maybe_render_icon( 'icon_search' ); ?>
				</label>

				<div <?php $this->print_render_attribute_string( $attribute_ids['input_wrapper'] ); ?>>
					<input <?php $this->print_render_attribute_string( $attribute_ids['input'] ); ?>>
					<?php $this->maybe_render_icon( 'icon_clear' ); ?>
					<output <?php $this->print_render_attribute_string( $attribute_ids['results_wrapper'] ); ?>>
					</output>
				</div>

				<?php do_action( 'elementor_pro/search/after_input', $this ); ?>

				<button <?php $this->print_render_attribute_string( $attribute_ids['submit_button'] ); ?>>
					<?php $this->maybe_render_icon( 'icon_submit' ); ?>

					<span <?php $this->print_render_attribute_string( $attribute_ids['submit_text'] ); ?>>
						<?php echo esc_html( $settings['submit_button_text'] ); ?>
					</span>
				</button>
				<input <?php $this->print_render_attribute_string( $attribute_ids['query_vars'] ); ?>>
			</form>
		</search>
		<?php
	}

	public function query_posts() {
		$this->query = $this->get_query_args();
	}

	public function get_query_name() {
		return $this->get_name();
	}

	private function add_render_attibutes() {
		$id = $this->get_id();
		$settings = $this->get_settings_for_display();
		$screen_only_class = 'elementor-screen-only';

		$this->add_render_attribute( $this->element_attribute_ids['search_wrapper'], [
			'class' => [ 'e-search', 'hidden' ],
			'role' => 'search',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['form'], [
			'class' => 'e-search-form',
			'action' => esc_url( home_url() ),
			'method' => 'get',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['label'], [
			'class' => 'e-search-label',
			'for' => "search-$id",
		] );

		$this->add_render_attribute( $this->element_attribute_ids['label_text'], [
			'class' => $screen_only_class,
		] );

		$this->add_render_attribute( $this->element_attribute_ids['input_wrapper'], [
			'class' => 'e-search-input-wrapper',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['input'], [
			'id' => "search-$id",
			'placeholder' => esc_attr( $settings['search_input_placeholder_text'] ),
			'class' => 'e-search-input',
			'type' => 'search',
			'name' => 's',
			'value' => '',
			'autocomplete' => $this->get_autocomplete_state(),
			'role' => 'combobox',
			'aria-autocomplete' => 'list',
			'aria-expanded' => 'false',
			'aria-controls' => "results-$id",
			'aria-haspopup' => 'listbox',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['submit_button'], [
			'class' => [
				'e-search-submit',
				$this->is_submit_button_shown() ? '' : $screen_only_class,
				$settings['submit_hover_animation'] ? 'elementor-animation-' . $settings['submit_hover_animation'] : '',
			],
			'type' => 'submit',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['submit_text'], [
			'class' => $this->is_submit_button_shown() ? '' : $screen_only_class,
		] );

		$this->add_render_attribute( $this->element_attribute_ids['results_wrapper'], [
			'id' => "results-$id",
			'class' => 'e-search-results',
			'aria-live' => 'polite',
			'aria-atomic' => 'true',
			'aria-label' => 'Results for search',
			'tabindex' => '0',
		] );

		$this->add_render_attribute( $this->element_attribute_ids['query_vars'], [
			'type' => 'hidden',
			'name' => 'e_search_query',
			'value' => wp_json_encode( $this->get_query_args_for_results_page() ),
		] );
	}

	private function is_submit_button_shown() {
		return 'key_enter' !== $this->get_settings_for_display( 'submit_trigger' );
	}

	private function get_autocomplete_state() {
		return 'yes' !== $this->get_settings_for_display( 'autocomplete' ) ? 'off' : 'on';
	}

	private function maybe_render_icon( $target ) {
		$icon_settings = $this->get_settings_for_display( $target ) ?? [
			'library' => '',
			'value' => '',
		];

		Icons_Manager::render_icon(
			$icon_settings ?? [ '', '' ],
			[ 'aria-hidden' => 'true' ],
			'i'
		);
	}

	private function get_supported_post_types() {
		$supported_post_types = [
			'any' => esc_html__( 'All', 'elementor-pro' ),
			'product' => esc_html__( 'Products', 'elementor-pro' ),
			'post' => esc_html__( 'Posts', 'elementor-pro' ),
			'page' => esc_html__( 'Pages', 'elementor-pro' ),
		];

		$cpts = $this->get_supported_cpts();

		return array_merge( $supported_post_types, $cpts );
	}

	private function get_supported_cpts() {
		$cpts = new Collection( get_post_types(
			[
				'public' => true,
				'_builtin' => false,
			],
			'objects'
		) );

		return $cpts->except( [ 'product', 'related_products', 'elementor_library' ] )
			->map_with_keys( function ( $item, $post_type ) {
				return [ $post_type => $item->label ?? null ];
			} )
			->filter()
			->all();
	}

	private function get_property_key_prefix() {
		return $this->get_query_name() . '_query';
	}
}
