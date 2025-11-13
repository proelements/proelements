<?php
namespace ElementorPro\Modules\Forms\Actions;

use ElementorPro\Modules\Forms\Classes\Action_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Integration with Activity Log
 */
class Activity_Log extends Action_Base {

	public function get_name() {
		return 'activity-log';
	}

	public function get_label() {
		return 'Activity Log';
	}

	public function register_settings_section( $widget ) {}

	public function on_export( $element ) {}

	public function aal_init_roles( $roles ) {
		$roles['manage_options'][] = 'Elementor Forms';

		return $roles;
	}

	public function run( $record, $ajax_handler ) {
		aal_insert_log(
			[
				'action' => 'New Record',
				'object_type' => 'Elementor Forms',
				'object_id' => $record->get_form_settings( 'id' ),
				'object_name' => $record->get_form_settings( 'form_name' ),
			]
		);
	}

	public function __construct() {
		add_filter( 'aal_init_roles', [ $this, 'aal_init_roles' ] );
	}
}
