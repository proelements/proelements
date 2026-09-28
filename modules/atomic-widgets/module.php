<?php
namespace ElementorPro\Modules\AtomicWidgets;

use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Modules\AtomicWidgets\PropsResolver\Transformers_Registry;
use ElementorPro\Modules\AtomicWidgets\PropTypes\Display_Conditions\Display_Conditions_Prop_Type;
use ElementorPro\Modules\AtomicWidgets\PropTypes\Display_Conditions\Condition_Group_Prop_Type;
use ElementorPro\Modules\AtomicWidgets\Transformers\Display_Conditions as Display_Conditions_Transformer;
use ElementorPro\Modules\AtomicWidgets\Transformers\Condition_Group as Condition_Group_Transformer;
use ElementorPro\Modules\AtomicWidgets\Template_Styles;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return 'atomic';
	}

	public function __construct() {
		parent::__construct();

		if ( ! Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME ) ) {
			return;
		}

		add_filter(
			'elementor/atomic-widgets/props-schema',
			fn( $schema ) => $this->inject_props_schema( $schema ),
			10,
			1
		);

		add_action(
			'elementor/atomic-widgets/settings/transformers/register',
			fn ( $transformers ) => $this->register_settings_transformers( $transformers ),
		);

		add_filter(
			'elementor/atomic_widgets/editor_data/element_styles',
			fn( $styles_without_custom_css, $styles ) => $this->get_license_based_custom_css_value( $styles_without_custom_css, $styles ),
			10,
			2
		);

		( new Template_Styles() )->register_hooks();
	}

	private function inject_props_schema( $schema ) {
		$display_conditions_prop_type = Display_Conditions_Prop_Type::make();

		$overridable_prop_type = 'Elementor\\Modules\\Components\\PropTypes\\Overridable_Prop_Type';

		if ( class_exists( $overridable_prop_type ) ) {
			$display_conditions_prop_type->meta( $overridable_prop_type::ignore() );
		}

		$schema[ Display_Conditions_Prop_Type::get_key() ] = $display_conditions_prop_type;
		return $schema;
	}

	private function register_settings_transformers( Transformers_Registry $transformers ): Transformers_Registry {
		$transformers->register( Display_Conditions_Prop_Type::get_key(), new Display_Conditions_Transformer() );
		$transformers->register( Condition_Group_Prop_Type::get_key(), new Condition_Group_Transformer() );

		return $transformers;
	}

	private function get_license_based_custom_css_value( $styles_without_custom_css, $styles ) {
		if ( $this->has_custom_css_feature_in_license() ) {
			return $styles;
		}

		return $styles_without_custom_css;
	}

	private function has_custom_css_feature_in_license() {
		return API::is_licence_has_feature( 'atomic-custom-css' );
	}
}

