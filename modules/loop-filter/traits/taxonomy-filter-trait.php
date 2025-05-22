<?php

namespace ElementorPro\Modules\LoopFilter\Traits;

use WP_Query;
use ElementorPro\Core\Utils;
use Elementor\Plugin;
use ElementorPro\Modules\QueryControl\Module as QueryControl;

trait Taxonomy_Filter_Trait {
	use Hierarchical_Taxonomy_Trait;

	protected function get_taxonomy_options( array $post_types, $key_prefix = '' ) {
		$post_type_taxonomies = [];
		$taxonomies_to_exclude = [];

		foreach ( $post_types as $post_type ) {
			$post_type_taxonomies = array_merge( $post_type_taxonomies, get_object_taxonomies( $post_type, 'object' ) );
			$taxonomies_to_exclude = array_merge( $taxonomies_to_exclude, $this->get_taxonomies_to_exclude( $post_type ) );
		}

		$control_options = [];

		foreach ( $post_type_taxonomies as $taxonomy ) {
			if ( $this->should_exclude_taxonomy( $taxonomy->name, $taxonomies_to_exclude ) ) {
				continue;
			}

			$control_options[ $key_prefix . $taxonomy->name ] = $taxonomy->label;
		}

		return $control_options;
	}

	private function get_loop_widget_data( $document, $selected_element = null ) {
		$elements_data = $document->get_elements_data();

		return \Elementor\Utils::find_element_recursive(
			$elements_data,
			$selected_element,
		);
	}

	private function get_loop_widget( $selected_element ) {
		$post_id = Utils::get_current_post_id();

		if ( ! $post_id ) {
			return false;
		}

		$document = Plugin::$instance->documents->get_doc_for_frontend( $post_id );
		$widget_data = $this->get_loop_widget_data( $document, $selected_element );

		if ( ! $widget_data ) {
			return false;
		}

		return Plugin::$instance->elements_manager->create_element_instance( $widget_data );
	}

	/**
	 * Adjusts Elementor query arguments to prevent taxonomy filter conflicts.
	 *
	 * Resolves an issue where the taxonomy filter unintentionally affects itself
	 * when a Loop Grid widget is filtered by taxonomy. Without this adjustment,
	 * taxonomy terms added by the filter itself may be included in the query results,
	 * leading to unexpected behavior.
	 *
	 * This function ensures that only taxonomy terms specified via the query control
	 * (with the `term_taxonomy_id` field) are considered in the `tax_query`,
	 * excluding any others introduced by the filter.
	 *
	 * @param array $query_args The query arguments for the Elementor widget.
	 * @param object $widget The Elementor widget instance.
	 * @return array The modified query arguments.
	 */
	public function modify_elementor_query_args( $query_args, $widget ) {
		global $wp_query;

		if ( isset( $query_args['tax_query'] ) && ! empty( $wp_query->include_field_ids_arg ) ) {
			$query_args['tax_query'] = array_filter(
				$query_args['tax_query'],
				function( $tax ) {
					return isset( $tax['field'] ) && 'term_taxonomy_id' === $tax['field'];
				}
			);
		}

		return $query_args;
	}

	private function get_elementor_post_query( $loop_widget ): WP_Query {
		global $wp_query;

		$wp_query->include_field_ids_arg = true;
		$query_args = [
			'posts_per_page' => -1,
			'fields' => 'ids',
		];

		add_filter( 'elementor/query/query_args', [ $this, 'modify_elementor_query_args' ], 15, 2 );

		$query = QueryControl::instance()->get_query_ignoring_avoid_list( $loop_widget, $loop_widget->get_query_name(), $query_args );

		remove_filter( 'elementor/query/query_args', [ $this, 'modify_elementor_query_args' ] );

		unset( $wp_query->include_field_ids_arg );

		return $query;
	}

	/**
	 * @param array $settings
	 * @return bool
	 */
	public function should_exclude_child_taxonomies( array $settings ): bool {
		return ! isset( $settings['show_child_taxonomy'] ) || 'yes' !== $settings['show_child_taxonomy'];
	}

	public function should_hide_empty_items( array $settings ): bool {
		return 'yes' !== $settings['show_empty_items'];
	}

	private function maybe_add_filtered_post_ids_to_args( array $args, $loop_widget, array $settings ): array {
		if ( $loop_widget && $this->should_hide_empty_items( $settings ) ) {
			$post_query = $this->get_elementor_post_query( $loop_widget );
			$post_ids = $post_query->posts;

			$args['object_ids'] = $post_ids;
		}

		return $args;
	}
	/**
	 * @param array $settings
	 * @param array $display_settings
	 * @return void|\WP_Term[]
	 */
	public function get_filtered_taxonomies( $settings, $display_settings ) {
		$args = [
			'taxonomy' => $settings['taxonomy'],
			'hide_empty' => $this->should_hide_empty_items( $settings ),
		];
		$avoid_reset_parent = ! empty( $settings['avoid_reset_parent'] );

		if ( $this->should_exclude_child_taxonomies( $settings ) && ! $avoid_reset_parent ) {
			$args['parent'] = 0;
		}

		if ( isset( $settings['selected_element'] ) && ! wp_doing_ajax() ) {
			$loop_widget = $this->get_loop_widget( $settings['selected_element'] );
			$args = $this->maybe_add_filtered_post_ids_to_args( $args, $loop_widget, $settings );
		}

		$args = apply_filters(
			'elementor/loop_taxonomy/args',
			$this->get_additional_allowed_args( $args, $display_settings ),
			$settings,
			$display_settings,
		);

		$terms = get_terms( $args );

		if ( is_wp_error( $terms ) ) {
			return;
		}

		if ( isset( $settings['show_child_taxonomy'] ) && 'yes' === $settings['show_child_taxonomy'] && isset( $display_settings['child_taxonomy_depth'] ) ) {
			$taxonomy_plain_view = [];
			$hierarchy_terms = $this->filter_child_terms_by_depth( $terms, $display_settings['child_taxonomy_depth'] );
			$this->transform_taxonomy_hierarchy_to_plain( $taxonomy_plain_view, $hierarchy_terms );
			$terms = ! empty( $taxonomy_plain_view ) ? $taxonomy_plain_view : $terms;
		}

		return $terms;
	}

	private function get_additional_allowed_args( $args, $display_settings ) {
		$allowed_args = [ 'include', 'exclude', 'term_taxonomy_id', 'child_taxonomy_depth', 'hierarchical', 'child_of', 'offset', 'orderby', 'order', 'number' ];

		foreach ( $allowed_args as $arg ) {
			if ( isset( $display_settings[ $arg ] ) ) {
				$args[ $arg ] = $display_settings[ $arg ];
			}
		}

		return $args;
	}

	private function get_taxonomies_to_exclude( $post_type ) {
		$excluded_taxonomies_per_post_type = [
			'post' => [ 'post_format' ],
			'product' => [ 'product_type', 'product_visibility', 'product_shipping_class', 'pa_color', 'pa_size' ],
		];

		return $excluded_taxonomies_per_post_type[ $post_type ] ?? [];
	}

	private function should_exclude_taxonomy( $taxonomy_name, $taxonomies_to_exclude ) {
		return ! empty( $taxonomies_to_exclude ) && in_array( $taxonomy_name, $taxonomies_to_exclude );
	}
}
