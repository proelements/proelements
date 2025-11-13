<?php
namespace ElementorPro\Modules\Usage;

use Elementor\Modules\System_Info\Reporters\Base as Base_Reporter;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Integrations_Reporter extends Base_Reporter {

	public function get_title() {
		return esc_html__( 'Integrations', 'elementor-pro' );
	}

	public function get_fields() {
		return [
			'integrations' => '',
		];
	}

	public function get_integrations() : array {
		$usage_integrations_text = '';

		$integrations = Module::instance()->get_integrations_usage();

		foreach ( array_keys( $integrations ) as $integration ) {
			$usage_integrations_text .= '<tr><td>' . $integration . '</td><td>' . esc_html__( 'Active', 'elementor-pro' ) . '</td></tr>';
		}

		return [
			'value' => $usage_integrations_text,
		];
	}

	public function get_raw_integrations() : array {
		$usage_integrations = PHP_EOL;

		$integrations = Module::instance()->get_integrations_usage();

		foreach ( array_keys( $integrations ) as $integration ) {
			$usage_integrations .= "\t" . $integration . ': ' . esc_html__( 'Active', 'elementor-pro' ) . PHP_EOL;
		}

		return [
			'value' => $usage_integrations,
		];
	}
}
