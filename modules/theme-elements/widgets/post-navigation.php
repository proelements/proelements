<?php
namespace ElementorPro\Modules\ThemeElements\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use ElementorPro\Core\Utils;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Navigation extends Base {

	public function get_name() {
		return 'post-navigation';
	}

	public function get_title() {
		return esc_html__( 'Post Navigation', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-post-navigation';
	}

	public function get_categories() {
		return [ 'theme-elements-single' ];
	}

	public function get_keywords() {
		return [ 'post', 'navigation', 'menu', 'links' ];
	}

	public function get_script_depends() {
		return [ 'post-navigation' ];
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
		return [ 'widget-post-navigation' ];
	}

	private function get_recommended_icons( $direction ): array {
		return [
			'fa-regular' => [
				"arrow-alt-circle-$direction",
				"caret-square-$direction",
			],
			'fa-solid' => [
				"angle-double-$direction",
				"angle-$direction",
				"arrow-alt-circle-$direction",
				"arrow-circle-$direction",
				"arrow-$direction",
				"caret-$direction",
				"caret-square-$direction",
				"chevron-circle-$direction",
				"chevron-$direction",
				"long-arrow-alt-$direction",
			],
		];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_post_navigation_content',
			[
				'label' => esc_html__( 'Post Navigation', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'show_label',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'prev_label',
			[
				'label' => esc_html__( 'Previous Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
				'default' => esc_html__( 'Previous', 'elementor-pro' ),
				'condition' => [
					'show_label' => 'yes',
				],
			]
		);

		$this->add_control(
			'next_label',
			[
				'label' => esc_html__( 'Next Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Next', 'elementor-pro' ),
				'condition' => [
					'show_label' => 'yes',
				],
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'show_arrow',
			[
				'label' => esc_html__( 'Arrows', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'separator' => 'before',
			]
		);

		if ( is_rtl() ) {
			$previous_direction = 'right';
			$next_direction = 'left';
		} else {
			$previous_direction = 'left';
			$next_direction = 'right';
		}

		$this->add_control(
			'arrow_previous_icon',
			[
				'label' => esc_html__( 'Previous Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'skin' => 'inline',
				'label_block' => false,
				'default' => [
					'value' => "fas fa-angle-$previous_direction",
					'library' => 'fa-solid',
				],
				'recommended' => $this->get_recommended_icons( $previous_direction ),
				'condition' => [
					'show_arrow' => 'yes',
				],
			]
		);

		$this->add_control(
			'arrow_next_icon',
			[
				'label' => esc_html__( 'Next Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'skin' => 'inline',
				'label_block' => false,
				'default' => [
					'value' => "fas fa-angle-$next_direction",
					'library' => 'fa-solid',
				],
				'recommended' => $this->get_recommended_icons( $next_direction ),
				'condition' => [
					'show_arrow' => 'yes',
				],
			]
		);

		$this->add_control(
			'show_title',
			[
				'label' => esc_html__( 'Post Title', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'show_borders',
			[
				'label' => esc_html__( 'Borders', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'prefix_class' => 'elementor-post-navigation-borders-',
				'separator' => 'before',
			]
		);

		// Filter out post type without taxonomies
		$post_type_options = [];
		$post_type_taxonomies = [];
		foreach ( Utils::get_public_post_types() as $post_type => $post_type_label ) {
			$taxonomies = Utils::get_taxonomies( [ 'object_type' => $post_type ], false );
			if ( empty( $taxonomies ) ) {
				continue;
			}

			$post_type_options[ $post_type ] = $post_type_label;
			$post_type_taxonomies[ $post_type ] = [];
			foreach ( $taxonomies as $taxonomy ) {
				$post_type_taxonomies[ $post_type ][ $taxonomy->name ] = $taxonomy->label;
			}
		}

		$this->add_control(
			'in_same_term',
			[
				'label' => esc_html__( 'In same Term', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'options' => $post_type_options,
				'default' => '',
				'multiple' => true,
				'label_block' => true,
				'description' => esc_html__( 'Indicates whether next post must be within the same taxonomy term as the current post, this lets you set a taxonomy per each post type', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		foreach ( $post_type_options as $post_type => $post_type_label ) {
			$this->add_control(
				$post_type . '_taxonomy',
				[
					'label' => $post_type_label . ' ' . esc_html__( 'Taxonomy', 'elementor-pro' ),
					'type' => Controls_Manager::SELECT,
					'options' => $post_type_taxonomies[ $post_type ],
					'default' => '',
					'condition' => [
						'in_same_term' => $post_type,
					],
				]
			);
		}

		$this->end_controls_section();

		$this->start_controls_section(
			'label_style',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_label' => 'yes',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_label_style' );

		$this->start_controls_tab(
			'label_color_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'label_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--label' => 'color: {{VALUE}};',
					'{{WRAPPER}} span.post-navigation__next--label' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'label_color_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'label_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--label:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} span.post-navigation__next--label:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'label_hover_color_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--label' => 'transition-duration: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} span.post-navigation__next--label' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'label_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
				'selector' => '{{WRAPPER}} span.post-navigation__prev--label, {{WRAPPER}} span.post-navigation__next--label',
				'exclude' => [ 'line_height' ],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'title_style',
			[
				'label' => esc_html__( 'Post Title', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_title' => 'yes',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_post_navigation_style' );

		$this->start_controls_tab(
			'tab_color_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_SECONDARY,
				],
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--title, {{WRAPPER}} span.post-navigation__next--title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_color_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--title:hover, {{WRAPPER}} span.post-navigation__next--title:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'hover_color_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} span.post-navigation__prev--title' => 'transition-duration: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} span.post-navigation__next--title' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
				'selector' => '{{WRAPPER}} span.post-navigation__prev--title, {{WRAPPER}} span.post-navigation__next--title',
				'exclude' => [ 'line_height' ],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'arrow_style',
			[
				'label' => esc_html__( 'Arrow', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_arrow' => 'yes',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_post_navigation_arrow_style' );

		$this->start_controls_tab(
			'arrow_color_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'arrow_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .post-navigation__arrow-wrapper' => 'color: {{VALUE}}; fill: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'arrow_color_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'arrow_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .post-navigation__arrow-wrapper:hover' => 'color: {{VALUE}}; fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'arrow_hover_color_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 's', 'ms', 'custom' ],
				'default' => [
					'unit' => 'ms',
				],
				'selectors' => [
					'{{WRAPPER}} .post-navigation__arrow-wrapper' => 'transition-duration: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'arrow_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 300,
					],
					'em' => [
						'max' => 30,
					],
					'rem' => [
						'max' => 30,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .post-navigation__arrow-wrapper' => 'font-size: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'arrow_padding',
			[
				'label' => esc_html__( 'Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 50,
					],
					'em' => [
						'max' => 5,
					],
					'rem' => [
						'max' => 5,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-post-navigation__link a ' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'borders_section_style',
			[
				'label' => esc_html__( 'Borders', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_borders!' => '',
				],
			]
		);

		$this->add_control(
			'sep_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				//'default' => '#D4D4D4',
				'selectors' => [
					'{{WRAPPER}} .elementor-post-navigation__separator' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-post-navigation' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'borders_width',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-post-navigation__separator' => 'width: {{SIZE}}{{UNIT}}',
					'{{WRAPPER}} .elementor-post-navigation' => 'border-block-width: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .elementor-post-navigation__next.elementor-post-navigation__link' => 'width: calc(50% - ({{SIZE}}{{UNIT}} / 2))',
					'{{WRAPPER}} .elementor-post-navigation__prev.elementor-post-navigation__link' => 'width: calc(50% - ({{SIZE}}{{UNIT}} / 2))',
				],
			]
		);

		$this->add_control(
			'borders_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-post-navigation' => 'padding: {{SIZE}}{{UNIT}} 0;',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$prev_label = '';
		$next_label = '';
		$prev_arrow = '';
		$next_arrow = '';

		if ( 'yes' === $settings['show_label'] ) {
			$prev_label = '<span class="post-navigation__prev--label">' . $settings['prev_label'] . '</span>';
			$next_label = '<span class="post-navigation__next--label">' . $settings['next_label'] . '</span>';
		}

		if ( 'yes' === $settings['show_arrow'] ) {
			$is_new = Icons_Manager::is_migration_allowed();
			$migrated_prev_icon = isset( $settings['__fa4_migrated']['arrow_previous_icon'] );
			$migrated_next_icon = isset( $settings['__fa4_migrated']['arrow_next_icon'] );

			if ( $is_new || $migrated_prev_icon ) {
				ob_start();
				Icons_Manager::render_icon( $settings['arrow_previous_icon'], [ 'aria-hidden' => 'true' ] );
				$prev_icon = ob_get_clean();
			} else {
				$prev_icon = "<i { $this->get_render_attribute_string('arrow_previous_icon') } aria-hidden='true'></i>";
			}

			if ( $is_new || $migrated_next_icon ) {
				ob_start();
				Icons_Manager::render_icon( $settings['arrow_next_icon'], [ 'aria-hidden' => 'true' ] );
				$next_icon = ob_get_clean();
			} else {
				$next_icon = "<i { $this->get_render_attribute_string('arrow_next_icon') } aria-hidden='true'></i>";
			}

			$prev_arrow = '<span class="post-navigation__arrow-wrapper post-navigation__arrow-prev">' . $prev_icon . '<span class="elementor-screen-only">' . esc_html__( 'Prev', 'elementor-pro' ) . '</span></span>';
			$next_arrow = '<span class="post-navigation__arrow-wrapper post-navigation__arrow-next">' . $next_icon . '<span class="elementor-screen-only">' . esc_html__( 'Next', 'elementor-pro' ) . '</span></span>';
		}

		$prev_title = '';
		$next_title = '';

		if ( 'yes' === $settings['show_title'] ) {
			$prev_title = '<span class="post-navigation__prev--title">%title</span>';
			$next_title = '<span class="post-navigation__next--title">%title</span>';
		}

		$in_same_term = false;
		$taxonomy = 'category';
		$post_type = get_post_type( get_queried_object_id() );

		if ( ! empty( $settings['in_same_term'] ) && is_array( $settings['in_same_term'] ) && in_array( $post_type, $settings['in_same_term'] ) ) {
			if ( isset( $settings[ $post_type . '_taxonomy' ] ) ) {
				$in_same_term = true;
				$taxonomy = $settings[ $post_type . '_taxonomy' ];
			}
		}
		?>
		<div class="elementor-post-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Post Navigation', 'elementor-pro' ); ?>">
			<div class="elementor-post-navigation__prev elementor-post-navigation__link">
				<?php
				previous_post_link(
					'%link',
					$prev_arrow . '<span class="elementor-post-navigation__link__prev">' . $prev_label . $prev_title . '</span>',
					$in_same_term,
					'',
					$taxonomy
				);
				?>
			</div>
			<?php if ( 'yes' === $settings['show_borders'] ) : ?>
				<div class="elementor-post-navigation__separator-wrapper">
					<div class="elementor-post-navigation__separator"></div>
				</div>
			<?php endif; ?>
			<div class="elementor-post-navigation__next elementor-post-navigation__link">
				<?php
				next_post_link(
					'%link',
					'<span class="elementor-post-navigation__link__next">' . $next_label . $next_title . '</span>' . $next_arrow,
					$in_same_term,
					'',
					$taxonomy
				);
				?>
			</div>
		</div>
		<?php
	}

	public function get_group_name() {
		return 'theme-elements';
	}
}
