<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Singular extends Condition_Base {

	protected $sub_conditions = [
		'front_page',
	];

	public static function get_type() {
		return 'singular';
	}

	public function get_name() {
		return 'singular';
	}

	public static function get_priority() {
		return 60;
	}

	public function get_label() {
		return esc_html__( 'Singular', 'elementor-pro' );
	}

	public function get_all_label() {
		return esc_html__( 'All singular', 'elementor-pro' );
	}

	public function register_sub_conditions() {
		$post_types = Module::get_public_post_types();

		$post_types['attachment'] = get_post_type_object( 'attachment' )->label;

		foreach ( $post_types as $post_type => $label ) {
			$condition = new Post( [
				'post_type' => $post_type,
			] );

			$this->register_sub_condition( $condition );
		}

		$this->sub_conditions[] = 'child_of';

		$this->sub_conditions[] = 'any_child_of';

		$this->sub_conditions[] = 'by_author';

		// Last condition.
		$this->sub_conditions[] = 'not_found404';
	}

	public function check( $args ) {
		return ( is_singular() && ! is_embed() ) || is_404();
	}
}
