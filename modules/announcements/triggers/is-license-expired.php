<?php
namespace ElementorPro\Modules\Announcements\Triggers;

use Elementor\Modules\Announcements\Classes\Trigger_Base;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class IsLicenseExpired extends Trigger_Base {

	const META_KEY = '_elementor_pro_announcements_license_expired';

	const MUTED_PERIOD = 1;

	public function after_triggered() {
		update_user_meta( get_current_user_id(), self::META_KEY, time() );
	}

	/**
	 * @return bool
	 */
	public function is_active(): bool {
		if ( ! API::is_license_expired() ) {
			return false;
		}

		$dismissed_time = get_user_meta( get_current_user_id(), self::META_KEY, true );

		if ( ! empty( $dismissed_time ) && $dismissed_time > strtotime( '-' . static::MUTED_PERIOD . ' days' ) ) {
			return false;
		}

		return true;
	}
}
