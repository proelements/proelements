<?php

namespace ElementorPro\Modules\LoopFilter\Traits;

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

	/**
	 * @param array $settings
	 * @param array $display_settings
	 * @return void|\WP_Term[]
	 */
	public function get_filtered_taxonomies( $settings, $display_settings ) {
		$args = [
			'taxonomy' => $settings['taxonomy'],
			'hide_empty' => 'yes' !== $settings['show_empty_items'],
		];
		$avoid_reset_parent = ! empty( $settings['avoid_reset_parent'] );

		if ( ( ! isset( $settings['show_child_taxonomy'] ) || 'yes' !== $settings['show_child_taxonomy'] ) && ! $avoid_reset_parent ) {
			$args['parent'] = 0;
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
