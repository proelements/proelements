<?php
namespace ElementorPro\Modules\Social\Classes;

use Elementor\Controls_Manager;
use Elementor\Settings;
use Elementor\Widget_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Social\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Integration with Facebook SDK
 */
class Facebook_SDK_Manager {

	const OPTION_NAME_APP_ID = 'elementor_pro_facebook_app_id';

	public static function get_app_id() {
		return get_option( self::OPTION_NAME_APP_ID, '' );
	}

	public static function get_lang() {
		return get_locale();
	}

	public static function enqueue_meta_app_id() {
		$app_id = self::get_app_id();
		if ( $app_id ) {
			printf( '<meta property="fb:app_id" content="%s" />', esc_attr( $app_id ) );
		}
	}

	/**
	 * @param Widget_Base $widget
	 */
	public static function add_app_id_control( $widget ) {
		if ( ! self::get_app_id() ) {
			$content = sprintf(
				/* translators: 1: Setting Page Link opening tag, 2: Link closing tag. */
				esc_html__( 'Set your Facebook App ID in the %1$sIntegrations Settings%2$s', 'elementor-pro' ),
				sprintf( '<a href="%s" target="_blank">', Settings::get_url() . '#tab-integrations' ),
				'</a>'
			);
			$alert_type = 'warning';
		} else {
			$content = sprintf(
				/* translators: 1: App ID, 2: Setting Page Link opening tag, 3: Link closing tag. */
				esc_html__( 'You are connected to Facebook App %1$s, %2$sChange App%3$s', 'elementor-pro' ),
				self::get_app_id(),
				sprintf( '<a href="%s" target="_blank">', Settings::get_url() . '#tab-integrations' ),
				'</a>'
			);
			$alert_type = 'info';
		}

		$widget->add_control(
			'app_id',
			[
				// TODO: Remove define() with the release of Elementor 3.22
				'type' => defined( 'Controls_Manager::ALERT' ) ? Controls_Manager::ALERT : 'alert',
				'alert_type' => $alert_type,
				'content' => $content,
			]
		);

		$widget->add_control(
			'app_eu_message',
			[
				// TODO: Remove define() with the release of Elementor 3.22
				'type' => defined( 'Controls_Manager::ALERT' ) ? Controls_Manager::ALERT : 'alert',
				'alert_type' => 'info',
				'content' => sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'For visitors from the EU, Facebook widgets will only work for site visitors if they have logged into Facebook and consented to cookies. %1$sLearn more%2$s', 'elementor-pro' ),
					sprintf( '<a href="%s" target="_blank">', 'https://developers.facebook.com/docs/plugins/' ),
					'</a>'
				),
			]
		);
	}

	public function localize_settings( $settings ) {
		$settings['facebook_sdk'] = [
			'lang' => self::get_lang(),
			'app_id' => self::get_app_id(),
		];

		return $settings;
	}

	public function __construct() {
		add_action( 'wp_head', [ __CLASS__, 'enqueue_meta_app_id' ] );
		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localize_settings' ] );

		// The nonce already validated on the options page,
		if ( ! empty( $_POST['option_page'] ) && 'elementor' === $_POST['option_page'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
			$this->validate_sdk();
		}

		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ] );
		}
	}

	public static function get_permalink( $settings = [] ) {
		$post_id = get_the_ID();

		if ( isset( $settings['url_format'] ) && Module::URL_FORMAT_PRETTY === $settings['url_format'] ) {
			return get_permalink( $post_id );
		}

		// Use plain url to avoid losing comments after change the permalink.
		return add_query_arg( 'p', $post_id, home_url() );
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'facebook_sdk', [
			'callback' => function() {
				echo '<hr><h2>' . esc_html__( 'Facebook SDK', 'elementor-pro' ) . '</h2>';

				echo sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'Facebook SDK lets you connect to your %1$sdedicated application%2$s so you can track the Facebook Widgets analytics on your site.', 'elementor-pro' ),
					'<a href="https://developers.facebook.com/docs/apps/register/" target="_blank">',
					'</a>'
				);
				echo '<br><br>';

				echo esc_html__( 'If you are using the Facebook Comments Widget, you can add moderating options through your application. Note that this option will not work on local sites and on domains that don\'t have public access.', 'elementor-pro' );
			},
			'fields' => [
				'pro_facebook_app_id' => [
					'label' => esc_html__( 'App ID', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
						'desc' => sprintf(
							/* translators: 1: Link opening tag, 2: Link closing tag. */
							esc_html__( 'Remember to add the domain to your %1$sApp Domains%2$s', 'elementor-pro' ),
							sprintf( '<a href="%s" target="_blank">', $this->get_app_settings_url() ),
							'</a>'
						),
					],
				],
			],
		] );
	}

	private function get_app_settings_url() {
		$app_id = self::get_app_id();
		if ( $app_id ) {
			return sprintf( 'https://developers.facebook.com/apps/%d/settings/', $app_id );
		} else {
			return 'https://developers.facebook.com/apps/';
		}
	}

	private function validate_sdk() {
		$errors = [];

		// The nonce already validated on the options page,
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$app_id = Utils::_unstable_get_super_global_value( $_POST, 'elementor_pro_facebook_app_id' );

		if ( $app_id ) {
			$response = wp_remote_get( 'https://graph.facebook.com/' . $app_id );

			if ( is_wp_error( $response ) || 200 !== (int) wp_remote_retrieve_response_code( $response ) ) {
				$errors[] = esc_html__( 'Facebook App ID is not valid', 'elementor-pro' );
			}
		}

		$message = implode( '<br>', $errors );

		if ( ! empty( $errors ) ) {
			wp_die( $message, esc_html__( 'Facebook SDK', 'elementor-pro' ), [ 'back_link' => true ] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}
}
