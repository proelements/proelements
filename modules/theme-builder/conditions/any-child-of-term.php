<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Any_Child_Of_Term extends Child_Of_Term {

	private $taxonomy;

	public function get_name() {
		return 'any_child_of_' . $this->taxonomy->name;
	}

	public function get_label() {
		return sprintf( __( 'Any Child %s Of', 'elementor-pro' ), $this->taxonomy->labels->singular_name );
	}

	public function __construct( $data ) {
		parent::__construct( $data );

		$this->taxonomy = $data['object'];
	}

	public function check( $args ) {
		$id = (int) $args['id'];
		/**
		 * @var \WP_Term $current
		 */
		$current = get_queried_object();
		if ( ! $this->is_term() || 0 === $current->parent ) {
			return false;
		}

		while ( $current->parent > 0 ) {
			if ( $id === $current->parent ) {
				return true;
			}
			$current = get_term_by( 'id', $current->parent, $current->taxonomy );
		}

		return $id === $current->parent;
	}
}
