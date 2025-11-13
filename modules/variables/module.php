<?php

namespace ElementorPro\Modules\Variables;

use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Modules\Variables\Module as VariablesModule;
use Elementor\Core\Experiments\Manager as ExperimentsManager;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const MODULE_NAME = 'e-variables';
	const EXPERIMENT_NAME = 'e_pro_variables';

	public function get_name() {
		return self::MODULE_NAME;
	}

	public static function get_experimental_data(): array {
		return [
			'name' => self::EXPERIMENT_NAME,
			'title' => esc_html__( 'Size Variables', 'elementor-pro' ),
			'description' => esc_html__( 'Allows the use of size variables within supported controls. Note: This feature requires both the "Atomic Widgets" and "Variables" experiments to be enabled.', 'elementor-pro' ),
			'hidden' => true,
			'default' => ExperimentsManager::STATE_ACTIVE,
			'release_status' => ExperimentsManager::RELEASE_STATUS_ALPHA,
		];
	}

	private function hooks() {
		return new Hooks();
	}

	private function is_supported_by_license() {
		return API::is_licence_has_feature( 'size-variable', API::BC_VALIDATION_CALLBACK );
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_experiment_active() || ! $this->is_supported_by_license() ) {
			return;
		}

		$this->hooks()->register();
	}

	private function is_experiment_active(): bool {
		return class_exists( 'Elementor\\Modules\\Variables\\Module' )
			&& Plugin::elementor()->experiments->is_feature_active( self::EXPERIMENT_NAME )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME )
			&& Plugin::elementor()->experiments->is_feature_active( VariablesModule::EXPERIMENT_NAME );
	}
}
