<?php
namespace ElementorPro\Modules\AtomicWidgets\Traits;

use ElementorPro\Modules\AtomicForm\Webmcp_Field_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

trait Has_Webmcp_Field_Exposure {
	public function get_atomic_settings(): array {
		return Webmcp_Field_Props::apply_exposure( parent::get_atomic_settings() );
	}
}
