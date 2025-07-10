<?php
namespace ElementorPro\Modules\AnimatedHeadline\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Modules\DynamicTags\Module as TagsModule;
use Elementor\Utils;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Animated_Headline extends Base_Widget {

	public function get_name() {
		return 'animated-headline';
	}

	public function get_title() {
		return esc_html__( 'Animated Headline', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-animated-headline';
	}

	public function get_keywords() {
		return [ 'headline', 'heading', 'animation', 'title', 'text' ];
	}

	protected function is_dynamic_content(): bool {
		return false;
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
		return [ 'widget-animated-headline' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'text_elements',
			[
				'label' => esc_html__( 'Headline', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'headline_style',
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'highlight',
				'options' => [
					'highlight' => esc_html__( 'Highlighted', 'elementor-pro' ),
					'rotate' => esc_html__( 'Rotating', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-headline--style-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'animation_type',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'typing' => 'Typing',
					'clip' => 'Clip',
					'flip' => 'Flip',
					'swirl' => 'Swirl',
					'blinds' => 'Blinds',
					'drop-in' => 'Drop-in',
					'wave' => 'Wave',
					'slide' => 'Slide',
					'slide-down' => 'Slide Down',
				],
				'default' => 'typing',
				'condition' => [
					'headline_style' => 'rotate',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'marker',
			[
				'label' => esc_html__( 'Shape', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'circle',
				'options' => [
					'circle' => _x( 'Circle', 'Shapes', 'elementor-pro' ),
					'curly' => _x( 'Curly', 'Shapes', 'elementor-pro' ),
					'underline' => _x( 'Underline', 'Shapes', 'elementor-pro' ),
					'double' => _x( 'Double', 'Shapes', 'elementor-pro' ),
					'double_underline' => _x( 'Double Underline', 'Shapes', 'elementor-pro' ),
					'underline_zigzag' => _x( 'Underline Zigzag', 'Shapes', 'elementor-pro' ),
					'diagonal' => _x( 'Diagonal', 'Shapes', 'elementor-pro' ),
					'strikethrough' => _x( 'Strikethrough', 'Shapes', 'elementor-pro' ),
					'x' => 'X',
				],
				'render_type' => 'template',
				'condition' => [
					'headline_style' => 'highlight',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'before_text',
			[
				'label' => esc_html__( 'Before Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'default' => esc_html__( 'This page is', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Enter your headline', 'elementor-pro' ),
				'label_block' => true,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'highlighted_text',
			[
				'label' => esc_html__( 'Highlighted Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'default' => esc_html__( 'Amazing', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'headline_style' => 'highlight',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'rotating_text',
			[
				'label' => esc_html__( 'Rotating Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter each word in a separate line', 'elementor-pro' ),
				'default' => "Better\nBigger\nFaster",
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'condition' => [
					'headline_style' => 'rotate',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'after_text',
			[
				'label' => esc_html__( 'After Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'placeholder' => esc_html__( 'Enter your headline', 'elementor-pro' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'loop',
			[
				'label' => esc_html__( 'Infinite Loop', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'render_type' => 'template',
				'frontend_available' => true,
				'selectors' => [
					'{{WRAPPER}}' => '--iteration-count: infinite',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'highlight_animation_duration',
			[
				'label' => esc_html__( 'Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'default' => 1200,
				'render_type' => 'template',
				'frontend_available' => true,
				'selectors' => [
					'{{WRAPPER}}' => '--animation-duration: {{VALUE}}ms',
				],
				'condition' => [
					'headline_style' => 'highlight',
				],
			]
		);

		$this->add_control(
			'highlight_iteration_delay',
			[
				'label' => esc_html__( 'Delay', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'default' => 8000,
				'render_type' => 'template',
				'frontend_available' => true,
				'condition' => [
					'headline_style' => 'highlight',
					'loop' => 'yes',
				],
			]
		);

		$this->add_control(
			'rotate_iteration_delay',
			[
				'label' => esc_html__( 'Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::NUMBER,
				'default' => 2500,
				'render_type' => 'template',
				'frontend_available' => true,
				'condition' => [
					'headline_style' => 'rotate',
				],
			]
		);

		$this->add_control(
			'link',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .elementor-headline' => 'text-align: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'tag',
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
					'p' => 'p',
				],
				'default' => 'h3',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_marker',
			[
				'label' => esc_html__( 'Shape', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'headline_style' => 'highlight',
				],
			]
		);

		$this->add_control(
			'marker_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-dynamic-wrapper path' => 'stroke: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'stroke_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
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
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-dynamic-wrapper path' => 'stroke-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'above_content',
			[
				'label' => esc_html__( 'Bring to Front', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-dynamic-wrapper svg' => 'z-index: 2',
					'{{WRAPPER}} .elementor-headline-dynamic-text' => 'z-index: auto',
				],
			]
		);

		$this->add_control(
			'rounded_edges',
			[
				'label' => esc_html__( 'Rounded Edges', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-dynamic-wrapper path' => 'stroke-linecap: round; stroke-linejoin: round',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_text',
			[
				'label' => esc_html__( 'Headline', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-plain-text' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
				'selector' => '{{WRAPPER}} .elementor-headline',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'text_stroke',
				'selector' => '{{WRAPPER}} .elementor-headline .elementor-headline-plain-text',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'title_text_shadow',
				'selector' => '{{WRAPPER}} .elementor-headline .elementor-headline-plain-text',
			]
		);

		$this->add_control(
			'heading_words_style',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Animated Text', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'words_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--dynamic-text-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'words_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
				'selector' => '{{WRAPPER}} .elementor-headline-dynamic-text',
				'exclude' => [ 'font_size' ],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'animated_text_stroke',
				'selector' => '{{WRAPPER}} .elementor-headline .elementor-headline-dynamic-wrapper',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'animated_text_shadow',
				'selector' => '{{WRAPPER}} .elementor-headline .elementor-headline-dynamic-wrapper',
			]
		);

		$this->add_control(
			'typing_animation_highlight_colors',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Selected Text', 'elementor-pro' ),
				'separator' => 'before',
				'condition' => [
					'headline_style' => 'rotate',
					'animation_type' => 'typing',
				],
			]
		);

		$this->add_control(
			'highlighted_text_background_color',
			[
				'label' => esc_html__( 'Selection Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--typing-selected-bg-color: {{VALUE}}',
				],
				'condition' => [
					'headline_style' => 'rotate',
					'animation_type' => 'typing',
				],
			]
		);

		$this->add_control(
			'highlighted_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--typing-selected-color: {{VALUE}}',
				],
				'condition' => [
					'headline_style' => 'rotate',
					'animation_type' => 'typing',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$tag = Utils::validate_html_tag( $settings['tag'] );

		$this->add_render_attribute( 'headline', 'class', 'elementor-headline' );

		if ( 'rotate' === $settings['headline_style'] ) {
			$this->add_render_attribute( 'headline', 'class', 'elementor-headline-animation-type-' . $settings['animation_type'] );

			$is_letter_animation = in_array( $settings['animation_type'], [ 'typing', 'swirl', 'blinds', 'wave' ] );

			if ( $is_letter_animation ) {
				$this->add_render_attribute( 'headline', 'class', 'elementor-headline-letters' );
			}
		}

		if ( ! empty( $settings['link']['url'] ) ) {
			$this->add_link_attributes( 'url', $settings['link'] );
			?>
			<a <?php $this->print_render_attribute_string( 'url' ); ?>>

			<?php
		}

		?>
		<<?php Utils::print_validated_html_tag( $tag ); ?> <?php $this->print_render_attribute_string( 'headline' ); ?>>
		<?php if ( ! empty( $settings['before_text'] ) ) : ?>
			<span class="elementor-headline-plain-text elementor-headline-text-wrapper"><?php echo wp_kses_post( $this->get_settings_for_display( 'before_text' ) ); ?></span>
		<?php endif; ?>
		<span class="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
		<?php if ( 'rotate' === $settings['headline_style'] && $settings['rotating_text'] ) :
			$rotating_text = explode( "\n", $settings['rotating_text'] );
			foreach ( $rotating_text as $key => $text ) : ?>
			<span class="elementor-headline-dynamic-text<?php echo 1 > $key ? ' elementor-headline-text-active' : ''; ?>">
				<?php Utils::print_unescaped_internal_string( str_replace( ' ', '&nbsp;', $text ) ); ?>
			</span>
		<?php endforeach; ?>
		<?php elseif ( 'highlight' === $settings['headline_style'] && ! empty( $settings['highlighted_text'] ) ) : ?>
			<span class="elementor-headline-dynamic-text elementor-headline-text-active"><?php echo wp_kses_post( $this->get_settings_for_display( 'highlighted_text' ) ); ?></span>
		<?php endif ?>
		</span>
		<?php if ( ! empty( $settings['after_text'] ) ) : ?>
			<span class="elementor-headline-plain-text elementor-headline-text-wrapper"><?php echo wp_kses_post( $this->get_settings_for_display( 'after_text' ) ); ?></span>
			<?php endif; ?>
		</<?php Utils::print_validated_html_tag( $tag ); ?>>
		<?php

		if ( ! empty( $settings['link']['url'] ) ) {
			echo '</a>';
		}
	}

	/**
	 * Render Animated Headline widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
		var headlineClasses = 'elementor-headline',
			tag = elementor.helpers.validateHTMLTag( settings.tag );
		const sanitizedAnimationType = elementor.helpers.sanitize( settings.animation_type ).replaceAll(/'|"/g, '');

		if ( 'rotate' === settings.headline_style ) {
			headlineClasses += ' elementor-headline-animation-type-' + sanitizedAnimationType;

			var isLetterAnimation = -1 !== [ 'typing', 'swirl', 'blinds', 'wave' ].indexOf( settings.animation_type );

			if ( isLetterAnimation ) {
				headlineClasses += ' elementor-headline-letters';
			}
		}

		if ( settings.link.url ) { #>
			<a href="#">
		<# } #>
				<{{{ tag }}} class="{{{ headlineClasses }}}">
					<# if ( settings.before_text ) { #>
						<span class="elementor-headline-plain-text elementor-headline-text-wrapper">{{{ elementor.helpers.sanitize( settings.before_text, { ALLOW_DATA_ATTR: false } ) }}}</span>
					<# } #>

					<# if ( settings.rotating_text ) { #>
						<span class="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
						<# if ( 'rotate' === settings.headline_style && settings.rotating_text ) {
							var rotatingText = ( settings.rotating_text || '' ).split( '\n' );
							for ( var i = 0; i < rotatingText.length; i++ ) {
								var statusClass = 0 === i ? 'elementor-headline-text-active' : ''; #>
								<span class="elementor-headline-dynamic-text {{ statusClass }}">
									{{{ rotatingText[ i ].replace( ' ', '&nbsp;' ) }}}
								</span>
							<# }
						}

						else if ( 'highlight' === settings.headline_style && settings.highlighted_text ) { #>
							<span class="elementor-headline-dynamic-text elementor-headline-text-active">{{{ elementor.helpers.sanitize( settings.highlighted_text, { ALLOW_DATA_ATTR: false } ) }}}</span>
						<# } #>
						</span>
					<# } #>

					<# if ( settings.after_text ) { #>
						<span class="elementor-headline-plain-text elementor-headline-text-wrapper">{{{ elementor.helpers.sanitize( settings.after_text, { ALLOW_DATA_ATTR: false } ) }}}</span>
					<# } #>
				</{{{ tag }}}>
		<# if ( settings.link.url ) { #>
			</a>
		<# } #>
		<?php
	}
}
