<?php

namespace ElementorPro\Modules\AssetsManager\AssetTypes\Icons\ImportExportCustomization;

use Elementor\App\Modules\ImportExportCustomization\Runners\Export\Export_Runner_Base;
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

		$include_custom_icons = $data['customization']['settings']['customIcons'] ?? true;

		if ( empty( $icon_sets ) || ! $include_custom_icons ) {
			return [
				'manifest' => [],
				'files' => [],
			];
		}

		$icon_sets_data = [];
		$manifest = [];

		foreach ( $icon_sets as $icon_set ) {
			$icon_set_data = $this->prepare_icon_set_data( $icon_set );
			if ( $icon_set_data ) {
				$icon_sets_data[] = $icon_set_data;
				$manifest['custom-icons'][ $icon_set->ID ] = $icon_set_data;
			}
		}

		return [
			'files' => [
				'path' => Import_Export_Customization::FILE_NAME,
				'data' => $icon_sets_data,
			],
			'manifest' => [
				$manifest,
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
			$url = wp_get_attachment_url( $attachment->ID );
			$attachments_data[] = [
				'id' => $attachment->ID,
				'title' => $attachment->post_title,
				'url' => $url,
			];

			do_action( 'elementor/templates/collect_media_url', $url, (array) $attachment );
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
