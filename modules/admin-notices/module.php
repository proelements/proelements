<?php

namespace ElementorPro\Modules\AdminNotices;

use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\AdminNotices\Classes\Upgrade_Recommendation_Dismissal;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/bootstrap.php';

class Module extends Module_Base {

	public static function is_active(): bool {
		return is_admin();
	}

	public function get_name(): string {
		return 'admin-notices';
	}

	public function __construct() {
		parent::__construct();

		Upgrade_Recommendation_Dismissal::register_dismiss_handlers();
	}
}
