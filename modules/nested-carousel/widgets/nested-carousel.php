<?php
namespace ElementorPro\Modules\NestedCarousel\Widgets;

use Elementor\Controls_Manager;
use Elementor\Icons_Manager;
use Elementor\Modules\NestedElements\Base\Widget_Nested_Base;
use Elementor\Modules\NestedElements\Controls\Control_Nested_Repeater;
use Elementor\Repeater;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Widget_Trait;
use ElementorPro\Base\Base_Carousel_Trait;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Nested_Carousel extends Widget_Nested_Base {
	use Base_Widget_Trait;
	use Base_Carousel_Trait;

	public function get_name() {
		return 'nested-carousel';
	}

	public function get_title() {
		return esc_html__( 'Carousel', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-nested-carousel';
	}

	public function get_keywords() {
		return [ 'Carousel', 'Slides', 'Nested', 'Media', 'Gallery', 'Image' ];
	}

	protected function get_default_children_elements() {
		return [
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Slide #1', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Slide #2', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Slide #3', 'elementor-pro' ),
				],
			],
		];
	}

	protected function get_default_repeater_title_setting_key() {
		return 'slide_title';
	}

	protected function get_default_children_title() {
		return esc_html__( 'Slide #%d', 'elementor-pro' );
	}

	protected function get_default_children_placeholder_selector() {
		return '.swiper-wrapper';
	}

	protected function get_html_wrapper_class() {
		return 'elementor-widget-n-carousel';
	}

	protected function register_controls() {
		$low_specificity_slider_container_selector = ':where( {{WRAPPER}} .swiper-slide ) > .e-con';

		$this->start_controls_section(
			'section_slides',
			[
				'label' => esc_html__( 'Slides', 'elementor-pro' ),
			]
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'slide_title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Slide Title', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Slide Title', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
			]
		);

		$this->add_control(
			'carousel_items',
			[
				'label' => esc_html__( 'Carousel Items', 'elementor-pro' ),
				'type' => Control_Nested_Repeater::CONTROL_TYPE,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'slide_title' => esc_html__( 'Slide #1', 'elementor-pro' ),
					],
					[
						'slide_title' => esc_html__( 'Slide #2', 'elementor-pro' ),
					],
					[
						'slide_title' => esc_html__( 'Slide #3', 'elementor-pro' ),
					],
				],
				'frontend_available' => true,
				'title_field' => '{{{ slide_title }}}',
			]
		);

		$this->add_carousel_layout_controls( [
			'css_prefix' => 'e-n-carousel-',
			'slides_to_show_custom_settings' => [
				'separator' => 'before',
				'tablet_default' => '2',
				'mobile_default' => '1',
				'frontend_available' => true,
				'render_type' => 'template',
				'selectors' => [
					'{{WRAPPER}}' => '--e-n-carousel-swiper-slides-to-display: {{VALUE}}',
				],
			],
			'slides_to_scroll_custom_settings' => [],
			'equal_height_custom_settings' => [
				'selectors' => [
					'{{WRAPPER}}' => '--e-n-carousel-slide-height: auto; --e-n-carousel-slide-container-height: 100%;',
				],
			],
			'slides_on_display' => 8,
		] );

		$this->end_controls_section();

		$this->add_carousel_settings_controls( [
			'css_prefix' => 'e-n-carousel-',
			'autoplay_custom_settings' => [
				'description' => esc_html__( 'Note: The Autoplay is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
			],
			'infinite_custom_settings' => [
				'description' => esc_html__( 'Note: The Infinite scroll is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
			],
		] );

		$this->add_carousel_navigation_controls( [
			'css_prefix' => 'e-n-carousel-',
		] );

		$this->add_carousel_pagination_controls( [
			'css_prefix' => 'e-n-carousel-',
		] );

		$this->start_controls_section(
			'section_slides_style',
			[
				'label' => esc_html__( 'Slides', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
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
					'{{WRAPPER}}' => '--e-n-carousel-swiper-slides-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'content_background',
				'types' => [ 'classic', 'gradient' ],
				'exclude' => [ 'image' ],
				'selector' => $low_specificity_slider_container_selector,
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
				'selector' => $low_specificity_slider_container_selector,
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
			'border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					$low_specificity_slider_container_selector => '--border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'content_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					$low_specificity_slider_container_selector => '--padding-top: {{TOP}}{{UNIT}}; --padding-right: {{RIGHT}}{{UNIT}}; --padding-bottom: {{BOTTOM}}{{UNIT}}; --padding-left: {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->end_controls_section();

		$this->add_carousel_navigation_styling_controls( [
			'css_prefix' => 'e-n-carousel-',
			'navigation_styling_custom_settings' => [
				'condition' => [
					'arrows' => 'yes',
				],
			],
		] );

		$this->add_carousel_pagination_style_controls( [
			'css_prefix' => 'e-n-carousel-',
		] );
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$slides = $settings['carousel_items'];
		$swiper_wrapper_class = Plugin::elementor()->experiments->is_feature_active( 'e_swiper_latest' ) ? 'swiper' : 'swiper-container';
		$direction = $settings['direction'];
		$has_autoplay_enabled = 'yes' === $settings['autoplay'];

		$this->add_render_attribute( [
			'carousel-outside-wrapper' => [
				'class' => 'e-n-carousel ' . $swiper_wrapper_class,
			],
			'carousel-inside-wrapper' => [
				'class' => 'swiper-wrapper',
				'aria-live' => $has_autoplay_enabled ? 'off' : 'polite',
			],
		] );

		if ( ! empty( $direction ) ) {
			$this->add_render_attribute( 'carousel-outside-wrapper', 'dir', $direction );
		}
		?>
		<div <?php $this->print_render_attribute_string( 'carousel-outside-wrapper' ); ?>>
			<div <?php $this->print_render_attribute_string( 'carousel-inside-wrapper' ); ?>>
				<?php
				foreach ( $slides as $index => $slide ) {
					$slide_count = $index + 1;
					$slide_setting_key = $this->get_repeater_setting_key( 'slide_wrapper', 'slide', $index );

					$this->add_render_attribute( $slide_setting_key, [
						'class' => 'swiper-slide',
						'data-slide' => $slide_count,
						'role' => 'group',
						'aria-roledescription' => 'slide',
						'aria-label' => $slide_count . ' ' . esc_html__( 'of', 'elementor-pro' ) . ' ' . count( $slides ),
					] );
					?>
						<div <?php $this->print_render_attribute_string( $slide_setting_key ); ?>>
							<?php $this->print_child( $index ); ?>
						</div>
					<?php
				}
				?>
			</div>
		</div>
		<?php
		$this->render_carousel_footer( $settings );
	}

	protected function content_template() {
		?>
			<# if ( settings['carousel_items'] ) {
			const elementUid = view.getIDInt().toString().substr( 0, 3 ),
				carouselOutsideWrapperKey = 'carousel-' + elementUid,
				carouselInsideWrapperKey = 'carousel-inside-' + elementUid,
				swiperWrapperClass = elementorFrontend.config.swiperClass,
				hasAutoplayEnabled = 'yes' === settings['autoplay'];

			view.addRenderAttribute( carouselOutsideWrapperKey, {
				'class': ['e-n-carousel',swiperWrapperClass],
			} );

			view.addRenderAttribute( carouselInsideWrapperKey, {
				'class': 'swiper-wrapper',
				'aria-live': hasAutoplayEnabled ? 'off' : 'polite',
			} );

			if ( !! settings['direction'] ) {
				view.addRenderAttribute( carouselOutsideWrapperKey, 'dir', settings['direction'] );
			}
			#>
				<div {{{ view.getRenderAttributeString( carouselOutsideWrapperKey ) }}}>
					<div {{{ view.getRenderAttributeString( carouselInsideWrapperKey ) }}}>
						<# _.each( settings['carousel_items'], function( slide, index ) {
						const slideCount = index + 1,
							slideUid = elementUid + slideCount,
							slideWrapperKey = slideUid;

							view.addRenderAttribute( slideWrapperKey, {
								'class': 'swiper-slide',
								'data-slide': slideCount,
								'role': 'group',
								'aria-roledescription': 'slide',
								'aria-label': slideCount + ' <?php echo esc_html__( 'of', 'elementor-pro' ); ?> ' + settings['carousel_items'].length,
							} );
						#>
							<div {{{ view.getRenderAttributeString( slideWrapperKey ) }}}></div>
						<# } ); #>
					</div>
				</div>
				<# if ( 'yes' === settings['arrows'] ) { #>
					<?php $this->content_template_navigation_arrows(); ?>
				<# } #>
				<# if ( settings['pagination']  ) { #>
					<div class="swiper-pagination"></div>
				<# } #>
			<# } #>
		<?php
	}

	protected function content_template_navigation_arrows() {
		?>
		<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
			<#
			const iconSettingsPrevious = settings['navigation_previous_icon'],
				iconPreviousHTML = elementor.helpers.renderIcon( view, iconSettingsPrevious, { 'aria-hidden': true }, 'i' , 'object' );

			if ( 'eicon-chevron-left' === iconSettingsPrevious['value'] ) { #>
				<?php Icons_Manager::render_icon(
					[
						'library' => 'eicons',
						'value' => 'eicon-chevron-left',
					]
				); ?>
			<# } else if ( !! iconSettingsPrevious['value'] ) { #>
				{{{ iconPreviousHTML.value }}}
			<# } #>
		</div>
		<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
			<#
			const iconSettingsNext = settings['navigation_next_icon'],
				iconNextHTML = elementor.helpers.renderIcon( view, iconSettingsNext, { 'aria-hidden': true }, 'i' , 'object' );

			if ( 'eicon-chevron-right' === iconSettingsNext['value'] ) { #>
				<?php Icons_Manager::render_icon(
					[
						'library' => 'eicons',
						'value' => 'eicon-chevron-right',
					]
				); ?>
			<# } else if ( !! iconSettingsNext['value'] ) { #>
				{{{ iconNextHTML.value }}}
			<# } #>
		</div>
		<?php
	}
}
