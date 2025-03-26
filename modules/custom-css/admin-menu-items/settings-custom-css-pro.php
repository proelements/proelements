<?php
namespace ElementorPro\Modules\CustomCss\AdminMenuItems;

use Elementor\Core\Kits\Documents\Tabs\Settings_Custom_CSS;
use Elementor\Core\Utils\Promotions\Filtered_Promotions_Manager;
use ElementorPro\Modules\CustomCss\Module as Custom_Css;
use ElementorPro\Modules\Tiers\Module as Tiers;

class Settings_Custom_CSS_Pro extends Settings_Custom_CSS {
	protected function register_tab_controls() {
		$promotion_data = [
			'title' => esc_html__( 'Meet Our Custom CSS', 'elementor-pro' ),
			'messages' => [
				esc_html__( 'Apply CSS globally across your site to elevate your designs.', 'elementor-pro' ),
			],
			'link' => 'https://go.elementor.com/go-pro-advanced-global-css/',
		];

		$promotion_data = Filtered_Promotions_Manager::get_filtered_promotion_data( $promotion_data, 'elementor-pro/advanced-custom-css-promotion-pro-settings/promotion', 'link' );
		$template = Tiers::get_promotion_template( $promotion_data );

		Custom_Css::instance()->replace_controls_with_upgrade_promotion( $this->parent, $this->get_id(), $template );
	}
}
