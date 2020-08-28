<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use ElementorPro\Plugin;
use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Templates_Conditions_Conflicts extends Base_Endpoint {
	/**
	 * @return string
	 */
	public function get_name() {
		return 'templates-conditions-conflicts';
	}

	public function get_items( $request ) {
		/** @var Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		return $theme_builder
			->get_conditions_manager()
			->get_conditions_conflicts( intval( $request['post_id'] ), $request['condition'] );
	}
}
