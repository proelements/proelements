<?php
namespace ElementorPro\Modules\CloudLibrary;

use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;
use ElementorPro\Core\Connect\Apps\Activate;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {

	public function get_name(): string {
		return 'cloud-library';
	}

	public static function is_active(): bool {
		return Plugin::elementor()->experiments->is_feature_active( 'cloud-library' );
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/init', function () {
			$this->set_cloud_library_settings();
		}, 13 /** after elementor core */ );
	}

	private function set_cloud_library_settings() {
		if ( ! Plugin::elementor()->common ) {
			return;
		}

		/** @var ConnectModule $connect */
		$connect = Plugin::elementor()->common->get_component( 'connect' );

		/** @var Activate $activate */
		$activate = $connect->get_app( 'activate' );

		if ( ! $activate ) {
			return;
		}

		Plugin::elementor()->app->set_settings( 'cloud-library', [
			'library_connect_url'  => esc_url( $activate->get_admin_url( 'authorize', [
				'utm_source' => 'template-library',
				'utm_medium' => 'wp-dash',
				'utm_campaign' => 'connect-and-activate-license',
				'utm_content' => 'cloud-library',
			] ) ),
			'library_connect_title' => esc_html__( 'Connect & Activate', 'elementor-pro' ),
			'library_connect_sub_title' => esc_html__( 'Sub Title', 'elementor-pro' ),
			'library_connect_button_text' => esc_html__( 'Connect & Activate', 'elementor-pro' ),
		] );
	}
}
