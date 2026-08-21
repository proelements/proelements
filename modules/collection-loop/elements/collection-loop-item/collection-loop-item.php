<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Collection_Loop_Item extends Atomic_Element_Base {
	use Has_Element_Template;

	const ELEMENT_TYPE = 'e-collection-loop-item';

	public static $widget_description = 'Repeating item template for a Loop. Renders once per item in the collection.';

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
		return esc_html__( 'Loop Item', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-loop-item';
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

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop-item' => __DIR__ . '/collection-loop-item.html.twig',
		];
	}
}
