<?php

namespace ElementorPro\Core\Notifications;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Notification {

	/**
	 * Get the payloads of the notification data shape (e.g. `Email_Message`, `Database_Message`). Those will automatically
	 * be sent over to the appropriate `Actions` under the `Integration_Manager` (using the `notify()` method).
	 * This method is also used to determine notification channels based on user ($notifiable) preferences.
	 *
	 * Returned shape:
	 * [
	 *  $payload1_instance,
	 *  $payload2_instance,
	 * ]
	 *
	 * @param \ElementorPro\Core\Notifications\Traits\Notifiable $notifiable - The notified model.
	 *
	 * @return array
	 */
	public function get_payloads( $notifiable ) {
		return [];
	}
}
