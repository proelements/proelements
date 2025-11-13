<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class Post_URL extends Data_Tag {

	public function get_name() {
		return 'post-url';
	}

	public function get_title() {
		return esc_html__( 'Post URL', 'elementor-pro' );
	}

	public function get_group() {
		return Module::POST_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	public function get_value( array $options = [] ) {
		return get_permalink();
	}
}
