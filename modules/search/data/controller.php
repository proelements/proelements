<?php
namespace ElementorPro\Modules\Search\Data;

use ElementorPro\Modules\Search\Data\Endpoints\Base;
use ElementorPro\Core\Data\Controller as Controller_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Controller extends Controller_Base {
	public function get_name() {
		return 'search';
	}

	protected function register_endpoints() {
		$this->register_endpoint( Endpoints\Refresh_Search::class );
	}
}
