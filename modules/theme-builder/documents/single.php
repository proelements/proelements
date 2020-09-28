<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Single extends Single_Base {

	protected static function get_site_editor_type() {
		return 'single';
	}

	public static function get_title() {
		return __( 'Single', 'elementor-pro' );
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		// Fallback for old multipurpose `single` documents.
		$category = $this->get_meta( self::REMOTE_CATEGORY_META_KEY );

		if ( $category ) {
			if ( 'not_found404' === $category ) {
				$category = '404 page';
			} else {
				$category = 'single ' . $category;
			}

			$config['category'] = $category;
		} else {
			$config['category'] = 'single post';
		}

		return $config;
	}

	protected static function get_site_editor_thumbnail_url() {
		return ELEMENTOR_ASSETS_URL . 'images/app/site-editor/single-post.svg';
	}
}
