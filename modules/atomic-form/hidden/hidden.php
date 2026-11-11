<?php
namespace ElementorPro\Modules\AtomicForm\Hidden;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\DynamicTags\Dynamic_Prop_Type;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\Elements\Base\Render_Context;
use Elementor\Modules\AtomicWidgets\Elements\Loader\Frontend_Assets_Loader;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Modules\Components\Transformers\Overridable_Transformer;
use Elementor\Plugin;
use Elementor\Utils;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Hidden extends Atomic_Widget_Base {
	use Has_Template;

	const HANDLER_SCRIPT_HANDLE = 'elementor-pro-atomic-form-hidden-handler';

	const REQUEST_PARAMETER_TAG = 'request-arg';

	const GET_REQUEST_TYPE = 'get';

	const REQUEST_PARAM_SETTING = 'request_param';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( Default_Id_Provider::with_field_id( $data, static::get_element_type() ), $args );

		$this->meta( 'hide_design_tabs', true );
	}

	public static function get_computed_html_tag( array $settings ): string {
		return 'input';
	}

	public static $widget_description = 'Add an invisible field that submits a fixed or dynamic value (for example a UTM parameter, post ID or product ID) with the form.';

	public static function get_element_type(): string {
		return 'e-form-hidden';
	}

	public function get_title(): string {
		return esc_html__( 'Hidden', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-form-hidden';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'hidden', 'utm', 'tracking', 'value' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'label' => String_Prop_Type::make()
				->default( '' )
				->meta( Dynamic_Prop_Type::ignore() )
				->description( 'Name of the field in submissions and emails. Plain text, falls back to "Hidden" when empty' ),
			'value' => String_Prop_Type::make()
				->default( '' )
				->description( 'Submitted value. Accepts dynamic tags such as a URL parameter, the post ID or the page URL' ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() )->meta( 'llm_configurable', true )->description( 'ID of the field, should be unique. Use it in [field id="..."] in emails' ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Text_Control::bind_to( 'label' )
						->set_label( __( 'Label', 'elementor-pro' ) ),
					Text_Control::bind_to( 'value' )
						->set_label( __( 'Default Value', 'elementor-pro' ) ),
				] ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( $this->get_settings_controls() ),
		];
	}

	protected function get_settings_controls(): array {
		return [
			Text_Control::bind_to( '_cssid' )
				->set_label( __( 'ID', 'elementor-pro' ) )
				->set_meta( $this->get_css_id_control_meta() ),
		];
	}

	protected function get_templates(): array {
		return [
			'hidden' => __DIR__ . '/hidden.html.twig',
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	public function get_atomic_settings(): array {
		$settings = parent::get_atomic_settings();
		$settings[ self::REQUEST_PARAM_SETTING ] = $this->get_url_param_config();

		return $settings;
	}

	public function get_script_depends() {
		$depends = parent::get_script_depends();

		if ( $this->get_url_param_config() && ! Plugin::$instance->preview->is_preview_mode() ) {
			$depends[] = self::HANDLER_SCRIPT_HANDLE;
		}

		return $depends;
	}

	public function register_frontend_handlers() {
		$min_suffix = ( Utils::is_script_debug() || Utils::is_elementor_tests() ) ? '' : '.min';

		wp_register_script(
			self::HANDLER_SCRIPT_HANDLE,
			ELEMENTOR_PRO_URL . "assets/js/atomic-form-hidden-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE ],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	// Page caches serve the first visitor's rendered value to everyone, so a GET parameter is read in the browser instead.
	private function get_url_param_config(): ?array {
		if ( $this->is_type_instance() ) {
			return null;
		}

		$value = $this->unwrap_component_origin_value( $this->get_data( 'settings' )['value'] ?? null );

		if ( ! Dynamic_Prop_Type::is_dynamic_prop_value( $value ) || ! empty( $value['disabled'] ) ) {
			return null;
		}

		$tag = $value['value'] ?? [];

		if ( self::REQUEST_PARAMETER_TAG !== ( $tag['name'] ?? null ) ) {
			return null;
		}

		$tag_settings = $tag['settings'] ?? [];
		$request_type = $this->unwrap_tag_setting( $tag_settings['request_type'] ?? self::GET_REQUEST_TYPE );
		$param_name = $this->unwrap_tag_setting( $tag_settings['param_name'] ?? '' );

		if ( self::GET_REQUEST_TYPE !== strtolower( (string) $request_type ) || ! is_string( $param_name ) || '' === $param_name ) {
			return null;
		}

		return [
			'name' => $param_name,
			'before' => $this->get_text_tag_setting( $tag_settings, 'before' ),
			'after' => $this->get_text_tag_setting( $tag_settings, 'after' ),
			'fallback' => $this->get_text_tag_setting( $tag_settings, 'fallback' ),
		];
	}

	private function get_text_tag_setting( array $tag_settings, string $key ): string {
		$setting = $this->unwrap_tag_setting( $tag_settings[ $key ] ?? '' );

		return is_string( $setting ) ? $setting : '';
	}

	// Instance overrides reach the render context already resolved to plain text, so only the component's own value can carry the tag.
	private function unwrap_component_origin_value( $value ) {
		if ( ! is_array( $value ) || Overridable_Prop_Type::get_key() !== ( $value['$$type'] ?? null ) ) {
			return $value;
		}

		$override_key = $value['value']['override_key'] ?? null;
		$overrides = Render_Context::get( Overridable_Transformer::class )['overrides'] ?? [];

		if ( isset( $overrides[ $override_key ] ) ) {
			return null;
		}

		return $value['value']['origin_value'] ?? null;
	}

	private function unwrap_tag_setting( $setting ) {
		return is_array( $setting ) ? ( $setting['value'] ?? null ) : $setting;
	}
}
