<?php
namespace ElementorPro\Modules\AtomicForm\Textarea\Controls;

use Elementor\Modules\AtomicWidgets\Controls\Base\Atomic_Control_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Number_Range_Control extends Atomic_Control_Base {
	private ?string $min_label = null;
	private ?string $max_label = null;
	private ?string $error_message = null;

	public function get_type(): string {
		return 'number-range';
	}

	public function set_min_label( string $min_label ): self {
		$this->min_label = $min_label;
		return $this;
	}

	public function set_max_label( string $max_label ): self {
		$this->max_label = $max_label;
		return $this;
	}

	public function set_error_message( string $error_message ): self {
		$this->error_message = $error_message;
		return $this;
	}

	public function get_props(): array {
		return [
			'minLabel' => $this->min_label,
			'maxLabel' => $this->max_label,
			'errorMessage' => $this->error_message,
		];
	}
}
