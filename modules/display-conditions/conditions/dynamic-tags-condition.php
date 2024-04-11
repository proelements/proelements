<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Classes\DynamicTags\Custom_Fields_Data_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\DynamicTags\Dynamic_Tags_Data_Provider;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Dynamic_Tags_Condition extends Condition_Base {

	/**
	 * @var Dynamic_Tags_Data_Provider
	 */
	private $dynamic_tags_data_provider;

	/**
	 * @var Custom_Fields_Data_Provider
	 */
	private $custom_fields_data_provider;

	public function __construct() {
		parent::__construct();

		$this->dynamic_tags_data_provider = new Dynamic_Tags_Data_Provider();
		$this->custom_fields_data_provider = new Custom_Fields_Data_Provider();
	}

	public function get_name() {
		return 'dynamic_tags';
	}

	public function get_label() {
		return esc_html__( 'Dynamic Tags', 'elementor-pro' );
	}

	public function get_group() {
		return 'other';
	}

	public function check( $args ) : bool {
		$value = $this->get_condition_value( $args );

		if ( false === $value ) {
			return false;
		}

		return Comparators_Checker::check_string_contains_and_empty( $args['comparator'], $args['dynamic_tag_value'], $value );
	}

	public function get_options() {
		$this->add_control(
			'dynamic_tag',
			[
				'type' => Controls_Manager::SELECT,
				'options' => $this->dynamic_tags_data_provider->get_control_options() + $this->custom_fields_data_provider->get_control_options(),
				'default' => $this->dynamic_tags_data_provider->get_default_control_option(),
				'disabled_options' => ! current_user_can( 'manage_options' ) ? [ 'author_info_email' ] : [],
				'disabled_type' => 'hidden',
			]
		);

		$this->add_control(
			'comparator',
			[
				'type' => Controls_Manager::SELECT,
				'options' => Comparator_Provider::get_comparators(
					[
						Comparator_Provider::COMPARATOR_IS,
						Comparator_Provider::COMPARATOR_IS_NOT,
						Comparator_Provider::COMPARATOR_CONTAINS,
						Comparator_Provider::COMPARATOR_NOT_CONTAIN,
						Comparator_Provider::COMPARATOR_IS_EMPTY,
						Comparator_Provider::COMPARATOR_IS_NOT_EMPTY,
					]
				),
				'default' => Comparator_Provider::COMPARATOR_IS,
			]
		);

		$this->add_control(
			'dynamic_tag_value',
			[
				'placeholder' => esc_html__( 'Type a value', 'elementor-pro' ),
				'required' => true,
			]
		);
	}

	/**
	 * Conditionally retrieve the value of a dynamic tag or custom field.
	 *
	 * @return string | bool
	 */
	private function get_condition_value( array $args ) {
		$dt_value = $this->dynamic_tags_data_provider->get_value( $args );

		if ( $dt_value ) {
			return $dt_value;
		}

		return $this->custom_fields_data_provider->get_value( $args );
	}
}
