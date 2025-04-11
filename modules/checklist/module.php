<?php

namespace ElementorPro\Modules\Checklist;

use Elementor\Core\Isolation\Kit_Adapter_Interface;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Module extends Module_Base {
	private $module;

	private ?Wordpress_Adapter_Interface $wordpress_adapter;

	private ?Kit_Adapter_Interface $kit_adapter;

	public function __construct( ?Wordpress_Adapter_Interface $wordpress_adapter = null, ?Kit_Adapter_Interface $kit_adapter = null ) {
		if ( ! class_exists( 'Elementor\\Modules\\Checklist\\Module' ) ) {
			return;
		}

		$this->module = \Elementor\Modules\Checklist\Module::instance();
		$this->wordpress_adapter = $wordpress_adapter;
		$this->kit_adapter = $kit_adapter;

		add_filter( 'elementor/checklist/steps', [ $this, 'replace_steps' ], 1 );
	}

	public function get_name() : string {
		return 'e-checklist';
	}

	/**
	 * @param array $steps
	 * @return \Elementor\Modules\Checklist\Steps\Step_Base[]
	 */
	public function replace_steps( array $steps ) : array {
		$formatted_steps = [];

		foreach ( $steps as $step_id => $step ) {
			if ( \Elementor\Modules\Checklist\Steps\Setup_Header::STEP_ID !== $step_id ) {
				$formatted_steps[ $step_id ] = $step;
				continue;
			}

			$header_step = new \ElementorPro\Modules\Checklist\Steps\Setup_Header( $this->module, $this->wordpress_adapter, $this->kit_adapter );
			$formatted_steps[ $header_step->get_id() ] = $header_step;
		}

		return $formatted_steps;
	}
}
