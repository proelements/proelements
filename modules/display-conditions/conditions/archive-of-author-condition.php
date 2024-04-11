<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Of_Author_Condition extends Condition_Base {

	public function get_name() {
		return 'archive_of_authors';
	}

	public function get_label(): string {
		return esc_html__( 'Of Authors', 'elementor-pro' );
	}

	public function get_group() {
		return 'archive';
	}

	public function check( $args ) : bool {
		if ( empty( $args['authors'] ) ) {
			return parent::check( $args );
		}

		$author_ids = array_column( $args['authors'], 'id' );

		switch ( $args['comparator'] ) {
			case Comparator_Provider::COMPARATOR_IS:
				return $this->wordpress_adapter->is_author( $author_ids );

			case Comparator_Provider::COMPARATOR_IS_NOT:
				return ! $this->wordpress_adapter->is_author( $author_ids );

			default:
				return false;
		}

	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators( [
			Comparator_Provider::COMPARATOR_IS,
			Comparator_Provider::COMPARATOR_IS_NOT,
		] );

		$this->add_control(
			'comparator',
			[
				'type' => Controls_Manager::SELECT,
				'options' => $comparators,
				'default' => Comparator_Provider::COMPARATOR_IS,
			]
		);

		$this->add_control(
			'authors',
			[
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_AUTHOR,
				],
				'multiple' => true,
				'required' => true,
				'placeholder' => esc_html__( 'Type to search', 'elementor-pro' ),
			]
		);
	}
}
