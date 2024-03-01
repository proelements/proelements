<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use ElementorPro\Modules\DisplayConditions\Classes\Comparator_Provider;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Archive_Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Of_Tag_Condition extends Archive_Condition_Base {
	public function __construct() {
		parent::__construct( 'tags' );
	}

	public function get_name() {
		return 'archive_of_tags';
	}

	public function get_label(): string {
		return esc_html__( 'Of Tags', 'elementor-pro' );
	}

	public function check( $args ): bool {
		return parent::check_is_of_taxonomy( $args );
	}

	protected function is_of_taxonomy( $args ): bool {
		return is_tag( array_column( $args['tags'], 'id' ) );
	}
}
