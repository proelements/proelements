<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Action_Runner {

	/**
	 * Registered actions.
	 *
	 * @var Action_Base[]
	 */
	private static $actions = [];

	/**
	 * Register an action.
	 *
	 * @param Action_Base $action Action instance to register.
	 * @return void
	 */
	public static function register_action( Action_Base $action ): void {
		self::$actions[ $action->get_type() ] = $action;
	}

	/**
	 * Create an action instance by type.
	 *
	 * @param string $type Action type.
	 * @return Action_Base|null Action instance or null if not found.
	 */
	public static function create_action( string $type ): ?Action_Base {
		if ( ! isset( self::$actions[ $type ] ) ) {
			return null;
		}

		return self::$actions[ $type ];
	}

	/**
	 * Get all registered actions.
	 *
	 * @return Action_Base[] Array of registered actions.
	 */
	public static function get_registered_actions(): array {
		return self::$actions;
	}

	/**
	 * Check if an action type is registered.
	 *
	 * @param string $type Action type.
	 * @return bool
	 */
	public static function has_action( string $type ): bool {
		return isset( self::$actions[ $type ] );
	}

	/**
	 * Execute multiple actions and gather results.
	 *
	 * @param string[] $actions Array of action type strings.
	 * @param array $form_data Sanitized form data.
	 * @param array $widget_settings Full widget settings for actions to extract what they need.
	 * @param array $context Form context (post_id, form_id, form_name).
	 * @return array Results containing actionResults, allActionsSucceeded, failedActions, and optional submissionId.
	 */
	public static function execute_actions( array $actions, array $form_data, array $widget_settings, array $context ): array {
		$actions = self::normalize_actions_order( $actions );

		$pending_actions_count = self::count_non_collect_actions( $actions );
		$context['pending_actions_count'] = $pending_actions_count;

		$action_results = [];
		$failed_actions = [];
		$actions_succeeded_count = 0;

		foreach ( $actions as $action_type ) {
			$normalized_action_type = Action_Type::normalize_email_actions( $action_type );

			if ( ! self::has_action( $normalized_action_type ) ) {
				$error = sprintf(
					/* translators: %s: Action type. */
					__( 'Invalid action type: %s', 'elementor-pro' ),
					$action_type
				);
				$action_results[] = [
					'type' => $action_type,
					'status' => 'failed',
					'error' => $error,
				];
				$failed_actions[] = $action_type;
				self::persist_action_log( $context, $action_type, false, $error, $actions_succeeded_count );
				continue;
			}

			try {
				$action = self::create_action( $normalized_action_type );

				if ( ! $action ) {
					throw new \Exception(
						sprintf(
							/* translators: %s: Action type. */
							__( 'Could not create action: %s', 'elementor-pro' ),
							$action_type
						)
					);
				}

				$action_context = array_merge( $context, [ 'action_type' => $action_type ] );
				$result = $action->execute( $form_data, $widget_settings, $action_context );

				$action_results[] = array_merge(
					[ 'type' => $action_type ],
					$result
				);

				if ( Action_Type::COLLECT_SUBMISSIONS === $action_type && 'success' === $result['status'] ) {
					$submission_id = $result['submissionId'] ?? null;
					if ( $submission_id ) {
						$context['submission_id'] = $submission_id;
					}
				}

				$success = 'success' === $result['status'];
				$error_message = $success ? null : $result['error'];
				self::persist_action_log( $context, $action_type, $success, $error_message, $actions_succeeded_count );
			} catch ( \Exception $e ) {
				$action_results[] = [
					'type' => $action_type,
					'status' => 'failed',
					'error' => $e->getMessage(),
				];
				$failed_actions[] = $action_type;
				self::persist_action_log( $context, $action_type, false, $e->getMessage(), $actions_succeeded_count );
			}
		}

		$all_actions_succeeded = empty( $failed_actions );

		return [
			'actionResults' => $action_results,
			'allActionsSucceeded' => $all_actions_succeeded,
			'failedActions' => $failed_actions,
		];
	}

	/**
	 * Run "Collect submissions" first when present so a submission ID exists before sibling actions (same idea as v3).
	 *
	 * @param string[] $actions
	 * @return string[]
	 */
	private static function normalize_actions_order( array $actions ): array {
		if ( ! in_array( Action_Type::COLLECT_SUBMISSIONS, $actions, true ) ) {
			return $actions;
		}

		$rest = array_values(
			array_filter(
				$actions,
				function ( $type ) {
					return Action_Type::COLLECT_SUBMISSIONS !== $type;
				}
			)
		);

		return array_merge( [ Action_Type::COLLECT_SUBMISSIONS ], $rest );
	}

	/**
	 * @param string[] $actions
	 */
	private static function count_non_collect_actions( array $actions ): int {
		$n = 0;

		foreach ( $actions as $type ) {
			if ( Action_Type::COLLECT_SUBMISSIONS !== $type ) {
				$n++;
			}
		}

		return $n;
	}

	/**
	 * Log outcomes for actions other than collect; updates `actions_succeeded_count` on success.
	 *
	 * @param array $context
	 * @param int   $actions_succeeded_count
	 */
	private static function persist_action_log( array $context, string $action_type, bool $success, ?string $error_message, int &$actions_succeeded_count ): void {
		if ( Action_Type::COLLECT_SUBMISSIONS === $action_type ) {
			return;
		}

		$submission_id = isset( $context['submission_id'] ) ? (int) $context['submission_id'] : 0;

		if ( $submission_id <= 0 ) {
			return;
		}

		$query = Query::get_instance();
		$presenter = new Action_Log_Presenter( $action_type, self::resolve_action_label( $action_type ) );

		if ( $success ) {
			$actions_succeeded_count++;
			$query->update_submission(
				$submission_id,
				[ 'actions_succeeded_count' => $actions_succeeded_count ]
			);
			$query->add_action_log( $submission_id, $presenter, Query::ACTIONS_LOG_STATUS_SUCCESS, null );
		} else {
			$query->add_action_log( $submission_id, $presenter, Query::ACTIONS_LOG_STATUS_FAILED, $error_message );
		}
	}

	private static function resolve_action_label( string $action_type ): string {
		$labels = [
			Action_Type::EMAIL => esc_html__( 'Email', 'elementor-pro' ),
			Action_Type::WEBHOOK => esc_html__( 'Webhook', 'elementor-pro' ),
		];

		if ( isset( $labels[ $action_type ] ) ) {
			return $labels[ $action_type ];
		}

		$default_label = ucwords( str_replace( '-', ' ', $action_type ) );

		/**
		 * Filters the admin label for an atomic form action in the submissions action log.
		 * First argument: default label string. Second: action type slug.
		 */
		return (string) apply_filters(
			'elementor_pro/atomic_forms/action_log_label',
			$default_label,
			$action_type
		);
	}

	/**
	 * Initialize default actions.
	 *
	 * @return void
	 */
	public static function init(): void {
		self::register_action( new Email_Action() );
		self::register_action( new Collect_Submissions_Action() );
		self::register_action( new Webhook_Action() );

		/**
		 * Allow registering custom actions.
		 *
		 * @param Action_Factory $factory The action factory instance.
		 */
		do_action( 'elementor_pro/atomic_forms/actions/register', __CLASS__ );
	}
}
