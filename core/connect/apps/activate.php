<?php
namespace ElementorPro\Core\Connect\Apps;

use Elementor\Core\Common\Modules\Connect\Apps\Common_App;
use ElementorPro\License;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Activate extends Common_App {
	public function get_title() {
		return esc_html__( 'Activate', 'elementor-pro' );
	}

	public function get_slug() {
		return 'activate';
	}
}
