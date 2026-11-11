<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

use ElementorPro\Modules\Forms\Submissions\Component as Submissions_Component;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Form_Submissions_Availability {

	const FORMS_MODULE_NAME = 'forms';

	/**
	 * @return true|\WP_Error
	 */
	public static function check() {
		if ( self::is_submissions_component_loaded() ) {
			return true;
		}

		return new \WP_Error(
			'form_submissions_unavailable',
			__( 'Form Submissions is turned off on this site. Turn it on in WP Admin → Elementor → Settings → Advanced → Form Submissions, then try again.', 'elementor-pro' ),
			[
				'status' => \WP_Http::FORBIDDEN,
				'description_notice' => __( 'Note: needs Form Submissions turned on (currently off for this site).', 'elementor-pro' ),
			]
		);
	}

	private static function is_submissions_component_loaded(): bool {
		$forms_module = Plugin::instance()->modules_manager->get_modules( self::FORMS_MODULE_NAME );

		if ( ! $forms_module ) {
			return false;
		}

		return false !== $forms_module->get_component( Submissions_Component::NAME );
	}
}
