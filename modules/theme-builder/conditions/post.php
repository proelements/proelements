<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

use ElementorPro\Modules\QueryControl\Module as QueryModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post extends Condition_Base {

	private $post_type;
	private $post_taxonomies;

	public static function get_type() {
		return 'singular';
	}

	public static function get_priority() {
		return 40;
	}

	public function __construct( $data ) {
		$this->post_type = get_post_type_object( $data['post_type'] );
		$taxonomies = get_object_taxonomies( $data['post_type'], 'objects' );
		$this->post_taxonomies = wp_filter_object_list( $taxonomies, [
			'public' => true,
			'show_in_nav_menus' => true,
		] );

		parent::__construct();
	}

	public function get_name() {
		return $this->post_type->name;
	}

	public function get_label() {
		return $this->post_type->labels->singular_name;
	}

	public function get_all_label() {
		/* translators: %s: Post type label. */
		return $this->post_type->label;
	}

	public function check( $args ) {
		if ( isset( $args['id'] ) ) {
			$id = (int) $args['id'];
			if ( $id ) {
				return is_singular() && get_queried_object_id() === $id;
			}
		}

		return is_singular( $this->post_type->name );
	}

	public function register_sub_conditions() {
		foreach ( $this->post_taxonomies as $slug => $object ) {
			$in_taxonomy = new In_Taxonomy( [
				'object' => $object,
			] );
			$this->register_sub_condition( $in_taxonomy );

			if ( $object->hierarchical ) {
				$in_sub_term = new In_Sub_Term( [
					'object' => $object,
				] );
				$this->register_sub_condition( $in_sub_term );
			}
		}

		$by_author = new Post_Type_By_Author( $this->post_type );
		$this->register_sub_condition( $by_author );

	}

	protected function register_controls() {
		$this->add_control(
			'post_id',
			[
				'section' => 'settings',
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'dropdownCssClass' => 'elementor-conditions-select2-dropdown',
				],
				'autocomplete' => [
					'object' => QueryModule::QUERY_OBJECT_POST,
					'query' => [
						'post_type' => $this->get_name(),
					],
				],
			]
		);
	}
}
