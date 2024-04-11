<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Date_Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Day_Of_The_Week_Condition extends Condition_Base {
	const CONDITION_KEY = 'days';

	public function get_name() {
		return 'day_of_the_week';
	}

	public function get_label() {
		return esc_html__( 'Day of the week', 'elementor-pro' );
	}

	public function get_group() {
		return 'date';
	}

	public function check( $args ) : bool {
		return Comparators_Checker::check_array_contains( $args['comparator'], [ strtolower( gmdate( 'l' ) ) ], $args['days'] );
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS_ONE_OF,
				Comparator_Provider::COMPARATOR_IS_NONE_OF,
			]
		);

		$this->add_control(
			'comparator',
			[
				'type' => Controls_Manager::SELECT,
				'options' => $comparators,
				'default' => Comparator_Provider::COMPARATOR_IS_ONE_OF,
			]
		);

		$this->add_control(
			self::CONDITION_KEY,
			[
				'type' => Controls_Manager::SELECT2,
				'options' => [
					'monday' => esc_html__( 'Monday', 'elementor-pro' ),
					'tuesday' => esc_html__( 'Tuesday', 'elementor-pro' ),
					'wednesday' => esc_html__( 'Wednesday', 'elementor-pro' ),
					'thursday' => esc_html__( 'Thursday', 'elementor-pro' ),
					'friday' => esc_html__( 'Friday', 'elementor-pro' ),
					'saturday' => esc_html__( 'Saturday', 'elementor-pro' ),
					'sunday' => esc_html__( 'Sunday', 'elementor-pro' ),
				],
				'multiple' => true,
				'required' => true,
			]
		);

		$this->add_control(
			'time_type',
			[
				'type' => Controls_Manager::SELECT,
				'options' => Date_Condition_Base::get_time_options(),
				'default' => Date_Condition_Base::OPTION_SERVER,
				'disabled_options' => [ Date_Condition_Base::OPTION_CLIENT ],
			]
		);
	}
}
