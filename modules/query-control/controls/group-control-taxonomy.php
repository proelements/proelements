<?php

namespace ElementorPro\Modules\QueryControl\Controls;

use Elementor\Controls_Manager;

class Group_Control_Taxonomy extends Group_Control_Query {

	public static function get_type() {
		return 'taxonomy-query';
	}

	protected function get_fields_array( $name ) {
		$tab_keys = $this->get_tabs_keys( $name . '_' );
		$fields = parent::get_fields_array( $name );
		$new_fields = [];

		foreach ( $fields as $key => $field ) {
			if ( 'query_args' === $key ) {
				$new_fields['filter_by'] = [
					'label' => esc_html__( 'Filter By', 'elementor-pro' ),
					'type' => Controls_Manager::SELECT,
					'default' => 'show_all',
					'options' => [
						'show_all' => esc_html__( 'Show All', 'elementor-pro' ),
						'manual_selection' => esc_html__( 'Manual Selection', 'elementor-pro' ),
					],
					'tabs_wrapper' => $tab_keys['tabs_wrapper'],
					'inner_tab' => $tab_keys['include_wrapper'],
				];
			}

			$new_fields[ $key ] = $field;
		}

		return $new_fields;
	}
}
