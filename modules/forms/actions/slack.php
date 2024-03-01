<?php

namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Forms\Classes\Action_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Slack extends Action_Base {

	public function get_name() {
		return 'slack';
	}

	public function get_label() {
		return esc_html__( 'Slack', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_slack',
			[
				'label' => esc_html__( 'Slack', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'slack_webhook',
			[
				'label' => esc_html__( 'Webhook URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'https://hooks.slack.com/services/',
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'separator' => 'before',
				'description' => esc_html__( 'Enter the webhook URL that will receive the form\'s submitted data.', 'elementor-pro' ) . ' ' . sprintf( '<a href="%s" target="_blank">%s</a>.', 'https://slack.com/apps/A0F7XDUAZ-incoming-webhooks/', esc_html__( 'Click here for Instructions', 'elementor-pro' ) ),
				'render_type' => 'none',
				'classes' => 'elementor-control-direction-ltr',
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_channel',
			[
				'label' => esc_html__( 'Channel', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_username',
			[
				'label' => esc_html__( 'Username', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_pretext',
			[
				'label' => esc_html__( 'Pre Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_text',
			[
				'label' => esc_html__( 'Description', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'ai' => [
					'active' => false,
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$widget->add_control(
			'slack_add_fields',
			[
				'label' => esc_html__( 'Form Data', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$widget->add_control(
			'slack_add_ts',
			[
				'label' => esc_html__( 'Timestamp', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$widget->add_control(
			'slack_webhook_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'alpha' => false,
				'default' => '#D30C5C',
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['slack_add_ts'],
			$element['slack_add_fields'],
			$element['slack_webhook_color'],
			$element['slack_text'],
			$element['slack_pretext'],
			$element['slack_title'],
			$element['slack_username'],
			$element['slack_webhook'],
			$element['slack_channel']
		);

		return $element;
	}

	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );

		if ( empty( $settings['slack_webhook'] ) || false === strpos( $settings['slack_webhook'], 'https://hooks.slack.com/services/' ) ) {
			return;
		}

		// Build slack webhook data
		$webhook_data = [
			'username' => isset( $settings['slack_username'] ) ? $settings['slack_username'] : '',
		];

		if ( ! empty( $settings['slack_channel'] ) ) {
			$webhook_data['channel'] = $settings['slack_channel'];
		}

		// The nonce already validated
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$referrer = Utils::_unstable_get_super_global_value( $_POST, 'referrer' );

		$attachment = [
			'text' => esc_html__( 'A new Form Submission has been received', 'elementor-pro' ),
			'title' => esc_html__( 'A new Submission', 'elementor-pro' ),
			'color' => isset( $settings['slack_webhook_color'] ) ? $settings['slack_webhook_color'] : '#D30C5C',
			'title_link' => esc_url( $referrer ?? site_url() ),
		];

		if ( ! empty( $settings['slack_title'] ) ) {
			$attachment['title'] = $settings['slack_title'];
		}

		if ( ! empty( $settings['slack_text'] ) ) {
			$attachment['text'] = $settings['slack_text'];
		}

		if ( ! empty( $settings['slack_pretext'] ) ) {
			$attachment['pretext'] = $settings['slack_pretext'];
		}

		if ( ! empty( $settings['slack_add_fields'] ) && 'yes' === $settings['slack_add_fields'] ) {
			// prepare Form Data
			$raw_fields = $record->get( 'fields' );
			$fields = [];
			foreach ( $raw_fields as $id => $field ) {
				$fields[] = [
					'title' => $field['title'] ? $field['title'] : $id,
					'value' => $field['value'],
					'short' => false,
				];
			}

			$attachment['fields'] = $fields;
		}

		if ( ! empty( $settings['slack_add_ts'] ) && 'yes' === $settings['slack_add_ts'] ) {
			$attachment = array_merge( $attachment, [
				'footer' => sprintf(
					/* translators: %s: Elementor. */
					esc_html__( 'Powered by %s', 'elementor-pro' ),
					'Elementor'
				),
				'footer_icon' => is_ssl() ? ELEMENTOR_ASSETS_URL . 'images/logo-icon.png' : null,
				'ts' => time(),
			] );
		}

		$webhook_data['attachments'] = [ $attachment ];

		$webhook_data = apply_filters( 'elementor_pro/forms/slack/webhook_args', $webhook_data );

		$response = wp_remote_post( $settings['slack_webhook'], [
			'headers' => [
				'Content-Type' => 'application/json',
			],
			'body' => wp_json_encode( $webhook_data ),
		] );

		if ( 200 !== (int) wp_remote_retrieve_response_code( $response ) ) {
			throw new \Exception( 'Webhook error.' );
		}
	}
}
