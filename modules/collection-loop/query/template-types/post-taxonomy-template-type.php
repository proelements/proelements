<?php

namespace ElementorPro\Modules\CollectionLoop\Query\TemplateTypes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Post_Taxonomy_Template_Type extends Taxonomy_Template_Type_Base {

	const ID = 'taxonomy';

	const DEFAULT_TAXONOMY = 'category';

	// `post_format` is a WP UI-metadata surrogate, not a browsable term set.
	const INTERNAL_TAXONOMIES = [
		'post_format',
	];

	// v3 parity: `Taxonomy_Loop_Provider::get_post_additional_cpts()` carves out
	// `product`, `elementor_library`, `e-landing-page`. `e-floating-buttons` is
	// a deliberate v4 addition — its `elementor_library_type` terms are internal
	// document-type discriminators (`section`, `popup`, ...), not editorial content.
	const EXCLUDED_POST_TYPES = [
		'product',
		'elementor_library',
		'e-landing-page',
		'e-floating-buttons',
	];

	public function get_id(): string {
		return self::ID;
	}

	public function get_label(): string {
		return esc_html__( 'Post taxonomy', 'elementor-pro' );
	}

	protected function get_prop_prefix(): string {
		return 'taxonomy';
	}

	protected function get_default_taxonomy(): string {
		return self::DEFAULT_TAXONOMY;
	}

	protected function get_taxonomy_choices(): array {
		if ( ! function_exists( 'get_object_taxonomies' ) || ! function_exists( 'get_post_types' ) ) {
			return [ self::DEFAULT_TAXONOMY ];
		}

		$post_types = get_post_types( [ 'public' => true ], 'names' );
		$post_types = array_values( array_diff( $post_types, self::EXCLUDED_POST_TYPES ) );

		$choices = [];

		foreach ( $post_types as $post_type ) {
			foreach ( get_object_taxonomies( $post_type, 'names' ) as $slug ) {
				if ( in_array( $slug, self::INTERNAL_TAXONOMIES, true ) ) {
					continue;
				}

				$choices[ $slug ] = true;
			}
		}

		if ( empty( $choices ) ) {
			return [ self::DEFAULT_TAXONOMY ];
		}

		return array_keys( $choices );
	}
}
