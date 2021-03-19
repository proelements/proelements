<?php
namespace ElementorPro\Modules\TableOfContents\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Responsive\Responsive;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Icons_Manager;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Table_Of_Contents extends Base_Widget {

	public function get_name() {
		return 'table-of-contents';
	}

	public function get_title() {
		return __( 'Table of Contents', 'elementor-pro' );
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

	protected function register_controls() {
		$this->start_controls_section(
			'table_of_contents',
			[
				'label' => __( 'Table of Contents', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'default' => __( 'Table of Contents', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'html_tag',
			[
				'label' => __( 'HTML Tag', 'elementor-pro' ),
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
				'label' => __( 'Include', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'headings_by_tags',
			[
				'label' => __( 'Anchors By Tags', 'elementor-pro' ),
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
				'label' => __( 'Container', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'label_block' => true,
				'description' => __( 'This control confines the Table of Contents to heading elements under a specific container', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$this->end_controls_tab(); // include

		$this->start_controls_tab( 'exclude',
			[
				'label' => __( 'Exclude', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'exclude_headings_by_selector',
			[
				'label' => __( 'Anchors By Selector', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'description' => __( 'CSS selectors, in a comma-separated list', 'elementor-pro' ),
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
				'label' => __( 'Marker View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'numbers',
				'options' => [
					'numbers' => __( 'Numbers', 'elementor-pro' ),
					'bullets' => __( 'Bullets', 'elementor-pro' ),
				],
				'separator' => 'before',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => __( 'Icon', 'elementor-pro' ),
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
				'label' => __( 'Additional Options', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'word_wrap',
			[
				'label' => __( 'Word Wrap', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'ellipsis',
				'prefix_class' => 'elementor-toc--content-',
			]
		);

		$this->add_control(
			'minimize_box',
			[
				'label' => __( 'Minimize Box', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'expand_icon',
			[
				'label' => __( 'Icon', 'elementor-pro' ),
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
				'label' => __( 'Minimize Icon', 'elementor-pro' ),
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

		$breakpoints = Responsive::get_breakpoints();

		$this->add_control(
			'minimized_on',
			[
				'label' => __( 'Minimized On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'tablet',
				'options' => [
					/* translators: %d: Breakpoint number. */
					'mobile' => sprintf( __( 'Mobile (< %dpx)', 'elementor-pro' ), $breakpoints['md'] ),
					/* translators: %d: Breakpoint number. */
					'tablet' => sprintf( __( 'Tablet (< %dpx)', 'elementor-pro' ), $breakpoints['lg'] ),
					'none' => __( 'None', 'elementor-pro' ),
				],
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
				'label' => __( 'Hierarchical View', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'collapse_subitems',
			[
				'label' => __( 'Collapse Subitems', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'description' => __( 'The "Collapse" option should only be used if the Table of Contents is made sticky', 'elementor-pro' ),
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
				'label' => __( 'Box', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
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
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--box-border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'padding',
			[
				'label' => __( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--box-padding: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'min_height',
			[
				'label' => __( 'Min Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'vh' ],
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
				'label' => __( 'Header', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'header_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--header-background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'header_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
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
				'label' => __( 'Icon Color', 'elementor-pro' ),
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
				'label' => __( 'Separator Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--separator-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section(); // header_style

		$this->start_controls_section(
			'list_style',
			[
				'label' => __( 'List', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'max_height',
			[
				'label' => __( 'Max Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'vh' ],
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
				'label' => __( 'Indent', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
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
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_normal',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
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
				'label' => __( 'Underline', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-decoration: underline',
				],
			]
		);

		$this->end_controls_tab(); // normal

		$this->start_controls_tab( 'hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_hover',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
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
				'label' => __( 'Underline', 'elementor-pro' ),
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
				'label' => __( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'item_text_color_active',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--item-text-active-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'item_text_underline_active',
			[
				'label' => __( 'Underline', 'elementor-pro' ),
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
				'label' => __( 'Marker', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'marker_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
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
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'{{WRAPPER}}' => '--marker-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section(); // list_style
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$this->add_render_attribute( 'body', 'class', 'elementor-toc__body' );

		if ( $settings['collapse_subitems'] ) {
			$this->add_render_attribute( 'body', 'class', 'elementor-toc__list-items--collapsible' );
		}

		$html_tag = Utils::validate_html_tag( $settings['html_tag'] );
		?>
		<div class="elementor-toc__header">
			<?php echo '<' . $html_tag . ' class="elementor-toc__header-title">' . $settings['title'] . '</' . $html_tag . '>'; ?>
			<?php if ( 'yes' === $settings['minimize_box'] ) : ?>
				<div class="elementor-toc__toggle-button elementor-toc__toggle-button--expand"><?php Icons_Manager::render_icon( $settings['expand_icon'] ); ?></div>
				<div class="elementor-toc__toggle-button elementor-toc__toggle-button--collapse"><?php Icons_Manager::render_icon( $settings['collapse_icon'] ); ?></div>
			<?php endif; ?>
		</div>
		<div <?php echo $this->get_render_attribute_string( 'body' ); ?>>
			<div class="elementor-toc__spinner-container">
				<i class="elementor-toc__spinner eicon-loading eicon-animation-spin" aria-hidden="true"></i>
			</div>
		</div>
		<?php
	}
}
