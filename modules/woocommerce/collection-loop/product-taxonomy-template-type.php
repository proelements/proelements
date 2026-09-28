<?php

namespace ElementorPro\Modules\Woocommerce\CollectionLoop;

use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Taxonomy_Template_Type_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Product_Taxonomy_Template_Type extends Taxonomy_Template_Type_Base {

	const ID = 'product_taxonomy';

	const DEFAULT_TAXONOMY = 'product_cat';

	// WC plumbing taxonomies that never render as first-class collections.
	// Everything else attached to `product` — `product_cat`, `product_tag`,
	// `product_brand`, `pa_*` attribute taxonomies, WC POS internals, etc. —
	// is enumerated as-is (no `public && show_ui` gate, matching v3).
	const INTERNAL_TAXONOMIES = [
		'product_type',
		'product_visibility',
		'product_shipping_class',
	];

	public function get_id(): string {
		return self::ID;
	}

	public function get_label(): string {
		return esc_html__( 'Product taxonomy', 'elementor-pro' );
	}

	protected function get_prop_prefix(): string {
		return 'product_taxonomy';
	}

	protected function get_default_taxonomy(): string {
		return self::DEFAULT_TAXONOMY;
	}

	protected function get_taxonomy_choices(): array {
		if ( ! function_exists( 'get_object_taxonomies' ) ) {
			return [ self::DEFAULT_TAXONOMY ];
		}

		$taxonomies = get_object_taxonomies( 'product', 'names' );

		if ( empty( $taxonomies ) ) {
			return [ self::DEFAULT_TAXONOMY ];
		}

		$choices = [];

		foreach ( $taxonomies as $slug ) {
			if ( in_array( $slug, self::INTERNAL_TAXONOMIES, true ) ) {
				continue;
			}

			$choices[] = $slug;
		}

		if ( empty( $choices ) ) {
			return [ self::DEFAULT_TAXONOMY ];
		}

		return array_values( array_unique( $choices ) );
	}
}
