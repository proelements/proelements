<?php
namespace ElementorPro\Modules\Forms\Actions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\Forms\Classes\Action_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Discord extends Action_Base {

	public function get_name() {
		return 'discord';
	}

	public function get_label() {
		return __( 'Discord', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_discord',
			[
				'label' => __( 'Discord', 'elementor-pro' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'discord_webhook',
			[
				'label' => __( 'Webhook URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'https://discordapp.com/api/webhooks/',
				'label_block' => true,
				'separator' => 'before',
				'description' => __( 'Enter the webhook URL that will receive the form\'s submitted data.', 'elementor-pro' ) . ' ' . sprintf( '<a href="%s" target="_blank">%s</a>.', 'https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks', __( 'Click here for Instructions', 'elementor-pro' ) ),
				'render_type' => 'none',
			]
		);

		$widget->add_control(
			'discord_username',
			[
				'label' => __( 'Username', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'discord_avatar_url',
			[
				'label' => __( 'Avatar URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'discord_title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'discord_content',
			[
				'label' => __( 'Description', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'discord_form_data',
			[
				'label' => __( 'Form Data', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$widget->add_control(
			'discord_ts',
			[
				'label' => __( 'Timestamp', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$widget->add_control(
			'discord_webhook_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'alpha' => false,
				'default' => '#D30C5C',
			]
		);

		$widget->end_controls_section();
	}

	public function on_export( $element ) {
		unset(
			$element['discord_avatar_url'],
			$element['discord_content'],
			$element['discord_webhook_color'],
			$element['discord_username'],
			$element['discord_form_data'],
			$element['discord_ts'],
			$element['discord_title'],
			$element['discord_webhook']
		);
	}

	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );

		if ( empty( $settings['discord_webhook'] ) || false === strpos( $settings['discord_webhook'], 'https://discordapp.com/api/webhooks/' ) ) {
			return;
		}

		$page_url = isset( $_POST['referrer'] ) ? $_POST['referrer'] : site_url();
		$color = isset( $settings['discord_webhook_color'] ) ? hexdec( ltrim( $settings['discord_webhook_color'], '#' ) ) : hexdec( '9c0244' );

		// Build discord  webhook data
		$embeds = [
			'title' => isset( $settings['discord_title'] ) ? $settings['discord_title'] : __( 'A new Submission', 'elementor-pro' ),
			'description' => isset( $settings['discord_content'] ) ? $settings['discord_content'] : __( 'A new Form Submission has been received', 'elementor-pro' ),
			'author' => [
				'name'     => isset( $settings['discord_username'] ) ? $settings['discord_username'] : __( 'Elementor Forms', 'elementor-pro' ),
				'url'      => $page_url,
				'icon_url' => isset( $settings['discord_avatar_url'] ) ? $settings['discord_avatar_url'] : null,
			],
			'url' => $page_url,
			'color' => $color,
		];

		if ( ! empty( $settings['discord_form_data'] ) && 'yes' === $settings['discord_form_data'] ) {
			// prepare Form Data
			$raw_fields = $record->get( 'fields' );
			$fields = [];
			foreach ( $raw_fields as $id => $field ) {
				$fields[] = [
					'name'   => $id,
					'value'  => $field['value'],
					'inline' => false,
				];
			}

			$embeds['fields'] = array_values( $fields );
		}

		if ( ! empty( $settings['discord_ts'] ) && 'yes' === $settings['discord_ts'] ) {
			$embeds['timestamp'] = gmdate( \DateTime::ISO8601 );
			$embeds['footer'] = [
				'text' => sprintf( __( 'Powered by %s', 'elementor-pro' ), 'Elementor' ),
				'icon_url' => is_ssl() ? ELEMENTOR_ASSETS_URL . 'images/logo-icon.png' : null,
			];
		}

		$webhook_data = [
			'embeds' => array_values( [ $embeds ] ),
		];

		$webhook_data = apply_filters( 'elementor_pro/forms/discord/webhook_args', $webhook_data );

		$response = wp_remote_post( $settings['discord_webhook'], [
			'body' => wp_json_encode( $webhook_data ),
			'headers' => [ 'Content-Type' => 'application/json; charset=utf-8' ],
		]);

		if ( 204 !== (int) wp_remote_retrieve_response_code( $response ) ) {
			$ajax_handler->add_admin_error_message( 'Discord Webhook Error' );
		}
	}
}
