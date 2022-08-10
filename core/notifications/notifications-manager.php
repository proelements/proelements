<?php

namespace ElementorPro\Core\Notifications;

use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notifications_Manager {

	/**
	 * Send a notification.
	 *
	 * @param \ElementorPro\Core\Notifications\Notification $notification
	 * @param $notifiable
	 *
	 * @throws \Exception
	 *
	 * @return $this
	 */
	public function send( Notification $notification, $notifiable ) {
		$payloads = $notification->get_payloads( $notifiable );

		Plugin::instance()->integrations->run( $payloads );

		return $this;
	}
}
