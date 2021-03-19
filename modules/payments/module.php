<?php
namespace ElementorPro\Modules\Payments;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Paypal_Button',
		];
	}

	public function get_name() {
		return 'payments';
	}
}
