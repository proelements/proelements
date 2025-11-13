<?php
namespace ElementorPro\Core\Admin;

use ElementorPro\Core\Utils;
use ElementorPro\License\API;

class Action_Links {
	public static function get_links( array $links ): array {
		unset( $links['go_pro'] );

		return $links;
	}

	public static function get_pro_links( array $links ): array {
		if ( API::is_need_to_show_upgrade_promotion() ) {
			$go_advanced_text = esc_html__( 'Get Advanced Features', 'elementor-pro' );

			if ( Utils::is_sale_time() ) {
				$go_advanced_text = esc_html__( 'Discounted Upgrades Now!', 'elementor-pro' );
			}

			$links['go_advanced'] = sprintf( '<a href="%1$s" target="_blank" class="elementor-plugins-gopro">%2$s</a>', 'https://go.elementor.com/go-pro-advanced-plugins-screen/', $go_advanced_text );
		}

		return $links;
	}
}
