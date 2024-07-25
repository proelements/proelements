<?php
namespace ElementorPro\Modules\LoopBuilder\Skins;

use ElementorPro\Modules\DynamicTags\Tags\Base\Tag_Trait;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Modules\LoopBuilder\Module;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;
use ElementorPro\Modules\LoopBuilder\Widgets\Base as Loop_Widget_Base;
use ElementorPro\Modules\LoopFilter\Traits\Taxonomy_Filter_Trait;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Taxonomy;
use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Css_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Skin_Loop_Taxonomy_Base extends Skin_Loop_Base {

	use Taxonomy_Filter_Trait;
	use Tag_Trait;
	use Loop_Css_Trait;

	protected $provider;

	protected function init_parent( $widget ) {
		$this->parent = $widget;
	}

	protected function init_provider() {
		$this->provider = new Taxonomy_Loop_Provider( $this->get_id(), $this->get_default_source_option() );
	}

	public function render() {
		$template_id = $this->parent->get_settings_for_display( 'template_id' );
		$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();
		$current_document = Plugin::elementor()->documents->get_current();

		if ( $template_id ) {
			$this->prepare_template_loop( $this->get_terms(), $template_id );
		} elseif ( $is_edit_mode ) {
			$this->render_empty_view();
		}

		if ( $current_document ) {
			Plugin::elementor()->documents->switch_to_document( $current_document );
		}
	}

	protected function prepare_template_loop( $terms, $template_id ) {
		global $wp_query;
		$wp_query->is_loop_taxonomy = ! empty( $terms );

		$this->render_before_loop( $template_id );
		$this->render_loop_content( $terms, $template_id );
		$this->render_loop_end();

		$wp_query->is_loop_taxonomy = false;
	}

	protected function render_before_loop( $template_id ) {
		$widget = $this->parent;

		$this->enqueue_loop_document_css_meta( $template_id );
		$this->maybe_add_load_more_wrapper_class();
		$widget->before_skin_render();
		$this->render_loop_header();
	}

	protected function render_loop_content( $terms, $template_id ) {
		global $wp_query;

		foreach ( $terms as $term ) {
			$wp_query->loop_term = $term;
			$this->render_post();
			$wp_query->loop_term = null;
		}
	}

	/**
	 * Render Post
	 *
	 * Uses the chosen custom template to render Loop posts.
	 *
	 * @since 3.8.0
	 */
	protected function render_post() {
		$template_id = $this->parent->get_settings_for_display( 'template_id' );

		/** @var LoopDocument $document */
		$document = Plugin::elementor()->documents->get( $template_id );

		if ( ! $document ) {
			return;
		}

		$this->print_dynamic_css( $this->get_data_id_from_taxonomy_loop_query(), $template_id );
		$document->print_content();
	}

	protected function render_loop_end() {
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;

		$this->render_loop_footer();
		$widget->after_skin_render();
	}

	/**
	 * Register Query Controls
	 *
	 * Registers the controls for the query used by the Loop.
	 *
	 * @since 3.8.0
	 */
	public function register_query_controls( Loop_Widget_Base $widget ) {
		$this->init_parent( $widget );
		$this->init_provider();
		$post_type_options = $this->get_taxonomy_options( ( Taxonomy_Loop_Provider::get_supported_cpts( $this->post_type ) ) );
		$default_source_type = $this->get_default_source_option();

		$this->add_group_control(
			Group_Control_Taxonomy::get_type(),
			[
				'name' => Taxonomy_Loop_Provider::QUERY_CONTROL_GROUP_NAME,
				Taxonomy_Loop_Provider::POST_TYPE => Taxonomy_Loop_Provider::get_default_source_type( $this->get_id() ),
				'presets' => [ 'include', 'exclude' ],
				'fields_options' => [
					Taxonomy_Loop_Provider::POST_TYPE => [
						'default' => $default_source_type,
						'options' => $post_type_options,
					],
					Taxonomy_Loop_Provider::FILTER_BY => $this->provider->get_control_args( Taxonomy_Loop_Provider::FILTER_BY, false ),
					Taxonomy_Loop_Provider::INCLUDE_TAB => $this->provider->get_control_args( Taxonomy_Loop_Provider::INCLUDE_TAB, false ),
					Taxonomy_Loop_Provider::EXCLUDE_TAB => $this->provider->get_control_args( Taxonomy_Loop_Provider::EXCLUDE_TAB, false ),
				],
				'exclude' => [
					'include',
					'exclude',
				],
			],
		);

		// Filtering controls
		$this->add_query_control( Taxonomy_Loop_Provider::PARENT, true );
		$this->add_query_control( Taxonomy_Loop_Provider::INCLUDE, true );
		$this->add_query_control( Taxonomy_Loop_Provider::EXCLUDE, true );

		// Order controls
		$this->add_query_control( Taxonomy_Loop_Provider::ORDER_BY, true );
		$this->add_query_control( Taxonomy_Loop_Provider::ORDER, true );

		// Result exclusion controls
		$this->add_query_control( Taxonomy_Loop_Provider::AVOID_DUPLICATES, true );
		$this->add_query_control( Taxonomy_Loop_Provider::HIDE_EMPTY, true );
		$this->add_query_control( Taxonomy_Loop_Provider::OFFSET, true );

		// Hierarchical controls
		$this->add_query_control( Taxonomy_Loop_Provider::HIERARCHICAL, true );
		$this->add_query_control( Taxonomy_Loop_Provider::QUERY_DEPTH, true );

		// Result inclusion controls
		$this->add_query_control( Taxonomy_Loop_Provider::QUERY_ID, true );
	}

	/**
	 * Returns desired taxonomy items.
	 *
	 * Uses control values from get_settings_for_display.
	 */
	protected function get_terms() {
		$display_settings = $this->parent->get_settings_for_display();
		$settings = $this->provider->get_query_settings( $display_settings );

		add_filter( 'elementor/loop_taxonomy/args', [ $this, 'filter_loop_taxonomy_args' ], 10, 3 );

		$terms = $this->get_filtered_taxonomies( $settings, $settings );

		remove_filter( 'elementor/loop_taxonomy/args', [ $this, 'filter_loop_taxonomy_args' ] );

		Module::add_to_taxonomies_avoid_list( wp_list_pluck( $terms, 'term_id' ) );

		return $terms;
	}

	public function filter_loop_taxonomy_args( $args, $settings, $display_settings ) {
		$avoid_duplicates_key = $this->provider->get_property_name( 'avoid_duplicates' );
		$current_settings = $this->parent->get_settings_for_display();

		$should_avoid_duplicates = isset( $current_settings[ $avoid_duplicates_key ] ) &&
			'yes' === $current_settings[ $avoid_duplicates_key ];

		if ( $should_avoid_duplicates ) {
			$exclude = isset( $args['exclude'] ) && is_array( $args['exclude'] ) ? $args['exclude'] : [];
			$exclude = array_merge( $exclude, Module::get_taxonomies_avoid_list_ids() );
			$args['exclude'] = $exclude;
		}

		return $args;
	}

	private function add_query_control( $control_id, $is_prefixed ) {
		$this->add_control( $control_id, $this->provider->get_control_args( $control_id, $is_prefixed ) );
	}
}
