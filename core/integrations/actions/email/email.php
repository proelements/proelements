<?php

namespace ElementorPro\Core\Integrations\Actions\Email;

use ElementorPro\Core\Integrations\Actions\Action_Base;
use ElementorPro\Core\Integrations\Exceptions\Action_Failed_Exception;
use ElementorPro\Core\Integrations\Exceptions\Action_Validation_Failed_Exception;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email extends Action_Base {

	/**
	 * @param Email_Message $payload
	 *
	 * @return void
	 * @throws \Exception
	 */
	public function apply( $payload ) {
		// Set default headers.
		$headers = [
			sprintf( 'Content-Type: %s; charset=UTF-8', $payload->content_type ),
			sprintf( 'From: %s', $payload->from->format() ),
		];

		foreach ( $payload->reply_to as $recipient ) {
			$headers[] = sprintf( 'Reply-To: %s', $recipient->format() );
		}

		// Set CC headers.
		$cc_headers = [];

		foreach ( $payload->cc as $recipient ) {
			$cc_headers[] = sprintf( 'Cc: %s', $recipient->format() );
		}

		// Send email.
		$this->send_mail(
			$payload->to->format(),
			$payload->subject,
			$payload->body,
			implode( PHP_EOL, array_merge( $headers, $cc_headers ) ),
			$payload->attachments
		);

		// Send BCC emails.
		foreach ( $payload->bcc as $bcc ) {
			$this->send_mail(
				$bcc->format(),
				$payload->subject,
				$payload->body,
				implode( PHP_EOL, $headers ),
				$payload->attachments
			);
		}
	}

	/**
	 * @alias `$this->run()`
	 *
	 * @param Email_Message $payload
	 *
	 * @return void
	 *@throws \Exception
	 *
	 */
	public function send( Email_Message $payload ) {
		$this->run( $payload );
	}

	/**
	 * Validate the email message DTO.
	 *
	 * @param Email_Message $payload
	 *
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Validation_Failed_Exception
	 *
	 * @return void
	 */
	public function validate( $payload ) {
		$required_fields = [
			'from',
			'to',
			'subject',
			'body',
			'content_type',
		];

		foreach ( $required_fields as $field ) {
			if ( empty( $payload->{$field} ) ) {
				throw new Action_Validation_Failed_Exception(
					static::class,
					"`Email_Message::$${field}` is required."
				);
			}
		}
	}

	/**
	 * Calls `wp_mail()`. Used for testing.
	 *
	 * @param mixed ...$args
	 *
	 * @return void
	 */
	protected function send_mail( ...$args ) {
		add_action( 'wp_mail_failed', [ $this, 'on_wp_mail_error' ] );

		wp_mail( ...$args );

		remove_action( 'wp_mail_failed', [ $this, 'on_wp_mail_error' ] );
	}

	/**
	 * Throw exception on `wp_mail()` error.
	 *
	 * @param \WP_Error $error
	 *
	 * @throws \ElementorPro\Core\Integrations\Exceptions\Action_Failed_Exception
	 *
	 * @return void
	 */
	public function on_wp_mail_error( \WP_Error $error ) {
		throw new Action_Failed_Exception( static::class, '`wp_mail()` cannot send email', $error );
	}
}
