<?php

namespace ElementorPro\Core\Integrations\Exceptions;

use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Exception_Base extends \Exception {

	/**
	 * @var string
	 */
	protected $action;

	/**
	 * @var array
	 */
	protected $meta = [];

	/**
	 * Get a formatted message specific to the current exception type.
	 *
	 * @param string $message
	 *
	 * @return string
	 */
	abstract protected function format_message( $message );

	/**
	 * Exception_Base constructor.
	 *
	 * @param string $action - Action name that failed (ideally the class name, e.g. Email::class).
	 * @param string $message - Message to show.
	 * @param array  $meta   - Exception meta data. Used for logging.
	 *
	 */
	public function __construct( $action, $message = '', $meta = [] ) {
		$this->action = $action;
		$this->meta = $meta;

		$message = $this->format_message( $message );

		parent::__construct( $message );
	}

	/**
	 * Log the exception to Elementor's log.
	 *
	 * @return void
	 */
	public function log() {
		Plugin::elementor()->logger->get_logger()->error( $this->getMessage(), [ 'meta' => $this->meta ] );
	}

	/**
	 * Get the error format.
	 *
	 * @return string
	 */
	public function __toString() {
		return sprintf(
			'%s: %s',
			__CLASS__,
			$this->getMessage()
		);
	}
}
