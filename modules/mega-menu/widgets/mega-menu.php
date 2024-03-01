<?php
namespace ElementorPro\Modules\MegaMenu\Widgets;

use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Plugin;
use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Modules\NestedElements\Base\Widget_Nested_Base;
use Elementor\Modules\NestedElements\Controls\Control_Nested_Repeater;
use Elementor\Icons_Manager;
use Elementor\Repeater;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Typography;
use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use ElementorPro\Modules\MegaMenu\Traits\Url_Helper_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mega_Menu extends Widget_Nested_Base {
	use Base_Widget_Trait;
	use Url_Helper_Trait;

	public function get_name() {
		return 'mega-menu';
	}

	public function get_title() {
		return esc_html__( 'Menu', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-mega-menu';
	}

	public function get_categories() {
		return [ 'pro-elements', 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'Mega Menu', 'Nested Elements' ];
	}

	/**
	 * @return array[]
	 */
	private function get_content_horizontal_controls(): array {
		$horizontal_controls = [
			'left' => [
				'title' => esc_html__( 'Left', 'elementor-pro' ),
				'icon' => 'eicon-h-align-left',
			],
			'center' => [
				'title' => esc_html__( 'Center', 'elementor-pro' ),
				'icon' => 'eicon-h-align-center',
			],
			'right' => [
				'title' => esc_html__( 'Right', 'elementor-pro' ),
				'icon' => 'eicon-h-align-right',
			],
		];

		return is_rtl() ? array_reverse( $horizontal_controls ) : $horizontal_controls;
	}

	protected function get_default_children_elements() {
		return [
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #1', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #2', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #3', 'elementor-pro' ),
				],
			],
		];
	}

	protected function get_default_repeater_title_setting_key() {
		return 'item_title';
	}

	protected function get_default_children_title() {
		return esc_html__( 'Item #%d', 'elementor-pro' );
	}

	protected function get_default_children_placeholder_selector() {
		return '.e-n-menu-content';
	}

	protected function get_html_wrapper_class() {
		return 'elementor-widget-n-menu';
	}

	/**
	 * Define a selector class for a widget control.
	 *
	 * @param string $item The name of the element which we need to select.
	 * @param string $state The state of the selector, e.g. `:hover` or `:focus`.
	 *
	 * @return string The css selector for our element.
	 * @since 3.12.0
	 */
	protected function get_control_selector_class( $control_item, $state = '' ) {
		if ( 'menu_toggle_icon' === $control_item ) {
			return "{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-toggle{$state} > .e-n-menu-toggle-icon";
		} elseif ( 'active_content_container' === $control_item ) {
			return ":where( {{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-content ) > .e-con{$state}";
		}
	}

	/**
	 * Get Typography Selector
	 *
	 * Returns a selector class for the typography widget control.
	 *
	 * @param string $heading_selector The css selector for the menu.
	 *
	 * @return string The css selector for the typography control.
	 */
	protected function get_typography_selector( $heading_selector ): string {
		$typography_selector = "{$heading_selector} > .e-n-menu-title";
		$typography_selector .= ", {$heading_selector} > .e-n-menu-title > .e-n-menu-title-text";
		$typography_selector .= ", {$heading_selector} > .e-n-menu-title  > a.e-n-menu-title-link > .e-n-menu-title-text";

		return $typography_selector;
	}

	protected function register_controls() {
		$heading_selector = '{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading';
		$start = is_rtl() ? 'right' : 'left';
		$end = is_rtl() ? 'left' : 'right';
		$logical_dimensions_inline_start = is_rtl() ? '{{RIGHT}}{{UNIT}}' : '{{LEFT}}{{UNIT}}';
		$logical_dimensions_inline_end = is_rtl() ? '{{LEFT}}{{UNIT}}' : '{{RIGHT}}{{UNIT}}';
		$start_logical = is_rtl() ? 'end' : 'start';
		$end_logical = is_rtl() ? 'start' : 'end';

		$this->start_controls_section(
			'section_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
			]
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'item_title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Item Title', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'item_link',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'placeholder' => esc_html__( 'Paste URL or type', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'frontend_available' => true,
			]
		);

		$repeater->add_control(
			'item_dropdown_content',
			[
				'label' => esc_html__( 'Dropdown Content', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'OFF', 'elementor-pro' ),
				'label_on' => esc_html__( 'ON', 'elementor-pro' ),
				'default' => 'no',
				'description' => esc_html__( 'Click on the menu item to edit its dropdown content.', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$repeater->add_control(
			'item_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$repeater->add_control(
			'item_icon_active',
			[
				'label' => esc_html__( 'Active Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'condition' => [
					'item_icon[value]!' => '',
				],
			]
		);

		$repeater->add_control(
			'element_id',
			[
				'label' => esc_html__( 'CSS ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
				'title' => esc_html__( 'Add your custom id WITHOUT the Pound key. e.g: my-id', 'elementor-pro' ),
				'style_transfer' => false,
			]
		);

		$this->add_control(
			'menu_items',
			[
				'label' => esc_html__( 'Menu Items', 'elementor-pro' ),
				'type' => Control_Nested_Repeater::CONTROL_TYPE,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'item_title' => esc_html__( 'Item #1', 'elementor-pro' ),
					],
					[
						'item_title' => esc_html__( 'Item #2', 'elementor-pro' ),
					],
					[
						'item_title' => esc_html__( 'Item #3', 'elementor-pro' ),
					],
				],
				'title_field' => '{{{ item_title }}}',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'content_width',
			[
				'label' => esc_html__( 'Content Width', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'full_width',
				'separator' => 'before',
				'options' => [
					'full_width' => esc_html__( 'Full Width', 'elementor-pro' ),
					'fit_to_content' => esc_html__( 'Fit To Content', 'elementor-pro' ),
				],
				'prefix_class' => 'e-',
				'frontend_available' => true,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-dropdown-content-max-width: {{VALUE}};',
				],
				'selectors_dictionary' => [
					'full_width' => 'initial',
					'fit_to_content' => 'fit-content',
				],
			]
		);

		$this->add_control(
			'content_horizontal_position',
			[
				'label' => esc_html__( 'Content Horizontal Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => $this->get_content_horizontal_controls(),
				'default' => 'center',
				'condition' => [
					'content_width' => 'fit_to_content',
				],
				'frontend_available' => true,
				'render_type' => 'ui',
			]
		);

		$this->add_control(
			'item_layout',
			[
				'label' => esc_html__( 'Item Layout', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'horizontal',
				'options' => [
					'horizontal' => esc_html__( 'Horizontal', 'elementor-pro' ),
					'dropdown' => esc_html__( 'Dropdown', 'elementor-pro' ),
				],
				'prefix_class' => 'e-n-menu-layout-',
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control( 'item_position_horizontal', [
			'label' => esc_html__( 'Item Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => "eicon-align-$start_logical-h",
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-align-center-h',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => "eicon-align-$end_logical-h",
				],
				'stretch' => [
					'title' => esc_html__( 'Stretch', 'elementor-pro' ),
					'icon' => 'eicon-align-stretch-h',
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-heading-justify-content: initial; --n-menu-title-flex-grow: initial; --n-menu-title-justify-content: initial; --n-menu-title-justify-content-mobile: initial;',
				'center' => '--n-menu-heading-justify-content: center; --n-menu-title-flex-grow: initial; --n-menu-title-justify-content: initial; --n-menu-title-justify-content-mobile: center;',
				'end' => '--n-menu-heading-justify-content: flex-end; --n-menu-title-flex-grow: initial; --n-menu-title-justify-content: initial; --n-menu-title-justify-content-mobile: flex-end;',
				'stretch' => '--n-menu-heading-justify-content: space-between; --n-menu-title-flex-grow: 1; --n-menu-title-justify-content: center; --n-menu-title-justify-content-mobile: center;',
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
			'condition' => [
				'item_layout' => 'horizontal',
			],
			'frontend_available' => true,
		]);

		$this->add_responsive_control( 'item_position_dropdown', [
			'label' => esc_html__( 'Item Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => "eicon-align-$start_logical-h",
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-align-center-h',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => "eicon-align-$end_logical-h",
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-title-justify-content: initial;  --n-menu-title-justify-content-mobile: initial;',
				'center' => '--n-menu-title-justify-content: center; --n-menu-title-justify-content-mobile: center;',
				'end' => '--n-menu-title-justify-content: flex-end; --n-menu-title-justify-content-mobile: flex-end;',
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
			'condition' => [
				'item_layout' => 'dropdown',
			],
		]);

		$this->add_control(
			'submenu_indicator_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dropdown Indicator', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'menu_item_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-caret-down',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-down',
						'angle-down',
						'angle-double-down',
						'caret-down',
						'caret-square-down',
					],
					'fa-regular' => [
						'caret-square-down',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->add_control(
			'menu_item_icon_active',
			[
				'label' => esc_html__( 'Active Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon_active',
				'default' => [
					'value' => 'fas fa-caret-up',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-up',
						'angle-up',
						'angle-double-up',
						'caret-up',
						'caret-square-up',
					],
					'fa-regular' => [
						'caret-square-up',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section( 'section_dropdown_effect', [
			'label' => esc_html__( 'Dropdown Effect', 'elementor-pro' ),
		] );

		$this->add_control(
			'open_on',
			[
				'label' => esc_html__( 'Open On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'hover',
				'options' => [
					'hover' => esc_html__( 'Hover', 'elementor-pro' ),
					'click' => esc_html__( 'Click', 'elementor-pro' ),
				],
				'condition' => [
					'item_layout' => 'horizontal',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'open_on_hover_description',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'The hover effect is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
				'content_classes' => 'elementor-control-field-description',
				'condition' => [
					'item_layout' => 'horizontal',
					'open_on' => 'hover',
				],
			]
		);

		$this->add_control(
			'open_animation',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'none',
				'options' => [
					'none' => esc_html__( 'None', 'elementor-pro' ),
					'fadeIn' => esc_html__( 'Fade in', 'elementor-pro' ), // Key must match the class from animate.css
				],
				'assets' => [
					'styles' => [
						[
							'name' => 'e-animations',
							'conditions' => [
								'terms' => [
									[
										'name' => 'open_animation',
										'operator' => '!==',
										'value' => '',
									],
								],
							],
						],
					],
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'open_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
					'size' => 500,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-open-animation-duration: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'open_animation!' => '',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section( 'menu_toggle_section', [
			'label' => esc_html__( 'Menu Toggle', 'elementor-pro' ),
		] );

		$this->add_responsive_control(
			'toggle_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => "eicon-align-$start_logical-h",
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => "eicon-align-$end_logical-h",
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-toggle-align: {{VALUE}}',
				],
			]
		);

		$this->start_controls_tabs( 'menu_toggle_tabs_section' );

		$this->start_controls_tab( 'menu_toggle_normal_options', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control(
			'menu_toggle_icon_normal',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'skin_settings' => [
					'inline' => [
						'none' => [
							'label' => esc_html__( 'Default', 'elementor-pro' ),
							'icon' => 'eicon-menu-bar',
						],
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended' => [
					'fa-solid' => [
						'plus-square',
						'plus',
						'plus-circle',
						'bars',
					],
					'fa-regular' => [
						'plus-square',
					],
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'menu_toggle_hover_options', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control(
			'menu_toggle_icon_hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
				'frontend_available' => true,
				'render_type' => 'template',
			]
		);

		$this->add_control(
			'menu_toggle_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'render_type' => 'ui',
				'default' => [
					'unit' => 'ms',
					'size' => 500,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-toggle-icon-wrapper-animation-duration: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'menu_toggle_active_options', [
			'label' => esc_html__( 'Active', 'elementor-pro' ),
		] );

		$this->add_control(
			'menu_toggle_icon_active',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin' => 'inline',
				'label_block' => false,
				'skin_settings' => [
					'inline' => [
						'none' => [
							'label' => esc_html__( 'Default', 'elementor-pro' ),
							'icon' => 'eicon-close',
						],
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended' => [
					'fa-solid' => [
						'window-close',
						'times-circle',
						'times',
						'minus-square',
						'minus-circle',
						'minus',
					],
					'fa-regular' => [
						'window-close',
						'times-circle',
						'minus-square',
					],
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section( 'section_responsive_mega_menu', [
			'label' => esc_html__( 'Additional Settings', 'elementor-pro' ),
		] );

		$this->add_responsive_control(
			'horizontal_scroll',
			[
				'label' => esc_html__( 'Horizontal Scroll', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'description' => esc_html__( 'Note: Scroll menu items if they don’t fit into their parent container.', 'elementor-pro' ),
				'options' => [
					'disable' => esc_html__( 'Disable', 'elementor-pro' ),
					'enable' => esc_html__( 'Enable', 'elementor-pro' ),
				],
				'default' => 'disable',
				'selectors_dictionary' => [
					'disable' => '--n-menu-heading-wrap: wrap; --n-menu-heading-overflow-x: initial;',
					'enable' => '--n-menu-heading-wrap: nowrap; --n-menu-heading-overflow-x: scroll;',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}}',
				],
				'frontend_available' => true,
				'condition' => [
					'item_layout' => 'horizontal',
				],
			]
		);

		$dropdown_options = [
			'none' => esc_html__( 'None', 'elementor-pro' ),
		];

		$excluded_breakpoints = [
			'widescreen',
		];

		foreach ( Plugin::elementor()->breakpoints->get_active_breakpoints() as $breakpoint_key => $breakpoint_instance ) {
			// Exclude the larger breakpoints from the dropdown selector.
			if ( in_array( $breakpoint_key, $excluded_breakpoints, true ) ) {
				continue;
			}

			$dropdown_options[ $breakpoint_key ] = sprintf(
			/* translators: 1: Breakpoint label, 2: `>` character, 3: Breakpoint value. */
				esc_html__( '%1$s (%2$s %3$dpx)', 'elementor-pro' ),
				$breakpoint_instance->get_label(),
				'>',
				$breakpoint_instance->get_value()
			);
		}

		$this->add_control(
			'breakpoint_selector',
			[
				'label' => esc_html__( 'Breakpoint', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'description' => esc_html__( 'Note: Item layout will switch to dropdown on any screen smaller than the selected breakpoint.', 'elementor-pro' ),
				'options' => $dropdown_options,
				'default' => 'tablet',
				'prefix_class' => 'e-n-menu-',
				'frontend_available' => true,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section( 'section_menu_items_style', [
			'label' => esc_html__( 'Menu Items', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$this->add_responsive_control( 'menu_item_title_space_between', [
			'label' => esc_html__( 'Space between Items', 'elementor-pro' ),
			'type' => Controls_Manager::SLIDER,
			'size_units' => [ 'px', 'em', 'rem', 'custom' ],
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
			'default' => [
				'size' => 0,
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-title-space-between: {{SIZE}}{{UNIT}}',
			],
		] );

		$this->add_responsive_control( 'menu_item_title_distance_from_content', [
			'label' => esc_html__( 'Distance from content', 'elementor-pro' ),
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
			'default' => [
				'size' => 0,
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-title-distance-from-content: {{SIZE}}{{UNIT}}',
			],
			'frontend_available' => true,
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name' => 'menu_item_title_typography',
			'global' => [
				'default' => Global_Typography::TYPOGRAPHY_ACCENT,
			],
			'selector' => $this->get_typography_selector( $heading_selector ),
			'fields_options' => [
				'font_size' => [
					'selectors' => [
						'{{WRAPPER}}' => '--n-menu-title-font-size: {{SIZE}}{{UNIT}}',
					],
				],
				'line_height' => [
					'selectors' => [
						'{{SELECTOR}}' => '--e-global-typography-{{external._id.VALUE}}-line-height: {{SIZE}}{{UNIT}}',
						'{{SELECTOR}}' => '--n-menu-title-line-height: {{SIZE}}',
					],
				],
			],
		] );

		$this->start_controls_tabs( 'menu_item_title_style' );

		$this->start_controls_tab(
			'menu_item_title_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'menu_item_title_text_color_normal',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-title-color-normal: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_normal',
				'selector' => "{$heading_selector} > .e-n-menu-title:not( .e-current ):not( :hover )",
				'fields_options' => [
					'text_shadow_type' => [
						'label' => esc_html_x( 'Shadow', 'Text Shadow Control', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_item_title_background_color',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => "{$heading_selector} > .e-n-menu-title:not( .e-current ):not( :hover )",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_item_title_box_border',
				'selector' => "{$heading_selector} > .e-n-menu-title:not( .e-current ):not( :hover )",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_item_title_box_shadow',
				'selector' => "{$heading_selector} > .e-n-menu-title:not( .e-current ):not( :hover )",
			]
		);

		$divider_condition = [
			'menu_divider' => 'yes',
			'item_layout' => 'horizontal',
		];

		$this->add_control(
			'menu_divider',
			[
				'label' => esc_html__( 'Divider', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'condition' => [
					'item_layout' => 'horizontal',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-divider-content: "";',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'menu_divider_style',
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'solid' => esc_html__( 'Solid', 'elementor-pro' ),
					'double' => esc_html__( 'Double', 'elementor-pro' ),
					'dotted' => esc_html__( 'Dotted', 'elementor-pro' ),
					'dashed' => esc_html__( 'Dashed', 'elementor-pro' ),
				],
				'default' => 'solid',
				'condition' => $divider_condition,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-divider-style: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'menu_divider_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 20,
					],
					'em' => [
						'max' => 2,
					],
					'rem' => [
						'max' => 2,
					],
				],
				'condition' => $divider_condition,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-divider-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'menu_divider_height',
			[
				'label' => esc_html__( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
					'%' => [
						'min' => 1,
						'max' => 100,
					],
				],
				'condition' => $divider_condition,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-divider-height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'menu_divider_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'condition' => $divider_condition,
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-divider-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab(); // End Normal Tab

		$this->start_controls_tab(
			'menu_item_title_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'menu_item_title_text_color_hover',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} ' => '--n-menu-title-color-hover: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_hover',
				'selector' => "{$heading_selector} > .e-n-menu-title:hover:not( .e-current )",
				'fields_options' => [
					'text_shadow_type' => [
						'label' => esc_html_x( 'Shadow', 'Text Shadow Control', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_item_title_background_color_hover',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => "{$heading_selector} > .e-n-menu-title:hover:not( .e-current )",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_item_title_box_border_hover',
				'selector' => "{$heading_selector} > .e-n-menu-title:hover:not( .e-current )",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_item_title_box_shadow_hover',
				'selector' => "{$heading_selector} > .e-n-menu-title:hover:not( .e-current )",
			]
		);

		$this->add_control(
			'hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->add_control(
			'menu_item_title_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-title-transition: {{SIZE}}{{UNIT}}',
				],
				'default' => [
					'unit' => 'ms',
					'size' => 300,
				],
			]
		);
		$this->end_controls_tab(); // End Hover Tab

		$this->start_controls_tab(
			'menu_item_title_active',
			[
				'label' => esc_html__( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'menu_item_title_text_color_active',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} ' => '--n-menu-title-color-active: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_active',
				'selector' => "{$heading_selector} > .e-n-menu-title.e-current",
				'fields_options' => [
					'text_shadow_type' => [
						'label' => esc_html_x( 'Shadow', 'Text Shadow Control', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_item_title_background_color_active',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => "{$heading_selector} > .e-n-menu-title.e-current",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_item_title_box_border_active',
				'selector' => "{$heading_selector} > .e-n-menu-title.e-current",
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_item_title_box_shadow_active',
				'selector' => "{$heading_selector} > .e-n-menu-title.e-current",
			]
		);

		$this->end_controls_tab(); // End Active Tab

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'menu_item_title_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					"{$heading_selector} > .e-n-menu-title" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'menu_item_title_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-title-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Icon Style
		$this->start_controls_section( 'icon_section_style', [
			'label' => esc_html__( 'Icon', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$styling_block_start = '--n-menu-title-direction: column; --n-menu-icon-order: initial; --n-menu-icon-align-items: flex-end; --n-menu-title-justify-content: center; --n-menu-title-align-items-toggle: initial;';
		$styling_inline_end = '--n-menu-title-direction: row; --n-menu-icon-order: 1; --n-menu-icon-align-items: initial; --n-menu-title-justify-content: initial; --n-menu-title-align-items-toggle: center;';
		$styling_block_end = '--n-menu-title-direction: column; --n-menu-icon-order: 1; --n-menu-icon-align-items: flex-start; --n-menu-title-justify-content: center; --n-menu-title-align-items-toggle: initial;';
		$styling_inline_start = '--n-menu-title-direction: row; --n-menu-icon-order: initial; --n-menu-icon-align-items: initial; --n-menu-title-justify-content: initial; --n-menu-title-align-items-toggle: center;';

		$this->add_responsive_control( 'icon_position', [
			'label' => esc_html__( 'Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'block-start' => [
					'title' => esc_html__( 'Above', 'elementor-pro' ),
					'icon' => 'eicon-v-align-top',
				],
				'inline-end' => [
					'title' => esc_html__( 'After', 'elementor-pro' ),
					'icon' => 'eicon-h-align-' . $end,
				],
				'block-end' => [
					'title' => esc_html__( 'Below', 'elementor-pro' ),
					'icon' => 'eicon-v-align-bottom',
				],
				'inline-start' => [
					'title' => esc_html__( 'Before', 'elementor-pro' ),
					'icon' => 'eicon-h-align-' . $start,
				],
			],
			'selectors_dictionary' => [
				'block-start' => $styling_block_start,
				'inline-end' => $styling_inline_end,
				'block-end' => $styling_block_end,
				'inline-start' => $styling_inline_start,
				// Styling duplication for BC reasons.
				'top' => $styling_block_start,
				'end' => $styling_inline_end,
				'bottom' => $styling_block_end,
				'start' => $styling_inline_start,
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
		] );

		$this->add_responsive_control( 'icon_size', [
			'label' => esc_html__( 'Size', 'elementor-pro' ),
			'type' => Controls_Manager::SLIDER,
			'range' => [
				'px' => [
					'max' => 100,
				],
				'em' => [
					'min' => 0,
					'max' => 10,
				],
				'rem' => [
					'min' => 0,
					'max' => 10,
				],
			],
			'default' => [
				'unit' => 'px',
				'size' => 16,
			],
			'size_units' => [ 'px', 'em', 'rem' ],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-icon-size: {{SIZE}}{{UNIT}}',
			],
		] );

		$this->add_responsive_control( 'icon_spacing', [
			'label' => esc_html__( 'Spacing', 'elementor-pro' ),
			'type' => Controls_Manager::SLIDER,
			'size_units' => [ 'px', 'em', 'rem', 'vw', 'custom' ],
			'range' => [
				'px' => [
					'max' => 400,
				],
				'em' => [
					'max' => 40,
				],
				'rem' => [
					'max' => 40,
				],
				'vw' => [
					'min' => 0,
					'max' => 50,
					'step' => 0.1,
				],
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-icon-gap: {{SIZE}}{{UNIT}}',
			],
		] );

		$this->start_controls_tabs( 'icon_style_states' );

		$this->start_controls_tab(
			'icon_section_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control( 'icon_color', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-icon-color: {{VALUE}};',
			],
		] );

		$this->end_controls_tab();

		$this->start_controls_tab(
			'icon_section_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control( 'icon_color_hover', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-icon-color-hover: {{VALUE}};',
			],
		] );

		$this->end_controls_tab();

		$this->start_controls_tab(
			'icon_section_active',
			[
				'label' => esc_html__( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control( 'icon_color_active', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-icon-color-active: {{VALUE}};',
			],
		] );

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section( 'section_dropdown_indicator_style', [
			'label' => esc_html__( 'Dropdown Indicator', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
			'conditions' => [
				'relation' => 'or',
				'terms' => [
					[
						'name' => 'menu_item_icon[value]',
						'operator' => '!==',
						'value' => '',
					],
					[
						'name' => 'menu_item_icon_active[value]',
						'operator' => '!==',
						'value' => '',
					],
				],
			],
		] );

		$this->add_responsive_control(
			'style_dropdown_indicator_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-dropdown-indicator-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'style_dropdown_indicator_rotate',
			[
				'label' => esc_html__( 'Rotate', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'deg', 'grad', 'rad', 'turn', 'custom' ],
				'default' => [
					'unit' => 'deg',
				],
				'tablet_default' => [
					'unit' => 'deg',
				],
				'mobile_default' => [
					'unit' => 'deg',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-dropdown-indicator-rotate: rotate({{SIZE}}{{UNIT}})',
				],
			]
		);

		$this->add_responsive_control(
			'style_dropdown_indicator_space',
			[
				'label' => esc_html__( 'Space', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-dropdown-indicator-space: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->start_controls_tabs( 'style_menu_dropdown_indicator' );

		foreach ( array( 'normal', 'hover', 'active' ) as $state ) {
			$this->add_dropdown_indicator_state_based_style_controls( $state );
		}

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section( 'section_menu_toggle_style', [
			'label' => esc_html__( 'Menu Toggle', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$this->add_control(
			'style_menu_toggle_icon_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Toggle Icon', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'style_menu_toggle_icon_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'size' => 20,
				],
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
					'{{WRAPPER}}' => '--n-menu-toggle-icon-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->start_controls_tabs( 'style_menu_toggle_tabs' );

		$this->start_controls_tab( 'style_menu_toggle_tab_normal', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control( 'menu_toggle_icon_color_normal', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'render_type' => 'ui',
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-toggle-icon-color: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_toggle_icon_background_color_normal',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="false"]:not( :hover )' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
						'selectors' => [
							'{{SELECTOR}}' => 'background: {{VALUE}}',
						],
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_toggle_icon_border_normal',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="false"]:not( :hover )' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_toggle_icon_box_shadow_normal',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="false"]:not( :hover )' ),
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'style_menu_toggle_hover', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control( 'menu_toggle_icon_color_hover', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'render_type' => 'ui',
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-toggle-icon-color-hover: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_toggle_icon_background_color_hover',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( [aria-expanded="true"], [aria-expanded="false"] )' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
						'selectors' => [
							'{{SELECTOR}}' => 'background: {{VALUE}}',
						],
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_toggle_icon_border_hover',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( [aria-expanded="true"], [aria-expanded="false"] )' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_toggle_icon_box_shadow_hover',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( [aria-expanded="true"], [aria-expanded="false"] )' ),
			]
		);

		$this->add_control(
			'menu_toggle_icon_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
					'size' => 500,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-toggle-icon-hover-duration: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'style_menu_toggle_active', [
			'label' => esc_html__( 'Active', 'elementor-pro' ),
		] );

		$this->add_control( 'menu_toggle_icon_color_active', [
			'label' => esc_html__( 'Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'render_type' => 'ui',
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-toggle-icon-color-active: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'menu_toggle_icon_background_color_active',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="true"]' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
						'selectors' => [
							'{{SELECTOR}}' => 'background: {{VALUE}}',
						],
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_toggle_icon_border_active',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="true"]' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_toggle_icon_box_shadow_active',
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '[aria-expanded="true"]' ),
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'menu_toggle_icon_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-toggle-icon-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'menu_toggle_icon__padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-toggle-icon-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control( 'menu_toggle_icon_distance_from_dropdown', [
			'label' => esc_html__( 'Distance from dropdown', 'elementor-pro' ),
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
				'size' => 0,
			],
			'placeholder' => [
				'size' => 0,
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-toggle-icon-distance-from-dropdown: {{SIZE}}{{UNIT}}',
			],
		] );

		$this->end_controls_section();

		$this->start_controls_section( 'section_content_style', [
			'label' => esc_html__( 'Content', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'content_background_color',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => $this->get_control_selector_class( 'active_content_container' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'content_border',
				'selector' => $this->get_control_selector_class( 'active_content_container' ),
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_responsive_control(
			'content_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					$this->get_control_selector_class( 'active_content_container' ) => '--border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'content_shadow',
				'selector' => $this->get_control_selector_class( 'active_content_container' ),
			]
		);

		$this->add_responsive_control(
			'content_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					$this->get_control_selector_class( 'active_content_container' ) => '--padding-top: {{TOP}}{{UNIT}}; --padding-right: {{RIGHT}}{{UNIT}}; --padding-bottom: {{BOTTOM}}{{UNIT}}; --padding-left: {{LEFT}}{{UNIT}};',
					// Todo: Remove in version 3.21.0: https://elementor.atlassian.net/browse/ED-11888.
					// Remove together with support for physical properties inside the container widget.
					':where( [data-core-v316-plus="true"] .elementor-element.elementor-widget-n-menu > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-content ) > .e-con' => "--padding-block-start: {{TOP}}{{UNIT}}; --padding-inline-end: $logical_dimensions_inline_end; --padding-block-end: {{BOTTOM}}{{UNIT}}; --padding-inline-start: $logical_dimensions_inline_start;",
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section( 'section_dropdown_menu_style', [
			'label' => esc_html__( 'Dropdown Menu', 'elementor-pro' ),
			'tab' => Controls_Manager::TAB_STYLE,
		] );

		$this->add_control(
			'dropdown_menu_items_title',
			[
				'label' => esc_html__( 'Menu Items', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'dropdown_menu_items_description',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Styles apply to items when the menu switches to dropdown layout', 'elementor-pro' ),
				'content_classes' => 'elementor-control-field-description',
			]
		);

		$this->start_controls_tabs( 'menu_dropdown_states_section' );

		$this->start_controls_tab(
			'normal_menu_dropdown_states',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control( 'dropdown_menu_item_text_color_normal', [
			'label' => esc_html__( 'Text Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-title-normal-color-dropdown: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'dropdown_menu_item_background_color_normal',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu[data-layout="dropdown"] > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-title:not( .e-current )',
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
						'selectors' => [
							'{{SELECTOR}}' => 'background: {{VALUE}}',
						],
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'dropdown_menu_item_box_shadow_normal',
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu[data-layout="dropdown"] > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-title:not( .e-current )',

			]
		);

		$this->end_controls_tab(); // Normal tab end

		$this->start_controls_tab(
			'active_menu_dropdown_states',
			[
				'label' => esc_html__( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control( 'dropdown_menu_item_text_color_active', [
			'label' => esc_html__( 'Text Color', 'elementor-pro' ),
			'type' => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-title-active-color-dropdown: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'dropdown_menu_item_background_color_active',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu[data-layout="dropdown"] > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-title.e-current',
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background Color', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'dropdown_menu_item_box_shadow_active',
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu[data-layout="dropdown"] > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-title.e-current',

			]
		);

		$this->end_controls_tab(); // Active tab end

		$this->end_controls_tabs();

		$this->add_control(
			'menu_dropdown_box_title',
			[
				'label' => esc_html__( 'Dropdown Box', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'menu_dropdown_box_description',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Style the dropdown box that contains menu items.', 'elementor-pro' ),
				'content_classes' => 'elementor-control-field-description',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'menu_dropdown_box_border',
				'fields_options' => [
					'border' => [
						'selectors' => [
							'{{WRAPPER}}' => '--n-menu-dropdown-content-box-border-style: {{VALUE}}',
						],
					],
					'color' => [
						'label' => esc_html__( 'Border Color', 'elementor-pro' ),
						'selectors' => [
							'{{WRAPPER}}' => '--n-menu-dropdown-content-box-border-color: {{VALUE}}',
						],
					],
					'width' => [
						'label' => esc_html__( 'Border Width', 'elementor-pro' ),
						'selectors' => [
							'{{WRAPPER}}' => "--n-menu-dropdown-content-box-border-block-start-width: {{TOP}}{{UNIT}}; --n-menu-dropdown-content-box-border-inline-end-width: $logical_dimensions_inline_end; --n-menu-dropdown-content-box-border-block-end-width: {{BOTTOM}}{{UNIT}}; --n-menu-dropdown-content-box-border-inline-start-width: $logical_dimensions_inline_start;",
						],
					],
				],
			]
		);

		$this->add_control(
			'menu_dropdown_box_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--n-menu-dropdown-content-box-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'menu_dropdown_box_shadow',
				'fields_options' => [
					'box_shadow' => [
						'selectors' => [
							'{{WRAPPER}}' => '--n-menu-dropdown-content-box-shadow-horizontal: {{HORIZONTAL}}px; --n-menu-dropdown-content-box-shadow-vertical: {{VERTICAL}}px; --n-menu-dropdown-content-box-shadow-blur: {{BLUR}}px; --n-menu-dropdown-content-box-shadow-spread: {{SPREAD}}px; --n-menu-dropdown-content-box-shadow-color: {{COLOR}}; --n-menu-dropdown-content-box-shadow-position: {{box_shadow_position.VALUE}};',
						],
					],
				],
			]
		);

		$this->end_controls_section();
	}

	// TODO: Remove this function in version 3.19.
	protected function widget_number(): string {
		return method_exists( $this, 'get_widget_number' )
			? $this->get_widget_number()
			: substr( $this->get_id_int(), 0, 3 );
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$menu_titles = '';
		$menu_containers = '';

		foreach ( $settings['menu_items'] as $index => $item ) {
			$menu_titles .= $this->render_menu_titles_html( $index, $item );

			ob_start();
			$item_dropdown_id = 'e-n-menu-dropdown-icon-' . $this->widget_number() . ( $index + 1 );
			$this->print_child( $index, 'yes' === $item['item_dropdown_content'], $item_dropdown_id );
			$menu_containers .= ob_get_clean();
		}

		?>
		<nav <?php $this->render_menu_attributes(); ?>>
			<?php $this->render_menu_toggle( $settings ); ?>
			<div <?php $this->render_menu_wrapper_attributes(); ?>>
				<ul class="e-n-menu-heading" role="menubar">
					<?php echo $menu_titles; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</ul>
				<div class="e-n-menu-content">
					<?php echo $menu_containers; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
			</div>
		</nav>
		<?php
	}

	protected function render_menu_attributes( $element_uid = '' ) {
		$menu_classes = [ 'e-n-menu' ];

		$this->add_render_attribute( 'e-n-menu', [
			'class' => $menu_classes,
			'data-widget-number' => ! empty( $element_uid ) ? $element_uid : $this->widget_number(),
			'aria-label' => esc_html__( 'Menu | Open (Enter or Space) | Return (Escape) | Other Menu Items (Arrow, Home & End Keys)', 'elementor-pro' ),
		] );

		$this->print_render_attribute_string( 'e-n-menu' );
	}

	protected function render_menu_wrapper_attributes() {
		$this->add_render_attribute( 'e-n-menu-wrapper', [
			'class' => 'e-n-menu-wrapper',
			'id' => 'menubar-' . $this->widget_number(),
			'aria-labelledby' => 'menu-toggle-' . $this->widget_number(),
		] );

		$this->print_render_attribute_string( 'e-n-menu-wrapper' );
	}

	protected function render_menu_toggle( $settings ) {
		$menu_toggle_hover_animation = ! empty( $settings['menu_toggle_icon_hover_animation'] )
			? ' elementor-animation-' . $settings['menu_toggle_icon_hover_animation']
			: '';

		$menu_toggle_class = 'e-n-menu-toggle' . $menu_toggle_hover_animation;

		$this->add_render_attribute( 'menu-toggle', [
			'class' => $menu_toggle_class,
			'id' => 'menu-toggle-' . $this->widget_number(),
			'aria-haspopup' => 'true',
			'aria-expanded' => 'false',
			'aria-controls' => 'menubar-' . $this->widget_number(),
			'aria-label' => esc_html__( 'Menu Toggle | Open (Enter or Space) | Return (Escape)', 'elementor-pro' ),
		] );
		?>
		<button <?php $this->print_render_attribute_string( 'menu-toggle' ); ?>>
			<?php
			$open_class = 'e-n-menu-toggle-icon e-open';
			$close_class = 'e-n-menu-toggle-icon e-close';

			$normal_icon = ! empty( $settings['menu_toggle_icon_normal']['value'] )
				? $settings['menu_toggle_icon_normal']
				: [
					'library' => 'eicons',
					'value' => 'eicon-menu-bar',
				];

			?>
			<span class="<?php echo esc_attr( $open_class ); ?>">
				<?php Icons_Manager::render_icon( $normal_icon ); ?>
			</span>
			<?php

			$active_icon = ! empty( $settings['menu_toggle_icon_active']['value'] )
				? $settings['menu_toggle_icon_active']
				: [
					'library' => 'eicons',
					'value' => 'eicon-close',
				];

			?>
			<span class="<?php echo esc_attr( $close_class ); ?>">
				<?php Icons_Manager::render_icon( $active_icon ); ?>
			</span>
		</button>
		<?php
	}

	protected function render_menu_toggle_template() {
		?>
			<#
			const menuToggleKey = 'e-n-menu-toggle-' + elementUid,
				iconHoverAnimation = !! settings.menu_toggle_icon_hover_animation
					? 'elementor-animation-' + settings.menu_toggle_icon_hover_animation
					: '',
				openClass = 'e-n-menu-toggle-icon e-open',
				closeClass = 'e-n-menu-toggle-icon e-close',
				iconNormal = !! settings.menu_toggle_icon_normal.value ? settings.menu_toggle_icon_normal : '',
				iconActive = !! settings.menu_toggle_icon_active.value ? settings.menu_toggle_icon_active : '';

				view.addRenderAttribute( menuToggleKey, {
					'class': [ 'e-n-menu-toggle', 'elementor-clickable', iconHoverAnimation ],
					'id': 'menu-toggle-' + elementUid,
					'aria-haspopup': 'true',
					'aria-expanded': 'false',
					'aria-controls': 'menubar-' + elementUid,
					'aria-label': '<?php echo esc_html__( 'Menu Toggle | Open (Enter or Space) | Return (Escape)', 'elementor-pro' ); ?>',
				} );
			#>
			<button {{{ view.getRenderAttributeString( menuToggleKey ) }}}>
				<span class="{{{ openClass }}}">
					<# if ( !! iconNormal ) { #>
						{{{ elementor.helpers.renderIcon( view, iconNormal, {}, 'i', 'object' ).value }}}
					<# } else { #>
						<?php Icons_Manager::render_icon(
							[
								'library' => 'eicons',
								'value' => 'eicon-menu-bar',
							]
						); ?>
					<# } #>
				</span>
				<span class="{{{ closeClass }}}">
					<# if ( !! iconActive ) { #>
						{{{ elementor.helpers.renderIcon( view, iconActive, {}, 'i', 'object' ).value }}}
					<# } else { #>
						<?php Icons_Manager::render_icon(
							[
								'library' => 'eicons',
								'value' => 'eicon-close',
							]
						); ?>
					<# } #>
				</span>
			</button>
		<?php
	}

	protected function merge_menu_title_classes( $index, $item, $classes ) {
		$current_class = $this->get_current_menu_item_class( $item['item_link']['url'] );
		$items_open_on_click = 'click' === $this->get_settings_for_display( 'open_on' );

		if ( ! empty( $current_class ) ) {
			$classes[] = $current_class;
		}

		if ( $items_open_on_click && $this->item_has_dropdown_with_content( $index, $this->get_children(), 'yes' === $item['item_dropdown_content'] ) ) {
			$classes[] = 'e-click';
		}

		return array_filter( $classes );
	}

	protected function render_menu_titles_html( $index, $item ) {
		$settings = $this->get_settings_for_display();
		$is_focusable_class = 'yes' === $item['item_dropdown_content'] ? 'e-focus' : '';
		$item_class = $this->merge_menu_title_classes( $index, $item, [ 'e-n-menu-title' ] );
		$item_dropdown_class = [ 'e-n-menu-dropdown-icon' ];

		if ( ! empty( $is_focusable_class ) ) {
			$item_dropdown_class[] = $is_focusable_class;
		}

		$icon_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon'], [ 'aria-hidden' => 'true' ] );
		$icon_active_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon_active'], [ 'aria-hidden' => 'true' ] );
		$display_index = $index + 1;
		$has_dropdown_content = 'yes' === $settings['menu_items'][ $index ]['item_dropdown_content'];
		$menu_item_id = empty( $item['element_id'] ) ? 'e-n-menu-title-' . $this->widget_number() . $display_index : $item['element_id'];
		$item_dropdown_id = 'e-n-menu-dropdown-icon-' . $this->widget_number() . $display_index;
		$key = $this->get_repeater_setting_key( 'item_title', 'menu_items', $display_index );
		$menu_item = $settings['menu_items'][ $index ];
		$menu_item_icon = Icons_Manager::try_get_icon_html( $menu_item['item_icon'], [ 'aria-hidden' => 'true' ] );
		$menu_item_active_icon = $this->is_active_icon_exist( $menu_item )
			? Icons_Manager::try_get_icon_html( $item['item_icon_active'], [ 'aria-hidden' => 'true' ] )
			: $menu_item_icon;

		if ( ! empty( $settings['hover_animation'] ) ) {
			$item_class[] = 'elementor-animation-' . $settings['hover_animation'];
		}

		$this->add_attributes_to_item( $key, $item_class, $menu_item_id, $display_index );
		$this->add_attributes_to_item_dropdown( $key . '_link', $item_dropdown_class, $item_dropdown_id, $display_index, $has_dropdown_content, $item['item_title'] );

		ob_start();
		?>
			<li <?php echo wp_kses_post( $this->get_render_attribute_string( $key ) ); ?> >
				<div <?php echo $this->get_title_container_opening_tag( $item, $item['item_link']['url'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php if ( $menu_item_icon ) { ?>
						<span class="e-n-menu-icon">
							<span class="icon-active"><?php echo $menu_item_active_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
							<span class="icon-inactive"><?php echo $menu_item_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						</span>
					<?php } ?>
					<?php echo $this->get_title_link_opening_tag( $item, $item['item_link']['url'], $display_index ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						<?php echo $item['item_title']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<?php echo $this->get_title_link_closing_tag( $item['item_link']['url'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
				<?php if ( $has_dropdown_content ) { ?>
					<button <?php echo wp_kses_post( $this->get_render_attribute_string( $key . '_link' ) ); ?> >
						<span class="e-n-menu-dropdown-icon-opened"><?php echo $icon_active_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						<span class="e-n-menu-dropdown-icon-closed"><?php echo $icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					</button>
				<?php } ?>
			</li>
		<?php
		return ob_get_clean();
	}

	public function add_attributes_to_item( $key, $classes, $menu_item_id, $display_index ) {
		$this->add_render_attribute( $key, [
			'id' => $menu_item_id,
			'class' => $classes,
			'role' => 'presentation',
			'style' => '--n-menu-title-order: ' . $display_index . ';',
		] );
	}

	public function add_attributes_to_item_dropdown( $key, $classes, $item_dropdown_id, $display_index, $has_dropdown_content = false, $title = '' ) {
		$this->add_render_attribute( $key, [
			'id' => $item_dropdown_id,
			'class' => $classes,
			'role' => 'button',
			'data-tab-index' => $display_index,
			'tabindex' => 1 === $display_index ? '0' : '-1',
			'aria-haspopup' => $has_dropdown_content ? 'true' : 'false',
			'aria-expanded' => 'false',
			'aria-controls' => 'e-n-menu-content-' . $this->widget_number() . $display_index,
			'aria-label' => esc_html__( 'Expand: ', 'elementor-pro' ) . $title,
		] );
	}

	protected function get_current_menu_item_class( $menu_link_url ) {
		$menu_link_url = trim( $menu_link_url );

		if ( str_contains( $menu_link_url, '#' ) ) {
			return 'e-anchor';
		}

		$permalink_url = $this->get_permalink_for_current_page();

		if ( empty( $menu_link_url ) || empty( $permalink_url ) ) {
			return '';
		}

		$permalink_array = $this->parse_url( $permalink_url );
		$menu_item_url_array = $this->parse_url( $menu_link_url );
		$has_equal_urls = $permalink_array === $menu_item_url_array;

		return $has_equal_urls ? 'e-current' : '';
	}

	/**
	 * Print the content area.
	 *
	 * @param int $index
	 * @param boolean $has_dropdown_content
	 * @param string $menu_item_id
	 */
	public function print_child( $index, $has_dropdown_content = false, $menu_item_id = '' ) {
		$children = $this->get_children();
		$menu_index = $index + 1;
		$child_ids = [];

		foreach ( $children as $child ) {
			$child_ids[] = $child->get_id();
		}

		$add_attribute_to_container = function ( $should_render, $container ) use ( $menu_item_id, $menu_index, $child_ids ) {
			if ( in_array( $container->get_id(), $child_ids ) ) {
				$this->set_container_attributes( $container, $menu_index, $menu_item_id );
			}

			return $should_render;
		};

		if ( $this->item_has_dropdown_with_content( $index, $children, $has_dropdown_content ) ) {
			add_filter( 'elementor/frontend/container/should_render', $add_attribute_to_container, 10, 3 );

			$children[ $index ]->print_element();

			remove_filter( 'elementor/frontend/container/should_render', $add_attribute_to_container );
		}
	}

	protected function set_container_attributes( $container, $menu_index, $menu_item_id ) {
		$container->add_render_attribute( '_wrapper', [
			'id' => 'e-n-menu-content-' . $this->widget_number() . $menu_index,
			'role' => 'menu',
			'data-tab-index' => $menu_index,
			'aria-labelledby' => $menu_item_id,
			'style' => '--n-menu-title-order: ' . $menu_index . ';',
		] );
	}

	protected function item_has_dropdown_with_content( $index, $children, $has_dropdown_content = false ) {
		$data = ! empty( $children[ $index ] ) ? $children[ $index ]->get_data() : [];
		$elements = empty( $data['elements'] ) ? [] : $data['elements'];

		return ! empty( $children[ $index ] ) && ! empty( $elements ) && $has_dropdown_content;
	}

	private function get_title_container_opening_tag( $item, $url ) {
		$title_container_id = 'e-n-menu-title-container-' . $item['_id'];

		$this->remove_render_attribute( $title_container_id );
		$this->add_render_attribute( $title_container_id, [
			'class' => [ 'e-n-menu-title-container' ],
		] );

		$current_class = $this->get_current_menu_item_class( $url );

		if ( ! empty( $current_class ) ) {
			$this->add_render_attribute( $title_container_id, 'aria-current', 'page' );
		}

		return $this->get_render_attribute_string( $title_container_id );
	}

	private function get_title_link_opening_tag( $item, $url, $display_index ) {
		$link_id = 'e-n-menu-title-text-' . $item['_id'];
		$link_classes = [ 'e-n-menu-title-text', 'e-link' ];

		if ( ! empty( $url ) ) {
			$link_classes[] = 'e-focus';
		}

		$this->remove_render_attribute( $link_id );
		$this->add_render_attribute( $link_id, [
			'class' => $link_classes,
			'tabindex' => 1 === $display_index ? '0' : '-1',
			'role' => 'menuitem',
		] );
		$this->add_link_attributes( $link_id, $item['item_link'] );

		$opening_tag = '<span class="e-n-menu-title-text">';

		$tag_content = $this->get_render_attribute_string( $link_id );

		if ( ! empty( $url ) ) {
			$opening_tag = '<a ' . $tag_content . '>';
		}

		return $opening_tag;
	}

	private function get_title_link_closing_tag( $url ) {
		$closing_tag = '</span>';

		if ( $url ) {
			$closing_tag = '</a>';
		}

		return $closing_tag;
	}

	/**
	 * @param $item
	 * @return bool
	 */
	private function is_active_icon_exist( $item ) {
		return array_key_exists( 'item_icon_active', $item ) && ! empty( $item['item_icon_active'] ) && ! empty( $item['item_icon_active']['value'] );
	}

	/**
	 * @param string $state
	 * @param $css_prefix
	 * @return void
	 */
	private function add_dropdown_indicator_state_based_style_controls( string $state ) {
		$label = esc_html__( 'Normal', 'elementor-pro' );
		$selector = '--n-menu-dropdown-indicator-color-normal: {{VALUE}};';
		if ( 'hover' === $state ) {
			$label = esc_html__( 'Hover', 'elementor-pro' );
			$selector = '--n-menu-dropdown-indicator-color-hover: {{VALUE}};';
		}
		if ( 'active' === $state ) {
			$label = esc_html__( 'Active', 'elementor-pro' );
			$selector = '--n-menu-dropdown-indicator-color-active: {{VALUE}};';
		}
		$this->start_controls_tab('style_menu_dropdown_indicator_' . $state, [
			'label' => $label,
		]);

		$this->add_control(
			'menu_dropdown_indicator_color_' . $state,
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => $selector,
				],
			]
		);

		$this->end_controls_tab();
	}

	protected function content_template() {
		?>
		<# if ( settings['menu_items'] ) {
		const menuItemIcon = elementor.helpers.renderIcon( view, settings['menu_item_icon'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
			menuItemIconActive = elementor.helpers.renderIcon( view, settings['menu_item_icon_active'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
			elementUid = view.getIDInt().toString().substr( 0, 3 ),
			permalinkUrl = '<?php echo esc_url( $this->get_permalink_for_current_page() ); ?>';
		#>
		<nav <?php $this->render_menu_attributes( '{{ elementUid }}' ); ?>>
			<?php $this->render_menu_toggle_template(); ?>
			<div <?php $this->render_menu_wrapper_attributes(); ?>>
				<ul class="e-n-menu-heading" role="menubar">
					<# _.each( settings['menu_items'], function( item, index ) {
						const menuItemCount = index + 1,
							menuItemUid = elementUid + menuItemCount,
							menuItemWrapperKey = menuItemUid,
							menuItemTitleKey = 'menu-title-' + menuItemUid,
							menuItemTitleContainerLinkKey = 'e-n-menu-title-container-' + menuItemUid,
							menuItemDropdownIconKey = 'e-n-menu-dropdown-icon-' + menuItemUid,
							menuItemIconKey = 'menu-icon-' + menuItemUid,
							menuIcon = elementor.helpers.renderIcon( view, item.item_icon, { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
							menuIconActive = '' === item.item_icon_active.value
								? menuIcon
								: elementor.helpers.renderIcon( view, item.item_icon_active, { 'aria-hidden': true }, 'i' , 'object' ),
							menuItemLink = 'string' === typeof item['item_link'] ? item['item_link'] : item['item_link']['url'],
							hasDropdownContent =  'yes' === item['item_dropdown_content'],
							currentPageClass = elementorPro.modules.megaMenu.getCurrentMenuItemClass( menuItemLink, permalinkUrl ),
							dropdownFocusClass = hasDropdownContent ? 'e-focus' : '',
							menuItemClassList = ['e-n-menu-title'];
						let menuItemId = 'e-n-menu-title-' + menuItemUid;

						settings['hover_animation'] && menuItemClassList.push( `elementor-animation-${ settings['hover_animation'] }` );

						if ( '' !== item.element_id ) {
							menuItemId = item.element_id;
						}

						if ( ! hasDropdownContent ) {
							menuItemClassList.push( 'link-only' );
						} else {
							menuItemClassList.push( 'e-click' );
						}

						if ( !! currentPageClass ) {
							menuItemClassList.push( currentPageClass );
						}

						view.addRenderAttribute( menuItemWrapperKey, {
							'id': menuItemId,
							'class': menuItemClassList,
							'role': 'presentation',
							'style': '--n-menu-title-order: ' + menuItemCount + ';',
						} );

						const menuItemLinkClasses = [ 'e-n-menu-title-text' ];

						if ( !! item.item_link.url ) {
							menuItemLinkClasses.push( 'e-link' );
							menuItemLinkClasses.push( 'e-focus' );
						}

						view.addRenderAttribute( menuItemTitleKey, {
							'class': menuItemLinkClasses,
							'role': !! item.item_link.url ? 'menuitem' : 'none',
							'tabindex': 1 === menuItemCount ? '0' : '-1',
							'data-binding-type': 'repeater-item',
							'data-binding-repeater-name': 'menu_items',
							'data-binding-setting': ['item_title'],
							'data-binding-index': menuItemCount,
						} );

						view.addRenderAttribute( menuItemTitleContainerLinkKey, {
							'class': [ 'e-n-menu-title-container' ],
							'aria-current': 'page',
						} );

						view.addRenderAttribute( menuItemDropdownIconKey, {
							'id': 'e-n-menu-dropdown-icon-' + menuItemUid,
							'class': [ 'e-n-menu-dropdown-icon', 'e-focus' ],
							'role': 'button',
							'data-tab-index': menuItemCount,
							'tabindex': 1 === menuItemCount ? '0' : '-1',
							'aria-haspopup': hasDropdownContent ? 'true' : 'false',
							'aria-expanded': 'false',
							'aria-controls': 'e-n-menu-content-' + menuItemUid,
							'aria-label': '<?php echo esc_html__( 'Expand: ', 'elementor-pro' ); ?>' + item.item_title,
						} );
					#>

					<li {{{ view.getRenderAttributeString( menuItemWrapperKey ) }}}>
						<div {{{ view.getRenderAttributeString( menuItemTitleContainerLinkKey ) }}}>

							<# if (menuIcon.value) { #>
								<span class="e-n-menu-icon">
									<span class="icon-active" >{{{ menuIconActive.value }}}</span>
									<span class="icon-inactive">{{{ menuIcon.value }}}</span>
								</span>
							<# } #>

							<# if ( menuItemLink ) { #>
								<a {{{ view.getRenderAttributeString( menuItemTitleKey ) }}}>
							<# } else { #>
								<span class="e-n-menu-title-text">
							<# } #>
								{{{ item.item_title }}}
							<# if ( menuItemLink ) { #>
								</a>
							<# } else { #>
								</span>
							<# } #>
						</div>

						<# if ( hasDropdownContent ) { #>
							<button {{{ view.getRenderAttributeString( menuItemDropdownIconKey ) }}}>
								<span class="e-n-menu-dropdown-icon-closed">{{{ menuItemIcon.value }}}</span>
								<span class="e-n-menu-dropdown-icon-opened">{{{  menuItemIconActive.value }}}</span>
							</button>
						<# } #>
					</li>
					<# } ); #>
				</ul>
				<div class="e-n-menu-content"></div>
			</div>
		</nav>
		<# } #>
		<?php
	}
}
