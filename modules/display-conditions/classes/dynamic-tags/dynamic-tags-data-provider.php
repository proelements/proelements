<?php
namespace ElementorPro\Modules\DisplayConditions\Classes\DynamicTags;

use ElementorPro\Plugin;

class Dynamic_Tags_Data_Provider implements Data_Provider {

	/**
	 * @var array
	 */
	private $dynamic_tags_options = [];

	/**
	 * Build the dynamic tags options for the control. Add the groups and the items.
	 *
	 * @return array
	 */
	public function get_control_options(): array {
		$result = [];
		$dynamic_tags_options = $this->get_dynamic_tags_options();

		foreach ( $this->get_control_groups() as $group_key => $group_name ) {
			$result[ $group_key ] = [
				'label' => $group_name,
				'type' => 'group',
			];

			$group_items = array_filter( $dynamic_tags_options, function( $item ) use ( $group_key ) {
				return $group_key === $item['group'];
			} );

			$group_items = array_map( function( $item ) {
				return $item['label'];
			}, $group_items );

			$result = $result + $group_items;
		}

		return $result;
	}

	public function get_default_control_option(): string {
		return array_key_first( $this->get_dynamic_tags_options() );
	}

	/**
	 * @param string $key
	 * @return array
	 */
	public function get_dynamic_tag_options( string $key ): array {
		$dt_config = $this->get_dynamic_tags_options();

		return ! empty( $dt_config[ $key ] ) ? $dt_config[ $key ] : [];
	}

	/**
	 * @return array
	 */
	public function get_dynamic_tags_options(): array {
		if ( ! empty( $this->dynamic_tags_options ) ) {
			return $this->dynamic_tags_options;
		}

		$dynamic_tags_config = Plugin::elementor()->dynamic_tags->get_config();

		foreach ( $dynamic_tags_config['tags'] as $dynamic_tag_config ) {
			if ( empty( $dynamic_tag_config['display_conditions'] ) ) {
				continue;
			}

			$new_options = array_map( function( $item ) use ( $dynamic_tag_config ) {
				return $item + [ 'dynamic_tag_name' => $dynamic_tag_config['name'] ];
			}, $dynamic_tag_config['display_conditions'] );

			$this->dynamic_tags_options = $this->dynamic_tags_options + $new_options;
		}

		return $this->dynamic_tags_options;
	}

	/**
	 * @param array $args
	 * @return string | bool
	 */
	public function get_value( array $args ) {
		$dt_options = $this->get_dynamic_tag_options( $args['dynamic_tag'] );

		if ( empty( $dt_options ) ) {
			return false;
		}

		return Plugin::elementor()->dynamic_tags->get_tag_data_content( null, $dt_options['dynamic_tag_name'], $dt_options['settings'] ) ?? false;
	}

	private function get_control_groups(): array {
		return [
			'archive' => esc_html__( 'Archive', 'elementor-pro' ),
			'featured_image' => esc_html__( 'Featured Image', 'elementor-pro' ),
			'author' => esc_html__( 'Author', 'elementor-pro' ),
		];
	}
}
