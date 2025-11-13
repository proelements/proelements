<?php

namespace ElementorPro\Core\Integrations\Actions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Action_Base {

	/**
	 * Validate a payload.
	 *
	 * @param mixed $payload - Payload object instance.
	 *
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Validation_Failed_Exception
	 *
	 * @return mixed
	 */
	abstract public function validate( $payload );

	/**
	 * Apply the action.
	 *
	 * @param mixed $payload - Payload object instance.
	 *
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Failed_Exception
	 *
	 * @return void
	 */
	abstract public function apply( $payload );

	/**
	 * Run the action.
	 *
	 * @param mixed $payload - Payload object instance.
	 *
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Validation_Failed_Exception
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Failed_Exception
	 *
	 * @return void
	 */
	public function run( $payload ) {
		$this->validate( $payload );
		$this->apply( $payload );
	}
}
