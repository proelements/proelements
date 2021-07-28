<?php
namespace ElementorPro\Modules\Hotspot;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Hotspot',
		];
	}

	public function get_name() {
		return 'hotspot';
	}
}
