<?php

namespace ElementorPro\Modules\Popup\AdminMenuItems;

use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item;
use Elementor\TemplateLibrary\Source_Local;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Popups_Menu_Item implements Admin_Menu_Item {
	public function get_capability() {
		return 'publish_posts';
	}

	public function get_label() {
		return esc_html__( 'Popups', 'elementor-pro' );
	}

	public function get_parent_slug() {
		return Source_Local::ADMIN_MENU_SLUG;
	}

	public function get_position() {
		return null;
	}

	public function is_visible() {
		return true;
	}
}
