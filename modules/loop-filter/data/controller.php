<?php
namespace ElementorPro\Modules\LoopFilter\Data;

use ElementorPro\Core\Data\Controller as Controller_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Controller extends Controller_Base {
	public function get_name() {
		return 'loop-filter';
	}

	protected function register_endpoints() {
		$this->register_endpoint( Endpoints\Get_Post_Type_Taxonomies::class );
		$this->register_endpoint( Endpoints\Refresh_Loop::class );
	}
}
