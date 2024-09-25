<?php
namespace ElementorPro\Modules\MegaMenu;

use Elementor\Controls_Manager;
use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\MegaMenu\Controls\Control_Menu_Dropdown_Animation;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const EXPERIMENT_NAME = 'mega-menu';

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );

		add_action( 'elementor/controls/register', function ( Controls_Manager $controls_manager ) {
			$controls_manager->register( new Control_Menu_Dropdown_Animation() );
		} );
	}

	public function get_widgets() {
		return [
			'Mega_Menu',
		];
	}

	public function get_name() {
		return 'mega-menu';
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( \Elementor\Modules\NestedElements\Module::EXPERIMENT_NAME );
	}

	/**
	 * Add to the experiments
	 *
	 * @return array
	 */
	public static function get_experimental_data() {
		$experiment_data = [
			'name' => static::EXPERIMENT_NAME,
			'title' => esc_html__( 'Menu', 'elementor-pro' ),
			'description' => sprintf(
				esc_html__( 'Create beautiful menus and mega menus with new nested capabilities. Mega menus are ideal for websites with complex navigation structures and unique designs. %1$sLearn More%2$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-mega-menu/" target="_blank">',
				'</a>'
			),
			'hidden' => false,
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default' => Manager::STATE_INACTIVE,
			'dependencies' => [
				'container',
				'nested-elements',
			],
		];

		if ( version_compare( ELEMENTOR_VERSION, '3.11.0', '<' ) ) {
			$experiment_data['mutable'] = false;
			$experiment_data['dependencies'] = [];
		}
		return $experiment_data;
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/mega-menu/assets/scss/frontend.scss`
	 * to `/assets/css/widget-mega-menu.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		$direction_suffix = is_rtl() ? '-rtl' : '';
		$has_custom_breakpoints = Plugin::elementor()->breakpoints->has_custom_breakpoints();

		wp_register_style(
			'widget-mega-menu',
			Plugin::get_frontend_file_url( "widget-mega-menu{$direction_suffix}.min.css", $has_custom_breakpoints ),
			[ 'elementor-frontend' ],
			$has_custom_breakpoints ? null : ELEMENTOR_PRO_VERSION
		);
	}
}
