<?php
namespace ElementorPro\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * This class is responsible for the interaction with PHP Core API.
 * The main benefit is making it easy to mock in testing.
 */
class PHP_Api {

	/**
	 * @param $from
	 * @param $to
	 *
	 * @return bool
	 */
	public function move_uploaded_file( $from, $to ) {
		return @ move_uploaded_file( $from, $to );
	}
}
