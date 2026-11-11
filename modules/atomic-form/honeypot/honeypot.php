<?php
namespace ElementorPro\Modules\AtomicForm\Honeypot;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;
use ElementorPro\Modules\AtomicForm\Input\Input;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Honeypot extends Atomic_Widget_Base {
	use Has_Template;

	const CSSID_PROP = Default_Id_Provider::CSSID_PROP;

	// Render-only values, injected into the settings so they reach the template on every supported Core.
	const HIDDEN_CLASS_SETTING = '_hidden_class';
	const DETACHED_FORM_ID_SETTING = '_detached_form_id';

	const NEW_UNTIL_VERSION = '4.4';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );

		$this->meta( 'hide_design_tabs', true );
	}

	public static function get_computed_html_tag( array $settings ): string {
		return 'input';
	}

	public static $widget_description = 'Add an invisible spam trap field to the form. No configuration needed. If a bot fills it, the submission is rejected with an error and nothing is sent or stored. Only one per form.';

	public static function get_element_type(): string {
		return 'e-form-honeypot';
	}

	public function get_title(): string {
		return esc_html__( 'Honeypot', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-form-honeypot';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_initial_config() {
		$config = parent::get_initial_config();

		$config['new_until_version'] = self::NEW_UNTIL_VERSION;

		return $config;
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'honeypot', 'spam', 'bot', 'protection' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			// No schema default: a request-scoped generated default would differ between render and submit.
			self::CSSID_PROP => String_Prop_Type::make()
				->meta( Overridable_Prop_Type::ignore() )
				->meta( 'llm_configurable', true )
				->description( 'Optional ID of the field. Leave empty: a neutral unique ID is generated. If set, it must be unique and must not hint at its purpose (no words like honeypot, spam or trap).' ),
		];
	}

	public function get_atomic_settings(): array {
		$settings = parent::get_atomic_settings();
		$settings[ self::CSSID_PROP ] = $this->resolve_field_id( $settings[ self::CSSID_PROP ] ?? null );
		$settings[ self::HIDDEN_CLASS_SETTING ] = self::get_hidden_class();
		$settings[ self::DETACHED_FORM_ID_SETTING ] = self::get_detached_form_id();

		return $settings;
	}

	public function get_atomic_setting( string $key ) {
		$value = parent::get_atomic_setting( $key );

		return self::CSSID_PROP === $key ? $this->resolve_field_id( $value ) : $value;
	}

	/**
	 * Shaped like the id of a regular input, so the trap does not stand out.
	 */
	public static function get_default_field_id( string $element_id ): string {
		return Default_Id_Provider::get_field_id( Input::get_element_type(), $element_id );
	}

	/**
	 * Per-site class, so the hidden field has no class name shared by every site.
	 */
	public static function get_hidden_class(): string {
		return 'e-' . substr( wp_hash( 'e-form-field-hidden-class' ), 0, 7 );
	}

	/**
	 * Points the input at a form that does not exist. WebMCP builds a form's tool schema only from its
	 * associated controls, so agents never see the field, while bots and the form handler still read it.
	 */
	public static function get_detached_form_id(): string {
		return 'e-' . substr( wp_hash( 'e-form-field-form-owner' ), 0, 7 );
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( $this->get_settings_controls() ),
		];
	}

	protected function get_settings_controls(): array {
		return [
			Text_Control::bind_to( self::CSSID_PROP )
				->set_label( __( 'ID', 'elementor-pro' ) )
				->set_meta( $this->get_css_id_control_meta() ),
		];
	}

	protected function get_templates(): array {
		return [
			'honeypot' => __DIR__ . '/honeypot.html.twig',
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	public function render_markdown(): string {
		return '';
	}

	public static function get_inline_styles(): string {
		return '.' . self::get_hidden_class() . ' { display: none !important; }';
	}

	private function resolve_field_id( $value ): string {
		return is_string( $value ) && '' !== $value ? $value : self::get_default_field_id( (string) $this->get_id() );
	}
}
