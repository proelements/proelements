<?php
namespace ElementorPro\Core;

use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

final class Modules_Manager {
	/**
	 * @var Module_Base[]
	 */
	private $modules = [];

	public function __construct() {
		$modules = [
			'query-control',
			'custom-attributes',
			'custom-css',
			'page-transitions',
			// role-manager Must be before Global Widget
			'role-manager',
			'global-widget',
			'assets-manager',
			'popup',
			'motion-fx',
			'usage',
			'screenshots',
			'compatibility-tag',
			'admin-top-bar',
			'notes',
			'announcements',
			'display-conditions',
			'element-manager',
			'checklist',

			// Modules with Widgets.
			'theme-builder',
			'loop-builder',
			'off-canvas',
			'posts',
			'gallery',
			'forms',
			'slides',
			'nav-menu',
			'animated-headline',
			'hotspot',
			'pricing',
			'flip-box',
			'call-to-action',
			'carousel',
			'table-of-contents',
			'countdown',
			'share-buttons',
			'theme-elements',
			'blockquote',
			'custom-code',
			'woocommerce',
			'social',
			'library',
			'dynamic-tags',
			'scroll-snap',
			'sticky',
			'wp-cli',
			'lottie',
			'code-highlight',
			'video-playlist',
			'payments',
			'progress-tracker',
			'mega-menu',
			'nested-carousel',
			'loop-filter',
			'tiers',
			'link-in-bio',
			'floating-buttons',
			'search',
			'cloud-library',
		];

		foreach ( $modules as $module_name ) {
			$class_name = str_replace( '-', ' ', $module_name );
			$class_name = str_replace( ' ', '', ucwords( $class_name ) );
			$class_name = '\ElementorPro\Modules\\' . $class_name . '\Module';

			/** @var Module_Base $class_name */
			$experimental_data = $class_name::get_experimental_data();

			if ( $experimental_data ) {
				Plugin::elementor()->experiments->add_feature( $experimental_data );

				if ( ! Plugin::elementor()->experiments->is_feature_active( $experimental_data['name'] ) ) {
					continue;
				}
			}

			if ( $class_name::is_active() ) {
				$this->modules[ $module_name ] = $class_name::instance();
			}
		}
	}

	/**
	 * @param string $module_name
	 *
	 * @return Module_Base|Module_Base[]
	 */
	public function get_modules( $module_name ) {
		if ( $module_name ) {
			if ( isset( $this->modules[ $module_name ] ) ) {
				return $this->modules[ $module_name ];
			}

			return null;
		}

		return $this->modules;
	}
}
