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
	public function get_capability() {
		return 'manage_options';
	}

	public function get_label() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_parent_slug() {
		return Settings::PAGE_ID;
	}

	public function is_visible() {
		return true;
	}

	public function get_position() {
		return null;
	}

	public function render() {
		if ( $this->should_show_hint() ) {
			/**
			 * @var Admin_Notices $admin_notices
			 */
			$admin_notices = Plugin::elementor()->admin->get_component( 'admin-notices' );

			$notice_options = [
				'description' => esc_html__( 'Experiencing email deliverability issues? Get your emails delivered with Site Mailer.', 'elementor-pro' ),
				'id' => 'site_mailer_forms_submissions_notice',
				'type' => 'cta',
				'button_secondary' => [
					'text' => Hints::is_plugin_installed( 'site-mailer' ) ? esc_html__( 'Activate Plugin', 'elementor-pro' ) : esc_html__( 'Install Plugin', 'elementor-pro' ),
					'url' => Hints::get_plugin_action_url( 'site-mailer' ),
					'type' => 'cta',
				],
			];

			if ( 2 === Abtest::get_variation( 'plg_site_mailer_submission' ) ) {
				$notice_options['title'] = esc_html__( 'Get Your Emails Delivered With Site Mailer', 'elementor-pro' );
				$notice_options['description'] = esc_html__( 'Make sure emails reach the inbox every time with improved deliverability, detailed email logs, and an easy setup with no need for an SMTP plugin.', 'elementor-pro' );
			}

			$admin_notices->print_admin_notice( $notice_options );
		}
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php echo esc_html__( 'Submissions', 'elementor-pro' ); ?></h1>
			<hr class="wp-header-end">
			<div id="e-form-submissions"></div>
		</div>
		<?php
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

	public function should_show_hint(): bool {
		return ( Hints::should_show_hint( 'site_mailer_forms_submissions_notice' )
				 && $this->has_submissions( 10 )
				 && ! User::is_user_notice_viewed( 'site_mailer_forms_submissions_notice' )
		);
	}
}
