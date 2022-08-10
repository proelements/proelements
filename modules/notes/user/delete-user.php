<?php
namespace ElementorPro\Modules\Notes\User;

use ElementorPro\Modules\Notes\Database\Models\Note;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Delete_User {

	/**
	 * Register actions and hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'delete_user_form', function ( $current_user, $users_to_delete ) {
			$this->on_user_delete_form( $users_to_delete );
		}, 10, 2 );

		add_action( 'delete_user', function ( $id, $reassign, $user ) {
			$this->on_delete_user( $user );
		}, 10, 3 );
	}

	/**
	 * Update `author_display_name` on the note before deleting the author, in order
	 * to allow showing the author display name in the UI even when the user has been deleted.
	 *
	 * @param \WP_User $user
	 */
	private function on_delete_user( \WP_User $user ) {
		Note::query()
			->with_trashed()
			->where( 'author_id', '=', $user->ID )
			->update( [ 'author_display_name' => $user->display_name ] );
	}

	/**
	 * Add a note on user deletion form.
	 *
	 * @param $users_to_delete
	 */
	private function on_user_delete_form( $users_to_delete ) {
		$notes_count = Note::query()
			->where_in( 'author_id', $users_to_delete )
			->count();

		if ( 0 === $notes_count ) {
			return;
		}

		?>
		<h4>
			<?php echo esc_html__( 'Elementor - Notes', 'elementor-pro' ); ?>
		</h4>
		<p>
			<?php
			echo esc_html__(
				'Please note that this user has notes/replies in Elementor Notes feature.',
				'elementor-pro'
			);
			?>
		</p>
		<p>
			<?php
				echo esc_html__(
					'Once deleted, those notes will remain and include an indication that this user was deleted. If you wish, you can manually delete this user\'s notes.',
					'elementor-pro'
				);
			?>
		</p>
		<?php
	}
}
