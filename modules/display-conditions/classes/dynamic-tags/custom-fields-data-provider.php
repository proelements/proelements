<?php

namespace ElementorPro\Modules\DisplayConditions\Classes\DynamicTags;

use ElementorPro\Core\Admin\Post_Status;

class Custom_Fields_Data_Provider implements Data_Provider {

	const CUSTOM_FIELDS_META_LIMIT = 500;

	/**
	 * Build the custom fields options for the control. Add the groups and the items.
	 *
	 * @return array
	 */
	public function get_control_options(): array {
		$combined_options = array_merge( $this->get_custom_fields_options(), $this->get_acf_options() );

		if ( empty( $combined_options ) ) {
			return [];
		}

		return $this->get_control_groups() + $combined_options;
	}

	private function get_custom_fields_options(): array {
		global $wpdb;

		$keys = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT DISTINCT meta_key
				FROM $wpdb->postmeta
				WHERE meta_key NOT BETWEEN '_' AND '_z'
				HAVING meta_key NOT LIKE %s
				ORDER BY meta_key
				LIMIT %d",
				$wpdb->esc_like( '_' ) . '%',
				apply_filters( 'elementor_pro/display_conditions/dynamic_tags/custom_fields_meta_limit', static::CUSTOM_FIELDS_META_LIMIT )
			)
		);

		return array_combine( $keys, $keys );
	}

	private function get_acf_options(): array {
		global $wpdb;

		$acf_keys = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT post_excerpt
				FROM {$wpdb->posts}
				WHERE post_type = 'acf-field' AND post_status = %s",
				Post_Status::PUBLISH
			)
		);

		return array_combine( $acf_keys, $acf_keys );
	}

	/**
	 * @param array $args
	 *
	 * @return string | bool
	 */
	public function get_value( array $args ) {
		if ( ! metadata_exists( 'post', get_the_ID(), $args['dynamic_tag'] ) ) {
			return false;
		}

		return get_post_meta( get_the_ID(), $args['dynamic_tag'], true );
	}

	private function get_control_groups(): array {
		return [
			'custom_field' => [
				'label' => esc_html__( 'Custom Field', 'elementor-pro' ),
				'type' => 'group',
			],
		];
	}
}
