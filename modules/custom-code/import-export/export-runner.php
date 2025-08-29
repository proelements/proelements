<?php

namespace ElementorPro\Modules\CustomCode\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Export\Export_Runner_Base;
use ElementorPro\Modules\CustomCode\Module as Custom_Code_Module;
use ElementorPro\Modules\CustomCode\Custom_Code_Metabox;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Export_Runner extends Export_Runner_Base {
	public static function get_name(): string {
		return 'custom-code';
	}

	public function should_export( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function export( array $data ) {
		$code_snippets = $this->get_custom_code_snippets();

		if ( empty( $code_snippets ) ) {
			return [
				'manifest' => [],
				'files' => [],
			];
		}

		$snippets_data = [];

		foreach ( $code_snippets as $snippet ) {
			$snippets_data[] = $this->prepare_snippet_data( $snippet );
		}

		return [
			'files' => [
				'path' => Import_Export::FILE_NAME,
				'data' => $snippets_data,
			],
		];
	}

	private function get_custom_code_snippets() {
		return get_posts( [
			'post_type' => Custom_Code_Module::CPT,
			'posts_per_page' => -1,
			'post_status' => 'publish',
		] );
	}

	private function prepare_snippet_data( $snippet ) {
		$location = get_post_meta( $snippet->ID, '_elementor_' . Custom_Code_Metabox::FIELD_LOCATION, true );
		$priority = get_post_meta( $snippet->ID, '_elementor_' . Custom_Code_Metabox::FIELD_PRIORITY, true );
		$conditions = get_post_meta( $snippet->ID, '_elementor_conditions', true );

		return [
			'ID' => $snippet->ID,
			'post_title' => $snippet->post_title,
			'post_content' => $snippet->post_content,
			'post_status' => $snippet->post_status,
			'location' => $location,
			'priority' => $priority,
			'conditions' => $conditions,
		];
	}
}
