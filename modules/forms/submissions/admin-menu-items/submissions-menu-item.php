<?php
namespace ElementorPro\Modules\Forms\Submissions\AdminMenuItems;

use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item;
use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item_With_Page;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Submissions_Menu_Item implements Admin_Menu_Item_With_Page {
	public function get_capability() {
		return 'manage_options';
	}

	public function get_label() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_parent_slug() {
		return Settings::PAGE_ID;
	}

	public function is_visible() {
		return true;
	}

	public function get_position() {
		return null;
	}

	public function render() {
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php echo esc_html__( 'Submissions', 'elementor-pro' ); ?></h1>
			<hr class="wp-header-end">
			<div id="e-form-submissions"></div>
		</div>
		<?php
	}
}
