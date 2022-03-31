<?php
namespace ElementorPro\Modules\Forms;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Data\Controller;
use Elementor\Core\Experiments\Manager;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Forms\Actions;
use ElementorPro\Modules\Forms\Classes;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Registrars\Form_Actions_Registrar;
use ElementorPro\Modules\Forms\Registrars\Form_Fields_Registrar;
use ElementorPro\Modules\Forms\Submissions\Component as Form_Submissions_Component;
use ElementorPro\Modules\Forms\Controls\Fields_Repeater;
use ElementorPro\Plugin;

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

	public function get_name() {
		return 'forms';
	}

	public function get_widgets() {
		return [
			'Form',
			'Login',
		];
	}

	/**
	 * @deprecated 3.1.0
	 */
	public function localize_settings() {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.1.0' );

		return [];
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
		if ( empty( $data['service'] ) ) {
			throw new \Exception( 'service_required' );
		}

		/** @var \ElementorPro\Modules\Forms\Classes\Integration_Base $integration */
		$integration = $this->actions_registrar->get( $data['service'] );

		if ( ! $integration ) {
			throw new \Exception( 'action_not_found' );
		}

		return $integration->handle_panel_request( $data );
	}

	/**
	 * @deprecated 3.5.0 - Use `fields_registrar->register()`.
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
	 * @deprecated 3.5.0 - Use `actions_registrar->register()`.
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
	 * @deprecated 3.5.0 - Use `actions_registrar->get()`.
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
		$experiments_manager = Plugin::elementor()->experiments;
		$name = Form_Submissions_Component::NAME;

		$experiments_manager->add_feature( [
			'name' => $name,
			'title' => esc_html__( 'Form Submissions', 'elementor-pro' ),
			'description' => esc_html__( 'Never lose another submission! Using “Actions After Submit” you can now choose to save all submissions to an internal database.', 'elementor-pro' ),
			'release_status' => Manager::RELEASE_STATUS_STABLE,
			'default' => Manager::STATE_ACTIVE,
		] );

		if ( ! $experiments_manager->is_feature_active( $name ) ) {
			return;
		}

		$this->add_component( $name, new Form_Submissions_Component() );
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'elementor/controls/register', [ $this, 'register_controls' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		$this->add_component( 'recaptcha', new Classes\Recaptcha_Handler() );
		$this->add_component( 'recaptcha_v3', new Classes\Recaptcha_V3_Handler() );
		$this->add_component( 'honeypot', new Classes\Honeypot_Handler() );

		$this->register_submissions_component();

		// Initialize registrars.
		$this->actions_registrar = new Form_Actions_Registrar();
		$this->fields_registrar = new Form_Fields_Registrar();

		// Add Actions as components, that runs manually in the Ajax_Handler

		// Activity Log
		if ( function_exists( 'aal_insert_log' ) ) {
			$this->add_component( 'activity_log', new Actions\Activity_Log() );
		}

		// Contact Form to Database
		if ( function_exists( 'CF7DBPlugin_init' ) ) {
			$this->add_component( 'cf7db', new Actions\CF7DB() );
		}

		// Ajax Handler
		if ( Classes\Ajax_Handler::is_form_submitted() ) {
			$this->add_component( 'ajax_handler', new Classes\Ajax_Handler() );

			/**
			 * Elementor form submitted.
			 *
			 * Fires when the form is submitted.
			 *
			 * @since 2.0.0
			 *
			 * @param Module $this An instance of the form module.
			 */
			do_action( 'elementor_pro/forms/form_submitted', $this );
		}
	}
}
