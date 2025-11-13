<?php

namespace ElementorPro\Core\Integrations\Actions\Email;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email_Message {

	/**
	 * Email sender.
	 *
	 * @var Email_Address
	 */
	public $from;

	/**
	 * Email recipient.
	 *
	 * @var Email_Address
	 */
	public $to;

	/**
	 * Email reply to address.
	 *
	 * @var Email_Address[]
	 */
	public $reply_to = [];

	/**
	 * Email CC recipient.
	 *
	 * @var Email_Address[]
	 */
	public $cc = [];

	/**
	 * Email BCC recipient.
	 *
	 * @var Email_Address[]
	 */
	public $bcc = [];

	/**
	 * Email subject.
	 *
	 * @var string
	 */
	public $subject;

	/**
	 * Email content type.
	 *
	 * @var string
	 */
	public $content_type;

	/**
	 * Email body.
	 *
	 * @var string
	 */
	public $body;

	/**
	 * Email attachments.
	 *
	 * @var array
	 */
	public $attachments = [];

	/**
	 * Email_Message constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		// Set defaults.
		$this->from( get_bloginfo( 'admin_email' ), get_bloginfo( 'name' ) );
	}

	/**
	 * Set the email sender.
	 *
	 * @param string $email
	 * @param string|null $name
	 *
	 * @return $this
	 */
	public function from( $email, $name = null ) {
		$this->from = new Email_Address( $email, $name );

		return $this;
	}

	/**
	 * Set the email recipient.
	 *
	 * @param string $email
	 * @param string|null $name
	 *
	 * @return $this
	 */
	public function to( $email, $name = null ) {
		$this->to = new Email_Address( $email, $name );

		return $this;
	}

	/**
	 * Add a reply to.
	 *
	 * @param string $email
	 * @param string|null $name
	 *
	 * @return $this
	 */
	public function reply_to( $email, $name = null ) {
		$this->reply_to[] = new Email_Address( $email, $name );

		return $this;
	}

	/**
	 * Add a CC.
	 *
	 * @param string $email
	 * @param string|null $name
	 *
	 * @return $this
	 */
	public function cc( $email, $name = null ) {
		$this->cc[] = new Email_Address( $email, $name );

		return $this;
	}

	/**
	 * Add a BCC.
	 *
	 * @param string $email
	 * @param string|null $name
	 *
	 * @return $this
	 */
	public function bcc( $email, $name = null ) {
		$this->bcc[] = new Email_Address( $email, $name );

		return $this;
	}

	/**
	 * Set the email subject.
	 *
	 * @param string $subject
	 *
	 * @return $this
	 */
	public function subject( $subject ) {
		$this->subject = (string) $subject;

		return $this;
	}

	/**
	 * Set the email content type.
	 *
	 * @param string $content_type
	 *
	 * @return $this
	 */
	public function content_type( $content_type ) {
		$this->content_type = (string) $content_type;

		return $this;
	}

	/**
	 * Set the email body using plain text.
	 *
	 * @param string $body
	 * @param string $content_type
	 *
	 * @return $this
	 */
	public function body( $body, $content_type = 'text/html' ) {
		$this->body = (string) $body;

		return $this->content_type( $content_type );
	}

	/**
	 * Set the email body using a view.
	 *
	 * @param string $path - View path,
	 * @param array  $data - Data that will be passes to the view.
	 *
	 * @return $this
	 * @throws \Exception
	 */
	public function view( $path, $data = [] ) {
		if ( ! is_file( $path ) ) {
			throw new \Exception( "`{$path}` is not a valid view." );
		}

		ob_start();

		// Inspired from Laravel's view mechanism:
		//  [1] https://github.dev/illuminate/filesystem/blob/b179f9ea3b3195d1f4b5ae2aee67e42eac6ceb5e/Filesystem.php#L98
		//  [2] https://github.dev/illuminate/view/blob/6dd315634a44450c5e443fa8735d4a526833fad3/Engines/PhpEngine.php#L48
		call_user_func( function( $__view_path, $__view_data ) {
			extract( $__view_data, EXTR_SKIP ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract

			unset( $__view_data );

			// `$__view_data` keys are available in the file as variables.
			require $__view_path;
		}, $path, $data );

		$this->body = ob_get_clean();

		return $this->content_type( 'text/html' );
	}

	/**
	 * Add an attachment.
	 *
	 * @param string $path - Attachment path on the server.
	 *
	 * @return $this
	 */
	public function attach( $path ) {
		$this->attachments[] = (string) $path;

		return $this;
	}
}
