<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Icons\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Export\Export_Runner_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons_Manager;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Custom_Icons;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Export_Runner extends Export_Runner_Base {
	public static function get_name(): string {
		return 'custom-icons';
	}

	public function should_export( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function export( array $data ) {
		$icon_sets = $this->get_custom_icon_sets();

		if ( empty( $icon_sets ) ) {
			return [
				'manifest' => [],
				'files' => [],
			];
		}

		$icon_sets_data = [];

		foreach ( $icon_sets as $icon_set ) {
			$icon_set_data = $this->prepare_icon_set_data( $icon_set );
			if ( $icon_set_data ) {
				$icon_sets_data[] = $icon_set_data;
			}
		}

		return [
			'files' => [
				'path' => Import_Export::FILE_NAME,
				'data' => $icon_sets_data,
			],
		];
	}

	private function get_custom_icon_sets() {
		return get_posts( [
			'post_type' => Icons_Manager::CPT,
			'posts_per_page' => -1,
			'post_status' => 'publish',
		] );
	}

	private function prepare_icon_set_data( $icon_set ) {
		$icon_set_config = Custom_Icons::get_icon_set_config( $icon_set->ID );
		$icon_set_path = get_post_meta( $icon_set->ID, '_elementor_icon_set_path', true );

		$icon_type = '';
		if ( $icon_set_config ) {
			$config_data = json_decode( $icon_set_config, true );
			$icon_type = $config_data['custom_icon_type'] ?? '';
		}

		$attachments = get_attached_media( '', $icon_set->ID );
		$attachments_data = [];

		foreach ( $attachments as $attachment ) {
			$attachments_data[] = [
				'id' => $attachment->ID,
				'title' => $attachment->post_title,
				'url' => wp_get_attachment_url( $attachment->ID ),
			];
		}

		return [
			'ID' => $icon_set->ID,
			'post_title' => $icon_set->post_title,
			'post_content' => $icon_set->post_content,
			'post_status' => $icon_set->post_status,
			'icon_set_config' => $icon_set_config,
			'icon_set_path' => $icon_set_path,
			'icon_type' => $icon_type,
			'attachments' => $attachments_data,
		];
	}
}
