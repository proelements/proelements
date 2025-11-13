<?php
namespace ElementorPro\Modules\Forms\Submissions\Data\Endpoints;

use Elementor\Data\Base\Endpoint;
use Elementor\Core\Utils\Collection;
use ElementorPro\Modules\Forms\Submissions\Export\CSV_Export;
use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * This logic should be under index.php::get_items method, but for now
 * the Data JS API does not support sending Headers like `Accept: text/csv`.
 */
class Export extends Endpoint {
	const EXPORT_BY_IDS = 'ids';
	const EXPORT_BY_FILTER = 'filter';

	public function get_name() {
		return 'export';
	}

	protected function register() {
		$this->register_route(
			'',
			\WP_REST_Server::READABLE,
			function ( $request ) {
				return $this->base_callback( \WP_REST_Server::READABLE, $request, true );
			},
			array_merge( $this->controller->get_collection_params(), [
				'ids' => [
					'description' => 'Unique identifiers for the objects.',
					'type' => 'array',
					'items' => [
						'type' => 'integer',
					],
					'required' => false,
					'additionalProperties' => [
						'context' => 'filter',
					],
				],
				'format' => [
					'description' => 'The format of the export (for now only csv).',
					'types' => 'string',
					'enum' => [
						'csv',
					],
					'default' => 'csv',
					'required' => false,
				],
				'per_page' => [
					'description' => 'Maximum number of items to be returned in result set.',
					'type' => 'integer',
					'default' => 10,
					'minimum' => 1,
					'maximum' => 10000,
					'sanitize_callback' => 'absint',
					'validate_callback' => 'rest_validate_request_arg',
				],
			] )
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_items( $request ) {
		wp_raise_memory_limit( 'admin' );

		$submissions = new Collection(
			$this->get_submissions_by_filter( $request )
		);

		if ( 0 === $submissions->count() ) {
			return new \WP_Error(
				'nothing_to_export',
				__( 'There is nothing to export.', 'elementor-pro' ),
				[ 'status' => 400 ]
			);
		}

		$response = $submissions
			->group_by( 'element_id' )
			->map( function ( array $submissions_by_form ) {
				$exporter = new CSV_Export(
					new Collection( $submissions_by_form )
				);

				return $exporter->prepare_for_json_response();
			} );

		return new \WP_REST_Response([
			'data' => $response->values(),
		] );
	}

	/**
	 * Get submissions by filter.
	 *
	 * @param $request
	 *
	 * @return array|mixed
	 */
	private function get_submissions_by_filter( $request ) {
		$args = $request->get_attributes()['args'];

		$filters = ( new Collection( $request->get_query_params() ) )
			->filter(function ( $value, $key ) use ( $args ) {
				return isset( $args[ $key ]['additionalProperties']['context'] ) &&
					'filter' === $args[ $key ]['additionalProperties']['context'];
			})
			->map( function ( $value ) use ( $request ) {
				return [ 'value' => $value ];
			} )
			->all();

		return Query::get_instance()->get_submissions(
			[
				'page' => $request->get_param( 'page' ),
				'per_page' => $request->get_param( 'per_page' ),
				'filters' => $filters,
				'order' => [
					'order' => $request->get_param( 'order' ),
					'by' => $request->get_param( 'order_by' ),
				],
				'with_meta' => true,
			]
		)['data'];
	}
}
