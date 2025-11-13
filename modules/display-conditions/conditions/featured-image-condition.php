<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Featured_Image_Condition extends Condition_Base {

	public function get_name() {
		return 'featured_image';
	}

	public function get_label() {
		return esc_html__( 'Featured Image', 'elementor-pro' );
	}

	public function get_group() {
		return 'post';
	}

	public function check( $args ) : bool {
		return Comparators_Checker::check_equality(
			$args['comparator'],
			'set' === $args['status'],
			$this->wordpress_adapter->has_post_thumbnail()
		);
	}

	public function get_options() {
		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS,
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
			'status',
			[
				'type' => Controls_Manager::SELECT,
				'options' => [
					'set' => esc_html__( 'Set', 'elementor-pro' ),
					'not_set' => esc_html__( 'Not Set', 'elementor-pro' ),
				],
				'default' => 'set',
			]
		);
	}
}
