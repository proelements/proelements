<?php

namespace ElementorPro\Modules\Lottie\Classes;

use ElementorPro\Core\Isolation\Wordpress_Adapter_Interface;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Caption_Helper {
	private Wordpress_Adapter_Interface $wp_adapter;
	private array $settings = [];

	public function __construct( Wordpress_Adapter_Interface $wp_adapter, array $settings ) {
		$this->wp_adapter = $wp_adapter;
		$this->settings = $settings;
	}

	public function get_caption() {
		if ( $this->has_custom_caption() ) {
			return $this->get_custom_caption();
		}

		if ( $this->has_attachment_caption() ) {
			return $this->get_attachment_caption();
		}

		if ( $this->has_title_caption() ) {
			return $this->get_title_caption();
		}

		return '';
	}

	private function get_custom_caption() {
		return $this->settings['caption'] ?? '';
	}

	private function get_attachment_caption() {
		$attachment_id = $this->settings['source_json']['id'];

		if ( ! $this->user_can_access( $attachment_id ) ) {
			return '';
		}

		return $this->wp_adapter->wp_get_attachment_caption( $attachment_id );
	}

	private function get_title_caption() {
		$post_id = $this->settings['source_json']['id'];

		if ( ! $this->user_can_access( $post_id ) ) {
			return '';
		}

		return $this->wp_adapter->get_the_title( $post_id );
	}

	private function user_can_access( $resource_id ) {
		if ( $this->wp_adapter->current_user_can( 'manage_options' ) ) {
			return true;
		}

		if ( $this->wp_adapter->current_user_can( 'edit_post', $resource_id ) ) {
			return true;
		}

		if ( $this->wp_adapter->current_user_can( 'read_post', $resource_id ) ) {
			return true;
		}

		return false;
	}

	private function has_title_caption() {
		return 'title' === $this->settings['caption_source'];
	}

	private function has_custom_caption() {
		if ( $this->is_external_url_caption() ) {
			return true;
		}

		if ( 'custom' === $this->settings['caption_source'] ) {
			return $this->is_media_file_caption();
		}

		return false;
	}

	private function has_attachment_caption() {
		return 'caption' === $this->settings['caption_source'];
	}

	private function is_media_file_caption() {
		return 'media_file' === $this->settings['source'] && 'none' !== $this->settings['caption_source'];
	}

	private function is_external_url_caption() {
		return 'external_url' === $this->settings['source'] && '' !== $this->settings['caption'];
	}
}
