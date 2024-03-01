<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Login_Status_Condition extends Condition_Base {

	public function get_name() {
		return 'login_status';
	}

	public function get_label() {
		return esc_html__( 'Login Status', 'elementor-pro' );
	}

	public function get_group() {
		return 'user';
	}

	public function check( $args ) : bool {
		return Comparators_Checker::check_equality( $args['comparator'], 'logged_in' === $args['status'], is_user_logged_in() );
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS,
			]
		);

		$this->add_control(
			'comparator',
			[
				'type' => Controls_Manager::SELECT,
				'options' => $comparators,
				'default' => Comparator_Provider::COMPARATOR_IS,
			]
		);

		$this->add_control(
			'status',
			[
				'type' => Controls_Manager::SELECT,
				'options' => [
					'logged_in' => esc_html__( 'Logged In', 'elementor-pro' ),
					'logged_out' => esc_html__( 'Logged Out', 'elementor-pro' ),
				],
				'default' => 'logged_in',
			]
		);
	}
}
