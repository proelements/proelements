<?php
namespace ElementorPro\Modules\ThemeBuilder\ImportExportCustomization;

use Elementor\Core\Base\Document;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Export {

	public function add_theme_builder_to_export( $export_data, $data, $customization ) {
		if ( ! isset( $customization['themeBuilder']['enabled'] ) || ! $customization['themeBuilder']['enabled'] ) {
			return $export_data;
		}

		$theme_builder_data = $this->export_theme_builder_templates();

		if ( empty( $theme_builder_data['files'] ) ) {
			return $export_data;
		}

		$export_data['files'] = array_merge( $export_data['files'], $theme_builder_data['files'] );

		if ( ! empty( $theme_builder_data['manifest'] ) ) {
			$export_data['manifest'][0]['templates'] = ( $export_data['manifest'][0]['templates'] ?? [] ) + $theme_builder_data['manifest'];
		}

		return $export_data;
	}

	private function export_theme_builder_templates() {
		$theme_builder_types = array_keys( Plugin::elementor()->documents->get_document_types( [
			'is_editable' => true,
			'export_group' => Theme_Document::EXPORT_GROUP,
		] ) );

		if ( empty( $theme_builder_types ) ) {
			return [
				'files' => [],
				'manifest' => [],
			];
		}

		$query_args = [
			'post_type' => Source_Local::CPT,
			'post_status' => 'publish',
			'posts_per_page' => -1,
			'meta_query' => [
				[
					'key' => Document::TYPE_META_KEY,
					'value' => $theme_builder_types,
				],
			],
		];

		$theme_builder_query = new \WP_Query( $query_args );

		$manifest_data = [];
		$files = [];

		foreach ( $theme_builder_query->posts as $template_post ) {
			$template_id = $template_post->ID;

			$template_document = Plugin::elementor()->documents->get( $template_id );

			if ( ! $template_document || ! $template_document instanceof Theme_Document ) {
				continue;
			}

			$manifest_data[ $template_id ] = $template_document->get_export_summary();

			$files[] = [
				'path' => 'templates/' . $template_id,
				'data' => $template_document->get_export_data(),
			];
		}

		return [
			'files' => $files,
			'manifest' => $manifest_data,
		];
	}
}
