<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;
use Elementor\Controls_Manager;
use Elementor\Embed;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class Lightbox extends Tag {

	public function get_name() {
		return 'lightbox';
	}

	public function get_title() {
		return __( 'Lightbox', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ACTION_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	// Keep Empty to avoid default advanced section
	protected function register_advanced_section() {}

	public function _register_controls() {
		$this->add_control(
			'type',
			[
				'label' => __( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'video' => [
						'title' => __( 'Video', 'elementor-pro' ),
						'icon' => 'eicon-video-camera',
					],
					'image' => [
						'title' => __( 'Image', 'elementor-pro' ),
						'icon' => 'eicon-image-bold',
					],
				],
			]
		);

		$this->add_control(
			'image',
			[
				'label' => __( 'Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'condition' => [
					'type' => 'image',
				],
			]
		);

		$this->add_control(
			'video_url',
			[
				'label' => __( 'Video URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'label_block' => true,
				'condition' => [
					'type' => 'video',
				],
			]
		);
	}

	private function get_image_settings( $settings ) {
		$image_settings = [
			'url' => $settings['image']['url'],
			'type' => 'image',
		];

		$image_id = $settings['image']['id'];

		if ( $image_id ) {
			$lightbox_image_attributes = Plugin::elementor()->images_manager->get_lightbox_image_attributes( $image_id );
			$image_settings = array_merge( $image_settings, $lightbox_image_attributes );
		}

		return $image_settings;
	}

	private function get_video_settings( $settings ) {
		$video_properties = Embed::get_video_properties( $settings['video_url'] );
		$video_url = null;
		if ( ! $video_properties ) {
			$video_type = 'hosted';
			$video_url = $settings['video_url'];
		} else {
			$video_type = $video_properties['provider'];
			$video_url = Embed::get_embed_url( $settings['video_url'] );
		}

		if ( null === $video_url ) {
			return '';
		}

		return [
			'type' => 'video',
			'videoType' => $video_type,
			'url' => $video_url,
		];
	}

	public function render() {
		$settings = $this->get_settings();

		$value = [];

		if ( ! $settings['type'] ) {
			return;
		}

		if ( 'image' === $settings['type'] && $settings['image'] ) {
			$value = $this->get_image_settings( $settings );
		} elseif ( 'video' === $settings['type'] && $settings['video_url'] ) {
			$value = $this->get_video_settings( $settings );
		}

		if ( ! $value ) {
			return;
		}

		echo Plugin::elementor()->frontend->create_action_hash( 'lightbox', $value );
	}
}
