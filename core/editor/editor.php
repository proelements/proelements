<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Base\App;
use ElementorPro\License\Admin as License_Admin;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Editor extends App {

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

		if (!defined('IS_PRO_ELEMENTS'))
		add_filter( 'elementor/editor/localize_settings', [ $this, 'localize_settings' ] );
	}

	public function get_init_settings() {
		$settings = [
			'i18n' => [
				// 'edit_element' is here for Backwards Compatibility for Elementor Pro versions <3.1.0
				'edit_element' => esc_html__( 'Edit %s', 'elementor-pro' ),
			],
			'isActive' => License_API::is_license_active(),
			'urls' => [
				'modules' => ELEMENTOR_PRO_MODULES_URL,
				'connect' => License_Admin::get_url(),
			],
		];

		/**
		 * Editor settings.
		 *
		 * Filters the editor settings.
		 *
		 * @since 1.0.0
		 *
		 * @param array $settings settings.
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

		$this->print_config( 'elementor-pro' );
	}

	public function localize_settings( array $settings ) {
		$connect_url = Plugin::instance()->license_admin->get_connect_url();

		$settings['elementPromotionURL'] = $connect_url;
		$settings['dynamicPromotionURL'] = $connect_url;
		$settings['i18n']['see_it_in_action'] = esc_html__( 'Activate License', 'elementor-pro' );

		return $settings;
	}

	public function on_elementor_init() {
		Plugin::elementor()->editor->notice_bar = new Notice_Bar();
	}

	public function on_elementor_editor_init() {
		Plugin::elementor()->common->add_template( __DIR__ . '/template.php' );
	}

	protected function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}
}
