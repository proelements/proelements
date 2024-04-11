<?php

namespace ElementorPro\Modules\DisplayConditions\Classes\DynamicTags;

class Custom_Fields_Data_Provider implements Data_Provider {

	const CUSTOM_FIELDS_META_LIMIT = 50;

	/**
	 * Build the custom fields options for the control. Add the groups and the items.
	 *
	 * @return array
	 */
	public function get_control_options(): array {
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

		if ( empty( $keys ) ) {
			return [];
		}

		return $this->get_control_groups() + array_combine( $keys, $keys );
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
