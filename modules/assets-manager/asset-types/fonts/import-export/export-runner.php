<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Export\Export_Runner_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts_Manager;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\Custom_Fonts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Export_Runner extends Export_Runner_Base {
	public static function get_name(): string {
		return 'custom-fonts';
	}

	public function should_export( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function export( array $data ) {
		$custom_fonts = new Custom_Fonts();
		$fonts = $custom_fonts->get_fonts( true );

		if ( empty( $fonts ) ) {
			return [
				'manifest' => [],
				'files' => [],
			];
		}

		$fonts_data = [];

		foreach ( $fonts as $font_family => $font_type ) {
			$font_data = $this->prepare_font_data( $font_family );
			if ( $font_data ) {
				$fonts_data[] = $font_data;
			}
		}

		return [
			'files' => [
				'path' => Import_Export::FILE_NAME,
				'data' => $fonts_data,
			],
		];
	}

	private function prepare_font_data( $font_family ) {
		$font_query = new \WP_Query( [
			'post_type' => Fonts_Manager::CPT,
			'post_status' => 'any',
			'posts_per_page' => 1,
			'title' => $font_family,
		] );

		if ( ! $font_query->have_posts() ) {
			return null;
		}

		$font_post = $font_query->posts[0];

		$custom_fonts = new Custom_Fonts();

		$font_files = get_post_meta( $font_post->ID, Custom_Fonts::FONT_META_KEY, true );
		$font_face = get_post_meta( $font_post->ID, Custom_Fonts::FONT_FACE_META_KEY, true );

		$font_type = $custom_fonts->get_font_family_type( $font_post->ID, $font_post->post_title );
		$is_font_variable = 'variable' === $font_type;

		$font_variables = [];
		$font_variable_ranges = [];

		if ( $is_font_variable ) {
			$font_data = $custom_fonts->get_font_data( $font_post->ID, $font_post->post_title );
			$font_variables = $font_data[ $font_post->post_title ]['variables'] ?? null;
			$font_variable_ranges = $font_data[ $font_post->post_title ]['variable_ranges'] ?? null;
		}

		$attachments = get_attached_media( '', $font_post->ID );
		$attachments_data = [];

		foreach ( $attachments as $attachment ) {
			$attachments_data[] = [
				'id' => $attachment->ID,
				'title' => $attachment->post_title,
				'url' => wp_get_attachment_url( $attachment->ID ),
			];
		}

		return [
			'ID' => $font_post->ID,
			'post_title' => $font_post->post_title,
			'post_content' => $font_post->post_content,
			'post_status' => $font_post->post_status,
			'font_type' => $font_type,
			'font_files' => $font_files,
			'font_face' => $font_face,
			'font_variables' => $font_variables,
			'font_variable_ranges' => $font_variable_ranges,
			'attachments' => $attachments_data,
		];
	}
}
