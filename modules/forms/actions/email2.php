<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Email2 extends Email {

	public function get_name() {
		return 'email2';
	}

	public function get_label() {
		return __( 'Email 2', 'elementor-pro' );
	}

	protected function get_control_id( $control_id ) {
		return $control_id . '_2';
	}

	protected function get_reply_to( $record, $fields ) {
		return isset( $fields['email_reply_to'] ) ? $fields['email_reply_to'] : '';
	}

	public function register_settings_section( $widget ) {
		parent::register_settings_section( $widget );

		$admin_email = get_option( 'admin_email' );

		$widget->update_control(
			$this->get_control_id( 'email_reply_to' ),
			[
				'type' => Controls_Manager::TEXT,
				'default' => $admin_email,
				'placeholder' => $admin_email,
			]
		);

		$widget->update_control(
			$this->get_control_id( 'form_metadata' ),
			[
				'default' => [],
			]
		);
	}
}
