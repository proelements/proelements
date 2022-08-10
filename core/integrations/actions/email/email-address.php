<?php

namespace ElementorPro\Core\Integrations\Actions\Email;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email_Address {

	/**
	 * Recipient email address.
	 *
	 * @var array
	 */
	public $address;

	/**
	 * Recipient name.
	 *
	 * @var string
	 */
	public $name;

	/**
	 * Email_Address constructor.
	 *
	 * @param string $address
	 * @param string $name
	 *
	 * @return void
	 */
	public function __construct( $address, $name ) {
		$this->address = (string) $address;
		$this->name = (string) $name;
	}

	/**
	 * Format an email to be ready for header (e.g. `Recipient Name <user@email.com>` or `user@email.com`)
	 *
	 * @return string
	 */
	public function format() {
		if ( ! empty( $this->name ) ) {
			return sprintf( '%s <%s>', $this->name, $this->address );
		}

		return sprintf( '%s', $this->address );
	}
}
