<?php

namespace ElementorPro\Modules\DisplayConditions\Classes\DynamicTags;

interface Data_Provider {

	/**
	 * @param array $args
	 * @return string | bool
	 */
	public function get_value( array $args );

	public function get_control_options(): array;
}
