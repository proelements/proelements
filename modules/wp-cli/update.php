<?php
namespace ElementorPro\Modules\WpCli;

use Elementor\Modules\WpCli\Update as UpdateBase;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Elementor Page Builder Pro cli tools.
 */
class Update extends UpdateBase {

	protected function get_update_db_manager_class() {
		return '\ElementorPro\Core\Upgrade\Manager';
	}
}
