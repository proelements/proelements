<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Revert\Revert_Runner_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts_Manager;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\Custom_Fonts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Revert_Runner extends Revert_Runner_Base {

	public static function get_name(): string {
		return 'custom-fonts';
	}

	public function should_revert( array $data ): bool {
		return (
			isset( $data['runners'] ) &&
			array_key_exists( static::get_name(), $data['runners'] )
		);
	}

	public function revert( array $data ) {
		$metadata = $data['runners'][ static::get_name() ] ?? [];

		if ( empty( $metadata ) ) {
			return;
		}

		$this->revert_imported_fonts( $metadata );

		$this->revert_attachments( $data['session_id'] );

		$custom_fonts = new Custom_Fonts();
		$custom_fonts->get_fonts( true );
	}

	private function revert_imported_fonts( $metadata ) {
		$imported_fonts = $metadata['imported_fonts'] ?? [];

		foreach ( $imported_fonts as $font ) {
			$this->delete_font_and_attachments( $font['id'] );
		}
	}

	private function revert_attachments( $session_id ) {
		$attachments_query = new \WP_Query( [
			'post_type' => 'attachment',
			'post_status' => 'inherit',
			'posts_per_page' => -1,
			'meta_query' => [
				[
					'key' => static::META_KEY_ELEMENTOR_IMPORT_SESSION_ID,
					'value' => $session_id,
					'compare' => '=',
				],
			],
		] );

		if ( ! $attachments_query->have_posts() ) {
			return;
		}

		foreach ( $attachments_query->posts as $attachment ) {
			wp_delete_attachment( $attachment->ID, true );
		}
	}

	private function delete_font_and_attachments( $font_id ) {
		$attachments = get_attached_media( '', $font_id );
		foreach ( $attachments as $attachment ) {
			wp_delete_attachment( $attachment->ID, true );
		}

		wp_delete_post( $font_id, true );
	}
}

