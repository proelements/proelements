<?php
namespace ElementorPro\Modules\CustomCss\AdminMenuItems;

use Elementor\Core\Kits\Documents\Tabs\Settings_Custom_CSS;
use ElementorPro\Modules\CustomCss\Module as Custom_Css;
use ElementorPro\Modules\Tiers\Module as Tiers;

class Settings_Custom_CSS_Pro extends Settings_Custom_CSS {
	protected function register_tab_controls() {
		$template = Tiers::get_promotion_template( [
			'title' => esc_html__( 'Meet Our Custom CSS', 'elementor-pro' ),
			'messages' => [
				esc_html__( 'Apply CSS globally across your site to elevate your designs.', 'elementor-pro' ),
			],
			'link' => 'https://go.elementor.com/go-pro-advanced-global-css/',
		] );

		Custom_Css::instance()->replace_controls_with_upgrade_promotion( $this->parent, $this->get_id(), $template );
	}
}
