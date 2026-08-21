<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\Modules\AtomicForm\Actions\Email_Settings;
use ElementorPro\Modules\AtomicForm\Classes\Composite_Shortcode_Resolver as Shortcode_Resolver;
use ElementorPro\Modules\AtomicForm\Classes\Metadata_Resolver;
use ElementorPro\Modules\AtomicForm\File_Upload\File_Upload_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email_Action extends Action_Base {

	public function get_type(): string {
		return Action_Type::EMAIL;
	}

	public function execute( array $form_data, array $widget_settings, array $context ): array {
		$settings_key = $context['action_type'] ?? Action_Type::EMAIL;
		$email_settings = new Email_Settings( $widget_settings, $settings_key );

		$from = $email_settings->from();
		$from_name = $email_settings->from_name();
		$subject = $email_settings->subject();
		$content_type = $email_settings->content_type();

		$field_metadata = $context['field_metadata'] ?? [];
		$cssid_map = $context['cssid_map'] ?? [];
		$is_html = 'html' === $content_type;

		$shortcode_resolver = new Shortcode_Resolver( $form_data, $is_html, $field_metadata, $cssid_map );

		$to = $this->resolve_recipients( $shortcode_resolver, $email_settings->to() );
		$cc = $this->resolve_recipients( $shortcode_resolver, $email_settings->cc() );
		$bcc = $this->resolve_recipients( $shortcode_resolver, $email_settings->bcc() );
		$reply_to = $shortcode_resolver->resolve( $email_settings->reply_to() );

		$validation = $this->validate_recipient( $to );

		if ( is_wp_error( $validation ) ) {
			return $this->failure( $validation->get_error_message() );
		}

		$message = $shortcode_resolver->resolve( $email_settings->message() );
		$message = ( new Metadata_Resolver( $email_settings->meta_data(), $context, $is_html ) )->resolve( $message );

		$headers = [];
		$headers[] = sprintf( 'From: %s <%s>', $from_name, $from );
		$headers[] = sprintf( 'Reply-To: %s', $reply_to );

		if ( 'html' === $content_type ) {
			$headers[] = 'Content-Type: text/html; charset=UTF-8';
		}

		if ( ! empty( $cc ) ) {
			$headers[] = sprintf( 'Cc: %s', $cc );
		}

		if ( ! empty( $bcc ) ) {
			$headers[] = sprintf( 'Bcc: %s', $bcc );
		}

		/**
		 * Filter email headers for atomic forms.
		 *
		 * @param array $headers Email headers.
		 * @param array $form_data Form data.
		 * @param array $widget_settings Widget settings.
		 */
		$headers = apply_filters( 'elementor_pro/atomic_forms/email_headers', $headers, $form_data, $widget_settings );

		/**
		 * Filter email message for atomic forms.
		 *
		 * @param string $message Email message.
		 * @param array $form_data Form data.
		 * @param array $widget_settings Widget settings.
		 */
		$message = apply_filters( 'elementor_pro/atomic_forms/email_message', $message, $form_data, $widget_settings );

		$attachments = $this->collect_attachments( $context );

		$email_sent = wp_mail( $to, $subject, $message, $headers, $attachments );

		if ( ! $email_sent ) {
			return $this->failure( __( 'Failed to send email', 'elementor-pro' ) );
		}

		return $this->success( __( 'Email sent successfully', 'elementor-pro' ) );
	}

	private function collect_attachments( array $context ): array {
		$files = $context['files'] ?? [];

		if ( empty( $files ) ) {
			return [];
		}

		$settings_map = $context['file_field_settings'];
		$attachments = [];

		foreach ( $files as $element_id => $paths ) {
			if ( File_Upload_Handler::MODE_LINK === $settings_map[ $element_id ]['attachment-type'] ) {
				continue;
			}

			$attachments = array_merge( $attachments, $paths );
		}

		return $attachments;
	}

	private function resolve_recipients( Shortcode_Resolver $shortcode_resolver, string $recipients ): string {
		$resolved = $shortcode_resolver->resolve( $recipients );

		$addresses = array_filter(
			array_map( 'trim', explode( ',', $resolved ) ),
			function ( $address ) {
				return '' !== $address;
			}
		);

		return implode( ', ', $addresses );
	}

	private function validate_recipient( string $to ) {
		if ( empty( $to ) ) {
			return new \WP_Error(
				'missing_recipient',
				__( 'No valid recipient email address.', 'elementor-pro' )
			);
		}

		if ( is_email( $to ) ) {
			return true;
		}

		$emails = array_map( 'trim', explode( ',', $to ) );

		foreach ( $emails as $email ) {
			if ( ! is_email( $email ) ) {
				return new \WP_Error(
					'invalid_email',
					sprintf(
						/* translators: %s: Invalid email address. */
						__( 'Invalid email address: %s', 'elementor-pro' ),
						$email
					)
				);
			}
		}

		return true;
	}

}
