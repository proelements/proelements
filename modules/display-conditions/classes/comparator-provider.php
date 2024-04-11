<?php
namespace ElementorPro\Modules\DisplayConditions\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Comparator_Provider {

	private static array $comparators = [];

	public const COMPARATOR_IS = 'is';
	public const COMPARATOR_IS_NOT = 'is_not';
	public const COMPARATOR_IS_ONE_OF = 'is_one_of';
	public const COMPARATOR_IS_NONE_OF = 'is_none_of';
	public const COMPARATOR_CONTAINS = 'contains';
	public const COMPARATOR_NOT_CONTAIN = 'not_contain';

	public const COMPARATOR_IS_BEFORE = 'is_before';
	public const COMPARATOR_IS_AFTER = 'is_after';
	public const COMPARATOR_IS_LESS_THAN_INCLUSIVE = 'is_less_than_inclusive';
	public const COMPARATOR_IS_GREATER_THAN_INCLUSIVE = 'is_greater_than_inclusive';
	public const COMPARATOR_IS_BEFORE_INCLUSIVE = 'is_before_inclusive';
	public const COMPARATOR_IS_AFTER_INCLUSIVE = 'is_after_inclusive';
	public const COMPARATOR_IS_EMPTY = 'is_empty';
	public const COMPARATOR_IS_NOT_EMPTY = 'is_not_empty';

	public static function get_comparators( array $comparators ): array {
		self::init_comparators_array_if_empty();

		return array_intersect_key( self::$comparators, array_flip( $comparators ) );
	}

	/**
	 * @return void
	 */
	private static function init_comparators_array_if_empty(): void {
		if ( ! empty( self::$comparators ) ) {
			return;
		}

		self::$comparators[ static::COMPARATOR_IS ] = esc_html__( 'Is', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_NOT ] = esc_html__( 'Is Not', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_ONE_OF ] = esc_html__( 'Is', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_NONE_OF ] = esc_html__( 'Is Not', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_CONTAINS ] = esc_html__( 'Contains', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_NOT_CONTAIN ] = esc_html__( 'Does not contain', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_BEFORE ] = esc_html__( 'Is Before', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_AFTER ] = esc_html__( 'Is After', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_LESS_THAN_INCLUSIVE ] = esc_html__( 'Less than or equal', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_GREATER_THAN_INCLUSIVE ] = esc_html__( 'Greater than or equal', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_BEFORE_INCLUSIVE ] = esc_html__( 'Is on or before', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_AFTER_INCLUSIVE ] = esc_html__( 'Is on or after', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_EMPTY ] = esc_html__( 'Is Empty', 'elementor-pro' );
		self::$comparators[ static::COMPARATOR_IS_NOT_EMPTY ] = esc_html__( 'Is not Empty', 'elementor-pro' );
	}

}
