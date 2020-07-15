<?php
namespace ElementorPro\Modules\Forms\Classes;

use Elementor\Controls_Manager;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Integration_Base extends Action_Base {

	abstract public function handle_panel_request( array $data );

	public static function global_api_control( $widget, $api_key = '', $label = '', $condition = [], $id = '' ) {
		if ( empty( $api_key ) ) {
			/* translators: 1: Integration label, 2: Setting Page link. */
			$html = sprintf( __( 'Set your %1$s in the <a href="%2$s" target="_blank">Integrations Settings</a>.', 'elementor-pro' ), $label, Settings::get_url() . '#tab-integrations' );
			$content_classes = 'elementor-panel-alert elementor-panel-alert-warning';
		} else {
			/* translators: 1: Integration label, 2: Setting Page link. */
			$html = sprintf( __( 'You are using %1$s set in the <a href="%2$s" target="_blank">Integrations Settings</a>.', 'elementor-pro' ), $label, Settings::get_url() . '#tab-integrations' );
			$content_classes = 'elementor-panel-alert elementor-panel-alert-info';
		}

		/* translators: %s: Integration label */
		$html .= ' ' . sprintf( __( 'You can also set a different %s by choosing "Custom".', 'elementor-pro' ), $label );

		$widget->add_control(
			$id . '_api_key_msg',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => $html,
				'content_classes' => $content_classes,
				'condition' => $condition,
			]
		);
	}
}
