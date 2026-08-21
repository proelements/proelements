<?php
namespace ElementorPro\Modules\DynamicTags\ACF;

use ElementorPro\Modules\CollectionLoop\Utils\Loop_Iteration_Context;
use ElementorPro\Modules\LoopBuilder\Module as LoopBuilderModule;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Dynamic_Value_Provider {

	public function get_value( $key ) {
		if ( empty( $key ) ) {
			return [];
		}

		[ $field_key, $meta_key ] = explode( ':', $key );

		if ( Taxonomy_Loop_Provider::is_loop_taxonomy() ) {
			return $this->get_taxonomy_field_data( $field_key, $meta_key );
		}

		if ( 'options' === $field_key ) {
			$field = $this->get_field_object( $meta_key, $field_key );
		} elseif ( $this->is_in_post_loop_iteration() ) {
			$field = $this->get_field_object( $field_key, get_the_ID() );
		} else {
			$field = $this->get_field_object( $field_key, get_queried_object() );
		}

		return [ $field, $meta_key ];
	}

	/**
	 * Retrieve the custom field value from `ACF` plugin.
	 * Used for testing.
	 *
	 * @param $selector
	 * @param $post_id
	 *
	 * @return array|false
	 */
	protected function get_field_object( $selector, $post_id ) {
		return get_field_object( $selector, $post_id );
	}

	private function is_in_post_loop_iteration(): bool {
		return $this->is_v3_loop_item_document() || Loop_Iteration_Context::is_v4_collection_loop_active();
	}

	private function is_v3_loop_item_document(): bool {
		$document = Plugin::elementor()->documents->get_current();

		return ! empty( $document ) && LoopBuilderModule::TEMPLATE_LIBRARY_TYPE_SLUG === $document::get_type();
	}

	/**
	 * Get the field data needed when rendering a dynamic tag for a taxonomy object.
	 * @param $field_key
	 * @param $meta_key
	 *
	 * @return array
	 */
	private function get_taxonomy_field_data( $field_key, $meta_key ) {
		global $wp_query;
		$field = $this->get_field_object( $field_key, $wp_query->loop_term );
		return [ $field, $meta_key ];
	}
}
