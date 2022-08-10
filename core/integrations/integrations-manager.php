<?php

namespace ElementorPro\Core\Integrations;

use ElementorPro\Core\Integrations\Actions\Action_Base;
use ElementorPro\Core\Integrations\Actions\Email\Email;
use ElementorPro\Core\Integrations\Actions\Email\Email_Message;
use ElementorPro\Core\Integrations\Exceptions\Action_Failed_Exception;
use ElementorPro\Core\Integrations\Exceptions\Action_Validation_Failed_Exception;
use ElementorPro\Core\Utils\Registrar;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Integrations_Manager {

	/**
	 * Registered action types.
	 *
	 * @var Registrar
	 */
	protected $actions_registrar;

	/**
	 * Integrations_Manager constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->actions_registrar = new Registrar();
	}

	/**
	 * Get an action instance.
	 *
	 * @shortcut `Registrar->get()`.
	 *
	 * @return \ElementorPro\Core\Integrations\Actions\Action_Base|null
	 */
	public function get_action( $id ) {
		if ( ! $this->is_initialized() ) {
			$this->init_actions();
		}

		return $this->actions_registrar->get( $id );
	}

	/**
	 * Run an action for a selected payload.
	 *
	 * @param array|mixed $payloads - Payloads instances to run the actions on.
	 * @param null|string $id - If `$payloads` is not an array, a custom action ID can be provided.
	 *
	 * @return void
	 */
	public function run( $payloads, $id = null ) {
		if ( ! is_array( $payloads ) ) {
			$payloads = $id ? [ $id => $payloads ] : [ $payloads ];
		}

		foreach ( $payloads as $key => $payload ) {
			// Get the action ID for the provided payload type.
			$action_id = is_numeric( $key ) ? get_class( $payload ) : $key;

			/**
			 * @type Action_Base $action
			 */
			$action = $this->get_action( $action_id );

			if ( ! $action ) {
				throw new \Exception( "{$action_id} doesn't have an associated `Action`." );
			}

			if ( ! ( $action instanceof Action_Base ) ) {
				$action_class = get_class( $action );

				throw new \Exception( "{$action_class} is not a valid `Action_Base`." );
			}

			try {
				$action->run( $payload );
			} catch ( Action_Validation_Failed_Exception $e ) {
				$e->log();
			} catch ( Action_Failed_Exception $e ) {
				$e->log();
			}
		}
	}

	/**
	 * Initialize the manager actions.
	 *
	 * @return void
	 */
	protected function init_actions() {
		add_action( 'elementor_pro/core/integrations/actions/register', function ( Registrar $actions_registrar ) {
			$actions_registrar->register( new Email(), Email_Message::class );
		} );

		do_action( 'elementor_pro/core/integrations/actions/register', $this->actions_registrar );
	}

	/**
	 * Determine if the manager is initialized.
	 *
	 * @return boolean
	 */
	protected function is_initialized() {
		return ! ! did_action( 'elementor_pro/core/integrations/actions/register' );
	}
}
