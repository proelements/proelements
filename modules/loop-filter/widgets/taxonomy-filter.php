<?php
namespace ElementorPro\Modules\LoopFilter\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Typography;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\LoopFilter\Traits\Hierarchical_Taxonomy_Trait;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Taxonomy_Filter extends Base_Widget {
	use Hierarchical_Taxonomy_Trait;

	public function get_name() {
		return 'taxonomy-filter';
	}

	public function get_group_name() {
		return 'loop-filter';
	}

	public function get_title() {
		return __( 'Taxonomy Filter', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-taxonomy-filter';
	}

	public function get_keywords() {
		return [ 'filter', 'loop', 'filter bar', 'taxonomy', 'categories', 'tags' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_taxonomy_filter',
			[
				'label' => __( 'Layout', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'selected_element',
			[
				'label' => __( 'Selected loop grid', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => 'Select a widget',
				],
				'label_block' => true,
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'taxonomy',
			[
				'label' => __( 'Taxonomy', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => 'Select a taxonomy',
				],
				'label_block' => true,
				'condition' => [
					'selected_element!' => '',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'direction',
			[
				'label' => __( 'Direction', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'horizontal' => 'Horizontal',
					'vertical' => 'Vertical',
				],
				'default' => 'horizontal',
				'selectors_dictionary' => [
					'horizontal' => '--e-filter-direction: row;--e-filter-white-space: nowrap;',
					'vertical' => '--e-filter-direction: column;--e-filter-white-space: initial;',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'condition' => [
					'selected_element!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'item_alignment_horizontal',
			[
				'label' => esc_html__( 'Item Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-align-center-h',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-align-end-h',
					],
					'stretch' => [
						'title' => esc_html__( 'Stretch', 'elementor-pro' ),
						'icon' => 'eicon-align-stretch-h',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'start' => '--e-filter-justify-content: flex-start; --e-filter-item-width: initial; --e-filter-item-flex-grow: 0;',
					'center' => '--e-filter-justify-content: center; --e-filter-item-width: initial; --e-filter-item-flex-grow: 0;',
					'end' => '--e-filter-justify-content: flex-end; --e-filter-item-width: initial; --e-filter-item-flex-grow: 0;',
					'stretch' => '--e-filter-justify-content: initial; --e-filter-item-width: 100%; --e-filter-item-flex-grow: 1;',
				],
				'condition' => [
					'direction' => 'horizontal',
					'selected_element!' => '',
				],
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'title_alignment_horizontal',
			[
				'label' => esc_html__( 'Title Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-align-center-h',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-align-end-h',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'start' => '--e-filter-item-justify-content: flex-start;',
					'center' => '--e-filter-item-justify-content: center;',
					'end' => '--e-filter-item-justify-content: flex-end;',
				],
				'condition' => [
					'direction' => 'horizontal',
					'selected_element!' => '',
					'item_alignment_horizontal' => 'stretch',
				],
			]
		);

		$this->add_responsive_control(
			'item_alignment_vertical',
			[
				'label' => esc_html__( 'Item Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-align-center-h',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-align-end-h',
					],
					'stretch' => [
						'title' => esc_html__( 'Stretch', 'elementor-pro' ),
						'icon' => 'eicon-align-stretch-h',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'start' => '--e-filter-align-items: flex-start; --e-filter-item-width: initial; --e-filter-item-max-width: calc(100% - calc(var( --e-filter-item-padding )*3 ) ); --e-filter-item-flex-grow: initial; --e-filter-item-box-sizing: initial; --e-filter-item-align-text: start;',
					'center' => '--e-filter-align-items: center; --e-filter-item-width: initial; --e-filter-item-max-width: calc(100% - calc(var( --e-filter-item-padding )*3 ) ); --e-filter-item-flex-grow: initial; --e-filter-item-box-sizing: initial; --e-filter-item-align-text: center;',
					'end' => '--e-filter-align-items: flex-end; --e-filter-item-width: initial; --e-filter-item-max-width: calc(100% - calc(var( --e-filter-item-padding )*3 ) ); --e-filter-item-flex-grow: initial; --e-filter-item-box-sizing: initial; --e-filter-item-align-text: end;',
					'stretch' => '--e-filter-align-items: center; --e-filter-item-width: 100%; --e-filter-item-max-width: 100%; --e-filter-item-flex-grow: 1; --e-filter-item-box-sizing: border-box; --e-filter-item-align-text: center;',
				],
				'condition' => [
					'direction' => 'vertical',
					'selected_element!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'title_alignment_vertical',
			[
				'label' => esc_html__( 'Title Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-align-center-h',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-align-end-h',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'start' => '--e-filter-item-justify-content: flex-start; --e-filter-item-align-items: flex-start; --e-filter-item-align-text: start;',
					'center' => '--e-filter-item-justify-content: center; --e-filter-item-align-items: center; --e-filter-item-align-text: center;',
					'end' => '--e-filter-item-justify-content: flex-end; --e-filter-item-align-items: flex-end; --e-filter-item-align-text: end;',
				],
				'condition' => [
					'direction' => 'vertical',
					'selected_element!' => '',
					'item_alignment_vertical' => 'stretch',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_settings',
			[
				'label' => __( 'Settings', 'elementor-pro' ),
				'condition' => [
					'selected_element!' => '',
				],
			]
		);

		$this->add_control(
			'heading_displayed_elements',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Displayed Elements', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'show_empty_items',
			[
				'label' => esc_html__( 'Empty Items', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'show_child_taxonomy',
			[
				'label' => esc_html__( 'Taxonomy Children', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'child_taxonomy_depth',
			[
				'label' => __( 'Depth', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '1',
				'options' => [
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
				],
				'condition' => [
					'show_child_taxonomy' => 'yes',
				],
			]
		);
		$this->add_control(
			'show_first_item',
			[
				'label' => esc_html__( 'First Item', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'first_item_title',
			[
				'label' => esc_html__( 'First Item Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => 'All',
				'label_block' => true,
				'dynamic' => [
					'active' => true,
				],
				'condition' => [
					'show_first_item' => 'yes',
				],
			]
		);

		$this->add_control(
			'number_of_taxonomies',
			[
				'label' => esc_html__( 'Number of taxonomies', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'min' => 1,
			]
		);

		$this->add_responsive_control(
			'horizontal_scroll',
			[
				'label' => esc_html__( 'Horizontal Scroll', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'disable' => 'Disable',
					'enable' => 'Enable',
				],
				'condition' => [
					'direction' => 'horizontal',
				],
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'enable' => '--e-filter-wrap: nowrap; --e-filter-overflow-x: scroll;',
					'disable' => '--e-filter-wrap: wrap; --e-filter-overflow-x: initial;',
				],
				'default' => 'disable',
				'frontend_available' => true,
				'separator' => 'before',
				'description' => esc_html__( 'Scroll items if they don’t fit into their parent container', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->register_design_layout_controls();
	}

	protected function register_design_layout_controls() {
		$this->start_controls_section(
			'section_design_layout',
			[
				'label' => esc_html__( 'Items', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'taxonomy_filter_items_space_between',
			[
				'label' => esc_html__( 'Space between Items', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-filter-space-between: {{SIZE}}{{UNIT}}',
				],
				'separator' => 'after',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'taxonomy_filter_typography',
				'selector' => '{{WRAPPER}} .e-filter-item',
			]
		);

		$this->start_controls_tabs( 'taxonomy_filter_tabs_section' );

		$this->start_controls_tab( 'taxonomy_filter_tabs_normal', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'taxonomy_filter_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-filter-normal-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_normal_text_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item:not( [aria-pressed=true] ):not( :hover )',
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'taxonomy_filter_normal_background',
				'selector' => '{{WRAPPER}} .e-filter-item:not( [aria-pressed=true] ):not( :hover )',
				'exclude' => [ 'image', 'video' ],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'taxonomy_filter_normal_border',
				'selector' => '{{WRAPPER}} .e-filter-item:not( [aria-pressed=true] ):not( :hover )',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_normal_box_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item:not( [aria-pressed=true] ):not( :hover )',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'taxonomy_filter_tabs_hover', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'taxonomy_filter_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-filter-hover-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_hover_text_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item:hover:not( [aria-pressed=true] )',
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'taxonomy_filter_hover_background',
				'selector' => '{{WRAPPER}} .e-filter-item:hover:not( [aria-pressed=true] )',
				'exclude' => [ 'image', 'video' ],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'taxonomy_filter_hover_border',
				'selector' => '{{WRAPPER}} .e-filter-item:hover:not( [aria-pressed=true] )',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_hover_box_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item:hover:not( [aria-pressed=true] )',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'taxonomy_filter_tabs_active', [ 'label' => esc_html__( 'Active', 'elementor-pro' ) ] );

		$this->add_control(
			'taxonomy_filter_active_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-filter-active-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_active_text_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item[aria-pressed="true"]',
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'taxonomy_filter_active_background',
				'selector' => '{{WRAPPER}} .e-filter-item[aria-pressed="true"]',
				'exclude' => [ 'image', 'video' ],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'taxonomy_filter_active_border',
				'selector' => '{{WRAPPER}} .e-filter-item[aria-pressed="true"]',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'taxonomy_filter_active_box_shadow',
				'selector' => '{{WRAPPER}} .e-filter-item[aria-pressed="true"]',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'taxonomy_filter_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-filter-item-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'taxonomy_filter_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vm', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .e-filter-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function get_empty_widget_message_by_key( $message_key ) {
		$messages = [
			'select_loop_widget' => esc_html__( 'Choose a Loop Grid to view the Taxonomy Filter.', 'elementor-pro' ),
			'no_taxonomy_selected' => esc_html__( 'Please select a taxonomy.', 'elementor-pro' ),
			'no_terms_found' => esc_html__( 'No taxonomy terms found.', 'elementor-pro' ),
		];

		return $messages[ $message_key ];
	}

	protected function print_empty_results_if_editor( $message_key ) {
		if ( ! Plugin::elementor()->editor->is_edit_mode() ) {
			return;
		}

		?>
		<div class="e-filter-empty">
			<?php echo esc_html( $this->get_empty_widget_message_by_key( $message_key ) ); ?>
		</div>
		<?php
	}

	private function has_empty_results( $selected_element, $user_selected_taxonomy, $terms ): bool {
		if ( empty( $selected_element ) ) {
			$this->print_empty_results_if_editor( 'select_loop_widget' );

			return true;
		}

		if ( empty( $user_selected_taxonomy ) ) {
			$this->print_empty_results_if_editor( 'no_taxonomy_selected' );

			return true;
		}

		if ( empty( $terms ) ) {
			$this->print_empty_results_if_editor( 'no_terms_found' );

			return true;
		}

		return false;
	}

	public function render() {
		$settings = $this->get_settings_for_display();
		$selected_element = $settings['selected_element'];
		$user_selected_taxonomy = $settings['taxonomy'];

		$terms = $this->get_filtered_taxonomy_terms( $user_selected_taxonomy, $settings );

		if ( $this->has_empty_results( $selected_element, $user_selected_taxonomy, $terms ) ) {
			return;
		}

		$active_filter = [];
		$query_string_filters = Plugin::instance()->modules_manager->get_modules( 'loop-filter' )->get_query_string_filters();

		if ( array_key_exists( $selected_element, $query_string_filters ) ) {
			$active_filter = $query_string_filters[ $selected_element ]['taxonomy'];
		}

		$active_terms = 0;
		$total_taxonomies = 0;
		$number_of_taxonomies = $settings['number_of_taxonomies'];

		$this->add_render_attribute( 'filter-bar', [
			'class' => 'e-filter',
			'data-base-url' => $this->get_base_url(),
			'data-page-num' => max( 1, get_query_var( 'paged' ), get_query_var( 'page' ) ),
		] );
		?>
		<div <?php $this->print_render_attribute_string( 'filter-bar' ); ?>>
			<?php foreach ( $terms as $term ) {
				$total_taxonomies++;
				$aria_pressed_value = 'false';

				if ( ! isset( $term->taxonomy ) ) {
					continue;
				}

				$term_taxonomy = $term->taxonomy;

				if ( array_key_exists( $term_taxonomy, $active_filter ) && $term->slug === $active_filter[ $term_taxonomy ][0] ) {
					$aria_pressed_value = 'true';
					$active_terms++;
				}

				if ( ! empty( $number_of_taxonomies ) && $total_taxonomies > $number_of_taxonomies ) {
					continue;
				}
				?>
				<button class="e-filter-item" data-filter="<?php echo esc_attr( $term->slug ); ?>" aria-pressed="<?php echo esc_html( $aria_pressed_value ); ?>"><?php echo esc_html( $term->name ); ?></button>
			<?php } ?>

			<?php
			$aria_pressed_value = ( 0 === $active_terms ) ? 'true' : 'false';
			?>
			<?php if ( 'yes' === $settings['show_first_item'] ) : ?>
			<button class="e-filter-item" data-filter="__all" aria-pressed="<?php echo esc_html( $aria_pressed_value ); ?>">
				<?php echo $settings['first_item_title']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</button>
			<?php endif; ?>
		</div>
		<?php
	}

	/**
	 * @param string|null $user_selected_taxonomy
	 * @param array $settings
	 * @return void|\WP_Term[]
	 */
	private function get_filtered_taxonomy_terms( $user_selected_taxonomy, $settings ) {
		$args = [
			'taxonomy' => $user_selected_taxonomy,
			'hide_empty' => 'yes' !== $settings['show_empty_items'],
		];

		if ( 'yes' !== $settings['show_child_taxonomy'] ) {
			$args['parent'] = 0;
		}

		$terms = get_terms( $args );

		if ( is_wp_error( $terms ) ) {
			return;
		}

		if ( 'yes' === $settings['show_child_taxonomy'] ) {
			$taxonomy_plain_view = [];
			$hierarchy_terms = $this->filter_child_terms_by_depth( $terms, $this->get_settings_for_display( 'child_taxonomy_depth' ) );
			$this->transform_taxonomy_hierarchy_to_plain( $taxonomy_plain_view, $hierarchy_terms );
			$terms = ! empty( $taxonomy_plain_view ) ? $taxonomy_plain_view : $terms;
		}

		return $terms;
	}

	private function get_base_url() {
		if ( is_page() ) {
			// Check if it's a normal page.
			return get_permalink();
		} elseif ( is_archive() ) {
			// Check if it's an archive page.
			return get_post_type_archive_link( get_post_type() );
		} elseif ( is_singular() && 'post' !== get_post_type() && 'page' !== get_post_type() ) {
			// Check if it's a single post/page of a custom post type.
			$post_type = get_post_type_object( get_post_type() );

			if ( $post_type->has_archive ) {
				return get_post_type_archive_link( get_post_type() );
			} else {
				return get_permalink();
			}
		}

		// Fallback to home URL.
		return home_url( '/' );
	}
}
