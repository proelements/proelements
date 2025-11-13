<?php
namespace ElementorPro\Modules\LoopBuilder\Skins;

use ElementorPro\Modules\LoopBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Skin_Loop_Post extends Skin_Loop_Base {

	public function get_id() {
		return Module::LOOP_POST_SKIN_ID;
	}

	public function get_title() {
		return esc_html__( 'Posts', 'elementor-pro' );
	}
}
