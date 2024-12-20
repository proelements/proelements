<?php

namespace ElementorPro\Modules\FloatingButtons\Base;

use Elementor\Modules\FloatingButtons\Base\Widget_Floating_Bars_Base;
use ElementorPro\Plugin;

abstract class Widget_Floating_Bars_Base_Pro extends Widget_Floating_Bars_Base {

	// TODO: Remove in v3.27.0 [ED-15717]
	// Styling is now loaded from Core widget base file.
	public function get_style_depends(): array {
		$style_depends = parent::get_style_depends();

		// In older Core versions, enqueue the frontend.scss.
		if ( ! in_array( 'widget-floating-bars-base', $style_depends ) ) {
			$style_depends[] = 'widget-floating-buttons';
		}

		return $style_depends;
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}
}
