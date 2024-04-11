<?php


namespace ElementorPro\Modules\DisplayConditions\Classes;

class And_Condition {
	/**
	 * @var $conditions_manager Object
	 */
	private $conditions_manager;

	/**
	 * @var $conditions array
	 */
	private $conditions;

	public function __construct( $conditions_manager, $conditions ) {
		$this->conditions_manager = $conditions_manager;
		$this->conditions = $conditions;
	}

	public function check() {
		foreach ( $this->conditions as $condition_options ) {
			$condition_result = $this->is_condition_passing_check( $condition_options );

			if ( ! $condition_result ) {
				return false;
			}
		}

		return true;
	}

	private function is_condition_passing_check( $condition_options ) {
		$condition_instance = $this->get_condition_instance( $condition_options );

		return $condition_instance
			? $condition_instance->check( $condition_options )
			: true;
	}

	private function get_condition_instance( $condition ) {
		if ( ! isset( $condition['condition'] ) ) {
			return false;
		}

		return $this->conditions_manager->get_condition( $condition['condition'] );
	}
}
