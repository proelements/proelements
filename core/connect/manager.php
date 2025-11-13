<?php
namespace ElementorPro\Core\Connect;

use ElementorPro\Core\Connect\Apps\Activate;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Manager {

	/**
	 * @param \Elementor\Core\Common\Modules\Connect\Module $apps_manager
	 */
	public function register_apps( $apps_manager ) {
		$apps = [
			'activate' => Activate::get_class_name(),
		];

		foreach ( $apps as $slug => $class ) {
			$apps_manager->register_app( $slug, $class );
		}
	}

	public function __construct() {
		add_action( 'elementor/connect/apps/register', [ $this, 'register_apps' ] );
	}
}
