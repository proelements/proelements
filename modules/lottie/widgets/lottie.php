<?php

namespace ElementorPro\Modules\Lottie\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Css_Filter;
use Elementor\Group_Control_Typography;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Lottie extends Base_Widget {

	/**
	 * Get element name.
	 *
	 * Retrieve the element name.
	 *
	 * @return string The name.
	 * @since 2.7.0
	 * @access public
	 *
	 */
	public function get_name() {
		return 'lottie';
	}

	public function get_title() {
		return __( 'Lottie', 'elementor-pro' );
	}

	public function get_script_depends() {
		return [ 'lottie' ];
	}

	public function get_style_depends() {
		return [ 'e-lottie' ];
	}

	public function get_icon() {
		return 'eicon-lottie';
	}

	protected function _register_controls() {
		$this->start_controls_section( 'lottie', [
			'label' => __( 'Lottie', 'elementor-pro' ),
		] );

		$this->add_control(
			'source',
			[
				'label' => __( 'Source', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'media_file',
				'options' => [
					'media_file' => __( 'Media File', 'elementor-pro' ),
					'external_url' => __( 'External URL', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'source_external_url',
			[
				'label' => __( 'External URL', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'condition' => [
					'source' => 'external_url',
				],
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => __( 'Enter your URL', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'source_json',
			[
				'label' => __( 'Upload JSON File', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'media_type' => 'application/json',
				'frontend_available' => true,
				'condition' => [
					'source' => 'media_file',
				],
			]
		);

		$this->add_responsive_control(
			'align',
			[
				'label' => __( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left'    => [
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
				'prefix_class' => 'elementor%s-align-',
				'default' => 'center',
			]
		);

		$this->add_control(
			'caption_source',
			[
				'label' => __( 'Caption', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'none',
				'options' => [
					'none' => __( 'None', 'elementor-pro' ),
					'title' => __( 'Title', 'elementor-pro' ),
					'caption' => __( 'Caption', 'elementor-pro' ),
					'custom' => __( 'Custom', 'elementor-pro' ),
				],
				'condition' => [
					'source!' => 'external_url',
					'source_json[url]!' => '',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'caption',
			[
				'label' => __( 'Custom Caption', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'caption_source',
							'value' => 'custom',
						],
						[
							'name' => 'source',
							'value' => 'external_url',
						],
					],
				],
				'dynamic' => [
					'active' => true,
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'link_to',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'render_type' => 'none',
				'default' => 'none',
				'options' => [
					'none' => __( 'None', 'elementor-pro' ),
					'custom' => __( 'Custom URL', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'custom_link',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'render_type' => 'none',
				'placeholder' => __( 'Enter your URL', 'elementor-pro' ),
				'condition' => [
					'link_to' => 'custom',
				],
				'dynamic' => [
					'active' => true,
				],
				'default' => [
					'url' => '',
				],
				'show_label' => false,
				'frontend_available' => true,
			]
		);

		// lottie.
		$this->end_controls_section();

		$this->start_controls_section( 'settings', [
			'label' => __( 'Settings', 'elementor-pro' ),
		] );

		$this->add_control(
			'trigger',
			[
				'label' => __( 'Trigger', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'arriving_to_viewport',
				'options' => [
					'arriving_to_viewport' => __( 'Viewport', 'elementor-pro' ),
					'on_click' => __( 'On Click', 'elementor-pro' ),
					'on_hover' => __( 'On Hover', 'elementor-pro' ),
					'bind_to_scroll' => __( 'Scroll', 'elementor-pro' ),
					'none' => __( 'None', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'viewport',
			[
				'label' => __( 'Viewport', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => 'trigger',
							'operator' => '===',
							'value' => 'arriving_to_viewport',
						],
						[
							'name' => 'trigger',
							'operator' => '===',
							'value' => 'bind_to_scroll',
						],
					],
				],
				'default' => [
					'sizes' => [
						'start' => 0,
						'end' => 100,
					],
					'unit' => '%',
				],
				'labels' => [
					__( 'Bottom', 'elementor-pro' ),
					__( 'Top', 'elementor-pro' ),
				],
				'scales' => 1,
				'handles' => 'range',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'effects_relative_to',
			[
				'label' => __( 'Effects Relative To', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'render_type' => 'none',
				'condition' => [
					'trigger' => 'bind_to_scroll',
				],
				'default' => 'viewport',
				'options' => [
					'viewport' => __( 'Viewport', 'elementor-pro' ),
					'page' => __( 'Entire Page', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'loop',
			[
				'label' => __( 'Loop', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'render_type' => 'none',
				'condition' => [
					'trigger!' => 'bind_to_scroll',
				],
				'return_value' => 'yes',
				'default' => '',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'number_of_times',
			[
				'label' => __( 'Times', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'trigger',
							'operator' => '!==',
							'value' => 'bind_to_scroll',
						],
						[
							'name' => 'loop',
							'operator' => '===',
							'value' => 'yes',
						],
					],
				],
				'min' => 0,
				'step' => 1,
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'link_timeout',
			[
				'label' => __( 'Link Timeout', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'link_to',
							'operator' => '===',
							'value' => 'custom',
						],
						[
							'name' => 'trigger',
							'operator' => '===',
							'value' => 'on_click',
						],
						[
							'name' => 'custom_link[url]',
							'operator' => '!==',
							'value' => '',
						],
					],
				],
				'description' => __( 'Redirect to link after selected timeout', 'elementor-pro' ),
				'min' => 0,
				'max' => 5000,
				'step' => 1,
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'on_hover_out',
			[
				'label' => __( 'On Hover Out', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'render_type' => 'none',
				'condition' => [
					'trigger' => 'on_hover',
				],
				'default' => 'default',
				'options' => [
					'default' => __( 'Default', 'elementor-pro' ),
					'reverse' => __( 'Reverse', 'elementor-pro' ),
					'pause' => __( 'Pause', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'hover_area',
			[
				'label' => __( 'Hover Area', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'render_type' => 'none',
				'condition' => [
					'trigger' => 'on_hover',
				],
				'default' => 'animation',
				'options' => [
					'animation' => __( 'Animation', 'elementor-pro' ),
					'column' => __( 'Column', 'elementor-pro' ),
					'section' => __( 'Section', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'play_speed',
			[
				'label' => __( 'Play Speed', 'elementor-pro' ) . ' (x)',
				'type' => Controls_Manager::SLIDER,
				'render_type' => 'none',
				'condition' => [
					'trigger!' => 'bind_to_scroll',
				],
				'default' => [
					'unit' => 'px',
					'size' => 1,
				],
				'range' => [
					'px' => [
						'min' => 0.1,
						'max' => 5,
						'step' => 0.1,
					],
				],
				'size_units' => [ 'px' ],
				'dynamic' => [
					'active' => true,
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'start_point',
			[
				'label' => __( 'Start Point', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'frontend_available' => true,
				'render_type' => 'none',
				'default' => [
					'size' => '0',
					'unit' => '%',
				],
				'size_units' => [ '%' ],
			]
		);

		$this->add_control(
			'end_point',
			[
				'label' => __( 'End Point', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'frontend_available' => true,
				'render_type' => 'none',
				'default' => [
					'size' => '100',
					'unit' => '%',
				],
				'size_units' => [ '%' ],
			]
		);

		$this->add_control(
			'reverse_animation',
			[
				'label' => __( 'Reverse', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'render_type' => 'none',
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'trigger',
							'operator' => '!==',
							'value' => 'bind_to_scroll',
						],
						[
							'name' => 'trigger',
							'operator' => '!==',
							'value' => 'on_hover',
						],
					],
				],
				'return_value' => 'yes',
				'default' => '',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'renderer',
			[
				'label' => __( 'Renderer', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'svg',
				'options' => [
					'svg' => __( 'SVG', 'elementor-pro' ),
					'canvas' => __( 'Canvas', 'elementor-pro' ),
				],
				'separator' => 'before',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'lazyload',
			[
				'label' => __( 'Lazy Load', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => '',
				'frontend_available' => true,
			]
		);

		// Settings.
		$this->end_controls_section();

		$this->start_controls_section(
			'style',
			[
				'label' => __( 'Lottie', 'elementor-pro' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'width',
			[
				'label' => __( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => '%',
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'size_units' => [ '%', 'px', 'vw' ],
				'range' => [
					'%' => [
						'min' => 1,
						'max' => 100,
					],
					'px' => [
						'min' => 1,
						'max' => 1000,
					],
					'vw' => [
						'min' => 1,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--lottie-container-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'space',
			[
				'label' => __( 'Max Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => '%',
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'size_units' => [ '%', 'px', 'vw' ],
				'range' => [
					'%' => [
						'min' => 1,
						'max' => 100,
					],
					'px' => [
						'min' => 1,
						'max' => 1000,
					],
					'vw' => [
						'min' => 1,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--lottie-container-max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'separator_panel_style',
			[
				'type' => Controls_Manager::DIVIDER,
				'style' => 'thick',
			]
		);

		$this->start_controls_tabs( 'image_effects' );

			$this->start_controls_tab( 'normal',
				[
					'label' => __( 'Normal', 'elementor-pro' ),
				]
			);

			$this->add_control(
				'opacity',
				[
					'label' => __( 'Opacity', 'elementor-pro' ),
					'type' => Controls_Manager::SLIDER,
					'range' => [
						'px' => [
							'max' => 1,
							'min' => 0.10,
							'step' => 0.01,
						],
					],
					'selectors' => [
						'{{WRAPPER}}' => '--lottie-container-opacity: {{SIZE}};',
					],
				]
			);

			$this->add_group_control(
				Group_Control_Css_Filter::get_type(),
				[
					'name' => 'css_filters',
					'selector' => '{{WRAPPER}} .e-lottie__container',
				]
			);

			// Normal.
			$this->end_controls_tab();

			$this->start_controls_tab( 'hover',
				[
					'label' => __( 'Hover', 'elementor-pro' ),
				]
			);

			$this->add_control(
				'opacity_hover',
				[
					'label' => __( 'Opacity', 'elementor-pro' ),
					'type' => Controls_Manager::SLIDER,
					'range' => [
						'px' => [
							'max' => 1,
							'min' => 0.10,
							'step' => 0.01,
						],
					],
					'selectors' => [
						'{{WRAPPER}}' => '--lottie-container-opacity-hover: {{SIZE}};',
					],
				]
			);

			$this->add_group_control(
				Group_Control_Css_Filter::get_type(),
				[
					'name' => 'css_filters_hover',
					'selector' => '{{WRAPPER}} .e-lottie__container:hover',
				]
			);

			$this->add_control(
				'background_hover_transition',
				[
					'label' => __( 'Transition Duration', 'elementor-pro' ),
					'type' => Controls_Manager::SLIDER,
					'range' => [
						'px' => [
							'max' => 3,
							'step' => 0.1,
						],
					],
					'selectors' => [
						'{{WRAPPER}}' => '--lottie-container-transition-duration-hover: {{SIZE}}s',
					],
				]
			);

			// Hover.
			$this->end_controls_tab();

		// Image effects.
		$this->end_controls_tabs();

		// lottie style.
		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_caption',
			[
				'label' => __( 'Caption', 'elementor-pro' ),
				'tab'   => Controls_Manager::TAB_STYLE,
				'condition' => [
					'caption_source!' => 'none',
				],
			]
		);

		$this->add_control(
			'caption_align',
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
					'{{WRAPPER}}' => '--caption-text-align: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => '--caption-color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'caption_typography',
				'selector' => '{{WRAPPER}} .e-lottie__caption',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->add_responsive_control(
			'caption_space',
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
					'{{WRAPPER}}' => '--caption-margin-top: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	private function get_caption( $settings ) {
		$is_media_file_caption = $this->is_media_file_caption( $settings );
		$is_external_url_caption = $this->is_external_url_caption( $settings );

		if ( ( $is_media_file_caption && 'custom' === $settings['caption_source'] ) || $is_external_url_caption ) {
			return $settings['caption'];
		} else if ( 'caption' === $settings['caption_source'] ) {
			return wp_get_attachment_caption( $settings['source_json']['id'] );
		} else if ( 'title' === $settings['caption_source'] ) {
			return get_the_title( $settings['source_json']['id'] );
		}

		return '';
	}

	private function is_media_file_caption( $settings ) {
		return 'media_file' === $settings['source'] && 'none' !== $settings['caption_source'];
	}

	private function is_external_url_caption( $settings ) {
		return 'external_url' === $settings['source'] && '' !== $settings['caption'];
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$caption = $this->get_caption( $settings );
		$widget_caption = $caption ? '<p class="e-lottie__caption"> ' . $caption . '</p>' : '';
		$widget_container = '<div class="e-lottie__container"><div class="e-lottie__animation"></div>' . $widget_caption . '</div>';

		if ( ! empty( $settings['custom_link']['url'] ) && 'custom' === $settings['link_to'] ) {
			$this->add_link_attributes( 'url', $settings['custom_link'] );
			$widget_container = sprintf( '<a class="e-lottie__container__link" %1$s>%2$s</a>', $this->get_render_attribute_string( 'url' ), $widget_container );
		}

		echo $widget_container;
	}

	protected function content_template() {
		?>
		<#
		var ensureAttachmentData = function( id, type ) {
			if ( 'caption' === type || 'title' === type ) {
				if ( 'undefined' === typeof wp.media.attachment( id ).get( type ) ) {
					wp.media.attachment( id ).fetch().then( function( data ) {
						view.render();
					} );
				}
			}
		};

		var getAttachmentData = function( id, type ) {
			if ( id && ( 'caption' === type || 'title' === type ) ) {
				ensureAttachmentData( id, type );
				return wp.media.attachment( id ).get( type );
			}

			return '';
		};

		var getCaption = function() {
			if ( ( isMediaFileCaption() && 'custom' === settings.caption_source ) || isExternalUrlCaption() ) {
				return settings.caption;
			} else if ( 'caption' === settings.caption_source || 'title' === settings.caption_source ) {
				return getAttachmentData( settings.source_json.id, settings.caption_source );
			}

			return '';
		};

		var isMediaFileCaption = function() {
			return 'media_file' === settings.source && 'none' !== settings.caption_source;
		};

		var isExternalUrlCaption = function() {
			return 'external_url' === settings.source && '' !== settings.caption;
		};

		var widget_caption = getCaption() ? '<p class="e-lottie__caption">' + getCaption() + '</p>' : '';
		var widget_container = '<div class="e-lottie__container"><div class="e-lottie__animation"></div>' + widget_caption + '</div>';

		if ( settings.custom_link.url && 'custom' === settings.link_to ) {
			widget_container = '<a class="e-lottie__container__link" href="' + settings.custom_link.url + '">' + widget_container + '</a>';
		}

		print( widget_container );
		#>
		<?php
	}
}
