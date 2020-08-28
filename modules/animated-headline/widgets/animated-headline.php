<?php
namespace ElementorPro\Modules\AnimatedHeadline\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Modules\DynamicTags\Module as TagsModule;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Animated_Headline extends Base_Widget {

	public function get_name() {
		return 'animated-headline';
	}

	public function get_title() {
		return __( 'Animated Headline', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-animated-headline';
	}

	public function get_keywords() {
		return [ 'headline', 'heading', 'animation', 'title', 'text' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'text_elements',
			[
				'label' => __( 'Headline', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'headline_style',
			[
				'label' => __( 'Style', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'highlight',
				'options' => [
					'highlight' => __( 'Highlighted', 'elementor-pro' ),
					'rotate' => __( 'Rotating', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-headline--style-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'animation_type',
			[
				'label' => __( 'Animation', 'elementor-pro' ),
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
				'label' => __( 'Shape', 'elementor-pro' ),
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
				'label' => __( 'Before Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'default' => __( 'This page is', 'elementor-pro' ),
				'placeholder' => __( 'Enter your headline', 'elementor-pro' ),
				'label_block' => true,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'highlighted_text',
			[
				'label' => __( 'Highlighted Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => __( 'Amazing', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'headline_style' => 'highlight',
				],
				'separator' => 'none',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'rotating_text',
			[
				'label' => __( 'Rotating Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'placeholder' => __( 'Enter each word in a separate line', 'elementor-pro' ),
				'separator' => 'none',
				'default' => "Better\nBigger\nFaster",
				'condition' => [
					'headline_style' => 'rotate',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'after_text',
			[
				'label' => __( 'After Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
				'placeholder' => __( 'Enter your headline', 'elementor-pro' ),
				'label_block' => true,
				'separator' => 'none',
			]
		);

		$this->add_control(
			'link',
			[
				'label' => __( 'Link', 'elementor-pro' ),
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
					'{{WRAPPER}} .elementor-headline' => 'text-align: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'tag',
			[
				'label' => __( 'HTML Tag', 'elementor-pro' ),
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
				'label' => __( 'Shape', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'headline_style' => 'highlight',
				],
			]
		);

		$this->add_control(
			'marker_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
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
				'label' => __( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 20,
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
				'label' => __( 'Bring to Front', 'elementor-pro' ),
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
				'label' => __( 'Rounded Edges', 'elementor-pro' ),
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
				'label' => __( 'Headline', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
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

		$this->add_control(
			'heading_words_style',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Animated Text', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'words_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-headline-dynamic-text' => 'color: {{VALUE}}',
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

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$tag = $settings['tag'];

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

			echo '<a ' . $this->get_render_attribute_string( 'url' ) . '>';
		}

		?>
		<<?php echo $tag; ?> <?php echo $this->get_render_attribute_string( 'headline' ); ?>>
			<?php if ( ! empty( $settings['before_text'] ) ) : ?>
				<span class="elementor-headline-plain-text elementor-headline-text-wrapper"><?php echo $settings['before_text']; ?></span>
			<?php endif; ?>
			<span class="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper"></span>
			<?php if ( ! empty( $settings['after_text'] ) ) : ?>
				<span class="elementor-headline-plain-text elementor-headline-text-wrapper"><?php echo $settings['after_text']; ?></span>
			<?php endif; ?>
		</<?php echo $tag; ?>>
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
			tag = settings.tag;

		if ( 'rotate' === settings.headline_style ) {
			headlineClasses += ' elementor-headline-animation-type-' + settings.animation_type;

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
						<span class="elementor-headline-plain-text elementor-headline-text-wrapper">{{{ settings.before_text }}}</span>
					<# } #>

					<# if ( settings.rotating_text ) { #>
						<span class="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper"></span>
					<# } #>

					<# if ( settings.after_text ) { #>
						<span class="elementor-headline-plain-text elementor-headline-text-wrapper">{{{ settings.after_text }}}</span>
					<# } #>
				</{{{ tag }}}>
		<# if ( settings.link.url ) { #>
			</a>
		<# } #>
		<?php
	}
}
