<?php
namespace ElementorPro\Core\Data;

use ElementorPro\Modules\LoopFilter\Data\Endpoints\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Controller {

	private $endpoints = [];

	abstract public function get_name();

	public function get_namespace() {
		return 'elementor-pro/v1';
	}

	abstract protected function register_endpoints();

	protected function register_endpoint( $endpoint ) {
		$endpoint_instance = new $endpoint( $this );

		$this->endpoints[ $endpoint_instance->get_name() ] = $endpoint_instance;
	}

	public function __construct() {
		add_action( 'rest_api_init', function () {
			$this->register_endpoints(); // Because 'register_endpoints' is protected.
		} );
	}
}
