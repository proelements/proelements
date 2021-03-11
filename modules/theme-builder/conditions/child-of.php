<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

use ElementorPro\Modules\QueryControl\Module as QueryModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Child_Of extends Condition_Base {

	public static function get_type() {
		return 'singular';
	}

	public static function get_priority() {
		return 40;
	}

	public function get_name() {
		return 'child_of';
	}

	public function get_label() {
		return __( 'Direct Child Of', 'elementor-pro' );
	}

	public function check( $args ) {
		if ( ! is_singular() ) {
			return false;
		}

		$id = (int) $args['id'];
		$parent_id = wp_get_post_parent_id( get_the_ID() );

		return ( ( 0 === $id && 0 < $parent_id ) || ( $parent_id === $id ) );
	}

	protected function register_controls() {
		$hierarchical_post_types = get_post_types( [
			'hierarchical' => true,
			'public' => true,
		] );

		$this->add_control(
			'parent_id',
			[
				'section' => 'settings',
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'dropdownCssClass' => 'elementor-conditions-select2-dropdown',
				],
				'autocomplete' => [
					'object' => QueryModule::QUERY_OBJECT_POST,
					'query' => [
						'post_type' => array_keys( $hierarchical_post_types ),
					],
				],
			]
		);
	}
}
