<?php
namespace ElementorPro\Modules\Blockquote;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Blockquote',
		];
	}

	public function get_name() {
		return 'blockquote';
	}
}
