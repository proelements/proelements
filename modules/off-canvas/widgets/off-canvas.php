<?php

namespace ElementorPro\Modules\OffCanvas\Widgets;

use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Controls_Manager;
use Elementor\Modules\NestedElements\Base\Widget_Nested_Base;
use Elementor\Utils;
use ElementorPro\Plugin;
use ElementorPro\Core\Utils as ProUtils;
use ElementorPro\Base\Base_Widget_Trait;

class Off_Canvas extends Widget_Nested_Base {

	use Base_Widget_Trait;

	const WIDGET_ID = 'Off_Canvas';

	public function get_name() {
		return 'off-canvas';
	}

	public function get_title() {
		return esc_html__( 'Off-Canvas', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-off-canvas';
	}

	public function get_keywords() {
		return [ 'off', 'canvas' ];
	}

	public function get_categories() {
		return [ 'pro-elements' ];
	}

	protected function get_default_children_elements() {
		return [
			[
				'elType' => 'container',
				'settings' => [
					'content_width' => 'full',
				],
			],
		];
	}

	protected function get_default_repeater_title_setting_key() {
		return '';
	}

	protected function register_controls() {
		$this->register_content_tab();
		$this->register_style_tab();
	}

	protected function register_content_tab() {
		$this->register_layout_section();
		$this->register_settings_section();
	}

	protected function register_style_tab() {
		$this->register_background_controls();
		$this->register_overlay_controls();
	}

	protected function get_default_children_placeholder_selector() {
		return '.e-off-canvas__content';
	}

	protected function register_layout_section() {
		$this->start_controls_section(
			'section_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'learn_more_alert',
			[
				'type' => Controls_Manager::ALERT,
				'alert_type' => 'info',
				'content' => sprintf(
					'%1$s <a target="_blank" href="https://go.elementor.com/off-canvas-help/">%2$s</a>',
					esc_html__( 'To open the Off-Canvas widget, add a link or a button to that page and direct it to the widget.', 'elementor-pro' ),
					esc_html__( 'Learn more', 'elementor-pro' ),
				),
			]
		);

		$this->add_control(
			'editing_mode',
			[
				'label' => esc_html__( 'Editing Mode', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'editor_available' => true,
				'render_type' => 'ui',
			]
		);

		$this->add_responsive_control(
			'horizontal_position',
			[
				'label' => esc_html__( 'Horizontal Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'flex-start' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-h-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-off-canvas-justify-content: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'vertical_position',
			[
				'label' => esc_html__( 'Vertical Position', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-off-canvas-align-items: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
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
						'min' => 0,
						'max' => 5,
					],
					'rem' => [
						'min' => 0,
						'max' => 5,
					],
					'vw' => [
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-off-canvas-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'height',
			[
				'label' => esc_html__( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'fit-content' => esc_html__( 'Fit To Content', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'selectors_dictionary' => [
					'fit-content' => '--e-off-canvas-height: fit-content; --e-off-canvas-content-overflow: initial;',
					'custom' => '--e-off-canvas-height: 100vh; --e-off-canvas-content-overflow: auto;',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}}',
				],
				'default' => 'custom',
			]
		);

		$this->add_responsive_control(
			'custom_height',
			[
				'label' => esc_html__( 'Custom Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'max' => 1000,
					],
					'em' => [
						'min' => 0,
					],
					'rem' => [
						'min' => 0,
					],
				],
				'condition' => [
					'height' => 'custom',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-off-canvas-height: {{SIZE}}{{UNIT}};',
				],
				'default' => [
					'unit' => 'vh',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_settings_section() {
		$this->start_controls_section(
			'section_settings',
			[
				'label' => esc_html__( 'Settings', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'animation',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_responsive_control(
			'entrance_animation',
			[
				'label' => esc_html__( 'Entrance', 'elementor-pro' ),
				'type' => Controls_Manager::ANIMATION,
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'exit_animation',
			[
				'label' => esc_html__( 'Exit', 'elementor-pro' ),
				'type' => Controls_Manager::EXIT_ANIMATION,
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'offcanvas_animation_duration',
			[
				'label' => esc_html__( 'Animation Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 's',
					'size' => 1.5,
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
					'{{WRAPPER}}' => '--e-off-canvas-animation-duration: {{SIZE}}{{UNIT}}',
				],
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'entrance_animation',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'exit_animation',
							'operator' => '!==',
							'value' => '',
						],
					],
				],
			]
		);

		$this->add_control(
			'interactions',
			[
				'label' => esc_html__( 'Interactions', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'is_not_close_on_overlay',
			[
				'label' => esc_html__( 'Prevent Closing on Overlay', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'return_value' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'is_not_close_on_esc_overlay',
			[
				'label' => esc_html__( 'Prevent Closing on ESC Overlay', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'return_value' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'prevent_scroll',
			[
				'label' => esc_html__( 'Disable Page Scrolling', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'return_value' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'wrapper_html_tag',
			[
				'label' => esc_html__( 'HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'div',
				'options' => [
					'div' => 'div',
					'main' => 'main',
					'article' => 'article',
					'header' => 'header',
					'footer' => 'footer',
					'section' => 'section',
					'aside' => 'aside',
					'nav' => 'nav',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();
	}

	protected function register_background_controls() {
		$this->start_controls_section(
			'section_background',
			[
				'label' => esc_html__( 'Background', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => '{{WRAPPER}} .e-off-canvas__content',
				'fields_options' => [
					'color' => [
						'label' => esc_html__( 'Background', 'elementor-pro' ),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} .e-off-canvas__content',
			]
		);

		$this->add_responsive_control(
			'border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .e-off-canvas__content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'selector' => '{{WRAPPER}} .e-off-canvas__content',
			]
		);

		$this->end_controls_section();
	}

	protected function register_overlay_controls() {
		$this->start_controls_section(
			'section_overlay',
			[
				'label' => esc_html__( 'Overlay', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'has_overlay',
			[
				'label' => esc_html__( 'Overlay', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'return_value' => 'yes',
				'default' => 'yes',
				'selectors_dictionary' => [
					'yes' => '1',
					'' => '0',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-off-canvas-overlay-opacity: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'overlay_background',
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .e-off-canvas__overlay',
				'fields_options' => [
					'background' => [
						'default' => 'classic',
					],
					'color' => [
						'default' => 'rgba(0,0,0,.8)',
					],
				],
				'condition' => [
					'has_overlay' => 'yes',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$this->add_wrapper_attributes();
		$tag = $this->get_settings_for_display( 'wrapper_html_tag' );
		?>
		<<?php Utils::print_validated_html_tag( $tag ); ?> <?php $this->print_render_attribute_string( 'off-canvas__wrapper' ); ?>>
			<div <?php $this->print_render_attribute_string( 'off-canvas__overlay' ); ?>></div>
			<div class="e-off-canvas__main">
				<div class="e-off-canvas__content">
					<?php
					$children = $this->get_children() ?? [];

					foreach ( $children as $child ) {
						$child->print_element();
					}
					?>
				</div>
			</div>
		</<?php Utils::print_validated_html_tag( $tag ); ?>>
		<?php
	}

	protected function content_template() {
		?>
		<#
		const tag = elementor.helpers.validateHTMLTag( settings.wrapper_html_tag ),
			offCanvasTitle = '<?php echo esc_html( $this->get_title() ); ?>',
			isClosed = elementor.previewView.isBuffering || 'yes' !== settings.editing_mode;

		view.addRenderAttribute( 'offCanvasWrapper', {
			'class': [ 'e-off-canvas' ],
			'id': 'off-canvas-' + view.getID(),
			'role': 'dialog',
			'aria-hidden': isClosed,
			'aria-label': offCanvasTitle,
			'aria-modal': 'true',
		} );

		if ( isClosed ) {
			view.addRenderAttribute( 'offCanvasWrapper', {
				'inert': '',
				'data-delay-child-handlers': 'true',
			} );
		}

		view.addRenderAttribute( 'offCanvasOverlay', {
			'class': [ 'e-off-canvas__overlay', 'yes' === settings.has_overlay ? '' : 'no-pointer-events' ],
		} );
		#>

		<div class="elementor-element elementor-widget-empty">
			<i class="elementor-widget-empty-icon eicon-off-canvas"></i>
		</div>

		<{{{ tag }}} {{{ view.getRenderAttributeString( 'offCanvasWrapper' ) }}}>
			<div {{{ view.getRenderAttributeString( 'offCanvasOverlay' ) }}}></div>
			<div class="e-off-canvas__main">
				<div class="e-off-canvas__content"></div>
			</div>
		</{{{ tag }}}>
		<?php
	}

	protected function add_wrapper_attributes() {
		$this->add_render_attribute( 'off-canvas__wrapper', [
			'id' => 'off-canvas-' . $this->get_id(),
			'class' => 'e-off-canvas',
			'role' => 'dialog',
			'aria-hidden' => 'true',
			'aria-label' => $this->get_title(),
			'aria-modal' => 'true',
			'inert' => '',
			'data-delay-child-handlers' => 'true',
		] );

		$this->add_render_attribute( 'off-canvas__overlay', [
			'class' => 'e-off-canvas__overlay',
		] );
	}
}
