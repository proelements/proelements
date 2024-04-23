<?php
namespace ElementorPro\Modules\Notes;

use Elementor\Core\Base\App;
use ElementorPro\License\API;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\Notes\Data\Controller;
use ElementorPro\Modules\Notes\User\Delete_User;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Database\Notes_Database_Updater;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Modules\Notes\User\Personal_Data;
use ElementorPro\Modules\Notes\User\Preferences;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends App {
	const NAME = 'notes';
	const LICENSE_FEATURE_NAME = 'editor_comments';

	// Module-related tables.
	const TABLE_NOTES = 'e_notes';
	const TABLE_NOTES_USERS_RELATIONS = 'e_notes_users_relations';

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
	 * Enqueue Notes styles.
	 */
	private function enqueue_styles() {
		wp_enqueue_style(
			'elementor-pro-notes-frontend',
			$this->get_css_assets_url( 'modules/notes/frontend' ),
			[ 'elementor-icons' ],
			ELEMENTOR_PRO_VERSION
		);
	}

	/**
	 * Enqueue panel scripts.
	 */
	private function enqueue_main_scripts() {
		wp_enqueue_script(
			'elementor-pro-notes',
			$this->get_js_assets_url( 'notes/notes' ),
			[
				// Change `$e` dependency based on the `Web-CLI` module.
				Plugin::elementor()->modules_manager->get_modules( 'web-cli' )
					? 'elementor-web-cli'
					: 'elementor-common',
				'react',
				'react-dom',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_set_script_translations( 'elementor-pro-notes', 'elementor-pro' );
	}

	/**
	 * Enqueue marks scripts.
	 *
	 * @param bool $is_preview
	 */
	private function enqueue_app_initiator( $is_preview = false ) {
		$dependencies = [
			'react',
			'react-dom',
		];

		if ( ! $is_preview ) {
			// When loading in frontend, the app should be loaded after notes main script.
			// There are some listeners that should be initialized before the app script loaded.
			$dependencies[] = 'elementor-pro-notes';
		}

		wp_enqueue_script(
			'elementor-pro-notes-app-initiator',
			$this->get_js_assets_url( 'notes/notes-app-initiator' ),
			$dependencies,
			ELEMENTOR_PRO_VERSION,
			true
		);

		$this->print_config( 'elementor-pro-notes-app-initiator' );
	}

	/**
	 * Expose settings to the frontend under 'window.elementorNotesConfig'.
	 *
	 * @return void
	 */
	protected function add_config() {
		$queried_object = get_queried_object();

		$route = [
			'title' => Utils::get_clean_document_title(),
			// PHPCS - The url cleaned inside the clear_url method.
			'url' => Utils::clean_url( $_SERVER['REQUEST_URI'] ?? '' ), // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash
			'note_url_pattern' => Note::generate_url(),
			'post_id' => null,
			'is_elementor_library' => false,
		];

		if ( $queried_object instanceof \WP_Post ) {
			$route['url'] = Utils::clean_url( home_url( "?p={$queried_object->ID}" ) );
			$route['post_id'] = $queried_object->ID;
			$route['is_elementor_library'] = Source_Local::CPT === $queried_object->post_type;
		}

		$this->set_settings( 'route', $route );
		$this->set_settings( 'direction', is_rtl() ? 'rtl' : 'ltr' );
		$this->set_settings( 'is_debug', ( defined( 'ELEMENTOR_DEBUG' ) && ELEMENTOR_DEBUG ) );

		$this->set_settings( 'current_user_can', [
			'create' => current_user_can( Capabilities::CREATE_NOTES ),
			'create_users' => current_user_can( 'create_users' ),
			'edit_users' => current_user_can( 'edit_users' ),
		] );

		$this->set_settings( 'urls', [
			'admin_url_create_user' => get_admin_url( null, 'user-new.php' ),
			'admin_url_edit_user' => get_admin_url( null, 'user-edit.php' ),
			'avatar_defaults' => User::generate_avatars_urls( 0 ),
			'help_notes_features' => 'https://go.elementor.com/app-notes',
		] );
	}

	/**
	 * Define the module tables in `wpdb`.
	 *
	 * @return void
	 */
	private function define_tables() {
		global $wpdb;

		$tables = [
			self::TABLE_NOTES,
			self::TABLE_NOTES_USERS_RELATIONS,
		];

		foreach ( $tables as $table ) {
			$wpdb->$table = $wpdb->prefix . $table;
			$wpdb->tables[] = $table;
		}
	}

	private function on_elementor_pro_init() {
		$has_license = API::is_license_active() && API::is_licence_has_feature( static::LICENSE_FEATURE_NAME );

		if ( ! $has_license ) {
			return;
		}

		// Things that should be happened if the feature is active (not depends on the current user)
		$this->define_tables();

		add_action( 'switch_blog', function () {
			// Reinitialize the Notes tables when switching between sites on a multisite, since each site has its own tables prefix.
			$this->define_tables();
		} );

		( new Capabilities() )->register();
		( new Preferences() )->register();
		( new Delete_User() )->register();
		( new Personal_Data() )->register();
		( new Notes_Database_Updater() )->register();
		( new Admin_Bar() )->register();
		( new Admin_Page() )->register();
		( new Document_Events() )->register();
		( new Usage() )->register();

		Plugin::elementor()->data_manager_v2->register_controller( new Controller() );

		// Things that should be happened if the current user can read notes.
		if ( is_user_logged_in() && current_user_can( Capabilities::READ_NOTES ) ) {
			add_action( 'template_redirect', function () {
				// Only now the 'queried_object' is available for the config.
				$this->add_config();
			} );

			add_action( 'elementor/frontend/after_register_scripts', function () {
				$is_preview = Plugin::elementor()->preview->is_preview();

				if ( ! $is_preview ) {
					$this->enqueue_main_scripts();
				}

				$this->enqueue_styles();
				$this->enqueue_app_initiator( $is_preview );
			} );

			add_action( 'elementor/editor/before_enqueue_scripts', function () {
				$this->enqueue_main_scripts();
			} );

			add_filter( 'elementor-pro/editor/v2/packages', function ( $packages ) {
				$packages[] = 'editor-notes';

				return $packages;
			} );
		}
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor_pro/init', function() {
			$this->on_elementor_pro_init();
		} );
	}
}
