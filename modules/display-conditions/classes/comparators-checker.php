<?php
namespace ElementorPro\Modules\DisplayConditions\Classes;

use DateTime;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Comparators_Checker {

	/**
	 * @param string $comparator
	 * @param string|DateTime $value_to_check
	 * @param string|DateTime $set_value
	 *
	 * @return bool
	 */
	public static function check_date_time( string $comparator, $value_to_check, $set_value ): bool {
		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS:
				return $set_value == $value_to_check;
			case Comparator_Provider::COMPARATOR_IS_NOT:
				return $set_value != $value_to_check;
			case Comparator_Provider::COMPARATOR_IS_AFTER:
				return $set_value < $value_to_check;
			case Comparator_Provider::COMPARATOR_IS_BEFORE:
				return $set_value > $value_to_check;
			case Comparator_Provider::COMPARATOR_IS_AFTER_INCLUSIVE:
				return $set_value <= $value_to_check;
			case Comparator_Provider::COMPARATOR_IS_BEFORE_INCLUSIVE:
				return $set_value >= $value_to_check;
			default:
				return false;
		}
	}

	public static function check_array_contains( string $comparator, array $expected_values, array $array_of_values ): bool {
		$is_contained = ! empty( array_intersect( $expected_values, $array_of_values ) );
		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS:
			case Comparator_Provider::COMPARATOR_IS_ONE_OF:
				return $is_contained;

			case Comparator_Provider::COMPARATOR_IS_NOT:
			case Comparator_Provider::COMPARATOR_IS_NONE_OF:
				return ! $is_contained;

			default:
				return false;
		}
	}

	public static function check_string_contains( string $comparator, string $expected_value, string $actual_value ): bool {
		$expected_value = strtolower( $expected_value );
		$actual_value = strtolower( $actual_value );

		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS:
				return $expected_value === $actual_value;

			case Comparator_Provider::COMPARATOR_IS_NOT:
				return $expected_value !== $actual_value;

			case Comparator_Provider::COMPARATOR_CONTAINS:
				return str_contains( $actual_value, $expected_value );

			case Comparator_Provider::COMPARATOR_NOT_CONTAIN:
				return ! str_contains( $actual_value, $expected_value );

			default:
				return false;
		}
	}

	public static function check_string_contains_and_empty( string $comparator, string $expected_value, string $actual_value ): bool {
		if ( self::check_string_contains( $comparator, $expected_value, $actual_value ) ) {
			return true;
		}

		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS_EMPTY:
				return empty( $actual_value );

			case Comparator_Provider::COMPARATOR_IS_NOT_EMPTY:
				return ! empty( $actual_value );

			default:
				return false;
		}
	}

	public static function check_equality( string $comparator, string $value, string $compare_to ): bool {
		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS:
				return $value === $compare_to;

			case Comparator_Provider::COMPARATOR_IS_NOT:
				return $value !== $compare_to;

			default:
				return false;
		}
	}

	/**
	 * @param string $comparator
	 * @param int $value
	 * @param int $compare_to
	 *
	 * @return bool
	 */
	public static function check_numeric_constraints( string $comparator, int $value, int $compare_to ): bool {
		switch ( $comparator ) {
			case Comparator_Provider::COMPARATOR_IS:
				return $compare_to === $value;
			case Comparator_Provider::COMPARATOR_IS_NOT:
				return $compare_to !== $value;
			case Comparator_Provider::COMPARATOR_IS_LESS_THAN_INCLUSIVE:
				return $compare_to <= $value;
			case Comparator_Provider::COMPARATOR_IS_GREATER_THAN_INCLUSIVE:
				return $compare_to >= $value;
			default:
				return false;
		}
	}
}
