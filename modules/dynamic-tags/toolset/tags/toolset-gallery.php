<?php
namespace ElementorPro\Modules\DynamicTags\Toolset\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Toolset\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Toolset_Gallery extends Data_Tag {

	public function get_name() {
		return 'toolset-gallery';
	}

	public function get_title() {
		return __( 'Toolset', 'elementor-pro' ) . ' ' . __( 'Gallery Field', 'elementor-pro' );
	}

	public function get_categories() {
		return [ Module::GALLERY_CATEGORY ];
	}

	public function get_group() {
		return Module::TOOLSET_GROUP;
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	public function get_value( array $options = [] ) {
		// Toolset Embedded version loads its bootstrap later
		if ( ! function_exists( 'types_render_field' ) ) {
			return [];
		}

		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return [];
		}

		$images = [];

		list( $field_group, $field_key ) = explode( ':', $key );

		$field = wpcf_admin_fields_get_field( $field_key );

		if ( $field && ! empty( $field['type'] ) ) {

			$galley_images = types_render_field( $field_key, [
				'separator' => '|',
				'url' => true,
			] );
			$galley_images = explode( '|', $galley_images );
			foreach ( $galley_images as $image ) {
				$images[] = [
					'id' => attachment_url_to_postid( $image ),
				];
			}
		}

		return $images;
	}

	protected function register_controls() {
		$this->add_control(
			'key',
			[
				'label' => __( 'Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => Module::get_control_options( $this->get_supported_fields() ),
			]
		);
	}

	protected function get_supported_fields() {
		return [
			'toolset_gallery',
		];
	}
}
