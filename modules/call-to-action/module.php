<?php
namespace ElementorPro\Modules\CallToAction;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Call_To_Action',
		];
	}

	public function get_name() {
		return 'call-to-action';
	}
}
