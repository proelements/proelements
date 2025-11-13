<?php
namespace ElementorPro\Core\App;

use Elementor\Core\Base\App as BaseApp;
use Elementor\Core\Utils\Assets_Config_Provider;
use Elementor\Core\Utils\Collection;
use Elementor\Utils;
use ElementorPro\Plugin;
use ElementorPro\Core\App\Modules\SiteEditor\Module as SiteEditor;
use ElementorPro\Core\App\Modules\KitLibrary\Module as KitLibrary;
use ElementorPro\Core\App\Modules\Onboarding\Module as Onboarding;
use ElementorPro\Core\App\Modules\ImportExport\Module as ImportExport;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Module as ImportExportCustomization;

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

	private function register_packages() {
		// Register Core's v2 packages for backward compatibility with Core 3.30
		// In 3.30, these exist but aren't loaded on the app page
		// In 3.31+, Core already registers them, so we skip
		$assets_config_provider = ( new Assets_Config_Provider() )
			->set_path_resolver( function ( $name ) {
				return ELEMENTOR_ASSETS_PATH . "js/packages/{$name}/{$name}.asset.php";
			} );

		Collection::make( [ 'ui', 'icons' ] )
			->each( function( $package ) use ( $assets_config_provider ) {
				$suffix = Utils::is_script_debug() ? '' : '.min';
				$config = $assets_config_provider->load( $package )->get( $package );

				if ( ! $config ) {
					return;
				}

				// Skip if Core already registered this (Core 3.31+)
				if ( wp_script_is( $config['handle'], 'registered' ) ) {
					return;
				}

				wp_register_script(
					$config['handle'],
					ELEMENTOR_ASSETS_URL . "js/packages/{$package}/{$package}{$suffix}.js",
					$config['deps'],
					ELEMENTOR_VERSION,
					true
				);
			} );
	}

	private function enqueue_assets() {
		$this->register_packages();

		wp_enqueue_style(
			'elementor-pro-app',
			$this->get_css_assets_url( 'app' ),
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
				'elementor-v2-ui',
				'elementor-v2-icons',
				'select2',
				'react-dom',
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
		$this->add_component( 'import-export-customization', new ImportExportCustomization() );

		add_action( 'elementor/app/init', [ $this, 'init' ] );

		add_action( 'elementor/common/after_register_scripts', function () {
			$this->enqueue_config();
		} );

		add_action( 'elementor/init', [ $this, 'set_menu_url' ] );
	}
}
