<?php

namespace ElementorPro\Modules\DynamicTags\Tags\Base;

use Elementor\Core\DynamicTags\Tag as Base_Tag;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Tag extends Base_Tag {

	use Tag_Trait;
}
