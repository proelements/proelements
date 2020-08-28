<?php
namespace ElementorPro\Modules\Blockquote\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Modules\DynamicTags\Module as TagsModule;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Blockquote extends Base_Widget {

	public function get_style_depends() {
		if ( Icons_Manager::is_migration_allowed() ) {
			return [ 'elementor-icons-fa-brands' ];
		}

		return [];
	}

	public function get_name() {
		return 'blockquote';
	}

	public function get_title() {
		return __( 'Blockquote', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-blockquote';
	}

	public function get_keywords() {
		return [ 'blockquote', 'quote', 'paragraph', 'testimonial', 'text', 'twitter', 'tweet' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_blockquote_content',
			[
				'label' => __( 'Blockquote', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'blockquote_skin',
			[
				'label' => __( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'border' => __( 'Border', 'elementor-pro' ),
					'quotation' => __( 'Quotation', 'elementor-pro' ),
					'boxed' => __( 'Boxed', 'elementor-pro' ),
					'clean' => __( 'Clean', 'elementor-pro' ),
				],
				'default' => 'border',
				'prefix_class' => 'elementor-blockquote--skin-',
			]
		);

		$this->add_control(
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
				'prefix_class' => 'elementor-blockquote--align-',
				'condition' => [
					'blockquote_skin!' => 'border',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'blockquote_content',
			[
				'label' => __( 'Content', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'elementor-pro' ) . __( 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor', 'elementor-pro' ),
				'placeholder' => __( 'Enter your quote', 'elementor-pro' ),
				'rows' => 10,
			]
		);

		$this->add_control(
			'author_name',
			[
				'label' => __( 'Author', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => __( 'John Doe', 'elementor-pro' ),
				'separator' => 'after',
			]
		);

		$this->add_control(
			'tweet_button',
			[
				'label' => __( 'Tweet Button', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'On', 'elementor-pro' ),
				'label_off' => __( 'Off', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'tweet_button_view',
			[
				'label' => __( 'View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'icon-text' => 'Icon & Text',
					'icon' => 'Icon',
					'text' => 'Text',
				],
				'prefix_class' => 'elementor-blockquote--button-view-',
				'default' => 'icon-text',
				'render_type' => 'template',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'tweet_button_skin',
			[
				'label' => __( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'classic' => 'Classic',
					'bubble' => 'Bubble',
					'link' => 'Link',
				],
				'default' => 'classic',
				'prefix_class' => 'elementor-blockquote--button-skin-',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'tweet_button_label',
			[
				'label' => __( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => __( 'Tweet', 'elementor-pro' ),
				'condition' => [
					'tweet_button' => 'yes',
					'tweet_button_view!' => 'icon',
				],
			]
		);

		$this->add_control(
			'user_name',
			[
				'label' => __( 'Username', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => '@username',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'url_type',
			[
				'label' => __( 'Target URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'current_page' => __( 'Current Page', 'elementor-pro' ),
					'none' => __( 'None', 'elementor-pro' ),
					'custom' => __( 'Custom', 'elementor-pro' ),
				],
				'default' => 'current_page',
				'condition' => [
					'tweet_button' => 'yes',
				],
			]
		);

		$this->add_control(
			'url',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'input_type' => 'url',
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::POST_META_CATEGORY,
						TagsModule::URL_CATEGORY,
					],
				],
				'placeholder' => __( 'https://your-link.com', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'url_type' => 'custom',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_style',
			[
				'label' => __( 'Content', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'content_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'content_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__content',
			]
		);

		$this->add_responsive_control(
			'content_gap',
			[
				'label' => __( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content +footer' => 'margin-top: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'heading_author_style',
			[
				'type' => Controls_Manager::HEADING,
				'label' => __( 'Author', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'author_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__author' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'author_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__author',
			]
		);

		$this->add_responsive_control(
			'author_gap',
			[
				'label' => __( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 20,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__author' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
				'condition' => [
					'alignment' => 'center',
					'tweet_button' => 'yes',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button_style',
			[
				'label' => __( 'Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'button_size',
			[
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'font-size: calc({{SIZE}}{{UNIT}} * 10);',
				],
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
				'range' => [
					'em' => [
						'min' => 0,
						'max' => 5,
						'step' => 0.1,
					],
					'rem' => [
						'min' => 0,
						'max' => 5,
						'step' => 0.1,
					],
					'px' => [
						'min' => 0,
						'max' => 50,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
				],
				'size_units' => [ 'px', '%', 'em', 'rem' ],
			]
		);

		$this->add_control(
			'button_color_source',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'official' => __( 'Official', 'elementor-pro' ),
					'custom' => __( 'Custom', 'elementor-pro' ),
				],
				'default' => 'official',
				'prefix_class' => 'elementor-blockquote--button-color-',
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
				'condition' => [
					'button_color_source' => 'custom',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'background-color: {{VALUE}}',
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-left .elementor-blockquote__tweet-button:before' => 'border-right-color: {{VALUE}}; border-left-color: transparent',
					'body.rtl {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-right .elementor-blockquote__tweet-button:before' => 'border-left-color: {{VALUE}}; border-right-color: transparent',
				],
				'condition' => [
					'button_color_source' => 'custom',
					'tweet_button_skin!' => 'link',
				],
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
				'condition' => [
					'button_color_source' => 'custom',
				],
			]
		);

		$this->add_control(
			'button_background_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button:hover' => 'background-color: {{VALUE}}',

					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote__tweet-button:hover:before, body {{WRAPPER}}.elementor-blockquote--align-left .elementor-blockquote__tweet-button:hover:before' => 'border-right-color: {{VALUE}}; border-left-color: transparent',

					'body.rtl {{WRAPPER}} .elementor-blockquote__tweet-button:before, body {{WRAPPER}}.elementor-blockquote--align-right .elementor-blockquote__tweet-button:hover:before' => 'border-left-color: {{VALUE}}; border-right-color: transparent',
				],
				'condition' => [
					'button_color_source' => 'custom',
					'tweet_button_skin!' => 'link',
				],
			]
		);

		$this->add_control(
			'button_text_color_hover',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__tweet-button:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$default_fonts = Plugin::elementor()->kits_manager->get_current_settings( 'default_generic_fonts' );

		if ( $default_fonts ) {
			$default_fonts = ', ' . $default_fonts;
		}

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'selector' => '{{WRAPPER}} .elementor-blockquote__tweet-button span, {{WRAPPER}} .elementor-blockquote__tweet-button i',
				'separator' => 'before',
				'fields_options' => [
					'font_family' => [
						'selectors' => [
							'{{WRAPPER}} .elementor-blockquote__tweet-button' => 'font-family: "{{VALUE}}"' . $default_fonts . ';',
						],
					],
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_border_style',
			[
				'label' => __( 'Border', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'border',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_border_style' );

		$this->start_controls_tab(
			'tab_border_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'border_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_width',
			[
				'label' => __( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote' => 'border-left-width: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote' => 'border-right-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_gap',
			[
				'label' => __( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote' => 'padding-left: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote' => 'padding-right: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_border_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'border_color_hover',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_width_hover',
			[
				'label' => __( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote:hover' => 'border-left-width: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote:hover' => 'border-right-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'border_gap_hover',
			[
				'label' => __( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-blockquote:hover' => 'padding-left: {{SIZE}}{{UNIT}}',
					'body.rtl {{WRAPPER}} .elementor-blockquote:hover' => 'padding-right: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'border_vertical_padding',
			[
				'label' => __( 'Vertical Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'padding-top: {{SIZE}}{{UNIT}}; padding-bottom: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'before',
				'condition' => [
					'blockquote_skin' => 'border',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_box_style',
			[
				'label' => __( 'Box', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'boxed',
				],
			]
		);

		$this->add_responsive_control(
			'box_padding',
			[
				'label' => __( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'padding: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_box_style' );

		$this->start_controls_tab(
			'tab_box_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'box_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'box_border',
				'selector' => '{{WRAPPER}} .elementor-blockquote',
			]
		);

		$this->add_responsive_control(
			'box_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_box_shadow',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => '{{WRAPPER}} .elementor-blockquote',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_box_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'box_background_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'box_border_hover',
				'selector' => '{{WRAPPER}} .elementor-blockquote:hover',
			]
		);

		$this->add_responsive_control(
			'box_border_radius_hover',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:hover' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_box_shadow_hover',
				'exclude' => [
					'box_shadow_position',
				],
				'selector' => '{{WRAPPER}} .elementor-blockquote:hover',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_quote_style',
			[
				'label' => __( 'Quote', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'blockquote_skin' => 'quotation',
				],
			]
		);

		$this->add_control(
			'quote_text_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:before' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'quote_size',
			[
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.1,
					],
				],
				'default' => [
					'size' => 1,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote:before' => 'font-size: calc({{SIZE}}{{UNIT}} * 100)',
				],
			]
		);

		$this->add_responsive_control(
			'quote_gap',
			[
				'label' => __( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-blockquote__content' => 'margin-top: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$tweet_button_view = $settings['tweet_button_view'];
		$share_link = 'https://twitter.com/intent/tweet';

		$text = rawurlencode( $settings['blockquote_content'] );

		if ( ! empty( $settings['author_name'] ) ) {
			$text .= ' — ' . $settings['author_name'];
		}

		$share_link = add_query_arg( 'text', $text, $share_link );

		if ( 'current_page' === $settings['url_type'] ) {
			$share_link = add_query_arg( 'url', rawurlencode( home_url() . add_query_arg( false, false ) ), $share_link );
		} elseif ( 'custom' === $settings['url_type'] ) {
			$share_link = add_query_arg( 'url', rawurlencode( $settings['url'] ), $share_link );
		}

		if ( ! empty( $settings['user_name'] ) ) {
			$user_name = $settings['user_name'];
			if ( '@' === substr( $user_name, 0, 1 ) ) {
				$user_name = substr( $user_name, 1 );
			}
			$share_link = add_query_arg( 'via', rawurlencode( $user_name ), $share_link );
		}

		$this->add_render_attribute( [
			'blockquote_content' => [ 'class' => 'elementor-blockquote__content' ],
			'author_name' => [ 'class' => 'elementor-blockquote__author' ],
			'tweet_button_label' => [ 'class' => 'elementor-blockquote__tweet-label' ],
		] );

		$this->add_inline_editing_attributes( 'blockquote_content' );
		$this->add_inline_editing_attributes( 'author_name', 'none' );
		$this->add_inline_editing_attributes( 'tweet_button_label', 'none' );
		?>
		<blockquote class="elementor-blockquote">
			<p <?php echo $this->get_render_attribute_string( 'blockquote_content' ); ?>>
				<?php echo $settings['blockquote_content']; ?>
			</p>
			<?php if ( ! empty( $settings['author_name'] ) || 'yes' === $settings['tweet_button'] ) : ?>
				<footer>
					<?php if ( ! empty( $settings['author_name'] ) ) : ?>
						<cite <?php echo $this->get_render_attribute_string( 'author_name' ); ?>><?php echo $settings['author_name']; ?></cite>
					<?php endif ?>
					<?php if ( 'yes' === $settings['tweet_button'] ) : ?>
						<a href="<?php echo esc_attr( $share_link ); ?>" class="elementor-blockquote__tweet-button" target="_blank">
							<?php if ( 'text' !== $tweet_button_view ) : ?>
								<?php
								$icon = [
									'value' => 'fab fa-twitter',
									'library' => 'fa-brands',
								];
								if ( ! Icons_Manager::is_migration_allowed() || ! Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] ) ) : ?>
									<i class="fa fa-twitter" aria-hidden="true"></i>
								<?php endif; ?>
								<?php if ( 'icon-text' !== $tweet_button_view ) : ?>
									<span class="elementor-screen-only"><?php esc_html_e( 'Tweet', 'elementor-pro' ); ?></span>
								<?php endif; ?>
							<?php endif; ?>
							<?php if ( 'icon-text' === $tweet_button_view || 'text' === $tweet_button_view ) : ?>
								<span <?php echo $this->get_render_attribute_string( 'tweet_button_label' ); ?>><?php echo $settings['tweet_button_label']; ?></span>
							<?php endif; ?>
						</a>
					<?php endif ?>
				</footer>
			<?php endif ?>
		</blockquote>
		<?php
	}

	/**
	 * Render Blockquote widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
			var tweetButtonView = settings.tweet_button_view;
			#>
			<blockquote class="elementor-blockquote">
				<p class="elementor-blockquote__content elementor-inline-editing" data-elementor-setting-key="blockquote_content">
					{{{ settings.blockquote_content }}}
				</p>
				<# if ( 'yes' === settings.tweet_button || settings.author_name ) { #>
					<footer>
						<# if ( settings.author_name ) { #>
							<cite class="elementor-blockquote__author elementor-inline-editing" data-elementor-setting-key="author_name" data-elementor-inline-editing-toolbar="none">{{{ settings.author_name }}}</cite>
						<# } #>
						<# if ( 'yes' === settings.tweet_button ) { #>
							<a href="#" class="elementor-blockquote__tweet-button">
								<# if ( 'text' !== tweetButtonView ) {
									// If FontAwesome migration has been done, load the FA5 version, otherwise load FA4
									if ( ! elementor.config.icons_update_needed ) { #>
										<i class="fab fa-twitter" aria-hidden="true"></i>
									<# } else { #>
										<i class="fa fa-twitter" aria-hidden="true"></i>
									<# } #>
									<# if ( 'icon-text' !== tweetButtonView ) { #>
										<span class="elementor-screen-only"><?php esc_html_e( 'Tweet', 'elementor-pro' ); ?></span>
									<# } #>
								<# } #>
								<# if ( 'icon-text' === tweetButtonView || 'text' === tweetButtonView ) { #>
									<span class="elementor-inline-editing elementor-blockquote__tweet-label" data-elementor-setting-key="tweet_button_label" data-elementor-inline-editing-toolbar="none">{{{ settings.tweet_button_label }}}</span>
								<# } #>
							</a>
						<# } #>
					</footer>
				<# } #>
			</blockquote>
		<?php
	}
}
