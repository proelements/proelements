<?php
namespace ElementorPro\Modules\WooCommerce\Skins;

use ElementorPro\Modules\LoopBuilder\Skins\Skin_Loop_Base;
use ElementorPro\Modules\LoopBuilder\Module as Loop_Module;
use ElementorPro\Modules\LoopBuilder\Widgets\Base as Loop_Widget_Base;
use ElementorPro\Modules\Woocommerce\Traits\Products_Trait;
use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Loop Products
 *
 * Skin for Product queries in Loop widgets.
 *
 * @since 3.8.0
 */
class Skin_Loop_Product extends Skin_Loop_Base {

	use Products_Trait;

	public function get_id() {
		return Module::LOOP_PRODUCT_SKIN_ID;
	}

	public function get_title() {
		return esc_html__( 'Products', 'elementor-pro' );
	}

	public function render() {
		$this->parent->add_render_attribute( '_wrapper', 'class', 'woocommerce' );

		parent::render();
	}

	/**
	 * Register Query Controls
	 *
	 * Registers the controls for the query used by the Loop.
	 *
	 * @since 3.8.0
	 */
	public function register_query_controls( Loop_Widget_Base $widget ) {
		$this->parent = $widget;

		$this->add_query_controls( Loop_Module::QUERY_ID );
	}

	protected function render_post() {
		global $product;
		$product = wc_get_product( get_the_ID() );

		parent::render_post();
	}
}
