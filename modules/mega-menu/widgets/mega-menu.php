<?php
namespace ElementorPro\Modules\MegaMenu\Widgets;

use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Plugin;
use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
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
		return [ 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'Mega Menu', 'Nested Elements' ];
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
		return '.e-n-menu-items-content';
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
			return ":where( {{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content ) > .e-con{$state}";
		}
	}

	/**
	 * Get Typography Selector
	 *
	 * Returns a selector class for the typography widget control.
	 *
	 * @param string $menu_mobile_and_desktop_css_selector The css selector for the menu.
	 *
	 * @return string The css selector for the typography control.
	 */
	protected function get_typography_selector( $menu_mobile_and_desktop_css_selector ): string {
		$typography_selector = "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title";
		$typography_selector .= ", {$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title > .e-n-menu-item-title-text";
		$typography_selector .= ", {$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title > .e-n-menu-item-title-text > a.e-n-menu-item-title-link";

		return $typography_selector;
	}

	protected function register_controls() {
		$menu_mobile_and_desktop_css_selector = ':is( {{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-heading, {{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content )';

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
			'element_id',
			[
				'label' => esc_html__( 'CSS ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'dynamic' => [
					'active' => true,
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
				'options' => [
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
				],
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
					'icon' => 'eicon-flex eicon-align-start-h',
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-h-align-center',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-end-h',
				],
				'stretch' => [
					'title' => esc_html__( 'Stretch', 'elementor-pro' ),
					'icon' => 'eicon-h-align-stretch',
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-items-heading-justify-content: initial; --n-menu-item-title-flex-grow: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: initial;',
				'center' => '--n-menu-items-heading-justify-content: center; --n-menu-item-title-flex-grow: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: center;',
				'end' => '--n-menu-items-heading-justify-content: flex-end; --n-menu-item-title-flex-grow: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: flex-end;',
				'stretch' => '--n-menu-items-heading-justify-content: space-between; --n-menu-item-title-flex-grow: 1; --n-menu-item-title-justify-content: center; --n-menu-item-title-justify-content-mobile: center;',
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
			'condition' => [
				'item_layout' => 'horizontal',
			],
		]);

		$this->add_responsive_control( 'item_position_dropdown', [
			'label' => esc_html__( 'Item Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-start-h',
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-h-align-center',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-end-h',
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-item-title-justify-content: initial;  --n-menu-item-title-justify-content-mobile: initial;',
				'center' => '--n-menu-item-title-justify-content: center; --n-menu-item-title-justify-content-mobile: center;',
				'end' => '--n-menu-item-title-justify-content: flex-end; --n-menu-item-title-justify-content-mobile: flex-end;',
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
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 3000,
					],
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
						'icon' => 'eicon-flex eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-flex eicon-align-end-h',
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
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 3000,
					],
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
			'label' => esc_html__( 'Responsive Settings', 'elementor-pro' ),
		] );

		$dropdown_options = [];
		$excluded_breakpoints = [
			'laptop',
			'tablet_extra',
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
			'size_units' => [ 'px' ],
			'range' => [
				'px' => [
					'min' => 0,
					'max' => 200,
				],
			],
			'default' => [
				'size' => 0,
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-item-title-space-between: {{SIZE}}{{UNIT}}',
			],
		] );

		$this->add_responsive_control( 'menu_item_title_distance_from_content', [
			'label' => esc_html__( 'Distance from content', 'elementor-pro' ),
			'type' => Controls_Manager::SLIDER,
			'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
			'range' => [
				'px' => [
					'min' => 0,
					'max' => 200,
				],
				'%' => [
					'min' => 0,
					'max' => 100,
				],
			],
			'default' => [
				'size' => 0,
			],
			'selectors' => [
				'{{WRAPPER}}' => '--n-menu-item-title-distance-from-content: {{SIZE}}{{UNIT}}',
			],
			'frontend_available' => true,
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name' => 'menu_item_title_typography',
			'global' => [
				'default' => Global_Typography::TYPOGRAPHY_ACCENT,
			],
			'selector' => $this->get_typography_selector( $menu_mobile_and_desktop_css_selector ),
			'fields_options' => [
				'font_size' => [
					'selectors' => [
						'{{WRAPPER}}' => '--n-menu-item-title-font-size: {{SIZE}}{{UNIT}}',
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
					'{{WRAPPER}}' => '--n-menu-item-title-color-normal: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_normal',
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:not( .e-current ):not( :hover )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:not( .e-current ):not( :hover )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:not( .e-current ):not( :hover )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:not( .e-current ):not( :hover )",
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
					'{{WRAPPER}} ' => '--n-menu-item-title-color-hover: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_hover',
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:hover:not( .e-current )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:hover:not( .e-current )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:hover:not( .e-current )",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title:hover:not( .e-current )",
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
					'{{WRAPPER}}' => '--n-menu-item-title-transition: {{SIZE}}{{UNIT}}',
				],
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 3000,
					],
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
					'{{WRAPPER}} ' => '--n-menu-item-title-color-active: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'menu_item_title_text_shadow_active',
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title.e-current",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title.e-current",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title.e-current",
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
				'selector' => "{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title.e-current",
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
					"{$menu_mobile_and_desktop_css_selector} > .e-n-menu-item-title" => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
					'{{WRAPPER}}' => '--n-menu-item-title-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

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
						'min' => 0,
						'max' => 200,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
					'em' => [
						'min' => 0,
						'max' => 10,
						'step' => 0.1,
					],
					'rem' => [
						'min' => 0,
						'max' => 10,
						'step' => 0.1,
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':not( .e-active ):not( :hover )' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':not( .e-active ):not( :hover )' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':not( .e-active ):not( :hover )' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( .e-active, :not( .e-active ) )' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( .e-active, :not( .e-active ) )' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', ':hover:is( .e-active, :not( .e-active ) )' ),
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
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 3000,
					],
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '.e-active' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '.e-active' ),
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
				'selector' => $this->get_control_selector_class( 'menu_toggle_icon', '.e-active' ),
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
			'range' => [
				'px' => [
					'min' => 0,
					'max' => 100,
				],
			],
			'default' => [
				'size' => 0,
			],
			'placeholder' => [
				'size' => 0,
			],
			'size_units' => [ 'px' ],
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
				'{{WRAPPER}}' => '--n-menu-item-title-normal-color-dropdown: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'dropdown_menu_item_background_color_normal',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content > .e-n-menu-item-title.e-collapse:not( .e-current )',
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
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content > .e-n-menu-item-title.e-collapse:not( .e-current )',

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
				'{{WRAPPER}}' => '--n-menu-item-title-active-color-dropdown: {{VALUE}};',
			],
		] );

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'dropdown_menu_item_background_color_active',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content > .e-n-menu-item-title.e-collapse.e-current',
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
				'selector' => '{{WRAPPER}} > .elementor-widget-container > .e-n-menu > .e-n-menu-items-content > .e-n-menu-item-title.e-collapse.e-current',

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
							'{{WRAPPER}}' => '--n-menu-dropdown-content-box-border-width-top: {{TOP}}{{UNIT}}; --n-menu-dropdown-content-box-border-width-right: {{RIGHT}}{{UNIT}}; --n-menu-dropdown-content-box-border-width-bottom: {{BOTTOM}}{{UNIT}}; --n-menu-dropdown-content-box-border-width-left: {{LEFT}}{{UNIT}}',
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

	protected function render() {
		$settings = $this->get_settings_for_display();
		$desktop_menu_titles = '';
		$mobile_menu_titles_and_content = '';

		foreach ( $settings['menu_items'] as $index => $item ) {
			$desktop_menu_titles .= $this->create_desktop_menu_titles( $index, $item );
			$mobile_menu_titles_and_content .= $this->create_mobile_menu_titles_and_content( $index, $item );
		}

		?>
		<nav class="e-n-menu">
			<?php $this->render_menu_toggle( $settings ); ?>
			<div class="e-n-menu-items-heading">
				<?php echo $desktop_menu_titles; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
			<div class="e-n-menu-items-content" aria-orientation="vertical">
				<?php echo $mobile_menu_titles_and_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
		</nav>
		<?php
	}

	protected function render_menu_toggle( $settings ) {
		$menu_toggle_hover_animation = ! empty( $settings['menu_toggle_icon_hover_animation'] )
			? ' elementor-animation-' . $settings['menu_toggle_icon_hover_animation']
			: '';

		$menu_toggle_class = 'e-n-menu-toggle' . $menu_toggle_hover_animation;

		$this->add_render_attribute( 'menu-toggle', [
			'class' => $menu_toggle_class,
			'role' => 'button',
			'aria-label' => esc_html__( 'Menu Toggle', 'elementor-pro' ),
		] );
		?>
		<div <?php $this->print_render_attribute_string( 'menu-toggle' ); ?>>
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

			<span class="elementor-screen-only"><?php echo esc_html__( 'Menu', 'elementor-pro' ); ?></span>
		</div>
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
					'role': 'button',
					'aria-label': '<?php echo esc_html__( 'Menu Toggle', 'elementor-pro' ); ?>',
				} );
			#>
			<div {{{ view.getRenderAttributeString( menuToggleKey ) }}}>
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
			</div>
		<?php
	}

	protected function merge_menu_title_classes( $index, $item, $classes ) {
		$current_class = $this->get_current_menu_item_class( $item['item_link']['url'] );
		$items_open_on_click = 'click' === $this->get_settings_for_display( 'open_on' );

		if ( ! empty( $current_class ) ) {
			$classes[] = $current_class;
		}

		if ( $items_open_on_click && $this->item_has_dropdown_with_content( $index, $this->get_children(), $item['item_dropdown_content'] ) ) {
			$classes[] = 'e-click';
		}

		return $classes;
	}

	protected function create_desktop_menu_titles( $index, $item ) {
		$args = [
			'isMobile' => false,
			'setting_key' => 'item_title',
			'class' => $this->merge_menu_title_classes( $index, $item, [ 'e-n-menu-item-title', 'e-normal' ] ),
		];
		return $this->render_menu_titles_html( $index, $item, $args );
	}

	protected function create_mobile_menu_titles_and_content( $index, $item ) {
		$args = [
			'isMobile' => true,
			'setting_key' => 'item_title_mobile',
			'class' => $this->merge_menu_title_classes( $index, $item, [ 'e-n-menu-item-title', 'e-collapse' ] ),
		];
		return $this->render_menu_titles_html( $index, $item, $args );
	}

	protected function render_menu_titles_html( $index, $item, $args ) {
		$settings = $this->get_settings_for_display();
		$icon_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon'], [ 'aria-hidden' => 'true' ] );
		$icon_active_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon_active'], [ 'aria-hidden' => 'true' ] );
		$display_index = $index + 1;
		$id_int = substr( $this->get_id_int(), 0, 3 );
		$item_dropdown_content = $settings['menu_items'][ $index ]['item_dropdown_content'];
		$menu_item_id = empty( $item['element_id'] ) ? 'e-n-menu-item-title-' . $id_int . $display_index : $item['element_id'];
		$key = $this->get_repeater_setting_key( $args['setting_key'], 'menu_items', $display_index );

		if ( ! empty( $settings['hover_animation'] ) ) {
			$args['class'][] = 'elementor-animation-' . $settings['hover_animation'];
		}

		$this->add_attributes_to_item( $key, $args['class'], $menu_item_id, $display_index, $id_int );

		ob_start();
		?>
			<div <?php echo wp_kses_post( $this->get_render_attribute_string( $key ) ); ?> >
				<span class="e-n-menu-item-title-text" >
					<?php
					$allowed_html = [
						'a' => [
							'href' => [],
							'class' => [],
							'aria-current' => [],
							'rel' => [],
							'target' => [],
						],
					];
					echo wp_kses( $this->get_item_title( $item ), $allowed_html );
					?>
				</span>
				<?php if ( 'yes' === $item_dropdown_content ) { ?>
					<span class="e-n-menu-item-icon">
						<span class="e-n-menu-item-icon-opened" ><?php echo $icon_active_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						<span class="e-n-menu-item-icon-closed"><?php echo $icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					</span>
				<?php } ?>
			</div>
		<?php
		if ( $args['isMobile'] ) {
			$this->print_child( $index, $item_dropdown_content );
		}

		return ob_get_clean();
	}

	public function add_attributes_to_item( $key, $classes, $menu_item_id, $display_index, $id_int ) {
		$this->add_render_attribute( $key, [
			'id' => $menu_item_id,
			'class' => $classes,
			'aria-selected' => 1 === $display_index ? 'true' : 'false',
			'data-tab' => $display_index,
			'role' => 'tab',
			'tabindex' => 1 === $display_index ? '0' : '-1',
			'aria-controls' => 'e-n-tab-content-' . $id_int . $display_index,
			'aria-expanded' => 'false',
		] );
	}

	protected function get_item_title( $item ) {
		$link_id = 'e-n-menu-item-title-' . $item['_id'];
		$current_class = $this->get_current_menu_item_class( $item['item_link']['url'] );

		$this->remove_render_attribute( $link_id );
		$this->add_render_attribute( $link_id, 'class', 'e-n-menu-item-title-link' );

		if ( ! empty( $current_class ) ) {
			$this->add_render_attribute( $link_id, 'aria-current', 'page' );
		}

		$this->add_link_attributes( $link_id, $item['item_link'] );

		$title = $item['item_title'];

		if ( $item['item_link']['url'] ) {
			$title = '<a ' . $this->get_render_attribute_string( $link_id ) . '>' . $item['item_title'] . ' </a>';
		}

		return $title;
	}

	protected function get_current_menu_item_class( $menu_link_url ) {
		$menu_link_url = trim( $menu_link_url );
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
	 * @param string $item_dropdown_content
	 */
	public function print_child( $index, $item_dropdown_content = 'no' ) {
		$children = $this->get_children();
		$tab_id = $index + 1;

		// Add data-tab attribute to the content area.
		$add_attribute_to_container = function ( $should_render, $container ) use ( $tab_id ) {
			$container->add_render_attribute( '_wrapper', 'data-content', $tab_id );

			return $should_render;
		};

		if ( $this->item_has_dropdown_with_content( $index, $children, $item_dropdown_content ) ) {
			add_filter( 'elementor/frontend/container/should_render', $add_attribute_to_container, 10, 3 );

			$children[ $index ]->print_element();

			remove_filter( 'elementor/frontend/container/should_render', $add_attribute_to_container );
		}
	}

	protected function item_has_dropdown_with_content( $index, $children, $item_dropdown_content = 'no' ) {
		$data = ! empty( $children[ $index ] ) ? $children[ $index ]->get_data() : [];
		$elements = empty( $data['elements'] ) ? [] : $data['elements'];

		return ! empty( $children[ $index ] ) && ! empty( $elements ) && 'yes' === $item_dropdown_content;
	}

	protected function content_template() {
		?>
		<nav class="e-n-menu" role="tablist" aria-orientation="vertical">
			<# if ( settings['menu_items'] ) {
			const menuItemIcon = elementor.helpers.renderIcon( view, settings['menu_item_icon'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
				menuItemIconActive = elementor.helpers.renderIcon( view, settings['menu_item_icon_active'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
				elementUid = view.getIDInt().toString().substr( 0, 3 ),
				permalinkUrl = '<?php echo esc_url( $this->get_permalink_for_current_page() ); ?>';
			#>
			<?php $this->render_menu_toggle_template(); ?>
			<div class="e-n-menu-items-heading" role="tablist">
				<# _.each( settings['menu_items'], function( item, index ) {
					const menuItemCount = index + 1,
						menuItemUid = elementUid + menuItemCount,
						menuItemWrapperKey = menuItemUid,
						menuItemTitleKey = 'menu-item-title-' + menuItemUid,
						menuItemTitleLinkKey = 'menu-item-title-link-' + menuItemUid,
						menuItemId = 'e-n-menu-item-title-' + menuItemUid,
						menuItemIconKey = 'menu-item-icon-' + menuItemUid,
						menuItemLink = 'string' === typeof item['item_link'] ? item['item_link'] : item['item_link']['url'],
						menuItemDropdownContent =  item['item_dropdown_content'],
						currentPageClass = elementorPro.modules.megaMenu.getCurrentMenuItemClass( menuItemLink, permalinkUrl ),
						menuItemClassList = ['e-n-menu-item-title','e-normal'];

					settings['hover_animation'] && menuItemClassList.push( `elementor-animation-${ settings['hover_animation'] }` );

					if ( '' !== item.element_id ) {
						menuItemId = item.element_id;
					}

					if ( 'yes' !== menuItemDropdownContent ) {
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
						'data-tab': menuItemCount,
						'role': 'tab',
						'tabindex': 1 === menuItemCount ? '0' : '-1',
						'aria-controls': 'e-n-menu-item-content-' + menuItemUid,
						'aria-expanded': 'false',
					} );

					view.addRenderAttribute( menuItemTitleKey, {
						'class': [ 'e-n-menu-item-title-text' ],
						'data-binding-type': 'repeater-item',
						'data-binding-repeater-name': 'menu_items',
						'data-binding-setting': ['item_title'],
						'data-binding-index': menuItemCount,
					} );

					view.addRenderAttribute( menuItemTitleLinkKey, {
						'class': [ 'e-n-menu-item-title-link' ],
						'aria-current': 'page',
					} );
				#>

				<div {{{ view.getRenderAttributeString( menuItemWrapperKey ) }}}>
					<span {{{ view.getRenderAttributeString( menuItemTitleKey ) }}}>
						<# if ( menuItemLink ) { #>
							<a {{{ view.getRenderAttributeString( menuItemTitleLinkKey ) }}}>{{{ item.item_title }}}</a>
						<# } else { #>
							{{{ item.item_title }}}
						<# } #>
					</span>
					<# if ( 'yes' === menuItemDropdownContent ) { #>
						<span class="e-n-menu-item-icon">
							<span class="e-n-menu-item-icon-closed">{{{ menuItemIcon.value }}}</span>
							<span class="e-n-menu-item-icon-opened">{{{  menuItemIconActive.value }}}</span>
						</span>
					<# } #>
				</div>
				<# } ); #>
			</div>
			<div class="e-n-menu-items-content"></div>
			<# } #>
		</nav>
		<?php
	}
}
