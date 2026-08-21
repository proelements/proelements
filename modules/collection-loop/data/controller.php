<?php
namespace ElementorPro\Modules\CollectionLoop\Data;

use ElementorPro\Core\Data\Controller as Controller_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Controller extends Controller_Base {
	public function get_name() {
		return 'collection-loop';
	}

	protected function register_endpoints() {
		$this->register_endpoint( Endpoints\Loop_Preview::class );
	}
}
