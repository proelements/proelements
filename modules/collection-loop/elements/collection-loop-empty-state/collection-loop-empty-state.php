<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Empty_State;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Heading\Atomic_Heading;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Html_V3_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Collection_Loop_Empty_State extends Atomic_Element_Base {
	use Has_Element_Template;

	public static function get_computed_html_tag( array $settings ): string {
		return 'div';
	}

	const ELEMENT_TYPE = 'e-collection-loop-empty-state';
	const BASE_STYLE_KEY = 'base';

	public static $widget_description = 'Empty-state container for the Loop. Added as a direct child of e-collection-loop when the Empty State toggle is on; visible only when the query returns no items.';

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
		return esc_html__( 'Empty state', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-library-grid';
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
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_prop( 'display', String_Prop_Type::generate( 'flex' ) )
						->add_prop( 'justify-content', String_Prop_Type::generate( 'center' ) )
				),
		];
	}

	protected function define_default_children() {
		$default_title = __( 'No items found', 'elementor-pro' );
		$title_value = class_exists( 'Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type' )
			? 'Elementor\Modules\AtomicWidgets\PropTypes\Escaped_Html_Prop_Type'::generate( $default_title )
			: Html_V3_Prop_Type::generate( [
				'content' => String_Prop_Type::generate( $default_title ),
				'children' => [],
			] );

		return [
			Atomic_Heading::generate()
				->settings( [
					'title' => $title_value,
					'tag' => String_Prop_Type::generate( 'h3' ),
				] )
				->build(),
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop-empty-state' => __DIR__ . '/collection-loop-empty-state.html.twig',
		];
	}

	protected function build_template_context(): array {
		return array_merge(
			$this->build_base_template_context(),
			[
				'loop_context' => Render_Context::get( Collection_Loop::LOOP_CONTEXT_KEY ),
			]
		);
	}
}
