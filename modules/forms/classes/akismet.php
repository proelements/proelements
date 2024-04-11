<?php
namespace ElementorPro\Modules\Forms\Classes;

use Elementor\Controls_Manager;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Forms\Classes\Ajax_Handler;
use ElementorPro\Modules\Forms\Classes\Form_Record;
use ElementorPro\Modules\Forms\Widgets\Form;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Akismet {

	public function __construct() {
		add_action( 'elementor/element/form/section_steps_settings/after_section_end', [ $this, 'register_settings_section' ] );
		add_action( 'elementor_pro/forms/validation', [ $this, 'validation' ], 10, 2 );
	}

	/**
	 * @param Form $form
	 */
	public function register_settings_section( $form ) {
		if ( ! $this->is_akismet_active() ) {
			return;
		}

		$form->start_controls_section(
			'section_akismet',
			[
				'label' => esc_html__( 'Akismet Spam Protection', 'elementor-pro' ),
			]
		);

		$form->add_control(
			'akismet_info',
			[
				// TODO: Remove define() with the release of Elementor 3.22
				'type' => defined( 'Controls_Manager::ALERT' ) ? Controls_Manager::ALERT : 'alert',
				'alert_type' => 'info',
				'content' => sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'Assign shortcodes to the fields below to enable spam protection on your form. %1$sShow me how%2$s', 'elementor-pro' ),
					'<a href="http://go.elementor.com/widget-form-akismet/" target="_blank">',
					'</a>'
				),
			]
		);

		$form->add_control(
			'akismet_author',
			[
				'label' => esc_html__( 'Name', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'e.g. [field id="name"]',
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$form->add_control(
			'akismet_author_url',
			[
				'label' => esc_html__( 'URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'e.g. [field id="url"]',
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$form->add_control(
			'akismet_author_email',
			[
				'label' => esc_html__( 'Email', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'e.g. [field id="email"]',
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$form->add_control(
			'akismet_content',
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'e.g. [field id="message"]',
				'ai' => [
					'active' => false,
				],
				'label_block' => true,
				'render_type' => 'none',
			]
		);

		$form->end_controls_section();
	}

	private function is_akismet_active() : bool {
		$akismet_key = \Akismet::get_api_key();

		return ! empty( $akismet_key );
	}

	/**
	 * @param Form_Record  $record
	 * @param Ajax_Handler $ajax_handler
	 */
	public function validation( $record, $ajax_handler ) {
		if ( ! $this->is_akismet_active() ) {
			return;
		}

		if ( ! $this->is_spammed( $record ) ) {
			return;
		}

		$ajax_handler->add_error_message(
			esc_html__( 'We couldn’t submit your responses because they seem like spam.', 'elementor-pro' )
		);

		$ajax_handler->add_error( 'akismet', esc_html__( 'Spam detected', 'elementor-pro' ) );
	}

	private function is_spammed( Form_Record $record ) : bool {
		$settings = $record->get( 'form_settings' );

		$params = [];

		$params['comment_author'] = $this->get_parsed_content( $record, $settings['akismet_author'] );
		$params['comment_author_email'] = $this->get_parsed_content( $record, $settings['akismet_author_email'] );
		$params['comment_author_url'] = $this->get_parsed_content( $record, $settings['akismet_author_url'] );
		$params['comment_content'] = $this->get_parsed_content( $record, $settings['akismet_content'] );

		$params['blog'] = get_option( 'home' );
		$params['blog_lang'] = get_locale();
		$params['blog_charset'] = get_option( 'blog_charset' );

		$params['user_ip'] = Utils::get_client_ip();
		$params['referrer'] = wp_get_referer();

		if ( ! empty( $_SERVER['HTTP_USER_AGENT'] ) ) {
			$params['user_agent'] = sanitize_textarea_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) );
		}

		// http://blog.akismet.com/2012/06/19/pro-tip-tell-us-your-comment_type/
		$params['comment_type'] = 'contact-form';

		$ignore = array( 'HTTP_COOKIE', 'HTTP_COOKIE2', 'PHP_AUTH_PW' );
		foreach ( $_SERVER as $key => $value ) {
			if ( ! in_array( $key, $ignore ) && is_string( $value ) ) {
				$params[ $key ] = $value;
			}
		}

		return $this->remote_check_is_spam( $params );
	}

	private function get_parsed_content( $record, $content ) {
		$setting = trim( $content );

		return $record->replace_setting_shortcodes( $setting );
	}

	private function remote_check_is_spam( $params ) {
		$response = \Akismet::http_post( _http_build_query( $params, '', '&' ), 'comment-check' );

		return ( 'true' === $response[1] );
	}
}
