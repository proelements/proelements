<?php

namespace ElementorPro\Modules\Variables;

use Elementor\Modules\Variables\PropTypes\Size_Variable_Prop_Type;
use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const MODULE_NAME = 'e-variables';

	public function get_name() {
		return self::MODULE_NAME;
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

		add_action( 'elementor/editor/before_enqueue_scripts', fn () => $this->enqueue_editor_scripts() );
	}

	private function is_experiment_active(): bool {
		return class_exists( 'Elementor\\Modules\\Variables\\Module' )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}

	private function get_quota_config( $limit ): array {
		return [
			Size_Variable_Prop_Type::get_key() => $limit,
		];
	}

	public function enqueue_editor_scripts() {
		$limit = 100000;

		if ( API::is_license_expired() ) {
			$limit = 0;
		}

		wp_add_inline_script(
			'elementor-common',
			'window.ElementorVariablesQuotaConfigExtended = ' . wp_json_encode( $this->get_quota_config( $limit ) ) . ';',
			'before'
		);
	}
}
