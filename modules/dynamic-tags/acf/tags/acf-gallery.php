<?php
namespace ElementorPro\Modules\DynamicTags\ACF\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\ACF\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class ACF_Gallery extends Data_Tag {

	public function get_name() {
		return 'acf-gallery';
	}

	public function get_title() {
		return __( 'ACF', 'elementor-pro' ) . ' ' . __( 'Gallery Field', 'elementor-pro' );
	}

	public function get_categories() {
		return [ Module::GALLERY_CATEGORY ];
	}

	public function get_group() {
		return Module::ACF_GROUP;
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	public function get_value( array $options = [] ) {
		$images = [];

		list( $field, $meta_key ) = Module::get_tag_value_field( $this );

		if ( $field ) {
			$value = $field['value'];
		} else {
			// Field settings has been deleted or not available.
			$value = get_field( $meta_key );
		}

		if ( is_array( $value ) && ! empty( $value ) ) {
			foreach ( $value as $image ) {
				$images[] = [
					'id' => $image['ID'],
				];
			}
		}

		return $images;
	}

	protected function _register_controls() {
		Module::add_key_control( $this );
	}

	public function get_supported_fields() {
		return [
			'gallery',
		];
	}
}
