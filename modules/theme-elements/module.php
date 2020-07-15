<?php
namespace ElementorPro\Modules\ThemeElements;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const SOURCE_TYPE_CURRENT_POST = 'current_post';
	const SOURCE_TYPE_CUSTOM = 'custom';

	public function get_name() {
		return 'theme-elements';
	}

	public function get_widgets() {
		$widgets = [
			'Search_Form',
			'Author_Box',
			'Post_Comments',
			'Post_Navigation',
			'Post_Info',
			'Sitemap',
		];

		if ( $this->is_yoast_seo_active() ) {
			$widgets[] = 'Breadcrumbs';
		}

		return $widgets;
	}

	public function is_yoast_seo_active() {
		return function_exists( 'yoast_breadcrumb' );
	}
}
