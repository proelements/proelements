<?php
namespace ElementorPro\Modules\AnimatedHeadline;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Animated_Headline',
		];
	}

	public function get_name() {
		return 'animated-headline';
	}
}
