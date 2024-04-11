<?php

namespace ElementorPro\Modules\DisplayConditions\Classes;

class Or_Condition {
	/**
	 * @var $conditions_manager Object
	 */
	private $conditions_manager;

	/**
	 * @var $and_conditions And_Condition[]
	 */
	private $and_conditions;

	public function __construct( $conditions_manager, $sets ) {
		$this->conditions_manager = $conditions_manager;
		$this->set_and_conditions( $sets );
	}

	public function check() {
		if ( empty( $this->and_conditions ) ) {
			return true;
		}

		foreach ( $this->and_conditions as $condition ) {
			if ( $condition->check() ) {
				return true;
			}
		}

		return false;
	}

	private function set_and_conditions( $groups ) {
		$this->and_conditions = array_map( function ( $condition ) {
			return new And_Condition( $this->conditions_manager, $condition );
		}, $groups );
	}
}
