<?php
namespace ElementorPro\Modules\WooCommerce\Skins;

use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;
use ElementorPro\Modules\LoopBuilder\Skins\Skin_Loop_Taxonomy_Base;
use ElementorPro\Modules\WooCommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Skin_Loop_Product_Taxonomy extends Skin_Loop_Taxonomy_Base {
	protected $post_type = 'product';

	public function get_id() {
		return Module::LOOP_PRODUCT_TAXONOMY_SKIN_ID;
	}

	public function get_title() {
		return esc_html__( 'Product Taxonomy', 'elementor-pro' );
	}

	public function render() {
		$this->parent->add_render_attribute( '_wrapper', 'class', 'woocommerce' );
		parent::render();
	}

	protected function get_default_source_option() {
		return Taxonomy_Loop_Provider::PRODUCT_CATEGORY_TAXONOMY;
	}
}
