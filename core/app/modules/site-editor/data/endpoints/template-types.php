<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use ElementorPro\Plugin;
use ElementorPro\Core\App\Modules\SiteEditor\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Template_Types extends Base_Endpoint {
	/**
	 * @return string
	 */
	public function get_name() {
		return 'template-types';
	}

	public function get_items( $request ) {
		/** @var Module $site_editor_module */
		$site_editor_module = Plugin::instance()->app->get_component( 'site-editor' );

		return $site_editor_module->get_template_types();
	}
}
