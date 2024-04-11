<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Classes\Comparators_Checker;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class User_Role_Condition extends Condition_Base {
	const CONDITION_KEY = 'roles';

	public function get_name() {
		return 'user_role';
	}

	public function get_label() {
		return esc_html__( 'Role', 'elementor-pro' );
	}

	public function get_group() {
		return 'user';
	}

	public function check( $args ) : bool {
		$current_user = wp_get_current_user();
		$current_user_roles = $current_user ? $current_user->roles : [];

		return Comparators_Checker::check_array_contains( $args['comparator'], $current_user_roles, $args['roles'] );
	}

	public function get_options() {
		$user_roles = $this->get_available_roles();

		$comparators = Comparator_Provider::get_comparators(
			[
				Comparator_Provider::COMPARATOR_IS_ONE_OF,
				Comparator_Provider::COMPARATOR_IS_NONE_OF,
			]
		);

		$this->add_control( 'comparator', [
			'type' => Controls_Manager::SELECT,
			'options' => $comparators,
			'default' => Comparator_Provider::COMPARATOR_IS_ONE_OF,
		] );

		$this->add_control( self::CONDITION_KEY, [
			'type' => Controls_Manager::SELECT2,
			'options' => $user_roles,
			'multiple' => true,
			'required' => true,
			'default' => [],
		] );
	}

	private function get_available_roles(): array {
		$user_roles = [];

		foreach ( get_editable_roles() as $role_slug => $role_data ) {
			$role = $role_data['name'];
			$user_roles[ $role_slug ] = esc_html( $role );
		}

		return $user_roles;
	}
}
