<?php
namespace ElementorPro\Modules\Notes\Notifications;

use ElementorPro\Core\Integrations\Actions\Email\Email_Message;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class User_Replied_Notification extends Base_Notes_Notification {

	protected function create_email_message( $notifiable ) {
		$subject = sprintf(
			/* translators: 1: Note ID, 2: Site name, 3: Page name. */
			esc_html__( 'New reply in Note #%1$s on %2$s - %3$s', 'elementor-pro' ),
			$this->note->get_thread_id(),
			get_bloginfo( 'name' ),
			$this->note->route_title
		);

		return ( new Email_Message() )
			->from( ...$this->get_sender() )
			->to( $notifiable->user_email, $notifiable->display_name )
			->subject( $subject )
			->view( __DIR__ . '/views/email.php', [
				'actor' => $this->actor->display_name,
				/* translators: 1: User display name, 2: Page name, 3: Site name. */
				'heading' => __( '%1$s replied to a note on %2$s at %3$s', 'elementor-pro' ),
				'page' => $this->note->route_title,
				'site_name' => get_bloginfo( 'name' ),
				'note_content' => $this->note->content,
				'note_url' => $this->note->get_url(),
			] );
	}
}
