<?php
namespace ElementorPro\Modules\ThemeElements\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Utils;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Search_Form extends Base {

	public function get_name() {
		return 'search-form';
	}

	public function get_title() {
		return esc_html__( 'Search Form', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-site-search';
	}

	public function get_keywords() {
		return [ 'search', 'form' ];
	}

	public function show_in_panel(): bool {
		return false;
	}

	public function get_style_depends(): array {
		$style_depends = [ 'widget-search-form' ];

		if ( Icons_Manager::is_migration_allowed() ) {
			$style_depends[] = 'elementor-icons-fa-solid';
		}

		return $style_depends;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'search_content',
			[
				'label' => esc_html__( 'Search Form', 'elementor-pro' ),
			]
		);

		$this->add_deprecation_message(
			'3.24.0',
			esc_html__( 'You are currently editing a Search Form Widget in its old version. Any new Search widget dragged into the canvas will be the new Search widget, with the improved search capabilities.', 'elementor-pro' ),
			'search'
		);

		$this->add_control(
			'skin',
			[
				'label' => esc_html__( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'classic',
				'options' => [
					'classic' => esc_html__( 'Classic', 'elementor-pro' ),
					'minimal' => esc_html__( 'Minimal', 'elementor-pro' ),
					'full_screen' => esc_html__( 'Full Screen', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-search-form--skin-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'placeholder',
			[
				'label' => esc_html__( 'Placeholder', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'separator' => 'before',
				'default' => esc_html__( 'Search', 'elementor-pro' ) . '...',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'heading_button_content',
			[
				'label' => esc_html__( 'Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'button_type',
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'icon',
				'options' => [
					'icon' => esc_html__( 'Icon', 'elementor-pro' ),
					'text' => esc_html__( 'Text', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-search-form--button-type-',
				'render_type' => 'template',
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'button_text',
			[
				'label' => esc_html__( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Search', 'elementor-pro' ),
				'condition' => [
					'button_type' => 'text',
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'search',
				'options' => [
					'search' => [
						'title' => esc_html__( 'Search', 'elementor-pro' ),
						'icon' => 'eicon-search',
					],
					'arrow' => [
						'title' => esc_html__( 'Arrow', 'elementor-pro' ),
						'icon' => 'eicon-arrow-right',
					],
				],
				'render_type' => 'template',
				'prefix_class' => 'elementor-search-form--icon-',
				'condition' => [
					'button_type' => 'icon',
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'default' => [
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__container' => 'min-height: {{SIZE}}{{UNIT}}',
					'{{WRAPPER}} .elementor-search-form__submit' => 'min-width: {{SIZE}}{{UNIT}}',
					'body:not(.rtl) {{WRAPPER}} .elementor-search-form__icon' => 'padding-left: calc({{SIZE}}{{UNIT}} / 3)',
					'body.rtl {{WRAPPER}} .elementor-search-form__icon' => 'padding-right: calc({{SIZE}}{{UNIT}} / 3)',
					'{{WRAPPER}} .elementor-search-form__input, {{WRAPPER}}.elementor-search-form--button-type-text .elementor-search-form__submit' => 'padding-left: calc({{SIZE}}{{UNIT}} / 3); padding-right: calc({{SIZE}}{{UNIT}} / 3)',
				],
				'condition' => [
					'skin!' => 'full_screen',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'toggle_button_content',
			[
				'label' => esc_html__( 'Toggle', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'skin' => 'full_screen',
				],
			]
		);

		$this->add_control(
			'toggle_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'center',
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
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form' => 'text-align: {{VALUE}}',
				],
				'condition' => [
					'skin' => 'full_screen',
				],
			]
		);

		$this->add_control(
			'toggle_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 33,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-size: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'skin' => 'full_screen',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_input_style',
			[
				'label' => esc_html__( 'Input', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'icon_size_minimal',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__icon' => '--e-search-form-icon-size-minimal: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'skin' => 'minimal',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'overlay_background_color',
			[
				'label' => esc_html__( 'Overlay Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}.elementor-search-form--skin-full_screen .elementor-search-form__container' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'skin' => 'full_screen',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'input_typography',
				'selector' => '{{WRAPPER}} input[type="search"].elementor-search-form__input',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->start_controls_tabs( 'tabs_input_colors' );

		$this->start_controls_tab(
			'tab_input_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'input_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__input,
					{{WRAPPER}} .elementor-search-form__icon,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button:hover,
					{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'color: {{VALUE}}; fill: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'input_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form__container' => 'background-color: {{VALUE}}',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'skin!' => 'full_screen',
				],
			]
		);

		$this->add_control(
			'input_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form__container' => 'border-color: {{VALUE}}',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'input_box_shadow',
				'selector' => '{{WRAPPER}} .elementor-search-form__container',
				'fields_options' => [
					'box_shadow_type' => [
						'separator' => 'default',
					],
				],
				'condition' => [
					'skin!' => 'full_screen',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_input_focus',
			[
				'label' => esc_html__( 'Focus', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'input_text_color_focus',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form--focus .elementor-search-form__input,
					{{WRAPPER}} .elementor-search-form--focus .elementor-search-form__icon,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button:hover,
					{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input:focus' => 'color: {{VALUE}}; fill: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'input_background_color_focus',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form--focus .elementor-search-form__container' => 'background-color: {{VALUE}}',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input:focus' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'skin!' => 'full_screen',
				],
			]
		);

		$this->add_control(
			'input_border_color_focus',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form--focus .elementor-search-form__container' => 'border-color: {{VALUE}}',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input:focus' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'input_box_shadow_focus',
				'selector' => '{{WRAPPER}} .elementor-search-form--focus .elementor-search-form__container',
				'fields_options' => [
					'box_shadow_type' => [
						'separator' => 'default',
					],
				],
				'condition' => [
					'skin!' => 'full_screen',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'button_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form__container' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
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
					'size' => 3,
				],
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form__container' => 'border-radius: {{SIZE}}{{UNIT}}',
					'{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button_style',
			[
				'label' => esc_html__( 'Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'skin' => 'classic',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'selector' => '{{WRAPPER}} .elementor-search-form__submit',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'condition' => [
					'button_type' => 'text',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_button_colors' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => '--e-search-form-submit-text-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_text_color_hover',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit:hover' => '--e-search-form-submit-text-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-search-form__submit:focus' => '--e-search-form-submit-text-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_background_color_hover',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit:hover' => 'background-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-search-form__submit:focus' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => '--e-search-form-submit-icon-size: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'button_type' => 'icon',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'button_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 10,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => 'min-width: calc( {{SIZE}} * {{size.SIZE}}{{size.UNIT}} )',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_toggle_style',
			[
				'label' => esc_html__( 'Toggle', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'skin' => 'full_screen',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_toggle_color' );

		$this->start_controls_tab(
			'tab_toggle_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'toggle_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'toggle_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_toggle_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'toggle_color_hover',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle:hover' => '--e-search-form-toggle-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-search-form__toggle:focus' => '--e-search-form-toggle-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'toggle_background_color_hover',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle:hover' => '--e-search-form-toggle-background-color: {{VALUE}}',
					'{{WRAPPER}} .elementor-search-form__toggle:focus' => '--e-search-form-toggle-background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'toggle_icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-icon-size: calc({{SIZE}}em / 100)',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'toggle_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'max' => 20,
					],
					'em' => [
						'max' => 2,
					],
					'rem' => [
						'max' => 2,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-border-width: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'toggle_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => '--e-search-form-toggle-border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$this->add_render_attribute(
			'form',
			[
				'class' => 'elementor-search-form',
				'action' => esc_url( home_url() ),
				'method' => 'get',
			]
		);

		$this->add_render_attribute(
			'container',
			[
				'class' => 'elementor-search-form__container',
			]
		);

		$this->add_render_attribute(
			'label',
			[
				'class' => 'elementor-screen-only',
				'for' => 'elementor-search-form-' . $this->get_id(),
			]
		);

		$this->add_render_attribute(
			'input',
			[
				'id' => 'elementor-search-form-' . $this->get_id(),
				'placeholder' => $settings['placeholder'],
				'class' => 'elementor-search-form__input',
				'type' => 'search',
				'name' => 's',
				'value' => get_search_query(),
			]
		);

		// Set the selected icon.
		$icon_class = 'search';

		if ( 'icon' === $settings['button_type'] && 'arrow' === $settings['icon'] ) {
			$icon_class = is_rtl() ? 'arrow-left' : 'arrow-right';
		}

		$this->add_render_attribute( 'icon', 'class', 'fa fa-' . $icon_class );

		$icon = [
			'value' => 'fas fa-' . $icon_class,
			'library' => 'fa-solid',
		];
		?>
		<search role="search">
			<form <?php $this->print_render_attribute_string( 'form' ); ?>>
				<?php
				/**
				 * Before Elementor search form inputs.
				 *
				 * Fires before Elementor search form input fields.
				 *
				 * @param Search_Form $this An instance of Elementor search form.
				 */
				do_action( 'elementor_pro/search_form/before_input', $this );
				?>
				<?php if ( 'full_screen' === $settings['skin'] ) : ?>
				<div class="elementor-search-form__toggle" tabindex="0" role="button">
					<?php $this->render_search_icon( $icon, [ 'aria-hidden' => 'true' ] ); ?>
					<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
				</div>
				<?php endif; ?>
				<div <?php $this->print_render_attribute_string( 'container' ); ?>>
					<label <?php $this->print_render_attribute_string( 'label' ); ?>><?php esc_html_e( 'Search', 'elementor-pro' ); ?></label>

					<?php if ( 'minimal' === $settings['skin'] ) : ?>
						<div class="elementor-search-form__icon">
							<?php $this->render_search_icon( $icon, [ 'aria-hidden' => 'true' ] ); ?>
							<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
						</div>
					<?php endif; ?>

					<input <?php $this->print_render_attribute_string( 'input' ); ?>>
					<?php
					/**
					 * After Elementor search form inputs.
					 *
					 * Fires after Elementor search form input fields, before the search
					 * button.
					 *
					 * @param Search_Form $this An instance of Elementor search form.
					 */
					do_action( 'elementor_pro/search_form/after_input', $this );
					?>

					<?php if ( 'classic' === $settings['skin'] ) : ?>
						<button class="elementor-search-form__submit" type="submit" aria-label="<?php esc_attr_e( 'Search', 'elementor-pro' ); ?>">
							<?php if ( 'icon' === $settings['button_type'] ) : ?>
								<?php $this->render_search_icon( $icon, $this->get_render_attributes( 'icon' ) ); ?>
								<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
							<?php elseif ( ! empty( $settings['button_text'] ) ) : ?>
								<?php $this->print_unescaped_setting( 'button_text' ); ?>
							<?php endif; ?>
						</button>
					<?php endif; ?>

					<?php if ( 'full_screen' === $settings['skin'] ) : ?>
					<div class="dialog-lightbox-close-button dialog-close-button" role="button" tabindex="0">
						<?php
							Icons_Manager::render_icon( [
								'library' => 'eicons',
								'value' => 'eicon-close',
							], [ 'aria-hidden' => 'true' ] );
						?>
						<span class="elementor-screen-only"><?php esc_html_e( 'Close this search box.', 'elementor-pro' ); ?></span>
					</div>
					<?php endif ?>
				</div>
			</form>
		</search>
		<?php
	}

	/**
	 * Render Search Form widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
		view.addRenderAttribute(
			'form',
			{
				'class': 'elementor-search-form',
				'action': '<?php echo esc_url( home_url() ); ?>',
				'method': 'get',
			}
		);

		view.addRenderAttribute(
			'container',
			{
				'class': 'elementor-search-form__container',
			}
		);

		view.addRenderAttribute(
			'label',
			{
				'class': 'elementor-screen-only',
				'for': 'elementor-search-form-<?php echo esc_attr( $this->get_id() ); ?>',
			}
		);

		view.addRenderAttribute(
			'input',
			{
				'id': 'elementor-search-form-<?php echo esc_attr( $this->get_id() ); ?>',
				'placeholder': settings.placeholder,
				'class': 'elementor-search-form__input',
				'type': 'search',
				'name': 's',
			}
		);

			var iconClass = 'fa fas fa-search';

			if ( 'arrow' === settings.icon ) {
				if ( elementorCommon.config.isRTL ) {
					iconClass = 'fa fas fa-arrow-left';
				} else {
					iconClass = 'fa fas fa-arrow-right';
				}
			}
		#>
		<search role="search">
			<form {{{ view.getRenderAttributeString( 'form' ) }}}>
				<# if ( 'full_screen' === settings.skin ) { #>
					<div class="elementor-search-form__toggle" tabindex="0" role="button">
						<i class="fa fas fa-search" aria-hidden="true"></i>
						<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
					</div>
				<# } #>
				<div {{{ view.getRenderAttributeString( 'container' ) }}}>
					<label {{{ view.getRenderAttributeString( 'label' ) }}}><?php esc_html_e( 'Search', 'elementor-pro' ); ?></label>

					<# if ( 'minimal' === settings.skin ) { #>
						<div class="elementor-search-form__icon">
							<i class="fa fas fa-search" aria-hidden="true"></i>
							<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
						</div>
					<# } #>

					<input {{{ view.getRenderAttributeString( 'input' ) }}}>

					<# if ( 'classic' === settings.skin ) { #>
						<button class="elementor-search-form__submit" type="submit">
							<# if ( 'icon' === settings.button_type ) { #>
								<i class="{{ iconClass }}" aria-hidden="true"></i>
								<span class="elementor-screen-only"><?php esc_html_e( 'Submit', 'elementor-pro' ); ?></span>
							<# } else if ( settings.button_text ) { #>
								{{{ settings.button_text }}}
							<# } #>
						</button>
					<# } #>
				</div>
			</form>
		</search>
		<?php
	}

	private function render_search_icon( $icon, $attributes = [] ) {
		// When the experiment is active and the search icon renders as SVG, it needs additional container for the icon box border.
		if ( Plugin::elementor()->experiments->is_feature_active( 'e_font_icon_svg' ) ) {
			$icon_html = Icons_Manager::render_font_icon( $icon, $attributes );

			Utils::print_unescaped_internal_string( sprintf( '<div class="e-font-icon-svg-container">%s</div>', $icon_html ) );
		} else {
			$migration_allowed = Icons_Manager::is_migration_allowed();

			if ( ! $migration_allowed || ! Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] ) ) {
				Utils::print_unescaped_internal_string( sprintf( '<i %s aria-hidden="true"></i>', esc_attr( $this->get_render_attribute_string( 'icon' ) ) ) );
			}
		}
	}

	public function get_group_name() {
		return 'theme-elements';
	}
}
