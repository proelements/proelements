<?php
namespace ElementorPro\Modules\Forms\Submissions\AdminMenuItems;

use Elementor\Core\Admin\Admin_Notices;
use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item_With_Page;
use Elementor\Settings;
use Elementor\User;
use ElementorPro\Core\Utils\Abtest;
use ElementorPro\core\utils\Hints;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Submissions_Menu_Item implements Admin_Menu_Item_With_Page {
	public function get_capability(): string {
		return 'manage_options';
	}

	public function get_label(): string {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_page_title(): string {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_parent_slug(): string {
		return Settings::PAGE_ID;
	}

	public function is_visible(): bool {
		return true;
	}

	public function get_position(): ?int {
		return 50;
	}

	public function render(): void {
		$this->maybe_render_hints();
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php echo esc_html__( 'Submissions', 'elementor-pro' ); ?></h1>
			<hr class="wp-header-end">
			<div id="e-form-submissions"></div>
		</div>
		<?php
	}

	private function maybe_render_hints() {
		if ( ! $this->has_submissions() ) {
			return;
		}

		if ( $this->should_show_site_mailer_hint() ) {
			$this->render_site_mailer_notice();
		}
	}

	private function render_site_mailer_notice() {
		$notice_id = 'site_mailer_forms_submissions_notice';

		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		$plugin_slug = 'site-mailer';

		$one_subscription = method_exists( Hints::class, 'is_plugin_connected_to_one_subscription' ) && Hints::is_plugin_connected_to_one_subscription();
		$is_installed = Hints::is_plugin_installed( $plugin_slug );
		$is_active = Hints::is_plugin_active( $plugin_slug );

		if ( $is_active ) {
			return;
		}

		if ( $one_subscription ) {
			$title = esc_html__( 'Get your emails delivered with Email Deliverability', 'elementor-pro' );

			if ( ! $is_installed ) {
				$description = esc_html__( 'Ensure form submission emails reach the inbox and track delivery with built-in logs. Email Deliverability is included in your ONE subscription.', 'elementor-pro' );
				$button_text = esc_html__( 'Install now', 'elementor-pro' );
				$button_url = Hints::get_plugin_install_url( $plugin_slug );
				$campaign_data = [
					'name' => 'site_mailer_forms_submissions_notice',
					'campaign' => 'sm-plg-submission-v1',
					'source' => 'sm-submission-one-install',
					'medium' => 'wp-dash-one',
				];
			} elseif ( ! $is_active ) {
				$description = esc_html__( 'Ensure form submission emails reach the inbox and track delivery with built-in logs. Email Deliverability is included in your ONE subscription. Activate it to continue.', 'elementor-pro' );
				$button_text = esc_html__( 'Activate now', 'elementor-pro' );
				$button_url = Hints::get_plugin_action_url( $plugin_slug );
				$campaign_data = [
					'name' => 'site_mailer_forms_submissions_notice',
					'campaign' => 'sm-plg-submission-v1',
					'source' => 'sm-submission-one-activate',
					'medium' => 'wp-dash-one',
				];
			}
		} else {
			$title = esc_html__( 'Get Your Emails Delivered With Email Deliverability', 'elementor-pro' );
			$description = esc_html__( 'Make sure emails reach the inbox every time with improved deliverability, detailed email logs, and an easy setup with no need for an SMTP plugin.', 'elementor-pro' );

			if ( ! $is_installed ) {
				$button_text = esc_html__( 'Install now', 'elementor-pro' );
				$button_url = Hints::get_plugin_install_url( $plugin_slug );
				$campaign_data = [
					'name' => 'site_mailer_forms_submissions_notice',
					'campaign' => 'sm-plg-submission-v1',
					'source' => 'sm-submission-install',
					'medium' => 'wp-dash',
				];
			} elseif ( ! $is_active ) {
				$button_text = esc_html__( 'Activate now', 'elementor-pro' );
				$button_url = Hints::get_plugin_action_url( $plugin_slug );
				$campaign_data = [
					'name' => 'site_mailer_forms_submissions_notice',
					'campaign' => 'sm-plg-submission-v1',
					'source' => 'sm-submission-activate',
					'medium' => 'wp-dash',
				];
			}
		}

		$notice_options = [
			'id' => $notice_id,
			'title' => $title,
			'description' => $description,
			'type' => 'cta',
			'button_secondary' => [
				'text' => $button_text,
				'url' => $button_url,
				'type' => 'cta',
				'data' => [
					'source' => $campaign_data['source'],
				],
			],
		];

		/**
		 * @var Admin_Notices $admin_notices
		 */
		$admin_notices = Plugin::elementor()->admin->get_component( 'admin-notices' );

		$admin_notices->print_admin_notice( $notice_options );
	}

	public function has_submissions( $min_count = 1 ): bool {
		global $wpdb;
		$table = $wpdb->prefix . Query::E_SUBMISSIONS;
		// The placeholder ignores can be removed when %i is supported by WPCS.
		// See https://core.trac.wordpress.org/ticket/56091#comment:11
		// phpcs:ignore WordPress.DB.PreparedSQLPlaceholders.UnsupportedPlaceholder, WordPress.DB.PreparedSQLPlaceholders.ReplacementsWrongNumber
		$submissions_count = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM  %i LIMIT %d', $table, $min_count ) );
		return $min_count <= $submissions_count;
	}

	public function should_show_site_mailer_hint(): bool {
		return ( Hints::should_show_hint( 'site_mailer_forms_submissions_notice' )
				&& ! User::is_user_notice_viewed( 'site_mailer_forms_submissions_notice' )
		);
	}
}
