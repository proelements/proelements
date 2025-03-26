<?php
namespace ElementorPro\License;

use Elementor\Core\Admin\Admin_Notices;
use Elementor\Settings;
use Elementor\Utils;
use ElementorPro\Core\Utils as Pro_Utils;
use ElementorPro\Core\Connect\Apps\Activate;
use ElementorPro\License\Notices\Trial_Expired_Notice;
use ElementorPro\License\Notices\Trial_Period_Notice;
use ElementorPro\Plugin;
use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin {

	const PAGE_ID = 'elementor-license';

	const LICENSE_KEY_OPTION_NAME = 'elementor_pro_license_key';
	const LICENSE_DATA_OPTION_NAME = '_elementor_pro_license_v2_data';
	const LICENSE_DATA_FALLBACK_OPTION_NAME = self::LICENSE_DATA_OPTION_NAME . '_fallback';

	/**
	 * @deprecated 3.6.0 Use `Plugin::instance()->updater` instead.
	 */
	public static $updater = null;

	public static function get_errors_details() {
		$license_page_link = self::get_url();

		return [
			API::STATUS_EXPIRED => [
				'title' => esc_html__( 'Your Elementor Pro license has expired.', 'elementor-pro' ),
				'description' => esc_html__( 'Want to keep creating secure and high-performing websites? Renew your subscription to regain access to all of the Elementor Pro widgets, templates, updates & more', 'elementor-pro' ),
				'button_text' => esc_html__( 'Renew Now', 'elementor-pro' ),
				'button_url' => API::RENEW_URL,
				'button_type' => 'cta',
			],
			API::STATUS_CANCELLED => [
				'title' => esc_html__( 'Your License Is Inactive', 'elementor-pro' ),
				'description' => sprintf(
					/* translators: 1: Bold text opening tag, 2: Bold text closing tag. */
					esc_html__( '%1$sYour license key has been cancelled%2$s (most likely due to a refund request). Please consider acquiring a new license.', 'elementor-pro' ),
					'<strong>',
					'</strong>'
				),
				'button_text' => esc_html__( 'Activate License', 'elementor-pro' ),
				'button_url' => $license_page_link,
			],
			API::STATUS_SITE_INACTIVE => [
				'title' => esc_html__( 'License Mismatch', 'elementor-pro' ),
				'description' => sprintf(
					/* translators: 1: Bold text opening tag, 2: Bold text closing tag. */
					esc_html__( '%1$sYour license key doesn\'t match your current domain%2$s. This is most likely due to a change in the domain URL. Please deactivate the license and then reactivate it again.', 'elementor-pro' ),
					'<strong>',
					'</strong>'
				),
				'button_text' => esc_html__( 'Reactivate License', 'elementor-pro' ),
				'button_url' => $license_page_link,
			],
		];
	}

	public static function deactivate() {
		API::deactivate_license();

		delete_option( self::LICENSE_KEY_OPTION_NAME );
		delete_option( self::LICENSE_DATA_OPTION_NAME );
		delete_option( self::LICENSE_DATA_FALLBACK_OPTION_NAME );
	}

	private static function get_hidden_license_key() {
		$input_string = self::get_license_key();

		$start = 5;
		$length = mb_strlen( $input_string ) - $start - 5;

		$mask_string = preg_replace( '/\S/', 'X', $input_string );
		$mask_string = mb_substr( $mask_string, $start, $length );
		$input_string = substr_replace( $input_string, $mask_string, $start, $length );

		return $input_string;
	}

	/**
	 * @deprecated 3.6.0 Use `Plugin::instance()->updater` instead.
	 *
	 * @return \ElementorPro\License\Updater
	 */
	public static function get_updater_instance() {
		static::$updater = Plugin::instance()->updater;

		return static::$updater;
	}

	public static function get_license_key() {
		return trim( get_option( self::LICENSE_KEY_OPTION_NAME, true ) );
	}

	public static function set_license_key( $license_key ) {
		return update_option( self::LICENSE_KEY_OPTION_NAME, $license_key );
	}

	public function action_activate_license() {
		check_admin_referer( 'elementor-pro-license' );

		$license_key = Pro_Utils::_unstable_get_super_global_value( $_POST, 'elementor_pro_license_key' );

		if ( ! $license_key ) {
			wp_die( esc_html__( 'Please enter your license key.', 'elementor-pro' ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		$data = API::activate_license( $license_key );

		if ( is_wp_error( $data ) ) {
			wp_die( sprintf( '%s (%s) ', wp_kses_post( $data->get_error_message() ), wp_kses_post( $data->get_error_code() ) ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		if ( empty( $data['success'] ) ) {
			$error_msg = API::get_error_message( $data['error'] );
			wp_die( wp_kses_post( $error_msg ), esc_html__( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		self::set_license_key( $license_key );
		API::set_license_data( $data );

		$this->safe_redirect( Pro_Utils::_unstable_get_super_global_value( $_POST, '_wp_http_referer' ) );
	}

	protected function safe_redirect( $url ) {
		wp_safe_redirect( $url );
		die;
	}

	public function action_deactivate_license() {
		check_admin_referer( 'elementor-pro-license' );

		$this->deactivate();

		$this->safe_redirect( Pro_Utils::_unstable_get_super_global_value( $_POST, '_wp_http_referer' ) );
	}

	public function register_page() {
		$menu_text = esc_html__( 'License', 'elementor-pro' );

		add_submenu_page(
			Settings::PAGE_ID,
			$menu_text,
			$menu_text,
			'manage_options',
			self::PAGE_ID,
			[ $this, 'display_page' ]
		);

		if ( API::is_license_expired() ) {
			add_submenu_page(
				Settings::PAGE_ID,
				'',
				sprintf(
					'<strong style="color: #DD132F; display: flex; align-items: center; gap: 8px;">
						<span class="eicon-pro-icon" style="background: white; border-radius: 3px;"></span>
						%s
					</strong>',
					esc_html__( 'Renew Now', 'elementor-pro' )
				),
				'manage_options',
				'elementor_pro_renew_license_menu_link'
			);
		}

		if ( ! API::is_license_expired() && API::is_need_to_show_upgrade_promotion() ) {
			add_submenu_page(
				Settings::PAGE_ID,
				'',
				esc_html__( 'Unlock More Features', 'elementor-pro' ),
				'manage_options',
				'elementor_pro_upgrade_license_menu_link',
			);
		}
	}

	public static function get_url() {
		return admin_url( 'admin.php?page=' . self::PAGE_ID );
	}

	public function display_page() {
		$license_key = self::get_license_key();

		$is_manual_mode = ( isset( $_GET['mode'] ) && 'manually' === $_GET['mode'] );

		if ( $is_manual_mode ) {
			$this->render_manually_activation_widget( $license_key );
			return;
		}

		?>
		<div class="wrap elementor-admin-page-license">
			<h2 class="wp-heading-inline"><?php echo esc_html__( 'License Settings', 'elementor-pro' ); ?></h2>

			<form class="elementor-license-box" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'elementor-pro-license' ); ?>

				<?php if ( empty( $license_key ) ) : ?>

					<h3><?php echo esc_html__( 'Activate License', 'elementor-pro' ); ?></h3>

					<p><?php
						// PHPCS - It's already escaped.
						echo wp_kses_post( $this->get_activate_message() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					?></p>

					<?php
						$connect_url = $this->get_connect_url( [
							'utm_source' => 'license-page',
							'utm_medium' => 'wp-dash',
							'utm_campaign' => 'connect-and-activate-license',
							'utm_term' => 'connect-and-activate',
						] );
					?>
					<div class="elementor-box-action">
						<a class="button button-primary" href="<?php echo esc_url( $connect_url ); ?>">
							<?php echo esc_html__( 'Connect & Activate', 'elementor-pro' ); ?>
						</a>
					</div>
				<?php else :
					$license_data = API::get_license_data( true ); ?>
					<h3>
						<?php $this->render_part_license_status_header( $license_data ); ?>
						<small>
							<?php // Force-refresh this page to re-check the license status. ?>
							<a class="button" href="<?php echo esc_url( static::get_url() . '&check-license=1' ); ?>">
								<i class="eicon-sync" aria-hidden="true"></i>
								<?php echo esc_html__( 'Check license status', 'elementor-pro' ); ?>
							</a>
						</small>

						<small>
							<a class="button" href="https://go.elementor.com/my-account/">
								<?php echo esc_html__( 'My Account', 'elementor-pro' ); ?>
							</a>
						</small>
					</h3>

					<?php $this->render_part_error_notification( $license_data ); ?>

					<p class="e-row-stretch e-row-divider-bottom">
						<span>
						<?php
						$connected_user = $this->get_connected_account();

						if ( $connected_user ) :
							echo sprintf(
								/* translators: %s: Connected user. */
								esc_html__( 'You\'re connected as %s.', 'elementor-pro' ),
								'<strong>' . esc_html( $this->get_connected_account() ) . '</strong>'
							);
						endif;
						?>

						<?php echo esc_html__( 'Want to activate this website by a different license?', 'elementor-pro' ); ?>
						</span>
						<?php
							$switch_license_url = $this->get_switch_license_url( [
								'utm_source' => 'license-page',
								'utm_medium' => 'wp-dash',
								'utm_campaign' => 'connect-and-activate-license',
								'utm_term' => 'switch-license',
							] );
						?>
						<a class="button button-primary" href="<?php echo esc_url( $switch_license_url ); ?>">
							<?php echo esc_html__( 'Switch Account', 'elementor-pro' ); ?>
						</a>
					</p>

					<p class="e-row-stretch">
						<span><?php echo esc_html__( 'Want to deactivate the license for any reason?', 'elementor-pro' ); ?></span>
						<a class="button" href="<?php echo esc_url( $this->get_deactivate_url() ); ?>">
							<?php echo esc_html__( 'Disconnect', 'elementor-pro' ); ?>
						</a>
					</p>
				<?php endif; ?>
			</form>
			<?php if ( License_API::TIER_ESSENENTIAL === License_API::get_access_tier() ) : ?>
				<p id="tier-upgrade-promotion" class="elementor-license-box e-row-stretch">
					<span><?php echo esc_html__( 'Get more advanced features', 'elementor-pro' ); ?></span>
					<a class="button elementor-upgrade-link" target="_blank" href="https://go.elementor.com/go-pro-advanced-license-screen/">
						<?php echo esc_html__( 'Upgrade now', 'elementor-pro' ); ?>
					</a>
				</p>
			<?php endif; ?>
		</div>
		<?php
	}

	private function render_part_license_status_header( $license_data ) {
		$license_errors = [
			API::STATUS_EXPIRED => esc_html__( 'Expired', 'elementor-pro' ),
			API::STATUS_SITE_INACTIVE => esc_html__( 'Mismatch', 'elementor-pro' ),
			API::STATUS_CANCELLED => esc_html__( 'Cancelled', 'elementor-pro' ),
			API::STATUS_HTTP_ERROR => esc_html__( 'HTTP Error', 'elementor-pro' ),
			API::STATUS_MISSING => esc_html__( 'Missing', 'elementor-pro' ),
			API::STATUS_REQUEST_LOCKED => esc_html__( 'Request Locked', 'elementor-pro' ),
		];

		echo esc_html__( 'Status', 'elementor-pro' ); ?>:
		<?php if ( $license_data['success'] ) : ?>
			<span style="color: #008000; font-style: italic;"><?php echo esc_html__( 'Active', 'elementor-pro' ); ?></span>

			<?php
			$redirect_to_document = Pro_Utils::_unstable_get_super_global_value( $_GET, 'redirect-to-document' ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended

			if ( ! empty( $redirect_to_document ) ) :
				$this->redirect_to_document( $redirect_to_document );
			endif;
			?>
		<?php else : ?>
			<span style="color: #ff0000; font-style: italic;">
				<?php
				echo isset( $license_data['error'], $license_errors[ $license_data['error'] ] )
					? esc_html( $license_errors[ $license_data['error'] ] )
					: esc_html__( 'Unknown', 'elementor-pro' ) . ' (' . esc_html( $license_data['error'] ) . ')';
				?>
			</span>
		<?php endif;
	}

	private function render_part_error_notification( $license_data ) {
		if ( $license_data['success'] || ! isset( $license_data['error'] ) ) {
			return;
		}

		if ( API::STATUS_EXPIRED === $license_data['error'] ) : ?>
			<p class="e-row-divider-bottom elementor-admin-alert elementor-alert-danger">
				<?php echo sprintf(
					/* translators: 1: Bold text opening tag, 2: Bold text closing tag, 3: Link opening tag, 4: Link closing tag. */
					esc_html__( '%1$sYour Elementor Pro license has expired.%2$s Want to keep creating secure and high-performing websites? Renew your subscription to regain access to all of the Elementor Pro widgets, templates, updates & more. %3$sRenew now%4$s', 'elementor-pro' ),
					'<strong>',
					'</strong>',
					'<a href="https://go.elementor.com/renew/" target="_blank"><strong>',
					'</strong></a>'
				); ?>
			</p>
		<?php endif; ?>

		<?php if ( API::STATUS_SITE_INACTIVE === $license_data['error'] ) : ?>
			<p class="e-row-divider-bottom elementor-admin-alert elementor-alert-danger">
				<?php echo sprintf(
					/* translators: 1: Bold text opening tag, 2: Bold text closing tag. */
					esc_html__( '%1$sYour license key doesn\'t match your current domain%2$s. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ),
					'<strong>',
					'</strong>'
				); ?>
			</p>
		<?php endif;
	}

	private function is_block_editor_page() {
		$current_screen = get_current_screen();

		if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
			return true;
		}

		if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
			return true;
		}

		return false;
	}

	public function admin_license_details() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( $this->is_block_editor_page() ) {
			return;
		}

		$renew_url = API::RENEW_URL;

		$license_key = self::get_license_key();

		/**
		 * @var Admin_Notices $admin_notices
		 */
		$admin_notices = Plugin::elementor()->admin->get_component( 'admin-notices' );

		if ( empty( $license_key ) ) {
			$admin_notices->print_admin_notice( [
				'title' => esc_html__( 'Welcome to Elementor Pro!', 'elementor-pro' ),
				'description' => $this->get_activate_message(),
				'button' => [
					'text' => '<i class="dashicons dashicons-update" aria-hidden="true"></i>' . esc_html__( 'Connect & Activate', 'elementor-pro' ),
					'url' => $this->get_connect_url( [
						'utm_source' => 'wp-notification-banner',
						'utm_medium' => 'wp-dash',
						'utm_campaign' => 'connect-and-activate-license',
					] ),
				],
			] );

			return;
		}

		$license_data = API::get_license_data();

		// When the license with pro trial, the messages here are not relevant, pro trial messages will be shown instead.
		if ( API::is_licence_pro_trial() ) {
			return;
		}

		$errors = self::get_errors_details();

		if ( ! $license_data['success'] && isset( $license_data['error'], $errors[ $license_data['error'] ] ) ) {
			$error_data = $errors[ $license_data['error'] ];

			$admin_notices->print_admin_notice( [
				'title' => $error_data['title'],
				'description' => $error_data['description'],
				'button' => [
					'text' => $error_data['button_text'],
					'url' => $error_data['button_url'],
					'type' => isset( $error_data['button_type'] )
						? $error_data['button_type']
						: '',
				],
			] );

			return;
		}

		$should_show_renew_license_notice = apply_filters( 'elementor_pro/license/should_show_renew_license_notice', true );

		if ( API::is_license_active() && API::is_license_about_to_expire() && $should_show_renew_license_notice ) {
			$title = sprintf(
				/* translators: %s: Days to expire. */
				esc_html__( 'Your License Will Expire in %s.', 'elementor-pro' ),
				human_time_diff(
					current_time( 'timestamp' ),
					strtotime( $license_data['expires'] )
				)
			);

			if ( isset( $license_data['renewal_discount'] ) && 0 < $license_data['renewal_discount'] ) {
				$description = sprintf(
					/* translators: %s: Discount percent. */
					esc_html__( 'Renew your license today, and get an exclusive, time-limited %s discount.', 'elementor-pro' ),
					$license_data['renewal_discount'] . '%'
				);
			} else {
				$description = esc_html__( 'Renew your license today, to keep getting feature updates, premium support, Pro widgets & unlimited access to the template library.', 'elementor-pro' );
			}

			$should_show_renew_license_notice = apply_filters( 'elementor_pro/license/should_show_renew_license_notice', true );

			if ( ! $should_show_renew_license_notice ) {
				return;
			}

			$admin_notices->print_admin_notice( [
				'title' => $title,
				'description' => $description,
				'type' => 'warning',
				'button' => [
					'text' => esc_html__( 'Renew now', 'elementor-pro' ),
					'url' => $renew_url,
					'type' => 'warning',
				],
			]);
		}
	}

	public function filter_library_get_templates_args( $body_args ) {
		$license_key = self::get_license_key();

		if ( ! empty( $license_key ) ) {
			$body_args['license'] = $license_key;
			$body_args['url'] = home_url();
		}

		return $body_args;
	}

	public function handle_tracker_actions() {
		// Show tracker notice after 24 hours from Pro installed time.
		$is_need_to_show = ( $this->get_installed_time() < strtotime( '-24 hours' ) );

		$is_dismiss_notice = ( '1' === get_option( 'elementor_tracker_notice' ) );
		$is_dismiss_pro_notice = ( '1' === get_option( 'elementor_pro_tracker_notice' ) );

		if ( $is_need_to_show && $is_dismiss_notice && ! $is_dismiss_pro_notice ) {
			delete_option( 'elementor_tracker_notice' );
		}

		if ( ! $this->is_opt_out_request() || ! $this->is_valid_opt_out_nonce() ) {
			return;
		}

		update_option( 'elementor_pro_tracker_notice', '1' );
	}

	public function get_installed_time() {
		$installed_time = get_option( '_elementor_pro_installed_time' );

		if ( ! $installed_time ) {
			$installed_time = time();
			update_option( '_elementor_pro_installed_time', $installed_time );
		}

		return $installed_time;
	}

	public function plugin_action_links( $links ) {
		$license_key = self::get_license_key();

		if ( empty( $license_key ) ) {
			$links['active_license'] = sprintf(
				'<a href="%s" class="elementor-plugins-gopro">%s</a>',
				self::get_connect_url([
					'utm_source' => 'wp-plugins',
					'utm_medium' => 'wp-dash',
					'utm_campaign' => 'connect-and-activate-license',
				]),
				__( 'Connect & Activate', 'elementor-pro' )
			);
		}

		if ( API::is_license_expired() ) {
			$links['renew_license'] = sprintf(
				'<a href="%s" class="elementor-plugins-gopro" target="_blank">%s</a>',
				'https://go.elementor.com/wp-plugins-renew/',
				__( 'Renew Now', 'elementor-pro' )
			);
		}

		return $links;
	}

	public function plugin_auto_update_setting_html( $html, $plugin_file ) {
		$license_data = API::get_license_data();

		if ( ELEMENTOR_PRO_PLUGIN_BASE === $plugin_file && ! $license_data['success'] ) {
			return '<span class="label">' . esc_html__( '(unavailable)', 'elementor-pro' ) . '</span>';
		}

		return $html;
	}

	private function handle_dashboard_admin_widget() {
		add_action( 'elementor/admin/dashboard_overview_widget/after_version', function() {
			/* translators: %s: Elementor Pro version. */
			$label = sprintf( esc_html__( 'Elementor Pro v%s', 'elementor-pro' ), ELEMENTOR_PRO_VERSION );

			echo '<span class="e-overview__version">';
			Utils::print_unescaped_internal_string( $label );
			echo '</span>';
		} );

		add_filter( 'elementor/admin/dashboard_overview_widget/footer_actions', function( $additions_actions ) {

			unset( $additions_actions['go-pro'] );

			if ( current_user_can( 'manage_options' ) ) {
				// Using 'go-pro' key to style the 'renew' button as the 'go-pro' button
				if ( API::is_license_expired() ) {
					$additions_actions['go-pro'] = [
						'title' => esc_html__( 'Renew Now', 'elementor-pro' ),
						'link' => 'https://go.elementor.com/overview-widget-renew/',
					];
				} elseif ( API::is_need_to_show_upgrade_promotion() ) {
					$additions_actions['go-pro'] = [
						'title' => esc_html__( 'Upgrade', 'elementor-pro' ),
						'link' => 'https://go.elementor.com/go-pro-advanced-wordpress-elementor-overview/',
					];
				}
			}

			return $additions_actions;
		}, 550 );
	}

	public function add_finder_item( array $categories ) {
		$categories['settings']['items']['license'] = [
			'title' => esc_html__( 'License', 'elementor-pro' ),
			'url' => self::get_url(),
		];

		return $categories;
	}

	private function render_manually_activation_widget( $license_key ) {
		?>
		<div class="wrap elementor-admin-page-license">
			<h2><?php echo esc_html__( 'License Settings', 'elementor-pro' ); ?></h2>

			<form class="elementor-license-box" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'elementor-pro-license' ); ?>

				<h3>
					<?php echo esc_html__( 'Activate Manually', 'elementor-pro' ); ?>
					<?php if ( empty( $license_key ) ) : ?>
						<small>
							<a href="<?php echo esc_url( $this->get_connect_url() ); ?>" class="elementor-connect-link">
								<?php echo esc_html__( 'Connect & Activate', 'elementor-pro' ); ?>
							</a>
						</small>
					<?php endif; ?>
				</h3>

				<?php if ( empty( $license_key ) ) : ?>

					<p><?php echo esc_html__( 'Enter your license key here, to activate Elementor Pro, and get feature updates, premium support and unlimited access to the template library.', 'elementor-pro' ); ?></p>

					<ol>
						<li>
							<?php echo sprintf(
								/* translators: 1: Link opening tag, 2: Link closing tag. */
								esc_html__( 'Log in to %1$syour account%2$s to get your license key.', 'elementor-pro' ),
								'<a href="https://go.elementor.com/my-license/" target="_blank">',
								'</a>'
							); ?>
						</li>
						<li>
							<?php echo sprintf(
								/* translators: 1: Link opening tag, 2: Link closing tag. */
								esc_html__( 'If you don\'t yet have a license key, %1$sget Elementor Pro now%2$s.', 'elementor-pro' ),
								'<a href="https://go.elementor.com/pro-license/" target="_blank">',
								'</a>'
							); ?>
						</li>
						<li>
							<?php echo esc_html__( 'Copy the license key from your account and paste it below.', 'elementor-pro' ); ?>
						</li>
					</ol>

					<input type="hidden" name="action" value="elementor_pro_activate_license"/>

					<label for="elementor-pro-license-key"><?php echo esc_html__( 'Your License Key', 'elementor-pro' ); ?></label>

					<input id="elementor-pro-license-key" class="regular-text code" name="elementor_pro_license_key" type="text" value="" placeholder="<?php echo esc_attr__( 'Please enter your license key here', 'elementor-pro' ); ?>"/>

					<input type="submit" class="button button-primary" value="<?php echo esc_attr__( 'Activate', 'elementor-pro' ); ?>"/>

					<p class="description">
						<?php echo sprintf(
							/* translators: %s: Example license key. */
							esc_html__( 'Your license key should look something like this: %s', 'elementor-pro' ),
							'<code>fb351f05958872E193feb37a505a84be</code>'
						); ?>
					</p>

				<?php else :
					$license_data = API::get_license_data( true );
					?>
					<input type="hidden" name="action" value="elementor_pro_deactivate_license"/>

					<label for="elementor-pro-license-key"><?php echo esc_html__( 'Your License Key', 'elementor-pro' ); ?>:</label>

					<input id="elementor-pro-license-key" class="regular-text code" type="text" value="<?php echo esc_attr( self::get_hidden_license_key() ); ?>" disabled/>

					<input type="submit" class="button" value="<?php echo esc_attr__( 'Deactivate', 'elementor-pro' ); ?>"/>

					<p><?php $this->render_part_license_status_header( $license_data ); ?></p>
					<?php $this->render_part_error_notification( $license_data ); ?>
				<?php endif; ?>
			</form>
		</div>
		<?php
	}

	public function on_deactivate_plugin( $plugin ) {
		if ( ELEMENTOR_PRO_PLUGIN_BASE !== $plugin ) {
			return;
		}

		wp_remote_post( 'https://my.elementor.com/api/v1/feedback-pro/', [
			'timeout' => 30,
			'body' => [
				'api_version' => ELEMENTOR_PRO_VERSION,
				'site_lang' => get_bloginfo( 'language' ),
			],
		] );
	}

	private function is_connected() {
		return $this->get_app()->is_connected();
	}

	public function get_connect_url( $params = [] ) {
		$action = $this->is_connected() ? 'activate_pro' : 'authorize';

		return $this->get_app()->get_admin_url( $action, $params );
	}

	private function get_switch_license_url( $params = [] ) {
		return $this->get_app()->get_admin_url( 'switch_license', $params );
	}

	private function get_connected_account() {
		$user = $this->get_app()->get( 'user' );
		$email = '';
		if ( $user ) {
			$email = $user->email;
		}
		return $email;
	}

	private function get_deactivate_url() {
		return $this->get_app()->get_admin_url( 'deactivate' );
	}

	private function get_activate_message() {
		return esc_html__( 'Please activate your license to get feature updates, premium support and unlimited access to the template library.', 'elementor-pro' );
	}

	/**
	 * @return Activate
	 */
	private function get_app() {
		return Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );
	}

	private function redirect_to_document( $document_id ) {
		$document = Plugin::elementor()->documents->get( (int) $document_id );

		if ( $document ) {
			// Triggers after the headers were sent, so a regular redirect won't work.
			?>
			<meta http-equiv="refresh" content="0;url=<?php echo esc_url( $document->get_edit_url() ); ?>" />
			<?php
		}
	}

	public function register_actions() {
		add_action( 'admin_menu', [ $this, 'register_page' ], 800 );
		add_action( 'admin_init', [ $this, 'handle_tracker_actions' ], 9 );
		add_action( 'admin_post_elementor_pro_activate_license', [ $this, 'action_activate_license' ] );
		add_action( 'admin_post_elementor_pro_deactivate_license', [ $this, 'action_deactivate_license' ] );

		add_action( 'admin_notices', [ $this, 'admin_license_details' ], 20 );

		add_filter( 'elementor/core/admin/notices', function( $notices ) {
			$notices[] = new Trial_Period_Notice();
			$notices[] = new Trial_Expired_Notice();

			return $notices;
		} );

		add_action( 'deactivate_plugin', [ $this, 'on_deactivate_plugin' ] );

		// Add the license key to Templates Library requests
		add_filter( 'elementor/api/get_templates/body_args', [ $this, 'filter_library_get_templates_args' ] );
		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_item' ] );
		add_filter( 'plugin_action_links_' . ELEMENTOR_PRO_PLUGIN_BASE, [ $this, 'plugin_action_links' ], 50 );
		add_filter( 'plugin_auto_update_setting_html', [ $this, 'plugin_auto_update_setting_html' ], 10, 2 );
		add_filter( 'elementor/admin/homescreen_promotion_tier', function ( $tier ) {
			return API::get_access_tier();
		} );

		$this->handle_dashboard_admin_widget();
	}

	private function is_opt_out_request(): bool {
		return 'opt_out' === Utils::get_super_global_value( $_GET, 'elementor_tracker' );
	}

	private function is_valid_opt_out_nonce() {
		$nonce = Utils::get_super_global_value( $_REQUEST, '_wpnonce' );

		return wp_verify_nonce( $nonce, 'opt_out' );
	}
}
