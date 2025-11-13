<?php

namespace ElementorPro\Core\App\Modules\ImportExport\Runners\Revert;

use Elementor\App\Modules\ImportExport\Runners\Revert\Revert_Runner_Base;
use Elementor\Core\Base\Document;
use Elementor\Plugin;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;
use ElementorPro\Plugin as ProPlugin;
use Elementor\TemplateLibrary\Source_Local;

class Templates extends Revert_Runner_Base {

	public static function get_name() : string {
		return 'templates';
	}

	public function should_revert( array $data ) : bool {
		return (
			isset( $data['runners'] ) &&
			array_key_exists( static::get_name(), $data['runners'] )
		);
	}

	public function revert( array $data ) {
		$template_types = array_values( Source_Local::get_template_types() );

		$query_args = [
			'post_type' => Source_Local::CPT,
			'post_status' => 'any',
			'posts_per_page' => -1,
			'meta_query' => [
				[
					'key' => Document::TYPE_META_KEY,
					'value' => $template_types,
				],
				[
					'key' => static::META_KEY_ELEMENTOR_IMPORT_SESSION_ID,
					'value' => $data['session_id'],
				],
			],
		];

		$templates_query = new \WP_Query( $query_args );

		foreach ( $templates_query->posts as $template_post ) {
			$template_document = Plugin::$instance->documents->get( $template_post->ID );
			$template_document->delete();
		}

		/** @var ThemeBuilderModule $theme_builder_module */
		$theme_builder_module = ProPlugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$theme_builder_module->get_conditions_manager()->clear_cache();

		$old_conditions = $data['runners']['templates']['template_conditions'] ?? [];

		foreach ( $old_conditions as $template_id => $conditions ) {
			$theme_builder_module->get_conditions_manager()->save_conditions( $template_id, $conditions );
		}
	}
}
