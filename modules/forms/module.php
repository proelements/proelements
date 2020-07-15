<?php
namespace ElementorPro\Modules\Forms;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Forms\Actions;
use ElementorPro\Modules\Forms\Classes;
use ElementorPro\Modules\Forms\Fields;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Controls\Fields_Repeater;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	/**
	 * @var \ElementorPro\Modules\Forms\Classes\Action_Base[]
	 */
	private $form_actions = [];
	/**
	 * @var \ElementorPro\Modules\Forms\Fields\Field_Base[]
	 */
	public $field_types = [];

	public function get_name() {
		return 'forms';
	}

	public function get_widgets() {
		return [
			'Form',
			'Login',
		];
	}

	public function localize_settings( $settings ) {
		$settings = array_replace_recursive( $settings, [
			'i18n' => [
				'x_field' => __( '%s Field', 'elementor-pro' ),
			],
		] );

		return $settings;
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

	public function register_controls() {
		$controls_manager = Plugin::elementor()->controls_manager;

		$controls_manager->register_control( Fields_Repeater::CONTROL_TYPE, new Fields_Repeater() );
		$controls_manager->register_control( Fields_Map::CONTROL_TYPE, new Fields_Map() );
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
		$integration = $this->get_form_actions( $data['service'] );

		if ( ! $integration ) {
			throw new \Exception( 'action_not_found' );
		}

		return $integration->handle_panel_request( $data );
	}

	public function add_form_field_type( $type, $instance ) {
		$this->field_types[ $type ] = $instance;
	}

	public function add_form_action( $id, $instance ) {
		$this->form_actions[ $id ] = $instance;
	}

	public function get_form_actions( $id = null ) {
		if ( $id ) {
			if ( ! isset( $this->form_actions[ $id ] ) ) {
				return null;
			}

			return $this->form_actions[ $id ];
		}

		return $this->form_actions;
	}

	public function register_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'pro_forms_panel_action_data', [ $this, 'forms_panel_action_data' ] );
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'localize_settings' ] );
		add_action( 'elementor/controls/controls_registered', [ $this, 'register_controls' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		//fields
		$this->add_form_field_type( 'time', new Fields\Time() );
		$this->add_form_field_type( 'date', new Fields\Date() );
		$this->add_form_field_type( 'tel', new Fields\Tel() );
		$this->add_form_field_type( 'number', new Fields\Number() );
		$this->add_form_field_type( 'acceptance', new Fields\Acceptance() );
		$this->add_form_field_type( 'upload', new Fields\Upload() );
		$this->add_form_field_type( 'step', new Fields\Step() );

		$this->add_component( 'recaptcha', new Classes\Recaptcha_Handler() );
		$this->add_component( 'recaptcha_v3', new Classes\Recaptcha_V3_Handler() );
		$this->add_component( 'honeypot', new Classes\Honeypot_Handler() );

		// Actions Handlers
		$this->add_form_action( 'email', new Actions\Email() );
		$this->add_form_action( 'email2', new Actions\Email2() );
		$this->add_form_action( 'redirect', new Actions\Redirect() );
		$this->add_form_action( 'webhook', new Actions\Webhook() );
		$this->add_form_action( 'mailchimp', new Actions\Mailchimp() );
		$this->add_form_action( 'drip', new Actions\Drip() );
		$this->add_form_action( 'activecampaign', new Actions\Activecampaign() );
		$this->add_form_action( 'getresponse', new Actions\Getresponse() );
		$this->add_form_action( 'convertkit', new Actions\Convertkit() );
		$this->add_form_action( 'mailerlite', new Actions\Mailerlite() );
		$this->add_form_action( 'slack', new Actions\Slack() );
		$this->add_form_action( 'discord', new Actions\Discord() );

		// Plugins actions

		// MailPoet
		if ( class_exists( '\WYSIJA' ) ) {
			$this->add_form_action( 'mailpoet', new Actions\Mailpoet() );
		}

		// MailPoet
		if ( class_exists( '\MailPoet\API\API' ) ) {
			$this->add_form_action( 'mailpoet3', new Actions\Mailpoet3() );
		}

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
