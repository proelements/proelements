<?php
namespace ElementorPro\Modules\DisplayConditions\Conditions;

use ElementorPro\Modules\DisplayConditions\Conditions\Base\Title_Condition_Base;

class Post_Title_Condition extends Title_Condition_Base {

	public function get_name() {
		return 'post_title';
	}

	public function get_group() {
		return 'post';
	}

	public function get_label() {
		return esc_html__( 'Post Title', 'elementor-pro' );
	}

	protected function get_query() {
		return [
			'post_status' => 'publish',
			'post_type' => 'post',
		];
	}
}
