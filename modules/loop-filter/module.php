<?php
namespace ElementorPro\Modules\LoopFilter;

use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\LoopFilter\Query\Taxonomy_Query_Builder;
use ElementorPro\Modules\LoopFilter\Query\Data\Query_Constants;
use ElementorPro\Modules\LoopFilter\Data\Controller;
use ElementorPro\Modules\LoopFilter\Traits\Hierarchical_Taxonomy_Trait;
use WP_Term;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	use Hierarchical_Taxonomy_Trait;

	private $operator;
	private $taxonomy;
	private $query;

	/**
	 * @var array Array of widgets containing each widget's filters which are tied to the current session.
	 */
	private $filters = [];

	protected function get_widgets() {
		return [ 'Taxonomy_Filter' ];
	}

	public function get_name() {
		return 'loop-filter';
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/loop-filter/assets/scss/frontend.scss`
	 * to `/assets/css/widget-loop-filter.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-loop-filter',
			$this->get_css_assets_url( 'widget-loop-filter', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}

	public function get_post_type_taxonomies( $data ) {
		if ( ! current_user_can( 'edit_posts' ) || empty( $data['post_type'] ) ) {
			return [];
		}

		$post_type_taxonomies = get_object_taxonomies( $data['post_type'], 'objects' );

		$control_options = [];

		foreach ( $post_type_taxonomies as $taxonomy ) {
			$control_options[ $taxonomy->name ] = $taxonomy->label;
		}

		return $control_options;
	}

	public function register_widget_filter( $widget_id, $filter_data ) {
		if ( empty( $this->filters[ $widget_id ] ) ) {
			$this->filters[ $widget_id ] = $filter_data;
			return;
		}

		foreach ( $filter_data as $filter_type => $filter ) {
			if ( empty( $this->filters[ $widget_id ][ $filter_type ] ) ) {
				$this->filters[ $widget_id ][ $filter_type ] = $filter;
				continue;
			}

			$this->filters[ $widget_id ][ $filter_type ] = array_merge( $this->filters[ $widget_id ][ $filter_type ], $filter );
		}
	}

	public function filter_loop_query( $query_args, $widget ) {
		$widget_id = $widget->get_id();

		if ( empty( $this->filters[ $widget_id ] ) ) {
			return $query_args;
		}

		/** @var array $filter_types An array containing all of a widget's different filters - e.g. taxonomy, price, rating... */
		$filter_types = $this->filters[ $widget_id ];

		// TODO: This part is non-generic and should be refactored to allow for multiple types of filters.
		$query_args['tax_query']['relation'] = $this->query['AND']['relation'];

		foreach ( $filter_types as $filters ) {
			// The $filters array contains all filters of a specific type. For example, for the taxonomy filter type,
			// it would contain all taxonomies to be filtered - e.g. 'category', 'tag', 'product-cat', etc.
			$tax_query = [];

			foreach ( $filters as $filter_taxonomy => $filter ) {
				if ( 'logicalJoin' === $filter_taxonomy ) {
					continue;
				}

				if ( $this->is_filter_empty( $filter ) ) {
					continue;
				}

				// Sanitize request data.
				$taxonomy = sanitize_key( $filter_taxonomy );
				( new Taxonomy_Query_Builder() )->get_merged_queries( $tax_query, $taxonomy, $filter );
			}
		}

		$query_args['tax_query'] = array_merge( $query_args['tax_query'], $tax_query ?? [] );

		return $query_args;
	}

	/**
	 * @description Check if the filter is empty.
	 * Taxonomy Filter URL parameter is empty but not removed i.e. `&e-filter-389c132-product_cat=`.
	 * This edge case happens if a user clears terms and not the Taxonomy filter parameter
	 * @param $filter
	 * @return bool
	 */
	public function is_filter_empty( $filter ) {
		if ( '' === $filter['terms'][0] ) {
			return true;
		}
		return false;
	}

	public function add_localize_data( $config ) {
		$current_query_vars = $this->get_current_query_vars();

		$config['loopFilter'] = [
			'mainQueryPostType' => $current_query_vars['post_type'] ?? 'post',
			'nonce' => wp_create_nonce( 'wp_rest' ),
		];

		return $config;
	}

	private function get_current_query_vars() {
		$current_query_vars = $GLOBALS['wp_query']->query_vars;

		/**
		 * Current query variables.
		 *
		 * Filters the query variables for the current query. This hook allows
		 * developers to alter those variables.
		 *
		 * @param array $current_query_vars Current query variables.
		 */
		return apply_filters( 'elementor/query/get_query_args/current_query', $current_query_vars );
	}

	private function parse_query_string( $param_key ) {
		// Check if the query param is a filter. match a regex for `e-filter-14f9e1d-post_tag` where `14f9e1d` is the widget ID and must be 7 characters long and have only letters and numbers, then followed by a string that can only have letters, numbers, dashes and underscores.
		if ( ! preg_match( '/^e-filter-[a-z0-9]{7}-[a-z0-9_\-]+$/', $param_key ) ) {
			return [];
		}

		// Remove the 'filter_' prefix from the query param
		$filter = str_replace( 'e-filter-', '', $param_key );

		// Split the filter into an array of widget ID and filter type
		$filter = explode( '-', $filter );

		if ( count( $filter ) !== 2 ) {
			return [];
		}

		// Get the widget ID
		$widget_id = $filter[0];

		// Get the taxonomy
		$taxonomy = $filter[1];

		return [
			'taxonomy' => $taxonomy,
			'widget_id' => $widget_id,
		];
	}

	private function maybe_populate_filters_from_query_string() {
		if ( ! isset( $_SERVER['QUERY_STRING'] ) ) {
			return;
		}

		$query_params = [];
		wp_parse_str( htmlspecialchars_decode( Utils::_unstable_get_super_global_value( $_SERVER, 'QUERY_STRING' ) ), $query_params );

		foreach ( $query_params as $param_key => $param_value ) {
			// TODO: This part is not generic - it only supports taxonomy filters. It should be refactored to allow for multiple types of filters.
			$parsed_query_string = $this->parse_query_string( $param_key );

			if ( empty( $parsed_query_string ) || empty( $parsed_query_string['taxonomy'] ) || empty( $parsed_query_string['widget_id'] ) ) {
				continue;
			}

			$terms = $this->get_terms_array_from_params( $param_value );
			$logical_join = $this->get_logical_join_from_params( $param_value );

			if ( empty( $terms ) ) {
				continue;
			}

			$filter_data = [
				'taxonomy' => [
					$parsed_query_string['taxonomy'] => [
						'terms' => $terms,
						'logicalJoin' => $logical_join,
					],
				],
			];

			$this->register_widget_filter( $parsed_query_string['widget_id'], $filter_data );
		}
	}

	private function get_seperator_from_params( $param_value ) {
		$separator = $this->query['AND']['separator']['from-browser']; // The web browser automatically replaces the plus sign with a space character before sending the data to the server.

		if ( strstr( $param_value, $this->query['OR']['separator']['from-browser'] ) ) {
			$separator = $this->query['OR']['separator']['from-browser'];
			$this->operator = $this->query['OR']['operator'];
		}
		return $separator;
	}

	private function get_terms_array_from_params( $param_value ) {
		$separator = $this->get_seperator_from_params( $param_value );
		return explode( $separator, $param_value );
	}

	private function get_logical_join_from_params( $param_value ) {
		$separator = $this->get_seperator_from_params( $param_value );

		foreach ( $this->query as $index => $data ) {
			if ( $data['separator']['decoded'] === $separator ) {
				return $index; // Return the index when the decoded separator is found
			}
		}

		return 'AND'; // Default logical join
	}

	/**
	 * @return array
	 */
	public function get_query_string_filters() {
		return $this->filters;
	}

	public function remove_rest_route_parameter( $link ) {
		return remove_query_arg( 'rest_route', $link );
	}

	/**
	 * @return boolean
	 */
	public function is_term_not_selected_for_inclusion( $loop_widget_settings, $term, $skin ) {
		if ( ! $this->is_loop_grid_include_exclude_tax_belong_to_filter_tax( $loop_widget_settings, $term, $skin ) ) {
			return false;
		}

		return ! empty( $loop_widget_settings[ $skin . '_query_include' ] ) &&
			in_array( 'terms', $loop_widget_settings[ $skin . '_query_include' ] ) &&
			isset( $loop_widget_settings[ $skin . '_query_include_term_ids' ] ) &&
			! in_array( $term->term_id, $loop_widget_settings[ $skin . '_query_include_term_ids' ] );
	}

	public function is_loop_grid_include_exclude_tax_belong_to_filter_tax( array $loop_widget_settings, WP_Term $term, string $skin ) : bool {
		$include_exclude_term_ids = array_merge(
			$loop_widget_settings[ $skin . '_query_include_term_ids' ] ?? [],
			$loop_widget_settings[ $skin . '_query_exclude_term_ids' ] ?? []
		);

		foreach ( $include_exclude_term_ids as $term_id ) {
			$term_to_include_exclude = get_term_by( 'term_taxonomy_id', $term_id );

			if ( $term_to_include_exclude && $term_to_include_exclude->taxonomy === $term->taxonomy ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * @return boolean
	 */
	public function is_term_selected_for_exclusion( $loop_widget_settings, $term, $skin ) {
		return ! empty( $loop_widget_settings[ $skin . '_query_exclude' ] ) &&
			in_array( 'terms', $loop_widget_settings[ $skin . '_query_exclude' ] ) &&
			isset( $loop_widget_settings[ $skin . '_query_exclude_term_ids' ] ) &&
			in_array( $term->term_id, $loop_widget_settings[ $skin . '_query_exclude_term_ids' ] );
	}

	/**
	 * @return boolean
	 */
	public function should_exclude_term_by_manual_selection( $loop_widget_settings, $term, $user_selected_taxonomy, $skin ) {
		if ( ! $this->loop_widget_has_manual_selection( $loop_widget_settings, $skin ) ) {
			return false;
		}

		$terms_to_exclude_by_manual_selection = $this->get_terms_to_exclude_by_manual_selection( $loop_widget_settings[ $skin . '_query_exclude_ids' ] ?? [], $user_selected_taxonomy );

		if ( in_array( $term->term_id, $terms_to_exclude_by_manual_selection ) ) {
			return true;
		}

		return false;
	}

	/**
	 * @return boolean
	 */
	private function loop_widget_has_manual_selection( $loop_widget_settings, $skin ) {
		return ! empty( $loop_widget_settings[ $skin . '_query_exclude' ] ) &&
			in_array( 'manual_selection', $loop_widget_settings[ $skin . '_query_exclude' ] ) &&
			! empty( $loop_widget_settings[ $skin . '_query_exclude_ids' ] );
	}

	/**
	 * @return array
	 */
	private function get_terms_to_exclude_by_manual_selection( $selected_posts, $user_selected_taxonomy ) {
		$terms_to_exclude = [];
		$term_exclude_counts = [];
		$term_actual_counts = [];

		foreach ( $selected_posts as $post_id ) {
			$this->calculate_post_terms_counts( $post_id, $user_selected_taxonomy, $term_exclude_counts, $term_actual_counts );
		}

		foreach ( $term_exclude_counts as $term_id => $selected_count ) {
			$this->maybe_add_term_to_exclusion( $term_id, $selected_count, $term_actual_counts, $terms_to_exclude );
		}

		return $terms_to_exclude;
	}

	/**
	 * @return void
	 */
	private function calculate_post_terms_counts( $post_id, $user_selected_taxonomy, &$term_exclude_counts, &$term_actual_counts ) {
		$post_terms = wp_get_post_terms( $post_id, $user_selected_taxonomy );

		foreach ( $post_terms as $term ) {
			$this->calculate_term_counts( $term, $term_exclude_counts, $term_actual_counts );
		}
	}

	/**
	 * @return void
	 */
	private function calculate_term_counts( $term, &$term_exclude_counts, &$term_actual_counts ) {
		if ( empty( $term_exclude_counts[ $term->term_id ] ) ) {
			$term_exclude_counts[ $term->term_id ] = 0;
		}

		$term_exclude_counts[ $term->term_id ] = (int) $term_exclude_counts[ $term->term_id ] + 1;
		$term_actual_counts[ $term->term_id ] = (int) $term->count;
	}

	/**
	 * @return void
	 */
	private function maybe_add_term_to_exclusion( $term_id, $selected_count, $term_actual_counts, &$terms_to_exclude ) {
		$user_selected_all_the_posts_for_this_term = $selected_count >= $term_actual_counts[ $term_id ];

		if ( $user_selected_all_the_posts_for_this_term ) {
			$terms_to_exclude[] = $term_id;
		}
	}

	public function __construct() {
		parent::__construct();

		$this->query = Query_Constants::DATA;

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$this->maybe_populate_filters_from_query_string();
		}

		// Register the controller.
		new Controller();

		add_filter( 'elementor/query/query_args', [ $this, 'filter_loop_query' ], 10, 2 );

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );

		add_filter( 'paginate_links', [ $this, 'remove_rest_route_parameter' ] );

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
	}
}
