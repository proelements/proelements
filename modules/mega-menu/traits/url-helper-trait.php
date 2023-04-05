<?php
namespace ElementorPro\Modules\MegaMenu\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Url_Helper_Trait {

	public function parse_url( $url ) {
		$link_array = wp_parse_url( $url );

		return [
			'host'  => ! empty( $link_array['host'] ) ? str_replace( 'www.', '', $link_array['host'] ) : '',
			'path'  => ! empty( $link_array['path'] ) ? trim( $link_array['path'], '/' ) : '',
			'query' => ! empty( $link_array['query'] ) ? $link_array['query'] : '',
		];
	}

	public function get_permalink_for_current_page() {
		if ( ! is_front_page() && is_home() ) {
			return get_post_type_archive_link( 'post' );
		} elseif ( is_front_page() && is_home() ) {
			return home_url();
		} elseif ( is_year() ) {
			return get_year_link( get_query_var( 'year' ) );
		} elseif ( is_month() ) {
			return get_month_link( get_query_var( 'year' ), get_query_var( 'monthnum' ) );
		} elseif ( is_day() ) {
			return get_day_link( get_query_var( 'year' ), get_query_var( 'monthnum' ), get_query_var( 'day' ) );
		} elseif ( is_category() || is_tag() || is_tax() ) {
			$queried_object = get_queried_object();
			return get_term_link( $queried_object->term_id, $queried_object->taxonomy );
		} elseif ( is_author() ) {
			return get_author_posts_url( get_the_author_meta( 'ID' ) );
		} elseif ( is_search() ) {
			return get_search_link();
		} elseif ( is_archive() ) {
			return get_post_type_archive_link( get_post_type() );
		}

		return ! ( empty( get_the_permalink() ) ) ? get_the_permalink() : '';
	}
}
