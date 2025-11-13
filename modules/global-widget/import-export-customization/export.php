<?php
namespace ElementorPro\Modules\GlobalWidget\ImportExportCustomization;

use Elementor\Core\Base\Document;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\GlobalWidget\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Export {

	public function add_global_widgets_to_export( $export_data, $data, $customization ) {
		if ( ! isset( $customization['globalWidgets']['enabled'] ) || ! $customization['globalWidgets']['enabled'] ) {
			return $export_data;
		}

		$global_widgets_data = $this->export_global_widgets();

		if ( empty( $global_widgets_data['files'] ) ) {
			return $export_data;
		}

		$export_data['files'] = array_merge( $export_data['files'], $global_widgets_data['files'] );

		if ( ! empty( $global_widgets_data['manifest'] ) ) {
			$export_data['manifest'][0]['templates'] = ( $export_data['manifest'][0]['templates'] ?? [] ) + $global_widgets_data['manifest'];
		}

		return $export_data;
	}

	private function export_global_widgets() {
		$query_args = [
			'post_type' => Source_Local::CPT,
			'post_status' => 'publish',
			'posts_per_page' => -1,
			'meta_query' => [
				[
					'key' => Document::TYPE_META_KEY,
					'value' => Module::TEMPLATE_TYPE,
				],
			],
		];

		$global_widgets_query = new \WP_Query( $query_args );

		$manifest_data = [];
		$files = [];

		foreach ( $global_widgets_query->posts as $widget_post ) {
			$widget_id = $widget_post->ID;

			$widget_document = Plugin::elementor()->documents->get( $widget_id );

			if ( ! $widget_document ) {
				continue;
			}

			$manifest_data[ $widget_id ] = $widget_document->get_export_summary();

			$files[] = [
				'path' => 'templates/' . $widget_id,
				'data' => $widget_document->get_export_data(),
			];
		}

		return [
			'files' => $files,
			'manifest' => $manifest_data,
		];
	}
}
