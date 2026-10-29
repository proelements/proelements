<?php

namespace ElementorPro\Modules\Interactions;

use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Utils as ProUtils;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Modules\Interactions\Module as InteractionsModule;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_name() {
		return ProUtils::get_class_constant( InteractionsModule::class, 'MODULE_NAME', 'e-interactions' );
	}

	private function is_supported_by_current_license() {
		if ( empty( \ElementorPro\License\Admin::get_license_key() ) ) {
			return false;
		}

		if ( ! API::is_license_active() ) {
			return false;
		}

		return API::is_licence_has_feature( 'pro-interactions', API::BC_VALIDATION_CALLBACK );
	}

	private function hooks() {
		return new Hooks();
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_experiment_active() || ! $this->is_supported_by_current_license() ) {
			return;
		}

		$this->hooks()->register();
	}

	private function is_experiment_active(): bool {
		return class_exists( 'Elementor\\Modules\\Interactions\\Module' )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}
}
