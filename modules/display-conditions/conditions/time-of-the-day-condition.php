<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use DateTime;
use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Date_Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Time_Of_The_Day_Condition extends Condition_Base {

	public function get_name() {
		return 'time_of_the_day';
	}

	public function get_label() {
		return esc_html__( 'Time of the day', 'elementor-pro' );
	}

	public function get_group() {
		return 'date';
	}

	public function get_gm_date() {
		return gmdate( 'H:i' );
	}

	public function check( $args ) : bool {
		if ( empty( $args['time'] ) ) {
			return false;
		}

		$time_now = $this->get_gm_date();
		$expected_time = $this->convert_date_time_to_24_hour_format( $args['time'] );

		return Comparators_Checker::check_date_time( $args['comparator'], $time_now, $expected_time );

	}

	/**
	 * @param $date_time_string
	 * @return string
	 * @throws \Exception
	 */
	public function convert_date_time_to_24_hour_format( $date_time_string ): string {

		if ( ! $this->is_valid_date_time_string( $date_time_string ) ) {
			return '';
		}

		$date_time = DateTime::createFromFormat( 'm-d-Y H:i', $date_time_string );

		return $date_time->format( 'H:i' );
	}

	private function is_valid_date_time_string( $date_time_string ): bool {
		$date_time = DateTime::createFromFormat( 'm-d-Y H:i', $date_time_string );

		if ( ! $date_time || $date_time->format( 'm-d-Y H:i' ) !== $date_time_string ) {
			return false;
		}

		return true;
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS,
				Comparator_Provider::COMPARATOR_IS_NOT,
				Comparator_Provider::COMPARATOR_IS_BEFORE,
				Comparator_Provider::COMPARATOR_IS_AFTER,
				Comparator_Provider::COMPARATOR_IS_BEFORE_INCLUSIVE,
				Comparator_Provider::COMPARATOR_IS_AFTER_INCLUSIVE,
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
			'time',
			[
				'type' => Controls_Manager::DATE_TIME,
				'variant' => 'time',
				'required' => true,
			]
		);

		$this->add_control(
			'time_type',
			[
				'type' => Controls_Manager::SELECT,
				'options' => Date_Condition_Base::get_time_options(),
				'default' => Date_Condition_Base::OPTION_SERVER,
				'disabled_options' => Date_Condition_Base::OPTION_CLIENT,
			]
		);
	}
}
