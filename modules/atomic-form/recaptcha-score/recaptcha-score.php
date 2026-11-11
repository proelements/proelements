<?php
namespace ElementorPro\Modules\AtomicForm\Recaptcha_Score;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Notice_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\Elements\Loader\Frontend_Assets_Loader;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Prop_Duplication_Behavior;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Plugin;
use Elementor\Utils;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Recaptcha_Score extends Atomic_Widget_Base {
	use Has_Template;

	const POSITION_BOTTOM_RIGHT = 'bottomright';
	const POSITION_BOTTOM_LEFT = 'bottomleft';
	const POSITION_INLINE = 'inline';

	const SETUP_NOTICE_PROP = '_recaptcha_score_setup_notice';

	const HANDLER_SCRIPT_HANDLE = 'elementor-pro-atomic-form-recaptcha-score-handler';

	const NEW_UNTIL_VERSION = '4.4';

	public static $widget_description = 'Protect the form from spam with Google\'s score-based reCAPTCHA. Credentials are configured globally in Elementor > Settings > Integrations. Only one per form.';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );

		$this->meta( 'hide_design_tabs', true );
	}

	public static function get_element_type(): string {
		return 'e-form-recaptcha-score';
	}

	public function get_title(): string {
		return esc_html__( 'Score-based reCAPTCHA', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-form-recaptcha';
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
		return [ 'atomic', 'form', 'recaptcha', 'captcha', 'score', 'spam', 'bot', 'protection' ];
	}

	protected static function define_props_schema(): array {
		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'position' => String_Prop_Type::make()
				->enum( [ self::POSITION_BOTTOM_RIGHT, self::POSITION_BOTTOM_LEFT, self::POSITION_INLINE ] )
				->default( self::POSITION_BOTTOM_RIGHT )
				->meta( 'llm_configurable', true )
				->description( 'Where the reCAPTCHA badge is shown: "bottomright" and "bottomleft" pin it to the screen corner, "inline" places it inside the form.' ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() )->meta( 'llm_configurable', true )->description( 'ID of the Score-based reCAPTCHA element, should be unique. Optional, a default is generated' ),
			self::SETUP_NOTICE_PROP => String_Prop_Type::make()
				->default( '' )
				->meta( Overridable_Prop_Type::ignore() )
				->meta( Prop_Duplication_Behavior::clear() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( $this->get_content_controls() ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( $this->get_settings_controls() ),
		];
	}

	protected function get_content_controls(): array {
		$controls = [];

		if ( ! Recaptcha_Score_Settings::has_credentials() ) {
			$controls[] = Notice_Control::bind_to( self::SETUP_NOTICE_PROP )
				->set_notice_type( 'info' )
				->set_heading( esc_html__( 'Connect score-based reCAPTCHA', 'elementor-pro' ) )
				->set_content( esc_html__( 'Set up your score-based reCAPTCHA credentials in Integrations to protect this form from spam.', 'elementor-pro' ) )
				->set_button_text( esc_html__( 'Set up', 'elementor-pro' ) )
				->set_button_url( Recaptcha_Score_Admin::get_section_url() );

			return $controls;
		}

		$controls[] = Select_Control::bind_to( 'position' )
			->set_label( __( 'Position', 'elementor-pro' ) )
			->set_options( [
				[
					'label' => __( 'Bottom Right', 'elementor-pro' ),
					'value' => self::POSITION_BOTTOM_RIGHT,
				],
				[
					'label' => __( 'Bottom Left', 'elementor-pro' ),
					'value' => self::POSITION_BOTTOM_LEFT,
				],
				[
					'label' => __( 'Inline', 'elementor-pro' ),
					'value' => self::POSITION_INLINE,
				],
			] );

		return $controls;
	}

	protected function get_settings_controls(): array {
		return [
			Text_Control::bind_to( '_cssid' )
				->set_label( __( 'ID', 'elementor-pro' ) )
				->set_meta( $this->get_css_id_control_meta() ),
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}

	protected function get_templates(): array {
		return [
			'recaptcha-score' => __DIR__ . '/recaptcha-score.html.twig',
		];
	}

	protected function get_template_extra_context(): array {
		return [
			'site_key' => Recaptcha_Score_Settings::get_site_key(),
			'recaptcha_action' => Recaptcha_Score_Handler::ACTION,
			'token_field' => Recaptcha_Score_Handler::TOKEN_FIELD,
		];
	}

	public function get_script_depends() {
		$depends = parent::get_script_depends();

		if ( ! Plugin::$instance->preview->is_preview_mode() ) {
			$depends[] = self::HANDLER_SCRIPT_HANDLE;
		}

		return $depends;
	}

	public function register_frontend_handlers() {
		$min_suffix = ( Utils::is_script_debug() || Utils::is_elementor_tests() ) ? '' : '.min';

		wp_register_script(
			self::HANDLER_SCRIPT_HANDLE,
			ELEMENTOR_PRO_URL . "assets/js/atomic-form-recaptcha-score-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE ],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	public function render_markdown(): string {
		return '';
	}

	public static function get_inline_styles(): string {
		$base_class = self::get_element_type() . '-base';

		return ".elementor-editor-active .{$base_class} { display: none !important; }";
	}
}
