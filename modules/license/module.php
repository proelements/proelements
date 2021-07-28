<?php
namespace ElementorPro\Modules\License;

use ElementorPro\License\Admin;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	/**
	 * @return string
	 */
	public function get_name() {
		return 'license';
	}

	/**
	 * @param array $connect_info
	 *
	 * @return array
	 */
	private function add_license_to_connect_info( array $connect_info ) {
		$license_key = Admin::get_license_key();

		if ( ! empty( $license_key ) ) {
			$connect_info['license'] = $license_key;
		}

		return $connect_info;
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		add_filter( 'elementor/connect/additional-connect-info', function ( array $connect_info ) {
			return $this->add_license_to_connect_info( $connect_info );
		} );
	}
}
