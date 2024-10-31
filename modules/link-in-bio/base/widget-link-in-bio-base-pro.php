<?php

namespace ElementorPro\Modules\LinkInBio\Base;

use Elementor\Modules\LinkInBio\Base\Widget_Link_In_Bio_Base;

abstract class Widget_Link_In_Bio_Base_Pro extends Widget_Link_In_Bio_Base {

	// TODO: Remove in v3.27.0 [ED-15717]
	// Styling is now loaded from Core widget base file.
	public function get_style_depends(): array {
		$style_depends = parent::get_style_depends();

		// In older Core versions, enqueue the frontend.scss.
		if ( ! in_array( 'widget-link-in-bio-base', $style_depends ) ) {
			$style_depends[] = 'widget-link-in-bio';
		}

		return $style_depends;
	}
}
