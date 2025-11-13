<?php

namespace ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Import;

use Elementor\App\Modules\ImportExportCustomization\Utils as ImportExportUtils;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Base\Import_Runner_Base;

class Taxonomies extends Import_Runner_Base {

	private $import_session_id;

	public function handle( $result, array $data, array $imported_data, array $customization, $runner ) {
		$path = $data['extracted_directory_path'] . 'taxonomies/';
		$this->import_session_id = $data['session_id'];
		$selected_taxonomies = $data['selected_taxonomies'] ?? [];

		$wp_builtin_post_types = ImportExportUtils::get_builtin_wp_post_types();
		$selected_custom_post_types = isset( $data['selected_custom_post_types'] ) ? $data['selected_custom_post_types'] : [];
		$post_types = array_merge( $wp_builtin_post_types, $selected_custom_post_types );

		$result = [];

		foreach ( $post_types as $post_type ) {
			if ( empty( $data['manifest']['taxonomies'][ $post_type ] ) ) {
				continue;
			}

			$taxonomies_to_import = [];

			foreach ( $data['manifest']['taxonomies'][ $post_type ] as $taxonomy ) {
				if ( in_array( $taxonomy['name'], $selected_taxonomies, true ) ) {
					$taxonomies_to_import[] = $taxonomy;
				}
			}

			$result['taxonomies'][ $post_type ] = $runner->import_taxonomies( $taxonomies_to_import, $path );
		}

		return $result;
	}
}
