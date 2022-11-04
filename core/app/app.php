<?php
namespace ElementorPro\Core\App;

use Elementor\Core\Base\App as BaseApp;
use ElementorPro\Plugin;
use ElementorPro\Core\App\Modules\SiteEditor\Module as SiteEditor;
use ElementorPro\Core\App\Modules\KitLibrary\Module as KitLibrary;
use ElementorPro\Core\App\Modules\Onboarding\Module as Onboarding;
use ElementorPro\Core\App\Modules\ImportExport\Module as ImportExport;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class App extends BaseApp {
	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since 3.0.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'app-pro';
	}

	public function init() {
		$this->enqueue_assets();
	}

	public function set_menu_url() {
		Plugin::elementor()->app->set_settings( 'menu_url', Plugin::elementor()->app->get_base_url() . '#/site-editor' );
	}

	protected function get_init_settings() {
		return [
			'baseUrl' => $this->get_assets_base_url(),
		];
	}

	protected function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}

	private function enqueue_assets() {
		wp_enqueue_style(
			'elementor-pro-app',
			$this->get_css_assets_url( 'app', null, 'default', true ),
			[
				'elementor-app',
				'select2',
			],
			ELEMENTOR_VERSION
		);

		wp_enqueue_script(
			'elementor-pro-app',
			$this->get_js_assets_url( 'app' ),
			[
				'wp-i18n',
				'elementor-app-packages',
				'elementor-common',
				'select2',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_set_script_translations( 'elementor-pro-app', 'elementor-pro' );
	}

	private function enqueue_config() {
		// If script didn't loaded, config is still relevant, enqueue without a file.
		if ( ! wp_script_is( 'elementor-pro-app' ) ) {
			wp_register_script( 'elementor-pro-app', false, [], ELEMENTOR_PRO_VERSION );
			wp_enqueue_script( 'elementor-pro-app' );
		}

		$this->print_config( 'elementor-pro-app' );
	}

	public function __construct() {
		$this->add_component( 'site-editor', new SiteEditor() );
		$this->add_component( 'kit-library', new KitLibrary() );
		$this->add_component( 'onboarding', new Onboarding() );
		$this->add_component( 'import-export', new ImportExport() );

		add_action( 'elementor/app/init', [ $this, 'init' ] );

		add_action( 'elementor/common/after_register_scripts', function () {
			$this->enqueue_config();
		} );

		add_action( 'elementor/init', [ $this, 'set_menu_url' ] );
	}
}
