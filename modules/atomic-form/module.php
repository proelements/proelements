<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Core\Experiments\Manager as ExperimentsManager;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Utils as Elementor_Utils;
use Elementor\Widgets_Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;
use ElementorPro\Modules\AtomicForm\Actions\Action_Runner;
use ElementorPro\Modules\AtomicForm\Classes\Akismet;
use ElementorPro\Modules\AtomicForm\Classes\Atomic_Form_Panel_Promotion;
use ElementorPro\Modules\AtomicForm\Input\Input;
use ElementorPro\Modules\AtomicForm\Label\Label;
use ElementorPro\Modules\AtomicForm\Textarea\Textarea;
use ElementorPro\Modules\AtomicForm\Submit_Button\Submit_Button;
use ElementorPro\Modules\AtomicForm\Checkbox\Checkbox;
use ElementorPro\Modules\AtomicForm\Radio_Button\Radio_Button;
use ElementorPro\Plugin;
use ElementorPro\Modules\AtomicForm\Select\Select;
use ElementorPro\Modules\AtomicForm\Date_Picker\Date_Picker;
use ElementorPro\Modules\AtomicForm\Time_Picker\Time_Picker;
use ElementorPro\Modules\AtomicForm\File_Upload\File_Upload;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const MODULE_NAME = 'e-atomic-form';
	const EXPERIMENT_NAME = 'e_pro_atomic_form';
	const AKISMET_LICENSE_FEATURE_NAME = 'akismet';
	const EMAIL_ACTION_COUNT = 2;
	const FORM_ELEMENT_TYPE = 'e-form';

	public function get_name() {
		return self::MODULE_NAME;
	}

	public static function get_form_widget_types(): array {
		$widget_types = [
			self::FORM_ELEMENT_TYPE,
			Input::get_element_type(),
			Label::get_element_type(),
			Textarea::get_element_type(),
			Submit_Button::get_element_type(),
			Checkbox::get_element_type(),
			Radio_Button::get_element_type(),
		];

		if ( version_compare( ELEMENTOR_VERSION, '4.1', '>=' ) ) {
			$widget_types = array_merge( $widget_types, [
				Date_Picker::get_element_type(),
				Time_Picker::get_element_type(),
				Select::get_element_type(),
				File_Upload::get_element_type(),
			] );
		}

		return $widget_types;
	}

	public static function get_form_field_widget_types(): array {
		return array_values( array_diff( self::get_form_widget_types(), [
			self::FORM_ELEMENT_TYPE,
			Label::get_element_type(),
			Submit_Button::get_element_type(),
		] ) );
	}

	public static function get_experimental_data(): array {
		return [
			'name' => self::EXPERIMENT_NAME,
			'title' => esc_html__( 'Atomic Form', 'elementor-pro' ),
			'description' => esc_html__( 'Atomic form widgets. Note: This feature requires the "Atomic Widgets" experiment to be enabled.', 'elementor-pro' ),
			'hidden' => true,
			'default' => ExperimentsManager::STATE_ACTIVE,
			'release_status' => ExperimentsManager::RELEASE_STATUS_DEV,
		];
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_experiment_active() ) {
			return;
		}

		if ( class_exists( '\Akismet' ) && API::is_licence_has_feature( static::AKISMET_LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'akismet', new Akismet() );
		}

		( new Atomic_Form_Panel_Promotion() )->register();

		add_filter(
			'elementor/widgets/register',
			fn( $widgets_manager ) => $this->register_widgets( $widgets_manager )
		);

		add_filter( 'elementor/atomic/form/email_action_count', fn() => self::EMAIL_ACTION_COUNT );

		add_action( 'elementor/frontend/after_enqueue_styles', fn () => $this->add_inline_styles() );

		add_action( 'elementor/editor/before_enqueue_scripts', fn() => $this->enqueue_editor_scripts() );

		add_action( 'init', fn() => Action_Runner::init() );
		if ( Atomic_Form_Controller::is_form_submitted() ) {
			$this->add_component( 'atomic_ajax_handler', new Atomic_Form_Controller() );

			do_action( 'elementor_pro/atomic_forms/form_submitted', $this );
		}
	}

	private function is_experiment_active(): bool {
		return version_compare( ELEMENTOR_VERSION, '4.0', '>=' )
			&& Plugin::elementor()->experiments->is_feature_active( self::EXPERIMENT_NAME )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}

	private function register_widgets( Widgets_Manager $widgets_manager ) {
		$widgets_manager->register( new Input() );
		$widgets_manager->register( new Label() );
		$widgets_manager->register( new Textarea() );
		$widgets_manager->register( new Submit_Button() );
		$widgets_manager->register( new Checkbox() );
		$widgets_manager->register( new Radio_Button() );

		if ( version_compare( ELEMENTOR_VERSION, '4.1', '>=' ) ) {
			$widgets_manager->register( new Date_Picker() );
			$widgets_manager->register( new Time_Picker() );
			$widgets_manager->register( new Select() );
			$widgets_manager->register( new File_Upload() );
		}
	}

	private function enqueue_editor_scripts() {
		$min_suffix = Elementor_Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-atomic-form-editor',
			ELEMENTOR_PRO_URL . 'assets/js/atomic-form-editor' . $min_suffix . '.js',
			[ 'elementor-editor' ],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	private function add_inline_styles() {
		$inline_styles = [
			Textarea::get_inline_styles(),
			Submit_Button::get_inline_styles(),
		];
		wp_add_inline_style( 'elementor-frontend', implode( ' ', $inline_styles ) );
	}

}
