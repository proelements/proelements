<?php
namespace ElementorPro\Modules\ThemeElements\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Search_Form extends Base {

	public function get_name() {
		return 'search-form';
	}

	public function get_title() {
		return __( 'Search Form', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-site-search';
	}

	public function get_keywords() {
		return [ 'search', 'form' ];
	}

	public function get_style_depends() {
		if ( Icons_Manager::is_migration_allowed() ) {
			return [ 'elementor-icons-fa-solid' ];
		}
		return [];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'search_content',
			[
				'label' => __( 'Search Form', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'skin',
			[
				'label' => __( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'classic',
				'options' => [
					'classic' => __( 'Classic', 'elementor-pro' ),
					'minimal' => __( 'Minimal', 'elementor-pro' ),
					'full_screen' => __( 'Full Screen', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-search-form--skin-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'placeholder',
			[
				'label' => __( 'Placeholder', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'separator' => 'before',
				'default' => __( 'Search', 'elementor-pro' ) . '...',
			]
		);

		$this->add_control(
			'heading_button_content',
			[
				'label' => __( 'Button', 'elementor-pro' ),
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
				'label' => __( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'icon',
				'options' => [
					'icon' => __( 'Icon', 'elementor-pro' ),
					'text' => __( 'Text', 'elementor-pro' ),
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
				'label' => __( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => __( 'Search', 'elementor-pro' ),
				'separator' => 'after',
				'condition' => [
					'button_type' => 'text',
					'skin' => 'classic',
				],
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => __( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'search',
				'options' => [
					'search' => [
						'title' => __( 'Search', 'elementor-pro' ),
						'icon' => 'eicon-search',
					],
					'arrow' => [
						'title' => __( 'Arrow', 'elementor-pro' ),
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
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
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
			]
		);

		$this->add_control(
			'toggle_button_content',
			[
				'label' => __( 'Toggle', 'elementor-pro' ),
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
				'label' => __( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'center',
				'options' => [
					'left' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-h-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'elementor-pro' ),
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
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 33,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i' => 'font-size: {{SIZE}}{{UNIT}}; width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}',
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
				'label' => __( 'Input', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'icon_size_minimal',
			[
				'label' => __( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__icon' => 'font-size: {{SIZE}}{{UNIT}}',
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
				'label' => __( 'Overlay Color', 'elementor-pro' ),
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
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'input_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__input,
					{{WRAPPER}} .elementor-search-form__icon,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button:hover,
					{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'input_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
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
				'label' => __( 'Border Color', 'elementor-pro' ),
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
				'label' => __( 'Focus', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'input_text_color_focus',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}:not(.elementor-search-form--skin-full_screen) .elementor-search-form--focus .elementor-search-form__input,
					{{WRAPPER}} .elementor-search-form--focus .elementor-search-form__icon,
					{{WRAPPER}} .elementor-lightbox .dialog-lightbox-close-button:hover,
					{{WRAPPER}}.elementor-search-form--skin-full_screen input[type="search"].elementor-search-form__input:focus' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'input_background_color_focus',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
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
				'label' => __( 'Border Color', 'elementor-pro' ),
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
				'label' => __( 'Border Size', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
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
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'default' => [
					'size' => 3,
					'unit' => 'px',
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
				'label' => __( 'Button', 'elementor-pro' ),
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
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
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
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_text_color_hover',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_background_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'icon_size',
			[
				'label' => __( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__submit' => 'font-size: {{SIZE}}{{UNIT}}',
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
				'label' => __( 'Width', 'elementor-pro' ),
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
				'label' => __( 'Toggle', 'elementor-pro' ),
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
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'toggle_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle' => 'color: {{VALUE}}; border-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'toggle_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_toggle_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'toggle_color_hover',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle:hover' => 'color: {{VALUE}}; border-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'toggle_background_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'toggle_icon_size',
			[
				'label' => __( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i:before' => 'font-size: calc({{SIZE}}em / 100)',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'toggle_border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i' => 'border-width: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'toggle_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-search-form__toggle i' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings();
		$this->add_render_attribute(
			'input', [
				'placeholder' => $settings['placeholder'],
				'class' => 'elementor-search-form__input',
				'type' => 'search',
				'name' => 's',
				'title' => __( 'Search', 'elementor-pro' ),
				'value' => get_search_query(),
			]
		);

		// Set the selected icon.
		$icon_class = '';
		if ( 'icon' == $settings['button_type'] ) {
			$icon_class = 'search';

			if ( 'arrow' == $settings['icon'] ) {
				$icon_class = is_rtl() ? 'arrow-left' : 'arrow-right';
			}

			$this->add_render_attribute( 'icon', [
				'class' => 'fa fa-' . $icon_class,
			] );
		}

		$migration_allowed = Icons_Manager::is_migration_allowed();
		$icon = [
			'value' => 'fas fa-' . $icon_class,
			'library' => 'fa-solid',
		];
		?>
		<form class="elementor-search-form" role="search" action="<?php echo home_url(); ?>" method="get">
			<?php do_action( 'elementor_pro/search_form/before_input', $this ); ?>
			<?php if ( 'full_screen' === $settings['skin'] ) : ?>
			<div class="elementor-search-form__toggle">
				<?php if ( ! $migration_allowed || ! Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] ) ) { ?>
					<i class="fa fa-search" aria-hidden="true"></i>
				<?php } ?>
				<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
			</div>
			<?php endif; ?>
			<div class="elementor-search-form__container">
				<?php if ( 'minimal' === $settings['skin'] ) : ?>
					<div class="elementor-search-form__icon">
						<i class="fa fa-search" aria-hidden="true"></i>
						<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
					</div>
				<?php endif; ?>
				<input <?php echo $this->get_render_attribute_string( 'input' ); ?>>
				<?php do_action( 'elementor_pro/search_form/after_input', $this ); ?>
				<?php if ( 'classic' === $settings['skin'] ) : ?>
					<button class="elementor-search-form__submit" type="submit" title="<?php esc_attr_e( 'Search', 'elementor-pro' ); ?>" aria-label="<?php esc_attr_e( 'Search', 'elementor-pro' ); ?>">
						<?php if ( 'icon' === $settings['button_type'] ) : ?>
							<i <?php echo $this->get_render_attribute_string( 'icon' ); ?> aria-hidden="true"></i>
							<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
						<?php elseif ( ! empty( $settings['button_text'] ) ) : ?>
							<?php echo $settings['button_text']; ?>
						<?php endif; ?>
					</button>
				<?php endif; ?>
				<?php if ( 'full_screen' === $settings['skin'] ) : ?>
				<div class="dialog-lightbox-close-button dialog-close-button">
					<i class="eicon-close" aria-hidden="true"></i>
					<span class="elementor-screen-only"><?php esc_html_e( 'Close', 'elementor-pro' ); ?></span>
				</div>
				<?php endif ?>
			</div>
		</form>
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
			var iconClass = 'fa fas fa-search';

			if ( 'arrow' === settings.icon ) {
				if ( elementorCommon.config.isRTL ) {
					iconClass = 'fa fas fa-arrow-left';
				} else {
					iconClass = 'fa fas fa-arrow-right';
				}
			}
		#>
		<form class="elementor-search-form" action="" role="search">
			<# if ( 'full_screen' === settings.skin ) { #>
				<div class="elementor-search-form__toggle">
					<i class="fa fas fa-search" aria-hidden="true"></i>
					<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
				</div>
			<# } #>
			<div class="elementor-search-form__container">
				<# if ( 'minimal' === settings.skin ) { #>
					<div class="elementor-search-form__icon">
						<i class="fa fas fa-search" aria-hidden="true"></i>
						<span class="elementor-screen-only"><?php esc_html_e( 'Search', 'elementor-pro' ); ?></span>
					</div>
				<# } #>
				<input type="search"
					   name="s"
					   title="<?php esc_attr_e( 'Search', 'elementor-pro' ); ?>"
					   class="elementor-search-form__input"
					   placeholder="{{ settings.placeholder }}">

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
		<?php
	}
}
