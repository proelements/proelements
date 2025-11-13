<?php

namespace ElementorPro\Modules\DisplayConditions\Classes;

use Elementor\Core\Editor\Editor;

class Cache_Notice {
	const OPTION_NAME_DC_CACHE_NOTICE_DISMISSED = 'elementor_pro_dc_cache_notice_dismissed';
	const NOTICE_STATUS_YES = 'yes';

	public function should_show_notice() : bool {
		return self::NOTICE_STATUS_YES !== get_option( self::OPTION_NAME_DC_CACHE_NOTICE_DISMISSED );
	}

	public function set_notice_status() : bool {
		if ( ! current_user_can( Editor::EDITING_CAPABILITY ) ) {
			throw new \Exception( 'Access denied.' );
		}

		return add_option( self::OPTION_NAME_DC_CACHE_NOTICE_DISMISSED, self::NOTICE_STATUS_YES, '', 'no' );
	}
}
