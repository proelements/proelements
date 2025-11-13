<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class In_Categories_Condition extends Condition_Base {

	public function get_name() {
		return 'in_categories';
	}

	public function get_label() {
		return esc_html__( 'In Categories', 'elementor-pro' );
	}

	public function get_group() {
		return 'post';
	}

	public function check( $args ): bool {
		if ( empty( $args['categories'] ) ) {
			return true;
		}

		$post_categories = wp_get_post_categories( get_the_ID(), [ 'fields' => 'ids' ] ) ?? [];

		if ( empty( $post_categories ) ) {
			return ! ( Comparator_Provider::COMPARATOR_IS === $args['comparator'] );
		}

		$category_ids = array_column( $args['categories'], 'id' );

		return Comparators_Checker::check_array_contains( $args['comparator'], $category_ids, $post_categories );
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
			'categories',
			[
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_TAX,
					'query' => [
						'taxonomy' => 'category',
					],
				],
				'multiple' => true,
				'placeholder' => esc_html__( 'Type to search', 'elementor-pro' ),
				'required' => true,
			]
		);
	}
}
