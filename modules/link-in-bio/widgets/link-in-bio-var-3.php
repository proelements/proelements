<?php

namespace ElementorPro\Modules\LinkInBio\Widgets;

use Elementor\Modules\LinkInBio\Base\Widget_Link_In_Bio_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Link_In_Bio_Var_3 extends Widget_Link_In_Bio_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['cta_section']['cta_has_image'] = true;
		array_pop( $config['content']['cta_section']['cta_repeater_defaults'] );
		$config['style']['cta_section']['has_link_type'] = false;
		$config['style']['cta_section']['has_corners'] = false;
		$config['style']['cta_section']['has_padding'] = false;
		$config['style']['cta_section']['has_border_control']['show_border_args']['condition'] = [];
		$config['style']['cta_section']['has_border_control']['border_width_args']['condition'] = [];
		$config['style']['cta_section']['has_border_control']['border_color_args']['condition'] = [];

		return $config;
	}

	public function get_name(): string {
		return 'link-in-bio-var-3';
	}

	public function get_title(): string {
		return esc_html__( 'Showcase', 'elementor-pro' );
	}

}
