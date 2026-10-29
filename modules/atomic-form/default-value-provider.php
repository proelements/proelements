<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Default_Value_Provider {
	const TOGGLE_PROP = 'has-default-value';

	public static function get_toggle_prop(): Boolean_Prop_Type {
		return Boolean_Prop_Type::make()->default( false );
	}

	public static function get_dependencies(): ?array {
		return Dependency_Manager::make()
			->where( [
				'operator' => 'eq',
				'path' => [ self::TOGGLE_PROP ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();
	}

	public static function get_toggle_control(): Switch_Control {
		return Switch_Control::bind_to( self::TOGGLE_PROP )
			->set_label( __( 'Default value', 'elementor-pro' ) );
	}
}
