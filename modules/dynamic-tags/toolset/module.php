<?php
namespace ElementorPro\Modules\DynamicTags\Toolset;

use Elementor\Modules\DynamicTags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends DynamicTags\Module {

	const TOOLSET_GROUP = 'Toolset';

	/**
	 * @param array $types
	 *
	 * @return array
	 */
	public static function get_control_options( $types ) {
		$toolset_groups = wpcf_admin_fields_get_groups();

		$groups = [];

		foreach ( $toolset_groups as $group ) {

			$options = [];

			$fields = wpcf_admin_fields_get_fields_by_group( $group['id'] );

			if ( ! is_array( $fields ) ) {
				continue;
			}

			foreach ( $fields as $field_key => $field ) {
				if ( ! is_array( $field ) || empty( $field['type'] ) ) {
					continue;
				}

				if ( ! self::valid_field_type( $types, $field ) ) {
					continue;
				}

				// Use group ID for unique keys
				$key = $group['slug'] . ':' . $field_key;
				$options[ $key ] = $field['name'];
			}

			if ( empty( $options ) ) {
				continue;
			}

			if ( 1 === count( $options ) ) {
				$options = [ -1 => ' -- ' ] + $options;
			}

			$groups[] = [
				'label' => $group['name'],
				'options' => $options,
			];
		}

		return $groups;
	}

	public static function toolset_image_mapping( $field, $single = true ) {
		if ( 'image' !== $field['type'] ) {
			return false;
		}

		$limit = $single ? '0' : '1';
		if ( empty( $field['data'] ) || $limit !== $field['data']['repetitive'] ) {
			return false;
		}

		return true;
	}

	public static function valid_field_type( $types, $field ) {
		// Only file field with single image value
		if ( in_array( 'toolset_image', $types, true ) && self::toolset_image_mapping( $field ) ) {
			return true;
		}

		// Only file with multiple images allowed
		if ( in_array( 'toolset_gallery', $types, true ) && self::toolset_image_mapping( $field, false ) ) {
			return true;
		}

		// Any other type
		if ( in_array( $field['type'], $types, true ) ) {
			return true;
		}

		return false;
	}

	public function get_tag_classes_names() {
		return [
			'Toolset_Text',
			'Toolset_Date',
			'Toolset_Image',
			'Toolset_URL',
			'Toolset_Gallery',
		];
	}

	public function get_groups() {
		return [
			self::TOOLSET_GROUP => [
				'title' => __( 'Toolset', 'elementor-pro' ),
			],
		];
	}
}
