<?php
namespace ElementorPro;

use ElementorPro\Core\Admin\Admin;
use ElementorPro\Core\Connect;
use Elementor\Core\Responsive\Files\Frontend as FrontendFile;
use Elementor\Core\Responsive\Responsive;
use Elementor\Utils;
use ElementorPro\Core\Editor\Editor;
use ElementorPro\Core\Modules_Manager;
use ElementorPro\Core\Preview\Preview;
use ElementorPro\Core\Upgrade\Manager as UpgradeManager;

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


	private $classes_aliases = [
		'ElementorPro\Modules\PanelPostsControl\Module' => 'ElementorPro\Modules\QueryControl\Module',
		'ElementorPro\Modules\PanelPostsControl\Controls\Group_Control_Posts' => 'ElementorPro\Modules\QueryControl\Controls\Group_Control_Posts',
		'ElementorPro\Modules\PanelPostsControl\Controls\Query' => 'ElementorPro\Modules\QueryControl\Controls\Query',
	];

	/**
	 * @deprecated since 1.1.0 Use `ELEMENTOR_PRO_VERSION` instead
	 *
	 * @return string
	 */
	public function get_version() {
		_deprecated_function( __METHOD__, '1.1.0' );

		return ELEMENTOR_PRO_VERSION;
	}

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
		_doing_it_wrong( __FUNCTION__, __( 'Something went wrong.', 'elementor-pro' ), '1.0.0' );
	}

	/**
	 * Disable unserializing of the class
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __wakeup() {
		// Unserializing instances of the class is forbidden
		_doing_it_wrong( __FUNCTION__, __( 'Something went wrong.', 'elementor-pro' ), '1.0.0' );
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
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		$direction_suffix = is_rtl() ? '-rtl' : '';

		$frontend_file_name = 'frontend' . $direction_suffix . $suffix . '.css';

		$has_custom_file = Responsive::has_custom_breakpoints();

		if ( $has_custom_file ) {
			$frontend_file = new FrontendFile( 'custom-pro-' . $frontend_file_name, self::get_responsive_templates_path() . $frontend_file_name );

			$time = $frontend_file->get_meta( 'time' );

			if ( ! $time ) {
				$frontend_file->update();
			}

			$frontend_file_url = $frontend_file->get_url();
		} else {
			$frontend_file_url = ELEMENTOR_PRO_ASSETS_URL . 'css/' . $frontend_file_name;
		}

		wp_enqueue_style(
			'elementor-pro',
			$frontend_file_url,
			[],
			$has_custom_file ? null : ELEMENTOR_PRO_VERSION
		);
	}

	public function enqueue_frontend_scripts() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-frontend',
			ELEMENTOR_PRO_URL . 'assets/js/frontend' . $suffix . '.js',
			[
				'elementor-frontend-modules',
				'elementor-sticky',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		$locale_settings = [
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'elementor-pro-frontend' ),
		];

		/**
		 * Localize frontend settings.
		 *
		 * Filters the frontend localized settings.
		 *
		 * @since 1.0.0
		 *
		 * @param array $locale_settings Localized settings.
		 */
		$locale_settings = apply_filters( 'elementor_pro/frontend/localize_settings', $locale_settings );

		Utils::print_js_config(
			'elementor-pro-frontend',
			'ElementorProFrontendConfig',
			$locale_settings
		);
	}

	public function register_frontend_scripts() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_register_script(
			'smartmenus',
			ELEMENTOR_PRO_URL . 'assets/lib/smartmenus/jquery.smartmenus' . $suffix . '.js',
			[
				'jquery',
			],
			'1.0.1',
			true
		);

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

	public function register_preview_scripts() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-preview',
			ELEMENTOR_PRO_URL . 'assets/js/preview' . $suffix . '.js',
			[
				'elementor-frontend',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	public function get_responsive_stylesheet_templates( $templates ) {
		$templates_paths = glob( self::get_responsive_templates_path() . '*.css' );

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
		 * Fires on Elementor Pro init, after Elementor has finished loading but
		 * before any headers are sent.
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

	private function get_responsive_templates_path() {
		return ELEMENTOR_PRO_ASSETS_PATH . 'css/templates/';
	}

	private function setup_hooks() {
		add_action( 'elementor/init', [ $this, 'on_elementor_init' ] );

		add_action( 'elementor/frontend/before_register_scripts', [ $this, 'register_frontend_scripts' ] );
		add_action( 'elementor/preview/enqueue_scripts', [ $this, 'register_preview_scripts' ] );

		add_action( 'elementor/frontend/before_enqueue_scripts', [ $this, 'enqueue_frontend_scripts' ] );
		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'enqueue_styles' ] );

		add_filter( 'elementor/core/responsive/get_stylesheet_templates', [ $this, 'get_responsive_stylesheet_templates' ] );
		add_action( 'elementor/document/save_version', [ $this, 'on_document_save_version' ] );
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

		if ( is_admin() ) {
			$this->admin = new Admin();
		}
	}

	final public static function get_title() {
		return __( 'Pro Elements', 'elementor-pro' );
	}
}

if ( ! defined( 'ELEMENTOR_PRO_TESTS' ) ) {
	// In tests we run the instance manually.
	Plugin::instance();
}
