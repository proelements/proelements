<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Textarea_Control;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Form\Atomic_Form;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Webmcp_Field_Props {
	const PARAM_DESCRIPTION_PROP = 'webmcp-param-description';
	const MIN_ELEMENTOR_VERSION = '4.4';

	private static function is_active(): bool {
		// @todo Remove the version check in 4.6.0, once ELEMENTOR_PRO_REQUIRED_CORE_VERSION is 4.4 or higher.
		return version_compare( ELEMENTOR_VERSION, self::MIN_ELEMENTOR_VERSION, '>=' );
	}

	public static function get_props(): array {
		if ( ! self::is_active() ) {
			return [];
		}

		$form_exposed_dependency = Dependency_Manager::make()
			->where( [
				'operator' => 'eq',
				'path' => [ Atomic_Form::WEBMCP_EXPOSE ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();

		return [
			self::PARAM_DESCRIPTION_PROP => String_Prop_Type::make()
				->meta( 'ancestor_dependency', [
					'element_type' => Atomic_Form::get_element_type(),
					'dependency' => $form_exposed_dependency,
				] )
				->description( 'Required when creating a form field. Tells AI agents what to enter in this field, with its format and constraints, e.g. "Reservation date, today or later."' ),
		];
	}

	public static function get_controls(): array {
		if ( ! self::is_active() ) {
			return [];
		}

		return [
			Section::make()
				->set_label( __( 'AI agents', 'elementor-pro' ) )
				->set_id( 'agents' )
				->set_items( [
					Textarea_Control::bind_to( self::PARAM_DESCRIPTION_PROP )
						->set_label( __( 'Description', 'elementor-pro' ) ),
				] ),
		];
	}

	public static function apply_exposure( array $settings ): array {
		if ( ! self::is_active() ) {
			return $settings;
		}

		$form_context = Render_Context::get( Atomic_Form::class );

		if ( false === ( $form_context[ Atomic_Form::WEBMCP_EXPOSE ] ?? true ) ) {
			unset( $settings[ self::PARAM_DESCRIPTION_PROP ] );
		}

		return $settings;
	}
}
