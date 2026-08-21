<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email_Settings {
	private $email_settings;

	public function __construct( array $widget_settings, string $settings_key = Action_Type::EMAIL ) {
		$this->email_settings = $widget_settings[ $settings_key ] ?? [];
	}

	public function to() {
		return $this->normalize_address_list( $this->email_settings['to'] ?? null )
			?? get_option( 'admin_email' );
	}

	public function from() {
		return $this->email_settings['from'] ?? 'email@' . Utils::get_site_domain();
	}

	public function from_name() {
		return $this->email_settings['from-name'] ?? get_bloginfo( 'name' );
	}

	public function subject() {
		return $this->email_settings['subject'] ?? sprintf(
			/* translators: %s: Site title. */
			__( 'New message from "%s"', 'elementor-pro' ),
			get_bloginfo( 'name' )
		);
	}

	public function message() {
		return $this->email_settings['message'] ?? '[all-fields]';
	}

	public function reply_to() {
		return $this->email_settings['reply-to'] ?? $this->from();
	}

	public function cc() {
		return $this->normalize_address_list( $this->email_settings['cc'] ?? null ) ?? '';
	}

	public function bcc() {
		return $this->normalize_address_list( $this->email_settings['bcc'] ?? null ) ?? '';
	}

	public function content_type() {
		return $this->email_settings['send-as'] ?? 'html';
	}

	public function meta_data(): array {
		$value = $this->email_settings['meta-data'] ?? [];

		return is_array( $value ) ? $value : [];
	}

	private function normalize_address_list( $value ) {
		if ( is_array( $value ) ) {
			$value = array_filter( array_map( 'trim', array_map( 'strval', $value ) ) );

			return empty( $value ) ? null : implode( ', ', $value );
		}

		if ( is_string( $value ) && '' !== trim( $value ) ) {
			return $value;
		}

		return null;
	}
}
