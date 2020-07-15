<?php
namespace ElementorPro\Modules\Forms\Actions;

use ElementorPro\Modules\Forms\Classes\Action_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class CF7DB extends Action_Base {

	public function get_name() {
		return 'cf7db';
	}

	public function get_label() {
		return 'Contact Form to Database';
	}

	public function register_settings_section( $widget ) {}

	public function on_export( $element ) {}

	public function run( $record, $ajax_handler ) {
		$data = (object) [
			'title' => $record->get_form_settings( 'form_name' ),
			'posted_data' => $record->get_formatted_data( true ),
		];

		// Call hook to submit data
		do_action_ref_array( 'cfdb_submit', [ $data ] );
	}
}
