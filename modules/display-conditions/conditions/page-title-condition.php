<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use ElementorPro\Modules\DisplayConditions\Conditions\Base\Title_Condition_Base;

class Page_Title_Condition extends Title_Condition_Base {

	public function get_name() {
		return 'page_title';
	}

	public function get_group() {
		return 'page';
	}

	public function get_label() {
		return esc_html__( 'Page Title', 'elementor-pro' );
	}

	protected function get_query() {
		return [
			'post_status' => 'publish',
			'post_type' => 'page',
		];
	}
}
