<?php
namespace ElementorPro\Modules\AtomicForm\Select\Controls;

use Elementor\Modules\AtomicWidgets\Controls\Base\Atomic_Control_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Options_Select_Control extends Atomic_Control_Base {
	public function get_type(): string {
		return 'options-select';
	}

	public function get_props(): array {
		return [];
	}
}
