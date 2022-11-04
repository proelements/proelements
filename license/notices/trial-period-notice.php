<?php
namespace ElementorPro\License\Notices;

use Elementor\Core\Admin\Notices\Base_Notice;
use ElementorPro\License\API;
use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Trial_Period_Notice extends Base_Notice {

	/**
	 * Notice ID.
	 */
	const ID = 'elementor_trial_period_promote';

	/**
	 * @inheritDoc
	 */
	public function should_print() {
		return License_API::is_license_active() && License_API::is_licence_pro_trial();
	}

	/**
	 * @inheritDoc
	 */
	public function get_config() {
		$license_data = API::get_license_data();

		$title = sprintf(
			/* translators: %s: Days left to trial expiration. */
			esc_html__( 'Your trial expires in %s', 'elementor-pro' ),
			human_time_diff(
				current_time( 'timestamp' ),
				strtotime( $license_data['expires'] )
			)
		);

		return [
			'id' => static::ID,
			'title' => $title,
			'description' => __( 'Find the plan that matches your needs and enjoy Pro widgets, templates, and support for a whole year.', 'elementor-pro' ),
			'button' => [
				'text' => esc_html__( 'Choose your plan', 'elementor-pro' ),
				'url' => 'https://my.elementor.com/upgrade-subscription/?utm_source=wp-notification-banner&utm_medium=wp-dash&utm_campaign=pro-trial&utm_content=trial-period',
				'new_tab' => true,
				'type' => 'cta',
			],
		];
	}
}
