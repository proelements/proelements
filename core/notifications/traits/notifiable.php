<?php

namespace ElementorPro\Core\Notifications\Traits;

use ElementorPro\Core\Notifications\Notification;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Notifiable {

	/**
	 * Notify a Model with a notification.
	 * Syntactic sugar for sending notifications via the `Notifications_Manager`.
	 *
	 * Usage:
	 *  $model->notify( new User_Created_Notification( $new_user ) );
	 *
	 * @param Notification $notification - Notification to send.
	 *
	 * @throws \Exception
	 *
	 * @return void
	 */
	public function notify( Notification $notification ) {
		Plugin::instance()->notifications->send( $notification, $this );
	}
}
