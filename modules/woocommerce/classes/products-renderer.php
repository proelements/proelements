<?php
namespace ElementorPro\Modules\Woocommerce\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Products_Renderer extends Base_Products_Renderer {

	private $settings = [];
	private $is_added_product_filter = false;

	const QUERY_CONTROL_NAME = 'query'; //Constraint: the class that uses the renderer, must use the same name
	const DEFAULT_COLUMNS_AND_ROWS = 4;
	private $settings_key_prefix;

	public function __construct( $settings = [], $type = 'products' ) {
		$this->settings_key_prefix = static::QUERY_CONTROL_NAME . '_';
		$this->settings = $settings;
		$this->type = $type;
		$this->attributes = $this->parse_attributes( [
			'columns' => $settings['columns'],
			'rows' => $settings['rows'],
			'paginate' => $settings['paginate'],
			'cache' => false,
		] );
		$this->query_args = $this->parse_query_args();
	}

	/**
	 * Override the original `get_query_results`
	 * with modifications that:
	 * 1. Remove `pre_get_posts` action if `is_added_product_filter`.
	 *
	 * @return bool|mixed|object
	 */

	protected function get_query_results() {
		$results = parent::get_query_results();
		// Start edit.
		if ( $this->is_added_product_filter ) {
			remove_action( 'pre_get_posts', [ wc()->query, 'product_query' ] );
		}
		// End edit.

		return $results;
	}

	public function parse_query_args() {
		$settings = &$this->settings;

		$query_args = [
			'post_type' => 'product',
			'post_status' => 'publish',
			'ignore_sticky_posts' => true,
			'no_found_rows' => false === wc_string_to_bool( $this->attributes['paginate'] ),
			'orderby' => $settings[ $this->settings_key_prefix . 'orderby' ],
			'order' => strtoupper( $settings[ $this->settings_key_prefix . 'order' ] ),
		];

		$query_args['meta_query'] = WC()->query->get_meta_query();
		$query_args['tax_query'] = [];

		if ( 'yes' === $settings['paginate'] && 'yes' === $settings['allow_order'] && ! is_front_page() ) {
			$ordering_args = WC()->query->get_catalog_ordering_args();
		} else {
			$ordering_args = WC()->query->get_catalog_ordering_args( $query_args['orderby'], $query_args['order'] );
		}

		$query_args['orderby'] = $ordering_args['orderby'];
		$query_args['order'] = $ordering_args['order'];
		if ( $ordering_args['meta_key'] ) {
			$query_args['meta_key'] = $ordering_args['meta_key'];
		}

		// fallback to the widget's default settings in case settings was left empty:
		$rows = ! empty( $settings['rows'] ) ? $settings['rows'] : self::DEFAULT_COLUMNS_AND_ROWS;
		$columns = ! empty( $settings['columns'] ) ? $settings['columns'] : self::DEFAULT_COLUMNS_AND_ROWS;
		$query_args['posts_per_page'] = intval( $columns * $rows );

		$this->set_visibility_query_args( $query_args );

		$this->set_featured_query_args( $query_args );

		$this->set_sale_products_query_args( $query_args );

		$this->set_single_product_query_args( $query_args );

		$this->set_ids_query_args( $query_args );

		// Set specific types query args.
		if ( method_exists( $this, "set_{$this->type}_query_args" ) ) {
			$this->{"set_{$this->type}_query_args"}( $query_args );
		}

		$this->set_terms_query_args( $query_args );

		$this->set_authors_query_args( $query_args );

		$this->set_exclude_query_args( $query_args );

		$this->set_pagination_args( $query_args );

		$query_args = apply_filters( 'woocommerce_shortcode_products_query', $query_args, $this->attributes, $this->type );

		// Always query only IDs.
		$query_args['fields'] = 'ids';

		return $query_args;
	}

	protected function set_ids_query_args( &$query_args ) {
		if ( 'by_id' !== $this->settings[ $this->settings_key_prefix . 'post_type' ] ) {
			return;
		}

		$this->set_by_id_query_args( $query_args );
	}

	protected function set_by_id_query_args( &$query_args ) {
		$post__in = $this->settings[ $this->settings_key_prefix . 'posts_ids' ];

		if ( empty( $post__in ) ) {
			return;
		}

		$this->set_post_in_query_args( $query_args, $post__in );
	}

	protected function set_post_in_query_args( &$query_args, $post__in ) {
		$query_args['post__in'] = isset( $query_args['post__in'] ) ? array_merge( $post__in, $query_args['post__in'] ) : $post__in;
		remove_action( 'pre_get_posts', [ wc()->query, 'product_query' ] );
	}

	private function set_terms_query_args( &$query_args ) {
		if ( ! $this->is_include_query_type( 'terms' ) ) {
			return;
		}

		$tax_query = [];

		if ( ! empty( $this->settings[ $this->settings_key_prefix . 'include_term_ids' ] ) ) {
			$terms = [];
			foreach ( $this->settings[ $this->settings_key_prefix . 'include_term_ids' ] as $id ) {
				$term_data = get_term_by( 'term_taxonomy_id', $id );
				$taxonomy = $term_data->taxonomy;
				$terms[ $taxonomy ][] = $id;
			}
			foreach ( $terms as $taxonomy => $ids ) {
				$query = [
					'taxonomy' => $taxonomy,
					'field' => 'term_taxonomy_id',
					'terms' => $ids,
				];

				$tax_query[] = $query;
			}
		}

		if ( ! empty( $tax_query ) ) {
			$query_args['tax_query'] = array_merge( $query_args['tax_query'], $tax_query );
		}
	}

	private function set_authors_query_args( &$query_args ) {
		if ( ! $this->is_include_query_type( 'authors' ) ) {
			return;
		}

		if ( ! empty( $this->settings[ $this->settings_key_prefix . 'include_authors' ] ) ) {
			$query_args['author__in'] = $this->settings[ $this->settings_key_prefix . 'include_authors' ];
		}
	}

	protected function set_featured_query_args( &$query_args ) {
		if ( 'featured' !== $this->settings[ $this->settings_key_prefix . 'post_type' ] ) {
			return;
		}

		$product_visibility_term_ids = wc_get_product_visibility_term_ids();

		$query_args['tax_query'][] = [
			'taxonomy' => 'product_visibility',
			'field' => 'term_taxonomy_id',
			'terms' => [ $product_visibility_term_ids['featured'] ],
		];
	}

	protected function set_sale_products_query_args( &$query_args ) {
		if ( 'sale' !== $this->settings[ $this->settings_key_prefix . 'post_type' ] ) {
			return;
		}

		parent::set_sale_products_query_args( $query_args );
	}

	protected function set_single_product_query_args( &$query_args ) {
		if ( ! in_array( $this->settings[ $this->settings_key_prefix . 'post_type' ], [ 'related_products', 'upsells', 'cross_sells' ], true ) ) {
			return;
		}

		global $product;

		$this->set_post_in_query_args( $query_args, [ 0 ] );

		switch ( $this->settings[ $this->settings_key_prefix . 'post_type' ] ) {
			case 'related_products':
				if ( ! $product ) {
					return;
				}

				$products = array_filter( array_map( 'wc_get_product', wc_get_related_products( $product->get_id(), $query_args['posts_per_page'], $product->get_upsell_ids() ) ), 'wc_products_array_filter_visible' );
				break;
			case 'upsells':
				if ( ! $product ) {
					return;
				}

				$products = array_filter( array_map( 'wc_get_product', $product->get_upsell_ids() ), 'wc_products_array_filter_visible' );
				break;
			case 'cross_sells':
				if ( is_checkout() ) {
					return;
				}

				$products = array_filter( array_map( 'wc_get_product', WC()->cart->get_cross_sells() ), 'wc_products_array_filter_visible' );
				break;
		}

		if ( empty( $products ) ) {
			return;
		}

		$post__in = array_map( function ( $product ) {
			return $product->get_id();
		}, $products );

		$this->set_post_in_query_args( $query_args, $post__in );
	}

	protected function set_exclude_query_args( &$query_args ) {
		if ( empty( $this->settings[ $this->settings_key_prefix . 'exclude' ] ) ) {
			return;
		}
		$post__not_in = [];
		if ( in_array( 'current_post', $this->settings[ $this->settings_key_prefix . 'exclude' ], true ) ) {
			if ( is_singular() ) {
				$post__not_in[] = get_queried_object_id();
			}
		}

		if ( in_array( 'manual_selection', $this->settings[ $this->settings_key_prefix . 'exclude' ] ) && ! empty( $this->settings[ $this->settings_key_prefix . 'exclude_ids' ] ) ) {
			$post__not_in = array_merge( $post__not_in, $this->settings[ $this->settings_key_prefix . 'exclude_ids' ] );
		}

		$query_args['post__not_in'] = empty( $query_args['post__not_in'] ) ? $post__not_in : array_merge( $query_args['post__not_in'], $post__not_in );

		/**
		 * WC populates `post__in` with the ids of the products that are on sale.
		 * Since WP_Query ignores `post__not_in` once `post__in` exists, the ids are filtered manually, using `array_diff`.
		 */
		if ( in_array( $this->settings[ $this->settings_key_prefix . 'post_type' ], [ 'sale', 'related_products', 'upsells', 'cross_sells' ] ) ) {
			$query_args['post__in'] = array_diff( $query_args['post__in'], $query_args['post__not_in'] );
		}

		if ( in_array( 'terms', $this->settings[ $this->settings_key_prefix . 'exclude' ] ) && ! empty( $this->settings[ $this->settings_key_prefix . 'exclude_term_ids' ] ) ) {
			$terms = [];
			foreach ( $this->settings[ $this->settings_key_prefix . 'exclude_term_ids' ] as $to_exclude ) {
				$term_data = get_term_by( 'term_taxonomy_id', $to_exclude );
				$terms[ $term_data->taxonomy ][] = $to_exclude;
			}
			$tax_query = [];
			foreach ( $terms as $taxonomy => $ids ) {
				$tax_query[] = [
					'taxonomy' => $taxonomy,
					'field' => 'term_id',
					'terms' => $ids,
					'operator' => 'NOT IN',
				];
			}
			if ( empty( $query_args['tax_query'] ) ) {
				$query_args['tax_query'] = $tax_query;
			} else {
				$query_args['tax_query']['relation'] = 'AND';
				$query_args['tax_query'][] = $tax_query;
			}
		}
	}

	protected function set_pagination_args( &$query_args ) {
		if ( 'yes' !== $this->settings['paginate'] ) {
			return;
		}

		$this->set_paged_args( $query_args );

		if ( 'yes' !== $this->settings['allow_order'] || is_front_page() ) {
			remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		}

		if ( 'yes' !== $this->settings['show_result_count'] ) {
			remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		}
	}

	protected function set_paged_args( &$query_args ) {
		$page = max( 1, get_query_var( 'paged' ), get_query_var( 'page' ) );
		$page = absint( empty( $_GET['product-page'] ) ? $page : $_GET['product-page'] );

		if ( 1 === $page ) {
			return;
		}

		$query_args['paged'] = $page;
	}

	private function is_include_query_type( $type ) {
		return (
			! in_array( $this->settings[ $this->settings_key_prefix . 'post_type' ], [ 'by_id', 'current_query' ] )
			&& ! empty( $this->settings[ $this->settings_key_prefix . 'include' ] )
			&& in_array( $type, $this->settings[ $this->settings_key_prefix . 'include' ], true )
		);
	}
}
