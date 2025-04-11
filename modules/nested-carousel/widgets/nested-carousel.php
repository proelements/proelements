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

	// TODO: Replace this check with `is_active_feature` on 3.28.0 to support is_active_feature second parameter.
	public function show_in_panel() {
		return Plugin::elementor()->experiments->is_feature_active( 'nested-elements' ) && Plugin::elementor()->experiments->is_feature_active( 'container' );
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the widget requires.
	 *
	 * @since 3.24.0
	 * @access public
	 *
	 * @return array Widget style dependencies.
	 */
	public function get_style_depends(): array {
		return [ 'e-swiper', 'widget-nested-carousel' ];
	}

	/**
	 * Get script dependencies.
	 *
	 * Retrieve the list of script dependencies the widget requires.
	 *
	 * @since 3.27.0
	 * @access public
	 *
	 * @return array Widget script dependencies.
	 */
	public function get_script_depends(): array {
		return [ 'swiper' ];
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
			'carousel_name',
			[
				'label' => esc_html__( 'Carousel Name', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Carousel', 'elementor-pro' ),
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
				'description' => esc_html__( 'The Autoplay is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
			],
			'infinite_custom_settings' => [
				'description' => esc_html__( 'Infinite scroll is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
			],
			'offset_sides_custom_settings' => [
				'description' => esc_html__( 'Offset is inactive while editing. Preview your page to see it in action.', 'elementor-pro' ),
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

		// Todo: Remove in version 3.21.0: https://elementor.atlassian.net/browse/ED-11888.
		// Remove together with support for physical properties inside the container widget.
		$logical_dimensions_inline_start = is_rtl() ? '{{RIGHT}}{{UNIT}}' : '{{LEFT}}{{UNIT}}';
		$logical_dimensions_inline_end = is_rtl() ? '{{LEFT}}{{UNIT}}' : '{{RIGHT}}{{UNIT}}';

		$this->add_responsive_control(
			'content_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					$low_specificity_slider_container_selector => '--padding-top: {{TOP}}{{UNIT}}; --padding-right: {{RIGHT}}{{UNIT}}; --padding-bottom: {{BOTTOM}}{{UNIT}}; --padding-left: {{LEFT}}{{UNIT}};',
					// Todo: Remove in version 3.21.0: https://elementor.atlassian.net/browse/ED-11888.
					// Remove together with support for physical properties inside the container widget.
					':where( [data-core-v316-plus="true"] .elementor-element.elementor-widget-n-carousel .swiper-slide ) > .e-con' => "--padding-block-start: {{TOP}}{{UNIT}}; --padding-inline-end: $logical_dimensions_inline_end; --padding-block-end: {{BOTTOM}}{{UNIT}}; --padding-inline-start: $logical_dimensions_inline_start;",
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
		$this->num_of_carousel_items = count( $settings['carousel_items'] ?? [] );
		$slides = $settings['carousel_items'];
		$direction = $settings['direction'];
		$has_autoplay_enabled = 'yes' === $settings['autoplay'];
		$outside_wrapper_classes = [ 'e-n-carousel', 'swiper' ];

		$this->add_render_attribute( [
			'carousel-outside-wrapper' => [
				'class' => $outside_wrapper_classes,
				'role' => 'region',
				'aria-roledescription' => 'carousel',
				'aria-label' => $settings['carousel_name'],
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
						'aria-label' => sprintf(
							/* translators: 1: Slide number. 2: Total amount of slides. */
							esc_attr__( '%1$s of %2$s', 'elementor-pro' ),
							$slide_count,
							count( $slides )
						),
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

	protected function get_initial_config(): array {
		return array_merge( parent::get_initial_config(), [
			'support_improved_repeaters' => true,
			'target_container' => [ '.e-n-carousel > .swiper-wrapper' ],
			'node' => 'div',
			'is_interlaced' => true,
		] );
	}

	protected function get_default_children_container_placeholder_selector() {
		return '.swiper-slide';
	}

	protected function content_template_single_repeater_item() {
		?>
		<#
		const elementUid = view.getIDInt().toString().substr( 0, 3 ),
			numOfSlides = view.collection.length + 1;

		const slideCount = numOfSlides,
			slideUid = elementUid + slideCount,
			slideWrapperKey = slideUid;

		const slideWrapperKeyItem = {
			'class': 'swiper-slide',
			'data-slide': slideCount,
			'role': 'group',
			'aria-roledescription': 'slide',
			'aria-label': slideCount + ' <?php echo esc_attr__( 'of', 'elementor-pro' ); ?> ' + numOfSlides,
		};

		view.addRenderAttribute( 'single-slide', slideWrapperKeyItem, null, true );
		#>
		<div {{{ view.getRenderAttributeString( 'single-slide' ) }}}></div>
		<?php
	}

	protected function content_template() {
		?>
			<# if ( settings['carousel_items'] ) {
			const elementUid = view.getIDInt().toString().substr( 0, 3 ),
				carouselOutsideWrapperKey = 'carousel-' + elementUid,
				carouselInsideWrapperKey = 'carousel-inside-' + elementUid,
				swiperWrapperClass = elementorFrontend.config.swiperClass,
				hasAutoplayEnabled = 'yes' === settings['autoplay'],
				outsideWrapperClasses = ['e-n-carousel',swiperWrapperClass]
				shouldRenderPaginationAndArrows = 1 < settings['carousel_items'].length;

			view.addRenderAttribute( carouselOutsideWrapperKey, {
				'class': outsideWrapperClasses,
				'role': 'region',
				'aria-roledescription': 'carousel',
				'aria-label': settings['carousel_name'],
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
								'aria-label': slideCount + ' <?php echo esc_attr__( 'of', 'elementor-pro' ); ?> ' + settings['carousel_items'].length,
							} );
						#>
							<div {{{ view.getRenderAttributeString( slideWrapperKey ) }}}></div>
						<# } ); #>
					</div>
				</div>
				<# if ( 'yes' === settings['arrows'] && shouldRenderPaginationAndArrows ) { #>
					<?php $this->content_template_navigation_arrows(); ?>
				<# } #>
				<# if ( settings['pagination'] && shouldRenderPaginationAndArrows ) { #>
					<div class="swiper-pagination"></div>
				<# } #>
			<# } #>
		<?php
	}

	protected function content_template_navigation_arrows() {
		?>
		<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0" aria-label="<?php echo esc_attr__( 'Previous', 'elementor-pro' ); ?>">
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
		<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0" aria-label="<?php echo esc_attr__( 'Next', 'elementor-pro' ); ?>">
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
