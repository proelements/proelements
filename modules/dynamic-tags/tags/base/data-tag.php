<?php

namespace ElementorPro\Modules\DynamicTags\Tags\Base;

use Elementor\Core\DynamicTags\Data_Tag as Base_Data_Tag;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Data_Tag extends Base_Data_Tag {

	use Tag_Trait;
}
