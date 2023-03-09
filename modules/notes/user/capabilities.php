<?php
namespace ElementorPro\Modules\Notes\User;

use ElementorPro\Plugin;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Capabilities {
	const ENABLE_PERMISSIONS_OPTION = 'elementor_pro_notes_enable_permissions';

	const CREATE_NOTES = 'create_notes_elementor-pro';
	const EDIT_NOTES = 'edit_notes_elementor-pro';
	const EDIT_OTHERS_NOTES = 'edit_others_notes_elementor-pro';
	const DELETE_NOTES = 'delete_notes_elementor-pro';
	const DELETE_OTHERS_NOTES = 'delete_others_notes_elementor-pro';
	const READ_NOTES = 'read_notes_elementor-pro';
	const READ_OTHERS_PRIVATE_NOTES = 'read_others_private_notes_elementor-pro';

	const EDIT_POST = 'edit_post';

	/**
	 * All the capabilities includes the admin permissions
	 *
	 * @return string[]
	 */
	public static function all() {
		return array_merge(
			static::basic(),
			[
				static::EDIT_OTHERS_NOTES,
				static::DELETE_OTHERS_NOTES,
				static::READ_OTHERS_PRIVATE_NOTES,
			]
		);
	}

	/**
	 * All the basic capabilities for regular users
	 *
	 * @return string[]
	 */
	public static function basic() {
		return [
			static::CREATE_NOTES,
			static::EDIT_NOTES,
			static::DELETE_NOTES,
			static::READ_NOTES,
		];
	}

	/**
	 * Check if a user has all the basic Notes capabilities.
	 *
	 * @param \WP_User $user
	 *
	 * @return bool
	 */
	public static function has_all_basic_capabilities( \WP_User $user ) {
		return ( new Collection( static::basic() ) )
			->filter( function ( $cap ) use ( $user ) {
				return ! user_can( $user, $cap );
			} )
			->is_empty();
	}

	/**
	 * Register actions and hooks
	 */
	public function register() {
		add_filter( 'map_meta_cap', function ( $caps, $cap, $user_id, $args ) {
			return $this->map_meta_cap( $caps, $cap, $user_id, $args );
		}, 10, 4 );

		add_action( 'edit_user_profile', function ( \WP_User $user ) {
			$this->render_edit_user_profile_options( $user );
		} );

		add_action( 'edit_user_profile_update', function ( $user_id ) {
			$this->update_user_capabilities( $user_id );
		} );
	}

	/**
	 * Add or remove notes capabilities based on the permission checkbox.
	 *
	 * @param $user_id
	 */
	public function update_user_capabilities( $user_id ) {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is verified in `wp_verify_nonce`
		$wpnonce = Utils::_unstable_get_super_global_value( $_POST, '_wpnonce' );
		$verified_nonce = wp_verify_nonce( $wpnonce, 'update-user_' . $user_id );

		if ( ! $verified_nonce ) {
			return;
		}

		$user = get_user_by( 'id', $user_id );

		if ( ! $this->can_edit_capabilities_of( $user ) ) {
			return;
		}

		$should_add_cap = ! empty( $_POST[ static::ENABLE_PERMISSIONS_OPTION ] );

		foreach ( static::basic() as $cap ) {
			if ( $should_add_cap ) {
				$user->add_cap( $cap );
			} else {
				$user->remove_cap( $cap );
			}
		}
	}

	/**
	 * Render the permission checkbox in the user edit page.
	 *
	 * @param \WP_User $user
	 */
	public function render_edit_user_profile_options( \WP_User $user ) {
		if ( ! $this->can_edit_capabilities_of( $user ) ) {
			return;
		}

		$option_name = static::ENABLE_PERMISSIONS_OPTION;

		?>
		<br/>
		<h2 id="e-notes"><?php echo esc_html__( 'Elementor Notes', 'elementor-pro' ); ?></h2>
		<table class="form-table" role="presentation">
			<tr>
				<th>
					<label>
						<?php echo esc_html__( 'Permissions', 'elementor-pro' ); ?>
					</label>
				</th>
				<td>
					<label for="<?php echo esc_attr( $option_name ); ?>">
						<input
							name="<?php echo esc_attr( $option_name ); ?>"
							id="<?php echo esc_attr( $option_name ); ?>"
							type="checkbox"
							value="true"
							<?php checked( static::has_all_basic_capabilities( $user ) ); ?>
						/>
						<?php echo esc_html__( 'Allow user to access the Notes feature.', 'elementor-pro' ); ?>
					</label>
					<p class="description">
						<?php echo esc_html__( '* Please note that this user will be able to see the list of all site users as part of the tagging ability in Notes.', 'elementor-pro' ); ?>
				</td>
			</tr>
		</table>
		<?php
	}

	/**
	 * Check if the current user can edit the capabilities of the requested user.
	 *
	 * @param $user
	 *
	 * @return bool
	 */
	private function can_edit_capabilities_of( $user ) {
		return current_user_can( 'manage_options' ) &&
			Plugin::elementor()->modules_manager->get_modules( 'web-cli' ) && // Check if the web-cli is exists (BC support)
			$user &&
			! in_array( 'administrator', $user->roles, true ); // Admin permissions cannot be changed.
	}

	/**
	 * Handle the capabilities of the notes
	 *
	 * @param string[] $caps
	 * @param string $cap
	 * @param int $user_id
	 * @param array $args
	 *
	 * @return array
	 */
	private function map_meta_cap( array $caps, $cap, $user_id, array $args ) {
		if (
			! in_array( $cap, static::all(), true ) || // Handle only elementor notes capabilities.
			empty( $args[0] ) // Checking for capability without provide a specific note id.
		) {
			return $caps;
		}

		$note = $args[0] instanceof Note
			? $args[0]
			: Note::query()->find( $args[0] );

		// When note not found don't let the user do nothing.
		if ( ! $note ) {
			$caps[] = 'do_not_allow';

			return $caps;
		}

		// When the user doesn't have read access to one of the post_ids (post_id, route_post_id),
		// any other permission is not allowed.
		$can_read_related_posts = ( new Collection( [ $note->route_post_id, $note->post_id ] ) )
			->unique()
			->filter( function ( $post_id ) use ( $user_id ) {
				if ( ! $post_id ) {
					return false;
				}

				$post_type = get_post_type_object(
					get_post_type( $post_id )
				);

				return ! $post_type || ! user_can( $user_id, $post_type->cap->read_post, $post_id );
			} )
			->is_empty();

		if ( ! $can_read_related_posts ) {
			$caps[] = 'do_not_allow';

			return $caps;
		}

		// If the current user is the author of the notes there are
		// no extra caps to add.
		if ( $note->author_id === $user_id ) {
			return $caps;
		}

		// If the note is private and the current user is not the author of the note
		// It adds "read others private notes" capability.
		// Note: when $args[0] is provided on "create note" it refers to the "parent_id" and not
		// to the actual new note.
		if (
			! $note->is_public
			&& in_array( $cap, [ static::READ_NOTES, static::CREATE_NOTES ], true )
		) {
			$caps[] = static::READ_OTHERS_PRIVATE_NOTES;
		}

		// When trying to edit a note, and the current user is not the author of the note.
		if ( static::EDIT_NOTES === $cap ) {
			$caps[] = static::EDIT_OTHERS_NOTES;
		}

		// When trying to delete a note, and the current user is not the author of the note.
		if ( static::DELETE_NOTES === $cap ) {
			$caps[] = static::DELETE_OTHERS_NOTES;
		}

		return $caps;
	}

	/**
	 * Check whether a user has access to Notes.
	 *
	 * @param int $user_id
	 *
	 * @return bool
	 */
	public static function can_read_notes( $user_id ) {
		return user_can( $user_id, static::READ_NOTES );
	}

	/**
	 * Check whether a user has edit access to specific post.
	 *
	 * @param int $user_id
	 * @param int $post_id
	 *
	 * @return bool
	 */
	public static function can_edit_post( $user_id, $post_id ) {
		if ( empty( $user_id ) || empty( $post_id ) ) {
			return false;
		}

		return user_can( $user_id, static::EDIT_POST, $post_id );
	}
}
