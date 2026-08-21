<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Layout;

use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item\Collection_Loop_Item;
use ElementorPro\Modules\CollectionLoop\Traits\Has_Loop_Iteration;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Collection_Loop_Layout extends Atomic_Element_Base {
	use Has_Loop_Iteration;

	const ELEMENT_TYPE = 'e-collection-loop-layout';
	const BASE_STYLE_KEY = 'base';
	const DEFAULT_GRID_GAP_PX = 20;
	const DEFAULT_GRID_TEMPLATE_COLUMNS = 'repeat(3, 1fr)';

	public static $widget_description = 'Layout container for the Loop. Hosts the repeating item.';

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
		return esc_html__( 'Loop Layout', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-library-grid';
	}

	protected function get_loop_context_key(): string {
		return Collection_Loop::LOOP_CONTEXT_KEY;
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
				->set_items( [] ),
		];
	}

	protected function define_allowed_child_types() {
		return [ Collection_Loop_Item::ELEMENT_TYPE ];
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->set_breakpoint( Breakpoints_Manager::BREAKPOINT_KEY_DESKTOP )
						->add_prop( 'display', String_Prop_Type::generate( 'grid' ) )
						->add_prop( 'grid-template-columns', String_Prop_Type::generate( self::DEFAULT_GRID_TEMPLATE_COLUMNS ) )
						->add_prop( 'grid-auto-rows', Size_Prop_Type::generate( [
							'size' => 1,
							'unit' => 'fr',
						] ) )
						->add_prop( 'gap', Size_Prop_Type::generate( [
							'size' => self::DEFAULT_GRID_GAP_PX,
							'unit' => 'px',
						] ) )
				),
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop-layout' => __DIR__ . '/collection-loop-layout.html.twig',
		];
	}
}
