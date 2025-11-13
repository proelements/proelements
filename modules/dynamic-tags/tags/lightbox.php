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
		return esc_html__( 'Lightbox', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ACTION_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	// Keep Empty to avoid default advanced section
	protected function register_advanced_section() {}

	public function register_controls() {
		$this->add_control(
			'type',
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'video' => [
						'title' => esc_html__( 'Video', 'elementor-pro' ),
						'icon' => 'eicon-video-camera',
						'atomic-icon' => 'BrandYoutubeIcon',
					],
					'image' => [
						'title' => esc_html__( 'Image', 'elementor-pro' ),
						'icon' => 'eicon-image-bold',
						'atomic-icon' => 'PhotoIcon',
					],
				],
				'default' => 'video',
			]
		);

		$this->add_control(
			'image',
			[
				'label' => esc_html__( 'Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'condition' => [
					'type' => 'image',
				],
			]
		);

		$this->add_control(
			'video_url',
			[
				'label' => esc_html__( 'Video URL', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'label_block' => true,
				'condition' => [
					'type' => 'video',
				],
				'ai' => [
					'active' => false,
				],
			]
		);
	}

	private function get_image_settings( $settings ) {
		$image_settings = [
			'url' => $this->get_image_url( $settings['image'] ),
			'type' => 'image',
		];

		return array_merge( $image_settings, $this->get_image_attributes( $settings['image'] ) );
	}

	private function get_image_url( array $image_settings ): string {
		if ( ! empty( $image_settings['url'] ) ) {
			return $image_settings['url'];
		}

		if ( ! empty( $image_settings['src'] ) ) {
			return $this->get_atomic_image_url( $image_settings );
		}

		return '';
	}

	private function get_atomic_image_url( array $image_settings ): string {
		$default = $image_settings['src']['url'] ?? '';

		if ( ! empty( $image_settings['src']['id'] ) ) {
			$image_src = wp_get_attachment_image_src( $image_settings['src']['id'], 'full' );

			return ! empty( $image_src[0] ) ? $image_src[0] : $default;
		}

		return $image_settings['src'];
	}

	private function get_image_attributes( array $image_settings ): array {
		if ( ! empty( $image_settings['id'] ) ) {
			return Plugin::elementor()->images_manager->get_lightbox_image_attributes( $image_settings['id'] );
		}

		if ( ! empty( $image_settings['src']['id'] ) ) {
			return Plugin::elementor()->images_manager->get_lightbox_image_attributes( $image_settings['src']['id'] );
		}

		return [];
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

		// PHPCS - the method Plugin::elementor()->frontend->create_action_hash is safe.
		echo Plugin::elementor()->frontend->create_action_hash( 'lightbox', $value ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
