<?php

namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop;

use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
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
use Elementor\Utils;
use ElementorPro\Modules\CollectionLoop\Controls\Loop_Query_Control;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item\Collection_Loop_Item;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Layout\Collection_Loop_Layout;
use ElementorPro\Modules\CollectionLoop\Module;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Pagination;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Runner;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Post_Template_Type;
use ElementorPro\Modules\CollectionLoop\Traits\Has_Loop_Query;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Collection_Loop extends Atomic_Element_Base {
	use Has_Element_Template;
	use Has_Loop_Query;

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
		return [ 'loop', 'collection', 'repeater', 'posts', 'grid' ];
	}

	public function get_icon() {
		return 'eicon-loop-widget';
	}

	protected static function define_props_schema(): array {
		$pagination_off_dependency = Dependency_Manager::make()
			->where( [
				'operator' => 'eq',
				'path' => [ self::PAGINATION_PROP ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();

		return Non_Overridable_Props::apply_to_schema( [
			'classes'    => Classes_Prop_Type::make()->default( [] ),
			'attributes' => Attributes_Prop_Type::make(),
			'query'      => Loop_Query::prop_type()->default( [
				'template_type' => String_Prop_Type::generate( Post_Template_Type::ID ),
				'source'        => String_Prop_Type::generate( Post_Template_Type::SOURCE_POST ),
			] ),
			self::PAGINATION_PROP => Boolean_Prop_Type::make()->default( false ),
			self::PAGINATION_TYPE_PROP => String_Prop_Type::make()
				->enum( self::PAGINATION_TYPE_OPTIONS )
				->default( self::PAGINATION_TYPE_PREV_NEXT )
				->set_dependencies( $pagination_off_dependency ),
			self::PAGINATION_LOAD_TYPE_PROP => String_Prop_Type::make()
				->enum( self::PAGINATION_LOAD_TYPE_OPTIONS )
				->default( self::PAGINATION_LOAD_PAGE_RELOAD )
				->set_dependencies( $pagination_off_dependency ),
		] );
	}

	protected function get_loop_context_key(): string {
		return self::LOOP_CONTEXT_KEY;
	}

	protected function get_loop_query(): \WP_Query {
		$resolved = $this->get_atomic_setting( 'query' );
		$args     = $resolved['args'] ?? [];
		$query_id = $resolved['query_id'] ?? '';
		$loop_id  = (string) $this->get_id();

		$args = Loop_Query_Pagination::apply_paged_to_args( $args, $loop_id );

		return ( new Loop_Query_Runner( $args, $query_id ) )->run( $this );
	}

	public static function get_layout_content_id( string $layout_element_id ): string {
		return self::LAYOUT_CONTENT_ID_PREFIX . $layout_element_id;
	}

	protected function extend_loop_render_context( array $context, \WP_Query $wp_query ): array {
		$loop_id = (string) $this->get_id();
		$children = $this->get_children();
		$layout = $children[ self::TEMPLATE_CHILD_INDEX ] ?? null;
		$layout_element_id = $layout ? (string) $layout->get_id() : '';

		return array_merge( $context, [
			'loop_id'              => $loop_id,
			'layout_content_id'    => $layout_element_id ? self::get_layout_content_id( $layout_element_id ) : '',
			'current_page'         => Loop_Query_Pagination::get_current_page_for_loop( $loop_id ),
			'max_pages'            => (int) $wp_query->max_num_pages,
			'pagination_enabled'   => (bool) ( $this->get_atomic_setting( self::PAGINATION_PROP ) ?? false ) && $wp_query->max_num_pages > 1,
			'pagination_type'      => (string) ( $this->get_atomic_setting( self::PAGINATION_TYPE_PROP ) ?? self::PAGINATION_TYPE_PREV_NEXT ),
			'pagination_load_type' => (string) ( $this->get_atomic_setting( self::PAGINATION_LOAD_TYPE_PROP ) ?? self::PAGINATION_LOAD_PAGE_RELOAD ),
		] );
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_id( 'query' )
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_items( [ Loop_Query_Control::bind_to( 'query' ) ] ),
			Section::make()
				->set_label( __( 'Structure', 'elementor-pro' ) )
				->set_id( 'structure' )
				->set_items( [
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
				] ),
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
