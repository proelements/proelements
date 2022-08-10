<?php
namespace ElementorPro\Core\Editor;

use ElementorPro\License\API;
use ElementorPro\License\Admin;
use Elementor\Core\Editor\Promotion as Base_Promotion;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Promotion extends Base_Promotion {
	public function get_elements_promotion() {
		if ( API::is_license_active() ) {
			return parent::get_elements_promotion();
		}

		$is_license_expired = API::is_license_expired();

		return [
			/* translators: %s: Widget title. */
			'title' => __( '%s Widget', 'elementor-pro' ),
			'content' => $is_license_expired
				/* translators: %s: Widget title. */
				? __(
					'Renew your Elementor Pro subscription to get %s and dozens more Pro widgets to expand your web-creation toolbox.',
					'elementor-pro'
				)
				/* translators: %s: Widget title. */
				: __(
					'Use %s widget and dozens more pro features to extend your toolbox and build sites faster and better.',
					'elementor-pro'
				),
			'action_button' => $is_license_expired ? [
				'text' => __( 'Renew now', 'elementor-pro' ),
				'url' => 'https://my.elementor.com/subscriptions/?utm_source=%s-pro-widget&utm_medium=wp-dash&utm_campaign=renew-license',
				'classes' => [ 'elementor-button', 'elementor-button-brand' ],
			] : [
				'text' => __( 'Connect & Activate', 'elementor-pro' ),
				'url' => Admin::get_url(),
			],
		];
	}
}
