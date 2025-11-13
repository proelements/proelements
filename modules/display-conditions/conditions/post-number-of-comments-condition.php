<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

class Post_Number_Of_Comments_Condition extends Condition_Base {

	public function get_name() {
		return 'number_of_comments';
	}

	public function get_label() {
		return esc_html__( 'Number of Comments', 'elementor-pro' );
	}

	public function get_group() {
		return esc_html__( 'post', 'elementor-pro' );
	}

	public function check( $args ): bool {
		$actual_number_of_comments = $this->wordpress_adapter->get_comments_number();

		return Comparators_Checker::check_numeric_constraints( $args['comparator'], (int) $args['number_of_comments'], (int) $actual_number_of_comments );
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS_GREATER_THAN_INCLUSIVE,
				Comparator_Provider::COMPARATOR_IS_LESS_THAN_INCLUSIVE,
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
			'number_of_comments',
			[
				'type' => Controls_Manager::TEXT,
				'input_type' => 'number',
				'variant' => 'number',
				'placeholder' => 'Type a number...',
				'step' => 1,
				'min' => 0,
				'default' => 1,
			]
		);
	}
}
