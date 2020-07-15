<?php
namespace ElementorPro\Modules\Social\Classes;

use Elementor\Controls_Manager;
use Elementor\Settings;
use Elementor\Utils;
use Elementor\Widget_Base;
use ElementorPro\Modules\Social\Module;
use ElementorPro\Plugin;

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
			/* translators: %s: Setting Page link. */
			$html = sprintf( __( 'Set your Facebook App ID in the <a href="%s" target="_blank">Integrations Settings</a>', 'elementor-pro' ), Settings::get_url() . '#tab-integrations' );
			$content_classes = 'elementor-panel-alert elementor-panel-alert-warning';
		} else {
			/* translators: 1: App ID, 2: Setting Page link. */
			$html = sprintf( __( 'You are connected to Facebook App %1$s, <a href="%2$s" target="_blank">Change App</a>', 'elementor-pro' ), self::get_app_id(), Settings::get_url() . '#tab-integrations' );
			$content_classes = 'elementor-panel-alert elementor-panel-alert-info';
		}

		$widget->add_control(
			'app_id',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => $html,
				'content_classes' => $content_classes,
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

		if ( ! empty( $_POST['option_page'] ) && 'elementor' === $_POST['option_page'] ) {
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

				/* translators: %s: Facebook App Setting link. */
				echo sprintf( __( 'Facebook SDK lets you connect to your <a href="%s" target="_blank">dedicated application</a> so you can track the Facebook Widgets analytics on your site.', 'elementor-pro' ), 'https://developers.facebook.com/docs/apps/register/' ) .
					 '<br>' .
					 '<br>' .
					 __( 'If you are using the Facebook Comments Widget, you can add moderating options through your application. Note that this option will not work on local sites and on domains that don\'t have public access.', 'elementor-pro' );
			},
			'fields' => [
				'pro_facebook_app_id' => [
					'label' => __( 'App ID', 'elementor-pro' ),
					'field_args' => [
						'type' => 'text',
						/* translators: %s: Facebook App Setting link. */
						'desc' => sprintf( __( 'Remember to add the domain to your <a href="%s" target="_blank">App Domains</a>', 'elementor-pro' ), $this->get_app_settings_url() ),
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

		if ( ! empty( $_POST['elementor_pro_facebook_app_id'] ) ) {
			$response = wp_remote_get( 'https://graph.facebook.com/' . $_POST['elementor_pro_facebook_app_id'] );

			if ( is_wp_error( $response ) || 200 !== (int) wp_remote_retrieve_response_code( $response ) ) {
				$errors[] = __( 'Facebook App ID is not valid', 'elementor-pro' );
			}
		}

		$message = implode( '<br>', $errors );

		if ( ! empty( $errors ) ) {
			wp_die( $message, __( 'Facebook SDK', 'elementor-pro' ), [ 'back_link' => true ] );
		}
	}
}
