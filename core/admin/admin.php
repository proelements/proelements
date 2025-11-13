<?php
namespace ElementorPro\Core\Admin;

use Elementor\Core\Base\App;
use Elementor\Rollback;
use Elementor\Settings;
use Elementor\Tools;
use Elementor\Utils;
use ElementorPro\Core\Utils as ProUtils;
use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Admin extends App {

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since 2.3.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'admin';
	}

	/**
	 * Enqueue admin styles.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function enqueue_styles() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_register_style(
			'elementor-pro-admin',
			ELEMENTOR_PRO_URL . 'assets/css/admin' . $suffix . '.css',
			[],
			ELEMENTOR_PRO_VERSION
		);

		wp_enqueue_style( 'elementor-pro-admin' );
	}

	public function enqueue_scripts() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-admin',
			ELEMENTOR_PRO_URL . 'assets/js/admin' . $suffix . '.js',
			[
				'elementor-admin',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		$locale_settings = [];

		/**
		 * Localized admin settings.
		 *
		 * Filters the localized settings used in the admin as JavaScript variables.
		 *
		 * By default Elementor Pro passes some admin settings to be consumed as JavaScript
		 * variables. This hook allows developers to add extra settings values to be consumed
		 * using JavaScript in WordPress admin.
		 *
		 * @since 1.0.0
		 *
		 * @param array $locale_settings Localized settings.
		 */
		$locale_settings = apply_filters( 'elementor_pro/admin/localize_settings', $locale_settings );

		Utils::print_js_config(
			'elementor-pro-admin',
			'ElementorProConfig',
			$locale_settings
		);
	}

	public function remove_go_pro_menu() {
		if (defined('IS_PRO_ELEMENTS')) {
			remove_submenu_page( "elementor", "elementor_custom_fonts" );
			remove_submenu_page( "elementor", "elementor_custom_icons" );
			remove_submenu_page( \Elementor\TemplateLibrary\Source_Local::ADMIN_MENU_SLUG, "theme_templates" );
			remove_submenu_page( \Elementor\TemplateLibrary\Source_Local::ADMIN_MENU_SLUG, "popup_templates" );
			return;
		}
		remove_action( 'admin_menu', [ Plugin::elementor()->settings, 'register_pro_menu' ], Settings::MENU_PRIORITY_GO_PRO );
	}

	public function add_finder_items( array $categories ) {
		$categories['settings']['items']['integrations'] = [
			'title' => esc_html__( 'Integrations', 'elementor-pro' ),
			'icon' => 'integration',
			'url' => Settings::get_settings_tab_url( 'integrations' ),
			'keywords' => [ 'integrations', 'settings', 'typekit', 'facebook', 'recaptcha', 'mailchimp', 'drip', 'activecampaign', 'getresponse', 'convertkit', 'elementor' ],
		];

		return $categories;
	}

	/**
	 * Admin constructor.
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'admin_menu', [ $this, 'remove_go_pro_menu' ], 999 );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );
	}
}
