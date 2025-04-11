<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Site_Logo extends Data_Tag {
	public function get_name() {
		return 'site-logo';
	}

	public function get_title() {
		return esc_html__( 'Site Logo', 'elementor-pro' );
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [ Module::IMAGE_CATEGORY ];
	}

	public function get_value( array $options = [] ) {
		$custom_logo_id = get_theme_mod( 'custom_logo' );

		if ( $custom_logo_id ) {
			$url = wp_get_attachment_image_src( $custom_logo_id, 'full' )[0] ?? ELEMENTOR_PRO_ASSETS_URL . 'images/logo-placeholder.png';
		} else {
			$url = ELEMENTOR_PRO_ASSETS_URL . 'images/logo-placeholder.png';
		}

		return [
			'id' => $custom_logo_id,
			'url' => $url,
		];
	}
}
