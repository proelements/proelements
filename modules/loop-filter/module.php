<?php
namespace ElementorPro\Modules\LoopFilter;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\LoopFilter\Data\Controller;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const EXPERIMENT_NAME = 'taxonomy-filter';

	/**
	 * @var array Array of widgets containing each widget's filters which are tied to the current session.
	 */
	private $filters = [];

	protected function get_widgets(): array {
		return [ 'Taxonomy_Filter' ];
	}

	public function get_name() {
		return 'loop-filter';
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( static::EXPERIMENT_NAME );
	}

	/**
	 * Add to the experiments
	 *
	 * @return array
	 */
	public static function get_experimental_data() {
		$experiment_data = [
			'name' => static::EXPERIMENT_NAME,
			'title' => esc_html__( 'Taxonomy Filter', 'elementor-pro' ),
			'description' => sprintf(
				esc_html__( 'Taxonomy Filter is a powerful tool that enables users to easily filter and sort their posts and product categories. %1$sLearn More%2$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-taxonomy-filter/" target="_blank">',
				'</a>'
			),
			'release_status' => Manager::RELEASE_STATUS_ALPHA,
			'default' => Manager::STATE_INACTIVE,
			'dependencies' => [
				'loop',
			],
		];

		return $experiment_data;
	}

	public function get_post_type_taxonomies( array $data ): array {
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

	public function filter_loop_query( $query_args, $widget ): array {
		$widget_id = $widget->get_id();

		if ( empty( $this->filters[ $widget_id ] ) ) {
			return $query_args;
		}

		/** @var array $filter_types An array containing all of a widget's different filters - e.g. taxonomy, price, rating... */
		$filter_types = $this->filters[ $widget_id ];

		// TODO: This part is non-generic and should be refactored to allow for multiple types of filters.
		$query_args['tax_query']['relation'] = 'AND';

		foreach ( $filter_types as $filters ) {
			// The $filters array contains all filters of a specific type. For example, for the taxonomy filter type,
			// it would contain all  taxonomies to be filtered - e.g. 'category', 'tag', 'product-cat', etc.
			foreach ( $filters as $filter_taxonomy => $filter ) {
				// Sanitize request data.
				$taxonomy = sanitize_key( $filter_taxonomy );
				$terms = array_filter( $filter, function ( $term ) {
					return preg_match( '/[^a-z0-9_\-]/', $term ) === 0;
				} );

				if ( empty( $terms ) ) {
					continue;
				}

				$query_args['tax_query'][] = [
					'taxonomy' => $taxonomy,
					'field' => 'slug',
					'terms' => $terms,
				];
			}
		}

		return $query_args;
	}

	public function add_localize_data( $config ) {
		$current_query_vars = $this->get_current_query_vars();

		$config['loopFilter'] = [
			'mainQueryPostType' => $current_query_vars['post_type'],
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

	private function parse_query_string( $param_key ): array {
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

		wp_parse_str( htmlspecialchars_decode( Utils::_unstable_get_super_global_value( $_SERVER, 'QUERY_STRING' ) ), $query_params );

		foreach ( $query_params as $param_key => $param_value ) {
			// TODO: This part is not generic - it only supports taxonomy filters. It should be refactored to allow for multiple types of filters.
			$parsed_query_string = $this->parse_query_string( $param_key );

			if ( empty( $parsed_query_string ) || empty( $parsed_query_string['taxonomy'] ) || empty( $parsed_query_string['widget_id'] ) ) {
				continue;
			}

			$terms = explode( ',', $param_value );

			if ( empty( $terms ) ) {
				continue;
			}

			$filter_data = [
				'taxonomy' => [
					$parsed_query_string['taxonomy'] => $terms,
				],
			];

			$this->register_widget_filter( $parsed_query_string['widget_id'], $filter_data );
		}
	}

	public function get_query_string_filters() {
		return $this->filters;
	}

	public function remove_rest_route_parameter( $link ) {
		$link = remove_query_arg( 'rest_route', $link );
		return $link;
	}

	public function __construct() {
		parent::__construct();

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$this->maybe_populate_filters_from_query_string();
		}

		// Register the controller.
		new Controller();

		add_filter( 'elementor/query/query_args', [ $this, 'filter_loop_query' ], 10, 2 );

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );

		add_filter( 'paginate_links', [ $this, 'remove_rest_route_parameter' ] );
	}
}
