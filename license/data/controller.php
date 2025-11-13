<?php
namespace ElementorPro\License\Data;

use ElementorPro\Core\Data\Controller as Base_Controller;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Controller extends Base_Controller {

	public function get_name() {
		return 'license';
	}

	protected function register_endpoints() {
		$this->register_endpoint( Endpoints\Get_Tier_Features::class );
	}
}
