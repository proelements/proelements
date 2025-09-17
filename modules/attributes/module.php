<?php
namespace ElementorPro\Modules\Attributes;

use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;
use Elementor\Modules\AtomicWidgets\Controls\Types\Repeatable_Control;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\PropTypes\Key_Value_Array_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return 'attributes';
	}

	private function is_attributes_active() {
		return API::is_licence_has_feature( 'atomic-custom-attributes', API::BC_VALIDATION_CALLBACK );
	}

	public function __construct() {
		parent::__construct();

		if ( $this->is_attributes_active() ) {
			add_filter(
				'elementor/atomic-widgets/controls',
				fn( $element_controls, $atomic_element ) => $this->inject_attrs_control( $element_controls, $atomic_element ),
				10,
				2
			);
		}
	}

	private function inject_attrs_control( $element_controls, $atomic_element ) {
		$schema = $atomic_element::get_props_schema();
		if ( ! array_key_exists( 'attributes', $schema ) ) {
			return $element_controls;
		}

		foreach ( $element_controls as $item ) {
			if ( $item instanceof Section && $item->get_id() === 'settings' ) {
				$item->add_item(
					Repeatable_Control::bind_to( 'attributes' )
						->set_meta( [ 'topDivider' => true ] )
						->set_repeaterLabel( __( 'Attributes', 'elementor-pro' ) )
						->set_initialValues(
							[
								'key'   => [
									'$$type' => 'string',
									'value'  => '',
								],
								'value' => [
									'$$type' => 'string',
									'value'  => '',
								],
							]
						)
						->set_patternLabel( '${value.key.value}="${value.value.value}"' )
						->set_placeholder( 'Empty attribute' )
						->set_child_control_type( 'key-value' )
						->set_child_control_props(
							[
								'regexKey'               => '^[a-zA-Z0-9_-]*$',
								'validationErrorMessage' => 'Names can only use letters, numbers, dashes (-) and underscores (_).',
								'keyName'                => __( 'Name', 'elementor-pro' ),
							]
						)
						->hide_duplicate()
						->hide_toggle()
				);
				break;
			}
		}

		return $element_controls;
	}
}
