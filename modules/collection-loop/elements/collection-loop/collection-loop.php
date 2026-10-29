<?php

namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop;

use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use Elementor\Modules\AtomicWidgets\ChildrenDependencies\Child_Dependency;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Element_Builder;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Loader\Frontend_Assets_Loader;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\Utils\Element_Position;
use Elementor\Utils;
use ElementorPro\Modules\CollectionLoop\Controls\Alternating_Items_Control;
use ElementorPro\Modules\CollectionLoop\Controls\Loop_Query_Control;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Empty_State\Collection_Loop_Empty_State;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item\Collection_Loop_Item;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Layout\Collection_Loop_Layout;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination\Collection_Loop_Pagination;
use ElementorPro\Modules\CollectionLoop\Module;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\ItemProviders\Post_Loop_Item_Provider;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Args_Builder;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Counts;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Pagination;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Post_Template_Type;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Registry;
use ElementorPro\Modules\CollectionLoop\Traits\Has_Loop_Query;
use ElementorPro\Modules\CollectionLoop\Utils\Alternate_Selector;
use ElementorPro\Modules\CollectionLoop\Utils\Loop_Slot_Map;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Collection_Loop extends Atomic_Element_Base {
	use Has_Element_Template;
	use Has_Loop_Query;

	public static function get_computed_html_tag( array $settings ): string {
		return 'div';
	}

	const ELEMENT_TYPE = 'e-collection-loop';
	const BASE_STYLE_KEY = 'base';
	const TEMPLATE_CHILD_INDEX = 0;
	const LOOP_CONTEXT_KEY = 'collection-loop';
	const LAYOUT_CONTENT_ID_PREFIX = 'e-collection-loop-layout-';
	const PAGINATION_PROP = 'pagination';
	const PAGINATION_TYPE_PROP = 'pagination_type';
	const PAGINATION_TYPE_PREV_NEXT = 'prev_next';
	const PAGINATION_TYPE_OPTIONS = [
		self::PAGINATION_TYPE_PREV_NEXT,
	];
	const PAGINATION_LOAD_TYPE_PROP = 'pagination_load_type';
	const PAGINATION_LOAD_PAGE_RELOAD = 'page_reload';
	const PAGINATION_LOAD_AJAX = 'ajax';
	const PAGINATION_LOAD_TYPE_OPTIONS = [
		self::PAGINATION_LOAD_PAGE_RELOAD,
		self::PAGINATION_LOAD_AJAX,
	];
	const EMPTY_STATE_PROP = 'empty_state';
	public static $widget_description = 'Repeats a content template for each item in a collection (posts, terms, etc.).';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'is_container', true );
	}

	public static function get_type() {
		return self::ELEMENT_TYPE;
	}

	public static function get_element_type(): string {
		return self::ELEMENT_TYPE;
	}

	public function get_title() {
		return esc_html__( 'Loop', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'loop', 'collection', 'repeater', 'posts', 'grid', 'dynamic', 'query', 'listing' ];
	}

	public function get_icon() {
		return 'eicon-loop-widget';
	}

	protected static function define_props_schema(): array {
		$pagination_visible = Dependency_Manager::make()
			->where( self::supports_pagination_clause() )
			->get();

		$pagination_on = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path' => [ self::PAGINATION_PROP ],
				'value' => true,
				'effect' => 'hide',
			] )
			->where( self::supports_pagination_clause() )
			->get();

		return Non_Overridable_Props::apply_to_schema( [
			'classes'    => Classes_Prop_Type::make()->default( [] ),
			'attributes' => Attributes_Prop_Type::make(),
			'query'      => Loop_Query::prop_type()->default( [
				'template_type' => String_Prop_Type::generate( Post_Template_Type::ID ),
				'source'        => String_Prop_Type::generate( Post_Template_Type::SOURCE_POST ),
			] ),
			self::PAGINATION_PROP => Boolean_Prop_Type::make()
				->default( false )
				->set_dependencies( $pagination_visible ),
			self::PAGINATION_TYPE_PROP => String_Prop_Type::make()
				->enum( self::PAGINATION_TYPE_OPTIONS )
				->default( self::PAGINATION_TYPE_PREV_NEXT )
				->set_dependencies( $pagination_on ),
			self::PAGINATION_LOAD_TYPE_PROP => String_Prop_Type::make()
				->enum( self::PAGINATION_LOAD_TYPE_OPTIONS )
				->default( self::PAGINATION_LOAD_PAGE_RELOAD )
				->set_dependencies( $pagination_on ),
			self::EMPTY_STATE_PROP => Boolean_Prop_Type::make()
				->default( false ),
		] );
	}

	/**
	 * Shared dependency term used by both the pagination prop schema and the
	 * `e-pagination` child rule: the current template type must not be one of
	 * the term-based sources (which don't support pagination). `nin` on an
	 * empty list is always met, so this stays safe if the registry is empty.
	 */
	private static function supports_pagination_clause(): array {
		return [
			'operator' => 'nin',
			'path' => [ 'query', 'template_type' ],
			'value' => Template_Type_Registry::instance()->get_ids_without_pagination(),
			'effect' => 'hide',
		];
	}

	protected function get_loop_context_key(): string {
		return self::LOOP_CONTEXT_KEY;
	}

	protected function get_loop_item_provider(): Loop_Item_Provider {
		$resolved = $this->get_atomic_setting( 'query' );

		if ( ! is_array( $resolved ) ) {
			return new Post_Loop_Item_Provider( new \WP_Query() );
		}

		// Rebuild the item provider from the raw settings (stashed by Loop_Query_Transformer)
		// so post- and term-based template types share a single entry point. The current
		// page window is threaded in as a setting rather than a WP_Query arg, so term-based
		// types (which don't use WP_Query) can safely ignore it.
		$settings = Loop_Query_Args_Builder::extract_settings( $resolved );

		return Loop_Query_Args_Builder::item_provider_from_resolved( $this->apply_page_window( $settings ), $this );
	}

	/**
	 * Static alternates take a slot without consuming an item, so a page's first
	 * item no longer sits at `( $page - 1 ) * $posts_per_page` and `paged` would
	 * silently drop every pushed item — page by item offset off the slot map
	 * instead, which has to be known before the query runs.
	 */
	private function apply_page_window( array $settings ): array {
		$page       = $this->resolve_current_page();
		$selector   = $this->build_alternate_selector();
		$start_slot = ( $page - 1 ) * self::resolve_slots_per_page( $settings );

		if ( $start_slot > 0 && $selector && $selector->has_static_alternates() ) {
			return Loop_Query_Args_Builder::apply_offset(
				$settings,
				Loop_Slot_Map::items_before_slot( $selector, $start_slot )
			);
		}

		return Loop_Query_Args_Builder::apply_pagination( $settings, $page );
	}

	/**
	 * A fresh selector per call, since each slot-map walk restarts from slot 0.
	 */
	private function build_alternate_selector(): ?Alternate_Selector {
		$layout = $this->get_children()[ self::TEMPLATE_CHILD_INDEX ] ?? null;

		return $layout ? Alternate_Selector::for_loop_items( $layout->get_children() ) : null;
	}

	private function resolve_current_page(): int {
		return Loop_Query_Pagination::get_current_page_for_loop( (string) $this->get_id() );
	}

	private static function resolve_slots_per_page( array $settings ): int {
		return Loop_Query::clamp_posts_per_page( $settings['posts_per_page'] ?? null );
	}

	public static function get_layout_content_id( string $layout_element_id ): string {
		return self::LAYOUT_CONTENT_ID_PREFIX . $layout_element_id;
	}

	protected function extend_loop_render_context( array $context, Loop_Item_Provider $item_provider ): array {
		$loop_id = (string) $this->get_id();
		$children = $this->get_children();
		$layout = $children[ self::TEMPLATE_CHILD_INDEX ] ?? null;
		$layout_element_id = $layout ? (string) $layout->get_id() : '';
		$slot_window = $this->resolve_slot_window( $item_provider );
		$max_num_pages = $slot_window['max_pages'];
		$empty_state_enabled = (bool) ( $this->get_atomic_setting( self::EMPTY_STATE_PROP ) ?? false );

		return array_merge( $context, [
			'loop_id'              => $loop_id,
			'layout_content_id'    => $layout_element_id ? self::get_layout_content_id( $layout_element_id ) : '',
			'current_page'         => $this->resolve_current_page(),
			'max_pages'            => $max_num_pages,
			'start_slot'           => $slot_window['start_slot'],
			'slot_budget'          => $slot_window['slot_budget'],
			'pagination_enabled'   => (bool) ( $this->get_atomic_setting( self::PAGINATION_PROP ) ?? false ) && $max_num_pages > 1,
			'pagination_type'      => (string) ( $this->get_atomic_setting( self::PAGINATION_TYPE_PROP ) ?? self::PAGINATION_TYPE_PREV_NEXT ),
			'pagination_load_type' => (string) ( $this->get_atomic_setting( self::PAGINATION_LOAD_TYPE_PROP ) ?? self::PAGINATION_LOAD_PAGE_RELOAD ),
			'empty_state_enabled'  => $empty_state_enabled,
		] );
	}

	/**
	 * The global slot range this page renders, plus the page count it implies.
	 *
	 * `start_slot` stays global even without statics, so "apply once" fires once
	 * per query instead of once per page. With statics the slot count exceeds the
	 * item count, so the page count and budget come from the slot map rather than
	 * from WP_Query.
	 *
	 * @return array{start_slot: int, slot_budget: int, max_pages: int}
	 */
	private function resolve_slot_window( Loop_Item_Provider $item_provider ): array {
		$per_page   = self::resolve_slots_per_page( $this->resolve_query_settings() );
		$start_slot = ( $this->resolve_current_page() - 1 ) * $per_page;
		$selector   = $this->build_alternate_selector();

		if ( ! $selector || ! $selector->has_static_alternates() ) {
			return [
				'start_slot'  => $start_slot,
				'slot_budget' => $item_provider->count(),
				'max_pages'   => $item_provider->max_num_pages(),
			];
		}

		$total_slots = Loop_Slot_Map::total_slots( $selector, Loop_Query_Counts::found_items( $item_provider ) );

		// Non-post providers (terms) render everything on a single page, so the
		// inserted slots have to fit in that page's budget.
		if ( ! $item_provider->query() instanceof \WP_Query ) {
			return [
				'start_slot'  => 0,
				'slot_budget' => $total_slots,
				'max_pages'   => 1,
			];
		}

		return [
			'start_slot'  => $start_slot,
			'slot_budget' => min( $per_page, max( 0, $total_slots - $start_slot ) ),
			'max_pages'   => (int) ceil( $total_slots / $per_page ),
		];
	}

	private function resolve_query_settings(): array {
		$resolved = $this->get_atomic_setting( 'query' );

		return is_array( $resolved ) ? Loop_Query_Args_Builder::extract_settings( $resolved ) : [];
	}

	protected function define_atomic_controls(): array {
		$structure_items = [
			Switch_Control::bind_to( self::PAGINATION_PROP )
				->set_label( __( 'Pagination', 'elementor-pro' ) ),
			Select_Control::bind_to( self::PAGINATION_TYPE_PROP )
				->set_options( [
					[
						'value' => self::PAGINATION_TYPE_PREV_NEXT,
						'label' => __( 'Prev / Next', 'elementor-pro' ),
					],
				] )
				->set_label( __( 'Pagination type', 'elementor-pro' ) ),
			Select_Control::bind_to( self::PAGINATION_LOAD_TYPE_PROP )
				->set_options( [
					[
						'value' => self::PAGINATION_LOAD_PAGE_RELOAD,
						'label' => __( 'Page reload', 'elementor-pro' ),
					],
					[
						'value' => self::PAGINATION_LOAD_AJAX,
						'label' => __( 'AJAX', 'elementor-pro' ),
					],
				] )
				->set_label( __( 'Load type', 'elementor-pro' ) ),
			Alternating_Items_Control::make()
				->set_label( __( 'Add Alternating Item', 'elementor-pro' ) )
				->set_meta( [ 'layout' => 'custom' ] ),
		];

		if ( self::supports_empty_state() ) {
			$structure_items[] = Switch_Control::bind_to( self::EMPTY_STATE_PROP )
				->set_label( __( 'Empty state', 'elementor-pro' ) );
		}

		return [
			Section::make()
				->set_id( 'query' )
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_items( [ Loop_Query_Control::bind_to( 'query' ) ] ),
			Section::make()
				->set_label( __( 'Structure', 'elementor-pro' ) )
				->set_id( 'structure' )
				->set_items( $structure_items ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( [
					Text_Control::bind_to( '_cssid' )
						->set_label( __( 'ID', 'elementor-pro' ) )
						->set_meta( $this->get_css_id_control_meta() ),
				] ),
		];
	}

	/**
	 * Empty state relies on Core's children-dependency reconciler introduced in 4.3.
	 * On older Core versions the switch is hidden so users can't toggle a setting
	 * whose child element wouldn't be attached. Content saved on 4.3 stays readable
	 * on 4.2 because the `EMPTY_STATE_PROP` schema is declared unconditionally.
	 */
	private static function supports_empty_state(): bool {
		return version_compare( ELEMENTOR_VERSION, '4.3', '>=' );
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->set_breakpoint( Breakpoints_Manager::BREAKPOINT_KEY_DESKTOP )
						->add_prop( 'display', String_Prop_Type::generate( 'block' ) )
				),
		];
	}

	protected function define_default_children() {
		return [
			Element_Builder::make( Collection_Loop_Layout::get_element_type() )
				->meta( [ 'required' => true ] )
				->children( [
					Element_Builder::make( Collection_Loop_Item::get_element_type() )
						->meta( [ 'required' => true ] )
						->build(),
				] )
				->build(),
		];
	}

	protected function define_children_dependencies(): array {
		return [
			Child_Dependency::for( Collection_Loop_Pagination::get_element_type() )
				->when(
					Dependency_Manager::make( Dependency_Manager::RELATION_AND )
						->where( [
							'operator' => 'eq',
							'path' => [ self::PAGINATION_PROP ],
							'value' => true,
						] )
						->where( self::supports_pagination_clause() )
				)
				->position( Element_Position::after_type( Collection_Loop_Layout::get_element_type() ) )
				->stash( true )
				->default_model(
					Element_Builder::make( Collection_Loop_Pagination::get_element_type() )
						->is_locked( true )
						->hydrate_default_children( true )
						->build()
				),
			Child_Dependency::for( Collection_Loop_Empty_State::get_element_type() )
				->when(
					Dependency_Manager::make()
						->where( [
							'operator' => 'eq',
							'path' => [ self::EMPTY_STATE_PROP ],
							'value' => true,
						] )
				)
				->position( Element_Position::after_type( Collection_Loop_Pagination::get_element_type() ) )
				->stash( true )
				->default_model(
					Element_Builder::make( Collection_Loop_Empty_State::get_element_type() )
						->is_locked( true )
						->hydrate_default_children( true )
						->build()
				),
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop' => __DIR__ . '/collection-loop.html.twig',
		];
	}

	public function get_script_depends() {
		$depends = parent::get_script_depends();

		$depends[] = Module::PAGINATION_SCRIPT_HANDLE;

		return $depends;
	}

	public function register_frontend_handlers() {
		$min_suffix = ( Utils::is_script_debug() || Utils::is_elementor_tests() ) ? '' : '.min';

		wp_register_script(
			Module::PAGINATION_SCRIPT_HANDLE,
			ELEMENTOR_PRO_URL . "assets/js/collection-loop-pagination-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE ],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}
}
