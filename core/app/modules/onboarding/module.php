<?php
namespace ElementorPro\Core\App\Modules\Onboarding;

use Elementor\Core\App\Modules\Onboarding\Module as Core_Onboarding_Module;
use ElementorPro\Plugin;
use Elementor\Core\Base\Module as BaseModule;
use ElementorPro\Core\Connect\Apps\Activate;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseModule {

	/**
	 * Get name
	 *
	 * @since 3.6.0
	 * @access public
	 *
	 * @return string
	 */
	public function get_name() {
		return 'onboarding';
	}

	/**
	 * Set Onboarding Settings
	 *
	 * Overrides the Onboarding App's Core settings with updated settings to accommodate for Elementor Pro.
	 *
	 * @since 3.6.0
	 * @access private
	 */
	private function set_onboarding_settings() {
		$common = Plugin::elementor()->common;
		$app = Plugin::elementor()->app;
		$onboarding_settings = $app->get_settings( 'onboarding' );

		// If the installed Elementor Core version does not include the Onboarding module, exit here.
		if ( ! $onboarding_settings ) {
			return;
		}

		/** @var Activate $activate */
		$activate = $common->get_component( 'connect' )->get_app( 'activate' );

		$onboarding_settings['urls']['connect'] = $activate->get_admin_url( 'authorize', [
			'utm_source' => 'editor-app',
			'utm_campaign' => 'connect-account',
			'utm_medium' => 'wp-dash',
			'utm_term' => Core_Onboarding_Module::VERSION,
			'source' => 'generic',
		] );

		$onboarding_settings['urls']['signUp'] = $activate->get_admin_url( 'authorize', [
			'utm_source' => 'editor-app',
			'utm_campaign' => 'connect-account',
			'utm_medium' => 'wp-dash',
			'utm_term' => Core_Onboarding_Module::VERSION,
			'source' => 'generic',
			'screen_hint' => 'signup',
		] );

		$app->set_settings( 'onboarding', $onboarding_settings );
	}

	public function __construct() {
		add_action( 'elementor/init', function () {
			$this->set_onboarding_settings();
		}, 13 /** after elementor core */ );
	}
}
