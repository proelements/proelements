<?php

namespace ElementorPro\Modules\FloatingButtons\Base;

use Elementor\Modules\FloatingButtons\Base\Widget_Floating_Bars_Base;

abstract class Widget_Floating_Bars_Base_Pro extends Widget_Floating_Bars_Base {

	// TODO: Remove in v3.27.0 [ED-15717]
	// Styling is now loaded from Core widget base file.
	public function get_style_depends(): array {
		$style_depends = parent::get_style_depends();

		if ( ! in_array( 'widget-floating-buttons', $style_depends ) ) {
			$style_depends[] = 'widget-floating-buttons';
		}

		return $style_depends;
	}
}
