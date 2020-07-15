<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class In_Sub_Term extends In_Taxonomy {

	/**
	 * @var \WP_Taxonomy
	 */
	private $taxonomy;

	public function __construct( $data ) {
		parent::__construct( $data );

		$this->taxonomy = $data['object'];
	}

	public function get_name() {
		return 'in_' . $this->taxonomy->name . '_children';
	}

	public function get_label() {
		/* translators: %s: Taxonomy label. */
		return sprintf( __( 'In Child %s', 'elementor-pro' ), $this->taxonomy->labels->name );
	}

	public function check( $args ) {
		$id = (int) $args['id'];
		if ( ! is_singular() || ! $id ) {
			return false;
		}
		$child_terms = get_term_children( $id, $this->taxonomy->name );

		return ! empty( $child_terms ) && has_term( $child_terms, $this->taxonomy->name );
	}
}
