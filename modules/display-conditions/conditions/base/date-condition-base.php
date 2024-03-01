<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions\Base;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Date_Condition_Base extends Condition_Base {
	private $condition_key;
	private $group_key;

	const COMPARATOR_KEY = 'comparator';
	const OPTION_KEY = 'date_type';

	const DATE_FORMAT = 'm-d-Y';
	const OPTION_SERVER = 'server';
	const OPTION_CLIENT = 'client';

	public function __construct( $condition_key, $group_key ) {
		$this->condition_key = $condition_key;
		$this->group_key = $group_key;
	}

	public function get_group() {
		return $this->group_key;
	}

	/**
	 * @return array
	 */
	public static function get_time_options(): array {
		return [
			self::OPTION_SERVER => esc_html__( 'Server Time', 'elementor-pro' ),
			self::OPTION_CLIENT => esc_html__( 'Visitor Time', 'elementor-pro' ),
		];
	}

	protected function check_date( $args, $date_to_check ): bool {
		$comparator = $args[ self::COMPARATOR_KEY ];
		$date_string = $args[ $this->condition_key ];
		$set_date = date_create_from_format( self::DATE_FORMAT, $date_string );

		if ( ! $set_date || ! $date_to_check || ! $comparator || $set_date->format( self::DATE_FORMAT ) !== $date_string ) {
			return false;
		}

		return Comparators_Checker::check_date_time( $comparator, $date_to_check, $set_date );
	}

	public function get_options() {
		$this->add_control(
			self::COMPARATOR_KEY,
			[
				'type' => Controls_Manager::SELECT,
				'options' => Comparator_Provider::get_comparators(
					[
						Comparator_Provider::COMPARATOR_IS,
						Comparator_Provider::COMPARATOR_IS_NOT,
						Comparator_Provider::COMPARATOR_IS_BEFORE,
						Comparator_Provider::COMPARATOR_IS_AFTER,
						Comparator_Provider::COMPARATOR_IS_BEFORE_INCLUSIVE,
						Comparator_Provider::COMPARATOR_IS_AFTER_INCLUSIVE,
					]
				),
				'default' => Comparator_Provider::COMPARATOR_IS,
			]
		);

		$this->add_control(
			$this->condition_key,
			[
				'type' => Controls_Manager::DATE_TIME,
				'label' => $this::get_label(),
				'variant' => 'date',
				'required' => true,
			]
		);

		$this->add_control(
			self::OPTION_KEY,
			[
				'type' => Controls_Manager::SELECT,
				'options' => self::get_time_options(),
				'default' => self::OPTION_SERVER,
				'disabled_options' => [ self::OPTION_CLIENT ],
			]
		);
	}
}
