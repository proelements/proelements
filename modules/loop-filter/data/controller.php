<?php
namespace ElementorPro\Modules\LoopFilter\Data;

use ElementorPro\Modules\LoopFilter\Data\Endpoints\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Controller {

	private $endpoints = [];

	public function get_name() {
		return 'loop-filter';
	}

	public function get_namespace() {
		return 'elementor-pro/v1';
	}

	private function register_endpoints() {
		$this->register_endpoint( Endpoints\Get_Post_Type_Taxonomies::class );
		$this->register_endpoint( Endpoints\Refresh_Loop::class );
	}

	private function register_endpoint( $endpoint ) {
		$endpoint_instance = new $endpoint( $this );

		$this->endpoints[ $endpoint_instance->get_name() ] = $endpoint_instance;
	}

	public function __construct() {
		add_action( 'rest_api_init', function () {
			$this->register_endpoints(); // Because 'register_endpoints' is protected.
		} );
	}
}
