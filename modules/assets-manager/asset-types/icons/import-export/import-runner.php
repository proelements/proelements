<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Icons\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Import\Import_Runner_Base;
use Elementor\App\Modules\ImportExport\Utils as ImportExportUtils;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons_Manager;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Custom_Icons;
use ElementorPro\Modules\AssetsManager\AssetTypes\ImportExport\Traits\External_Attachment_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Import_Runner extends Import_Runner_Base {
	use External_Attachment_Trait;

	private $session_id;
	private $imported_icon_sets = [];

	public static function get_name(): string {
		return 'custom-icons';
	}

	public function should_import( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function import( array $data, array $imported_data ) {
		$this->session_id = $data['session_id'];

		$result = [];

		$icon_sets_data = $imported_data['files']['custom-icons']['data'] ?? [];

		if ( empty( $icon_sets_data ) ) {
			return $result;
		}

		foreach ( $icon_sets_data as $icon_set_data ) {
			$this->import_icon_set( $icon_set_data );
		}

		if ( empty( $this->imported_icon_sets ) ) {
			return $result;
		}

		$result['site-settings']['custom-icons'] = $this->imported_icon_sets;

		return $result;
	}

	public function get_import_session_metadata(): array {
		return [
			'imported_icon_sets' => $this->imported_icon_sets,
		];
	}

	private function import_icon_set( $icon_set_data ) {
		$existing_icon_set = $this->get_existing_icon_set( $icon_set_data['post_title'] );

		if ( $existing_icon_set ) {
			return;
		}

		$icon_set_id = $this->create_icon_set( $icon_set_data );

		if ( $icon_set_id ) {
			$this->imported_icon_sets[] = [
				'id' => $icon_set_id,
				'title' => $icon_set_data['post_title'],
			];
		}
	}

	private function get_existing_icon_set( $icon_set_title ) {
		$icon_set_query = new \WP_Query( [
			'post_type' => Icons_Manager::CPT,
			'post_status' => 'publish',
			'posts_per_page' => 1,
			'title' => $icon_set_title,
		] );

		if ( $icon_set_query->have_posts() ) {
			$icon_set_post = $icon_set_query->posts[0];
			return [
				'id' => $icon_set_post->ID,
				'title' => $icon_set_post->post_title,
			];
		}

		return null;
	}

	private function create_icon_set( $icon_set_data ) {
		$icon_set_id = wp_insert_post( [
			'post_title' => $icon_set_data['post_title'],
			'post_content' => $icon_set_data['post_content'],
			'post_status' => $icon_set_data['post_status'],
			'post_type' => Icons_Manager::CPT,
		] );

		if ( is_wp_error( $icon_set_id ) ) {
			return false;
		}

		$this->set_session_post_meta( $icon_set_id, $this->session_id );

		if ( ! empty( $icon_set_data['icon_set_config'] ) ) {
			update_post_meta( $icon_set_id, Custom_Icons::META_KEY, $icon_set_data['icon_set_config'] );
		}

		if ( ! empty( $icon_set_data['icon_set_path'] ) ) {
			update_post_meta( $icon_set_id, '_elementor_icon_set_path', $icon_set_data['icon_set_path'] );
		}

		if ( ! empty( $icon_set_data['attachments'] ) ) {
			$this->handle_icon_set_attachments( $icon_set_id, $icon_set_data['attachments'] );
		}

		Custom_Icons::clear_icon_list_option();

		return $icon_set_id;
	}

	private function handle_icon_set_attachments( $icon_set_id, $attachments_data ) {
		$this->create_attachments_from_urls( $icon_set_id, $attachments_data );
	}
}
