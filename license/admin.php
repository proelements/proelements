<?php
namespace ElementorPro\License;

use Elementor\Core\Admin\Admin_Notices;
use Elementor\Settings;
use Elementor\Utils;
use ElementorPro\Core\Utils as Pro_Utils;
use ElementorPro\Core\Connect\Apps\Activate;
use ElementorPro\License\Data\Controller;
use ElementorPro\License\Notices\Trial_Expired_Notice;
use ElementorPro\License\Notices\Trial_Period_Notice;
use ElementorPro\Plugin;
use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin {
	const API_TEMPLATES_URL = 'https://my.elementor.com/api/connect/v1/library/templates';

	public function __construct() {
		$this->register_rest_controller();
	}

	public function get_installed_time() {
		$installed_time = get_option( '_elementor_pro_installed_time' );

		if ( ! $installed_time ) {
			$installed_time = time();
			update_option( '_elementor_pro_installed_time', $installed_time );
		}

		return $installed_time;
	}

	public static function get_license_key() {
		return "";
	}

	/**
	 * @return Activate
	 */
	private function get_app() {
		return Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );
	}

	public function get_connect_url( $params = [] ) {
		return $this->get_app()->get_admin_url( 'authorize', $params );
	}

	public static function get_url() {
		return "";
	}

	public function rest_remove_pro_templates ( $response, $handler, $request ) {
		$route = $request->get_route();
		if ( $request->get_method() === 'GET' && strpos( $route, '/elementor/v1/template-library/templates' ) !== false ) {
			if ( isset( $response->data['templates'] ) ) {
				$response->data['templates']  = array_filter( $response->data['templates'], function( $item ) {
					return empty( $item['is_pro'] ) || intval( $item['is_pro'] ) === 0;
				});
			}
		}

		return $response;
	}
	public function http_remove_pro_templates ( $response, $parsed_args, $url ) {
		if ( strpos( $url,  static::API_TEMPLATES_URL ) === 0 ) {
			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( is_array( $body ) ) {
				$body = array_filter( $body, function( $item ) {
					return empty( $item['is_pro'] ) || intval( $item['is_pro'] ) === 0;
				});
				$response['body'] = wp_json_encode( array_values( $body ) );
			}
		}
		return $response;
	}

	public function register_actions() {
		add_filter( 'http_response',  [ $this, 'http_remove_pro_templates'], 10, 3 );

		add_filter( 'rest_request_after_callbacks', [ $this, 'rest_remove_pro_templates' ], 10, 3 );
	}

	private function register_rest_controller() {
		new Controller();
	}
}
