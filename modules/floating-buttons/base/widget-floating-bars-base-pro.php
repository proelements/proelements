<?php

namespace ElementorPro\Modules\FloatingButtons\Base;

use Elementor\Modules\FloatingButtons\Base\Widget_Floating_Bars_Base;
use ElementorPro\Plugin;

abstract class Widget_Floating_Bars_Base_Pro extends Widget_Floating_Bars_Base {

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}
}
