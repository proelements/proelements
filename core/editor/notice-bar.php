<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Editor\Notice_Bar as Base_Notice_Bar;
use ElementorPro\License\Admin;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notice_Bar extends Base_Notice_Bar {
	protected function get_init_settings() {
		return [];
	}
}
