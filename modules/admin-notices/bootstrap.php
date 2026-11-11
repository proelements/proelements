<?php

namespace ElementorPro\Modules\AdminNotices;

use ElementorPro\Modules\AdminNotices\Notices\Fail_Load_Notice;
use ElementorPro\Modules\AdminNotices\Notices\Out_Of_Date_Notice;
use ElementorPro\Modules\AdminNotices\Notices\Upgrade_Recommendation_Notice;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/classes/upgrade-recommendation-dismissal.php';
require_once __DIR__ . '/components/notice-renderer.php';
require_once __DIR__ . '/notices/fail-load-notice.php';
require_once __DIR__ . '/notices/out-of-date-notice.php';
require_once __DIR__ . '/notices/upgrade-recommendation-notice.php';

class Bootstrap {

	const NOTICE_FAIL_LOAD = 'fail_load';

	const NOTICE_OUT_OF_DATE = 'out_of_date';

	const NOTICE_UPGRADE_RECOMMENDATION = 'upgrade_recommendation';

	/**
	 * @var string[]
	 */
	private static $bootstrap_notices = [];

	private static $admin_notices_hook_registered = false;

	public static function register_from_bootstrap( string $notice_type ): void {
		if ( in_array( $notice_type, self::$bootstrap_notices, true ) ) {
			return;
		}

		self::$bootstrap_notices[] = $notice_type;

		if ( ! self::$admin_notices_hook_registered ) {
			add_action( 'admin_notices', [ self::class, 'render_registered_notices' ] );
			self::$admin_notices_hook_registered = true;
		}
	}

	public static function render_registered_notices(): void {
		foreach ( self::$bootstrap_notices as $notice_type ) {
			self::render_notice( $notice_type );
		}
	}

	private static function render_notice( string $notice_type ): void {
		switch ( $notice_type ) {
			case self::NOTICE_FAIL_LOAD:
				( new Fail_Load_Notice() )->print();
				break;
			case self::NOTICE_OUT_OF_DATE:
				( new Out_Of_Date_Notice() )->print();
				break;
			case self::NOTICE_UPGRADE_RECOMMENDATION:
				( new Upgrade_Recommendation_Notice() )->print();
				break;
		}
	}
}
