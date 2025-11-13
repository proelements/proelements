<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Any_Child_Of extends Child_Of {

	public function get_name() {
		return 'any_child_of';
	}

	public function get_label() {
		return esc_html__( 'Any child of', 'elementor-pro' );
	}

	public function check( $args ) {
		if ( ! is_singular() ) {
			return false;
		}

		$id = (int) $args['id'];
		$parents = get_post_ancestors( get_the_ID() );

		return ( ( 0 === $id && ! empty( $parents ) ) || in_array( $id, $parents ) );
	}
}
