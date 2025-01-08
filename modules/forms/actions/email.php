<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Core\Utils\Hints;
use ElementorPro\Core\Utils;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Forms\Classes\Ajax_Handler;
use ElementorPro\Modules\Forms\Classes\Action_Base;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Fields\Upload;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Email extends Action_Base {

	public function get_name() {
		return 'email';
	}

	public function get_label() {
		return esc_html__( 'Email', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			$this->get_control_id( 'section_email' ),
			[
				'label' => $this->get_label(),
				'tab' => Controls_Manager::TAB_CONTENT,
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$this->maybe_add_site_mailer_notice( $widget );

		$widget->add_control(
			$this->get_control_id( 'email_to' ),
			[
				'label' => esc_html__( 'To', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => get_option( 'admin_email' ),
				'ai' => [
					'active' => false,
				],
				'placeholder' => get_option( 'admin_email' ),
				'label_block' => true,
				'title' => esc_html__( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		/* translators: %s: Site title. */
		$default_message = sprintf( esc_html__( 'New message from "%s"', 'elementor-pro' ), get_option( 'blogname' ) );

		$widget->add_control(
			$this->get_control_id( 'email_subject' ),
			[
				'label' => esc_html__( 'Subject', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => $default_message,
				'ai' => [
					'active' => false,
				],
				'placeholder' => $default_message,
				'label_block' => true,
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_content' ),
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'default' => '[all-fields]',
				'ai' => [
					'active' => false,
				],
				'placeholder' => '[all-fields]',
				'description' => sprintf(
					/* translators: %s: The [all-fields] shortcode. */
					esc_html__( 'By default, all form fields are sent via %s shortcode. To customize sent fields, copy the shortcode that appears inside each field and paste it above.', 'elementor-pro' ),
					'<code>[all-fields]</code>'
				),
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$site_domain = Utils::get_site_domain();

		$widget->add_control(
			$this->get_control_id( 'email_from' ),
			[
				'label' => esc_html__( 'From Email', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => 'email@' . $site_domain,
				'ai' => [
					'active' => false,
				],
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_from_name' ),
			[
				'label' => esc_html__( 'From Name', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => get_bloginfo( 'name' ),
				'ai' => [
					'active' => false,
				],
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_reply_to' ),
			[
				'label' => esc_html__( 'Reply-To', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => '',
				],
				'render_type' => 'none',
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_to_cc' ),
			[
				'label' => esc_html__( 'Cc', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'ai' => [
					'active' => false,
				],
				'title' => esc_html__( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_to_bcc' ),
			[
				'label' => esc_html__( 'Bcc', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'ai' => [
					'active' => false,
				],
				'title' => esc_html__( 'Separate emails with commas', 'elementor-pro' ),
				'render_type' => 'none',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			$this->get_control_id( 'form_metadata' ),
			[
				'label' => esc_html__( 'Meta Data', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'label_block' => true,
				'separator' => 'before',
				'default' => [
					'date',
					'time',
					'page_url',
					'user_agent',
					'remote_ip',
					'credit',
				],
				'options' => [
					'date' => esc_html__( 'Date', 'elementor-pro' ),
					'time' => esc_html__( 'Time', 'elementor-pro' ),
					'page_url' => esc_html__( 'Page URL', 'elementor-pro' ),
					'user_agent' => esc_html__( 'User Agent', 'elementor-pro' ),
					'remote_ip' => esc_html__( 'Remote IP', 'elementor-pro' ),
					'credit' => esc_html__( 'Credit', 'elementor-pro' ),
				],
				'render_type' => 'none',
			]
		);

		$widget->add_control(
			$this->get_control_id( 'email_content_type' ),
			[
				'label' => esc_html__( 'Send As', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'html',
				'render_type' => 'none',
				'options' => [
					'html' => esc_html__( 'HTML', 'elementor-pro' ),
					'plain' => esc_html__( 'Plain', 'elementor-pro' ),
				],
			]
		);

		$widget->end_controls_section();
	}

	public function maybe_add_site_mailer_notice( $widget ) {
		$notice_id = 'site_mailer_forms_email_notice';
		if ( ! Hints::should_show_hint( $notice_id ) ) {
			return;
		}
		$notice_content = esc_html__( 'Experiencing email deliverability issues? Get your emails delivered with Site Mailer.', 'elementor-pro' );

		if ( 2 === Utils\Abtest::get_variation( 'plg_site_mailer_submission' ) ) {
			$notice_content = esc_html__( 'Make sure your emails reach the inbox every time with Site Mailer', 'elementor-pro' );
		}

		$widget->add_control(
			$this->get_control_id( 'site_mailer_promo' ),
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => Hints::get_notice_template( [
					'display' => ! Hints::is_dismissed( $notice_id ),
					'type' => 'info',
					'content' => $notice_content,
					'icon' => true,
					'dismissible' => $notice_id,
					'button_text' => Hints::is_plugin_installed( 'site-mailer' ) ? __( 'Activate Plugin', 'elementor-pro' ) : __( 'Install Plugin', 'elementor-pro' ),
					'button_event' => $notice_id,
					'button_data' => [
						'action_url' => Hints::get_plugin_action_url( 'site-mailer' ),
					],
				], true ),
			]
		);
	}

	public function on_export( $element ) {
		$controls_to_unset = [
			'email_to',
			'email_from',
			'email_from_name',
			'email_subject',
			'email_reply_to',
			'email_to_cc',
			'email_to_bcc',
		];

		foreach ( $controls_to_unset as $base_id ) {
			$control_id = $this->get_control_id( $base_id );
			unset( $element['settings'][ $control_id ] );
		}

		return $element;
	}

	/**
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record  $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 */
	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );
		$send_html = 'plain' !== $settings[ $this->get_control_id( 'email_content_type' ) ];
		$line_break = $send_html ? '<br>' : "\n";

		$fields = [
			'email_to' => get_option( 'admin_email' ),
			/* translators: %s: Site title. */
			'email_subject' => sprintf( esc_html__( 'New message from "%s"', 'elementor-pro' ), get_bloginfo( 'name' ) ),
			'email_content' => '[all-fields]',
			'email_from_name' => get_bloginfo( 'name' ),
			'email_from' => get_bloginfo( 'admin_email' ),
			'email_reply_to' => 'noreply@' . Utils::get_site_domain(),
			'email_to_cc' => '',
			'email_to_bcc' => '',
		];

		foreach ( $fields as $key => $default ) {
			$setting = trim( $settings[ $this->get_control_id( $key ) ] );
			$setting = $record->replace_setting_shortcodes( $setting );
			if ( ! empty( $setting ) ) {
				$fields[ $key ] = $setting;
			}
		}

		$email_reply_to = $this->get_reply_to( $record, $fields );

		$fields['email_content'] = $this->replace_content_shortcodes( $fields['email_content'], $record, $line_break );

		$email_meta = '';

		$form_metadata_settings = $settings[ $this->get_control_id( 'form_metadata' ) ];

		foreach ( $record->get( 'meta' ) as $id => $field ) {
			if ( in_array( $id, $form_metadata_settings ) ) {
				$email_meta .= $this->field_formatted( $field ) . $line_break;
			}
		}

		if ( ! empty( $email_meta ) ) {
			$fields['email_content'] .= $line_break . '---' . $line_break . $line_break . $email_meta;
		}

		$headers = sprintf( 'From: %s <%s>' . "\r\n", $fields['email_from_name'], $fields['email_from'] );
		$headers .= sprintf( 'Reply-To: %s' . "\r\n", $email_reply_to );

		if ( $send_html ) {
			$headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
		}

		$cc_header = '';
		if ( ! empty( $fields['email_to_cc'] ) ) {
			$cc_header = 'Cc: ' . $fields['email_to_cc'] . "\r\n";
		}

		/**
		 * Email headers.
		 *
		 * Filters the headers sent when an email is sent from Elementor forms. This
		 * hook allows developers to alter email headers triggered by Elementor forms.
		 *
		 * @since 1.0.0
		 *
		 * @param string|array $headers Additional headers.
		 */
		$headers = apply_filters( 'elementor_pro/forms/wp_mail_headers', $headers );

		/**
		 * Email content.
		 *
		 * Filters the content of the email sent by Elementor forms. This hook allows
		 * developers to alter the content of the email sent by Elementor forms.
		 *
		 * @since 1.0.0
		 *
		 * @param string $email_content Email content.
		 */
		$fields['email_content'] = apply_filters( 'elementor_pro/forms/wp_mail_message', $fields['email_content'] );

		$attachments_mode_attach = $this->get_file_by_attachment_type( $settings['form_fields'], $record, Upload::MODE_ATTACH );
		$attachments_mode_both = $this->get_file_by_attachment_type( $settings['form_fields'], $record, Upload::MODE_BOTH );

		$email_sent = wp_mail(
			$fields['email_to'],
			$fields['email_subject'],
			$fields['email_content'],
			$headers . $cc_header,
			array_merge( $attachments_mode_attach, $attachments_mode_both )
		);

		if ( ! empty( $fields['email_to_bcc'] ) ) {
			$bcc_emails = explode( ',', $fields['email_to_bcc'] );
			foreach ( $bcc_emails as $bcc_email ) {
				wp_mail(
					trim( $bcc_email ),
					$fields['email_subject'],
					$fields['email_content'],
					$headers,
					array_merge( $attachments_mode_attach, $attachments_mode_both )
				);
			}
		}

		foreach ( $attachments_mode_attach as $file ) {
			@unlink( $file );
		}

		/**
		 * Elementor form mail sent.
		 *
		 * Fires when an email was sent successfully by Elementor forms. This
		 * hook allows developers to add functionality after mail sending.
		 *
		 * @since 1.0.0
		 *
		 * @param array       $settings Form settings.
		 * @param Form_Record $record   An instance of the form record.
		 */
		do_action( 'elementor_pro/forms/mail_sent', $settings, $record );

		if ( ! $email_sent ) {
			$message = Ajax_Handler::get_default_message( Ajax_Handler::SERVER_ERROR, $settings );

			$ajax_handler->add_error_message( $message );

			throw new \Exception( $message );
		}
	}

	private function field_formatted( $field ) {
		$formatted = '';
		if ( ! empty( $field['title'] ) ) {
			$formatted = sprintf( '%s: %s', $field['title'], $field['value'] );
		} elseif ( ! empty( $field['value'] ) ) {
			$formatted = sprintf( '%s', $field['value'] );
		}

		return $formatted;
	}

	// Allow overwrite the control_id with a prefix, @see Email2
	protected function get_control_id( $control_id ) {
		return $control_id;
	}

	protected function get_reply_to( $record, $fields ) {
		$email_reply_to  = '';

		if ( ! empty( $fields['email_reply_to'] ) ) {
			$sent_data = $record->get( 'sent_data' );
			foreach ( $record->get( 'fields' ) as $field_index => $field ) {
				if ( $field_index === $fields['email_reply_to'] && ! empty( $sent_data[ $field_index ] ) && is_email( $sent_data[ $field_index ] ) ) {
					$email_reply_to = $sent_data[ $field_index ];
					break;
				}
			}
		}

		return $email_reply_to;
	}

	/**
	 * @param string      $email_content
	 * @param Form_Record $record
	 *
	 * @return string
	 */
	private function replace_content_shortcodes( $email_content, $record, $line_break ) {
		$email_content = do_shortcode( $email_content );
		$all_fields_shortcode = '[all-fields]';

		if ( false !== strpos( $email_content, $all_fields_shortcode ) ) {
			$text = '';
			foreach ( $record->get( 'fields' ) as $field ) {
				// Skip upload fields that only attached to the email
				if ( isset( $field['attachment_type'] ) && Upload::MODE_ATTACH === $field['attachment_type'] ) {
					continue;
				}

				$formatted = $this->field_formatted( $field );
				if ( ( 'textarea' === $field['type'] ) && ( '<br>' === $line_break ) ) {
					$formatted = str_replace( [ "\r\n", "\n", "\r" ], '<br />', $formatted );
				}

				$text .= $formatted . $line_break;
			}

			$email_content = str_replace( $all_fields_shortcode, $text, $email_content );

		}

		return $email_content;
	}

	/**
	 * @param array       $form_fields
	 * @param Form_Record $record
	 * @param string      $type
	 *
	 * @return array
	 */
	private function get_file_by_attachment_type( $form_fields, $record, $type ) {
		return Collection::make( $form_fields )
			->filter( function ( $field ) use ( $type ) {
				return $type === $field['attachment_type'];
			} )
			->map( function ( $field ) use ( $record ) {
				$id = $field['custom_id'];

				return $record->get( 'files' )[ $id ]['path'] ?? null;
			} )
			->filter()
			->flatten()
			->values();
	}
}
