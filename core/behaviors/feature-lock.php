<?php
namespace ElementorPro\Core\Behaviors;

use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Feature_Lock implements Temp_Lock_Behavior {

	private $config;

	public function __construct( $config = [] ) {
		$this->config = $config;
	}

	public function is_locked() {
		return ! API::is_license_active();
	}

	public function get_config() {
		$utm_args = [
			'utm_source' => '%%utm_source%%', // Will be replaced in the frontend.
			'utm_medium' => '%%utm_medium%%',
			'utm_campaign' => API::is_license_expired()
				? 'renew-license'
				: 'connect-and-activate-license',
			'utm_term' => $this->config['type'],
		];

		$connect_url = Plugin::instance()->license_admin->get_connect_url( $utm_args );

		$renew_url = add_query_arg( $utm_args, 'https://my.elementor.com/subscriptions/' );

		return [
			'is_locked' => $this->is_locked(),
			'badge' => [
				'icon' => 'eicon-lock',
				'text' => esc_html__( 'Pro', 'elementor-pro' ),
			],
			'content' => [
				'heading' => esc_html__( 'You need an active Elementor Pro license', 'elementor-pro' ),
				'description' => esc_html__( 'Your Elementor Pro license is inactive. To access premium Elementor widgets, templates, support & plugin updates activate your Pro license.', 'elementor-pro' ),
			],
			'button' => [
				'text' => API::is_license_expired()
					? esc_html__( 'Renew now', 'elementor-pro' )
					: esc_html__( 'Connect & Activate', 'elementor-pro' ),

				'url' => API::is_license_expired()
					? $renew_url
					: $connect_url,
			],
		];
	}
}
