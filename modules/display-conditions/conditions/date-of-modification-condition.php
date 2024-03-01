<?php

namespace ElementorPro\Modules\DisplayConditions\Conditions;

use ElementorPro\Modules\DisplayConditions\Conditions\Base\Date_Condition_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Date_Of_Modification_Condition extends Date_Condition_Base {
	const CONDITION_KEY = 'date';
	const GROUP_KEY = 'date';

	public function get_name() {
		return 'date_of_modification';
	}

	public function get_label() {
		return esc_html__( 'Date Modified', 'elementor-pro' );
	}

	public function get_group() {
		return 'post';
	}

	public function __construct() {
		parent::__construct( self::CONDITION_KEY, self::GROUP_KEY );
	}

	public function check( $args ): bool {
		return parent::check_date( $args, $this->get_modification_date() );
	}

	private function get_modification_date() {
		return date_create_from_format(
			self::DATE_FORMAT,
			get_the_modified_date( self::DATE_FORMAT, get_the_ID() )
		);
	}
}
