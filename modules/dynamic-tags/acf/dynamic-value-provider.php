<?php
namespace ElementorPro\Modules\DynamicTags\ACF;

use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Module as LoopBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Dynamic_Value_Provider {

	public function get_value( $key ) {
		if ( empty( $key ) ) {
			return [];
		}

		list( $field_key, $meta_key ) = explode( ':', $key );

		$document = Plugin::elementor()->documents->get_current();

		if ( 'options' === $field_key ) {
			$field = $this->get_field_object( $meta_key, $field_key );
		} elseif ( ! empty( $document ) && LoopBuilderModule::TEMPLATE_LIBRARY_TYPE_SLUG === $document::get_type() ) {
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
}
