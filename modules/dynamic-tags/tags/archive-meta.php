<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Module;
use ElementorPro\Modules\DynamicTags\Tags\Base\Pro_Tag;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Meta extends Pro_Tag {

	public function get_name() {
		return 'archive-meta';
	}

	public function get_title() {
		return esc_html__( 'Archive Meta', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ARCHIVE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function get_panel_template() {
		return ' ({{{ key }}})';
	}

	public function render() {
		$key = $this->get_settings( 'key' );

		if ( empty( $key ) ) {
			return;
		}

		$value = '';

		if ( Taxonomy_Loop_Provider::is_loop_taxonomy_strict() ) {
			global $wp_query;
			$value = get_term_meta( $wp_query->loop_term->term_id, $key, true );
		} elseif ( is_category() || is_tax() ) {
			$value = get_term_meta( get_queried_object_id(), $key, true );
		} elseif ( is_author() ) {
			$value = get_user_meta( get_queried_object_id(), $key, true );
		}

		echo wp_kses_post( $value );
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	protected function register_controls() {
		$this->add_control(
			'key',
			[
				'label' => esc_html__( 'Meta Key', 'elementor-pro' ),
				'ai' => [
					'active' => false,
				],
			]
		);
	}
}
