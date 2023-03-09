<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\Woocommerce\Module;
use ElementorPro\Modules\Woocommerce\Tags\Traits\Tag_Product_Id;
use ElementorPro\Modules\Woocommerce\Traits\Product_Id_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Tag extends Tag {

	use Tag_Product_Id;
	use Product_Id_Trait;

	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}
}
