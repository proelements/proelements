<?php
namespace ElementorPro\Modules\Notes\User;

use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Preferences {

	const ENABLE_NOTIFICATIONS = 'elementor_pro_enable_notes_notifications';

	/**
	 * Register actions and hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'profile_personal_options', function ( \WP_User $user ) {
			$this->add_personal_options_settings( $user );
		} );

		add_action( 'personal_options_update', function ( $user_id ) {
			$this->update_personal_options_settings( $user_id );
		} );
	}

	/**
	 * Determine if notifications are enabled for a user.
	 *
	 * @param int $user_id - User ID.
	 *
	 * @return bool
	 */
	public static function are_notifications_enabled( $user_id ) {
		return ! ! Utils::get_user_option_with_default( static::ENABLE_NOTIFICATIONS, $user_id, true );
	}

	/**
	 * Add settings to the "Personal Options".
	 *
	 * @param \WP_User $user - User object.
	 *
	 * @return void
	 */
	protected function add_personal_options_settings( \WP_User $user ) {
		if ( ! $this->has_permissions_to_edit_user( $user->ID ) ) {
			return;
		}

		$option_name = static::ENABLE_NOTIFICATIONS;
		$value = Utils::get_user_option_with_default( $option_name, $user->ID, '1' );

		?>
		<h2><?php echo esc_html__( 'Elementor - Notes', 'elementor-pro' ); ?></h2>
		<table class="form-table" role="presentation">
			<tr>
				<th>
					<label for="<?php echo esc_attr( $option_name ); ?>">
						<?php echo esc_html__( 'Notifications', 'elementor-pro' ); ?>
					</label>
				</th>
				<td>
					<label for="<?php echo esc_attr( $option_name ); ?>">
						<input name="<?php echo esc_attr( $option_name ); ?>" id="<?php echo esc_attr( $option_name ); ?>" type="checkbox" value="1"<?php checked( '1', $value ); ?> />
						<?php echo esc_html__( 'Enable Elementor Notes notifications', 'elementor-pro' ); ?>
					</label>
				</td>
			</tr>
		</table>
		<?php
	}

	/**
	 * Save the settings in the "Personal Options".
	 *
	 * @param int $user_id - User ID.
	 *
	 * @return void
	 */
	protected function update_personal_options_settings( $user_id ) {
		if ( empty( $_POST['_wpnonce'] ) || ! wp_verify_nonce( $_POST['_wpnonce'], 'update-user_' . $user_id ) ) {
			return;
		}

		if ( ! $this->has_permissions_to_edit_user( $user_id ) ) {
			return;
		}

		$option_name = static::ENABLE_NOTIFICATIONS;
		$value = empty( $_POST[ $option_name ] ) ? '0' : '1';

		update_user_option( $user_id, $option_name, sanitize_text_field( $value ) );
	}

	/**
	 * Determine if the current user has permission to view/change notes preferences of a user.
	 *
	 * @param int $user_id
	 *
	 * @return bool
	 */
	protected function has_permissions_to_edit_user( $user_id ) {
		return (
			current_user_can( Capabilities::READ_NOTES ) &&
			current_user_can( 'edit_user', $user_id )
		);
	}
}
