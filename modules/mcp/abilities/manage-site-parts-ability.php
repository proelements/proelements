<?php
namespace ElementorPro\Modules\Mcp\Abilities;

use Elementor\Modules\Mcp\Abilities\Utils\Tool_Performance_Metrics;
use Elementor\Modules\Mcp\Events\Mcp_Event_Dispatcher;
use Elementor\Plugin as CorePlugin;
use ElementorPro\Modules\Mcp\Abilities\Utils\Bulk_Operations_Result;
use ElementorPro\Modules\Mcp\Abilities\Utils\Template_Conditions_Writer;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Manage_Site_Parts_Ability extends Abstract_Ability {

	private const TEMPLATE_LIBRARY_CPT = 'elementor_library';
	private const MAX_BATCH_SIZE = 50;

	private const ACTION_CREATE = 'create';
	private const ACTION_UPDATE = 'update';
	private const ACTION_DELETE = 'delete';

	private Template_Conditions_Writer $conditions_writer;

	public function __construct( ?Template_Conditions_Writer $conditions_writer = null ) {
		$this->conditions_writer = $conditions_writer ?? new Template_Conditions_Writer();
	}

	protected function get_ability_id(): string {
		return 'elementor/manage-site-parts';
	}

	protected function get_definition(): Ability_Definition {
		$supported_types = $this->get_supported_types();

		return new Ability_Definition(
			__( 'Manage Elementor Site Parts', 'elementor-pro' ),
			sprintf(
				/* translators: %s: comma-separated list of supported theme document type slugs. */
				__(
					'Manage Elementor site parts (Theme Builder documents: %s). Bulk operations (1-50) with three actions: "create" makes a new site part as a draft (optionally assigning display conditions in the same call), "update" mutates an existing site part (currently the only mutable field is "conditions"; body/settings edits go via manage-elements / build-composition / update-page-settings), and "delete" removes a site part. Conditions are slash-separated strings like "include/general" (site-wide), "include/singular/post", "exclude/singular/post/42". Site parts are NOT published by this tool — they stay drafts and must be published separately (matches the editor UX). For repeating-layout patterns (one single template driven by dynamic data instead of N duplicated pages, include-all + exclude-exceptions condition scoping, Post Content placement), read the elementor://wordpress/best-practices resource before creating singles.',
					'elementor-pro'
				),
				implode( ', ', $supported_types )
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
			],
			fn () => current_user_can( 'edit_posts' ),
			[
				'type' => 'object',
				'required' => [ 'operations' ],
				'properties' => [
					'operations' => [
						'type' => 'array',
						'description' => 'Bulk operations (1-50). Each item requires action; create needs type (optional title, optional conditions); update needs post_id plus at least one mutable field (currently only conditions); delete needs post_id.',
						'items' => [
							'type' => 'object',
							'required' => [ 'action' ],
							'properties' => [
								'action' => [
									'type' => 'string',
									'enum' => [ self::ACTION_CREATE, self::ACTION_UPDATE, self::ACTION_DELETE ],
								],
								'type' => [
									'type' => 'string',
									'enum' => $supported_types,
									'description' => 'Site part type slug (create only).',
								],
								'title' => [ 'type' => 'string' ],
								'post_id' => [ 'type' => 'integer' ],
								'conditions' => [
									'type' => 'array',
									'items' => [ 'type' => 'string' ],
									'description' => 'Slash-separated condition strings. On create: defaults to [ "include/general" ] (site-wide) when the key is present with an empty array; omit the key entirely to leave the new site part unassigned. On update: only replaces conditions when the key is present; omit the key to leave existing conditions untouched.',
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
		$input      = is_array( $input ) ? $input : [];
		$operations = $input['operations'] ?? null;

		if ( ! is_array( $operations ) ) {
			$error = $this->bad_request( __( 'operations array is required.', 'elementor-pro' ) );
			$this->emit_mcp_manage_site_parts_executed( $started_at, [], $error );
			return $error;
		}

		if ( empty( $operations ) ) {
			$error = $this->bad_request( __( 'operations must not be empty.', 'elementor-pro' ) );
			$this->emit_mcp_manage_site_parts_executed( $started_at, [], $error );
			return $error;
		}

		if ( count( $operations ) > self::MAX_BATCH_SIZE ) {
			$error = new \WP_Error(
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
			$this->emit_mcp_manage_site_parts_executed( $started_at, $operations, $error );
			return $error;
		}

		$response = $this->handle_bulk( $operations );
		$this->emit_mcp_manage_site_parts_executed( $started_at, $operations, null, $response );
		return $response;
	}

	private function handle_bulk( array $operations ): array {
		$results = new Bulk_Operations_Result();

		foreach ( $operations as $index => $operation ) {
			$this->handle_operation( (int) $index, $operation, $results );
		}

		return $results->to_array();
	}

	private function handle_operation( int $index, $operation, Bulk_Operations_Result $results ): void {
		if ( ! is_array( $operation ) ) {
			$results->add_error( $index, '', 'invalid_input', __( 'Invalid operation.', 'elementor-pro' ) );
			return;
		}

		$action = $operation['action'] ?? '';

		switch ( $action ) {
			case self::ACTION_CREATE:
				$this->handle_create( $index, $operation, $results );
				return;

			case self::ACTION_UPDATE:
				$this->handle_update( $index, $operation, $results );
				return;

			case self::ACTION_DELETE:
				$this->handle_delete( $index, $operation, $results );
				return;

			default:
				$results->add_error(
					$index,
					(string) $action,
					'invalid_input',
					sprintf(
						/* translators: %s: action name */
						__( 'Unknown action: %s.', 'elementor-pro' ),
						(string) $action
					)
				);
		}
	}

	private function handle_create( int $index, array $operation, Bulk_Operations_Result $results ): void {
		$type = isset( $operation['type'] ) ? sanitize_key( $operation['type'] ) : '';

		if ( '' === $type || ! in_array( $type, $this->get_supported_types(), true ) ) {
			$results->add_error(
				$index,
				self::ACTION_CREATE,
				'invalid_theme_template_type',
				sprintf(
					/* translators: %s: submitted type. */
					__( '"%s" is not a Theme Builder document type.', 'elementor-pro' ),
					$type
				)
			);
			return;
		}

		$permission_error = $this->check_create_permission();
		if ( $permission_error ) {
			$results->add_error( $index, self::ACTION_CREATE, $permission_error->get_error_code(), $permission_error->get_error_message() );
			return;
		}

		$title = isset( $operation['title'] ) && is_string( $operation['title'] ) ? $operation['title'] : '';

		$document = CorePlugin::$instance->documents->create(
			$type,
			[
				'post_title' => '' !== $title ? $title : sprintf(
					/* translators: %s: theme template type. */
					__( 'Elementor %s', 'elementor-pro' ),
					$type
				),
				'post_status' => 'draft',
			]
		);

		if ( is_wp_error( $document ) ) {
			$results->add_error( $index, self::ACTION_CREATE, $document->get_error_code(), $document->get_error_message() );
			return;
		}

		if ( ! $document instanceof Theme_Document ) {
			$results->add_error(
				$index,
				self::ACTION_CREATE,
				'unexpected_document_type',
				__( 'Created document is not a Theme_Document.', 'elementor-pro' )
			);
			return;
		}

		$post_id = (int) $document->get_main_id();

		$extra = [
			'id' => $post_id,
			'edit_url' => $document->get_edit_url(),
			'post_status' => get_post_status( $post_id ),
			'type' => $type,
		];

		if ( array_key_exists( 'conditions', $operation ) ) {
			$assign = $this->conditions_writer->write( $document, $post_id, $operation['conditions'] ?? null );

			if ( is_wp_error( $assign ) ) {
				$results->add_error( $index, self::ACTION_CREATE, $assign->get_error_code(), $assign->get_error_message() );
				return;
			}

			$extra['conditions'] = $assign['conditions'];
			$extra['conflicts'] = $assign['conflicts'];
		}

		$results->add_success( $index, self::ACTION_CREATE, $extra );
	}

	private function handle_update( int $index, array $operation, Bulk_Operations_Result $results ): void {
		$post_id = isset( $operation['post_id'] ) ? absint( $operation['post_id'] ) : 0;

		if ( ! $post_id ) {
			$results->add_error( $index, self::ACTION_UPDATE, 'missing_post_id', __( 'post_id is required.', 'elementor-pro' ) );
			return;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			$results->add_error( $index, self::ACTION_UPDATE, 'insufficient_permissions', __( 'You do not have permission to edit this template.', 'elementor-pro' ) );
			return;
		}

		$document = ThemeBuilderModule::instance()->get_document( $post_id );

		if ( ! $document ) {
			$results->add_error( $index, self::ACTION_UPDATE, 'not_a_theme_document', __( 'The given post_id is not a Theme Builder document.', 'elementor-pro' ) );
			return;
		}

		$extra = [
			'post_id' => $post_id,
		];

		$has_updatable_field = false;

		if ( array_key_exists( 'conditions', $operation ) ) {
			$assign = $this->conditions_writer->write( $document, $post_id, $operation['conditions'] );

			if ( is_wp_error( $assign ) ) {
				$results->add_error( $index, self::ACTION_UPDATE, $assign->get_error_code(), $assign->get_error_message() );
				return;
			}

			$extra['conditions'] = $assign['conditions'];
			$extra['conflicts'] = $assign['conflicts'];
			$has_updatable_field = true;
		}

		if ( ! $has_updatable_field ) {
			$results->add_error(
				$index,
				self::ACTION_UPDATE,
				'no_updatable_fields',
				__( 'update requires at least one mutable field (currently: conditions).', 'elementor-pro' )
			);
			return;
		}

		$extra['post_status'] = get_post_status( $post_id );
		$extra['type']        = ThemeBuilderModule::instance()->get_template_type( $post_id );

		$results->add_success( $index, self::ACTION_UPDATE, $extra );
	}

	private function handle_delete( int $index, array $operation, Bulk_Operations_Result $results ): void {
		$post_id = isset( $operation['post_id'] ) ? absint( $operation['post_id'] ) : 0;

		if ( ! $post_id ) {
			$results->add_error( $index, self::ACTION_DELETE, 'missing_post_id', __( 'post_id is required.', 'elementor-pro' ) );
			return;
		}

		if ( ! current_user_can( 'delete_post', $post_id ) ) {
			$results->add_error( $index, self::ACTION_DELETE, 'insufficient_permissions', __( 'You do not have permission to delete this template.', 'elementor-pro' ) );
			return;
		}

		$document = ThemeBuilderModule::instance()->get_document( $post_id );

		if ( ! $document ) {
			$results->add_error( $index, self::ACTION_DELETE, 'not_a_theme_document', __( 'The given post_id is not a Theme Builder document.', 'elementor-pro' ) );
			return;
		}

		$type = ThemeBuilderModule::instance()->get_template_type( $post_id );

		$deleted = wp_delete_post( $post_id, true );

		if ( ! $deleted ) {
			$results->add_error( $index, self::ACTION_DELETE, 'delete_failed', __( 'Failed to delete the site part.', 'elementor-pro' ) );
			return;
		}

		ThemeBuilderModule::instance()->get_conditions_manager()->clear_location_cache();

		$results->add_success( $index, self::ACTION_DELETE, [
			'post_id' => $post_id,
			'type'    => $type,
		] );
	}

	private function get_supported_types(): array {
		$types_config = ThemeBuilderModule::instance()->get_types_manager()->get_types_config();

		return array_keys( $types_config );
	}

	private function check_create_permission(): ?\WP_Error {
		$post_type_object = get_post_type_object( self::TEMPLATE_LIBRARY_CPT );

		if ( ! $post_type_object || ! current_user_can( $post_type_object->cap->create_posts ) ) {
			return new \WP_Error(
				'cannot_create_theme_template',
				__( 'You do not have permission to create theme templates.', 'elementor-pro' ),
				[ 'status' => \WP_Http::FORBIDDEN ]
			);
		}

		return null;
	}

	private function bad_request( string $message ): \WP_Error {
		return new \WP_Error( 'invalid_input', $message, [ 'status' => \WP_Http::BAD_REQUEST ] );
	}

	private function emit_mcp_manage_site_parts_executed(
		int $started_at,
		array $operations,
		?\WP_Error $top_level_error = null,
		array $response = []
	): void {
		if ( ! class_exists( Mcp_Event_Dispatcher::class ) || ! class_exists( Tool_Performance_Metrics::class ) ) {
			return;
		}

		$duration_ms = Tool_Performance_Metrics::duration_ms_since( $started_at );

		[ 'status' => $status, 'error_code' => $error_code ] = Tool_Performance_Metrics::resolve_status( $response, $top_level_error );

		$failed_results = array_filter( $response['results'] ?? [], fn( $r ) => 'error' === ( $r['status'] ?? '' ) );
		$failed_count   = count( $failed_results );
		$failed_codes   = array_values( array_unique( array_column( $failed_results, 'code' ) ) );

		$ok_results     = array_filter( $response['results'] ?? [], fn( $r ) => 'ok' === ( $r['status'] ?? '' ) );
		$post_ids       = array_values( array_filter( array_map( fn( $r ) => $r['id'] ?? $r['post_id'] ?? null, $ok_results ) ) );
		$document_types = array_values( array_filter( array_column( $ok_results, 'type' ) ) );
		$has_conditions = false;
		$conflicts      = 0;

		foreach ( $ok_results as $row ) {
			if ( ! empty( $row['conditions'] ) ) {
				$has_conditions = true;
			}
			$conflicts += count( $row['conflicts'] ?? [] );
		}

		$ops_count = count( $operations );
		$by_action = [];

		foreach ( $operations as $op ) {
			$action = $op['action'] ?? '';
			if ( is_string( $action ) && '' !== $action ) {
				$by_action[ $action ] = ( $by_action[ $action ] ?? 0 ) + 1;
			}
		}

		$dominant_action = '';
		if ( ! empty( $by_action ) ) {
			arsort( $by_action );
			$dominant_action = (string) array_key_first( $by_action );
		}

		$payload = [
			'tool_name'               => $this->get_ability_id(),
			'status'                  => $status,
			'duration_ms'             => $duration_ms,
			'action'                  => $dominant_action,
			'operations_count'        => $ops_count,
			'operations_by_type'      => $by_action,
			'post_ids'                => $post_ids,
			'document_types'          => $document_types,
			'has_conditions'          => $has_conditions,
			'conflicts_count'         => $conflicts,
			'failed_operations_count' => $failed_count,
			'failed_operation_codes'  => $failed_codes,
			'warning_count'           => 0,
			'warning_types'           => [],
		];

		if ( null !== $error_code ) {
			$payload['error_code'] = $error_code;
		}

		Mcp_Event_Dispatcher::emit( 'mcp_manage_site_parts_executed', $payload );
	}
}
