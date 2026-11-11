<?php
namespace ElementorPro\Modules\Mcp\Abilities;

use ElementorPro\Modules\Forms\Submissions\Database\Entities\Form_Snapshot;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Database\Repositories\Form_Snapshot_Repository;
use ElementorPro\Modules\Mcp\Abilities\Utils\Form_Submission_Formatter;
use ElementorPro\Modules\Mcp\Abilities\Utils\Form_Submissions_Availability;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class List_Form_Submissions_Ability extends Abstract_Ability {

	const MAX_PER_PAGE = 25;
	const DEFAULT_PER_PAGE = 10;

	const STATUS_ALL = 'all';
	const STATUS_UNREAD = 'unread';
	const STATUS_READ = 'read';
	const STATUS_TRASH = 'trash';
	const STATUSES = [ self::STATUS_ALL, self::STATUS_UNREAD, self::STATUS_READ, self::STATUS_TRASH ];

	const ORDER_ASC = 'asc';
	const ORDER_DESC = 'desc';
	const ORDER_BY_CREATED_AT = 'created_at';
	const ORDER_BY_ID = 'id';

	const FORM_KEY_PATTERN = '/^\d+_\w+$/';
	const DATE_PATTERN = '/^\d{4}-\d{2}-\d{2}$/';

	const EMPTY_RESULT_HINT = 'No matching form submissions found. Adjust the filters, check "counts" for what exists, or pass include_forms: true to see the available forms.';

	public function is_available() {
		return Form_Submissions_Availability::check();
	}

	protected function get_ability_id(): string {
		return 'elementor/list-form-submissions';
	}

	protected function get_definition(): Ability_Definition {
		return new Ability_Definition(
			__( 'List Form Submissions', 'elementor-pro' ),
			__(
				'Lists and reads Elementor Pro form submissions (messages sent through Elementor forms on the site), newest first. Each row has the submission id, form, source page, is_read, in_trash, the main field (usually the email, can be empty) and "preview": a short "Label: value" summary of the other fields, cut with "…" when long. To read submissions in full, pass "ids" with include_values: true (every field as field_id, label, value; field_id is what manage-form-submissions update_values expects) and, if needed, include_actions_log: true (what each form action such as email or webhook did). Reading does not change the read state. "counts" (all, unread, read, trash) follow the form, search, referer and date filters but ignore "status". Pass include_forms: true once to get the "form" filter values. Results contain personal data: only surface what the user asked for.',
				'elementor-pro'
			),
			'elementor',
			[
				'type' => 'object',
				'properties' => [
					'submissions' => [ 'type' => 'array' ],
					'pagination' => [ 'type' => 'object' ],
					'counts' => [ 'type' => 'object' ],
					'forms' => [ 'type' => 'array' ],
					'llm_instructions' => [ 'type' => 'string' ],
				],
			],
			[
				'annotations' => [
					'readonly' => true,
					'idempotent' => true,
					'destructive' => false,
				],
				'mutates_page' => false,
			],
			fn () => current_user_can( 'manage_options' ),
			[
				'type' => 'object',
				'properties' => [
					'ids' => [
						'type' => 'array',
						'items' => [ 'type' => 'integer' ],
						'minItems' => 1,
						'maxItems' => self::MAX_PER_PAGE,
						'description' => 'Return only these submission ids. Trashed submissions are included unless "status" is set.',
					],
					'include_values' => [
						'type' => 'boolean',
						'default' => false,
						'description' => 'Add every submitted field to each row. Best combined with "ids".',
					],
					'include_actions_log' => [
						'type' => 'boolean',
						'default' => false,
						'description' => 'Add the form actions log (action, status, log message when one was recorded) to each row.',
					],
					'include_forms' => [
						'type' => 'boolean',
						'default' => false,
						'description' => 'Add "forms": every form that has submissions, with the value to pass as the "form" filter.',
					],
					'status' => [
						'type' => 'string',
						'enum' => self::STATUSES,
						'default' => self::STATUS_ALL,
						'description' => 'all excludes trash.',
					],
					'form' => [
						'type' => 'string',
						'description' => 'Limit to one form. Format {post_id}_{element_id}, for example 10_476d0ce. Get values with include_forms: true.',
					],
					'search' => [
						'type' => 'string',
						'description' => 'Keyword matched against submitted field values and submission ids.',
					],
					'referer' => [
						'type' => 'string',
						'description' => 'Limit to submissions sent from this page URL.',
					],
					'after' => [
						'type' => 'string',
						'description' => 'Only submissions sent on or after this date (YYYY-MM-DD).',
					],
					'before' => [
						'type' => 'string',
						'description' => 'Only submissions sent on or before this date (YYYY-MM-DD).',
					],
					'order' => [
						'type' => 'string',
						'enum' => [ self::ORDER_ASC, self::ORDER_DESC ],
						'default' => self::ORDER_DESC,
					],
					'order_by' => [
						'type' => 'string',
						'enum' => [ self::ORDER_BY_CREATED_AT, self::ORDER_BY_ID ],
						'default' => self::ORDER_BY_CREATED_AT,
					],
					'page' => [
						'type' => 'integer',
						'minimum' => 1,
						'default' => 1,
					],
					'per_page' => [
						'type' => 'integer',
						'minimum' => 1,
						'maximum' => self::MAX_PER_PAGE,
						'default' => self::DEFAULT_PER_PAGE,
					],
				],
			]
		);
	}

	public function execute( $input = [] ) {
		$input = is_array( $input ) ? $input : [];

		$ids = $this->resolve_ids( $input );

		if ( is_wp_error( $ids ) ) {
			return $ids;
		}

		$filters = $this->build_filters( $input, $ids );

		if ( is_wp_error( $filters ) ) {
			return $filters;
		}

		$query = Query::get_instance();

		$result = $query->get_submissions( [
			'page' => $this->resolve_page( $input ),
			'per_page' => max( $this->resolve_per_page( $input ), count( $ids ) ),
			'filters' => $filters,
			'with_meta' => true,
			'with_form_fields' => true,
			'order' => [
				'order' => $this->resolve_enum( $input, 'order', [ self::ORDER_ASC, self::ORDER_DESC ], self::ORDER_DESC ),
				'by' => $this->resolve_enum( $input, 'order_by', [ self::ORDER_BY_CREATED_AT, self::ORDER_BY_ID ], self::ORDER_BY_CREATED_AT ),
			],
		] );

		$include_values = ! empty( $input['include_values'] );
		$include_actions_log = ! empty( $input['include_actions_log'] );

		$response = [
			'submissions' => array_map(
				fn ( array $submission ) => Form_Submission_Formatter::format( $submission, $include_values, $include_actions_log ),
				$result['data']
			),
			'pagination' => $result['meta']['pagination'],
			'counts' => $query->count_submissions_by_status( $filters )->all(),
		];

		if ( ! empty( $input['include_forms'] ) ) {
			$response['forms'] = $this->get_forms();
		}

		if ( empty( $response['submissions'] ) ) {
			$response['llm_instructions'] = self::EMPTY_RESULT_HINT;
		}

		return $response;
	}

	private function resolve_ids( array $input ) {
		if ( ! isset( $input['ids'] ) ) {
			return [];
		}

		$ids = is_array( $input['ids'] ) ? array_values( array_unique( array_filter( array_map( 'intval', $input['ids'] ), fn ( int $id ) => $id > 0 ) ) ) : [];

		if ( empty( $ids ) || count( $ids ) > self::MAX_PER_PAGE ) {
			return $this->invalid_input( sprintf(
				/* translators: %d: maximum number of ids. */
				__( '"ids" must be a list of 1 to %d submission ids.', 'elementor-pro' ),
				self::MAX_PER_PAGE
			) );
		}

		return $ids;
	}

	private function build_filters( array $input, array $ids ) {
		$filters = [];

		if ( empty( $ids ) || isset( $input['status'] ) ) {
			$filters['status'] = [ 'value' => $this->resolve_enum( $input, 'status', self::STATUSES, self::STATUS_ALL ) ];
		}

		if ( ! empty( $ids ) ) {
			$filters['ids'] = [ 'value' => $ids ];
		}

		foreach ( [ 'after', 'before' ] as $date_key ) {
			$date = $this->read_string( $input, $date_key );

			if ( '' === $date ) {
				continue;
			}

			if ( ! preg_match( self::DATE_PATTERN, $date ) ) {
				return $this->invalid_input( sprintf(
					/* translators: %s: input name. */
					__( '"%s" must be a date in YYYY-MM-DD format.', 'elementor-pro' ),
					$date_key
				) );
			}

			$filters[ $date_key ] = [ 'value' => $date ];
		}

		$form = $this->read_string( $input, 'form' );

		if ( '' !== $form ) {
			if ( ! preg_match( self::FORM_KEY_PATTERN, $form ) ) {
				return $this->invalid_input( __( '"form" must follow the {post_id}_{element_id} pattern.', 'elementor-pro' ) );
			}

			$filters['form'] = [ 'value' => $form ];
		}

		$search = sanitize_text_field( $this->read_string( $input, 'search' ) );

		if ( '' !== $search ) {
			$filters['search'] = [ 'value' => $search ];
		}

		$referer = $this->read_string( $input, 'referer' );

		if ( '' !== $referer ) {
			$filters['referer'] = [ 'value' => $referer ];
		}

		return $filters;
	}

	private function get_forms(): array {
		return Form_Snapshot_Repository::instance()
			->all()
			->map( fn ( Form_Snapshot $form ) => [
				'label' => $form->get_label(),
				'value' => $form->get_key(),
			] )
			->values();
	}

	private function resolve_page( array $input ): int {
		return max( 1, (int) ( $input['page'] ?? 1 ) );
	}

	private function resolve_per_page( array $input ): int {
		$per_page = (int) ( $input['per_page'] ?? self::DEFAULT_PER_PAGE );

		return max( 1, min( self::MAX_PER_PAGE, $per_page ) );
	}

	private function resolve_enum( array $input, string $key, array $allowed, string $default ): string {
		$value = $this->read_string( $input, $key );

		return in_array( $value, $allowed, true ) ? $value : $default;
	}

	private function read_string( array $input, string $key ): string {
		return isset( $input[ $key ] ) && is_string( $input[ $key ] ) ? trim( $input[ $key ] ) : '';
	}

	private function invalid_input( string $message ): \WP_Error {
		return new \WP_Error( 'invalid_input', $message, [ 'status' => \WP_Http::BAD_REQUEST ] );
	}
}
