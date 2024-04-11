<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Base\App;
use Elementor\Core\Utils\Assets_Config_Provider;
use Elementor\Core\Utils\Assets_Translation_Loader;
use ElementorPro\License\Admin as License_Admin;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;
use ElementorPro\Modules\DisplayConditions\Module as Display_Conditions_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Editor extends App {
	const EDITOR_V2_PACKAGES = [
		'editor-documents-extended',
		'editor-site-navigation-extended',
	];

	/**
	 * Get app name.
	 *
	 * Retrieve the app name.
	 *
	 * @return string app name.
	 * @since  2.6.0
	 * @access public
	 *
	 */
	public function get_name() {
		return 'pro-editor';
	}

	public function __construct() {
		add_action( 'elementor/init', [ $this, 'on_elementor_init' ] );
		add_action( 'elementor/editor/init', [ $this, 'on_elementor_editor_init' ] );
		add_action( 'elementor/editor/after_enqueue_styles', [ $this, 'enqueue_editor_styles' ] );
		add_action( 'elementor/editor/before_enqueue_scripts', [ $this, 'enqueue_editor_scripts' ] );

		add_filter( 'elementor/editor/localize_settings', [ $this, 'localize_settings' ] );

		add_filter( 'elementor/editor/panel/get_pro_details', function( $get_pro_details ) {
			if ( defined( '\Elementor\Modules\Apps\Module::PAGE_ID' ) ) {
				$get_pro_details['link'] = admin_url( 'admin.php?page=' . \Elementor\Modules\Apps\Module::PAGE_ID );
				$get_pro_details['message'] = __( 'Extend Elementor With Add-ons', 'elementor-pro' );
				$get_pro_details['button_text'] = __( 'Explore Add-ons', 'elementor-pro' );
			}

			return $get_pro_details;
		} );

		add_action( 'elementor/editor/v2/scripts/enqueue', function () {
			$this->enqueue_editor_v2_scripts();
		} );
	}

	public function get_init_settings() {
		$settings = [
			'isActive' => License_API::is_license_active(),
			'urls' => [
				'modules' => ELEMENTOR_PRO_MODULES_URL,
				'connect' => License_Admin::get_url(),
			],
		];

		/**
		 * Localized editor settings.
		 *
		 * Filters the localized settings used in the editor as JavaScript variables.
		 *
		 * By default Elementor Pro passes some editor settings to be consumed as JavaScript
		 * variables. This hook allows developers to add extra settings values to be consumed
		 * using JavaScript in the editor.
		 *
		 * @since 1.0.0
		 *
		 * @param array $settings Localized editor settings.
		 */
		$settings = apply_filters( 'elementor_pro/editor/localize_settings', $settings );

		return $settings;
	}

	public function enqueue_editor_styles() {
		wp_enqueue_style(
			'elementor-pro',
			$this->get_css_assets_url( 'editor', null, 'default', true ),
			[
				'elementor-editor',
			],
			ELEMENTOR_PRO_VERSION
		);
	}

	public function enqueue_editor_scripts() {
		wp_enqueue_script(
			'elementor-pro',
			$this->get_js_assets_url( 'editor' ),
			[
				'backbone-marionette',
				'elementor-common',
				'elementor-editor-modules',
				'elementor-editor-document',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_set_script_translations( 'elementor-pro', 'elementor-pro' );

		$this->print_config( 'elementor-pro' );
	}

	public function enqueue_editor_v2_scripts() {
		$assets_config = ( new Assets_Config_Provider() )
			->set_path_resolver( function ( $name ) {
				return ELEMENTOR_PRO_ASSETS_PATH . "js/packages/{$name}/{$name}.asset.php";
			} );

		$packages = apply_filters( 'elementor-pro/editor/v2/packages', self::EDITOR_V2_PACKAGES );

		foreach ( $packages as $package ) {
			$assets_config->load( $package );
		}

		foreach ( $assets_config->all() as $package => $config ) {
			wp_enqueue_script(
				$config['handle'],
				$this->get_js_assets_url( "packages/{$package}/{$package}" ),
				$config['deps'],
				ELEMENTOR_PRO_VERSION,
				true
			);

			wp_set_script_translations( $config['handle'], 'elementor-pro' );
		}

		if ( class_exists( Assets_Translation_Loader::class ) ) {
			$packages_handles = $assets_config->pluck( 'handle' )->all();

			Assets_Translation_Loader::for_handles( $packages_handles );
		}
	}

	public function localize_settings( array $settings ) {

		if (!defined('IS_PRO_ELEMENTS')) {
			$settings['elementPromotionURL'] = Plugin::instance()->license_admin->get_connect_url( [
				'utm_source'   => '%s', // Will be replaced in the frontend to the widget name
				'utm_medium'   => 'wp-dash',
				'utm_campaign' => 'connect-and-activate-license',
				'utm_content'  => 'editor-widget-promotion',
			] );

			$settings['dynamicPromotionURL'] = Plugin::instance()->license_admin->get_connect_url( [
				'utm_source'   => '%s', // Will be replaced in the frontend to the control name
				'utm_medium'   => 'wp-dash',
				'utm_campaign' => 'connect-and-activate-license',
				'utm_content'  => 'editor-dynamic-promotion',
			] );

			if ( ! isset( $settings['promotionWidgets'] ) ) {
				$settings['promotionWidgets'] = License_API::get_promotion_widgets();
			}
		}

		if ( Display_Conditions_Module::can_use_display_conditions() && Display_Conditions_Module::is_experiment_active() ) {
			$settings['displayConditions'] = Display_Conditions_Module::instance()
				->get_conditions_manager()
				->get_conditions_config();
		}

		return $settings;
	}

	public function on_elementor_init() {
		Plugin::elementor()->editor->notice_bar = new Notice_Bar();

		if ( isset( Plugin::elementor()->editor->promotion ) ) {
			Plugin::elementor()->editor->promotion = new Promotion();
		}
	}

	public function on_elementor_editor_init() {
		Plugin::elementor()->common->add_template( __DIR__ . '/template.php' );
	}

	protected function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}
}
