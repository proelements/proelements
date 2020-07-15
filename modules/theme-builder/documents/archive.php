<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive extends Theme_Page_Document {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'archive';
		$properties['condition_type'] = 'archive';

		return $properties;
	}

	public function get_name() {
		return 'archive';
	}

	public static function get_title() {
		return __( 'Archive', 'elementor-pro' );
	}

	protected static function get_editor_panel_categories() {
		$categories = [
			'theme-elements-archive' => [
				'title' => __( 'Archive', 'elementor-pro' ),
			],
		];

		return $categories + parent::get_editor_panel_categories();
	}

	public static function get_preview_as_default() {
		return 'archive/recent_posts';
	}

	public static function get_preview_as_options() {
		$post_type_archives = [];

		$taxonomies = [];

		$post_types = Module::get_public_post_types();

		foreach ( $post_types as $post_type => $label ) {
			$post_type_object = get_post_type_object( $post_type );

			if ( $post_type_object->has_archive ) {
				$post_type_archives[ 'post_type_archive/' . $post_type ] = sprintf( __( '%s Archive', 'elementor-pro' ), $post_type_object->label );
			}

			$post_type_taxonomies = get_object_taxonomies( $post_type, 'objects' );

			$post_type_taxonomies = wp_filter_object_list( $post_type_taxonomies, [
				'public' => true,
				'show_in_nav_menus' => true,
			] );

			foreach ( $post_type_taxonomies as $slug => $object ) {
				$taxonomies[ 'taxonomy/' . $slug ] = sprintf( __( '%s Archive', 'elementor-pro' ), $object->label );
			}
		}

		$options = [
			'archive/recent_posts' => __( 'Recent Posts', 'elementor-pro' ),
			'archive/date' => __( 'Date Archive', 'elementor-pro' ),
			'archive/author' => __( 'Author Archive', 'elementor-pro' ),
			'search' => __( 'Search Results', 'elementor-pro' ),
		];

		$options += $taxonomies + $post_type_archives;

		return [
			'archive' => [
				'label' => __( 'Archive', 'elementor-pro' ),
				'options' => $options,
			],
		];
	}
}
