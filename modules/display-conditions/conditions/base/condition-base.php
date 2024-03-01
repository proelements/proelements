<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions\Base;

use Elementor\Controls_Stack;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Condition_Base extends Controls_Stack {

	abstract public function get_label();

	abstract public function get_options();

	public function get_group() {
		return 'other';
	}

	public function check( $args ) : bool {
		return true;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'__settings'
		);

		$this->get_options();

		$this->end_controls_section();
	}

	protected function get_initial_config() {
		$config = parent::get_initial_config();

		$config['label'] = $this->get_label();
		$config['group'] = $this->get_group();

		return $config;
	}
}
