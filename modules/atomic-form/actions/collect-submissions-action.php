<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use ElementorPro\Core\Utils;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Database\Repositories\Form_Snapshot_Repository;
use Elementor\Utils as ElementorUtils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Collect_Submissions_Action extends Action_Base {

	public function get_type(): string {
		return Action_Type::COLLECT_SUBMISSIONS;
	}

	public function execute( array $form_data, array $widget_settings, array $context ): array {
		$metadata_keys = $this->normalize_metadata_keys( $widget_settings['submissions_metadata'] ?? [] );

		$field_metadata = $context['field_metadata'] ?? [];
		$fields = $this->prepare_fields( $form_data, $field_metadata );

		$pending_actions_count = isset( $context['pending_actions_count'] )
			? $context['pending_actions_count']
			: 0;

		$submission_id = Query::get_instance()->add_submission(
			[
				'main_meta_id' => 0,
				'post_id' => $context['post_id'],
				'referer' => $this->get_referer( $context ),
				'referer_title' => $this->get_referer_title( $context ),
				'element_id' => $context['form_id'],
				'form_name' => $context['form_name'],
				'campaign_id' => 0,
				'user_id' => get_current_user_id(),
				'user_ip' => in_array( 'remote_ip', $metadata_keys, true ) ? Utils::get_client_ip() : '',
				'user_agent' => in_array( 'user_agent', $metadata_keys, true ) ? $this->get_user_agent() : '',
				'actions_count' => $pending_actions_count,
				'actions_succeeded_count' => 0,
				'meta' => wp_json_encode( [] ),
			],
			$fields
		);

		if ( ! $submission_id ) {
			return $this->failure( __( 'Failed to save submission to database', 'elementor-pro' ) );
		}

		$this->store_form_snapshot( $context, $fields );

		return $this->success(
			__( 'Submission saved successfully', 'elementor-pro' ),
			[ 'submissionId' => $submission_id ]
		);
	}

	private function normalize_metadata_keys( array $raw ): array {
		$allowed = [ 'remote_ip', 'user_agent' ];

		return array_values( array_intersect( $raw, $allowed ) );
	}

	private function prepare_fields( array $form_data, array $field_metadata = [] ): array {
		$fields = [];

		foreach ( $form_data as $key => $value ) {
			$meta = $field_metadata[ $key ] ?? [];
			$label = ! empty( $meta['label'] ) ? $meta['label'] : ucwords( str_replace( [ '_', '-' ], ' ', $key ) );
			$type = ! empty( $meta['type'] ) ? $meta['type'] : $this->guess_field_type( $key, $value );

			$fields[] = [
				'id' => $key,
				'type' => $type,
				'label' => $label,
				'value' => is_array( $value ) ? implode( ', ', $value ) : $value,
				'options' => $meta['options'] ?? null,
			];
		}

		return $fields;
	}

	private function guess_field_type( string $key, $value ): string {
		$key_lower = strtolower( $key );

		if ( strpos( $key_lower, 'email' ) !== false ) {
			return 'email';
		}

		if ( strpos( $key_lower, 'phone' ) !== false || strpos( $key_lower, 'tel' ) !== false ) {
			return 'tel';
		}

		if ( is_array( $value ) ) {
			return 'checkbox';
		}

		if ( strpos( $key_lower, 'message' ) !== false || ( is_string( $value ) && strlen( $value ) > 100 ) ) {
			return 'textarea';
		}

		if ( strpos( $key_lower, 'url' ) !== false || strpos( $key_lower, 'website' ) !== false ) {
			return 'url';
		}

		return 'text';
	}

	private function store_form_snapshot( array $context, array $fields ): void {
		$snapshot_fields = array_map(
			function ( $field ) {
				return [
					'id' => $field['id'],
					'type' => $field['type'],
					'label' => $field['label'],
					'options' => $field['options'] ?? null,
				];
			},
			$fields
		);

		Form_Snapshot_Repository::instance()->create_or_update(
			$context['post_id'],
			$context['form_id'],
			[
				'name' => $context['form_name'],
				'fields' => $snapshot_fields,
			]
		);
	}

	private function get_referer( array $context ): string {
		$from_post = $context['referrer'] ?? '';
		if ( $from_post ) {
			$url = esc_url_raw( $from_post );
		} else {
			$url = isset( $_SERVER['HTTP_REFERER'] ) ? esc_url_raw( wp_unslash( $_SERVER['HTTP_REFERER'] ) ) : '';
		}

		if ( ! $url ) {
			return '';
		}

		return remove_query_arg(
			[ 'preview_id', 'preview_nonce', 'preview' ],
			$url
		);
	}

	private function get_referer_title( array $context ): string {
		$title = $context['referer_title'] ?? '';

		return $title ? sanitize_text_field( $title ) : '';
	}

	private function get_user_agent(): string {
		$user_agent = ElementorUtils::get_super_global_value( $_SERVER, 'HTTP_USER_AGENT' );
		if ( $user_agent ) {
			return sanitize_textarea_field( wp_unslash( $user_agent ) );
		}

		return '';
	}
}
