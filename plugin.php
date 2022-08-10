<?php
namespace ElementorPro;

use ElementorPro\Core\Admin\Admin;
use ElementorPro\Core\App\App;
use ElementorPro\Core\Connect;
use Elementor\Core\Responsive\Files\Frontend as FrontendFile;
use Elementor\Utils;
use ElementorPro\Core\Editor\Editor;
use ElementorPro\Core\Integrations\Integrations_Manager;
use ElementorPro\Core\Modules_Manager;
use ElementorPro\Core\Notifications\Notifications_Manager;
use ElementorPro\Core\Preview\Preview;
use ElementorPro\Core\Updater\Updater;
use ElementorPro\Core\Upgrade\Manager as UpgradeManager;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Main class plugin
 */
class Plugin {

	/**
	 * @var Plugin
	 */
	private static $_instance;

	/**
	 * @var Modules_Manager
	 */
	public $modules_manager;

	/**
	 * @var UpgradeManager
	 */
	public $upgrade;

	/**
	 * @var Editor
	 */
	public $editor;

	/**
	 * @var Preview
	 */
	public $preview;

	/**
	 * @var Admin
	 */
	public $admin;

	/**
	 * @var App
	 */
	public $app;

	/**
	 * @var License\Admin
	 */
	public $license_admin;

	/**
	 * @var \ElementorPro\Core\Integrations\Integrations_Manager
	 */
	public $integrations;

	/**
	 * @var \ElementorPro\Core\Notifications\Notifications_Manager
	 */
	public $notifications;

	private $classes_aliases = [
		'ElementorPro\Modules\PanelPostsControl\Module' => 'ElementorPro\Modules\QueryControl\Module',
		'ElementorPro\Modules\PanelPostsControl\Controls\Group_Control_Posts' => 'ElementorPro\Modules\QueryControl\Controls\Group_Control_Posts',
		'ElementorPro\Modules\PanelPostsControl\Controls\Query' => 'ElementorPro\Modules\QueryControl\Controls\Query',
	];

	/**
	 * Throw error on object clone
	 *
	 * The whole idea of the singleton design pattern is that there is a single
	 * object therefore, we don't want the object to be cloned.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __clone() {
		// Cloning instances of the class is forbidden
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'elementor-pro' ), '1.0.0' );
	}

	/**
	 * Disable unserializing of the class
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __wakeup() {
		// Unserializing instances of the class is forbidden
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'elementor-pro' ), '1.0.0' );
	}

	/**
	 * @return \Elementor\Plugin
	 */

	public static function elementor() {
		return \Elementor\Plugin::$instance;
	}

	/**
	 * @return Plugin
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	public function autoload( $class ) {
		if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
			return;
		}

		$has_class_alias = isset( $this->classes_aliases[ $class ] );

		// Backward Compatibility: Save old class name for set an alias after the new class is loaded
		if ( $has_class_alias ) {
			$class_alias_name = $this->classes_aliases[ $class ];
			$class_to_load = $class_alias_name;
		} else {
			$class_to_load = $class;
		}

		if ( ! class_exists( $class_to_load ) ) {
			$filename = strtolower(
				preg_replace(
					[ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ],
					[ '', '$1-$2', '-', DIRECTORY_SEPARATOR ],
					$class_to_load
				)
			);
			$filename = ELEMENTOR_PRO_PATH . $filename . '.php';

			if ( is_readable( $filename ) ) {
				include( $filename );
			}
		}

		if ( $has_class_alias ) {
			class_alias( $class_alias_name, $class );
		}
	}

	public function enqueue_styles() {
		$suffix = $this->get_assets_suffix();

		$direction_suffix = is_rtl() ? '-rtl' : '';

		$frontend_file_name_base = $this->is_optimized_css_mode() ? 'frontend-lite' : 'frontend';

		$frontend_file_name = $frontend_file_name_base . $direction_suffix . $suffix . '.css';

		$has_custom_file = self::elementor()->breakpoints->has_custom_breakpoints();

		$frontend_file_url = $this->get_frontend_file_url( $frontend_file_name, $has_custom_file );

		wp_enqueue_style(
			'elementor-pro',
			$frontend_file_url,
			[],
			$has_custom_file ? null : ELEMENTOR_PRO_VERSION
		);
	}

	public function get_frontend_file_url( $frontend_file_name, $custom_file ) {
		if ( $custom_file ) {
			$frontend_file = $this->get_frontend_file( $frontend_file_name );

			$frontend_file_url = $frontend_file->get_url();
		} else {
			$frontend_file_url = ELEMENTOR_PRO_ASSETS_URL . 'css/' . $frontend_file_name;
		}

		return $frontend_file_url;
	}

	public function get_frontend_file_path( $frontend_file_name, $custom_file ) {
		if ( $custom_file ) {
			$frontend_file = $this->get_frontend_file( $frontend_file_name );

			$frontend_file_path = $frontend_file->get_path();
		} else {
			$frontend_file_path = ELEMENTOR_PRO_ASSETS_PATH . 'css/' . $frontend_file_name;
		}

		return $frontend_file_path;
	}

	public function enqueue_frontend_scripts() {
		$suffix = $this->get_assets_suffix();

		wp_enqueue_script(
			'elementor-pro-frontend',
			ELEMENTOR_PRO_URL . 'assets/js/frontend' . $suffix . '.js',
			$this->get_frontend_depends(),
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_set_script_translations( 'elementor-pro-frontend', 'elementor-pro', ELEMENTOR_PRO_PATH . 'languages' );

		if ( self::elementor()->experiments->is_feature_active( 'e_optimized_assets_loading' ) ) {
			wp_enqueue_script( 'pro-elements-handlers' );
		} else {
			wp_enqueue_script( 'pro-preloaded-elements-handlers' );
		}

		$assets_url = ELEMENTOR_PRO_ASSETS_URL;

		/**
		 * Elementor Pro assets URL.
		 *
		 * Filters the assets URL used by Elementor Pro.
		 *
		 * By default Elementor Pro assets URL is set by the ELEMENTOR_PRO_ASSETS_URL
		 * constant. This hook allows developers to change this URL.
		 *
		 * @param string $assets_url Elementor Pro assets URL.
		 */
		$assets_url = apply_filters( 'elementor_pro/frontend/assets_url', $assets_url );

		$locale_settings = [
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'elementor-pro-frontend' ),
			'urls' => [
				'assets' => $assets_url,
				'rest' => get_rest_url(),
			],
		];

		/**
		 * Localized frontend settings.
		 *
		 * Filters the localized settings used in the frontend as JavaScript variables.
		 *
		 * By default Elementor Pro passes some frontend settings to be consumed as JavaScript
		 * variables. This hook allows developers to add extra settings values to be consumed
		 * using JavaScript in the frontend.
		 *
		 * @since 1.0.0
		 *
		 * @param array $locale_settings Localized frontend settings.
		 */
		$locale_settings = apply_filters( 'elementor_pro/frontend/localize_settings', $locale_settings );

		Utils::print_js_config(
			'elementor-pro-frontend',
			'ElementorProFrontendConfig',
			$locale_settings
		);

		if ( $this->is_assets_loader_exist() ) {
			$this->register_assets();
		}
	}

	public function register_frontend_scripts() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_register_script(
			'elementor-pro-webpack-runtime',
			ELEMENTOR_PRO_URL . 'assets/js/webpack-pro.runtime' . $suffix . '.js',
			[],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_register_script(
			'pro-elements-handlers',
			ELEMENTOR_PRO_URL . 'assets/js/elements-handlers' . $suffix . '.js',
			[
				'elementor-frontend',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_register_script(
			'pro-preloaded-elements-handlers',
			ELEMENTOR_PRO_URL . 'assets/js/preloaded-elements-handlers' . $suffix . '.js',
			[
				'elementor-frontend',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_register_script(
			'smartmenus',
			ELEMENTOR_PRO_URL . 'assets/lib/smartmenus/jquery.smartmenus' . $suffix . '.js',
			[
				'jquery',
			],
			'1.0.1',
			true
		);

		if ( ! $this->is_assets_loader_exist() ) {
			wp_register_script(
				'elementor-sticky',
				ELEMENTOR_PRO_URL . 'assets/lib/sticky/jquery.sticky' . $suffix . '.js',
				[
					'jquery',
				],
				ELEMENTOR_PRO_VERSION,
				true
			);
		}
	}

	public function register_preview_scripts() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-preview',
			ELEMENTOR_PRO_URL . 'assets/js/preview' . $suffix . '.js',
			[
				'wp-i18n',
				'elementor-frontend',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	public function get_responsive_stylesheet_templates( $templates ) {
		$templates_paths = glob( $this->get_responsive_templates_path() . '*.css' );

		foreach ( $templates_paths as $template_path ) {
			$file_name = 'custom-pro-' . basename( $template_path );

			$templates[ $file_name ] = $template_path;
		}

		return $templates;
	}

	public function on_elementor_init() {
		$this->modules_manager = new Modules_Manager();

		/** TODO: BC for Elementor v2.4.0 */
		if ( class_exists( '\Elementor\Core\Upgrade\Manager' ) ) {
			$this->upgrade = UpgradeManager::instance();
		}

		/**
		 * Elementor Pro init.
		 *
		 * Fires on Elementor Pro initiation, after Elementor has finished loading
		 * but before any headers are sent.
		 *
		 * @since 1.0.0
		 */
		do_action( 'elementor_pro/init' );
	}

	/**
	 * @param \Elementor\Core\Base\Document $document
	 */
	public function on_document_save_version( $document ) {
		$document->update_meta( '_elementor_pro_version', ELEMENTOR_PRO_VERSION );
	}

	private function get_frontend_depends() {
		$frontend_depends = [
			'elementor-pro-webpack-runtime',
			'elementor-frontend-modules',
		];

		if ( ! $this->is_assets_loader_exist() ) {
			$frontend_depends[] = 'elementor-sticky';
		}

		return $frontend_depends;
	}

	private function get_responsive_templates_path() {
		return ELEMENTOR_PRO_ASSETS_PATH . 'css/templates/';
	}

	private function add_subscription_template_access_level_to_settings( $settings ) {
		// Core >= 3.2.0
		if ( isset( $settings['library_connect']['current_access_level'] ) ) {
			$settings['library_connect']['current_access_level'] = API::get_library_access_level();
		}

		return $settings;
	}

	private function setup_hooks() {
		add_action( 'elementor/init', [ $this, 'on_elementor_init' ] );

		add_action( 'elementor/frontend/before_register_scripts', [ $this, 'register_frontend_scripts' ] );
		add_action( 'elementor/preview/enqueue_scripts', [ $this, 'register_preview_scripts' ] );

		add_action( 'elementor/frontend/before_enqueue_scripts', [ $this, 'enqueue_frontend_scripts' ] );
		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'enqueue_styles' ] );

		add_filter( 'elementor/core/responsive/get_stylesheet_templates', [ $this, 'get_responsive_stylesheet_templates' ] );
		add_action( 'elementor/document/save_version', [ $this, 'on_document_save_version' ] );

		add_filter( 'elementor/editor/localize_settings', function ( $settings ) {
			return $this->add_subscription_template_access_level_to_settings( $settings );
		}, 11 /** After Elementor Core (Library) */ );
	}

	private function is_optimized_css_mode() {
		$is_optimized_css_loading = self::elementor()->experiments->is_feature_active( 'e_optimized_css_loading' );

		return ! Utils::is_script_debug() && $is_optimized_css_loading && ! self::elementor()->preview->is_preview_mode();
	}

	private function get_assets() {
		$suffix = $this->get_assets_suffix();

		return [
			'scripts' => [
				'e-sticky' => [
					'src' => ELEMENTOR_PRO_URL . 'assets/lib/sticky/jquery.sticky' . $suffix . '.js',
					'version' => ELEMENTOR_PRO_VERSION,
					'dependencies' => [
						'jquery',
					],
				],
			],
		];
	}

	private function register_assets() {
		$assets = $this->get_assets();

		if ( $assets ) {
			self::elementor()->assets_loader->add_assets( $assets );
		}
	}

	private function is_assets_loader_exist() {
		return ! ! self::elementor()->assets_loader;
	}

	/**
	 * Plugin constructor.
	 */
	private function __construct() {
		spl_autoload_register( [ $this, 'autoload' ] );

		new Connect\Manager();

		$this->setup_hooks();

		$this->editor = new Editor();

		$this->preview = new Preview();

		$this->app = new App();

		if ( is_user_logged_in() ) {
			$this->integrations = new Integrations_Manager(); // TODO: This one is safe to move out of the condition.

			$this->notifications = new Notifications_Manager();
		}

		if ( is_admin() ) {
			$this->admin = new Admin();
			$this->license_admin = new License\Admin();
			require_once __DIR__ . '/updater/updater.php';
			$config = array(
				'slug'               => 'pro-elements.php',
				'plugin_basename'    => ELEMENTOR_PRO_PLUGIN_BASE,
				'proper_folder_name' => 'pro-elements',
				'api_url'            => 'https://api.github.com/repos/proelements/proelements',
				'raw_url'            => 'https://raw.githubusercontent.com/proelements/proelements/master',
				'github_url'         => 'https://github.com/proelements/proelements',
				'zip_url'            => 'https://github.com/proelements/proelements/archive/v{release_version}.zip',
				'sslverify'          => true,
				'requires'           => '5.0',
				'tested'             => '5.4.2',
				'readme'             => 'README.md',
				'access_token'       => '',
			);

			new Updater( $config );
		}
	}

	private function get_assets_suffix() {
		return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	}

	private function get_frontend_file( $frontend_file_name ) {
		$template_file_path = self::get_responsive_templates_path() . $frontend_file_name;

		return self::elementor()->frontend->get_frontend_file( $frontend_file_name, 'custom-pro-', $template_file_path );
	}

	final public static function get_title() {
		return esc_html__( 'Pro Elements', 'elementor-pro' );
	}
}

if ( ! defined( 'ELEMENTOR_PRO_TESTS' ) ) {
	// In tests we run the instance manually.
	Plugin::instance();
}
