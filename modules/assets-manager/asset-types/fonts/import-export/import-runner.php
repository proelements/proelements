<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Import\Import_Runner_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts_Manager;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\Custom_Fonts;
use ElementorPro\Modules\AssetsManager\AssetTypes\ImportExport\Traits\External_Attachment_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Import_Runner extends Import_Runner_Base {
	use External_Attachment_Trait;

	private $session_id;
	private $imported_fonts = [];

	public static function get_name(): string {
		return 'custom-fonts';
	}

	public function should_import( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function import( array $data, array $imported_data ) {
		$this->session_id = $data['session_id'];

		$custom_fonts = new Custom_Fonts();
		$custom_fonts->get_fonts( true );

		$result = [];

		$fonts_data = $imported_data['files']['custom-fonts']['data'] ?? [];

		if ( empty( $fonts_data ) ) {
			return $result;
		}

		foreach ( $fonts_data as $font_data ) {
			$this->import_font( $font_data );
		}

		if ( empty( $this->imported_fonts ) ) {
			return $result;
		}

		$result['site-settings']['custom-fonts'] = $this->imported_fonts;

		return $result;
	}

	public function get_import_session_metadata(): array {
		return [
			'imported_fonts' => $this->imported_fonts,
		];
	}

	private function import_font( $font_data ) {
		$existing_font = $this->get_existing_font( $font_data['post_title'] );

		if ( $existing_font ) {
			return [];
		}

		$font_id = $this->create_font( $font_data );

		if ( $font_id ) {
			$this->imported_fonts[] = [
				'id' => $font_id,
				'title' => $font_data['post_title'],
			];
		}
	}

	private function get_existing_font( $font_title ) {
		$font_query = new \WP_Query( [
			'post_type' => Fonts_Manager::CPT,
			'post_status' => 'publish',
			'posts_per_page' => 1,
			'title' => $font_title,
		] );

		if ( $font_query->have_posts() ) {
			$font_post = $font_query->posts[0];
			return [
				'id' => $font_post->ID,
				'title' => $font_post->post_title,
			];
		}

		return null;
	}

	private function create_font( $font_data ) {
		$font_id = wp_insert_post( [
			'post_title' => $font_data['post_title'],
			'post_content' => $font_data['post_content'],
			'post_status' => $font_data['post_status'],
			'post_type' => Fonts_Manager::CPT,
		] );

		if ( is_wp_error( $font_id ) ) {
			return false;
		}

		$this->set_session_post_meta( $font_id, $this->session_id );

		if ( ! empty( $font_data['font_files'] ) ) {
			update_post_meta( $font_id, Custom_Fonts::FONT_META_KEY, $font_data['font_files'] );
		}

		if ( ! empty( $font_data['font_face'] ) ) {
			update_post_meta( $font_id, Custom_Fonts::FONT_FACE_META_KEY, $font_data['font_face'] );
		}

		if ( ! empty( $font_data['attachments'] ) ) {
			$this->import_font_attachments( $font_id, $font_data['attachments'] );
		}

		return $font_id;
	}

	private function import_font_attachments( $font_id, $attachments_data ) {
		$this->create_attachments_from_urls( $font_id, $attachments_data );
	}
}
