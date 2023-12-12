<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems;

use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item;
use Elementor\Settings;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Icons_Menu_Item implements Admin_Menu_Item {
	public function get_capability() {
		return Icons_Manager::CAPABILITY;
	}

	public function get_label() {
		return esc_html__( 'Custom Icons', 'elementor-pro' );
	}

	public function get_parent_slug() {
		return Settings::PAGE_ID;
	}

	public function get_position() {
		return null;
	}

	public function is_visible() {
		return true;
	}
}
