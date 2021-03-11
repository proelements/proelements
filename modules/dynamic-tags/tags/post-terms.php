<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Terms extends Tag {
	public function get_name() {
		return 'post-terms';
	}

	public function get_title() {
		return __( 'Post Terms', 'elementor-pro' );
	}

	public function get_group() {
		return Module::POST_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	protected function register_controls() {
		$taxonomy_filter_args = [
			'show_in_nav_menus' => true,
			'object_type' => [ get_post_type() ],
		];

		/**
		 * Dynamic tags taxonomy args.
		 *
		 * Filters the taxonomy arguments used to retrieve the registered taxonomies
		 * displayed in the taxonomy dynamic tag.
		 *
		 * @since 2.0.0
		 *
		 * @param array $taxonomy_filter_args An array of `key => value` arguments to
		 *                                    match against the taxonomy objects inside
		 *                                    the `get_taxonomies()` function.
		 */
		$taxonomy_filter_args = apply_filters( 'elementor_pro/dynamic_tags/post_terms/taxonomy_args', $taxonomy_filter_args );

		$taxonomies = Utils::get_taxonomies( $taxonomy_filter_args, 'objects' );

		$options = [];

		foreach ( $taxonomies as $taxonomy => $object ) {
			$options[ $taxonomy ] = $object->label;
		}

		$this->add_control(
			'taxonomy',
			[
				'label' => __( 'Taxonomy', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $options,
				'default' => 'post_tag',
			]
		);

		$this->add_control(
			'separator',
			[
				'label' => __( 'Separator', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => ', ',
			]
		);

		$this->add_control(
			'link',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);
	}

	public function render() {
		$settings = $this->get_settings();

		if ( 'yes' === $settings['link'] ) {
			$value = get_the_term_list( get_the_ID(), $settings['taxonomy'], '', $settings['separator'] );
		} else {
			$terms = get_the_terms( get_the_ID(), $settings['taxonomy'] );

			if ( is_wp_error( $terms ) || empty( $terms ) ) {
				return '';
			}

			$term_names = [];

			foreach ( $terms as $term ) {
				$term_names[] = '<span>' . $term->name . '</span>';
			}

			$value = implode( $settings['separator'], $term_names );
		}

		echo wp_kses_post( $value );
	}
}
