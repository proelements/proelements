<?php
namespace ElementorPro\Modules\Woocommerce\Data;

use ElementorPro\Data\Base\Controller as Controller_Pro_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Controller extends Controller_Pro_Base {

	public function get_name() {
		return 'woocommerce-module';
	}

	public function register_endpoints() {
		$this->register_endpoint( Endpoints\Set_Notice_Dismissed::class );
		$this->register_endpoint( Endpoints\Get_Notice_Dismissed::class );
	}
}
