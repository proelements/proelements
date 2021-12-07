<?php
namespace ElementorPro\Modules\DynamicTags\Pods;

use Elementor\Modules\DynamicTags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends DynamicTags\Module {

	const PODS_GROUP = 'Pods';

	/**
	 * @param array $types
	 *
	 * @return array
	 */
	public static function get_control_options( $types ) {
		$all_pods = pods_api()->load_pods( [
			'table_info' => true,
			'fields' => true,
		] );

		$groups = [];

		foreach ( $all_pods as $group ) {
			$options = [];

			foreach ( $group['fields'] as $field ) {
				if ( ! self::valid_field_type( $types, $field ) ) {
					continue;
				}

				// Use pods ID for unique keys
				$key = $group['name'] . ':' . $field['pod_id'] . ':' . $field['name'];
				$options[ $key ] = $field['label'];
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

	public static function valid_field_type( $types, $field ) {
		// Only file field with single image value
		if ( in_array( 'pods_image', $types, true ) && self::pods_image_mapping( $field ) ) {
			return true;
		}
		if ( in_array( 'pods_url', $types, true ) && in_array( $field['type'], [ 'email', 'file', 'website', 'phone' ] ) ) {
			// Only file with single value allowed
			if ( 'file' === $field['type'] && ! self::pods_file_mapping( $field ) ) {
				return false;
			}

			return true;
		}
		// Only file with multiple images allowed
		if ( in_array( 'pods_gallery', $types, true ) && self::pods_image_mapping( $field, false ) ) {
			return true;
		}
		// Any other type
		if ( in_array( $field['type'], $types, true ) ) {
			return true;
		}

		return false;
	}

	public static function pods_file_mapping( $field, $single = true ) {
		if ( 'file' !== $field['type'] ) {
			return false;
		}

		$limit = $single ? 'single' : 'multi';
		if ( $limit !== $field['options']['file_format_type'] ) {
			return false;
		}

		return true;
	}

	public static function pods_image_mapping( $field, $single = true ) {
		if ( ! isset( $field['options'] ) || ! isset( $field['options']['file_type'] ) ) {
			return false;
		}
		if ( 'images' !== $field['options']['file_type'] ) {
			return false;
		}
		if ( ! self::pods_file_mapping( $field, $single ) ) {
			return false;
		}

		return true;
	}

	public function get_tag_classes_names() {
		return [
			'Pods_Text',
			'Pods_Date',
			'Pods_Image',
			'Pods_Gallery',
			'Pods_URL',
			'Pods_Numeric',
		];
	}

	public function get_groups() {
		return [
			self::PODS_GROUP => [
				'title' => esc_html__( 'Pods', 'elementor-pro' ),
			],
		];
	}
}
