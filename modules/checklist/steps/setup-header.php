<?php

namespace ElementorPro\Modules\Checklist\Steps;

use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) || ! class_exists( '\\Elementor\\Modules\\Checklist\\Steps\\Setup_Header' ) ) {
	exit;
}

class Setup_Header extends \Elementor\Modules\Checklist\Steps\Setup_Header {
	const STEP_ID = 'setup_header_pro';

	public function __construct( $module, $wordpress_adapter = null, $kit_adapter = null ) {
		$promotion_data = ! $this->does_license_support_header()
			? [
				'url' => 'http://go.elementor.com/app-website-checklist-header-article',
				'text' => esc_html__( 'Upgrade Now', 'elementor-pro' ),
				'icon' => 'default',
			]
			: null;

		parent::__construct( $module, $wordpress_adapter, $kit_adapter, $promotion_data );
	}

	public function get_id() : string {
		return self::STEP_ID;
	}

	public function is_visible() : bool {
		return true;
	}

	public function get_cta_url() : string {
		$base_create_url = Plugin::elementor()->documents->get_create_new_post_url( 'elementor_library' );

		return add_query_arg( [ 'template_type' => 'header' ], $base_create_url );
	}

	private function does_license_support_header() : bool {
		return API::is_licence_has_feature( 'theme-builder' );
	}
}
