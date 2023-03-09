<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\Woocommerce\Module;
use ElementorPro\Modules\Woocommerce\Tags\Traits\Tag_Product_Id;
use ElementorPro\Modules\Woocommerce\Traits\Product_Id_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Data_Tag extends Data_Tag {

	use Tag_Product_Id;
	use Product_Id_Trait;

	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}
}
