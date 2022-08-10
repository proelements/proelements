<?php
namespace ElementorPro\License\Notices;

use Elementor\Core\Admin\Notices\Base_Notice;
use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Trial_Expired_Notice extends Base_Notice {

	/**
	 * Notice ID.
	 */
	const ID = 'elementor_trial_expired_promote';

	/**
	 * @inheritDoc
	 */
	public function should_print() {
		return License_API::is_license_expired() && License_API::is_licence_pro_trial();
	}

	/**
	 * @inheritDoc
	 */
	public function get_config() {
		return [
			'id' => static::ID,
			'title' => esc_html__( 'Your trial has expired', 'elementor-pro' ),
			'description' => __( 'Want to continue using Pro to build your website? Choose the plan that\'s right for you!', 'elementor-pro' ),
			'button' => [
				'text' => esc_html__( 'Go Pro', 'elementor-pro' ),
				'url' => 'https://my.elementor.com/upgrade-subscription/?utm_source=wp-notification-banner&utm_medium=wp-dash&utm_campaign=pro-trial&utm_content=trial-expired',
				'new_tab' => true,
				'type' => 'cta',
			],
		];
	}
}
