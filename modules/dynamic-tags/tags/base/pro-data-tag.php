<?php
namespace ElementorPro\Modules\DynamicTags\Tags\Base;

use ElementorPro\Modules\DynamicTags\Module as DynamicTagsModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Pro_Data_Tag extends Data_Tag {
	// use License_Meta_Trait;

	protected function get_required_license_feature() {
		return DynamicTagsModule::LICENSE_FEATURE_DYNAMIC_TAGS_NAME;
	}
}
