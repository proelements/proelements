<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\ImportExport\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait External_Attachment_Trait {
	private function create_attachment_from_url( $parent_id, $attachment_data ) {
		$attachment_id = wp_insert_attachment( [
			'post_title' => $attachment_data['title'],
			'post_content' => '',
			'post_status' => 'inherit',
			'post_parent' => $parent_id,
			'post_mime_type' => 'application/octet-stream',
		], '' );

		if ( is_wp_error( $attachment_id ) ) {
			return false;
		}

		update_post_meta( $attachment_id, '_external_url', $attachment_data['url'] );

		$this->set_session_post_meta( $attachment_id, $this->session_id );

		$this->add_external_url_filter();

		return $attachment_id;
	}

	public function add_external_url_filter() {
		add_filter( 'wp_get_attachment_url', function( $url, $attachment_id ) {
			$external_url = get_post_meta( $attachment_id, '_external_url', true );
			if ( $external_url ) {
				return $external_url;
			}
			return $url;
		}, 10, 2 );
	}

	public function create_attachments_from_urls( $parent_id, $attachments_data ): array {
		$attachment_ids = [];

		foreach ( $attachments_data as $attachment_data ) {
			$attachment_id = $this->create_attachment_from_url( $parent_id, $attachment_data );
			if ( $attachment_id ) {
				$attachment_ids[] = $attachment_id;
			}
		}

		return $attachment_ids;
	}
}
