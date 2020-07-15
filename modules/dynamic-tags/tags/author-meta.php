<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Author_Meta extends Tag {

	public function get_name() {
		return 'author-meta';
	}

	public function get_title() {
		return __( 'Author Meta', 'elementor-pro' );
	}

	public function get_group() {
		return Module::AUTHOR_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	public function render() {
		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return;
		}

		$value = get_the_author_meta( $key );

		echo wp_kses_post( $value );
	}

	protected function _register_controls() {
		$this->add_control(
			'key',
			[
				'label' => __( 'Meta Key', 'elementor-pro' ),
			]
		);
	}
}
