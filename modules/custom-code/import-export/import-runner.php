<?php

namespace ElementorPro\Modules\CustomCode\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Import\Import_Runner_Base;
use Elementor\App\Modules\ImportExport\Utils as ImportExportUtils;
use ElementorPro\Modules\CustomCode\Module as Custom_Code_Module;
use ElementorPro\Modules\CustomCode\Custom_Code_Metabox;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Import_Runner extends Import_Runner_Base {
	private $session_id;
	private $imported_snippets = [];

	public static function get_name(): string {
		return 'custom-code';
	}

	public function should_import( array $data ) {
		return (
			isset( $data['include'] ) &&
			in_array( 'settings', $data['include'], true )
		);
	}

	public function import( array $data, array $imported_data ) {
		$this->session_id = $data['session_id'];

		$snippets_data = $imported_data['files']['custom-code']['data'] ?? [];

		$result = [];
		if ( empty( $snippets_data ) ) {
			return $result;
		}

		foreach ( $snippets_data as $snippet_data ) {
			$this->import_snippet( $snippet_data );
		}

		if ( empty( $this->imported_snippets ) ) {
			return $result;
		}

		$result['site-settings']['custom-code'] = $this->imported_snippets;

		return $result;
	}

	public function get_import_session_metadata(): array {
		return [
			'imported_snippets' => $this->imported_snippets,
		];
	}

	private function import_snippet( $snippet_data ) {
		$existing_snippet = $this->get_existing_snippet( $snippet_data['post_title'] );

		if ( $existing_snippet ) {
			return;
		}

		$snippet_id = $this->create_snippet( $snippet_data );

		if ( $snippet_id ) {
			$this->imported_snippets[] = [
				'id' => $snippet_id,
				'title' => $snippet_data['post_title'],
			];
		}
	}

	private function get_existing_snippet( $snippet_title ) {
		$snippet_query = new \WP_Query( [
			'post_type' => Custom_Code_Module::CPT,
			'post_status' => 'publish',
			'posts_per_page' => 1,
			'title' => $snippet_title,
		] );

		if ( $snippet_query->have_posts() ) {
			$snippet_post = $snippet_query->posts[0];
			return [
				'id' => $snippet_post->ID,
				'title' => $snippet_post->post_title,
			];
		}

		return null;
	}

	private function create_snippet( $snippet_data ) {
		$snippet_id = wp_insert_post( [
			'post_title' => $snippet_data['post_title'],
			'post_content' => $snippet_data['post_content'],
			'post_status' => $snippet_data['post_status'],
			'post_type' => Custom_Code_Module::CPT,
		] );

		if ( is_wp_error( $snippet_id ) ) {
			return false;
		}

		$this->set_session_post_meta( $snippet_id, $this->session_id );

		if ( ! empty( $snippet_data['location'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_LOCATION, $snippet_data['location'] );
		}

		if ( ! empty( $snippet_data['device_mode'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_DEVICE_MODE, $snippet_data['device_mode'] );
		}

		if ( ! empty( $snippet_data['user_roles'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_USER_ROLES, $snippet_data['user_roles'] );
		}

		if ( ! empty( $snippet_data['site_languages'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_SITE_LANGUAGES, $snippet_data['site_languages'] );
		}

		if ( ! empty( $snippet_data['url_conditions'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_URL_CONDITIONS, $snippet_data['url_conditions'] );
		}

		if ( ! empty( $snippet_data['date_conditions'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_DATE_CONDITIONS, $snippet_data['date_conditions'] );
		}

		if ( ! empty( $snippet_data['time_conditions'] ) ) {
			update_post_meta( $snippet_id, '_elementor_' . Custom_Code_Metabox::FIELD_TIME_CONDITIONS, $snippet_data['time_conditions'] );
		}

		return $snippet_id;
	}
}
