<?php
namespace ElementorPro\Modules\Forms\Submissions\Data\Endpoints;

use ElementorPro\Modules\Forms\Submissions\Database\Query;
use Elementor\Data\Base\Endpoint;
use ElementorPro\Modules\Forms\Submissions\Data\Responses\Query_Failed_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Restore extends Endpoint {
	/**
	 * @var Query
	 */
	private $query;

	public function get_name() {
		return 'restore';
	}

	/**
	 * Restore a single trashed submission.
	 *
	 * @param string           $id
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function update_item( $id, $request ) {
		return $this->restore(
			[ $request->get_param( 'id' ) ]
		);
	}

	/**
	 * Restore multiple trashed submissions.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function update_items( $request ) {
		return $this->restore(
			$request->get_param( 'ids' )
		);
	}

	protected function register() {
		$this->register_route(
			'/(?P<id>[\d]+)/',
			\WP_REST_Server::EDITABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::EDITABLE, $request );
			},
			[
				'id' => [
					'description' => 'Unique identifier for the object.',
					'type'        => 'string',
					'required'    => true,
				],
			]
		);

		$this->register_route(
			'',
			\WP_REST_Server::EDITABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::EDITABLE, $request, true );
			},
			[
				'ids' => [
					'description' => 'Unique identifiers for the objects.',
					'type' => 'array',
					'items' => [
						'type' => 'integer',
					],
					'validate_callback' => function ( $param ) {
						return ! empty( $param );
					},
					'required'    => true,
				],
			]
		);
	}

	/**
	 * Restore on or more submissions.
	 *
	 * @param array $ids
	 *
	 * @return Query_Failed_Response|\WP_Error|\WP_REST_Response
	 */
	private function restore( array $ids ) {
		$affected = 0;
		$failed = 0;

		foreach ( $ids as $id ) {
			$affected_rows = $this->query->restore( $id );

			if ( false === $affected_rows ) {
				$failed++;
			} else {
				$affected += $affected_rows;
			}
		}

		if ( count( $ids ) === $failed ) {
			return new Query_Failed_Response(
				$this->query->get_last_error()
			);
		}

		if ( 1 === count( $ids ) && 0 === $affected ) {
			return new \WP_Error(
				'rest_not_found',
				__( 'Submission not found or not in trash.', 'elementor-pro' ),
				[ 'status' => 404 ]
			);
		}

		return new \WP_REST_Response( [
			'data' => [],
			'meta' => [
				'affected' => $affected,
				'failed' => $failed,
			],
		], 200 );
	}

	public function __construct( $controller ) {
		$this->query = Query::get_instance();

		parent::__construct( $controller );
	}
}
