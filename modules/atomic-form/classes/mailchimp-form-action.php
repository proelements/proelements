<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Chips_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Form\Atomic_Form;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Options_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Array_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Prop_Sensitivity;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Settings;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\AtomicForm\Actions\Action_Type;
use ElementorPro\Modules\AtomicForm\Actions\Mailchimp_Action;
use ElementorPro\Modules\AtomicForm\Module;
use ElementorPro\Modules\Forms\Classes\Mailchimp_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Form_Action {

	const ACTIONS_PROP = 'actions-after-submit';
	const API_KEY_NOTICE_PROP = '_mailchimp_api_key_notice';
	const API_KEY_SOURCE_PROP = 'mailchimp-api-key-source';
	const CUSTOM_API_KEY_PROP = 'mailchimp-api-key';
	const AJAX_ACTION = 'pro_atomic_form_mailchimp_data';
	const RESOURCE_API_KEY_STATUS = 'api-key-status';
	const PROPS_SCHEMA_PRIORITY = 5;

	private bool $is_licensed = true;

	/**
	 * The props are registered with or without the license, so saved Mailchimp settings are kept and their
	 * sensitive / non-exportable meta still applies. The chip, the controls and the AJAX need the license.
	 */
	public function __construct( bool $is_licensed = true ) {
		$this->is_licensed = $is_licensed;

		add_filter( 'elementor/atomic-widgets/props-schema', [ $this, 'register_props' ], self::PROPS_SCHEMA_PRIORITY );

		if ( ! $is_licensed ) {
			return;
		}

		add_filter( 'elementor/atomic-widgets/controls', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );
	}

	public function register_props( array $schema ): array {
		if ( ! isset( $schema[ self::ACTIONS_PROP ] ) ) {
			return $schema;
		}

		if ( $this->is_licensed ) {
			$actions_description = $schema[ self::ACTIONS_PROP ]->get_meta()['description'] ?? '';
			$schema[ self::ACTIONS_PROP ]->description( trim( $actions_description . ' Also valid: mailchimp (adds or updates the subscriber in a Mailchimp audience).' ) );
		}

		$audience_dependency = [
			'operator' => 'exists',
			'path' => [ Mailchimp_Control::AUDIENCE ],
			'effect' => 'hide',
		];

		$schema[ self::API_KEY_NOTICE_PROP ] = String_Prop_Type::make()
			->default( '' )
			->set_dependencies( $this->make_dependencies() )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( 'llm_configurable', false )
			->description( 'Editor only: informational notice when no global Mailchimp API key is configured. Not rendered on the page.' );

		$schema[ self::API_KEY_SOURCE_PROP ] = String_Prop_Type::make()
			->enum( [ Mailchimp_Action::API_KEY_SOURCE_DEFAULT, Mailchimp_Action::API_KEY_SOURCE_CUSTOM ] )
			->default( Mailchimp_Action::API_KEY_SOURCE_DEFAULT )
			->set_dependencies( $this->make_dependencies() )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( 'llm_configurable', false )
			->meta( Prop_Sensitivity::not_exportable() )
			->description( 'Which Mailchimp API key the form uses: "default" is the site key from Integrations, "custom" is a key entered on this form in the editor (agents cannot read or set that key). Keep "default" unless the user already entered a custom key in the editor.' );

		$schema[ self::CUSTOM_API_KEY_PROP ] = String_Prop_Type::make()
			->default( '' )
			->set_dependencies( $this->make_dependencies( [
				'operator' => 'eq',
				'path' => [ self::API_KEY_SOURCE_PROP ],
				'value' => Mailchimp_Action::API_KEY_SOURCE_CUSTOM,
				'effect' => 'hide',
			] ) )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( 'llm_configurable', false )
			->meta( Prop_Sensitivity::sensitive() )
			->description( 'Editor only: Mailchimp API secret when mailchimp-api-key-source is "custom". Set in the editor or Integrations, never via MCP.' );

		$schema[ Mailchimp_Control::AUDIENCE ] = String_Prop_Type::make()
			->default( '' )
			->set_dependencies( $this->make_dependencies() )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( Prop_Sensitivity::not_exportable() )
			->description( 'Mailchimp audience (list) ID when mailchimp is in actions-after-submit. Agents cannot list audiences: set it only when the user gives the ID, otherwise leave it empty for the user to pick in the editor Mailchimp panel.' );

		$schema[ Mailchimp_Control::GROUPS ] = String_Array_Prop_Type::make()
			->set_dependencies( $this->make_dependencies( $audience_dependency ) )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( Prop_Sensitivity::not_exportable() )
			->description( 'Optional Mailchimp group IDs for the selected audience.' );

		$schema['mailchimp-tags'] = String_Prop_Type::make()
			->default( '' )
			->set_dependencies( $this->make_dependencies( $audience_dependency ) )
			->meta( Overridable_Prop_Type::ignore() )
			->description( 'Comma-separated Mailchimp tags applied on successful subscription.' );

		$schema['mailchimp-double-opt-in'] = Boolean_Prop_Type::make()
			->default( false )
			->set_dependencies( $this->make_dependencies( $audience_dependency ) )
			->meta( Overridable_Prop_Type::ignore() )
			->description( 'When true, new subscribers receive a Mailchimp double opt-in confirmation email.' );

		$schema[ Mailchimp_Control::FIELDS_MAP ] = Options_Prop_Type::make()
			->set_dependencies( $this->make_dependencies( $audience_dependency ) )
			->meta( Overridable_Prop_Type::ignore() )
			->meta( Prop_Sensitivity::not_exportable() )
			->description( 'Maps form field IDs to Mailchimp merge fields for the selected audience.' );

		return $schema;
	}

	public function register_controls( array $controls, $element ): array {
		if ( ! ( $element instanceof Atomic_Form ) ) {
			return $controls;
		}

		$this->add_mailchimp_action_chip( $controls );

		array_splice( $controls, $this->get_settings_section_position( $controls ), 0, [ $this->make_mailchimp_section() ] );

		return $controls;
	}

	public function register_ajax_actions( Ajax $ajax ): void {
		$ajax->register_ajax_action( self::AJAX_ACTION, [ $this, 'get_mailchimp_data' ] );
	}

	/**
	 * @throws \Exception
	 */
	public function get_mailchimp_data( array $data ): array {
		Utils::_unstable_get_document_for_edit( $data['editor_post_id'] ?? 0 );

		$resource = $data['resource'] ?? '';

		if ( self::RESOURCE_API_KEY_STATUS === $resource ) {
			return [
				'has_global_key' => '' !== Mailchimp_Action::get_global_api_key(),
			];
		}

		$api_key = Mailchimp_Action::resolve_api_key( $data );

		if ( '' === $api_key ) {
			throw new \Exception( '`api_key` is required.', 400 );
		}

		$handler = new Mailchimp_Handler( $api_key );
		$audience = rawurlencode( (string) ( $data[ Mailchimp_Control::AUDIENCE ] ?? '' ) );

		switch ( $resource ) {
			case Mailchimp_Control::AUDIENCE:
				return $this->filter_empty_mailchimp_options( $this->to_options( $handler->get_lists()['lists'] ) );

			case Mailchimp_Control::GROUPS:
				return $this->to_options( $handler->get_groups( $audience )['groups'] );

			case Mailchimp_Control::FIELDS_MAP:
				return $handler->get_fields( $audience )['fields'];

			default:
				throw new \Exception( 'Invalid resource.', 400 );
		}
	}

	private function to_options( array $items ): array {
		return array_map(
			fn( $value, $label ) => [
				'value' => (string) $value,
				'label' => $label,
			],
			array_keys( $items ),
			$items
		);
	}

	private function filter_empty_mailchimp_options( array $options ): array {
		return array_values(
			array_filter(
				$options,
				static fn( array $option ) => '' !== ( $option['value'] ?? '' )
			)
		);
	}

	private function make_dependencies( array ...$terms ): ?array {
		$dependencies = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'contains',
				'path' => [ self::ACTIONS_PROP ],
				'value' => Action_Type::MAILCHIMP,
				'effect' => 'hide',
			] );

		foreach ( $terms as $term ) {
			$dependencies->where( $term );
		}

		return $dependencies->get();
	}

	private function add_mailchimp_action_chip( array $controls ): void {
		foreach ( $controls as $control ) {
			if ( ! ( $control instanceof Section ) ) {
				continue;
			}

			foreach ( $control->get_items() as $item ) {
				if ( $item instanceof Chips_Control && self::ACTIONS_PROP === $item->get_bind() ) {
					$item->set_options( array_merge( $item->get_props()['options'] ?? [], [
						[
							'label' => __( 'Mailchimp', 'elementor-pro' ),
							'value' => Action_Type::MAILCHIMP,
						],
					] ) );

					return;
				}
			}
		}
	}

	private function get_settings_section_position( array $controls ): int {
		foreach ( $controls as $index => $control ) {
			if ( $control instanceof Section && 'settings' === $control->get_id() ) {
				return $index;
			}
		}

		return count( $controls );
	}

	private function make_mailchimp_section(): Section {
		return Section::make()
			->set_label( __( 'Mailchimp', 'elementor-pro' ) )
			->set_items( $this->make_mailchimp_section_items() );
	}

	private function make_mailchimp_section_items(): array {
		return [
			$this->make_api_key_notice(),
			...$this->make_mailchimp_controls(),
		];
	}

	private function make_api_key_notice(): Mailchimp_Api_Key_Notice_Control {
		return Mailchimp_Api_Key_Notice_Control::bind_to( self::API_KEY_NOTICE_PROP )
			->set_has_global_api_key( '' !== Mailchimp_Action::get_global_api_key() )
			->set_notice_type( 'info' )
			->set_heading( __( 'Connect an API key', 'elementor-pro' ) )
			->set_content( __( 'To use Mailchimp, add your Mailchimp API key in the Integrations settings.', 'elementor-pro' ) )
			->set_button_text( __( 'Set up', 'elementor-pro' ) )
			->set_button_url( Settings::get_settings_tab_url( Settings::TAB_INTEGRATIONS ) );
	}

	private function make_mailchimp_controls(): array {
		return [
			Select_Control::bind_to( self::API_KEY_SOURCE_PROP )
				->set_options( [
					[
						'value' => Mailchimp_Action::API_KEY_SOURCE_DEFAULT,
						'label' => __( 'Default', 'elementor-pro' ),
					],
					[
						'value' => Mailchimp_Action::API_KEY_SOURCE_CUSTOM,
						'label' => __( 'Custom', 'elementor-pro' ),
					],
				] )
				->set_label( __( 'API key', 'elementor-pro' ) ),
			Text_Control::bind_to( self::CUSTOM_API_KEY_PROP )
				->set_label( __( 'Custom API key', 'elementor-pro' ) ),
			Mailchimp_Control::bind_to( Mailchimp_Control::AUDIENCE )
				->set_label( __( 'Audience', 'elementor-pro' ) ),
			Mailchimp_Control::bind_to( Mailchimp_Control::GROUPS )
				->set_label( __( 'Groups', 'elementor-pro' ) ),
			Text_Control::bind_to( 'mailchimp-tags' )
				->set_description( __( 'Add comma separated tags', 'elementor-pro' ) )
				->set_label( __( 'Tags', 'elementor-pro' ) ),
			Switch_Control::bind_to( 'mailchimp-double-opt-in' )
				->set_label( __( 'Double Opt-In', 'elementor-pro' ) ),
			Mailchimp_Control::bind_to( Mailchimp_Control::FIELDS_MAP )
				->set_label( __( 'Field mapping', 'elementor-pro' ) ),
		];
	}
}
