<?php
namespace ElementorPro\Modules\QueryControl\Classes;

use Elementor\Widget_Base;
use ElementorPro\Core\Utils;

class Elementor_Related_Query extends Elementor_Post_Query {
	private $fallback_args;
	private $related_post_id;

	/**
	 * Elementor_Post_Query constructor.
	 *
	 * @param Widget_Base $widget
	 * @param string $group_query_name
	 * @param array $query_args
	 * @param array $fallback_args
	 */
	public function __construct( $widget, $group_query_name, $query_args = [], $fallback_args = [] ) {
		parent::__construct( $widget, $group_query_name, $query_args );
		$this->related_post_id = -1;
		$this->fallback_args = $fallback_args;
	}

	/**
	 * 1) build query args
	 * 2) invoke callback to fine-tune query-args
	 * 3) generate WP_Query object
	 * 4) if no results & fallback is set, generate a new WP_Query with fallback args
	 * 5) return WP_Query
	 *
	 * @return \WP_Query
	 */
	public function get_query() {
		$query = parent::get_query();

		if ( ! $query->post_count && $this->is_valid_fallback() ) {
			$query = $this->get_fallback_query( $query );
		}

		return $query;
	}

	protected function get_fallback_query( $original_query ) {
		$this->set_fallback_query_args();
		$this->set_fallback_arg_by_settings( 'posts_per_page', $original_query->query_vars['posts_per_page'] );
		$this->set_fallback_arg_by_settings( 'post__not_in', $original_query->query_vars['post__not_in'] );

		/**
		 * Fallback query arguments.
		 *
		 * Filters the query arguments for the fallback query. This hook allows
		 * developers to alter those arguments.
		 *
		 * @param array       $fallback_args An array of WordPress query arguments.
		 * @param Widget_Base $widget        An instance of Elementor widget.
		 */
		$this->fallback_args = apply_filters( 'elementor/query/fallback_query_args', $this->fallback_args, $this->widget );

		return new \WP_Query( $this->fallback_args );
	}

	private function is_valid_fallback() {
		$related_callback = $this->get_widget_settings( 'related_fallback' );
		if ( empty( $related_callback ) ) {
			return false;
		}
		$valid = false;
		switch ( $this->get_widget_settings( 'related_fallback' ) ) {
			case 'fallback_recent':
				$valid = true;
				break;
			case 'fallback_by_id':
				$fallback_id = $this->get_widget_settings( 'fallback_ids' );
				if ( ! empty( $fallback_id ) ) {
					$valid = true;
				}
				break;
		}

		return $valid;
	}

	protected function set_common_args() {
		parent::set_common_args();
		$post_id = get_queried_object_id();
		$this->related_post_id = is_singular() && ( 0 !== $post_id ) ? $post_id : null;
		$this->query_args['post_type'] = get_post_type( $this->related_post_id );
	}

	protected function set_post_exclude_args() {
		parent::set_post_exclude_args();

		if ( $this->related_post_id ) {
			$post_not_in = isset( $this->query_args['post__not_in'] ) ? $this->query_args['post__not_in'] : [];
			$post_not_in[] = $this->related_post_id;
			$this->query_args['post__not_in'] = $post_not_in;
		}
	}

	protected function build_terms_query_include( $control_id ) {
		/**
		 * Build tax_query for the "related posts" query:
		 * 1) find the list of taxonomies associated with the current-post
		 * 2) extract the ids for each taxonomy
		 * 3) build tax_query array accordingly
		 *
		 */
		if ( null === $this->get_widget_settings( 'include' ) || null === $this->get_widget_settings( 'related_taxonomies' ) || ! $this->maybe_in_array( 'terms', $this->get_widget_settings( 'include' ) ) ) {
			return;
		}

		$taxonomies = $this->get_widget_settings( 'related_taxonomies' );
		$terms = [];
		if ( is_string( $taxonomies ) ) {
			$terms[ $taxonomies ] = wp_get_post_terms( $this->related_post_id, $taxonomies, [ 'fields' => 'tt_ids' ] );
		} else {
			foreach ( $taxonomies as $taxonomy ) {
				$terms[ $taxonomy ] = wp_get_post_terms( $this->related_post_id, $taxonomy, [ 'fields' => 'tt_ids' ] );
			}
		}

		$this->insert_tax_query( $terms, false );
	}

	protected function set_author_args() {
		if ( ! $this->maybe_in_array( 'authors', $this->get_widget_settings( 'include' ) ) ) {
			return;
		}

		$this->query_args['author__in'] = get_post_field( 'post_author', $this->related_post_id );
	}

	/**
	 * @param string $key
	 * @param mixed  $value
	 * @param string $control_name
	 */
	private function set_fallback_arg_by_settings( $key, $value, $control_name = '' ) {
		if ( empty( $this->fallback_args[ $key ] ) ) {
			$settings = $this->widget->get_settings();
			$this->fallback_args[ $key ] = ( '' === $control_name || empty( $settings[ $this->prefix . $control_name ] ) ) ? $value : $settings[ $this->prefix . $control_name ];
		}
	}

	/**
	 * @return string|array
	 */
	public function get_post_types() {
		$public_post_types = Utils::get_public_post_types();
		$active_post_type = get_post_type();

		return ! empty( $active_post_type ) ? $active_post_type : array_keys( $public_post_types );
	}

	protected function set_fallback_query_args() {
		$this->set_fallback_arg_by_settings( 'ignore_sticky_posts', true );
		$this->set_fallback_arg_by_settings( 'post_status', 'publish' );
		$this->set_fallback_arg_by_settings( 'post_type', $this->get_post_types() );

		if ( 'fallback_by_id' === $this->get_widget_settings( 'related_fallback' ) ) {
			$this->set_fallback_arg_by_settings( 'post__in', [ 0 ], 'fallback_ids' );
			$this->set_fallback_arg_by_settings( 'orderby', 'rand' );
		} else { //recent posts
			$this->set_fallback_arg_by_settings( 'orderby', 'date' );
			$this->set_fallback_arg_by_settings( 'order', 'DESC' );
		}
	}
}
