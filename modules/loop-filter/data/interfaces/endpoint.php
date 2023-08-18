<?php
namespace ElementorPro\Modules\LoopFilter\Data\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

interface Endpoint {
	/**
	 * @return string The interface ID
	 */
	public function get_name(): string;

	/**
	 * @return string The route slug which will be used to access the endpoint by URL.
	 */
	public function get_route(): string;
}
