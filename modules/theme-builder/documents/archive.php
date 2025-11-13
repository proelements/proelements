<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive extends Archive_Single_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'archive';
		$properties['condition_type'] = 'archive';

		return $properties;
	}

	public static function get_type() {
		return 'archive';
	}

	public static function get_title() {
		return esc_html__( 'Archive', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Archives', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-archive';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => esc_html__( 'What is an archive template?', 'elementor-pro' ),
			'content' => esc_html__( 'An archive template allows you to easily design the layout and style of archive pages - those pages that show a list of posts (e.g. a blog’s list of recent posts), which may be filtered by terms such as authors, categories, tags, search results, etc.', 'elementor-pro' ),
			'tip' => esc_html__( 'If you’d like a different style for a specific category, it’s easy to create a separate archive template whose condition is to only display when users are viewing that category’s list of posts.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-archive',
			'video_url' => 'https://www.youtube.com/embed/wxElpEh9bfA',
		];
	}

	protected static function get_editor_panel_categories() {
		$categories = [
			'theme-elements-archive' => [
				'title' => esc_html__( 'Archive', 'elementor-pro' ),
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
				/* translators: %s: Post type label. */
				$post_type_archives[ 'post_type_archive/' . $post_type ] = sprintf( esc_html__( '%s archive', 'elementor-pro' ), $post_type_object->label );
			}

			$post_type_taxonomies = get_object_taxonomies( $post_type, 'objects' );

			$post_type_taxonomies = wp_filter_object_list( $post_type_taxonomies, [
				'public' => true,
				'show_in_nav_menus' => true,
			] );

			foreach ( $post_type_taxonomies as $slug => $object ) {
				/* translators: %s: Taxonomy label. */
				$taxonomies[ 'taxonomy/' . $slug ] = sprintf( esc_html__( '%s archive', 'elementor-pro' ), $object->label );
			}
		}

		$options = [
			'archive/recent_posts' => esc_html__( 'Recent posts', 'elementor-pro' ),
			'archive/date' => esc_html__( 'Date archive', 'elementor-pro' ),
			'archive/author' => esc_html__( 'Author archive', 'elementor-pro' ),
			'search' => esc_html__( 'Search results', 'elementor-pro' ),
		];

		$options += $taxonomies + $post_type_archives;

		return [
			'archive' => [
				'label' => esc_html__( 'Archive', 'elementor-pro' ),
				'options' => $options,
			],
		];
	}
}
