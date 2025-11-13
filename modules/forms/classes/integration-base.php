<?php
namespace ElementorPro\Modules\Forms\Classes;

use Elementor\Controls_Manager;
use Elementor\Repeater;
use Elementor\Settings;
use ElementorPro\Modules\Forms\Controls\Fields_Map;
use ElementorPro\Modules\Forms\Widgets\Form;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Integration_Base extends Action_Base {

	public function handle_panel_request( array $data ) {}

	public static function global_api_control( $widget, $api_key = '', $label = '', $condition = [], $id = '' ) {
		if ( empty( $api_key ) ) {
			$content = sprintf(
				/* translators: 1: Integration label, 2: Link opening tag, 3: Link closing tag. */
				esc_html__( 'Set your %1$s in the %2$sIntegrations Settings%3$s.', 'elementor-pro' ),
				$label,
				sprintf( '<a href="%s" target="_blank">', Settings::get_settings_tab_url( 'integrations' ) ),
				'</a>'
			);
			$alert_type = 'warning';
		} else {
			$content = sprintf(
				/* translators: 1: Integration label, 2: Link opening tag, 3: Link closing tag. */
				esc_html__( 'You are using %1$s set in the %2$sIntegrations Settings%3$s.', 'elementor-pro' ),
				$label,
				sprintf( '<a href="%s" target="_blank">', Settings::get_settings_tab_url( 'integrations' ) ),
				'</a>'
			);
			$alert_type = 'info';
		}

		/* translators: %s: Integration label. */
		$content .= ' ' . sprintf( esc_html__( 'You can also set a different %s by choosing "Custom".', 'elementor-pro' ), $label );

		$widget->add_control(
			$id . '_api_key_msg',
			[
				'type' => Controls_Manager::ALERT,
				'alert_type' => $alert_type,
				'content' => $content,
				'condition' => $condition,
			]
		);
	}

	protected function get_fields_map_control_options() {
		return [];
	}

	final protected function register_fields_map_control( Form $form ) {
		$repeater = new Repeater();

		$repeater->add_control( 'remote_id', [ 'type' => Controls_Manager::HIDDEN ] );

		$repeater->add_control( 'local_id', [ 'type' => Controls_Manager::SELECT ] );

		$fields_map_control_options = [
			'label' => esc_html__( 'Field Mapping', 'elementor-pro' ),
			'type' => Fields_Map::CONTROL_TYPE,
			'separator' => 'before',
			'fields' => $repeater->get_controls(),
		];

		$fields_map_control_options = array_merge( $fields_map_control_options, $this->get_fields_map_control_options() );

		$form->add_control( $this->get_name() . '_fields_map', $fields_map_control_options );
	}
}
