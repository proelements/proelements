<?php
namespace ElementorPro\Modules\ProgressTracker;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'ProgressTracker',
		];
	}

	public function get_name() {
		return 'progress-tracker';
	}
}
