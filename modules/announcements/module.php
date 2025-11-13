<?php
namespace ElementorPro\Modules\Announcements;

use Elementor\Core\Base\App as BaseApp;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseApp {

	/**
	 * @return bool
	 */
	public static function is_active(): bool {
		return is_admin();
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return 'announcements';
	}

	public function __construct() {
		parent::__construct();
	}
}
