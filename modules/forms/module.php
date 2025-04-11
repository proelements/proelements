<?php
namespace ElementorPro\Modules\Forms;

use Elementor\Controls_Manager;
use Elementor\Settings;
use Elementor\Core\Admin\Admin_Notices;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Core\Upgrade\Manager as Upgrade_Manager;

use Elementor\User;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Forms\Data\Controller;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Registrars\Form_Actions_Registrar;
use ElementorPro\Modules\Forms\Registrars\Form_Fields_Registrar;
use ElementorPro\Modules\Forms\Submissions\Component as Form_Submissions_Component;
use ElementorPro\Modules\Forms\Controls\Fields_Repeater;
use ElementorPro\Plugin;
use ElementorPro\License\API;
use ElementorPro\Modules\Forms\Submissions\AdminMenuItems\Submissions_Promotion_Menu_Item;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	/**
	 * @var Form_Actions_Registrar
	 */
	public $actions_registrar;

	/**
	 * @var Form_Fields_Registrar
	 */
	public $fields_registrar;

	const ACTIVITY_LOG_LICENSE_FEATURE_NAME = 'activity-log';
	const CF7DB_LICENSE_FEATURE_NAME = 'cf7db';
	const AKISMET_LICENSE_FEATURE_NAME = 'akismet';

	const WIDGET_NAME_CLASS_NAME_MAP = [
		'form' => 'Form',
		'login' => 'Login',
	];

	public function get_name() {
		return 'forms';
	}

	public function get_widgets() {
		return API::filter_active_features( static::WIDGET_NAME_CLASS_NAME_MAP );
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/forms/assets/scss/frontend.scss`
	 * to `/assets/css/widget-forms.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$widget_styles = $this->get_widgets_style_list();

		foreach ( $widget_styles as $widget_style_name ) {
			wp_register_style(
				$widget_style_name,
				$this->get_css_assets_url( $widget_style_name, null, true, true ),
				[ 'elementor-frontend' ],
				ELEMENTOR_PRO_VERSION
			);
		}
	}

	private function get_widgets_style_list(): array {
		return [
			'widget-form',
			'widget-login',
		];
	}

	public static function find_element_recursive( $elements, $form_id ) {
		foreach ( $elements as $element ) {
			if ( $form_id === $element['id'] ) {
				return $element;
			}

			if ( ! empty( $element['elements'] ) ) {
				$element = self::find_element_recursive( $element['elements'], $form_id );

				if ( $element ) {
					return $element;
				}
			}
		}

		return false;
	}

	public function register_controls( Controls_Manager $controls_manager ) {
		$controls_manager->register( new Fields_Repeater() );
		$controls_manager->register( new Fields_Map() );
	}

	/**
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function forms_panel_action_data( array $data ) {
		$document = Utils::_unstable_get_document_for_edit( $data['editor_post_id'] );

		if ( empty( $data['service'] ) ) {
			throw new \Exception( 'Service required.' );
		}

		/** @var \ElementorPro\Modules\Forms\Classes\Integration_Base $integration */
		$integration = $this->actions_registrar->get( $data['service'] );

		if ( ! $integration ) {
			throw new \Exception( 'Action not found.' );
		}

		return $integration->handle_panel_request( $data );
	}

	/**
	 * @deprecated 3.5.0 Use `fields_registrar->register()` instead.
	 */
	public function add_form_field_type( $type, $instance ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
			__METHOD__,
			'3.5.0',
			'fields_registrar->register()'
		);

		$this->fields_registrar->register( $instance, $type );
	}

	/**
	 * @deprecated 3.5.0 Use `actions_registrar->register()` instead.
	 */
	public function add_form_action( $id, $instance ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
			__METHOD__,
			'3.5.0',
			'actions_registrar->register()'
		);

		$this->actions_registrar->register( $instance, $id );
	}

	/**
	 * @deprecated 3.5.0 Use `actions_registrar->get()` instead.
	 */
	public function get_form_actions( $id = null ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
			__METHOD__,
			'3.5.0',
			'actions_registrar->get()'
		);

		return $this->actions_registrar->get( $id );
	}

	public function register_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'pro_forms_panel_action_data', [ $this, 'forms_panel_action_data' ] );
	}

	/**
	 * Register submissions
	 */
	private function register_submissions_component() {
		$name = Form_Submissions_Component::NAME;

		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_submissions_admin_fields' ] );
		}

		if ( '1' === get_option( 'elementor_' . $name ) ) {
			return;
		}

		$this->add_component( $name, new Form_Submissions_Component() );
	}

	public function register_submissions_admin_fields( Settings $settings ) {
		$settings->add_field(
			Settings::TAB_ADVANCED,
			Settings::TAB_ADVANCED,
			Form_Submissions_Component::NAME,
			[
				'label' => esc_html__( 'Form Submissions', 'elementor-pro' ),
				'field_args' => [
					'type' => 'select',
					'std' => '',
					'options' => [
						'' => esc_html__( 'Enable', 'elementor-pro' ),
						'1' => esc_html__( 'Disable', 'elementor-pro' ),
					],
					'desc' => esc_html__( 'Never lose another submission! Using “Actions After Submit” you can now choose to save all submissions to an internal database.', 'elementor-pro' ),
				],
			],
		);
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
		add_action( 'elementor/controls/register', [ $this, 'register_controls' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		$this->add_component( 'recaptcha', new Classes\Recaptcha_Handler() );
		$this->add_component( 'recaptcha_v3', new Classes\Recaptcha_V3_Handler() );
		$this->add_component( 'honeypot', new Classes\Honeypot_Handler() );

		// Akismet
		if ( class_exists( '\Akismet' ) && API::is_licence_has_feature( static::AKISMET_LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'akismet', new Classes\Akismet() );
		}

		if ( API::is_licence_has_feature( Form_Submissions_Component::NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->register_submissions_component();
		} else {
			add_action( 'elementor/admin/menu/register', function( $admin_menu ) {
				$admin_menu->register( Form_Submissions_Component::PAGE_ID, new Submissions_Promotion_Menu_Item() );
			}, 9 /* After "Settings" */ );
		}

		// Initialize registrars.
		$this->actions_registrar = new Form_Actions_Registrar();
		$this->fields_registrar = new Form_Fields_Registrar();

		// Add Actions as components, that runs manually in the Ajax_Handler

		// Activity Log
		if ( function_exists( 'aal_insert_log' ) && API::is_licence_has_feature( static::ACTIVITY_LOG_LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'activity_log', new Actions\Activity_Log() );
		}

		// Contact Form to Database
		if ( function_exists( 'CF7DBPlugin_init' ) && API::is_licence_has_feature( static::CF7DB_LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'cf7db', new Actions\CF7DB() );
		}

		// Ajax Handler
		if ( Classes\Ajax_Handler::is_form_submitted() ) {
			$this->add_component( 'ajax_handler', new Classes\Ajax_Handler() );

			/**
			 * Elementor form submitted.
			 *
			 * Fires when the form is submitted. This hook allows developers
			 * to add functionality after form submission.
			 *
			 * @since 2.0.0
			 *
			 * @param Module $this An instance of the form module.
			 */
			do_action( 'elementor_pro/forms/form_submitted', $this );
		}
	}
}
