<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Core\Base\Document;
use Elementor\Element_Base;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Chips_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Email_Form_Action_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Query_Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Form\Atomic_Form;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Query_Prop_Type;
use Elementor\Modules\AtomicWidgets\Query\Query_Builder_Factory;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Modules\WpRest\Base\Query as Query_Base;
use Elementor\Modules\WpRest\Classes\Post_Query;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\AtomicForm\Actions\Action_Type;
use ElementorPro\Modules\AtomicForm\Actions\Popup_Action;
use ElementorPro\Modules\Popup\Module as Popup_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Popup_Form_Action {

	const ACTIONS_PROP = 'actions-after-submit';
	const POPUPS_SEARCH_LIMIT = 20;
	const PROPS_SCHEMA_PRIORITY = 5;

	public function __construct() {
		add_filter( 'elementor/atomic-widgets/props-schema', [ $this, 'register_props' ], self::PROPS_SCHEMA_PRIORITY );
		add_filter( 'elementor/atomic-widgets/controls', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/frontend/before_render', [ $this, 'maybe_print_popup' ] );
	}

	public function register_props( array $schema ): array {
		if ( ! isset( $schema[ self::ACTIONS_PROP ] ) ) {
			return $schema;
		}

		$actions_description = $schema[ self::ACTIONS_PROP ]->get_meta()['description'] ?? '';
		$schema[ self::ACTIONS_PROP ]->description( trim( $actions_description . ' Also valid: popup (opens or closes an Elementor popup after a successful submission), which requires popup-action.' ) );

		$schema['popup-action'] = String_Prop_Type::make()
			->enum( [ Popup_Action::NONE, Popup_Action::OPEN, Popup_Action::CLOSE ] )
			->default( Popup_Action::NONE )
			->set_dependencies( $this->make_dependencies() )
			->description( 'Used only when "popup" is in actions-after-submit. "open" opens the popup set in popup-id after a successful submission. "close" closes the popup that contains the form, one second after a successful submission. "none" does nothing.' );

		$schema['popup-id'] = Query_Prop_Type::make()
			->set_dependencies( $this->make_dependencies( Popup_Action::OPEN ) )
			->meta( Overridable_Prop_Type::ignore() )
			->description( 'The popup to open when popup-action is "open". Value: { id: popup template post ID, label: popup title }. Find popups with the list-site-parts ability (type "popup").' );

		$schema['popup-do-not-show-again'] = Boolean_Prop_Type::make()
			->default( false )
			->set_dependencies( $this->make_dependencies( Popup_Action::CLOSE ) )
			->meta( Overridable_Prop_Type::ignore() )
			->description( 'When popup-action is "close", stops this browser from showing the closed popup again.' );

		return $schema;
	}

	public function register_controls( array $controls, $element ): array {
		if ( ! ( $element instanceof Atomic_Form ) ) {
			return $controls;
		}

		$this->add_popup_action_chip( $controls );

		array_splice( $controls, $this->get_popup_section_position( $controls ), 0, [ $this->make_popup_section() ] );

		return $controls;
	}

	public function maybe_print_popup( Element_Base $element ): void {
		if ( ! ( $element instanceof Atomic_Form ) ) {
			return;
		}

		$settings = $element->get_atomic_settings();

		if ( ! in_array( Action_Type::POPUP, $settings[ self::ACTIONS_PROP ] ?? [], true ) ) {
			return;
		}

		if ( Popup_Action::OPEN !== ( $settings['popup-action'] ?? null ) ) {
			return;
		}

		$popup_id = Popup_Action::get_popup_id( $settings['popup-id'] ?? null );

		if ( $popup_id ) {
			Popup_Module::add_popup_to_location( $popup_id );
		}
	}

	private function make_dependencies( ?string $popup_action = null ): ?array {
		$dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'contains',
				'path' => [ self::ACTIONS_PROP ],
				'value' => Action_Type::POPUP,
				'effect' => 'hide',
			] );

		if ( $popup_action ) {
			$dependencies->where( [
				'operator' => 'eq',
				'path' => [ 'popup-action' ],
				'value' => $popup_action,
				'effect' => 'hide',
			] );
		}

		return $dependencies->get();
	}

	private function add_popup_action_chip( array $controls ): void {
		foreach ( $controls as $control ) {
			if ( ! ( $control instanceof Section ) ) {
				continue;
			}

			foreach ( $control->get_items() as $item ) {
				if ( $item instanceof Chips_Control && self::ACTIONS_PROP === $item->get_bind() ) {
					$item->set_options( array_merge( $item->get_props()['options'] ?? [], [
						[
							'label' => __( 'Popup', 'elementor-pro' ),
							'value' => Action_Type::POPUP,
						],
					] ) );

					return;
				}
			}
		}
	}

	private function get_popup_section_position( array $controls ): int {
		$position = count( $controls );

		foreach ( $controls as $index => $control ) {
			if ( $control instanceof Section && $this->has_email_control( $control ) ) {
				$position = $index + 1;
			}
		}

		return $position;
	}

	private function has_email_control( Section $section ): bool {
		foreach ( $section->get_items() as $item ) {
			if ( $item instanceof Email_Form_Action_Control ) {
				return true;
			}
		}

		return false;
	}

	private function make_popup_section(): Section {
		return Section::make()
			->set_label( __( 'Popup', 'elementor-pro' ) )
			->set_items( [
				Select_Control::bind_to( 'popup-action' )
					->set_options( [
						[
							'value' => Popup_Action::NONE,
							'label' => __( 'None', 'elementor-pro' ),
						],
						[
							'value' => Popup_Action::OPEN,
							'label' => __( 'Open Popup', 'elementor-pro' ),
						],
						[
							'value' => Popup_Action::CLOSE,
							'label' => __( 'Close Popup', 'elementor-pro' ),
						],
					] )
					->set_label( __( 'Action', 'elementor-pro' ) ),
				$this->make_popup_id_control(),
				Switch_Control::bind_to( 'popup-do-not-show-again' )
					->set_label( __( 'Don\'t Show Again', 'elementor-pro' ) ),
			] );
	}

	private function make_popup_id_control() {
		// TODO: [ED-26033] Remove the Query_Control fallback once the minimum supported Core version includes Query_Select_Control.
		if ( ! class_exists( Query_Select_Control::class ) ) {
			return Query_Control::bind_to( 'popup-id' )
				->set_query_config( $this->get_popups_query_config() )
				->set_allow_custom_values( false )
				->set_placeholder( __( 'Search popups', 'elementor-pro' ) )
				->set_label( __( 'Popup', 'elementor-pro' ) );
		}

		return Query_Select_Control::bind_to( 'popup-id' )
			->set_query_options( Query_Builder_Factory::create( $this->get_popups_query_config() )->build() )
			->set_placeholder( __( 'Search popups', 'elementor-pro' ) )
			->set_min_input_length( 0 )
			->set_label( __( 'Popup', 'elementor-pro' ) );
	}

	private function get_popups_query_config(): array {
		return [
			Query_Builder_Factory::ENDPOINT_KEY => Post_Query::ENDPOINT,
			Query_Base::INCLUDED_TYPE_KEY => [ Source_Local::CPT ],
			Query_Base::EXCLUDED_TYPE_KEY => [],
			Query_Base::ITEMS_COUNT_KEY => self::POPUPS_SEARCH_LIMIT,
			Query_Base::META_QUERY_KEY => [
				[
					'key' => Document::TYPE_META_KEY,
					'value' => Popup_Module::DOCUMENT_TYPE,
				],
			],
		];
	}
}
