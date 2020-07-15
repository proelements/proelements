<?php
namespace ElementorPro\Modules\Slides;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return 'slides';
	}

	public function get_widgets() {
		return [
			'Slides',
		];
	}
}
