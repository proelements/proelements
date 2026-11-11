<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Action_Base {

	/**
	 * Get the action type identifier.
	 *
	 * @return string Action type (e.g., 'email', 'webhook', 'collect-submissions')
	 */
	abstract public function get_type(): string;

	/**
	 * Execute the action with the provided form data and widget settings.
	 *
	 * @param array $form_data Sanitized form data submitted by the user.
	 *                         Example: ['name' => 'John', 'email' => 'john@example.com']
	 * @param array $widget_settings Full widget settings - action extracts what it needs.
	 *                               Example: ['email_to' => 'admin@site.com', 'email_subject' => 'New form', ...]
	 * @param array $context Additional context (post_id, form_id, form_name).
	 *                       Example: ['post_id' => 123, 'form_id' => 'contact', 'form_name' => 'Contact Form']
	 * @return array Result array with 'status' and optional data.
	 *               Success: ['status' => 'success', 'message' => '...', 'log' => '...' (optional, stored in the submission action log), ...]
	 *               Failure: ['status' => 'failed', 'error' => '...', ...]
	 */
	abstract public function execute( array $form_data, array $widget_settings, array $context ): array;

	/**
	 * Validate widget settings for this action.
	 *
	 * @param array $widget_settings Widget settings to validate.
	 * @return bool|\WP_Error True if valid, WP_Error otherwise.
	 */
	protected function validate_settings( array $widget_settings ) {
		return true;
	}

	/**
	 * Format a success result.
	 *
	 * @param string $message Success message.
	 * @param array $additional_data Additional data to include.
	 * @return array
	 */
	protected function success( string $message, array $additional_data = [] ): array {
		return array_merge(
			[
				'status' => 'success',
				'message' => $message,
			],
			$additional_data
		);
	}

	/**
	 * Format a failure result.
	 *
	 * @param string $error Error message.
	 * @param array $additional_data Additional data to include.
	 * @return array
	 */
	protected function failure( string $error, array $additional_data = [] ): array {
		return array_merge(
			[
				'status' => 'failed',
				'error' => $error,
			],
			$additional_data
		);
	}
}
