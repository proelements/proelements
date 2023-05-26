<?php
namespace ElementorPro\Modules\TableOfContents\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Responsive\Responsive;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Icons_Manager;
use Elementor\Utils;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Table_Of_Contents extends Base_Widget {

	public function get_name() {
		return 'table-of-contents';
	}

	public function get_title() {
		return esc_html__( 'Table of Contents', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-table-of-contents';
	}

	public function get_categories() {
		return [ 'pro-elements', 'theme-elements-single' ];
	}

	public function get_keywords() {
		return [ 'toc' ];
	}

	/**
	 * Get Frontend Settings
	 *
	 * In the TOC widget, this implementation is used to pass a pre-rendered version of the icon to the front end,
	 * which is required in case the FontAwesome SVG experiment is active.
	 *
	 * @since 3.4.0
	 *
	 * @return array
	 */
	public function get_frontend_settings() {
		$frontend_settings = parent::get_frontend_settings();

		if ( Plugin::elementor()->experiments->is_feature_active( 'e_font_icon_svg' ) && ! empty( $frontend_settings['icon']['value'] ) ) {
			$frontend_settings['icon']['rendered_tag'] = Icons_Manager::render_font_icon( $frontend_settings['icon'] );
		}

		return $frontend_settings;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'table_of_contents',
			[
				'label' => esc_html__( 'Table of Contents', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'default' => esc_html__( 'Table of Contents', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'html_tag',
			[
				'label' => esc_html__( 'HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'h2' => 'H2',
					'h3' => 'H3',
					'h4' => 'H4',
					'h5' => 'H5',
					'h6' => 'H6',
					'div' => 'div',
				],
				'default' => 'h4',
			]
		);

		$this->start_controls_tabs( 'include_exclude_tags', [ 'separator' => 'before' ] );

		$this->start_controls_tab( 'include',
			[
				'label' => esc_html__( 'Include', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'headings_by_tags',
			[
				'label' => esc_html__( 'Anchors By Tags', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'default' => [ 'h2', 'h3', 'h4', 'h5', 'h6' ],
				'options' => [
					'h1' => 'H1',
					'h2' => 'H2',
					'h3' => 'H3',
					'h4' => 'H4',
					'h5' => 'H5',
					'h6' => 'H6',
				],
				'label_block' => true,
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'container',
			[
				'label' => esc_html__( 'Container', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'description' => esc_html__( 'This control confines the Table of Contents to heading elements under a specific container', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$this->end_controls_tab(); // include

		$this->start_controls_tab( 'exclude',
			[
				'label' => esc_html__( 'Exclude', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'exclude_headings_by_selector',
			[
				'label' => esc_html__( 'Anchors By Selector', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'description' => esc_html__( 'CSS selectors, in a comma-separated list', 'elementor-pro' ),
				'default' => [],
				'label_block' => true,
				'frontend_available' => true,
			]
		);

		$this->end_controls_tab(); // exclude

		$this->end_controls_tabs(); // include_exclude_tags

		$this->add_control(
			'marker_view',
			[
				'label' => esc_html__( 'Marker View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'numbers',
				'options' => [
					'numbers' => esc_html__( 'Numbers', 'elementor-pro' ),
					'bullets' => esc_html__( 'Bullets', 'elementor-pro' ),
				],
				'separator' => 'before',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-circle',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'circle',
						'dot-circle',
						'square-full',
					],
					'fa-regular' => [
						'circle',
						'dot-circle',
						'square-full',
					],
				],
				'condition' => [
					'marker_view' => 'bullets',
				],
				'skin' => 'inline',
				'label_block' => false,
				'exclude_inline_options' => [ 'svg' ],
				'frontend_available' => true,
			]
		);

		$this->end_controls_section(); // table_of_contents

		$this->start_controls_section(
			'additional_options',
			[
				'label' => esc_html__( 'Additional Options', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'word_wrap',
			[
				'label' => esc_html__( 'Word Wrap', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'ellipsis',
				'prefix_class' => 'elementor-toc--content-',
			]
		);

		$this->add_control(
			'minimize_box',
			[
				'label' => esc_html__( 'Minimize Box', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'expand_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-chevron-down',
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
				'condition' => [
					'minimize_box' => 'yes',
				],
			]
		);

		$this->add_control(
			'collapse_icon',
			[
				'label' => esc_html__( 'Minimize Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-chevron-up',
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
				'condition' => [
					'minimize_box' => 'yes',
				],
			]
		);

		// TODO: For Pro 3.6.0, convert this to the breakpoints utility method introduced in core 3.5.0.
		$breakpoints = Plugin::elementor()->breakpoints->get_active_breakpoints();

		$minimized_on_options = [];

		foreach ( $breakpoints as $breakpoint_key => $breakpoint ) {
			// This feature is meant for mobile screens.
			if ( 'widescreen' === $breakpoint_key ) {
				continue;
			}

			$minimized_on_options[ $breakpoint_key ] = sprintf(
				/* translators: 1: Breakpoint label, 2: `<` character, 3: Breakpoint value. */
				esc_html__( '%1$s (%2$s %3$dpx)', 'elementor-pro' ),
				$breakpoint->get_label(),
				'<',
				$breakpoint->get_value()
			);
		}

		$minimized_on_options['desktop'] = esc_html__( 'Desktop (or smaller)', 'elementor-pro' );

		$this->add_control(
			'minimized_on',
			[
				'label' => esc_html__( 'Minimized On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'tablet',
				'options' => $minimized_on_options,
				'prefix_class' => 'elementor-toc--minimized-on-',
				'condition' => [
					'minimize_box!' => '',
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'hierarchical_view',
			[
				'label' => esc_html__( 'Hierarchical View', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'collapse_subitems',
			[
				'label' => esc_html__( 'Collapse Subitems', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'description' => esc_html__( 'The "Collapse" option should only be used if the Table of Contents is made sticky', 'elementor-pro' ),
				'condition' => [
					'hierarchical_view' => 'yes',
				],
				'frontend_available' => true,
			]
		);

		$this->end_controls_section(); // settings

		$this->start_controls_section(
			'box_style',
			[
				'label' => esc_html__( 'Box', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => '--box-background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'loader_color',
			[
				'label' => esc_html__( 'Loader Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					// Not using CSS var for BC, when not configured: the loader should get the color from the body tag.
					'{{WRAPPER}} .elementor-toc__spinner' => 'color: {{VALUE}}; fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'border_width',
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
				],
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--box-padding: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'min_height',
			[
				'label' => esc_html__( 'Min Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--box-min-height: {{SIZE}}{{UNIT}}',
				],
				'frontend_available' => true,
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'selector' => '{{WRAPPER}}',
			]
		);

		$this->end_controls_section(); // box_style

		$this->start_controls_section(
			'header_style',
			[
				'label' => esc_html__( 'Header', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'header_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--header-background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'header_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--header-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'header_typography',
				'selector' => '{{WRAPPER}} .elementor-toc__header, {{WRAPPER}} .elementor-toc__header-title',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
				],
			]
		);

		$this->add_control(
			'toggle_button_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'condition' => [
					'minimize_box' => 'yes',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--toggle-button-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'header_separator_width',
			[
				'label' => esc_html__( 'Separator Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--separator-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section(); // header_style

		$this->start_controls_section(
			'list_style',
			[
				'label' => esc_html__( 'List', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'max_height',
			[
				'label' => esc_html__( 'Max Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--toc-body-max-height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'list_typography',
				'selector' => '{{WRAPPER}} .elementor-toc__list-item',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->add_control(
			'list_indent',
			[
				'label' => esc_html__( 'Indent', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'default' => [
					'unit' => 'em',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--nested-list-indent: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->start_controls_tabs( 'item_text_style' );

		$this->start_controls_tab( 'normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_normal',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'item_text_underline_normal',
			[
				'label' => esc_html__( 'Underline', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-decoration: underline',
				],
			]
		);

		$this->end_controls_tab(); // normal

		$this->start_controls_tab( 'hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_hover',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-hover-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'item_text_underline_hover',
			[
				'label' => esc_html__( 'Underline', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-hover-decoration: underline',
				],
			]
		);

		$this->end_controls_tab(); // hover

		$this->start_controls_tab( 'active',
			[
				'label' => esc_html__( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_active',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-active-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'item_text_underline_active',
			[
				'label' => esc_html__( 'Underline', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-active-decoration: underline',
				],
			]
		);

		$this->end_controls_tab(); // active

		$this->end_controls_tabs(); // item_text_style

		$this->add_control(
			'heading_marker',
			[
				'label' => esc_html__( 'Marker', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'marker_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--marker-color: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'marker_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--marker-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section(); // list_style
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$this->add_render_attribute(
			'header',
			[
				'class' => 'elementor-toc__header',
				'aria-controls' => 'elementor-toc__body',
			]
		);

		$this->add_render_attribute(
			'body',
			[
				'class' => 'elementor-toc__body',
				'aria-expanded' => 'true',
			]
		);

		if ( $settings['collapse_subitems'] ) {
			$this->add_render_attribute( 'body', 'class', 'elementor-toc__list-items--collapsible' );
		}

		if ( 'yes' === $settings['minimize_box'] ) {
			$this->add_render_attribute(
				'expand-button',
				[
					'class' => 'elementor-toc__toggle-button elementor-toc__toggle-button--expand',
					'role' => 'button',
					'tabindex' => '0',
					'aria-label' => esc_html__( 'Open table of contents', 'elementor-pro' ),
				]
			);
			$this->add_render_attribute(
				'collapse-button',
				[
					'class' => 'elementor-toc__toggle-button elementor-toc__toggle-button--collapse',
					'role' => 'button',
					'tabindex' => '0',
					'aria-label' => esc_html__( 'Close table of contents', 'elementor-pro' ),
				]
			);
		}

		$html_tag = Utils::validate_html_tag( $settings['html_tag'] );
		?>
		<div <?php $this->print_render_attribute_string( 'header' ); ?>>
			<<?php Utils::print_validated_html_tag( $html_tag ); ?> class="elementor-toc__header-title">
				<?php $this->print_unescaped_setting( 'title' ); ?>
			</<?php Utils::print_validated_html_tag( $html_tag ); ?>>
			<?php if ( 'yes' === $settings['minimize_box'] ) : ?>
				<div <?php $this->print_render_attribute_string( 'expand-button' ); ?>><?php Icons_Manager::render_icon( $settings['expand_icon'], [ 'aria-hidden' => 'true' ] ); ?></div>
				<div <?php $this->print_render_attribute_string( 'collapse-button' ); ?>><?php Icons_Manager::render_icon( $settings['collapse_icon'], [ 'aria-hidden' => 'true' ] ); ?></div>
			<?php endif; ?>
		</div>
		<div <?php $this->print_render_attribute_string( 'body' ); ?>>
			<div class="elementor-toc__spinner-container">
				<?php
					Icons_Manager::render_icon(
						[
							'library' => 'eicons',
							'value' => 'eicon-loading',
						],
						[
							'class' => [
								'elementor-toc__spinner',
								'eicon-animation-spin',
							],
							'aria-hidden' => 'true',
						]
					); ?>
			</div>
		</div>
		<?php
	}
}
