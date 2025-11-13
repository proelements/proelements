<?php
namespace ElementorPro\Modules\Forms\Classes;

use ElementorPro\Modules\Forms\Widgets\Form;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Action_Base {

	abstract public function get_name();

	abstract public function get_label();

	/**
	 * Get the action ID.
	 *
	 * TODO: Make it an abstract function that will replace `get_name()`.
	 *
	 * @since 3.5.0
	 *
	 * @return string
	 */
	public function get_id() {
		return $this->get_name();
	}

	/**
	 * @param Form_Record  $record
	 * @param Ajax_Handler $ajax_handler
	 */
	abstract public function run( $record, $ajax_handler );

	/**
	 * @param Form $form
	 */
	abstract public function register_settings_section( $form );

	/**
	 * @param array $element
	 */
	abstract public function on_export( $element );
}
