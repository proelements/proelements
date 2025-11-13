<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use Elementor\Controls_Stack;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Template_Conditions extends Controls_Stack {

	public function get_name() {
		return 'template-conditions';
	}

	protected function register_controls() {
		parent::register_controls();

		$this->add_control(
			'conditions',
			[
				'section' => 'settings',
				'type' => Conditions_Repeater::CONTROL_TYPE,
			]
		);
	}
}
