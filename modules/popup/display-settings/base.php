<?php

namespace ElementorPro\Modules\Popup\DisplaySettings;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base extends Controls_Stack {

	private $current_group;

	protected function start_settings_group( $group_name, $group_title ) {
		$this->current_group = $group_name;

		$args = [
			'type' => Controls_Manager::HEADING,
			'label' => $group_title,
		];

		$this->add_control( $group_name . '_heading', $args );
	}

	protected function end_settings_group() {
		$this->add_control(
			$this->current_group,
			[
				'type' => Controls_Manager::SWITCHER,
				'classes' => 'elementor-popup__display-settings__group-toggle',
				'frontend_available' => true,
			]
		);

		$this->current_group = null;
	}

	protected function add_settings_group_control( $id, array $args ) {
		$id = $this->get_prefixed_control_id( $id );

		$args['frontend_available'] = true;

		if ( ! empty( $args['condition'] ) ) {
			$args['condition'] = array_combine(
				array_map( function( $key ) {
					return $this->current_group . '_' . $key;
				}, array_keys( $args['condition'] ) ),
				$args['condition']
			);
		}

		$args['condition'][ $this->current_group ] = 'yes';

		return $this->add_control( $id, $args );
	}

	protected function get_prefixed_control_id( $id ) {
		return $this->current_group . '_' . $id;
	}
}
