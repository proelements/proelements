<?php

namespace ElementorPro\Modules\ThemeBuilder\EditorOneMenuItems;

use Elementor\Core\Admin\EditorOneMenu\Interfaces\Menu_Item_Third_Level_Interface;
use Elementor\Core\Admin\EditorOneMenu\Interfaces\Menu_Item_With_Custom_Url_Interface;
use Elementor\Modules\EditorOne\Classes\Menu_Config;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Editor_One_Theme_Builder_Menu_Item implements Menu_Item_Third_Level_Interface, Menu_Item_With_Custom_Url_Interface {
	public function get_position(): int {
		return 85; // After apps (Image Optimization=2, Accessibility=80), before Submissions (100)
	}

	public function get_slug(): string {
		return 'elementor-theme-builder';
	}

	public function get_parent_slug(): string {
		return Menu_Config::ELEMENTOR_HOME_MENU_SLUG;
	}

	public function get_label(): string {
		return esc_html__( 'Theme Builder', 'elementor-pro' );
	}

	public function get_group_id(): string {
		return Menu_Config::EDITOR_GROUP_ID;
	}

	public function get_capability(): string {
		return 'publish_posts';
	}

	public function is_visible(): bool {
		return true;
	}

	public function get_icon(): string {
		return 'build';
	}

	public function has_children(): bool {
		return false;
	}

	public function get_menu_url(): string {
		$url = Plugin::instance()->app->get_settings( 'menu_url' );
		$hash_position = strpos( $url, '#' );

		if ( false === $hash_position ) {
			return $url;
		}

		$return_to = esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ?? '' ) );

		return add_query_arg(
			[
				'return_to' => urlencode( $return_to ),
			],
			substr( $url, 0, $hash_position )
		) . substr( $url, $hash_position );
	}

	public function get_page_title(): string {
		return esc_html__( 'Theme Builder', 'elementor-pro' );
	}

	public function render(): void {
	}
}
