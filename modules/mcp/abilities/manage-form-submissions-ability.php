<?php
namespace ElementorPro\Modules\Mcp\Abilities;

use Elementor\Modules\Mcp\Abilities\Utils\Tool_Performance_Metrics;
use Elementor\Modules\Mcp\Events\Mcp_Event_Dispatcher;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Mcp\Abilities\Utils\Bulk_Operations_Result;
use ElementorPro\Modules\Mcp\Abilities\Utils\Form_Submissions_Availability;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Manage_Form_Submissions_Ability extends Abstract_Ability {

	const MAX_BATCH_SIZE = 50;

	const ACTION_MARK_READ = 'mark_read';
	const ACTION_MARK_UNREAD = 'mark_unread';
	const ACTION_TRASH = 'trash';
	const ACTION_RESTORE = 'restore';
	const ACTION_UPDATE_VALUES = 'update_values';
	const ACTIONS = [
		self::ACTION_MARK_READ,
		self::ACTION_MARK_UNREAD,
		self::ACTION_TRASH,
		self::ACTION_RESTORE,
		self::ACTION_UPDATE_VALUES,
	];

	public function is_available() {
		return Form_Submissions_Availability::check();
	}

	protected function get_ability_id(): string {
		return 'elementor/manage-form-submissions';
	}

	protected function get_definition(): Ability_Definition {
		return new Ability_Definition(
			__( 'Manage Form Submissions', 'elementor-pro' ),
			__(
				'Manage Elementor Pro form submissions in bulk (1-50 operations). Actions: "mark_read" and "mark_unread" toggle the read state; "trash" moves a submission to trash and "restore" brings it back from trash (both reversible); "update_values" overwrites submitted field values (requires "values", an object of field_id to new value, where field_id comes from list-form-submissions with include_values: true; only fields the submission already has can be changed). update_values cannot be undone, so the result returns "previous_values" for the changed fields: keep them to revert if needed. Permanent deletion is not supported. Find submission ids and field ids with list-form-submissions. Per-operation results are returned in order, each with its submission_id; the top-level status is ok, partial_error or error. Trash and restore results include "in_trash".',
				'elementor-pro'
			),
			'elementor',
			[
				'type' => 'object',
				'required' => [ 'status', 'results' ],
				'properties' => [
					'status' => [ 'type' => 'string' ],
					'results' => [ 'type' => 'array' ],
				],
			],
			[
				'annotations' => [
					'readonly' => false,
					'idempotent' => false,
					'destructive' => true,
				],
				'mutates_page' => false,
			],
			fn () => current_user_can( 'manage_options' ),
			[
				'type' => 'object',
				'required' => [ 'operations' ],
				'properties' => [
					'operations' => [
						'type' => 'array',
						'minItems' => 1,
						'maxItems' => self::MAX_BATCH_SIZE,
						'description' => 'Bulk operations (1-50). Each item requires action and submission_id; update_values also requires values.',
						'items' => [
							'type' => 'object',
							'required' => [ 'action', 'submission_id' ],
							'properties' => [
								'action' => [
									'type' => 'string',
									'enum' => self::ACTIONS,
								],
								'submission_id' => [ 'type' => 'integer' ],
								'values' => [
									'type' => 'object',
									'description' => 'update_values only. Map of field_id to new text value, for example { "<field_id>": "new value" }. Use the field_id values from list-form-submissions with include_values: true.',
								],
							],
						],
					],
				],
			]
		);
	}

	public function execute( $input = [] ) {
		$started_at = hrtime( true );
		$input = is_array( $input ) ? $input : [];
		$operations = $input['operations'] ?? null;

		$error = $this->validate_operations( $operations );

		if ( $error ) {
			$this->emit_executed( $started_at, is_array( $operations ) ? $operations : [], $error );
			return $error;
		}

		$results = new Bulk_Operations_Result();

		foreach ( $operations as $index => $operation ) {
			$this->handle_operation( (int) $index, $operation, $results );
		}

		$response = $results->to_array();
		$this->emit_executed( $started_at, $operations, null, $response );

		return $response;
	}

	private function validate_operations( $operations ): ?\WP_Error {
		if ( ! is_array( $operations ) ) {
			return $this->bad_request( 'invalid_input', __( 'operations array is required.', 'elementor-pro' ) );
		}

		if ( empty( $operations ) ) {
			return $this->bad_request( 'invalid_input', __( 'operations must not be empty.', 'elementor-pro' ) );
		}

		if ( count( $operations ) > self::MAX_BATCH_SIZE ) {
			return new \WP_Error(
				'batch_size_exceeded',
				sprintf(
					/* translators: %d: maximum operations per request */
					__( 'Maximum %d operations per request.', 'elementor-pro' ),
					self::MAX_BATCH_SIZE
				),
				[
					'status' => \WP_Http::BAD_REQUEST,
					'max_allowed' => self::MAX_BATCH_SIZE,
				]
			);
		}

		return null;
	}

	private function handle_operation( int $index, $operation, Bulk_Operations_Result $results ): void {
		if ( ! is_array( $operation ) ) {
			$results->add_error( $index, '', 'invalid_input', __( 'Invalid operation.', 'elementor-pro' ) );
			return;
		}

		$action = is_string( $operation['action'] ?? null ) ? $operation['action'] : '';
		$submission_id = isset( $operation['submission_id'] ) ? absint( $operation['submission_id'] ) : 0;

		if ( ! in_array( $action, self::ACTIONS, true ) ) {
			$this->add_error( $results, $index, $action, $submission_id, 'invalid_input', sprintf(
				/* translators: %s: action name */
				__( 'Unknown action: %s.', 'elementor-pro' ),
				$action
			) );
			return;
		}

		if ( ! $submission_id ) {
			$this->add_error( $results, $index, $action, $submission_id, 'missing_submission_id', __( 'submission_id is required.', 'elementor-pro' ) );
			return;
		}

		$submission = Query::get_instance()->get_submission( $submission_id );

		if ( ! $submission ) {
			$this->add_error( $results, $index, $action, $submission_id, 'not_found', __( 'Submission not found.', 'elementor-pro' ) );
			return;
		}

		$this->apply_action( $index, $action, $submission_id, $submission['data'], $operation, $results );
	}

	private function apply_action( int $index, string $action, int $submission_id, array $submission, array $operation, Bulk_Operations_Result $results ): void {
		$query = Query::get_instance();
		$extra = [ 'submission_id' => $submission_id ];

		switch ( $action ) {
			case self::ACTION_MARK_READ:
			case self::ACTION_MARK_UNREAD:
				$is_read = self::ACTION_MARK_READ === $action;
				$written = $query->update_submission( $submission_id, [ 'is_read' => (int) $is_read ] );
				$extra['is_read'] = $is_read;
				break;

			case self::ACTION_TRASH:
				$written = $query->move_to_trash_submission( $submission_id );
				$extra['in_trash'] = true;
				break;

			case self::ACTION_RESTORE:
				if ( Query::STATUS_TRASH !== $submission['status'] ) {
					$this->add_error( $results, $index, $action, $submission_id, 'not_in_trash', __( 'Submission is not in trash.', 'elementor-pro' ) );
					return;
				}

				$written = $query->restore( $submission_id );
				$extra['in_trash'] = false;
				break;

			case self::ACTION_UPDATE_VALUES:
				$this->update_values( $index, $submission_id, $submission, $operation['values'] ?? null, $results );
				return;
		}

		if ( false === $written ) {
			$this->add_error( $results, $index, $action, $submission_id, 'update_failed', __( 'Failed to update the submission.', 'elementor-pro' ) );
			return;
		}

		$results->add_success( $index, $action, $extra );
	}

	private function update_values( int $index, int $submission_id, array $submission, $values, Bulk_Operations_Result $results ): void {
		$action = self::ACTION_UPDATE_VALUES;

		if ( ! is_array( $values ) || empty( $values ) ) {
			$this->add_error( $results, $index, $action, $submission_id, 'no_values', __( 'values must be a non-empty object of field id to value.', 'elementor-pro' ) );
			return;
		}

		$current_values = array_column( $submission['values'] ?? [], 'value', 'key' );
		$unknown_fields = array_values( array_diff( array_map( 'strval', array_keys( $values ) ), array_map( 'strval', array_keys( $current_values ) ) ) );

		if ( ! empty( $unknown_fields ) ) {
			$this->add_error( $results, $index, $action, $submission_id, 'unknown_field', sprintf(
				/* translators: 1: comma-separated unknown field ids, 2: comma-separated valid field ids. */
				__( 'Fields not found on this submission: %1$s. Valid field_id values: %2$s.', 'elementor-pro' ),
				implode( ', ', $unknown_fields ),
				implode( ', ', array_keys( $current_values ) )
			) );
			return;
		}

		if ( count( array_filter( $values, 'is_scalar' ) ) !== count( $values ) ) {
			$this->add_error( $results, $index, $action, $submission_id, 'invalid_input', __( 'Every value must be a string, number or boolean.', 'elementor-pro' ) );
			return;
		}

		$sanitized = array_map( fn ( $value ) => sanitize_text_field( (string) $value ), $values );

		if ( false === Query::get_instance()->update_submission( $submission_id, [], $sanitized ) ) {
			$this->add_error( $results, $index, $action, $submission_id, 'update_failed', __( 'Failed to update the submission.', 'elementor-pro' ) );
			return;
		}

		$results->add_success( $index, $action, [
			'submission_id' => $submission_id,
			'values' => $sanitized,
			'previous_values' => array_intersect_key( $current_values, $sanitized ),
		] );
	}

	private function add_error( Bulk_Operations_Result $results, int $index, string $action, int $submission_id, string $code, string $message ): void {
		$extra = $submission_id ? [ 'submission_id' => $submission_id ] : [];

		$results->add_error( $index, $action, $code, $message, $extra );
	}

	private function bad_request( string $code, string $message ): \WP_Error {
		return new \WP_Error( $code, $message, [ 'status' => \WP_Http::BAD_REQUEST ] );
	}

	private function emit_executed( int $started_at, array $operations, ?\WP_Error $top_level_error = null, array $response = [] ): void {
		if ( ! class_exists( Mcp_Event_Dispatcher::class ) || ! class_exists( Tool_Performance_Metrics::class ) ) {
			return;
		}

		[ 'status' => $status, 'error_code' => $error_code ] = Tool_Performance_Metrics::resolve_status( $response, $top_level_error );

		$results = $response['results'] ?? [];
		$failed_results = array_filter( $results, fn ( $row ) => 'error' === ( $row['status'] ?? '' ) );
		$actions = array_filter( array_column( array_filter( $operations, 'is_array' ), 'action' ), 'is_string' );
		$by_action = array_count_values( $actions );
		arsort( $by_action );

		$payload = [
			'tool_name' => $this->get_ability_id(),
			'status' => $status,
			'duration_ms' => Tool_Performance_Metrics::duration_ms_since( $started_at ),
			'action' => (string) array_key_first( $by_action ),
			'operations_count' => count( $operations ),
			'operations_by_type' => $by_action,
			'submission_ids' => array_values( array_filter( array_column( $results, 'submission_id' ) ) ),
			'failed_operations_count' => count( $failed_results ),
			'failed_operation_codes' => array_values( array_unique( array_column( $failed_results, 'code' ) ) ),
			'warning_count' => 0,
			'warning_types' => [],
		];

		if ( null !== $error_code ) {
			$payload['error_code'] = $error_code;
		}

		Mcp_Event_Dispatcher::emit( 'mcp_manage_form_submissions_executed', $payload );
	}
}
