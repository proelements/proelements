<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Child_Of_Term extends Taxonomy {

	private $taxonomy;

	public function get_name() {
		return 'child_of_' . $this->taxonomy->name;
	}

	public function get_label() {
		return sprintf( esc_html__( 'Direct Child %s Of', 'elementor-pro' ), $this->taxonomy->labels->singular_name );
	}

	public function __construct( $data ) {
		parent::__construct( $data );

		$this->taxonomy = $data['object'];
	}

	public function is_term() {
		$taxonomy = $this->taxonomy->name;
		$current = get_queried_object();
		return ( $current && isset( $current->taxonomy ) && $taxonomy === $current->taxonomy );
	}

	public function check( $args ) {
		$id = (int) $args['id'];
		$current = get_queried_object();

		return $this->is_term() && $id === $current->parent;
	}
}
