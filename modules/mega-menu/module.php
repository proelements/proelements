<?php
namespace ElementorPro\Modules\MegaMenu;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const EXPERIMENT_NAME = 'mega-menu';

	public function get_widgets() {
		return [
			'Mega_Menu',
		];
	}

	public function get_name() {
		return 'mega-menu';
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( \Elementor\Modules\NestedElements\Module::EXPERIMENT_NAME );
	}

	/**
	 * Add to the experiments
	 *
	 * @return array
	 */
	public static function get_experimental_data() {
		$experiment_data = [
			'name' => static::EXPERIMENT_NAME,
			'title' => esc_html__( 'Menu', 'elementor-pro' ),
			'description' => sprintf(
				esc_html__( 'Create beautiful menus and mega menus with new nested capabilities. Mega menus are ideal for websites with complex navigation structures and unique designs. %1$sLearn More%2$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-mega-menu/" target="_blank">',
				'</a>'
			),
			'hidden' => false,
			'release_status' => Manager::RELEASE_STATUS_ALPHA,
			'default' => Manager::STATE_INACTIVE,
			'dependencies' => [
				'nested-elements',
			],
		];

		if ( version_compare( ELEMENTOR_VERSION, '3.11.0', '<' ) ) {
			$experiment_data['mutable'] = false;
			$experiment_data['dependencies'] = [];
		}
		return $experiment_data;
	}
}
