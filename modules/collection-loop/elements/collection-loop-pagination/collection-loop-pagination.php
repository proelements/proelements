<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination;

use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination_Next\Collection_Loop_Pagination_Next;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination_Prev\Collection_Loop_Pagination_Prev;
use ElementorPro\Modules\CollectionLoop\Traits\Has_Pagination_Context;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Collection_Loop_Pagination extends Atomic_Element_Base {
	use Has_Element_Template;
	use Has_Pagination_Context;

	const ELEMENT_TYPE = 'e-pagination';
	const BASE_STYLE_KEY = 'base';


	public static $widget_description = 'Pagination container for the Loop. Added as a direct child of e-collection-loop when pagination is enabled.';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'is_container', true );
		$this->meta( 'permanently_locked', true );
	}

	public static function get_type() {
		return self::ELEMENT_TYPE;
	}

	public static function get_element_type(): string {
		return self::ELEMENT_TYPE;
	}

	public function get_title() {
		return esc_html__( 'Pagination', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-pagination';
	}

	public function should_show_in_panel() {
		return false;
	}

	protected static function define_props_schema(): array {
		return Non_Overridable_Props::apply_to_schema( [
			'classes' => Classes_Prop_Type::make()->default( [] ),
			'attributes' => Attributes_Prop_Type::make(),
		] );
	}

	protected function define_atomic_controls(): array {
		return [
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
		$container_padding = Dimensions_Prop_Type::generate( [
			'block-start' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
			'inline-end' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
			'block-end' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
			'inline-start' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
		] );

		$container_margin = Dimensions_Prop_Type::generate( [
			'block-start' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
		] );

		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->set_breakpoint( Breakpoints_Manager::BREAKPOINT_KEY_DESKTOP )
						->add_prop( 'display', String_Prop_Type::generate( 'flex' ) )
						->add_prop( 'flex-wrap', String_Prop_Type::generate( 'wrap' ) )
						->add_prop( 'justify-content', String_Prop_Type::generate( 'flex-start' ) )
						->add_prop( 'align-items', String_Prop_Type::generate( 'center' ) )
						->add_prop( 'gap', Size_Prop_Type::generate( [
							'size' => 8,
							'unit' => 'px',
						] ) )
						->add_prop( 'margin', $container_margin )
						->add_prop( 'padding', $container_padding )
				),
		];
	}

	protected function define_default_children() {
		return [
			Collection_Loop_Pagination_Prev::generate()->meta( [ 'required' => true ] )->build(),
			Collection_Loop_Pagination_Next::generate()->meta( [ 'required' => true ] )->build(),
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop-pagination' => __DIR__ . '/collection-loop-pagination.html.twig',
		];
	}

	protected function build_template_context(): array {
		$loop_context = $this->get_pagination_context();
		$a11y = [
			'nav_label' => __( 'Pagination', 'elementor-pro' ),
		];

		if ( ! empty( $loop_context['pagination_enabled'] ) ) {
			$current_page = (int) ( $loop_context['current_page'] ?? 1 );
			$max_pages = (int) ( $loop_context['max_pages'] ?? 1 );

			$a11y['status_label'] = sprintf(
				/* translators: 1: Current page number, 2: Total number of pages. */
				__( 'Page %1$s of %2$s', 'elementor-pro' ),
				$current_page,
				$max_pages
			);
		}

		return array_merge(
			$this->build_base_template_context(),
			[
				'loop_context' => $loop_context,
				'a11y' => $a11y,
			]
		);
	}
}
