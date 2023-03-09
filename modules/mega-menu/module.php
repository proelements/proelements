<?php
namespace ElementorPro\Modules\MegaMenu;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;

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

	/**
	 * Add to the experiments
	 *
	 * @return array
	 */
	public static function get_experimental_data() {
		$experiment_data = [
			'name' => static::EXPERIMENT_NAME,
			'tag' => esc_html__( 'Feature', 'elementor-pro' ),
			'title' => esc_html__( 'Mega Menu', 'elementor-pro' ),
			'description' => esc_html__( 'Create a rich user experience by creating Mega Menu.', 'elementor-pro' ),
			'hidden' => true,
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default' => Manager::STATE_INACTIVE,
			'dependencies' => [
				'nested-elements',
				'container',
			],
			'new_site' => [
				'default_active' => false,
				'minimum_installation_version' => '3.11.0',
			],
		];

		if ( version_compare( ELEMENTOR_VERSION, '3.10.0', '<' ) ) {
			$experiment_data['mutable'] = false;
			$experiment_data['dependencies'] = [];
		}
		return $experiment_data;
	}
}
