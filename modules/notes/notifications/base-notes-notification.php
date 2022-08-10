<?php
namespace ElementorPro\Modules\Notes\Notifications;

use ElementorPro\Core\Notifications\Notification;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\User\Preferences;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Notes_Notification extends Notification {

	/**
	 * @var Note
	 */
	public $note;

	/**
	 * @var array
	 */
	public $exclude;

	/**
	 * @var User
	 */
	public $actor;

	/**
	 * Note_Notification constructor.
	 *
	 * @param Note $note
	 * @param User $actor
	 * @param array $exclude
	 *
	 * @return void
	 */
	public function __construct( Note $note, User $actor, array $exclude = [] ) {
		$this->note = $note;
		$this->exclude = $exclude;
		$this->actor = $actor;
	}

	/**
	 * Get the notification payloads.
	 *
	 * @param User $notifiable
	 *
	 * @return array
	 */
	public function get_payloads( $notifiable ) {
		$exclude = $this->exclude;
		$exclude[] = $this->actor->ID;

		if ( in_array( $notifiable->ID, $exclude, true ) ) {
			return [];
		}

		if ( ! user_can( $notifiable->ID, Capabilities::READ_NOTES, $this->note ) ) {
			return [];
		}

		if ( ! Preferences::are_notifications_enabled( $notifiable->ID ) ) {
			return [];
		}

		return [
			$this->create_email_message( $notifiable ),
		];
	}

	/**
	 * Get the sender email & name.
	 *
	 * @return string[]
	 */
	protected function get_sender() {
		return [
			get_bloginfo( 'admin_email' ),
			$this->actor->display_name . ' (' . esc_html__( 'via Elementor', 'elementor-pro' ) . ')',
		];
	}

	/**
	 * Initialize an `Email_Message` for the current notification.
	 *
	 * @param $notifiable
	 *
	 * @return \ElementorPro\Core\Integrations\Actions\Email\Email_Message
	 */
	abstract protected function create_email_message( $notifiable );
}
