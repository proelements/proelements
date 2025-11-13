<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Export;

use Elementor\App\Modules\ImportExportCustomization\Utils as ImportExportUtils;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Export_Runner_Base;

class Taxonomies extends Export_Runner_Base {
	public function handle( $result, array $data, array $customization, $runner ) {
		if ( is_array( $result ) ) {
			return $result;
		}

		$include_menus = $customization['menus'] ?? true;
		$selected_custom_post_types = $data['selected_custom_post_types'] ?? null;
		$exclude_post_types = [];

		if ( ! $include_menus ) {
			$exclude_post_types[] = 'nav_menu_item';
		}

		if ( is_array( $selected_custom_post_types ) && ! in_array( 'post', $selected_custom_post_types, true ) ) {
			$exclude_post_types[] = 'post';
		}

		$wp_builtin_post_types = ImportExportUtils::get_builtin_wp_post_types( $exclude_post_types );

		$post_types = is_array( $selected_custom_post_types )
			? array_merge( $wp_builtin_post_types, $selected_custom_post_types )
			: $wp_builtin_post_types;

		$export = $this->export_taxonomies( $post_types, $customization, $runner );

		$manifest_data['taxonomies'] = $export['manifest'];

		return [
			'files' => $export['files'],
			'manifest' => [
				$manifest_data,
			],
		];
	}

	private function export_taxonomies( array $post_types, array $customization, $runner ) {
		$files = [];
		$manifest = [];

		$taxonomies = get_taxonomies();

		$selected_taxonomies = $customization['taxonomies'] ?? null;

		foreach ( $taxonomies as $taxonomy ) {
			$taxonomy_obj = get_taxonomy( $taxonomy );
			$taxonomy_post_types = $taxonomy_obj->object_type;
			$intersected_post_types = array_intersect( $taxonomy_post_types, $post_types );

			$should_export = null === $selected_taxonomies
				? ! empty( $intersected_post_types )
				: in_array( $taxonomy, $selected_taxonomies, true );

			if ( ! $should_export ) {
				continue;
			}

			$data = $runner->export_terms( $taxonomy );

			if ( empty( $data ) ) {
				continue;
			}

			foreach ( $intersected_post_types as $post_type ) {
				$manifest[ $post_type ][] = [
					'name'  => $taxonomy,
					'label' => $taxonomy_obj->label,
				];
			}

			$files[] = [
				'path' => 'taxonomies/' . $taxonomy,
				'data' => $data,
			];
		}

		return [
			'files' => $files,
			'manifest' => $manifest,
		];
	}
}
