<?php

namespace ElementorPro\Modules\CollectionLoop\Controls;

use Elementor\Modules\AtomicWidgets\Controls\Base\Atomic_Control_Base;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Loop_Query_Control extends Atomic_Control_Base {
	public function get_type(): string {
		return 'loop-query';
	}

	public function get_props(): array {
		$items = [];

		foreach ( Loop_Query::query_section_items() as $control ) {
			$serialized = $control->jsonSerialize();
			$items[]    = $serialized['value'];
		}

		return [
			'items' => $items,
		];
	}
}
