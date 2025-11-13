<?php
namespace ElementorPro\Modules\Notes\Data\Endpoints;

use Elementor\Data\V2\Base\Endpoint;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Data\Http_Status;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Database\Query\Note_Query_Builder;
use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Read_Status_Endpoint extends Endpoint {
	/**
	 * @inheritDoc
	 */
	public function get_name() {
		return 'read-status';
	}

	/**
	 * @inheritDoc
	 */
	public function get_format() {
		return 'notes/read-status';
	}

	/**
	 * @inheritDoc
	 */
	protected function register() {
		$args = [
			'ids' => [
				'type' => 'array',
				'description' => 'The id\'s of the notes.',
				'items' => [
					'type' => 'integer',
				],
				'required' => true,
			],
		];

		$this->register_items_route( \WP_REST_Server::CREATABLE, $args );
		$this->register_items_route( \WP_REST_Server::DELETABLE, $args );
	}

	/**
	 * Mark notes as read by the current user.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 */
	protected function create_items( $request ) {
		$user_id = get_current_user_id();
		$notes = $this->get_notes(
			$request->get_param( 'ids' ),
			true
		);

		/** @var Note $note */
		foreach ( $notes as $note ) {
			$reader = $note->readers->find( function ( User $user ) use ( $user_id ) {
				return $user->ID === $user_id;
			} );

			if ( ! $reader ) {
				$note->add_readers( [ $user_id ] );
			}
		}

		return new \WP_REST_Response( [], Http_Status::CREATED );
	}

	/**
	 * Mark notes as unread by the current user.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 */
	protected function delete_items( $request ) {
		$user_id = get_current_user_id();
		$notes = $this->get_notes( $request->get_param( 'ids' ) );

		/** @var Note $note */
		foreach ( $notes as $note ) {
			$note->remove_readers( [ $user_id ] );
		}

		// TODO: Should return status 204 when the $e.data will support it
		return new \WP_REST_Response( [], Http_Status::OK );
	}

	/**
	 * @inheritDoc
	 */
	public function get_permission_callback( $request ) {
		$can_read_notes = false;

		foreach ( $this->get_notes( $request->get_param( 'ids' ) ) as $note ) {
			$can_read_notes = current_user_can( Capabilities::READ_NOTES, $note );

			if ( false === $can_read_notes ) {
				break;
			}
		}

		return $can_read_notes;
	}

	/**
	 * Get notes by their ids.
	 *
	 * @param array $ids
	 * @param bool $with_readers
	 *
	 * @return Collection
	 */
	private function get_notes( array $ids, $with_readers = false ) {
		return Note::query()
			->where_in( 'id', $ids )
			->when( $with_readers, function ( Note_Query_Builder $builder ) {
				return $builder->with_readers();
			} )
			->get();
	}
}
