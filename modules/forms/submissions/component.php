<?php
namespace ElementorPro\Modules\Forms\Submissions;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Core\Admin\Menu\Main as MainMenu;
use Elementor\Settings;
use ElementorPro\License\API;
use ElementorPro\Modules\Forms\Registrars\Form_Actions_Registrar;
use ElementorPro\Modules\Forms\Submissions\AdminMenuItems\Submissions_Menu_Item;
use ElementorPro\Modules\Forms\Submissions\AdminMenuItems\Submissions_Promotion_Menu_Item;
use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Data\Controller;
use ElementorPro\Modules\Forms\Submissions\Database\Migration;
use ElementorPro\Modules\Forms\Submissions\Data\Forms_Controller;
use ElementorPro\Modules\Forms\Submissions\Actions\Save_To_Database;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Component extends Module_Base {
	const NAME = 'form-submissions';
	const PAGE_ID = 'e-form-submissions';

	/**
	 * @return string
	 */
	public function get_name() {
		return static::NAME;
	}

	/**
	 * @return string
	 */
	public function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Check if the current admin page is the component page.
	 *
	 * @return bool
	 */
	private function is_current() {
		// Nonce verification not required here.
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return ( ! empty( $_GET['page'] ) && self::PAGE_ID === $_GET['page'] );
	}

	private function register_admin_menu( MainMenu $menu ) {
		$menu->add_submenu( [
			'menu_title' => $this->get_title(),
			'menu_slug' => self::PAGE_ID,
			'function' => function () {
				$this->render_admin_page();
			},
			'index' => 35,
		] );
	}

	/**
	 * Register admin menu
	 */
	private function register_admin_menu_legacy( Admin_Menu_Manager $admin_menu ) {
		$admin_menu->register( static::PAGE_ID,
			$this->can_use_submissions()
				? new Submissions_Menu_Item()
				: new Submissions_Promotion_Menu_Item()
		);
	}

	private function can_use_submissions() : bool {
		return API::is_license_active() && ! API::is_license_expired();
	}

	private function render_admin_page() {
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php echo esc_html__( 'Submissions', 'elementor-pro' ); ?></h1>
			<hr class="wp-header-end">
			<div id="e-form-submissions"></div>
		</div>
		<?php
	}

	/**
	 * Enqueue admin scripts
	 */
	private function enqueue_scripts() {
		wp_register_style(
			'select2',
			$this->get_css_assets_url( 'e-select2', '../elementor/assets/lib/e-select2/css/' ),
			[],
			'4.0.6-rc.1'
		);

		wp_enqueue_style(
			'elementor-app-base',
			$this->get_css_assets_url( 'modules/forms/submissions/admin', null, 'default', true ),
			[ 'select2' ],
			ELEMENTOR_PRO_VERSION
		);

		wp_register_script(
			'select2',
			$this->get_js_assets_url( 'e-select2.full', '../elementor/assets/lib/e-select2/js/' ),
			[
				'jquery',
			],
			'4.0.6-rc.1',
			true
		);

		wp_enqueue_script(
			'form-submission-admin',
			$this->get_js_assets_url( 'form-submission-admin' ),
			[
				'select2',
				'wp-url',
				'wp-i18n',
				'wp-date',
				'react',
				'react-dom',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		$is_trash_enabled = (int) ( EMPTY_TRASH_DAYS !== 0 );

		wp_add_inline_script(
			'form-submission-admin',
			"window.elementorSubmissionsConfig = { isTrashEnabled: {$is_trash_enabled} };",
			'before'
		);

		wp_set_script_translations( 'form-submission-admin', 'elementor-pro' );
	}

	private function scheduled_submissions_delete() {
		$query = Query::get_instance();
		$delete_timestamp = time() - ( DAY_IN_SECONDS * EMPTY_TRASH_DAYS );

		$ids = $query->get_trashed_submission_ids_to_delete( $delete_timestamp );

		foreach ( $ids as $id ) {
			$query->delete_submission( $id );
		}
	}

	private function get_title() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	/**
	 * Component constructor.
	 */
	public function __construct() {
		parent::__construct();

		Plugin::elementor()->data_manager->register_controller( Controller::class );
		Plugin::elementor()->data_manager->register_controller( Forms_Controller::class );

		new Personal_Data();

		add_action( 'admin_init', function () {
			Migration::install();
		} );

		add_action( 'elementor_pro/forms/actions/register', function ( Form_Actions_Registrar $actions_registrar ) {
			$actions_registrar->register( new Save_To_Database() );
		}, 0 /* Before all the actions */ );

		add_filter( 'elementor_pro/forms/default_submit_actions', function ( $actions ) {
			return array_merge( $actions, [ 'save-to-database' ] );
		} );

		add_action( 'wp_scheduled_delete', function () {
			$this->scheduled_submissions_delete();
		} );

		if ( Plugin::elementor()->experiments->is_feature_active( 'admin_menu_rearrangement' ) ) {
			add_action( 'elementor/admin/menu_registered/elementor', function( MainMenu $menu ) {
				$this->register_admin_menu( $menu );
			} );
		} else {
			add_action( 'elementor/admin/menu/register', function( Admin_Menu_Manager $admin_menu ) {
				$this->register_admin_menu_legacy( $admin_menu );
			}, 9 /* After "Settings" */ );

			// TODO: BC - Remove after `Admin_Menu_Manager` will be the standard.
			add_action( 'admin_menu', function () {
				if ( did_action( 'elementor/admin/menu/register' ) ) {
					return;
				}

				$title = $this->get_title();

				add_submenu_page(
					Settings::PAGE_ID,
					$title,
					$title,
					'manage_options',
					self::PAGE_ID,
					function () {
						$this->render_admin_page();
					}
				);
			}, 21 /* after Elementor page */ );
		}

		if ( $this->is_current() ) {
			add_action( 'admin_enqueue_scripts', function () {
				$this->enqueue_scripts();
			} );
		}
	}
}
