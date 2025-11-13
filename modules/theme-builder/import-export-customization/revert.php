<?php

namespace ElementorPro\Modules\ThemeBuilder\ImportExportCustomization;

use ElementorPro\Plugin;

class Revert {

	public function revert_theme_builder_templates_conditions( array $data ) {
		$theme_builder_module = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$theme_builder_module->get_conditions_manager()->clear_cache();

		$old_conditions = $data['runners']['templates']['template_conditions'] ?? [];

		foreach ( $old_conditions as $template_id => $conditions ) {
			$theme_builder_module->get_conditions_manager()->save_conditions( $template_id, $conditions );
		}
	}
}
