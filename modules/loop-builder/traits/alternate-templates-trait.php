<?php
namespace ElementorPro\Modules\LoopBuilder\Traits;

use ElementorPro\Plugin;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;

trait Alternate_Templates_Trait {

	private $current_post_index = 0;
	private $alternate_templates = [];
	private $rendered_alternate_templates = [];
	private $has_alternate_templates = false;
	private $has_static_alternate_templates = false;
	private $query_contains_static_alternate_templates = false;
	private $static_alternate_template_query_data = [];

	/**
	 * Query Posts For Alternate Templates
	 *
	 * Construct `static_alternate_template_query_data` and modify the widget query if the user has
	 * added any valid 'static' alternate templates. If we do need to display any static templates - based on the existing
	 * query - we do a new custom query that uses the `static_alternate_template_query_data['page_settings']` to
	 * handle pagination by specifying an `offset` in the query, and we increase the resulting `$query->found_posts`
	 * and `$query->max_num_pages` so the pagination, and any standard WP Query elements, display as expected.
	 *
	 * @return false|\WP_Query
	 */
	public function query_posts_for_alternate_templates() {
		// If there are no static alternate templates, no need to modify the query.
		if ( ! $this->has_static_alternate_templates() ) {
			return false;
		}

		$widget = $this->parent;

		/** @var QueryControlModule $elementor_query */
		$elementor_query = QueryControlModule::instance();

		/**
		 * Construct the `static_alternate_template_query_data` used for the new query and when rendering each post.
		 */
		$query = $elementor_query->get_query( $widget, $widget->get_query_name(), [
			'posts_per_page' => 1,
			'paged' => 1,
		] );
		$this->init_static_alternate_template_query_data( $query->found_posts );

		if ( ! $this->query_contains_static_alternate_templates() ) {
			return false;
		}

		$adjusted_found_posts = $this->get_static_alternate_template_adjusted_found_posts();
		$adjusted_max_num_pages = $this->get_static_alternate_template_adjusted_max_num_pages();

		/**
		 * New query using `offset` in place of `paged`.
		 */
		$query = $elementor_query->get_query( $widget, $widget->get_query_name(), [
			'posts_per_page' => $widget->get_posts_per_page_value(),
			'offset' => $this->get_static_alternate_template_query_offset(),
		] );

		/**
		 * Increase size of the query using the adjusted values calculated after
		 * constructing `static_alternate_template_query_data`.
		 */
		$query->found_posts = $adjusted_found_posts;
		$query->max_num_pages = $adjusted_max_num_pages;

		return $query;
	}

	/**
	 * Init Alternate Templates Settings
	 *
	 * Improve performance by storing the `alternate_templates` repeater settings, so we don't use
	 * `get_settings_for_display()` each time we check if a post should use an alternate template.
	 *
	 * At the same time we store `$has_alternate_templates` and `$has_static_alternate_templates` used by their
	 * accompanying helper functions, for efficiency, and so we don't need to loop through the `alternate_templates`
	 * each time we check.
	 *
	 * We also re-arrange the `alternate_templates` array for two reasons:
	 * (1) The last template added by the user should take preference, so we reverse the array so that when we loop
	 * through the repeater settings array to check if a post should use an alternate template, we find the last
	 * added template first.
	 * (2) 'Static' alternate templates should take preference over 'non-static' templates, so we group all static
	 * templates before first, so when we loop through the array to check if a post should use an alternate template
	 * we find the 'static' template first.
	 *
	 * @return void
	 */
	private function init_alternate_template_settings(): void {
		$settings = $this->parent->get_settings_for_display();

		if ( empty( $settings['alternate_templates'] ) || empty( $settings['template_id'] ) ) {
			return;
		}

		// Note that the user has added alternate templates.
		$this->has_alternate_templates = true;

		// Store the alternate templates.
		$alternate_templates = $settings['alternate_templates'];

		// Reverse the alternate template settings so the last template added by the user takes preference over
		// the previous templates.
		$alternate_templates = array_reverse( $alternate_templates );

		// Rearrange the alternate template settings to group all static templates before the standard templates.
		$static_alternate_templates = [];
		$standard_alternate_templates = [];
		foreach ( $alternate_templates as $alternate_template ) {
			// Skip the alternate template from any calculations until a repeat template number is specified.
			if ( empty( $alternate_template['repeat_template'] ) ) {
				continue;
			}

			if ( $this->is_alternate_template_static_position( $alternate_template ) ) {
				$static_alternate_templates[ $alternate_template['_id'] ] = $alternate_template;

				// Note that the user has added 'static' alternate templates.
				$this->has_static_alternate_templates = true;
			} else {
				$standard_alternate_templates[ $alternate_template['_id'] ] = $alternate_template;
			}
		}

		$this->alternate_templates = $static_alternate_templates + $standard_alternate_templates;
	}

	private function alternate_template_before_skin_render(): void {
		// Init Alternate Template Settings should occur as early in the load order as possible as it's responsible
		// for setting flags used in helper functions, that can be called quite early in the widget
		// e.g. `has_alternate_templates()` & `has_static_alternate_templates()`.
		$this->init_alternate_template_settings();

		if ( ! $this->has_alternate_templates() ) {
			return;
		}

		$this->maybe_add_alternate_template_wrapper_classes();
	}

	private function alternate_template_after_skin_render(): void {
		if ( ! $this->has_alternate_templates() ) {
			return;
		}

		$this->reset_alternate_template_data();
		$this->maybe_remove_alternate_template_wrapper_classes();
	}

	/**
	 * @return void
	 */
	private function reset_alternate_template_data() {
		// Reset all the Alternate Template data at the end of the widget so that it does not affect any widgets
		// below the current widget.
		$this->current_post_index = 0;
		$this->alternate_templates = [];
		$this->rendered_alternate_templates = [];
		$this->has_alternate_templates = false;
		$this->has_static_alternate_templates = false;
		$this->query_contains_static_alternate_templates = false;
		$this->static_alternate_template_query_data = [];
	}

	/**
	 * @return void
	 */
	private function maybe_add_alternate_template_wrapper_classes(): void {
		add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_wrapper_classes' ] );

		if ( Plugin::elementor()->editor->is_edit_mode() ) {
			add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_editor_wrapper_classes' ] );
		}
	}

	/**
	 * @return void
	 */
	private function maybe_remove_alternate_template_wrapper_classes(): void {
		remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_wrapper_classes' ] );

		if ( Plugin::elementor()->editor->is_edit_mode() ) {
			remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_editor_wrapper_classes' ] );
		}
	}

	/**
	 * @param $attributes
	 * @return array
	 */
	public function add_alternate_template_wrapper_classes( $attributes ): array {
		$template = $this->get_template_data_for_current_post();

		if ( $this->is_alternate_template( $template ) ) {
			$attributes['class'] .= ' elementor-repeater-item-' . $template['_id'];
		}

		return $attributes;
	}

	/**
	 * @param $attributes
	 * @return array
	 */
	public function add_alternate_template_editor_wrapper_classes( $attributes ): array {
		$template = $this->get_template_data_for_current_post();

		if ( $this->is_alternate_template( $template ) && $this->is_alternate_template_first_occurrence( $template ) ) {
			$attributes['class'] .= ' e-loop-alternate-template';
		}

		return $attributes;
	}

	/**
	 * @return void
	 */
	private function render_post_if_widget_has_alternate_templates(): void {
		// If any static templates are rendered they will result in this function being called recursively, so we need
		// to make sure we don't render more posts than the user has chosen in their `posts_per_page` widget control.
		if ( $this->current_post_index >= $this->parent->get_posts_per_page_value() ) {
			return;
		}

		$template = $this->get_template_data_for_current_post();
		$this->render_post_content( $template['template_id'] );
		$this->store_rendered_alternate_templates( $template['template_id'] );
		$this->current_post_index++;

		// If the current post has a 'static' alternate template the above will render an extra empty post in the loop.
		// We need to render this post again (with incremented `current_post_index`) so it is not skipped as a result
		// of a static template.
		if ( $this->is_alternate_template_static_position( $template ) ) {
			$this->render_post_if_widget_has_alternate_templates();
		}
	}

	/**
	 * @param $template_id
	 * @return void
	 */
	private function store_rendered_alternate_templates( $template_id ): void {
		if ( ! in_array( $template_id, $this->rendered_alternate_templates, true ) ) {
			$this->rendered_alternate_templates[] = $template_id;
		}
	}

	/**
	 * Has Alternate Templates
	 *
	 * Has the user added any alternate templates to the widget.
	 *
	 * Improve performance by storing `has_alternate_templates` once when the widget is rendered
	 * to avoid using `get_settings_for_display()` each time.
	 *
	 * @return bool
	 */
	private function has_alternate_templates(): bool {
		return $this->has_alternate_templates;
	}

	/**
	 * Has Static Alternate Templates
	 *
	 * Has the user added any 'static' alternate templates to the widget.
	 *
	 * Improve performance by storing `has_static_alternate_templates` once when the widget is rendered
	 * to avoid iterating through the repeater settings each time.
	 *
	 * @return bool
	 */
	private function has_static_alternate_templates(): bool {
		return $this->has_static_alternate_templates;
	}

	/**
	 * Query Contains Static Alternate Templates
	 *
	 * After constructing the `init_static_alternate_template_query_data` array, we want to make sure - based on
	 * the alternate templates settings - that we definitely have valid 'static' alternate templates to display.
	 *
	 * This flag is used to avoid modifying the query or re-rendering posts if we don't have to.
	 *
	 * @return bool
	 */
	private function query_contains_static_alternate_templates(): bool {
		return $this->query_contains_static_alternate_templates;
	}

	/**
	 * Init Static Alternate Template Query Data
	 *
	 * Construct `static_alternate_template_query_data` if the user has added any valid 'static' alternate templates.
	 * Used to modify the widget query and when rendering a post.
	 *
	 * @param $query
	 * @return void
	 */
	private function init_static_alternate_template_query_data( $required_posts_count ): void {
		$this->static_alternate_template_query_data = [
			'templates' => [],
			'page_settings' => [],
		];

		$posts_per_page = $this->parent->get_posts_per_page_value();
		$static_alternate_template_count = 0;

		for ( $current_index = 0; $current_index < $required_posts_count; $current_index++ ) {
			$template = $this->get_template_data_by_index( $current_index );
			$this->set_static_alternate_template_query_data_item( $template, $current_index, $static_alternate_template_count, $posts_per_page );

			if ( 'yes' === $template['static_position'] ) {
				$static_alternate_template_count++;
				$required_posts_count++;
			}
		}

		// Note if any valid 'static' alternate templates need to be displayed, after the above calculations.
		$this->query_contains_static_alternate_templates = 0 < $static_alternate_template_count;
	}

	/**
	 * Set Static Alternate Template Query Data Item
	 *
	 * Store which template to use when each post is rendered.
	 *
	 * `init_static_alternate_template_query_data()` stores each template's data in the
	 * `static_alternate_template_query_data['templates']` and, at the same time, stores
	 * `static_alternate_template_query_data['page_settings']` used to adjust the query.
	 *
	 * @param $template
	 * @param $current_post_index
	 * @param $static_alternate_template_count
	 * @param $posts_per_page
	 * @return void
	 */
	private function set_static_alternate_template_query_data_item( $template, $current_post_index, $static_alternate_template_count, $posts_per_page ): void {
		// Store template - used when we render the post.
		$this->static_alternate_template_query_data['templates'][ $current_post_index ] = $template;

		// Store `page_settings`.
		// `query_offset` is used when we query posts and `start_index` when we render posts.
		$current_page = ceil( $current_post_index / $posts_per_page ) + 1;
		$this->static_alternate_template_query_data['page_settings'][ $current_page ] = [
			'query_offset' => $current_post_index - $static_alternate_template_count,
			'start_index' => $current_post_index,
		];
	}

	/**
	 * Get Static Alternate Template Current Page Settings
	 *
	 * Used to modify the widget query and when rendering a post.
	 *
	 * @return array|bool
	 */
	private function get_static_alternate_template_current_page_settings() {
		$current_page = $this->parent->get_current_page();
		if ( empty( $this->static_alternate_template_query_data['page_settings'][ $current_page ] ) ) {
			return false;
		}
		return $this->static_alternate_template_query_data['page_settings'][ $current_page ];
	}

	/**
	 * Get Static Alternate Template Query Offset
	 *
	 * Used to modify the widget query.
	 *
	 * @return array|bool
	 */
	private function get_static_alternate_template_query_offset() {
		$current_page_settings = $this->get_static_alternate_template_current_page_settings();
		if ( ! $current_page_settings ) {
			return false;
		}
		return $current_page_settings['query_offset'];
	}

	/**
	 * Get Static Alternate Template Start Index
	 *
	 * Used when calling `render_post_if_widget_has_alternate_templates()`.
	 *
	 * @return array|bool
	 */
	private function get_static_alternate_template_start_index() {
		$current_page_settings = $this->get_static_alternate_template_current_page_settings();
		if ( ! $current_page_settings ) {
			return false;
		}
		return $current_page_settings['start_index'];
	}

	/**
	 * Get Static Alternate Template Adjusted Found Posts
	 *
	 * Used to modify the widget query.
	 *
	 * @return int
	 */
	private function get_static_alternate_template_adjusted_found_posts(): int {
		if ( empty( $this->static_alternate_template_query_data['templates'] ) ) {
			return 0;
		}
		return count( $this->static_alternate_template_query_data['templates'] );
	}

	/**
	 * Get Static Alternate Template Adjusted Max Num Pages
	 *
	 * Used to modify the widget query.
	 *
	 * @return float
	 */
	private function get_static_alternate_template_adjusted_max_num_pages(): float {
		return ceil( $this->get_static_alternate_template_adjusted_found_posts() / $this->parent->get_posts_per_page_value() );
	}

	/**
	 * Get Data For Static Alternate Template
	 *
	 * Used when rendering the current post.
	 *
	 * @param $index
	 * @return array
	 */
	private function get_data_for_static_alternate_template( $index ): array {
		if ( ! empty( $this->static_alternate_template_query_data['templates'][ $index ] ) ) {
			return $this->static_alternate_template_query_data['templates'][ $index ];
		}
		return $this->get_default_template();
	}

	/**
	 * @return array
	 */
	private function get_template_data_for_current_post() {
		$current_post_index = $this->get_current_post_index();

		if ( $this->query_contains_static_alternate_templates() ) {
			return $this->get_data_for_static_alternate_template( $current_post_index );
		}

		return $this->get_template_data_by_index( $current_post_index );
	}

	/**
	 * @return int
	 */
	private function get_current_post_index() {
		if ( $this->query_contains_static_alternate_templates() ) {
			return $this->get_static_alternate_template_start_index() + $this->current_post_index;
		}

		return $this->parent->get_query()->current_post;
	}

	/**
	 * @param $index
	 * @return array
	 */
	private function get_template_data_by_index( $index ): array {
		if ( ! $this->has_alternate_templates() ) {
			return $this->get_default_template();
		}

		foreach ( $this->alternate_templates as $alternate_template ) {
			$found_alternate_template = $this->is_alternate_template_show_once( $alternate_template ) ?
				$this->should_show_alternate_template_once( $alternate_template, $index ) :
				$this->should_show_repeating_alternate_template( $alternate_template, $index );

			if ( $found_alternate_template ) {
				return [
					'template_id' => $alternate_template['template_id'],
					'alternate_template' => 'yes',
					'static_position' => $alternate_template['static_position'] ? 'yes' : 'no',
					'_id' => $alternate_template['_id'],
				];
			}
		}

		return $this->get_default_template();
	}

	/**
	 * @return array
	 */
	private function get_default_template(): array {
		return [
			'template_id' => $this->parent->get_settings_for_display( 'template_id' ),
			'alternate_template' => 'no',
			'static_position' => 'no',
			'_id' => '-',
		];
	}

	/**
	 * @param $alternate_template
	 * @return bool
	 */
	private function is_alternate_template( $alternate_template ): bool {
		return isset( $alternate_template['alternate_template'] ) && 'yes' === $alternate_template['alternate_template'];
	}

	/**
	 * @param $alternate_template
	 * @return bool
	 */
	private function is_alternate_template_static_position( $alternate_template ): bool {
		return isset( $alternate_template['static_position'] ) && 'yes' === $alternate_template['static_position'];
	}

	/**
	 * @param $alternate_template
	 * @return bool
	 */
	private function is_alternate_template_show_once( $alternate_template ): bool {
		return isset( $alternate_template['show_once'] ) && 'yes' === $alternate_template['show_once'];
	}

	/**
	 * @param $number_to_check
	 * @param $multiple_to_check
	 * @return bool
	 */
	private function is_repeating_alternate_template_multiple_of( $number_to_check, $multiple_to_check ): bool {
		return 0 === $multiple_to_check % $number_to_check;
	}

	/**
	 * @param $template
	 * @return bool
	 */
	private function is_alternate_template_first_occurrence( $template ): bool {
		return ! in_array( $template['template_id'], $this->rendered_alternate_templates, true );
	}

	/**
	 * @param $alternate_template
	 * @param $current_item_index
	 * @return bool
	 */
	private function should_show_alternate_template_once( $alternate_template, $current_item_index ): bool {
		return $alternate_template['repeat_template'] === $current_item_index + 1;
	}

	/**
	 * @param $alternate_template
	 * @param $current_item_index
	 * @return bool
	 */
	private function should_show_repeating_alternate_template( $alternate_template, $current_item_index ): bool {
		return $this->is_repeating_alternate_template_multiple_of( $alternate_template['repeat_template'], $current_item_index + 1 );
	}
}
