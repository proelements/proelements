<?php
namespace ElementorPro\Modules\Posts\Traits;

use ElementorPro\Modules\Posts\Widgets\Posts_Base;
use ElementorPro\Plugin;

trait Pagination_Trait {
	/**
	 * Checks a set of elements if there is a posts/archive widget that may be paginated to a specific page number.
	 *
	 * @param array $elements
	 * @param       $current_page
	 *
	 * @return bool
	 */
	public function is_valid_pagination( array $elements, $current_page ) {
		$is_valid = false;
		$posts_widgets = $this->get_widgets_that_support_pagination();

		Plugin::elementor()->db->iterate_data(
			$elements,
			$this->check_pagination_handler( $posts_widgets, $current_page, $is_valid )
		);

		return $is_valid;
	}

	/**
	 * Get all widgets that may add pagination.
	 *
	 * @return array
	 */
	public function get_widgets_that_support_pagination() {
		$widgets = Plugin::elementor()->widgets_manager->get_widget_types();

		$posts_widgets = [];

		foreach ( $widgets as $widget ) {
			if ( $widget instanceof Posts_Base ) {
				$posts_widgets[] = $widget->get_name();
			}
		}

		return $posts_widgets;
	}

	/**
	 * @return void
	 */
	public function check_pagination_handler( array $posts_widgets, $current_page, &$is_valid ) {
		return function ( $element ) use ( &$is_valid, $posts_widgets, $current_page ) {
			if ( ! $this->is_valid_post_widget( $element, $posts_widgets ) ) {
				return;
			}

			$is_valid = $this->should_allow_pagination( $element, $current_page );
		};
	}

	/**
	 * @return bool
	 */
	private function is_valid_post_widget( $element, $posts_widgets ) {
		return isset( $element['widgetType'] ) && in_array( $element['widgetType'], $posts_widgets, true );
	}

	/**
	 * @return bool
	 */
	private function widget_has_pagination( $element ) {
		return ! empty( $element['settings']['pagination_type'] );
	}

	/**
	 * @return bool
	 */
	private function should_allow_pagination( $element, $current_page ) {
		if ( ! $this->widget_has_pagination( $element ) ) {
			return false;
		}

		$using_ajax_pagination = in_array($element['settings']['pagination_type'], [
			Posts_Base::LOAD_MORE_ON_CLICK,
			Posts_Base::LOAD_MORE_INFINITE_SCROLL,
		], true);

		if ( empty( $element['settings']['pagination_page_limit'] ) || $using_ajax_pagination ) {
			return true;
		}

		return (int) $current_page <= (int) $element['settings']['pagination_page_limit'];
	}

	public function get_base_url() {
		if ( is_page() || is_single() ) {
			// Check if it's a normal page.
			return get_permalink();
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
