<?php
namespace ElementorPro\Modules\ThemeBuilder\Skins;

use ElementorPro\Modules\Posts\Skins\Skin_Full_Content;
use ElementorPro\Modules\Posts\Skins\Skin_Content_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Posts_Archive_Skin_Full_Content extends Skin_Full_Content {
	use Skin_Content_Base;
	use Posts_Archive_Skin_Base;

	public function get_id() {
		return 'archive_full_content';
	}

	/* Remove `posts_per_page` control */
	protected function register_post_count_control() {}
}
