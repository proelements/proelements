<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive extends Condition_Base {

	protected $sub_conditions = [
		'author',
		'date',
		'search',
	];

	public static function get_type() {
		return 'archive';
	}

	public static function get_priority() {
		return 80;
	}

	public function get_name() {
		return 'archive';
	}

	public function get_label() {
		return esc_html__( 'Archives', 'elementor-pro' );
	}

	public function get_all_label() {
		return esc_html__( 'All archives', 'elementor-pro' );
	}

	public function register_sub_conditions() {
		$post_types = Module::get_public_post_types();

		foreach ( $post_types as $post_type => $label ) {
			if ( ! get_post_type_archive_link( $post_type ) ) {
				continue;
			}

			$condition = new Post_Type_Archive( [
				'post_type' => $post_type,
			] );

			$this->register_sub_condition( $condition );
		}
	}

	public function check( $args ) {
		$is_archive = is_archive() || is_home() || is_search();

		// WooCommerce is handled by `woocommerce` module.
		if ( $is_archive && class_exists( 'woocommerce' ) && is_woocommerce() ) {
			$is_archive = false;
		}

		return $is_archive;
	}
}
