<?php
namespace ElementorPro\Modules\ThemeBuilder\AdminMenuItems;

use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item;
use Elementor\TemplateLibrary\Source_Local;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Theme_Builder_Menu_Item implements Admin_Menu_Item {
	/**
	 * Capability required for Theme Builder admin access.
	 * Static so MCP and other call sites can check without instantiating.
	 */
	public static function get_user_capability(): string {
		return 'publish_posts';
	}

	public function get_capability(): string {
		return self::get_user_capability();
	}

	public function get_label(): string {
		return esc_html__( 'Theme Builder', 'elementor-pro' );
	}

	public function get_parent_slug(): string {
		return Source_Local::ADMIN_MENU_SLUG;
	}

	public function is_visible(): bool {
		return true;
	}

	public function get_position(): ?int {
		return 20;
	}
}
