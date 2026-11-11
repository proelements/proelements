<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Form_Submission_Formatter {

	public static function format( array $submission, bool $include_values, bool $include_actions_log ): array {
		$form_fields = $submission['form']['fields'] ?? [];
		$main = self::format_main_field( $submission['main'] ?? null );

		$row = [
			'id' => $submission['id'],
			'form' => $submission['post']['id'] . '_' . $submission['element_id'],
			'form_name' => $submission['form']['name'],
			'post_id' => $submission['post']['id'],
			'referer' => $submission['referer'],
			'referer_title' => $submission['referer_title'],
			'in_trash' => Query::STATUS_TRASH === $submission['status'],
			'is_read' => $submission['is_read'],
			'created_at' => $submission['created_at'],
			'main' => $main,
			'preview' => Submission_Preview::build( $submission['values'] ?? [], $form_fields, $main['field_id'] ?? null ),
		];

		if ( $include_values ) {
			$row['values'] = self::format_values( $submission['values'] ?? [], $form_fields );
		}

		if ( $include_actions_log ) {
			$row['form_actions_log'] = self::format_actions_log( (int) $submission['id'] );
		}

		return $row;
	}

	private static function format_main_field( ?array $main ): ?array {
		if ( ! $main ) {
			return null;
		}

		return [
			'field_id' => (string) $main['key'],
			'value' => $main['value'],
		];
	}

	private static function format_values( array $values, array $form_fields ): array {
		$fields_by_id = array_column( $form_fields, null, 'id' );

		return array_map( function ( array $value ) use ( $fields_by_id ) {
			$field_id = (string) $value['key'];

			return [
				'field_id' => $field_id,
				'label' => Submission_Preview::label( $fields_by_id[ $field_id ] ?? [], $field_id ),
				'value' => $value['value'],
			];
		}, $values );
	}

	private static function format_actions_log( int $submission_id ): array {
		return array_map( fn ( array $entry ) => [
			'name' => $entry['action_name'],
			'label' => $entry['action_label'],
			'status' => $entry['status'],
			'log' => $entry['log'],
			'created_at' => $entry['created_at'],
		], Query::get_instance()->get_submissions_actions_log( $submission_id ) ?? [] );
	}
}
