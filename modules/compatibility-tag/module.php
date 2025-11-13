<?php
namespace ElementorPro\Modules\CompatibilityTag;

use ElementorPro\Base\Module_Base;
use Elementor\Modules\CompatibilityTag\Base_Module as Compatibility_Tag_Base_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	const MODULE_NAME = 'compatibility-tag-pro';

	/**
	 * Checks if elementor core compatibility module is exists before
	 * activate this module
	 *
	 * @return bool
	 */
	public static function is_active() {
		return class_exists( Compatibility_Tag_Base_Module::class );
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return self::MODULE_NAME;
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		$this->add_component( 'compatibility-tag-pro-handler', new Compatibility_Tag_Component() );
	}
}
