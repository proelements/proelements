<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions\Base;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;

abstract class Title_Condition_Base extends Condition_Base {
	abstract protected function get_query();

	public function check( $args ) : bool {
		$comparator = $args['comparator'];
		$title = get_the_title();
		$titles = array_map( function ( $id ) {
			return get_the_title( $id );
		}, array_column( $args['titles'], 'id' ) );
		return Comparators_Checker::check_array_contains( $comparator, [ $title ], $titles );
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS,
				Comparator_Provider::COMPARATOR_IS_NOT,
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
			'titles',
			[
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_POST,
					'query' => $this->get_query(),
				],
				'multiple' => true,
				'placeholder' => esc_html__( 'Type to search', 'elementor-pro' ),
				'required' => true,
			]
		);
	}
}
